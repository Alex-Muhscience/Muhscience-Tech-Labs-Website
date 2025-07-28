import './globals.css';
import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/sonner';

// Metadata improvements
export const metadata: Metadata = {
  title: {
    default: 'CyberMuhscience iLabs',
    template: '%s | CyberMuhscience iLabs',
  },
  description: 'Leading provider of cybersecurity, software development, AI/ML, and full-stack web solutions.',
  keywords: [
    'cybersecurity',
    'AI solutions',
    'machine learning',
    'software development',
    'full-stack',
    'web development'
  ],
  authors: [{ name: 'CyberMuhscience Team' }],
  creator: 'CyberMuhscience iLabs',
  publisher: 'CyberMuhscience iLabs',
  metadataBase: new URL('https://www.cybermuhscience.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CyberMuhscience iLabs',
    description: 'Leading provider of cybersecurity and AI solutions',
    url: 'https://www.cybermuhscience.com',
    siteName: 'CyberMuhscience iLabs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CyberMuhscience iLabs',
    description: 'Leading provider of cybersecurity and AI solutions',
    images: ['/og-image.jpg'],
  },
};

// Viewport settings for responsive behavior
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className="scroll-smooth" // For smooth scrolling
    >
      <head />
      <body className="font-sans antialiased bg-background text-foreground min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" richColors />
          {/* Performance monitoring */}
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}