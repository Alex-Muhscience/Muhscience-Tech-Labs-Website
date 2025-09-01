import './globals.css';
import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';

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
    email: false,
    address: false,
    telephone: false,
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

function DetailedHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-navy to-brand-teal rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-brand-navy">Muhscience</span>
                <span className="text-2xl font-bold text-brand-charcoal ml-1">Tech Labs</span>
                <div className="text-xs text-gray-600 -mt-1">Cybersecurity & Innovation</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-brand-charcoal hover:text-brand-teal font-medium transition-colors duration-200 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="text-brand-charcoal hover:text-brand-teal font-medium transition-colors duration-200 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <div className="relative group">
                <button className="text-brand-charcoal hover:text-brand-teal font-medium transition-colors duration-200 flex items-center">
                  Services
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4">
                    <Link href="/services" className="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-teal/10 hover:text-brand-teal rounded-md transition-colors">
                      🛡️ Cybersecurity Services
                    </Link>
                    <Link href="/services" className="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-teal/10 hover:text-brand-teal rounded-md transition-colors">
                      ☁️ Cloud Solutions
                    </Link>
                    <Link href="/services" className="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-teal/10 hover:text-brand-teal rounded-md transition-colors">
                      🤖 AI & Machine Learning
                    </Link>
                    <Link href="/services" className="block px-4 py-2 text-sm text-brand-charcoal hover:bg-brand-teal/10 hover:text-brand-teal rounded-md transition-colors">
                      💻 Software Development
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/projects" className="text-brand-charcoal hover:text-brand-teal font-medium transition-colors duration-200 relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link href="/blog" className="text-brand-charcoal hover:text-brand-teal font-medium transition-colors duration-200 relative group">
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link href="/webinars" className="text-brand-charcoal hover:text-brand-teal font-medium transition-colors duration-200 relative group">
                Webinars
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-4" suppressHydrationWarning>
              <Link href="/contact" className="bg-gradient-to-r from-brand-navy to-brand-teal text-white px-6 py-2 rounded-lg font-semibold hover:from-brand-navy/90 hover:to-brand-teal/90 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Get Started
              </Link>
              <Link href="/contact" className="border border-brand-orange text-brand-orange px-6 py-2 rounded-lg font-semibold hover:bg-brand-orange hover:text-white transition-all duration-200">
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2 rounded-md text-brand-charcoal hover:text-brand-teal hover:bg-brand-bg transition-colors">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
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
