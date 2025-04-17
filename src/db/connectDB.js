import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in .env.local');
}

// Cache connection
let cached = global.mongoose || { conn: null, promise: null };

const DB_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false,
  serverSelectionTimeoutMS: 3000, // 3 seconds
  socketTimeoutMS: 10000, // 10 seconds
  maxPoolSize: 1, // Single connection for serverless
  retryWrites: true,
  retryReads: true,
  connectTimeoutMS: 3000, // 3 seconds
};

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, DB_OPTIONS)
      .then(mongoose => {
        console.log('MongoDB connected');
        return mongoose;
      })
      .catch(err => {
        console.error('MongoDB connection error:', err.message);
        cached.promise = null;
        throw err;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    throw err;
  }

  return cached.conn;
}

// Close connection on Vercel shutdown
if (process.env.VERCEL) {
  process.on('beforeExit', async () => {
    if (cached.conn) {
      await cached.conn.disconnect();
      cached.conn = null;
      cached.promise = null;
    }
  });
}

export default connectDB;