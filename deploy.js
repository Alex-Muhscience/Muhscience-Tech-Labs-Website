#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting production deployment process...\n');

// Check if .env file exists
if (!fs.existsSync('.env')) {
  console.error('❌ Error: .env file not found!');
  console.log('Please create a .env file based on .env.example');
  process.exit(1);
}

// Check Node.js version
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);

if (majorVersion < 18) {
  console.error('❌ Error: Node.js 18 or higher is required!');
  console.log(`Current version: ${nodeVersion}`);
  console.log('Please upgrade Node.js: https://nodejs.org/');
  process.exit(1);
}

console.log(`✅ Node.js version: ${nodeVersion}`);

try {
  // Install dependencies
  console.log('\n📦 Installing dependencies...');
  execSync('npm ci --production=false', { stdio: 'inherit' });

  // Run type checking
  console.log('\n🔍 Running type checking...');
  execSync('npx tsc --noEmit', { stdio: 'inherit' });

  // Build the application
  console.log('\n🏗️  Building the application...');
  execSync('npm run build', { stdio: 'inherit' });

  // Check if build was successful
  if (!fs.existsSync('.next')) {
    throw new Error('Build failed - .next directory not found');
  }

  console.log('\n✅ Build completed successfully!');
  console.log('\n🎯 Next steps:');
  console.log('1. Set up your production database (MongoDB)');
  console.log('2. Configure your environment variables');
  console.log('3. Deploy to your hosting platform');
  console.log('4. Set up SSL certificate');
  console.log('5. Configure domain DNS');
  
  console.log('\n📋 Deployment checklist:');
  console.log('□ Database connection string updated');
  console.log('□ JWT secret configured');
  console.log('□ SMTP settings configured');
  console.log('□ Domain configured');
  console.log('□ SSL certificate installed');
  console.log('□ Analytics tracking set up');

} catch (error) {
  console.error('\n❌ Deployment failed:', error.message);
  process.exit(1);
}
