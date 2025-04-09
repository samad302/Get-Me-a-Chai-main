import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import User from '@/models/User';
import connectDB from '@/db/connectDB';

// Validate critical environment variables
const requiredEnvVars = [
  'GITHUB_CLIENT_ID',
  'GITHUB_CLIENT_SECRET',
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
  'NEXTAUTH_SECRET',
  'NEXTAUTH_URL'
];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/github`,
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
          response_type: "code"
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

        // For Google provider, ensure email is verified
        if (account.provider === "google" && !profile.email_verified) {
          throw new Error("Google email not verified");
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
            profilePic: user.image || profile?.avatar_url || profile?.picture || '',
            provider: account.provider
          });
        }
        
        return true;
      } catch (error) {
        console.error("Authentication Error:", error);
        return `/login?error=${encodeURIComponent(error.message || "Authentication failed")}`;
      }
    },
    async session({ session }) {
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
        return session;
      } catch (error) {
        console.error("Session Error:", error);
        return session;
      }
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.provider = account.provider;
      }
      return token;
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };