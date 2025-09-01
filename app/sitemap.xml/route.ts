import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Get the correct base URL for the current environment
  const host = request.headers.get('host') || 'muhscience-tech-labs-website.vercel.app';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;
  
  const currentDate = new Date().toISOString();
  
  // Define routes with their specific SEO properties
  const routes = [
    {
      path: '',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      path: '/about',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      path: '/services',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      path: '/projects',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      path: '/blog',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '0.8'
    },
    {
      path: '/careers',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      path: '/webinars',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      path: '/techinsights',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      path: '/faq',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.6'
    },
    {
      path: '/contact',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      path: '/privacy',
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.3'
    },
    {
      path: '/terms',
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.3'
    },
    {
      path: '/security',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.5'
    },
    {
      path: '/auth/login',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.4'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
    },
  });
}
