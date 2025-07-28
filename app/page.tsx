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

  // Technologies we work with
  const technologies = [
    { name: "AWS", icon: Cloud, category: "Cloud" },
    { name: "Kubernetes", icon: Layers, category: "DevOps" },
    { name: "TensorFlow", icon: Brain, category: "AI/ML" },
    { name: "React", icon: Code, category: "Frontend" },
    { name: "PostgreSQL", icon: Database, category: "Database" },
    { name: "Docker", icon: Monitor, category: "DevOps" },
  ];

  // Client testimonials
  const testimonials = [
    {
      quote: "CyberMuhscience transformed our security posture completely. Their 24/7 monitoring has prevented multiple cyber attacks, saving us millions in potential damages.",
      author: "Sarah Johnson",
      title: "CTO, TechCorp Industries",
      company: "Fortune 500 Manufacturing",
      rating: 5,
      avatar: "/api/placeholder/64/64"
    },
    {
      quote: "The AI solutions they developed increased our operational efficiency by 80%. The predictive analytics have revolutionized our decision-making process.",
      author: "Michael Chen",
      title: "Head of Operations, DataFlow Solutions",
      company: "Leading SaaS Provider",
      rating: 5,
      avatar: "/api/placeholder/64/64"
    },
    {
      quote: "Their software development team delivered our mobile app ahead of schedule. The quality and attention to detail exceeded our expectations.",
      author: "Emma Rodriguez",
      title: "Product Manager, StartupX",
      company: "Y Combinator Startup",
      rating: 5,
      avatar: "/api/placeholder/64/64"
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

  // Why choose us features
  const whyChooseUs = [
    {
      title: "Industry-Leading Expertise",
      description: "Our certified professionals bring decades of combined experience across cybersecurity, AI, and software development.",
      icon: Award,
      stats: "50+ Certifications"
    },
    {
      title: "24/7 Global Support",
      description: "Round-the-clock support with guaranteed response times and proactive monitoring for maximum uptime.",
      icon: Timer,
      stats: "15-min Response"
    },
    {
      title: "Proven Track Record",
      description: "Successfully delivered 500+ projects with 99.9% client satisfaction rate across various industries.",
      icon: TrendingUp,
      stats: "99.9% Success Rate"
    },
    {
      title: "Cutting-Edge Innovation",
      description: "We stay ahead of technology trends, implementing the latest solutions to give you competitive advantage.",
      icon: Lightbulb,
      stats: "Latest Tech Stack"
    }
  ];

  // Case studies preview
  const caseStudies = [
    {
      title: "Financial Services Security Overhaul",
      client: "Major Bank",
      industry: "Finance",
      challenge: "Legacy security systems vulnerable to modern threats",
      solution: "Comprehensive cybersecurity transformation with AI-powered threat detection",
      results: "100% threat prevention, regulatory compliance achieved",
      icon: Building,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Manufacturing AI Implementation",
      client: "Global Manufacturer",
      industry: "Manufacturing",
      challenge: "Inefficient production processes and quality control",
      solution: "AI-powered predictive maintenance and quality assurance systems",
      results: "40% efficiency increase, 60% defect reduction",
      icon: Settings,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Healthcare Platform Development",
      client: "Regional Hospital Network",
      industry: "Healthcare",
      challenge: "Fragmented patient data and inefficient workflows",
      solution: "Integrated healthcare platform with AI-driven insights",
      results: "50% faster patient processing, improved outcomes",
      icon: Heart,
      color: "from-purple-500 to-pink-500"
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
    // Newsletter signup logic here
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

        {/* Services Section */}
        <section className="py-20">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4" variant="outline">
                Our Expertise
              </Badge>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Comprehensive Technology Solutions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                From cybersecurity to AI implementation, we deliver cutting-edge solutions that drive business growth.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full group cursor-pointer transition-all hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${service.color}`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="ghost" className="mt-4 p-0 h-auto" asChild>
                        <Link href="/services">
                          Learn More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                Why Choose CyberMuhscience?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine technical expertise with industry best practices to deliver exceptional results.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
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
                Join the growing number of organizations that trust CyberMuhscience with their digital transformation journey.
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