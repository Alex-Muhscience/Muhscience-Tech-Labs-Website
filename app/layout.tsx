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
    default: 'Muhscience Tech Labs - Business Systems & Automation Engineering',
    template: '%s | Muhscience Tech Labs'
  },
  description: 'Custom business systems, process automation, and technical SEO infrastructure for SMEs ready to operate efficiently and grow. Book a free strategy call with our systems architects.',
  keywords: [
    'business automation Kenya',
    'custom web systems Kenya',
    'SME digital infrastructure',
    'process automation',
    'business systems engineering',
    'technical SEO Kenya',
    'workflow automation',
    'CRM integration',
    'custom web platforms',
    'business process optimization',
    'systems architecture Kenya',
    'digital transformation SME',
    'operational efficiency',
    'scalable business systems',
    'enterprise automation',
    'East Africa business systems',
    'Nairobi business automation',
    'Kenya SME solutions'
  ],
  authors: [{ name: 'Muhscience Tech Labs', url: 'https://muhscience-tech-labs-website.vercel.app' }],
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
    title: 'Muhscience Tech Labs - Business Systems & Automation Engineering',
    description: 'Custom business systems, process automation, and technical SEO infrastructure for SMEs ready to operate efficiently and grow.',
    siteName: 'Muhscience Tech Labs',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhscience Tech Labs - Business Systems & Automation Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhscience Tech Labs - Business Systems & Automation Engineering',
    description: 'Custom business systems, process automation, and technical SEO infrastructure for SMEs ready to operate efficiently and grow.',
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
  classification: 'Business Systems Engineering, Process Automation, Technical SEO',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Muhscience Tech Labs',
    'msapplication-TileColor': '#1e40af',
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
  // Structured Data for Enterprise SEO and GEO Targeting
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://muhscience-tech-labs-website.vercel.app#organization",
        "name": "Muhscience Tech Labs",
        "alternateName": "Muhscience Tech Labs Ltd",
        "url": "https://muhscience-tech-labs-website.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://muhscience-tech-labs-website.vercel.app/logo.png",
          "width": 512,
          "height": 512
        },
        "description": "Business Systems & Automation Engineering firm specializing in custom web platforms, process automation, and technical SEO infrastructure for SMEs in Kenya and East Africa.",
        "foundingDate": "2023",
        "areaServed": [
          {
            "@type": "Place",
            "name": "Kenya",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "KE",
              "addressLocality": "Nairobi",
              "addressRegion": "Nairobi County"
            }
          },
          {
            "@type": "Place",
            "name": "East Africa",
            "address": {
              "@type": "Place",
              "addressCountry": ["KE", "UG", "TZ", "RW", "BI", "SS", "ET", "SO"]
            }
          }
        ],
        "serviceType": [
          "Business Systems Engineering",
          "Process Automation",
          "Custom Web Development",
          "Technical SEO Services",
          "Digital Infrastructure Consulting"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Business Systems Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Business Web Platforms",
                "description": "Corporate websites, client portals, admin dashboards, and internal operational systems",
                "category": "Web Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Business Process Automation",
                "description": "Workflow automation, CRM integrations, reporting systems, and internal process optimization",
                "category": "Business Automation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technical SEO & Digital Infrastructure",
                "description": "Technical audits, site architecture, performance optimization, and analytics systems",
                "category": "SEO Services"
              }
            }
          ]
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+254746254055",
            "contactType": "customer service",
            "areaServed": "Kenya",
            "availableLanguage": ["English"]
          },
          {
            "@type": "ContactPoint",
            "email": "cybermuhscienceilabs@gmail.com",
            "contactType": "customer service",
            "areaServed": "Kenya",
            "availableLanguage": ["English"]
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/muhscience-tech-labs",
          "https://twitter.com/muhsciencetech"
        ],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -1.2921,
          "longitude": 36.8219
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://muhscience-tech-labs-website.vercel.app#service",
        "name": "Business Systems & Automation Engineering",
        "description": "Custom business systems, process automation, and technical SEO infrastructure for SMEs ready to operate efficiently and grow.",
        "url": "https://muhscience-tech-labs-website.vercel.app/solutions",
        "provider": {
          "@id": "https://muhscience-tech-labs-website.vercel.app#organization"
        },
        "serviceType": [
          "Business Systems Engineering",
          "Process Automation Services",
          "Custom Web Development",
          "Technical SEO Services"
        ],
        "areaServed": "Kenya",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Business Systems Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Business Web Platforms",
                "description": "Corporate websites, client portals, admin dashboards, and internal operational systems designed for scalability and performance.",
                "category": "Web Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Business Process Automation",
                "description": "Workflow automation, CRM integrations, reporting systems, and internal process optimization to eliminate repetitive work.",
                "category": "Business Automation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technical SEO & Digital Infrastructure",
                "description": "Technical audits, site architecture, performance optimization, and analytics systems for engineering-based growth optimization.",
                "category": "SEO Services"
              }
            }
          ]
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://muhscience-tech-labs-website.vercel.app#localbusiness",
        "name": "Muhscience Tech Labs",
        "description": "Business Systems & Automation Engineering firm in Nairobi, Kenya serving SMEs across East Africa.",
        "url": "https://muhscience-tech-labs-website.vercel.app",
        "telephone": "+254746254055",
        "email": "cybermuhscienceilabs@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Nairobi, Kenya",
          "addressLocality": "Nairobi",
          "addressRegion": "Nairobi County",
          "addressCountry": "KE",
          "postalCode": "00100"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -1.2921,
          "longitude": 36.8219
        },
        "openingHours": "Mo-Fr 09:00-18:00",
        "priceRange": "$$$",
        "servesCuisine": "Business Systems Consulting",
        "areaServed": "Nairobi",
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": -1.2921,
            "longitude": 36.8219
          },
          "geoRadius": "100"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://muhscience-tech-labs-website.vercel.app#website",
        "name": "Muhscience Tech Labs",
        "url": "https://muhscience-tech-labs-website.vercel.app",
        "description": "Custom business systems, process automation, and technical SEO infrastructure for SMEs ready to operate efficiently and grow.",
        "inLanguage": "en",
        "isAccessibleForFree": true,
        "publisher": {
          "@id": "https://muhscience-tech-labs-website.vercel.app#organization"
        },
        "potentialAction": [
          {
            "@type": "ReserveAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://muhscience-tech-labs-website.vercel.app/contact?name={name}&company={company}&email={email}",
              "inLanguage": "en"
            },
            "name": "Book Strategy Call",
            "description": "Schedule a free 30-minute strategy consultation with our systems architects"
          },
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://muhscience-tech-labs-website.vercel.app/insights?q={search_term}"
            },
            "name": "Search Insights",
            "description": "Search our business systems and automation insights"
          }
        ]
      }
    ]
  };

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

        {/* Structured Data for Enterprise SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* GEO Targeting Meta Tags */}
        <meta name="geo.region" content="KE-NBO" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.2921;36.8219" />
        <meta name="ICBM" content="-1.2921,36.8219" />
        <meta name="distribution" content="KE" />
        <meta name="country" content="Kenya" />
        <meta name="city" content="Nairobi" />
        <meta name="state" content="Nairobi County" />
        <meta name="zipcode" content="00100" />

        {/* Enterprise SEO Meta Tags */}
        <meta name="business:contact_data:street_address" content="Nairobi, Kenya" />
        <meta name="business:contact_data:locality" content="Nairobi" />
        <meta name="business:contact_data:region" content="Nairobi County" />
        <meta name="business:contact_data:postal_code" content="00100" />
        <meta name="business:contact_data:country_name" content="Kenya" />
        <meta name="business:contact_data:email" content="cybermuhscienceilabs@gmail.com" />
        <meta name="business:contact_data:phone_number" content="+254746254055" />
        <meta name="business:contact_data:website" content="https://muhscience-tech-labs-website.vercel.app" />
        <meta name="business:hours" content="Mo-Fr 09:00-18:00" />
        <meta name="business:price_range" content="$$" />

        {/* Additional Enterprise SEO */}
        <meta name="rating" content="5.0" />
        <meta name="review_count" content="50" />
        <meta name="best_rating" content="5" />
        <meta name="price_currency" content="KES" />
        <meta name="availability" content="InStock" />
        <meta name="category" content="Business Systems, Process Automation, Technical SEO" />
        <meta name="service_type" content="Professional Services" />
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
