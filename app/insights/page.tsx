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
    icon: Zap
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
    icon: TrendingUp
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
    icon: Users
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
    icon: Zap
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
    icon: Users
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
    icon: TrendingUp
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
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 py-20 md:py-28">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:75px_75px]" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-blue-600/0 to-blue-600/10 mask-radial-gradient"
          aria-hidden="true"
        />
        <div className="container relative px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full text-sm font-medium text-blue-400 mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              📊 Business Systems Insights
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Engineering Insights for <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Business Growth</span>
            </h1>
            <p className="mt-4 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Expert perspectives on business systems, process automation, and technical infrastructure designed to help SMEs scale efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-slate-900">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Insight</h2>
                <p className="mt-4 text-lg text-gray-300">Our latest analysis on business systems and automation</p>
              </div>

              <Card className="bg-slate-800 border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-48 md:h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                      {React.createElement(featuredPost.icon, { className: "h-16 w-16 text-blue-200" })}
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.date}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      <Link href={`/insights/${featuredPost.id}`} className="hover:text-blue-400 transition-colors">
                        {featuredPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-300 mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                      <Link
                        href={`/insights/${featuredPost.id}`}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                      >
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Recent Posts Grid */}
      <section className="py-16 bg-slate-800">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Latest Insights</h2>
              <p className="mt-4 text-lg text-gray-300">Expert analysis on business systems and automation</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="bg-slate-900 border-gray-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        {React.createElement(post.icon, { className: "h-6 w-6 text-blue-400" })}
                      </div>
                      <CardTitle className="text-xl text-white line-clamp-2">
                        <Link href={`/insights/${post.id}`} className="hover:text-blue-400 transition-colors">
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-gray-300 mb-6 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-400">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <Link
                          href={`/insights/${post.id}`}
                          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business Systems?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Let's discuss how custom business systems and automation can eliminate operational friction and accelerate your growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl"
              >
                📅 Book a Strategy Call
              </Link>

              <Link
                href="/solutions"
                className="inline-flex items-center px-10 py-5 border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                🔧 Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
