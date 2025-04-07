// mongodb.ts
import mongoose, { ConnectOptions } from 'mongoose';

// Type for our cached MongoDB connection
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extend the global type with our mongoose cache
declare global {
  var mongoose: MongooseCache;
}

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cybermuhscience';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

// Initialize the global cache if it doesn't exist
let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: ConnectOptions = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  // Ensure the cache is stored globally
  global.mongoose = cached;

  return cached.conn;
}

export default connectDB;