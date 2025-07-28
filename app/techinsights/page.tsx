'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { 
  Shield, 
  Brain, 
  Code2, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search,
  Zap,
  Lock,
  Cpu,
  Globe,
  Database,
  Smartphone,
  Cloud,
  ChevronDown
} from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "Zero Trust Architecture: The Future of Cybersecurity",
    description: "Explore how Zero Trust models are revolutionizing enterprise security by eliminating implicit trust and continuously validating every transaction.",
    content: "In today's rapidly evolving threat landscape, traditional perimeter-based security models are proving inadequate. Zero Trust Architecture represents a paradigm shift...",
    author: "Dr. Sarah Mitchell",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Cybersecurity",
    tags: ["Zero Trust", "Enterprise Security", "Network Architecture"],
    icon: Shield,
    gradient: "from-red-500 to-pink-500",
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Threat Detection: Machine Learning in Action",
    description: "Discover how artificial intelligence and machine learning algorithms are transforming cybersecurity threat detection and response capabilities.",
    content: "Traditional signature-based detection methods are no longer sufficient to combat sophisticated cyber threats. AI-powered systems offer...",
    author: "Marcus Chen",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "AI & Security",
    tags: ["Machine Learning", "Threat Detection", "AI Security"],
    icon: Brain,
    gradient: "from-purple-500 to-indigo-500",
    featured: true
  },
  {
    id: 3,
    title: "Secure Code Review: Best Practices for DevSecOps",
    description: "Learn essential techniques for integrating security into your development workflow through comprehensive code review practices.",
    content: "Security vulnerabilities in code can have devastating consequences. Implementing secure code review practices as part of DevSecOps...",
    author: "Alex Rodriguez",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Development",
    tags: ["DevSecOps", "Code Review", "Security"],
    icon: Code2,
    gradient: "from-green-500 to-teal-500",
    featured: false
  },
  {
    id: 4,
    title: "Quantum Computing Threats to Current Encryption",
    description: "Understanding the implications of quantum computing on modern cryptographic systems and preparing for post-quantum security.",
    content: "As quantum computing advances, current encryption methods face unprecedented challenges. Organizations must prepare for...",
    author: "Dr. Elena Vasquez",
    date: "2024-01-08",
    readTime: "12 min read",
    category: "Cryptography",
    tags: ["Quantum Computing", "Encryption", "Post-Quantum"],
    icon: Zap,
    gradient: "from-yellow-500 to-orange-500",
    featured: false
  },
  {
    id: 5,
    title: "Cloud Security Architecture: AWS vs Azure vs GCP",
    description: "Comprehensive comparison of security features and best practices across major cloud platforms for enterprise deployments.",
    content: "Choosing the right cloud platform requires careful consideration of security capabilities. Each major provider offers...",
    author: "Jennifer Park",
    date: "2024-01-05",
    readTime: "15 min read",
    category: "Cloud Security",
    tags: ["AWS", "Azure", "GCP", "Cloud Architecture"],
    icon: Cloud,
    gradient: "from-blue-500 to-cyan-500",
    featured: false
  },
  {
    id: 6,
    title: "Mobile App Security: iOS vs Android Vulnerabilities",
    description: "Deep dive into platform-specific security considerations and best practices for mobile application development.",
    content: "Mobile applications face unique security challenges across different platforms. Understanding iOS and Android security models...",
    author: "David Kim",
    date: "2024-01-03",
    readTime: "9 min read",
    category: "Mobile Security",
    tags: ["iOS Security", "Android Security", "Mobile Apps"],
    icon: Smartphone,
    gradient: "from-emerald-500 to-green-500",
    featured: false
  },
  {
    id: 7,
    title: "Database Security: Protecting Your Data Assets",
    description: "Essential strategies for securing databases against modern threats including SQL injection, privilege escalation, and data breaches.",
    content: "Databases contain an organization's most valuable assets. Implementing comprehensive security measures is crucial...",
    author: "Rachel Thompson",
    date: "2024-01-01",
    readTime: "11 min read",
    category: "Data Security",
    tags: ["Database Security", "SQL Injection", "Data Protection"],
    icon: Database,
    gradient: "from-violet-500 to-purple-500",
    featured: false
  },
  {
    id: 8,
    title: "Web3 Security: Blockchain and Smart Contract Auditing",
    description: "Navigate the complex security landscape of blockchain technology and smart contract vulnerabilities in decentralized applications.",
    content: "The Web3 ecosystem presents unique security challenges. Smart contracts and blockchain applications require specialized...",
    author: "Michael Zhang",
    date: "2023-12-28",
    readTime: "13 min read",
    category: "Blockchain",
    tags: ["Web3", "Smart Contracts", "Blockchain Security"],
    icon: Globe,
    gradient: "from-indigo-500 to-blue-500",
    featured: false
  }
]

const categories = [
  "All Posts",
  "Cybersecurity", 
  "AI & Security",
  "Development",
  "Cloud Security",
  "Mobile Security",
  "Data Security",
  "Blockchain",
  "Cryptography"
]

export default function TechInsights() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts")
  const [searchTerm, setSearchTerm] = useState("")
  const [showMorePosts, setShowMorePosts] = useState(6)

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const visiblePosts = filteredPosts.slice(0, showMorePosts)
  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 animate-pulse" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <Brain className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Technology Insights</span>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Tech Insights
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Dive deep into cybersecurity, AI innovations, and cutting-edge software development practices. 
              Stay ahead with expert insights and industry trends.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <div className="relative max-w-md mx-auto sm:mx-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full bg-card/50 backdrop-blur-sm border-primary/20 focus:border-primary/40"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-12 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-4 text-center">Featured Articles</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post, index) => {
              const IconComponent = post.icon
              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${post.gradient} bg-opacity-10`}>
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {post.category}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Featured
                            </Badge>
                          </div>
                          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="text-sm leading-relaxed">
                            {post.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button 
                        variant="ghost" 
                        className="group/btn p-0 h-auto text-primary hover:text-accent"
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-card/50 text-foreground hover:bg-primary/10 hover:text-primary border border-border'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((post, index) => {
            const IconComponent = post.icon
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-primary/20">
                  <div className={`h-1 bg-gradient-to-r ${post.gradient}`} />
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${post.gradient} bg-opacity-10`}>
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="group/btn p-2 h-auto text-primary hover:text-accent"
                      >
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Load More Button */}
        {visiblePosts.length < filteredPosts.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => setShowMorePosts(prev => prev + 6)}
              variant="outline"
              size="lg"
              className="group border-primary/20 hover:border-primary/40 hover:bg-primary/10"
            >
              Load More Articles
              <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        )}

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="max-w-md mx-auto">
              <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Articles Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or category filter to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All Posts")
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          </motion.div>
        )}
      </section>

      {/* Newsletter Subscription CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest insights on cybersecurity, AI, and software development delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary/40"
              />
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
