'use client';

import React, { useState, useEffect } from 'react';
import { getPersonalizedRecommendations, trackUserInteraction } from '../../utils/recommendationService.js';

interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  ctaText: string;
  score?: number;
}

interface AIRecommendationsProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  showScore?: boolean;
}

const AIRecommendations: React.FC<AIRecommendationsProps> = ({
  title = "Recommended for You",
  subtitle = "Based on your interests and browsing behavior",
  limit = 3,
  showScore = false
}) => {
  const [recommendations, setRecommendations] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      loadRecommendations();
    }
  }, [limit, mounted]);

  const loadRecommendations = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Track that user viewed recommendations
      trackUserInteraction('pageView', { page: '/recommendations' });
      
      const recs = await getPersonalizedRecommendations(limit);
      setRecommendations(recs);
    } catch (err) {
      console.error('Failed to load recommendations:', err);
      setError('Unable to load recommendations at this time.');
    } finally {
      setLoading(false);
    }
  };

  const handleServiceClick = (service: Service) => {
    // Track interest in this service
    trackUserInteraction('interest', { category: service.id });
    trackUserInteraction('click', { element: `recommendation-${service.id}` });
    
    // Navigate to services page or contact form
    window.location.href = '/contact?service=' + encodeURIComponent(service.name);
  };

  const handleRefreshRecommendations = () => {
    trackUserInteraction('click', { element: 'refresh-recommendations' });
    loadRecommendations();
  };

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[...Array(limit)].map((_, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg p-8 animate-pulse">
                <div className="w-16 h-16 bg-muted/60 rounded-full mb-6 mx-auto"></div>
                <div className="h-6 bg-muted/60 rounded mb-4"></div>
                <div className="h-4 bg-muted/60 rounded mb-2"></div>
                <div className="h-4 bg-muted/60 rounded mb-6"></div>
                <div className="space-y-2 mb-6">
                  <div className="h-3 bg-muted/60 rounded"></div>
                  <div className="h-3 bg-muted/60 rounded"></div>
                  <div className="h-3 bg-muted/60 rounded"></div>
                </div>
                <div className="h-10 bg-muted/60 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-destructive text-5xl mb-4">⚠️</div>
            <h3 className="text-xl font-semibold mb-2">
              Unable to Load Recommendations
            </h3>
            <p className="text-muted-foreground mb-6">{error}</p>
            <button
              onClick={handleRefreshRecommendations}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            {subtitle}
          </p>
          
          <button
            onClick={handleRefreshRecommendations}
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh Recommendations
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recommendations.map((service, index) => (
            <div
              key={service.id}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg hover:shadow-xl hover:bg-card/70 transition-all duration-300 p-8 transform hover:-translate-y-2 cursor-pointer group relative"
              onClick={() => handleServiceClick(service)}
            >
              {/* AI Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20">
                  🤖 AI Recommended
                </div>
                {showScore && service.score && (
                  <div className="text-xs text-muted-foreground">
                    Score: {(service.score * 100).toFixed(0)}%
                  </div>
                )}
              </div>

              {/* Service Icon */}
              <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Service Info */}
              <h3 className="text-xl font-bold mb-4 text-center">
                {service.name}
              </h3>
              
              <p className="text-muted-foreground mb-6 text-center">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 group-hover:shadow-lg">
                {service.ctaText}
              </button>

              {/* Recommendation Rank */}
              {index === 0 && (
                <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                  #1 Match
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Learn More About AI */}
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto bg-card/40 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border/50">
            <h3 className="text-lg font-semibold mb-2">
              How AI Recommendations Work
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Our AI analyzes your browsing behavior, page interactions, and stated interests to suggest services that best match your needs. The more you interact with our site, the better our recommendations become.
            </p>
            <div className="flex items-center justify-center text-xs text-muted-foreground">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Your data is processed locally and never shared
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIRecommendations;
