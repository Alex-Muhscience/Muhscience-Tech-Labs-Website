import './globals.css';
import type { Metadata, Viewport } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { DetailedHeader } from '@/components/DetailedHeader';

// Get the correct base URL for metadata
const getBaseUrl = () => {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  return 'https://muhscience-tech-labs-website.vercel.app'; // fallback to your correct Vercel domain
};

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: 'Muhscience Tech Labs - Leading Cybersecurity & Technology Solutions',
    template: '%s | Muhscience Tech Labs'
  },
  description: 'Transform your business with cutting-edge cybersecurity, cloud solutions, and AI-powered innovations. Trusted by 500+ companies across East Africa. 24/7 SOC, penetration testing, and digital transformation services.',
  keywords: [
    'cybersecurity services',
    'penetration testing',
    'SOC monitoring',
    'cloud solutions',
    'AI machine learning',
    'software development', 
    'digital transformation',
    'East Africa',
    'Kenya cybersecurity',
    'IT consulting',
    'security audit',
    'incident response',
    'threat intelligence',
    'compliance consulting'
  ],
  authors: [{ name: 'Muhscience Tech Labs', url: 'https://cybermuhscience.com' }],
  creator: 'Muhscience Tech Labs',
  publisher: 'Muhscience Tech Labs Ltd',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: getBaseUrl(),
    title: 'Muhscience Tech Labs - Leading Cybersecurity & Technology Solutions',
    description: 'Transform your business with cutting-edge cybersecurity, cloud solutions, and AI-powered innovations. Trusted by 500+ companies across East Africa.',
    siteName: 'Muhscience Tech Labs',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhscience Tech Labs - Cybersecurity & Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhscience Tech Labs - Leading Cybersecurity & Technology Solutions',
    description: 'Transform your business with cutting-edge cybersecurity, cloud solutions, and AI-powered innovations. Trusted by 500+ companies across East Africa.',
    images: ['/images/twitter-image.jpg'],
    creator: '@muhsciencetech',
    site: '@muhsciencetech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  classification: 'Cybersecurity Services, Technology Consulting',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Muhscience Tech Labs',
    'msapplication-TileColor': '#1e3a8a',
    'msapplication-TileImage': '/images/ms-icon-144x144.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

interface RootLayoutProps {
  children: React.ReactNode;
}



export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen bg-brand-bg font-sans antialiased" suppressHydrationWarning>
        <div className="relative flex min-h-screen flex-col" suppressHydrationWarning>
          <DetailedHeader />
          <main className="flex-1" suppressHydrationWarning>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
