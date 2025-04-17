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
          throw new Error("Email required");
        }

        // Fast user data preparation
        const userData = {
          email: user.email,
          name: user.name || profile?.name || 'User',
          profilePic: user.image || '',
          provider: account.provider
        };

        // Attempt connection with timeout
        try {
          await Promise.race([
            connectDB(),
            new Promise((_, reject) => 
              setTimeout(() => reject(new Error('DB timeout')), 2500)
          ]);
        } catch (err) {
          console.error("Connection attempt failed:", err.message);
          // Allow login without DB (session will still work)
          return true;
        }

        // Upsert user without waiting (fire-and-forget)
        User.updateOne(
          { email: user.email },
          { $setOnInsert: userData },
          { upsert: true }
        ).catch(err => console.error("User upsert failed:", err));

        return true;
      } catch (error) {
        console.error("SignIn Error:", error.message);
        return true; // Always allow login attempt
      }
    },
    async session({ session }) {
      if (session?.user?.email) {
        try {
          const dbUser = await User.findOne({ email: session.user.email })
            .select('username name profilePic provider')
            .maxTimeMS(2000)
            .lean()
            .catch(() => null);
          
          if (dbUser) {
            session.user = { ...session.user, ...dbUser };
          }
        } catch (err) {
          console.error("Session DB error:", err.message);
        }
      }
      return session;
    }
  }
};

export const config = {
  api: {
    externalResolver: true,
  },
};

export default NextAuth(authOptions);