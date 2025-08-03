import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if this is a request for sitemap or robots.txt (SEO-related files)
  const isSEOPath = pathname === '/sitemap.xml' || 
                   pathname === '/robots.txt' || 
                   pathname.startsWith('/api/') ||
                   pathname.startsWith('/_next/') ||
                   pathname.startsWith('/favicon');

  // Check if this is a search engine bot
  const userAgent = request.headers.get('user-agent') || '';
  const isSearchBot = /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebookexternalhit|twitterbot|linkedinbot/i.test(userAgent);

  // For SEO paths or search bots, add proper headers
  if (isSEOPath || isSearchBot) {
    const response = NextResponse.next();
    
    // Add headers to allow search engine crawling
    response.headers.set('X-Robots-Tag', 'index, follow');
    response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
