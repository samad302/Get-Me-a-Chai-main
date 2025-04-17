import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import User from '@/models/User';
import connectDB from '@/db/connectDB';

// Timeout utility function
const withTimeout = (promise, ms) => {
  return Promise.race([
    promise,
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error(`Operation timed out after ${ms}ms`)), ms)
    )
  ]);
};

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
        // Basic validation
        if (!user?.email) {
          throw new Error("Email required for authentication");
        }

        // Prepare user data before DB operations
        const userData = {
          email: user.email,
          name: user.name || profile?.name || 'User',
          profilePic: user.image || profile?.picture || '',
          provider: account.provider,
          providerId: user.id
        };

        // Attempt DB connection with timeout
        try {
          await withTimeout(connectDB(), 3000);
        } catch (err) {
          console.error("DB connection timeout:", err.message);
          // Allow login without DB write
          return true;
        }

        // Fire-and-forget user upsert
        User.updateOne(
          { email: user.email },
          { $setOnInsert: userData },
          { upsert: true }
        ).catch(err => console.error("User upsert error:", err));

        return true;
      } catch (error) {
        console.error("SignIn Error:", error.message);
        return true; // Always allow login
      }
    },
    async session({ session }) {
      if (session?.user?.email) {
        try {
          const dbUser = await withTimeout(
            User.findOne({ email: session.user.email })
              .select('username name profilePic provider')
              .lean(),
            2000
          );
          
          if (dbUser) {
            session.user = { ...session.user, ...dbUser };
          }
        } catch (err) {
          console.error("Session DB error:", err.message);
        }
      }
      return session;
    }
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  debug: process.env.NODE_ENV === 'development',
};

export const config = {
  runtime: 'nodejs', // Explicitly set runtime
  api: {
    externalResolver: true,
    bodyParser: false
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };