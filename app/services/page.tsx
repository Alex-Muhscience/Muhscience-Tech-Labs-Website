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
    id: "cybersecurity",
    icon: Lock,
    title: "Cybersecurity Solutions",
    subtitle: "Fortress-Level Protection for Your Digital Assets",
    description: "In today's digital landscape, cybersecurity isn't just an option—it's a necessity. Our comprehensive cybersecurity solutions protect your business from evolving threats while ensuring compliance and business continuity. We combine advanced threat detection, proactive monitoring, and incident response to create a security ecosystem that adapts to your unique risk profile.",
    highlightColor: "from-blue-600 to-purple-700",
    features: [
      { 
        icon: Shield, 
        name: "24/7 Security Operations Center (SOC)", 
        description: "Round-the-clock monitoring and threat detection by certified security analysts using advanced SIEM platforms, machine learning algorithms, and threat intelligence feeds. Our SOC provides real-time visibility into your security posture with automated incident response and detailed forensic analysis.",
        benefits: ["Real-time threat detection", "15-minute incident response", "Compliance reporting"]
      },
      { 
        icon: Database, 
        name: "Advanced Data Protection & Encryption", 
        description: "Enterprise-grade encryption solutions including AES-256 encryption, comprehensive key management, and data loss prevention (DLP) systems. We protect data at rest, in transit, and in use with zero-trust architecture principles.",
        benefits: ["Zero-trust architecture", "End-to-end encryption", "GDPR/HIPAA compliance"]
      },
      { 
        icon: Network, 
        name: "Next-Gen Firewall & Network Security", 
        description: "AI-powered network security with deep packet inspection, intrusion prevention systems, and automated threat response. Our solutions include network segmentation, bandwidth optimization, and advanced persistent threat (APT) protection.",
        benefits: ["99.9% threat blocking rate", "Bandwidth optimization", "Zero-day protection"]
      },
      { 
        icon: Eye, 
        name: "Vulnerability Assessment & Penetration Testing", 
        description: "Comprehensive security audits including automated vulnerability scanning, manual penetration testing, social engineering assessments, and detailed remediation roadmaps with risk prioritization.",
        benefits: ["Quarterly security assessments", "Risk prioritization matrix", "Compliance validation"]
      }
    ],
    pricing: {
      starter: "$2,500/month",
      professional: "$5,000/month",
      enterprise: "Custom pricing"
    },
    deliverables: ["Security architecture design", "24/7 monitoring dashboard", "Monthly security reports", "Incident response playbooks", "Compliance documentation"],
    timeline: "2-4 weeks implementation",
    industries: ["Healthcare", "Finance", "Government", "E-commerce", "Manufacturing"],
    certifications: ["ISO 27001", "SOC 2", "CISSP", "CISM", "CEH"]
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & Machine Learning",
    subtitle: "Intelligent Solutions for Tomorrow's Challenges",
    description: "Harness the transformative power of artificial intelligence and machine learning to revolutionize your business operations. Our AI solutions go beyond automation—they provide intelligent insights, predictive capabilities, and adaptive learning systems that evolve with your business needs. From computer vision to natural language processing, we create AI that understands your industry's unique challenges.",
    highlightColor: "from-emerald-600 to-teal-700",
    features: [
      { 
        icon: Bot, 
        name: "Custom AI Model Development", 
        description: "Bespoke machine learning models tailored to your specific use cases, from computer vision and natural language processing to predictive analytics and recommendation engines. We use cutting-edge frameworks like TensorFlow, PyTorch, and custom neural architectures.",
        benefits: ["95%+ accuracy rates", "Scalable cloud architecture", "Real-time inference"]
      },
      { 
        icon: BarChart, 
        name: "Predictive Analytics & Business Intelligence", 
        description: "Advanced analytics platforms that transform raw data into actionable insights using statistical modeling, machine learning, and big data technologies. Our solutions include demand forecasting, customer behavior analysis, and risk assessment models.",
        benefits: ["Automated insight generation", "Trend forecasting", "Risk assessment algorithms"]
      },
      { 
        icon: Settings, 
        name: "Intelligent Process Automation (IPA)", 
        description: "Combine robotic process automation (RPA) with AI capabilities to automate complex business processes, including document processing, decision-making workflows, and customer service operations with natural language understanding.",
        benefits: ["80% cost reduction", "24/7 operation capability", "99% error elimination"]
      },
      { 
        icon: MessageSquare, 
        name: "Conversational AI & Chatbots", 
        description: "Sophisticated conversational interfaces powered by natural language understanding, sentiment analysis, and context-aware dialogue management. Our chatbots provide human-like interactions with learning capabilities and multi-channel deployment.",
        benefits: ["50+ language support", "Context-aware responses", "Continuous learning"]
      }
    ],
    pricing: {
      starter: "$5,000/month",
      professional: "$15,000/month",
      enterprise: "Custom pricing"
    },
    deliverables: ["AI strategy roadmap", "Custom model deployment", "Performance monitoring dashboard", "Training documentation", "API integration"],
    timeline: "6-12 weeks development",
    industries: ["Retail", "Healthcare", "Finance", "Manufacturing", "Logistics"],
    technologies: ["TensorFlow", "PyTorch", "AWS SageMaker", "Azure ML", "Google AI"]
  },
  {
    id: "software",
    icon: Code,
    title: "Software Development",
    subtitle: "Scalable Solutions Built for Success",
    description: "From concept to deployment, we create robust, scalable software solutions using cutting-edge technologies and industry best practices. Our full-stack development approach ensures seamless integration across all layers of your technology stack, with emphasis on performance, security, and user experience. We specialize in modern architectures including microservices, serverless, and cloud-native applications.",
    highlightColor: "from-amber-600 to-orange-700",
    features: [
      { 
        icon: Cloud, 
        name: "Cloud-Native Application Development", 
        description: "Modern applications built with microservices architecture, containerization (Docker/Kubernetes), and cloud-first principles. We leverage AWS, Azure, and Google Cloud Platform for maximum scalability, reliability, and cost-effectiveness.",
        benefits: ["Auto-scaling capabilities", "99.99% uptime SLA", "Global deployment ready"]
      },
      { 
        icon: Smartphone, 
        name: "Cross-Platform Mobile Development", 
        description: "Native-quality mobile applications that work seamlessly across iOS, Android, and web platforms using React Native, Flutter, and Progressive Web App technologies. Our apps feature offline capabilities, push notifications, and native device integration.",
        benefits: ["Single codebase efficiency", "Native performance", "App store optimization"]
      },
      { 
        icon: Server, 
        name: "Enterprise System Integration", 
        description: "Seamless integration of existing systems with modern APIs, microservices architecture, and event-driven communication patterns. We ensure data consistency, workflow automation, and real-time synchronization across your entire technology ecosystem.",
        benefits: ["Real-time data sync", "Legacy system modernization", "Automated workflows"]
      },
      { 
        icon: Globe, 
        name: "Progressive Web Applications (PWA)", 
        description: "High-performance web applications that provide native app experiences across all devices and platforms. Features include offline functionality, push notifications, background sync, and app-like installation without app stores.",
        benefits: ["Offline-first design", "Push notification support", "No installation required"]
      }
    ],
    pricing: {
      starter: "$10,000 project",
      professional: "$50,000 project",
      enterprise: "Custom pricing"
    },
    deliverables: ["Technical architecture document", "Source code repository", "API documentation", "Deployment scripts", "Maintenance plan", "User training materials"],
    timeline: "8-16 weeks development",
    industries: ["SaaS", "E-commerce", "Healthcare", "Education", "Financial Services"],
    technologies: ["React", "Node.js", "Python", "Kubernetes", "MongoDB", "PostgreSQL"]
  },
  {
    id: "innovation",
    icon: Sparkles,
    title: "Innovation Labs",
    subtitle: "Pioneering the Future of Technology",
    description: "Stay ahead of the technological curve with our dedicated research and development services. We explore emerging technologies, create proof-of-concepts, and help you navigate the future of technology. Our innovation lab combines cutting-edge research with practical business applications, ensuring that new technologies translate into competitive advantages for your organization.",
    highlightColor: "from-violet-600 to-fuchsia-700",
    features: [
      { 
        icon: Rocket, 
        name: "Emerging Technology Research", 
        description: "Deep dive into cutting-edge technologies including quantum computing, blockchain, IoT, AR/VR, edge computing, and Web3. Our research includes market analysis, technology readiness assessment, and strategic implementation roadmaps tailored to your industry.",
        benefits: ["Technology roadmaps", "Market opportunity analysis", "ROI projections"]
      },
      { 
        icon: Zap, 
        name: "Rapid Prototype Development", 
        description: "Quick turnaround prototypes and minimum viable products (MVPs) to validate concepts, test market fit, and secure stakeholder buy-in. We use agile methodologies, design thinking, and lean startup principles for fast iteration cycles.",
        benefits: ["2-week prototype delivery", "User feedback integration", "Iterative development cycles"]
      },
      { 
        icon: Target, 
        name: "Digital Transformation Consulting", 
        description: "Comprehensive strategy development to guide your organization through digital transformation initiatives. Our approach includes technology assessment, change management planning, and phased implementation strategies that minimize disruption while maximizing value.",
        benefits: ["Strategic transformation planning", "Change management support", "Technology adoption frameworks"]
      },
      { 
        icon: Award, 
        name: "Innovation Workshops & Training", 
        description: "Hands-on workshops and training programs designed to build internal innovation capabilities within your organization. We cover design thinking, agile methodologies, emerging technologies, and innovation culture development.",
        benefits: ["Team skill development", "Innovation process establishment", "Cultural transformation support"]
      }
    ],
    pricing: {
      starter: "$3,000/project",
      professional: "$25,000/project",
      enterprise: "Custom pricing"
    },
    deliverables: ["Research reports", "Interactive prototype demos", "Implementation roadmap", "Training materials", "Innovation framework"],
    timeline: "4-8 weeks research",
    industries: ["Technology Startups", "Government Agencies", "Research Institutions", "Large Enterprises", "Non-profits"],
    specialties: ["Quantum Computing", "Blockchain", "IoT", "AR/VR", "Edge Computing"]
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
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      activeService.id === service.id 
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
                  title: "Healthcare Security Transformation",
                  industry: "Healthcare",
                  challenge: "HIPAA compliance and patient data protection",
                  result: "99.9% threat prevention, zero data breaches",
                  metric: "100% Compliance",
                  icon: Shield,
                  color: "from-blue-600 to-blue-800"
                },
                {
                  title: "AI-Powered Supply Chain Optimization",
                  industry: "Manufacturing",
                  challenge: "Inefficient inventory management and forecasting",
                  result: "40% reduction in inventory costs, 25% faster delivery",
                  metric: "$2M Saved Annually",
                  icon: Bot,
                  color: "from-green-600 to-green-800"
                },
                {
                  title: "Cloud-Native E-commerce Platform",
                  industry: "Retail",
                  challenge: "Legacy system scalability issues",
                  result: "10x traffic handling capacity, 50% faster page loads",
                  metric: "300% Revenue Growth",
                  icon: Cloud,
                  color: "from-purple-600 to-purple-800"
                },
                {
                  title: "Financial Services Risk Analytics",
                  industry: "Finance",
                  challenge: "Real-time fraud detection and risk assessment",
                  result: "95% fraud detection accuracy, 60% faster processing",
                  metric: "$5M Loss Prevention",
                  icon: BarChart,
                  color: "from-orange-600 to-orange-800"
                },
                {
                  title: "Government Cybersecurity Framework",
                  industry: "Government",
                  challenge: "Multi-agency security standardization",
                  result: "Unified security posture across 15 agencies",
                  metric: "Zero Incidents",
                  icon: Lock,
                  color: "from-red-600 to-red-800"
                },
                {
                  title: "EdTech Learning Platform",
                  industry: "Education",
                  challenge: "Remote learning scalability and engagement",
                  result: "500K+ concurrent users, 40% better engagement",
                  metric: "2M+ Students",
                  icon: Users,
                  color: "from-indigo-600 to-indigo-800"
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