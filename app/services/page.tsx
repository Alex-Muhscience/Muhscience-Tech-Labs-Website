"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brain, Code, Lock, Sparkles, CheckCircle, Server, Shield, Database, Bot, Cloud,
  Smartphone, BarChart, Users, Clock, Star, ArrowRight, Target, Zap, Award,
  Monitor, Cpu, Network, Key, Eye, AlertTriangle, TrendingUp, Briefcase,
  Settings, Globe, Layers, FileCode, Rocket, Heart, MessageSquare, Phone,
  Mail, MapPin, Calendar, DollarSign, PlayCircle, Users2, Headphones
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Enhanced service definitions with detailed information
const services = [
  {
    id: "web-platforms",
    icon: Code,
    title: "Custom Business Web Platforms",
    subtitle: "Corporate Websites, Portals, and Internal Systems",
    description: "Custom web platforms designed specifically for business efficiency and scalability. From corporate websites and client portals to admin dashboards and internal operational systems, we build solutions that streamline your business processes and enhance productivity. Our platforms are built with modern technologies, ensuring security, performance, and seamless user experiences across all devices.",
    highlightColor: "from-blue-600 to-purple-700",
    features: [
      {
        icon: Globe,
        name: "Corporate Websites & Branding",
        description: "Professional, responsive websites that showcase your brand and services. Includes SEO optimization, fast loading times, and mobile-first design principles.",
        benefits: ["SEO-optimized", "Mobile-responsive", "Brand-aligned design"]
      },
      {
        icon: Users,
        name: "Client Portals & Dashboards",
        description: "Secure client portals for account management, order tracking, and communication. Custom dashboards with real-time data visualization and reporting capabilities.",
        benefits: ["User-friendly interface", "Real-time updates", "Secure access controls"]
      },
      {
        icon: Database,
        name: "Admin & Operational Systems",
        description: "Internal admin panels and operational systems for managing business data, workflows, and team collaboration. Includes user management, permissions, and audit trails.",
        benefits: ["Role-based access", "Workflow automation", "Comprehensive reporting"]
      },
      {
        icon: Smartphone,
        name: "Cross-Platform Compatibility",
        description: "Ensures seamless functionality across all devices and browsers. Progressive Web App capabilities for enhanced mobile experiences and offline functionality.",
        benefits: ["Universal compatibility", "PWA features", "Offline capability"]
      }
    ],
    pricing: {
      starter: "KES 45,000/project",
      professional: "KES 60,000/project",
      enterprise: "Custom pricing"
    },
    deliverables: ["Custom platform design", "Responsive web application", "Admin dashboard", "API documentation", "Training and handover"],
    timeline: "6-12 weeks development",
    industries: ["SMEs", "E-commerce", "Healthcare", "Finance", "Manufacturing"],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"]
  },
  {
    id: "process-automation",
    icon: Settings,
    title: "Business Process Automation",
    subtitle: "Workflow Automation and Operational Efficiency",
    description: "Transform your business operations with intelligent process automation solutions. We eliminate repetitive tasks, integrate disparate systems, and optimize workflows to reduce costs and improve efficiency. From simple task automation to complex multi-system integrations, we create automation solutions that scale with your business growth.",
    highlightColor: "from-emerald-600 to-teal-700",
    features: [
      {
        icon: Zap,
        name: "Workflow Automation",
        description: "Automate repetitive business processes including data entry, document processing, approval workflows, and routine communications. Custom automation rules based on your specific business logic.",
        benefits: ["80% time savings", "Error reduction", "Consistent execution"]
      },
      {
        icon: Network,
        name: "System Integrations",
        description: "Seamlessly connect your existing tools and platforms including CRM, ERP, accounting software, and communication tools. Real-time data synchronization and automated data flows.",
        benefits: ["Real-time sync", "Unified data", "Automated workflows"]
      },
      {
        icon: BarChart,
        name: "Reporting & Analytics Systems",
        description: "Automated reporting systems that aggregate data from multiple sources, generate insights, and provide real-time dashboards for decision-making.",
        benefits: ["Real-time insights", "Automated reports", "Performance tracking"]
      },
      {
        icon: Shield,
        name: "Quality Assurance & Monitoring",
        description: "Built-in quality checks, error handling, and monitoring systems to ensure automation reliability and provide alerts for any issues or exceptions.",
        benefits: ["Quality assurance", "Error monitoring", "Reliable operations"]
      }
    ],
    pricing: {
      starter: "KES 80,000/project",
      professional: "KES 120,000/project",
      enterprise: "Custom pricing"
    },
    deliverables: ["Process analysis report", "Automation roadmap", "Custom automation solution", "Integration setup", "Training and support"],
    timeline: "4-8 weeks implementation",
    industries: ["All Industries", "Manufacturing", "Healthcare", "Finance", "Logistics"],
    technologies: ["Python", "Node.js", "Zapier", "Make.com", "Custom APIs"]
  },
  {
    id: "technical-seo",
    icon: TrendingUp,
    title: "Technical SEO & Digital Infrastructure",
    subtitle: "Site Architecture and Performance Optimization",
    description: "Optimize your digital presence with comprehensive technical SEO and infrastructure solutions. We conduct thorough audits, implement best practices, and build scalable digital infrastructure that supports your business growth. From site speed optimization to advanced SEO techniques, we ensure your online presence drives maximum business value.",
    highlightColor: "from-amber-600 to-orange-700",
    features: [
      {
        icon: Target,
        name: "Technical SEO Audits",
        description: "Comprehensive technical audits including crawlability analysis, indexability checks, site architecture review, and performance optimization recommendations.",
        benefits: ["Detailed audit reports", "Priority recommendations", "ROI projections"]
      },
      {
        icon: Rocket,
        name: "Performance Optimization",
        description: "Site speed optimization, Core Web Vitals improvements, image optimization, caching strategies, and CDN implementation for faster loading times.",
        benefits: ["Faster load times", "Better user experience", "Improved rankings"]
      },
      {
        icon: FileCode,
        name: "Site Architecture & Schema",
        description: "Optimized site structure, XML sitemaps, robots.txt, structured data implementation, and hreflang for international SEO.",
        benefits: ["Better crawlability", "Rich snippets", "International SEO"]
      },
      {
        icon: Monitor,
        name: "Analytics & Monitoring Systems",
        description: "Advanced analytics setup including Google Analytics 4, Google Search Console, custom dashboards, and automated reporting systems.",
        benefits: ["Comprehensive tracking", "Automated reports", "Performance insights"]
      }
    ],
    pricing: {
      starter: "KES 20,000/month",
      professional: "KES 35,000/month",
      enterprise: "Custom pricing"
    },
    deliverables: ["Technical SEO audit", "Implementation roadmap", "Performance optimization", "Analytics setup", "Monthly reporting"],
    timeline: "2-4 weeks implementation",
    industries: ["E-commerce", "SMEs", "Content Sites", "Service Businesses", "All Industries"],
    technologies: ["Google Analytics", "Google Search Console", "Screaming Frog", "Schema.org", "Cloudflare"]
  },
  {
    id: "ai-innovation",
    icon: Brain,
    title: "AI Innovation Labs",
    subtitle: "AI-Powered Business Solutions",
    description: "Leverage artificial intelligence to unlock new business opportunities and drive innovation. Our AI innovation labs combine cutting-edge AI technologies with practical business applications to create intelligent solutions that provide insights, automate decisions, and enhance customer experiences. From predictive analytics to conversational AI, we help you harness the power of AI for competitive advantage.",
    highlightColor: "from-violet-600 to-fuchsia-700",
    features: [
      {
        icon: Brain,
        name: "AI Strategy & Consulting",
        description: "Develop comprehensive AI strategies aligned with your business goals. Assess AI readiness, identify use cases, and create implementation roadmaps.",
        benefits: ["Strategic roadmap", "Use case identification", "ROI analysis"]
      },
      {
        icon: BarChart,
        name: "Predictive Analytics & Insights",
        description: "AI-powered analytics that forecast trends, predict outcomes, and provide actionable insights for better decision-making.",
        benefits: ["Predictive insights", "Trend forecasting", "Data-driven decisions"]
      },
      {
        icon: MessageSquare,
        name: "Conversational AI Solutions",
        description: "Intelligent chatbots and virtual assistants that provide human-like interactions, handle customer inquiries, and automate support processes.",
        benefits: ["24/7 support", "Cost reduction", "Improved satisfaction"]
      },
      {
        icon: Sparkles,
        name: "Custom AI Model Development",
        description: "Bespoke AI models tailored to your specific needs, from computer vision and NLP to custom algorithms for unique business challenges.",
        benefits: ["Tailored solutions", "Scalable models", "Performance optimization"]
      }
    ],
    pricing: {
      starter: "KES 100,000/project",
      professional: "KES 140,000/project",
      enterprise: "Custom pricing"
    },
    deliverables: ["AI strategy document", "Proof-of-concept demo", "Custom AI solution", "Training and deployment", "Ongoing optimization"],
    timeline: "8-16 weeks development",
    industries: ["Retail", "Healthcare", "Finance", "Manufacturing", "Customer Service"],
    specialties: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
  }
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(services[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: services[0].title
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Service Inquiry: ${formData.service}`,
          message: `Company: ${formData.company}\n\nService: ${formData.service}\n\nMessage: ${formData.message}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        service: activeService.title
      });
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Error sending service request:', error);
      // Show error to user - you might want to add a toast library
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-8 sm:py-12 lg:py-16">
      {/* Hero Section */}
      <section className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-Helvetica text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
        >
          Our <span className={`bg-gradient-to-r ${activeService.highlightColor} bg-clip-text text-transparent`}>Services</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Comprehensive technology solutions tailored to your business needs
        </motion.p>
      </section>

      {/* Service Introduction */}
      <section className="mt-12 lg:mt-16">
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="font-Helvetica text-3xl font-bold mb-4">Why Choose Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At Muhscience Tech Labs, we combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value. Our comprehensive service portfolio is designed to address the most complex challenges in today's digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Industry Expertise</h3>
              <p className="text-sm text-muted-foreground">Over a decade of experience across multiple industries and domains</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Cutting-Edge Tech</h3>
              <p className="text-sm text-muted-foreground">Latest technologies and methodologies to stay ahead of the curve</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Security First</h3>
              <p className="text-sm text-muted-foreground">Enterprise-grade security built into every solution we deliver</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Round-the-clock support to ensure your operations never stop</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mt-12 lg:mt-16">
        <div className="text-center mb-12">
          <h2 className="font-Helvetica text-3xl font-bold mb-4">Our Core Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our comprehensive range of technology services designed to transform your business and drive innovation.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                id={service.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${activeService.id === service.id
                  ? `border-2 border-primary bg-gradient-to-br ${service.highlightColor}/10`
                  : ""
                  }`}
                onClick={() => {
                  setActiveService(service);
                  setFormData(prev => ({ ...prev, service: service.title }));
                }}
              >
                <CardHeader className="pb-4">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${service.highlightColor} shadow-lg mb-4`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-Helvetica text-xl font-bold mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-muted-foreground mb-3">
                    {service.subtitle}
                  </CardDescription>
                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                    {service.description.substring(0, 120)}...
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-4">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br ${service.highlightColor}/10`}>
                          <feature.icon className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-xs font-medium">{feature.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">Starting from</span>
                      <span className="text-sm font-bold text-primary">{service.pricing.starter}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs px-2 py-1">
                      {service.features.length} Features
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mt-16">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-Helvetica text-3xl font-bold mb-4"
          >
            Flexible Pricing for {activeService.title}
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan that fits your needs and budget
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {Object.entries(activeService.pricing).map(([tier, price], index) => (
            <motion.div
              key={tier}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`relative ${tier === 'professional' ? 'border-primary shadow-lg scale-105' : ''}`}>
                {tier === 'professional' && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="capitalize text-xl">{tier}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{price}</span>
                    {price.includes('/') && <span className="text-muted-foreground text-sm">/month</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {activeService.features.slice(0, tier === 'starter' ? 2 : tier === 'professional' ? 3 : 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-sm">{feature.name}</span>
                      </li>
                    ))}
                    {tier === 'enterprise' && (
                      <>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-sm">Dedicated support team</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-sm">Custom integrations</span>
                        </li>
                      </>
                    )}
                  </ul>
                  <Button
                    className="w-full mt-6"
                    variant={tier === 'professional' ? 'default' : 'outline'}
                    onClick={() => {
                      const element = document.getElementById('contact-form');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {tier === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-16 bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Enterprise Clients</div>
          </div>
        </div>
      </section>

      {/* Our Development Process */}
      <section className="mt-16">
        <div className="text-center mb-12">
          <h2 className="font-Helvetica text-3xl font-bold mb-4">Our Proven Development Process</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We follow a comprehensive, client-centric approach that ensures every project is delivered on time, within budget, and exceeds expectations. Our methodology combines agile practices with rigorous quality assurance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              step: "01",
              title: "Discovery & Analysis",
              description: "Deep dive into your business requirements, technical constraints, and success metrics. We conduct stakeholder interviews, competitive analysis, and technical feasibility studies.",
              icon: Target,
              duration: "1-2 weeks",
              deliverables: ["Requirements document", "Technical specifications", "Project timeline"]
            },
            {
              step: "02",
              title: "Design & Architecture",
              description: "Create comprehensive system architecture, UI/UX designs, and technical blueprints. We focus on scalability, security, and user experience from the ground up.",
              icon: Layers,
              duration: "2-3 weeks",
              deliverables: ["System architecture", "UI/UX mockups", "Database design"]
            },
            {
              step: "03",
              title: "Development & Testing",
              description: "Agile development with continuous integration, automated testing, and regular client reviews. We ensure code quality, performance optimization, and security best practices.",
              icon: Code,
              duration: "4-12 weeks",
              deliverables: ["Working software", "Test reports", "Performance metrics"]
            },
            {
              step: "04",
              title: "Deployment & Support",
              description: "Seamless deployment to production environments with monitoring, documentation, and ongoing support. We provide training and ensure smooth transition to your team.",
              icon: Rocket,
              duration: "1-2 weeks",
              deliverables: ["Production deployment", "Documentation", "Training materials"]
            }
          ].map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center">
                      <process.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary/30">{process.step}</div>
                  </div>

                  <h3 className="font-semibold text-lg mb-3">{process.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {process.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-2" />
                      <span>{process.duration}</span>
                    </div>

                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">Key Deliverables:</p>
                      <ul className="space-y-1">
                        {process.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-center text-xs text-muted-foreground">
                            <div className="h-1 w-1 rounded-full bg-primary mr-2" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Connection line */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/30 to-primary/10 transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Technologies and Tools */}
        <div className="bg-gradient-to-r from-muted/30 to-muted/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="font-Helvetica text-2xl font-bold mb-4">Technologies & Tools We Use</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We leverage the latest technologies and industry-standard tools to deliver cutting-edge solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4 flex items-center">
                <Code className="h-4 w-4 mr-2 text-primary" />
                Frontend
              </h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center">
                <Server className="h-4 w-4 mr-2 text-primary" />
                Backend
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Python", "Java", "Go", "PostgreSQL", "MongoDB"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center">
                <Cloud className="h-4 w-4 mr-2 text-primary" />
                Cloud & DevOps
              </h4>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center">
                <Brain className="h-4 w-4 mr-2 text-primary" />
                AI/ML
              </h4>
              <div className="flex flex-wrap gap-2">
                {["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face", "MLflow"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="mt-16">
        <div className="text-center mb-12">
          <h2 className="font-Helvetica text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from our enterprise clients across different industries
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Digital Publishing Platform for Chania Publishers",
              industry: "Publishing",
              challenge: "Legacy content management and publishing workflow",
              result: "Modern web platform with automated publishing system",
              metric: "50% Faster Content Deployment",
              icon: Globe,
              color: "from-blue-600 to-purple-700"
            },
            {
              title: "Process Automation for EuroAfriQue Corporate Skills",
              industry: "Education/Training",
              challenge: "Manual enrollment, Schedule generation and management and course management processes",
              result: "Automated enrollment system with real-time reporting and the schedule management system",
              metric: "70% Time Savings",
              icon: Settings,
              color: "from-emerald-600 to-teal-700"
            },
            {
              title: "AI-Driven Data Research System (UTDRS)",
              industry: "Research/Data",
              challenge: "Manual data analysis and predictive modeling",
              result: "AI-powered insights and automated reporting",
              metric: "90% Accuracy Improvement",
              icon: Brain,
              color: "from-violet-600 to-fuchsia-700"
            },
            {
              title: "Technical SEO Overhaul for E-commerce Client",
              industry: "E-commerce",
              challenge: "Poor search rankings and site performance",
              result: "300% increase in organic traffic and rankings",
              metric: "Top 10 Search Positions",
              icon: TrendingUp,
              color: "from-amber-600 to-orange-700"
            }
          ].map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${caseStudy.color} shadow-lg`}>
                      <caseStudy.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {caseStudy.industry}
                    </Badge>
                  </div>

                  <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                    {caseStudy.title}
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground font-medium mb-1">Challenge:</p>
                      <p className="text-sm text-muted-foreground">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium mb-1">Result:</p>
                      <p className="text-sm">{caseStudy.result}</p>
                    </div>
                  </div>

                  <div className={`bg-gradient-to-r ${caseStudy.color} text-white px-4 py-2 rounded-lg text-center`}>
                    <p className="text-sm font-bold">{caseStudy.metric}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mt-16">
        <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h2 className="font-Helvetica text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Join 500+ satisfied clients who trust Muhscience Tech Labs with their most critical technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="min-w-[200px]"
                onClick={() => {
                  const element = document.getElementById('contact-form');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Users2 className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="min-w-[200px] bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => {
                  const whatsappUrl = `https://wa.me/254746254055?text=${encodeURIComponent('Hello! I\'m interested in your ' + activeService.title.toLowerCase() + ' services.')}`;
                  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                }}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 mt-6 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <Headphones className="h-4 w-4" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span>Proven Results</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Service Details & Form Section */}
      <section id="contact-form" className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-8">
        {/* Service Details */}
        <motion.div
          key={activeService.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="mb-8">
            <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${activeService.highlightColor} shadow-lg`}>
              <activeService.icon className="h-8 w-8 text-white" />
            </div>
            <h2 className="font-Helvetica text-3xl font-bold mb-2">
              {activeService.title}
            </h2>
            <p className="text-lg font-medium text-muted-foreground mb-4">
              {activeService.subtitle}
            </p>
          </div>

          <div className="rounded-lg border bg-card p-8 shadow-sm">
            <p className="mb-8 text-muted-foreground leading-relaxed">
              {activeService.description}
            </p>

            <div className="mb-6">
              <h3 className="font-Helvetica text-xl font-bold mb-4">Key Features</h3>
              <div className="space-y-6">
                {activeService.features.map((feature, index) => (
                  <div key={index} className="border-l-4 border-primary/20 pl-6 py-2">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 rounded-lg bg-gradient-to-br ${activeService.highlightColor} p-2`}>
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">{feature.name}</h4>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {feature.benefits.map((benefit, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs px-2 py-1">
                              ✓ {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t">
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  Timeline
                </h4>
                <p className="text-sm text-muted-foreground">{activeService.timeline}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <DollarSign className="h-4 w-4 mr-2 text-primary" />
                  Starting Price
                </h4>
                <p className="text-sm text-muted-foreground">{activeService.pricing.starter}</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3 flex items-center">
                <Briefcase className="h-4 w-4 mr-2 text-primary" />
                Industries We Serve
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeService.industries.map((industry) => (
                  <Badge key={industry} variant="outline" className="text-xs">
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                Key Deliverables
              </h4>
              <ul className="grid md:grid-cols-2 gap-2">
                {activeService.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-center text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Service Request Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle className="font-Helvetica">Request a Consultation</CardTitle>
              <CardDescription>
                Get in touch about our {activeService.title.toLowerCase()} services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <Input
                    id="service"
                    value={formData.service}
                    readOnly
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    type="submit"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </Button>
                  <AnimatePresence>
                    {submitSuccess && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center text-sm text-green-600"
                      >
                        <CheckCircle className="mr-1 h-4 w-4" />
                        Request sent successfully!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}