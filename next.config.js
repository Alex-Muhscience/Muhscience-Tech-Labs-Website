/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true 
  },
  // Development server configuration
  devServer: (config) => {
    return {
      ...config,
      port: 3001
    }
  }
};

module.exports = nextConfig;