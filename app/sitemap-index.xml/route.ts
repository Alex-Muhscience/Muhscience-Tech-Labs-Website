import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Get correct base URL for current environment
  const host = request.headers.get('host') || 'muhscience-tech-labs-website.vercel.app';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;
  
  const currentDate = new Date().toISOString();
  
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-case-studies.xml</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-insights.xml</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
