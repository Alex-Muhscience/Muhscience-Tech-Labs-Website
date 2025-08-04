import Head from 'next/head';
import { generateJsonLd, StructuredData } from '@/lib/seo/structured-data';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: StructuredData | StructuredData[];
  noindex?: boolean;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  structuredData,
  noindex = false,
  keywords = [],
  author,
  publishedTime,
  modifiedTime,
}: SEOHeadProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cybermuhscience.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      {author && <meta name="author" content={author} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="googlebot" content={noindex ? 'noindex,nofollow' : 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'} />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Muhscience Tech Labs" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@cybermuhscience" />
      <meta name="twitter:creator" content="@cybermuhscience" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Article specific meta tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#000000" />
      
      {/* Additional SEO enhancements */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={generateJsonLd(structuredData)}
        />
      )}
    </Head>
  );
}

// Predefined SEO configurations for common pages
export const seoConfigs = {
  home: {
    title: 'Muhscience Tech Labs - Leading Cybersecurity & AI Solutions Provider',
    description: 'Transform your business with enterprise-grade cybersecurity solutions, AI/ML development, and full-stack software development. 500+ successful projects, 99.9% uptime guarantee.',
    keywords: [
      'cybersecurity solutions',
      'AI development',
      'machine learning services',
      'software development company',
      'enterprise security',
      'AI consulting'
    ],
  },
  services: {
    title: 'Our Services - Cybersecurity, AI & Software Development',
    description: 'Comprehensive technology services including cybersecurity solutions, AI/ML development, full-stack software development, and digital transformation consulting.',
    keywords: [
      'cybersecurity services',
      'AI development services',
      'software development',
      'digital transformation',
      'enterprise solutions'
    ],
  },
  about: {
    title: 'About Us - Muhscience Tech Labs Technology Experts',
    description: 'Learn about Muhscience Tech Labs, a leading technology company specializing in cybersecurity, AI/ML, and software development with 500+ successful projects.',
    keywords: [
      'technology company',
      'cybersecurity experts',
      'AI specialists',
      'software development team',
      'technology consulting'
    ],
  },
  contact: {
    title: 'Contact Us - Get Expert Technology Solutions',
    description: 'Contact Muhscience Tech Labs for expert cybersecurity, AI development, and software solutions. Free consultation available. 24/7 support guaranteed.',
    keywords: [
      'contact cybersecurity company',
      'AI development consultation',
      'software development quote',
      'technology consulting'
    ],
  },
  blog: {
    title: 'Tech Blog - Cybersecurity & AI Insights | Muhscience Tech Labs',
    description: 'Stay updated with the latest cybersecurity trends, AI developments, and software engineering insights from our expert team.',
    keywords: [
      'cybersecurity blog',
      'AI technology blog',
      'software development insights',
      'technology trends',
      'security best practices'
    ],
  },
};
