"use client";

import { useState, useEffect, useRef } from "react";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Brain, Code, Lock, Sparkles, ArrowRight, CheckCircle, Users, Globe, Award, 
  TrendingUp, Shield, Zap, Target, Star, Quote, Play, Calendar, Phone, Mail,
  Cpu, Database, Cloud, Monitor, Settings, BarChart, Lightbulb, Rocket,
  Building, Briefcase, Timer, MessageSquare, Eye, Layers, Heart
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import './globals.css';
import dynamic from 'next/dynamic';

// Dynamically import AIRecommendations to prevent SSR issues
const AIRecommendations = dynamic(() => import('./components/AIRecommendations').catch(() => {
  // Fallback component if import fails
  return {
    default: () => (
      <section className="py-20">
        <div className="container px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore our comprehensive technology solutions designed to transform your business.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-2">🔒 Cybersecurity</h3>
                <p className="text-sm text-muted-foreground">Protect your digital assets</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-2">🤖 AI Solutions</h3>
                <p className="text-sm text-muted-foreground">Intelligent automation</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-2">💻 Development</h3>
                <p className="text-sm text-muted-foreground">Custom software solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  };
}), {
  ssr: false,
  loading: () => (
    <section className="py-20">
      <div className="container px-4 sm:px-6">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-8"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
});

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [email, setEmail] = useState("");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  // Enhanced services data
  const services = [
    {
      title: "Cybersecurity Solutions",
      subtitle: "Fortress-Level Protection",
      description: "Enterprise-grade security solutions with 24/7 monitoring, threat detection, and incident response to protect your digital infrastructure.",
      icon: Lock,
      features: ["24/7 SOC Monitoring", "Advanced Threat Detection", "Compliance Management", "Incident Response"],
      color: "from-blue-600 to-purple-700",
      pricing: "Starting at $2,500/month",
      benefits: ["99.9% Threat Prevention", "ISO 27001 Compliance", "15-min Response Time"]
    },
    {
      title: "AI & Machine Learning",
      subtitle: "Intelligent Automation",
      description: "Cutting-edge AI solutions including predictive analytics, process automation, and custom machine learning models.",
      icon: Brain,
      features: ["Custom ML Models", "Predictive Analytics", "Process Automation", "Data Intelligence"],
      color: "from-emerald-600 to-teal-700",
      pricing: "Starting at $5,000/month",
      benefits: ["95%+ Accuracy", "Real-time Insights", "80% Cost Reduction"]
    },
    {
      title: "Software Development",
      subtitle: "Scalable Solutions",
      description: "Full-stack development services with cloud-native architecture, mobile apps, and enterprise system integration.",
      icon: Code,
      features: ["Cloud-Native Apps", "Mobile Development", "API Integration", "DevOps"],
      color: "from-amber-600 to-orange-700",
      pricing: "Starting at $10,000/project",
      benefits: ["99.99% Uptime", "Scalable Architecture", "Rapid Deployment"]
    },
    {
      title: "Innovation Labs",
      subtitle: "Future Technology",
      description: "Research and development for emerging technologies including blockchain, IoT, and quantum computing applications.",
      icon: Sparkles,
      features: ["Emerging Tech Research", "Rapid Prototyping", "Digital Transformation", "Innovation Consulting"],
      color: "from-violet-600 to-fuchsia-700",
      pricing: "Starting at $3,000/project",
      benefits: ["2-week Prototypes", "ROI Analysis", "Market Research"]
    },
  ];

  // Enhanced stats with animations
  const stats = [
    { number: "500+", label: "Projects Completed", icon: Target, color: "text-blue-600" },
    { number: "150+", label: "Happy Clients", icon: Users, color: "text-green-600" },
    { number: "10+", label: "Years Experience", icon: Award, color: "text-purple-600" },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield, color: "text-orange-600" },
  ];

  // Client testimonials with support for video/audio
  const testimonials = [
    {
      quote: "Muhscience Tech Labs transformed our security posture completely. Their 24/7 monitoring has prevented multiple cyber attacks, saving us millions in potential damages.",
      author: "Sarah Johnson",
      title: "CTO, TechCorp Industries",
      company: "Fortune 500 Manufacturing",
      rating: 5,
      avatar: "/images/avatars/sarah-johnson.svg",
      video: "", // Remove non-existent video
      audio: ""
    },
    {
      quote: "The AI solutions they developed increased our operational efficiency by 80%. The predictive analytics have revolutionized our decision-making process.",
      author: "Michael Chen",
      title: "Head of Operations, DataFlow Solutions",
      company: "Leading SaaS Provider",
      rating: 5,
      avatar: "/images/avatars/michael-chen.svg",
      video: "",
      audio: "" // Remove non-existent audio
    },
    {
      quote: "Their software development team delivered our mobile app ahead of schedule. The quality and attention to detail exceeded our expectations.",
      author: "Emma Rodriguez",
      title: "Product Manager, StartupX",
      company: "Y Combinator Startup",
      rating: 5,
      avatar: "/images/avatars/emma-rodriguez.svg",
      video: "",
      audio: ""
    }
  ];

  // Features for why choose us section
  const features = [
    {
      title: "Enterprise-Grade Security",
      description: "Military-grade encryption and multi-layered security protocols protecting your critical data and infrastructure from advanced threats."
    },
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence and machine learning technologies that adapt and evolve with your business needs."
    },
    {
      title: "24/7 Expert Support",
      description: "Round-the-clock technical support from certified professionals with guaranteed response times and proactive monitoring."
    },
    {
      title: "Scalable Architecture",
      description: "Cloud-native solutions designed to grow with your business, ensuring optimal performance at any scale."
    },
    {
      title: "Proven Track Record",
      description: "500+ successful projects delivered across various industries with 99.9% client satisfaction rate."
    },
    {
      title: "Innovation Leadership",
      description: "Stay ahead of the competition with access to the latest technologies and industry best practices."
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/95 py-20 md:py-32">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:75px_75px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/0 to-primary/20" />
          <div className="container relative px-4 sm:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-center"
            >
              <Badge className="mb-4" variant="secondary">
                <Zap className="mr-1 h-3 w-3" />
                Trusted by 20+ Organizations
              </Badge>
              <h1 className="font-inter text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Securing the Future with{" "}
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Innovation
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
                We specialize in cybersecurity, AI/ML solutions, and full-stack development.
                Protecting your digital assets while driving technological advancement.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <Button size="lg" className="group w-full sm:w-auto" asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/services">
                    Learn More
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Recommendations Section - Temporarily Disabled */}
        <section className="py-20">
          <div className="container px-4 sm:px-6">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Explore our comprehensive technology solutions designed to transform your business.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 border rounded-lg">
                  <h3 className="font-semibold mb-2">🔒 Cybersecurity</h3>
                  <p className="text-sm text-muted-foreground">Protect your digital assets</p>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="font-semibold mb-2">🤖 AI Solutions</h3>
                  <p className="text-sm text-muted-foreground">Intelligent automation</p>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="font-semibold mb-2">💻 Development</h3>
                  <p className="text-sm text-muted-foreground">Custom software solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/50">
          <div className="container px-4 sm:px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-8 sm:grid-cols-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-2 flex justify-center">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className="py-20">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4" variant="outline">
                <Star className="mr-1 h-3 w-3" />
                Client Success Stories
              </Badge>
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear directly from our clients about their experience working with us.
              </p>
            </motion.div>
            
            {/* Testimonial Carousel */}
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-8 text-center">
                    <CardContent className="space-y-6">
                      {/* Avatar */}
                      <div className="flex justify-center">
                        <div className="relative">
                          <img 
                            src={testimonials[currentTestimonial].avatar} 
                            alt={testimonials[currentTestimonial].author}
                            className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                          />
                          <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-1">
                            <Quote className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-lg italic text-muted-foreground max-w-2xl mx-auto">
                        "{testimonials[currentTestimonial].quote}"
                      </blockquote>
                      
                      {/* Rating */}
                      <div className="flex justify-center space-x-1">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      {/* Author Info */}
                      <div>
                        <h4 className="font-semibold text-lg">{testimonials[currentTestimonial].author}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[currentTestimonial].title}
                        </p>
                        <p className="text-sm font-medium text-primary">
                          {testimonials[currentTestimonial].company}
                        </p>
                      </div>
                      
                      {/* Video/Audio Content */}
                      <div className="pt-4">
                        {testimonials[currentTestimonial].video && (
                          <div className="relative rounded-lg overflow-hidden max-w-md mx-auto">
                            <video 
                              controls 
                              className="w-full h-auto rounded-lg shadow-lg"
                              poster="/api/placeholder/400/225"
                              onError={(e) => {
                                // Hide video element if source fails to load
                                e.currentTarget.style.display = 'none';
                              }}
                            >
                              <source src={testimonials[currentTestimonial].video} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors pointer-events-none">
                              <div className="bg-white/90 rounded-full p-3">
                                <Play className="h-6 w-6 text-primary ml-1" />
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {testimonials[currentTestimonial].audio && (
                          <div className="bg-muted/50 rounded-lg p-6 max-w-md mx-auto">
                            <div className="flex items-center space-x-4">
                              <div className="bg-primary/10 rounded-full p-3">
                                <MessageSquare className="h-6 w-6 text-primary" />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium mb-2">Audio Testimonial</p>
                                <audio controls className="w-full">
                                  <source src={testimonials[currentTestimonial].audio} type="audio/mpeg" />
                                  Your browser does not support the audio tag.
                                </audio>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-gradient-to-r from-primary/10 to-purple-500/10 p-8 text-center sm:p-12"
            >
              <TrendingUp className="mx-auto h-12 w-12 text-primary mb-6" />
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the growing number of organizations that trust Muhscience Tech Labs with their digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group" asChild>
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">
                    Learn About Us
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
