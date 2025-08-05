import './globals.css';
import type { Metadata, Viewport } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { organizationSchema, websiteSchema, generateJsonLd } from '@/lib/seo/structured-data';
import { ClientProviders } from '@/components/client-providers';

// Enhanced SEO metadata
export const metadata: Metadata = {
  title: {
    default: 'Muhscience Tech Labs - Leading Cybersecurity & AI Solutions Provider',
    template: '%s | Muhscience Tech Labs - Cybersecurity & AI Experts',
  },
  description: 'Transform your business with Muhscience Tech Labs. We provide enterprise-grade cybersecurity solutions, AI/ML development, full-stack software development, and innovation labs. 500+ successful projects, 99.9% uptime guarantee.',
  keywords: [
    // Primary keywords
    'cybersecurity solutions',
    'AI development',
    'machine learning services',
    'software development company',
    'full-stack development',
    'web development services',
    // Long-tail keywords
    'enterprise cybersecurity consulting',
    'custom AI solutions',
    'cybersecurity threat detection',
    'machine learning consulting',
    'cloud-native development',
    'digital transformation services',
    'cybersecurity monitoring',
    'AI automation solutions',
    'software development agency',
    'cybersecurity compliance',
    'predictive analytics services',
    'DevOps consulting',
    // Location-based (if applicable)
    'cybersecurity services USA',
    'AI development company'
  ],
  authors: [{ name: 'Muhscience Tech Labs Team', url: 'https://www.cybermuhscience.com/about' }],
  creator: 'Muhscience Tech Labs',
  publisher: 'Muhscience Tech Labs',
  metadataBase: new URL('https://www.cybermuhscience.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'x-default': '/',
    },
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
  openGraph: {
    title: 'Muhscience Tech Labs - Leading Cybersecurity & AI Solutions Provider',
    description: 'Transform your business with enterprise-grade cybersecurity, AI/ML development, and full-stack software solutions. 500+ successful projects, 99.9% uptime guarantee.',
    url: 'https://www.cybermuhscience.com',
    siteName: 'Muhscience Tech Labs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhscience Tech Labs - Cybersecurity & AI Solutions',
      },
      {
        url: '/og-image-square.jpg',
        width: 600,
        height: 600,
        alt: 'Muhscience Tech Labs Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhscience Tech Labs - Leading Cybersecurity & AI Solutions Provider',
    description: 'Transform your business with enterprise-grade cybersecurity, AI/ML development, and full-stack software solutions. 500+ successful projects.',
    images: ['/og-image.jpg'],
    creator: '@cybermuhscience',
    site: '@cybermuhscience',
  },
  verification: {
    google: 'M1ruyE4wie7Ei_x3caoezOYlvtHt4QJj56iDbvIWWPE',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'Technology',
  classification: 'Business',
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
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={generateJsonLd([organizationSchema, websiteSchema])}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen" suppressHydrationWarning>
        <ClientProviders>
          {children}
        </ClientProviders>
        {/* Performance monitoring */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}