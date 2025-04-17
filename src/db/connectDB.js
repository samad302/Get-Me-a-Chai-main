import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in .env.local');
}

// Connection caching
let cached = global.mongoose || { conn: null, promise: null };

const DB_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false,
  serverSelectionTimeoutMS: 3000,
  socketTimeoutMS: 10000,
  maxPoolSize: 1, // Single connection for serverless
  retryWrites: true,
  connectTimeoutMS: 3000,
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

// Serverless cleanup
if (process.env.VERCEL_ENV) {
  process.on('beforeExit', async () => {
    if (mongoose.connection.readyState === 1) {
      await mongoose.disconnect();
      cached.conn = null;
      cached.promise = null;
    }
  });
}

export default connectDB;