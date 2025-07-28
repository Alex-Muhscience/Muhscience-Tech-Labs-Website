const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cybermuhscience';
const MONGODB_LOCAL_URI = process.env.MONGODB_LOCAL_URI || 'mongodb://localhost:27017/cybermuhscience';
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

console.log('Starting database connection test...');
console.log('MongoDB URI exists:', !!MONGODB_URI);
console.log('MongoDB URI length:', MONGODB_URI.length);
console.log('Local MongoDB URI:', MONGODB_LOCAL_URI);
console.log('Development mode:', IS_DEVELOPMENT);

async function tryConnection(uri, description) {
  console.log(`\nAttempting to connect to ${description}...`);
  
  const opts = {
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
  console.log('Host:', connection.connection.host);
  
  return connection.connection;
}

async function testConnection() {
  let connection;
  
  try {
    // First, try Atlas connection
    console.log('Trying MongoDB Atlas connection...');
    connection = await tryConnection(MONGODB_URI, 'MongoDB Atlas');
  } catch (atlasError) {
    console.warn('❌ Atlas connection failed:', {
      message: atlasError.message,
      code: atlasError.code,
    });
    
    if (IS_DEVELOPMENT) {
      try {
        console.log('🔄 Falling back to local MongoDB...');
        connection = await tryConnection(MONGODB_LOCAL_URI, 'Local MongoDB');
        console.log('⚠️ Using local MongoDB for development');
      } catch (localError) {
        console.error('❌ Local MongoDB connection also failed:', {
          message: localError.message,
        });
        
        console.log('🔄 Both connections failed');
        process.exit(1);
      }
    } else {
      console.error('❌ Production MongoDB connection failed');
      process.exit(1);
    }
  }
  
  try {
    // Test a simple query
    console.log('\nTesting database operations...');
    const collections = await connection.db.listCollections().toArray();
    console.log('Available collections:', collections.map(c => c.name));
    
    // Close the connection
    await mongoose.connection.close();
    console.log('✅ Connection closed successfully');
    console.log('\n🎉 Database test completed successfully!');
    
  } catch (error) {
    console.error('❌ Database operations failed:');
    console.error('Error message:', error.message);
    process.exit(1);
  }
}

testConnection();
