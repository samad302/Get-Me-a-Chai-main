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
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    error: '/login', // Custom error page
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await connectDB();
        
        // Ensure we have an email
        if (!user?.email) {
          throw new Error("No email found in OAuth profile");
        }

        // Check if user exists
        const currentUser = await User.findOne({ email: user.email });

        // Create new user if doesn't exist
        if (!currentUser) {
          const newUser = await User.create({
            providerId: user.id,
            email: user.email,
            name: user.name || profile?.name || profile?.login || 'Unknown',
            username: account.provider === 'github' 
              ? profile?.login 
              : user.email.split('@')[0],
            profilePic: user.image || profile?.avatar_url || '',
            provider: account.provider
          });
          
          if (!newUser) {
            throw new Error("Failed to create user");
          }
        }
        
        return true; // Always return true to allow sign in
      } catch (error) {
        console.error("SignIn error:", error);
        // Return a URL to redirect to on error
        return `/login?error=${encodeURIComponent(error.message)}`;
      }
    },
    async session({ session }) {
      try {
        await connectDB();
        if (session?.user?.email) {
          const dbUser = await User.findOne({ email: session.user.email });
          if (dbUser) {
            session.user.id = dbUser._id.toString();
            session.user.username = dbUser.username;
          }
        }
        return session;
      } catch (error) {
        console.error("Session error:", error);
        return session;
      }
    },
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };