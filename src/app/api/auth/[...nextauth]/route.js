import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import User from '@/models/User';
import connectDB from '@/db/connectDB';

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: { params: { scope: 'user:email' } },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: 'openid email profile',
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
        if (!user?.email) {
          throw new Error("Email required for authentication");
        }

        // Fast user data preparation before DB
        const userData = {
          email: user.email,
          name: user.name || profile?.name || profile?.login || 'User',
          profilePic: user.image || profile?.picture || profile?.avatar_url || '',
          provider: account.provider,
          providerId: user.id
        };

        // Connect with timeout
        await Promise.race([
          connectDB(),
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error('DB connection timeout')), 3000)
          )
        ]);

        // Upsert operation (atomic)
        await User.updateOne(
          { email: user.email },
          { $setOnInsert: userData },
          { upsert: true }
        );

        return true;
      } catch (error) {
        console.error("SignIn Error:", error.message);
        return `/login?error=${encodeURIComponent(
          error.message.includes('timeout') 
            ? 'Connection timeout - please try again' 
            : 'Authentication failed'
        )}`;
      }
    },
    async session({ session }) {
      if (session?.user?.email) {
        try {
          // Fast session data with timeout
          const dbUser = await Promise.race([
            User.findOne({ email: session.user.email })
              .select('username name profilePic provider')
              .maxTimeMS(2000)
              .lean(),
            new Promise((_, reject) => 
              setTimeout(() => reject(new Error('Session data timeout')), 2500)
            )
          ]);
          
          if (dbUser) {
            session.user.username = dbUser.username;
            session.user.name = dbUser.name;
            session.user.image = dbUser.profilePic;
            session.user.provider = dbUser.provider;
          }
        } catch (error) {
          console.error("Session callback error:", error.message);
          // Session still works without DB data
        }
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
      }
      return token;
    }
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };