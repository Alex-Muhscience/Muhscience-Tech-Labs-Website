import './globals.css';
import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/sonner';
import { organizationSchema, websiteSchema, generateJsonLd } from '@/lib/seo/structured-data';

// Enhanced SEO metadata
export const metadata: Metadata = {
  title: {
    default: 'CyberMuhscience iLabs - Leading Cybersecurity & AI Solutions Provider',
    template: '%s | CyberMuhscience iLabs - Cybersecurity & AI Experts',
  },
  description: 'Transform your business with CyberMuhscience iLabs. We provide enterprise-grade cybersecurity solutions, AI/ML development, full-stack software development, and innovation labs. 500+ successful projects, 99.9% uptime guarantee.',
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
  authors: [{ name: 'CyberMuhscience Team', url: 'https://www.cybermuhscience.com/about' }],
  creator: 'CyberMuhscience iLabs',
  publisher: 'CyberMuhscience iLabs',
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
    title: 'CyberMuhscience iLabs - Leading Cybersecurity & AI Solutions Provider',
    description: 'Transform your business with enterprise-grade cybersecurity, AI/ML development, and full-stack software solutions. 500+ successful projects, 99.9% uptime guarantee.',
    url: 'https://www.cybermuhscience.com',
    siteName: 'CyberMuhscience iLabs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CyberMuhscience iLabs - Cybersecurity & AI Solutions',
      },
      {
        url: '/og-image-square.jpg',
        width: 600,
        height: 600,
        alt: 'CyberMuhscience iLabs Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CyberMuhscience iLabs - Leading Cybersecurity & AI Solutions Provider',
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