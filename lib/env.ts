// Simple environment configuration without validation for now
// This avoids build-time errors while maintaining functionality

export const env = {
  // MariaDB Configuration
  MARIADB_HOST: process.env.MARIADB_HOST || 'localhost',
  MARIADB_PORT: process.env.MARIADB_PORT || '3306',
  MARIADB_USER: process.env.MARIADB_USER || 'root',
  MARIADB_PASSWORD: process.env.MARIADB_PASSWORD || '',
  MARIADB_DATABASE: process.env.MARIADB_DATABASE || 'cybermuhscience',
  
  // Application Configuration
  JWT_SECRET: process.env.JWT_SECRET || 'fallback-jwt-secret-for-development-only',
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001',
  NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
  
  // Email Configuration
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS,
  
  // Environment
  NODE_ENV: (process.env.NODE_ENV as 'development' | 'test' | 'production') || 'development',
};

// Type-safe environment variables
export type Env = typeof env;

// Utility functions
export const isDevelopment = env.NODE_ENV === 'development';
export const isProduction = env.NODE_ENV === 'production';
export const isTest = env.NODE_ENV === 'test';

// Site configuration
export const siteConfig = {
  name: 'Muhscience Tech Labs',
  description: 'Leading cybersecurity and technology solutions provider',
  url: env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001',
  ogImage: `${env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'}/images/og-image.png`,
} as const;
