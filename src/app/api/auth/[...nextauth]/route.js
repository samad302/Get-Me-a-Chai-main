import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import User from '@/models/User';
import connectDB from '@/db/connectDB';

// Enhanced environment validation
const validateEnv = () => {
  const requiredEnvVars = [
    'GITHUB_CLIENT_ID',
    'GITHUB_CLIENT_SECRET',
    'GOOGLE_CLIENT_ID',
    'GOOGLE_CLIENT_SECRET',
    'NEXTAUTH_SECRET',
    'NEXTAUTH_URL'
  ];

  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }

  // Validate URL format
  if (process.env.NODE_ENV === 'production' && !process.env.NEXTAUTH_URL?.startsWith('https://')) {
    throw new Error('NEXTAUTH_URL must use HTTPS in production');
  }
};
validateEnv();

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/github`,
          scope: 'user:email', // Ensure we get email scope
        },
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/google`,
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: 'openid email profile', // Explicitly request required scopes
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await connectDB();
        
        if (!user?.email) {
          throw new Error("Email required for authentication");
        }

        // Enhanced provider-specific validation
        if (account.provider === "google") {
          if (!profile.email_verified) {
            throw new Error("Google email not verified");
          }
          // Ensure we have profile picture from Google
          user.image = user.image || profile.picture;
        } else if (account.provider === "github") {
          // Ensure we have profile picture from GitHub
          user.image = user.image || profile.avatar_url;
        }

        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          const username = account.provider === 'github' 
            ? profile?.login 
            : user.email.split('@')[0].replace(/[^a-zA-Z0-9_]/g, '_');
            
          await User.create({
            providerId: user.id,
            email: user.email,
            name: user.name || profile?.name || profile?.login || 'User',
            username: username.substring(0, 20),
            profilePic: user.image || '',
            provider: account.provider
          });
        }
        
        return true;
      } catch (error) {
        console.error("Authentication Error:", error);
        // Return URL with encoded error message
        const errorMessage = error.message.includes("redirect_uri") 
          ? "Authentication configuration error - please contact support"
          : error.message || "Authentication failed";
        return `/login?error=${encodeURIComponent(errorMessage)}`;
      }
    },
    async session({ session, token }) {
      try {
        await connectDB();
        if (session?.user?.email) {
          const dbUser = await User.findOne({ email: session.user.email })
            .select('_id username name profilePic provider')
            .lean();
            
          if (dbUser) {
            session.user.id = dbUser._id.toString();
            session.user.username = dbUser.username;
            session.user.name = dbUser.name;
            session.user.image = dbUser.profilePic;
            session.user.provider = dbUser.provider;
          }
        }
        // Add token data to session
        if (token) {
          session.error = token.error;
        }
        return session;
      } catch (error) {
        console.error("Session Error:", error);
        session.error = "Session error";
        return session;
      }
    },
    async jwt({ token, user, account, profile, trigger, session }) {
      // Persist user data in token
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      if (account) {
        token.provider = account.provider;
      }
      // Handle session updates
      if (trigger === "update" && session?.user) {
        token.name = session.user.name;
        token.picture = session.user.image;
      }
      return token;
    }
  },
  // Additional security settings
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };