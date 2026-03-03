import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
import '../globals.css';

// Sample blog posts data - this would typically come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "5 Signs Your Business Needs Custom Systems Automation",
    excerpt: "Discover the key indicators that show when it's time to move beyond off-the-shelf solutions and invest in custom business systems.",
    category: "Business Automation",
    author: "Systems Architecture Team",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/images/blog/automation-signs.jpg",
    featured: true,
    icon: 'Zap'
  },
  {
    id: 2,
    title: "The ROI of Process Automation for SMEs",
    excerpt: "A comprehensive analysis of how automated workflows deliver measurable returns for small and medium enterprises.",
    category: "ROI Analysis",
    author: "Business Strategy Team",
    date: "2024-01-10",
    readTime: "12 min read",
    image: "/images/blog/roi-automation.jpg",
    featured: false,
    icon: 'TrendingUp'
  },
  {
    id: 3,
    title: "Technical SEO vs Traditional SEO: What's Changed",
    excerpt: "Understanding the shift from keyword-focused to engineering-based search optimization for modern businesses.",
    category: "Technical SEO",
    author: "Technical Architecture Team",
    date: "2024-01-05",
    readTime: "10 min read",
    image: "/images/blog/technical-seo.jpg",
    featured: false,
    icon: 'Users'
  },
  {
    id: 4,
    title: "Building Scalable Web Platforms: A Systems Approach",
    excerpt: "How to architect web applications that grow with your business without requiring complete rebuilds.",
    category: "Web Development",
    author: "Lead Systems Architect",
    date: "2023-12-28",
    readTime: "15 min read",
    image: "/images/blog/scalable-platforms.jpg",
    featured: false,
    icon: 'Zap'
  },
  {
    id: 5,
    title: "CRM Integration Strategies for Seamless Operations",
    excerpt: "Best practices for connecting your CRM with other business systems to create a unified operational ecosystem.",
    category: "Integration",
    author: "Integration Specialists",
    date: "2023-12-20",
    readTime: "9 min read",
    image: "/images/blog/crm-integration.jpg",
    featured: false,
    icon: 'Users'
  },
  {
    id: 6,
    title: "Measuring Success: KPIs for Business Systems",
    excerpt: "Key performance indicators that matter when evaluating the effectiveness of your custom business systems.",
    category: "Analytics",
    author: "Data Analytics Team",
    date: "2023-12-15",
    readTime: "11 min read",
    image: "/images/blog/kpis-systems.jpg",
    featured: false,
    icon: 'TrendingUp'
  }
];

const categories = [
  { name: "All", count: blogPosts.length },
  { name: "Business Automation", count: 1 },
  { name: "Technical SEO", count: 1 },
  { name: "Web Development", count: 1 },
  { name: "Integration", count: 1 },
  { name: "Analytics", count: 1 }
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="container px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-white text-center">Insights Coming Soon</h1>
        <p className="text-gray-300 text-center mt-4">Business systems insights and automation articles will be available here.</p>
      </div>
    </div>
  );
}
