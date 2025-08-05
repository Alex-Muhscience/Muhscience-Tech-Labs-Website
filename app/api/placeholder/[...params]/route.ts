import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ params: string[] }> }
) {
  try {
    const resolvedParams = await params;
    const [width, height] = resolvedParams.params;
    const w = parseInt(width) || 200;
    const h = parseInt(height) || 200;
    
    // Create a simple SVG placeholder
    const svg = `
      <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f3f4f6"/>
        <rect x="20%" y="30%" width="60%" height="40%" rx="50%" fill="#d1d5db"/>
        <circle cx="50%" cy="45%" r="12%" fill="#9ca3af"/>
        <rect x="35%" y="55%" width="30%" height="8%" rx="4%" fill="#9ca3af"/>
        <text x="50%" y="85%" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#6b7280">
          ${w}×${h}
        </text>
      </svg>
    `;

    return new NextResponse(svg, {
      status: 200,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    console.error('Error generating placeholder:', error);
    return NextResponse.json({ error: 'Failed to generate placeholder' }, { status: 500 });
  }
}
