import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Get correct base URL for current environment
  const host = request.headers.get('host') || 'muhscience-tech-labs-website.vercel.app';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;
  
  const currentDate = new Date().toISOString();
  
  // Sample case studies data - this would typically come from a CMS or database
  const caseStudies = [
    {
      slug: 'publishing-workflow-automation',
      lastmod: currentDate,
      priority: '0.8'
    },
    {
      slug: 'learning-management-system-integration',
      lastmod: currentDate,
      priority: '0.8'
    },
    {
      slug: 'custom-crm-implementation',
      lastmod: currentDate,
      priority: '0.7'
    },
    {
      slug: 'business-process-optimization',
      lastmod: currentDate,
      priority: '0.7'
    },
    {
      slug: 'technical-seo-audit',
      lastmod: currentDate,
      priority: '0.6'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${caseStudies
  .map(
    (caseStudy) => `  <url>
    <loc>${baseUrl}/case-studies/${caseStudy.slug}</loc>
    <lastmod>${caseStudy.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${caseStudy.priority}</priority>
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
