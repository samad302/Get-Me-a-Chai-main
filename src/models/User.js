import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    providerId: { type: String }, // For OAuth providers
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    profilePic: { type: String, default: "" }, // Changed from profilepic to profilePic for consistency
    coverPic: { type: String, default: "" }, // Changed from coverpic to coverPic
    emailVerified: { type: Date }, // Required for NextAuth
    image: { type: String }, // Alternative field name for NextAuth compatibility
    provider: { type: String }, // To track which OAuth provider was used
  },
  {
    timestamps: true,
  }
);

// Add indexes for better performance
userSchema.index({ email: 1 });
userSchema.index({ username: 1 });
userSchema.index({ providerId: 1 });

// Prevent model overwrite in development
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;