"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import {
  Mail, Phone, MapPin, Clock, ArrowRight, Facebook, Twitter, 
  Linkedin, Instagram, Youtube, Send, Shield, Award, Users, 
  Globe, ChevronRight, ExternalLink, MessageSquare
} from 'lucide-react';

export function SiteFooter() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsSubscribing(true);
    try {
      // Newsletter subscription logic would go here
      await new Promise(resolve => setTimeout(resolve, 1000));
      setEmail('');
      // You could add a toast notification here
    } catch (error) {
      console.error('Newsletter subscription error:', error);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-brand-navy via-brand-charcoal to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Newsletter & CTA */}
        <div className="border-b border-white/10 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Ahead of Cyber Threats</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Get the latest insights on cybersecurity, AI innovations, and industry best practices 
                delivered directly to your inbox.
              </p>
            </div>
            <div className="space-y-4">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/15 focus:border-brand-teal"
                    disabled={isSubscribing}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubscribing || !email.trim()}
                  className="h-12 px-6 bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold"
                >
                  {isSubscribing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Subscribe
                    </>
                  )}
                </Button>
              </form>
              <p className="text-sm text-gray-400">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-navy to-brand-teal rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-brand-teal">Muhscience</span>
                  <span className="text-xl font-bold text-white ml-1">Tech Labs</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading cybersecurity and technology solutions provider in East Africa. 
                Protecting businesses and empowering digital transformation.
              </p>
              
              {/* Trust Indicators */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-300">
                  <Shield className="w-4 h-4 mr-2 text-brand-teal" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Award className="w-4 h-4 mr-2 text-brand-teal" />
                  <span>Award-Winning Solutions</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Users className="w-4 h-4 mr-2 text-brand-teal" />
                  <span>500+ Satisfied Clients</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Globe className="w-4 h-4 mr-2 text-brand-teal" />
                  <span>East Africa Coverage</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/services#cybersecurity" 
                    className="text-gray-300 hover:text-brand-teal transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                    Cybersecurity Solutions
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services#ai-ml" 
                    className="text-gray-300 hover:text-brand-teal transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                    AI & Machine Learning
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services#software" 
                    className="text-gray-300 hover:text-brand-teal transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services#innovation" 
                    className="text-gray-300 hover:text-brand-teal transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                    Innovation Labs
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services" 
                    className="text-brand-teal hover:text-brand-orange font-medium flex items-center group"
                  >
                    View All Services
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/about" 
                    className="text-gray-300 hover:text-brand-teal transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/projects" 
                    className="text-gray-300 hover:text-brand-teal transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                    Projects & Case Studies
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    className="text-gray-300 hover:text-brand-teal transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                    Blog & Insights
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/webinars" 
                    className="text-gray-300 hover:text-brand-teal transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                    Webinars & Events
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/careers" 
                    className="text-gray-300 hover:text-brand-teal transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                    Careers
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-brand-teal hover:text-brand-orange font-medium flex items-center group"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-brand-teal flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      Nairobi, Kenya<br />
                      East Africa Hub
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-brand-teal flex-shrink-0" />
                  <a href="tel:+254746254055" className="text-gray-300 hover:text-brand-teal transition-colors">
                    +254 746 254 055
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-brand-teal flex-shrink-0" />
                  <a href="mailto:info@cybermuhscience.com" className="text-gray-300 hover:text-brand-teal transition-colors">
                    info@cybermuhscience.com
                  </a>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 mt-1 text-brand-teal flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      24/7 Support Available<br />
                      <span className="text-sm">Emergency Response</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <p className="text-sm font-medium text-white mb-3">Follow Us</p>
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="w-8 h-8 bg-white/10 hover:bg-brand-teal rounded-full flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 bg-white/10 hover:bg-brand-teal rounded-full flex items-center justify-center transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://linkedin.com/company/muhscience-tech-labs" 
                    className="w-8 h-8 bg-white/10 hover:bg-brand-teal rounded-full flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 bg-white/10 hover:bg-brand-teal rounded-full flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 bg-white/10 hover:bg-brand-teal rounded-full flex items-center justify-center transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-6">
                <Button
                  onClick={() => {
                    const whatsappUrl = `https://wa.me/254746254055?text=${encodeURIComponent('Hello! I\'m interested in your cybersecurity services.')}`;
                    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-300 text-sm">
                © 2025 Muhscience Tech Labs Ltd. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <Link href="/privacy" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="/terms" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Terms of Service
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="/security" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Security
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="/sitemap.xml" className="text-gray-300 hover:text-brand-teal transition-colors flex items-center">
                  Sitemap
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Built with ❤️ in Kenya</span>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
