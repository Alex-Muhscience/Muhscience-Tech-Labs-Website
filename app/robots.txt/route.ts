import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const baseUrl = 'https://muhscience-tech-labs-website-alex-muhsciences-projects.vercel.app';

  const robotsTxt = `User-agent: *
Allow: /

# Important SEO files
Allow: /sitemap.xml
Allow: /robots.txt
Allow: /favicon.ico

# Block admin and API routes from crawling
Disallow: /api/
Disallow: /admin/
Disallow: /_next/

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Host
Host: ${baseUrl}`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
