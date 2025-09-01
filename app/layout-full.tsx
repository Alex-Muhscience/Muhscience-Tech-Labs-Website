import './globals.css';
import type { Metadata, Viewport } from 'next';
import { siteConfig } from '@/lib/env';
import { ClientErrorLoggerComponent } from '@/components/client-error-logger';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/site-header';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    'cybersecurity',
    'technology solutions',
    'IT consulting',
    'security audit',
    'penetration testing',
    'digital transformation',
  ],
  authors: [{ name: 'Muhscience Tech Labs' }],
  creator: 'Muhscience Tech Labs',
  publisher: 'Muhscience Tech Labs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@muhsciencetech',
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col" suppressHydrationWarning>
            <SiteHeader />
            <main className="flex-1" suppressHydrationWarning>{children}</main>
            <footer className="bg-brand-navy text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-brand-teal">Muhscience</span>
                    <span className="text-2xl font-bold text-white ml-1">Tech Labs</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    © 2024 Muhscience Tech Labs Ltd. All rights reserved.
                  </p>
                </div>
                <div className="mt-8 text-center text-sm text-gray-400">
                  <a href="/privacy" className="hover:text-brand-teal mr-6">Privacy</a>
                  <a href="/terms" className="hover:text-brand-teal mr-6">Terms</a>
                  <a href="/contact" className="hover:text-brand-teal">Contact</a>
                </div>
              </div>
            </footer>
          </div>
          <Toaster />
            <ClientErrorLoggerComponent />
          </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
