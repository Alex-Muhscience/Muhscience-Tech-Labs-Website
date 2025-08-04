// Structured Data (JSON-LD) for SEO
export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

// Organization Schema
export const organizationSchema: StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Muhscience Tech Labs',
  alternateName: 'Muhscience Technology Laboratories',
  description: 'Leading provider of cybersecurity solutions, AI/ML development, and full-stack software development services.',
  url: 'https://www.cybermuhscience.com',
  logo: 'https://www.cybermuhscience.com/logo.png',
  image: 'https://www.cybermuhscience.com/og-image.jpg',
  sameAs: [
    'https://www.linkedin.com/company/cybermuhscience-ilabs',
    'https://twitter.com/cybermuhscience',
    'https://github.com/cybermuhscience',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-XXX-XXX-XXXX', // Replace with actual phone
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      email: 'info@cybermuhscience.com',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
    addressRegion: 'XX', // Replace with actual state
    addressLocality: 'City Name', // Replace with actual city
  },
  foundingDate: '2014', // Replace with actual founding date
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '50-100', // Adjust as needed
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
  },
};

// Website Schema
export const websiteSchema: StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Muhscience Tech Labs',
  alternateName: 'Muhscience Technology Laboratories',
  url: 'https://www.cybermuhscience.com',
  description: 'Leading provider of cybersecurity solutions, AI/ML development, and full-stack software development services.',
  publisher: {
    '@type': 'Organization',
    name: 'Muhscience Tech Labs',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.cybermuhscience.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

// Local Business Schema (if applicable)
export const localBusinessSchema: StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Muhscience Tech Labs',
  description: 'Professional cybersecurity and AI development services',
  url: 'https://www.cybermuhscience.com',
  telephone: '+1-XXX-XXX-XXXX', // Replace with actual phone
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Street Address', // Replace with actual address
    addressLocality: 'City',
    addressRegion: 'State',
    postalCode: 'ZIP',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 'XX.XXXXX', // Replace with actual coordinates
    longitude: 'XX.XXXXX',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
  },
};

// Service Schema
export const servicesSchema: StructuredData[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cybersecurity Solutions',
    description: 'Enterprise-grade cybersecurity solutions with 24/7 monitoring, threat detection, and incident response.',
    provider: {
      '@type': 'Organization',
      name: 'Muhscience Tech Labs',
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cybersecurity Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '24/7 SOC Monitoring',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Threat Detection & Response',
          },
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI & Machine Learning Development',
    description: 'Custom AI solutions including predictive analytics, process automation, and machine learning models.',
    provider: {
      '@type': 'Organization',
      name: 'Muhscience Tech Labs',
    },
    areaServed: 'Worldwide',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Software Development',
    description: 'Full-stack development services with cloud-native architecture and enterprise system integration.',
    provider: {
      '@type': 'Organization',
      name: 'Muhscience Tech Labs',
    },
    areaServed: 'Worldwide',
  },
];

// FAQ Schema for FAQ page
export const faqSchema: StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What cybersecurity services do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer comprehensive cybersecurity solutions including 24/7 SOC monitoring, threat detection and response, vulnerability assessments, compliance management, and security consulting services.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can AI solutions benefit my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our AI solutions can automate processes, provide predictive analytics, improve decision-making, reduce operational costs, and enhance customer experiences through intelligent automation and data-driven insights.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your development process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We follow an agile development methodology with discovery, planning, design, development, testing, and deployment phases. We ensure continuous communication and regular updates throughout the project lifecycle.',
      },
    },
  ],
};

// Breadcrumb Schema
export const createBreadcrumbSchema = (items: { name: string; url: string }[]): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Article Schema for blog posts
export const createArticleSchema = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  author: {
    '@type': 'Person',
    name: article.author,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Muhscience Tech Labs',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.cybermuhscience.com/logo.png',
    },
  },
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  image: article.image || 'https://www.cybermuhscience.com/og-image.jpg',
  url: article.url,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': article.url,
  },
});

// Helper function to generate JSON-LD script tag
export const generateJsonLd = (schema: StructuredData | StructuredData[]) => {
  return {
    __html: JSON.stringify(schema, null, 0),
  };
};
