import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Get the correct base URL for the current environment
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_SITE_URL 
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'https://muhscience-tech-labs-website.vercel.app' // fallback to your correct Vercel domain
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // API routes
          '/admin/',         // Admin dashboard
          '/_next/',         // Next.js internal files
          '/middleware.js',  // Middleware files
          '/*.json',         // JSON files (except manifest)
          '/sitemap-test',   // Test pages
          '/auth/admin',     // Admin auth pages
        ],
        crawlDelay: 10,      // Be respectful to server resources
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/auth/admin',
        ],
        crawlDelay: 5,       // Faster for Google
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/auth/admin',
        ],
        crawlDelay: 5,
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',          // Allow Facebook scraping for social sharing
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',          // Allow Twitter scraping for social sharing
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',          // Allow LinkedIn scraping for social sharing
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
