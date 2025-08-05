import { getRecommendations } from './aiModel.js';

// Service categories mapped to AI predictions
const serviceCategories = [
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Custom websites and web applications tailored to your business needs.',
    icon: '🌐',
    features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization'],
    ctaText: 'Get Web Development Quote'
  },
  {
    id: 'mobile-development',
    name: 'Mobile App Development', 
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
    features: ['Native Performance', 'Cross-Platform', 'App Store Publishing'],
    ctaText: 'Get Mobile App Quote'
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
    icon: '🤖',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
    ctaText: 'Explore AI Solutions'
  },
  {
    id: 'cloud-services',
    name: 'Cloud Services',
    description: 'Scalable cloud infrastructure and deployment solutions.',
    icon: '☁️',
    features: ['Auto Scaling', 'High Availability', 'Cost Optimization'],
    ctaText: 'Get Cloud Quote'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: '🔒',
    features: ['Threat Assessment', 'Security Audits', '24/7 Monitoring'],
    ctaText: 'Security Consultation'
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    description: 'Transform your data into actionable business insights.',
    icon: '📊',
    features: ['Business Intelligence', 'Data Visualization', 'Predictive Modeling'],
    ctaText: 'Get Analytics Quote'
  }
];

// User interaction tracking
let userInteractions = {
  pageViews: {},
  timeSpent: {},
  clicks: {},
  interests: []
};

export function trackUserInteraction(type, data) {
  switch (type) {
    case 'pageView':
      userInteractions.pageViews[data.page] = (userInteractions.pageViews[data.page] || 0) + 1;
      break;
    case 'timeSpent':
      userInteractions.timeSpent[data.page] = data.duration;
      break;
    case 'click':
      userInteractions.clicks[data.element] = (userInteractions.clicks[data.element] || 0) + 1;
      break;
    case 'interest':
      if (!userInteractions.interests.includes(data.category)) {
        userInteractions.interests.push(data.category);
      }
      break;
  }
  
  // Store in localStorage for persistence
  if (typeof window !== 'undefined') {
    localStorage.setItem('userInteractions', JSON.stringify(userInteractions));
  }
}

export function loadUserInteractions() {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('userInteractions');
    if (stored) {
      userInteractions = JSON.parse(stored);
    }
  }
  return userInteractions;
}

export async function getPersonalizedRecommendations(limit = 3) {
  try {
    // Load existing user interactions
    loadUserInteractions();
    
    // Get AI predictions (simplified for this implementation)
    const predictions = await getRecommendations();
    
    // Create feature vector based on user interactions
    const features = extractUserFeatures();
    
    // Score services based on user behavior and AI predictions
    const scoredServices = serviceCategories.map((service, index) => {
      let score = 0;
      
      // Base score from AI prediction (if available)
      if (predictions && predictions[index % predictions.length]) {
        score += predictions[index % predictions.length] * 0.4;
      }
      
      // Boost score based on user interests
      if (userInteractions.interests.includes(service.id)) {
        score += 0.3;
      }
      
      // Boost score based on related page views
      const relatedPages = getRelatedPages(service.id);
      relatedPages.forEach(page => {
        if (userInteractions.pageViews[page]) {
          score += userInteractions.pageViews[page] * 0.1;
        }
      });
      
      // Add some randomness for variety
      score += Math.random() * 0.2;
      
      return { ...service, score };
    });
    
    // Sort by score and return top recommendations
    return scoredServices
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
      
  } catch (error) {
    console.error('Error getting recommendations:', error);
    
    // Fallback to top services if AI fails
    return serviceCategories.slice(0, limit);
  }
}

function extractUserFeatures() {
  const totalPageViews = Object.values(userInteractions.pageViews).reduce((sum, views) => sum + views, 0);
  const totalClicks = Object.values(userInteractions.clicks).reduce((sum, clicks) => sum + clicks, 0);
  
  return {
    engagement: Math.min(totalPageViews / 10, 1), // Normalize to 0-1
    activity: Math.min(totalClicks / 20, 1), // Normalize to 0-1
    interests: userInteractions.interests.length / serviceCategories.length
  };
}

function getRelatedPages(serviceId) {
  const pageMapping = {
    'web-development': ['/services', '/projects', '/'],
    'mobile-development': ['/services', '/projects'],
    'ai-ml': ['/services', '/techinsights'],
    'cloud-services': ['/services'],
    'cybersecurity': ['/services', '/security'],
    'data-analytics': ['/services', '/techinsights']
  };
  
  return pageMapping[serviceId] || ['/services'];
}

export { serviceCategories };
