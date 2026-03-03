import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Get correct base URL for current environment
  const host = request.headers.get('host') || 'muhscience-tech-labs-website.vercel.app';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;
  
  const currentDate = new Date().toISOString();
  
  // Sample insights data - this would typically come from a CMS or database
  const insights = [
    {
      slug: '5-signs-business-needs-custom-systems-automation',
      lastmod: currentDate,
      priority: '0.8'
    },
    {
      slug: 'roi-process-automation-smes',
      lastmod: currentDate,
      priority: '0.8'
    },
    {
      slug: 'technical-seo-vs-traditional-seo',
      lastmod: currentDate,
      priority: '0.7'
    },
    {
      slug: 'building-scalable-web-platforms-systems-approach',
      lastmod: currentDate,
      priority: '0.7'
    },
    {
      slug: 'crm-integration-strategies-seamless-operations',
      lastmod: currentDate,
      priority: '0.6'
    },
    {
      slug: 'measuring-success-kpis-business-systems',
      lastmod: currentDate,
      priority: '0.6'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${insights
  .map(
    (insight) => `  <url>
    <loc>${baseUrl}/insights/${insight.slug}</loc>
    <lastmod>${insight.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${insight.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
