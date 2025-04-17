import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in .env.local');
}

if (!/^mongodb(\+srv)?:\/\//i.test(MONGODB_URI)) {
  throw new Error('Invalid MongoDB URI format');
}

let cached = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

const DB_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 20000,
  maxPoolSize: 3,
  minPoolSize: 1,
  retryWrites: true,
  w: 'majority',
  connectTimeoutMS: 8000,
};

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, DB_OPTIONS)
      .then(mongoose => mongoose)
      .catch(err => {
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

// Serverless connection cleanup
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