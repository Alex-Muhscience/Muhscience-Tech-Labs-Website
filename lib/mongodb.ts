import mongoose, { ConnectOptions, Connection } from 'mongoose';

// Type for our cached MongoDB connection
interface MongooseCache {
  conn: Connection | null;
  promise: Promise<Connection> | null;
}

// Extend the global type with our mongoose cache
declare global {
  var mongoose: MongooseCache;
}

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cybermuhscience';
const MONGODB_LOCAL_URI = process.env.MONGODB_LOCAL_URI || 'mongodb://localhost:27017/cybermuhscience';
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

// Log the URI for debugging (hide password)
const sanitizedURI = MONGODB_URI.replace(/:\/\/([^:]+):([^@]+)@/, '://[USERNAME]:[PASSWORD]@');
console.log('MongoDB URI configured:', sanitizedURI);
console.log('Local MongoDB URI:', MONGODB_LOCAL_URI);
console.log('Development mode:', IS_DEVELOPMENT);

// Initialize the global cache if it doesn't exist
let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

async function tryConnection(uri: string, description: string): Promise<Connection> {
  console.log(`Attempting to connect to ${description}...`);
  
  const opts: ConnectOptions = {
    bufferCommands: false,
    serverSelectionTimeoutMS: 5000, // 5 second timeout
    socketTimeoutMS: 45000,
  };

  // Close any existing connection first
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }

  const connection = await mongoose.connect(uri, opts);
  console.log(`✅ ${description} connection established successfully`);
  console.log('Connection readyState:', connection.connection.readyState);
  console.log('Database name:', connection.connection.name);
  
  return connection.connection;
}

async function connectDB(): Promise<Connection> {
  console.log('connectDB called - checking existing connection...');
  
  if (cached.conn) {
    console.log('Using existing database connection');
    return cached.conn;
  }

  if (!cached.promise) {
    console.log('Creating new database connection...');
    
    cached.promise = (async () => {
      let connection: Connection;
      
      try {
        // First, try Atlas connection
        console.log('Trying MongoDB Atlas connection...');
        connection = await tryConnection(MONGODB_URI, 'MongoDB Atlas');
      } catch (atlasError) {
        console.warn('❌ Atlas connection failed:', {
          message: atlasError instanceof Error ? atlasError.message : 'Unknown error',
          code: atlasError instanceof Error && 'code' in atlasError ? atlasError.code : undefined,
        });
        
        if (IS_DEVELOPMENT) {
          try {
            console.log('🔄 Falling back to local MongoDB...');
            connection = await tryConnection(MONGODB_LOCAL_URI, 'Local MongoDB');
            console.log('⚠️ Using local MongoDB for development');
          } catch (localError) {
            console.error('❌ Local MongoDB connection also failed:', {
              message: localError instanceof Error ? localError.message : 'Unknown error',
            });
            
            // If both fail, create in-memory mock data for development
            console.log('🔄 Both connections failed, using mock data mode');
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
    console.log('Awaiting database connection promise...');
    cached.conn = await cached.promise;
    console.log('Database connection cached successfully');
  } catch (e) {
    console.error('Error while establishing database connection:', e);
    cached.promise = null;
    throw e;
  }

  // Ensure the cache is stored globally
  global.mongoose = cached;

  return cached.conn;
}

export default connectDB;