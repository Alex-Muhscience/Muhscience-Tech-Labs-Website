import mongoose, { ConnectOptions, Connection } from 'mongoose';
import { env, isDevelopment } from '@/lib/env';
import { DB_CONNECTION } from '@/lib/constants';

// Type for our cached MongoDB connection
interface MongooseCache {
  conn: Connection | null;
  promise: Promise<Connection> | null;
}

// Extend the global type with our mongoose cache
declare global {
  var mongoose: MongooseCache;
}

// Use validated environment variables
const MONGODB_URI = env.MONGODB_URI;
const MONGODB_LOCAL_URI = env.MONGODB_LOCAL_URI || 'mongodb://localhost:27017/cybermuhscience';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

// Log the URI for debugging (hide password)
const sanitizedURI = MONGODB_URI.replace(/:\/\/([^:]+):([^@]+)@/, '://[USERNAME]:[PASSWORD]@');
console.log('Attempting to connect to MongoDB');

// Initialize the global cache if it doesn't exist
let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

async function tryConnection(uri: string, description: string): Promise<Connection> {
  if (isDevelopment) {
    console.log(`Attempting to connect to ${description}...`);
  }
  
  const opts: ConnectOptions = {
    bufferCommands: false,
    serverSelectionTimeoutMS: DB_CONNECTION.SERVER_SELECTION_TIMEOUT_MS,
    socketTimeoutMS: DB_CONNECTION.SOCKET_TIMEOUT_MS,
  };

  // Close any existing connection first
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }

  const connection = await mongoose.connect(uri, opts);
  if (isDevelopment) {
    console.log(`✅ ${description} connection established successfully`);
  }
  
  return connection.connection;
}

async function connectDB(): Promise<Connection> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = (async () => {
      let connection: Connection;
      
      try {
        // First, try Atlas connection
        connection = await tryConnection(MONGODB_URI, 'MongoDB Atlas');
      } catch (atlasError) {
        if (isDevelopment) {
          console.warn('Atlas connection failed, trying local MongoDB...');
          try {
            connection = await tryConnection(MONGODB_LOCAL_URI, 'Local MongoDB');
          } catch (localError) {
            console.error('Both Atlas and local MongoDB connections failed');
            throw new Error('Unable to connect to any MongoDB instance. Please ensure MongoDB is running locally or check your Atlas connection.');
          }
        } else {
          // In production, only try Atlas
          throw atlasError;
        }
      }
      
      return connection!;
    })();
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    console.error('Database connection failed:', e);
    cached.promise = null;
    throw e;
  }

  // Ensure the cache is stored globally
  global.mongoose = cached;

  return cached.conn;
}

export default connectDB;