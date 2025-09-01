import mysql from 'mysql2/promise';
import { env, isDevelopment } from '@/lib/env';
import { DB_CONNECTION } from '@/lib/constants';

// Type for our cached MariaDB connection
interface MariaDBCache {
  conn: mysql.Connection | null;
  promise: Promise<mysql.Connection> | null;
}

// Extend the global type with our MariaDB cache
declare global {
  var mariadb: MariaDBCache;
}

// Use validated environment variables
const MARIADB_HOST = env.MARIADB_HOST || 'localhost';
const MARIADB_PORT = env.MARIADB_PORT || 3306;
const MARIADB_USER = env.MARIADB_USER || 'root';
const MARIADB_PASSWORD = env.MARIADB_PASSWORD || '';
const MARIADB_DATABASE = env.MARIADB_DATABASE || 'cybermuhscience';

if (!MARIADB_PASSWORD && !isDevelopment) {
  throw new Error('Please define the MARIADB_PASSWORD environment variable for production');
}

if (isDevelopment) {
  console.log(`Attempting to connect to MariaDB at ${MARIADB_HOST}:${MARIADB_PORT}`);
}

// Initialize the global cache if it doesn't exist
const cached: MariaDBCache = global.mariadb || { conn: null, promise: null };
global.mariadb = cached;

async function connectDB(): Promise<mysql.Connection> {
  if (cached.conn) {
    // Test if connection is still alive
    try {
      await cached.conn.ping();
      return cached.conn;
    } catch (error) {
      // Connection is dead, reset cache
      cached.conn = null;
      cached.promise = null;
    }
  }

  if (!cached.promise) {
    cached.promise = mysql.createConnection({
      host: MARIADB_HOST,
      port: Number(MARIADB_PORT),
      user: MARIADB_USER,
      password: MARIADB_PASSWORD,
      database: MARIADB_DATABASE,
      connectTimeout: DB_CONNECTION.SERVER_SELECTION_TIMEOUT_MS,
      ssl: isDevelopment ? undefined : {
        rejectUnauthorized: false
      }
    });
  }

  try {
    cached.conn = await cached.promise;
    if (isDevelopment) {
      console.log('✅ MariaDB connection established successfully');
    }
  } catch (e) {
    console.error('MariaDB connection failed:', e);
    cached.promise = null;
    throw e;
  }

  // Ensure the cache is stored globally
  global.mariadb = cached;

  return cached.conn;
}

// Initialize database tables if they don't exist
export async function initializeDatabase(): Promise<void> {
  const connection = await connectDB();
  
  // Create contacts table
  await connection.execute(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      email VARCHAR(255) NOT NULL,
      subject VARCHAR(100) NOT NULL,
      message TEXT NOT NULL,
      status ENUM('pending', 'read', 'responded') DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_email (email),
      INDEX idx_status (status),
      INDEX idx_created_at (created_at)
    )
  `);

  // Create blog_posts table
  await connection.execute(`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      excerpt TEXT,
      content LONGTEXT NOT NULL,
      author VARCHAR(100) NOT NULL,
      category VARCHAR(50) NOT NULL,
      tags JSON,
      featured_image VARCHAR(500),
      status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
      published_at TIMESTAMP NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_slug (slug),
      INDEX idx_status (status),
      INDEX idx_category (category),
      INDEX idx_published_at (published_at)
    )
  `);

  // Create projects table
  await connection.execute(`
    CREATE TABLE IF NOT EXISTS projects (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      description TEXT NOT NULL,
      long_description LONGTEXT,
      client VARCHAR(100) NOT NULL,
      industry VARCHAR(50) NOT NULL,
      services JSON,
      technologies JSON,
      challenges TEXT,
      solutions TEXT,
      results TEXT,
      timeline_start DATE,
      timeline_end DATE,
      featured_image VARCHAR(500),
      gallery JSON,
      testimonial_author VARCHAR(100),
      testimonial_content TEXT,
      testimonial_position VARCHAR(100),
      status ENUM('draft', 'published', 'featured') DEFAULT 'draft',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_slug (slug),
      INDEX idx_status (status),
      INDEX idx_industry (industry),
      INDEX idx_client (client)
    )
  `);

  if (isDevelopment) {
    console.log('✅ Database tables initialized successfully');
  }
}

// Database query helpers
export class DatabaseQueries {
  static async createContact(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) {
    const connection = await connectDB();
    const [result] = await connection.execute(
      'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)',
      [data.name, data.email, data.subject, data.message]
    );
    return result;
  }

  static async getContacts(status?: string) {
    const connection = await connectDB();
    let query = 'SELECT * FROM contacts';
    const params: any[] = [];
    
    if (status) {
      query += ' WHERE status = ?';
      params.push(status);
    }
    
    query += ' ORDER BY created_at DESC';
    
    const [rows] = await connection.execute(query, params);
    return rows;
  }

  static async createBlogPost(data: {
    title: string;
    slug: string;
    excerpt?: string;
    content: string;
    author: string;
    category: string;
    tags?: string[];
    featured_image?: string;
    status?: 'draft' | 'published' | 'archived';
    published_at?: Date;
  }) {
    const connection = await connectDB();
    const [result] = await connection.execute(
      `INSERT INTO blog_posts 
       (title, slug, excerpt, content, author, category, tags, featured_image, status, published_at) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.title,
        data.slug,
        data.excerpt || null,
        data.content,
        data.author,
        data.category,
        data.tags ? JSON.stringify(data.tags) : null,
        data.featured_image || null,
        data.status || 'draft',
        data.published_at || null
      ]
    );
    return result;
  }

  static async getBlogPosts(status: string = 'published', limit?: number) {
    const connection = await connectDB();
    let query = 'SELECT * FROM blog_posts WHERE status = ? ORDER BY published_at DESC';
    const params: any[] = [status];
    
    if (limit) {
      query += ' LIMIT ?';
      params.push(limit);
    }
    
    const [rows] = await connection.execute(query, params);
    return rows;
  }

  static async getBlogPostBySlug(slug: string) {
    const connection = await connectDB();
    const [rows] = await connection.execute(
      'SELECT * FROM blog_posts WHERE slug = ? AND status = "published"',
      [slug]
    );
    return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
  }
}

export default connectDB;
