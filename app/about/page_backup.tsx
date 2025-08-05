"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Award, Briefcase, Users, Globe, Shield, Code, BrainCircuit, Rocket, 
  Target, TrendingUp, Clock, CheckCircle, Star, Zap, Heart, Lightbulb,
  MessageSquare, Phone, Mail, MapPin, Calendar, DollarSign, PlayCircle,
  Users2, Headphones, Eye, Lock, Database, Network, Bot, Cloud, Smartphone,
  BarChart, Settings, Layers, FileCode, Monitor, Cpu, Key, AlertTriangle,
  ArrowRight, Building, GraduationCap, Trophy, Handshake, Compass
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import '../globals.css';

const stats = [
  { name: "Years Experience", value: "10+", icon: Briefcase, color: "bg-blue-100 text-blue-600", description: "Combined team experience" },
  { name: "Global Clients", value: "500+", icon: Globe, color: "bg-green-100 text-green-600", description: "Across 25+ countries" },
  { name: "Team Members", value: "15+", icon: Users, color: "bg-purple-100 text-purple-600", description: "Expert professionals" },
  { name: "Projects Completed", value: "1000+", icon: Award, color: "bg-amber-100 text-amber-600", description: "Successful deployments" },
];

const team = [
  {
    name: "Mr. Alex M. Kamau",
    role: "Chief Executive Officer",
    image: "/images/CEO.jpg",
    bio: "BSc in Computer Science with expertise in AI and cybersecurity. Founded CyberMuhscience in 2023 with a vision to bridge security and innovation.",
    social: {
      linkedin: "https://linkedin.com/in/alex-m-kamau-20015b340",
      twitter: "#"
    }
  },
  {
    name: "Apollo Kiiru",
    role: "Chief Technology Officer",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQGsYAMstZLE3w/profile-framedphoto-shrink_100_100/B4DZXAT83MHkAk-/0/1742688210661?e=1751882400&v=beta&t=HoxMqsj7KeDM4nNIi2Y5-aTYrbyuV6SBm90hOUZLJS8",
    bio: "3+ years experience in software architecture and cloud computing. Leads our technical strategy and infrastructure.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Mr. Brian Kimunya",
    role: "Head of AI Research and Data Science",
    image: "/images/AI_Research_Lead.jpg",
    bio: "Bsc in Applied Statistics and Computer Science with a focus on AI and Data Science.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  //{
   // name: "James Park",
    //role: "Security Director",
    //image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
   // bio: "Former CISO at Fortune 500 company. Expert in enterprise security frameworks and threat intelligence.",
   // social: {
    //  linkedin: "#",
     // twitter: "#"
  //  }
  //},
];

const coreValues = [
  {
    title: "Security First",
    description: "We prioritize robust security in all our solutions",
    icon: Shield
  },
  {
    title: "Technical Excellence",
    description: "We maintain the highest standards in our work",
    icon: Code
  },
  {
    title: "Innovation Driven",
    description: "We constantly push technological boundaries",
    icon: BrainCircuit
  },
  {
    title: "Future Focused",
    description: "We build solutions for tomorrow's challenges",
    icon: Rocket
  }
];

const testimonials = [
  {
    quote: "Muhscience Tech Labs transformed our cybersecurity posture completely. Their AI-driven threat detection prevented what could have been a catastrophic breach.",
    author: "Sarah Chen",
    role: "CISO, TechCorp Global",
    company: "Fortune 500 Financial Services",
    rating: 5
  },
  {
    quote: "The team's expertise in cloud architecture helped us scale from startup to enterprise seamlessly. Their 24/7 monitoring gives us complete peace of mind.",
    author: "Michael Rodriguez",
    role: "CTO, InnovateLabs",
    company: "Series B SaaS Startup",
    rating: 5
  },
  {
    quote: "Their AI solutions have revolutionized our data analytics capabilities. We've seen a 300% improvement in threat prediction accuracy.",
    author: "Dr. Emma Thompson",
    role: "Head of Research",
    company: "Global Healthcare Network",
    rating: 5
  }
];

const awards = [
  {
    title: "Best Cybersecurity Innovation",
    organization: "Tech Excellence Awards 2024",
    year: "2024",
    icon: Trophy
  },
  {
    title: "AI Security Solution of the Year",
    organization: "CyberSec Summit",
    year: "2024",
    icon: Award
  },
  {
    title: "Rising Star in Cloud Security",
    organization: "Cloud Security Alliance",
    year: "2023",
    icon: Star
  },
  {
    title: "Top 10 Security Startups to Watch",
    organization: "Security Magazine",
    year: "2023",
    icon: TrendingUp
  }
];

const industries = [
  {
    name: "Financial Services",
    description: "Banks, fintech, and investment firms trust us with their most sensitive data",
    icon: DollarSign,
    clients: "150+",
    color: "bg-green-100 text-green-600"
  },
  {
    name: "Healthcare",
    description: "HIPAA-compliant solutions protecting patient data and medical research",
    icon: Heart,
    clients: "80+",
    color: "bg-red-100 text-red-600"
  },
  {
    name: "Technology",
    description: "SaaS platforms, startups, and tech giants securing their innovations",
    icon: Code,
    clients: "200+",
    color: "bg-blue-100 text-blue-600"
  },
  {
    name: "Government",
    description: "Public sector agencies and contractors with the highest security standards",
    icon: Building,
    clients: "25+",
    color: "bg-purple-100 text-purple-600"
  },
  {
    name: "Education",
    description: "Universities and research institutions protecting intellectual property",
    icon: GraduationCap,
    clients: "45+",
    color: "bg-amber-100 text-amber-600"
  },
  {
    name: "Manufacturing",
    description: "Industrial IoT security and operational technology protection",
    icon: Settings,
    clients: "60+",
    color: "bg-orange-100 text-orange-600"
  }
];

const successStories = [
  {
    title: "Prevented $50M Ransomware Attack",
    description: "Our AI-powered threat detection identified and neutralized a sophisticated ransomware campaign targeting a major financial institution.",
    impact: "100% threat neutralization in under 2 minutes",
    icon: Shield,
    metric: "$50M+",
    label: "Potential losses prevented"
  },
  {
    title: "99.99% Uptime Achievement",
    description: "Implemented cloud-native architecture for a SaaS platform serving 2M+ users globally with zero downtime incidents.",
    impact: "Scaled from 10K to 2M users seamlessly",
    icon: Cloud,
    metric: "99.99%",
    label: "System uptime maintained"
  },
  {
    title: "500% Faster Threat Response",
    description: "Automated incident response system reduced average threat response time from 4 hours to 30 minutes for a healthcare network.",
    impact: "Protecting 500,000+ patient records daily",
    icon: Zap,
    metric: "500%",
    label: "Improvement in response speed"
  }
];

const whyChooseUs = [
  {
    title: "24/7 Elite Support",
    description: "Round-the-clock monitoring and support from our team of certified security experts",
    icon: Headphones,
    features: ["Dedicated account manager", "Real-time alerts", "Emergency response team"]
  },
  {
    title: "Cutting-Edge Technology",
    description: "We leverage the latest in AI, machine learning, and quantum-resistant encryption",
    icon: BrainCircuit,
    features: ["AI-powered threat detection", "Quantum-safe encryption", "Advanced analytics"]
  },
  {
    title: "Proven Track Record",
    description: "Over 1000 successful deployments with zero security breaches across our client base",
    icon: CheckCircle,
    features: ["100% success rate", "Zero breaches", "Industry recognition"]
  },
  {
    title: "Scalable Solutions",
    description: "From startups to Fortune 500, our solutions grow with your business",
    icon: TrendingUp,
    features: ["Flexible pricing", "Modular architecture", "Global deployment"]
  }
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/95 py-20 md:py-28">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:75px_75px]" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/0 to-primary/20 about-mask-image"
            aria-hidden="true"
          />
          <div className="container relative px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-center"
            >
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                🚀 Pioneering the Future of Technology
              </Badge>
              <h1 className="font-Helvetica text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">
                About <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Muhscience Tech Labs</span>
              </h1>
              <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-xl sm:leading-9 max-w-3xl mx-auto">
                We are more than just a technology company. We are digital architects, security guardians, and innovation catalysts. 
                Since our inception, we've been dedicated to transforming complex challenges into elegant solutions that secure, innovate, and elevate businesses worldwide.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-primary" />
                  <span>AI Innovation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <span>Global Impact</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>Award Winning</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-16"
              >
                <h2 className="font-Helvetica text-3xl font-bold mb-6">Our Story: From Vision to Reality</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Every great company starts with a bold vision. Ours began with a simple yet powerful belief: 
                  technology should empower, protect, and inspire.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-full p-2 mt-1">
                        <Lightbulb className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">The Genesis (2021)</h3>
                        <p className="text-muted-foreground">
                          Founded by visionary technologists who recognized the growing gap between 
                          traditional security approaches and modern digital threats. We started with 
                          a mission to revolutionize how organizations think about cybersecurity.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-full p-2 mt-1">
                        <Rocket className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Rapid Growth (2022-2023)</h3>
                        <p className="text-muted-foreground">
                          Expanded our expertise into AI and machine learning, recognizing that the future 
                          of security lies in intelligent, adaptive systems. Our team grew from 3 to 15+ 
                          expert professionals.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-full p-2 mt-1">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Global Impact (2024-Present)</h3>
                        <p className="text-muted-foreground">
                          Today, we serve 500+ clients across 25+ countries, delivering enterprise-grade 
                          solutions that have prevented millions in cyber losses and driven digital 
                          transformation initiatives worldwide.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">$50M+</div>
                        <div className="text-sm text-muted-foreground">Cyber Losses Prevented</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                        <div className="text-sm text-muted-foreground">Threat Detection Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                        <div className="text-sm text-muted-foreground">Security Monitoring</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">25+</div>
                        <div className="text-sm text-muted-foreground">Countries Served</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container px-4 sm:px-6">
            <motion.div 
              className="grid grid-cols-2 gap-6 sm:grid-cols-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.name}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${stat.color} p-2`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-4 font-Helvetica text-3xl font-bold">{stat.value}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{stat.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-muted py-20">
          <div className="container px-4 sm:px-6">
            <motion.div
              className="mx-auto max-w-4xl rounded-xl bg-background p-8 shadow-sm sm:p-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-center font-Helvetica text-3xl font-bold">Our Mission</h2>
              <p className="mt-6 text-center text-lg text-muted-foreground">
                To empower organizations with cutting-edge technology solutions that protect,
                innovate, and transform. We believe in a future where security and
                innovation go hand in hand, creating a safer digital world for everyone.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-center font-Helvetica text-3xl font-bold">Our Core Values</h2>
              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <Card className="h-full p-6 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mt-6 font-Helvetica text-xl font-semibold">{value.title}</h3>
                      <p className="mt-2 text-muted-foreground">{value.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technologies & Innovation Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-Helvetica text-3xl font-bold mb-6">Technologies & Innovation</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We leverage cutting-edge technologies to deliver solutions that are not just secure, but future-ready.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="text-center"
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                    <BrainCircuit className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-4">Artificial Intelligence</h3>
                  <p className="text-muted-foreground mb-6">
                    Advanced machine learning algorithms for predictive threat detection, automated response systems, 
                    and intelligent data analysis that evolves with emerging threats.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">TensorFlow</Badge>
                    <Badge variant="secondary">PyTorch</Badge>
                    <Badge variant="secondary">Neural Networks</Badge>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="text-center"
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                    <Cloud className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-4">Cloud Infrastructure</h3>
                  <p className="text-muted-foreground mb-6">
                    Scalable, secure cloud architectures built on AWS, Azure, and GCP. 
                    Zero-trust security models with end-to-end encryption and compliance frameworks.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Azure</Badge>
                    <Badge variant="secondary">Kubernetes</Badge>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="text-center"
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all">
                  <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-4">Cybersecurity</h3>
                  <p className="text-muted-foreground mb-6">
                    Next-generation security protocols including quantum-resistant encryption, 
                    behavioral analytics, and real-time threat intelligence powered by AI.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">Zero Trust</Badge>
                    <Badge variant="secondary">SOC 2</Badge>
                    <Badge variant="secondary">ISO 27001</Badge>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <h2 className="text-center font-Helvetica text-3xl font-bold">Leadership Team</h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
                Meet the visionary leaders driving our company's success
              </p>
              <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {team.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="overflow-hidden transition-all hover:shadow-lg">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-Helvetica text-xl font-semibold">{member.name}</h3>
                        <p className="text-sm text-primary">{member.role}</p>
                        <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
                        <div className="mt-4 flex space-x-4">
                          <a href={member.social.linkedin} className="text-sm font-medium text-primary hover:underline">
                            LinkedIn
                          </a>
                          <a href={member.social.twitter} className="text-sm font-medium text-primary hover:underline">
                            Twitter
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="text-center mb-16"
            >
              <h2 className="font-Helvetica text-3xl font-bold mb-6">Success Stories That Matter</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real results from real clients. See how we've transformed businesses and prevented millions in losses.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full p-6 hover:shadow-xl transition-all duration-300">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                      <story.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-4 text-center">{story.title}</h3>
                    <p className="text-muted-foreground mb-6 text-center">{story.description}</p>
                    <div className="text-center border-t pt-4">
                      <div className="text-3xl font-bold text-primary mb-1">{story.metric}</div>
                      <div className="text-sm text-muted-foreground mb-2">{story.label}</div>
                      <div className="text-xs text-green-600 font-medium">{story.impact}</div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Expertise Section */}
        <section className="py-20">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-Helvetica text-3xl font-bold mb-6">Industry Expertise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by leading organizations across diverse industries with specialized security requirements.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.0 + index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${industry.color} p-2 flex-shrink-0`}>
                        <industry.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-lg">{industry.name}</h3>
                          <Badge variant="secondary">{industry.clients} clients</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{industry.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="py-20 bg-muted">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 }}
              className="text-center mb-16"
            >
              <h2 className="font-Helvetica text-3xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Hear from the security leaders who trust us with their most critical assets.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4 + index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-background">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t pt-4">
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-primary">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards and Recognition Section */}
        <section className="py-20">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-Helvetica text-3xl font-bold mb-6">Awards & Recognition</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our innovative solutions and exceptional service have been recognized by industry leaders worldwide.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="p-6 text-center h-full hover:shadow-lg transition-all">
                    <div className="bg-amber-100 rounded-full p-3 w-16 h-16 mx-auto mb-4">
                      <award.icon className="h-10 w-10 text-amber-600" />
                    </div>
                    <h3 className="font-semibold text-sm mb-2">{award.title}</h3>
                    <p className="text-xs text-muted-foreground mb-1">{award.organization}</p>
                    <Badge variant="outline" className="text-xs">{award.year}</Badge>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.0 }}
              className="text-center mb-16"
            >
              <h2 className="font-Helvetica text-3xl font-bold mb-6">Why Choose Muhscience Tech Labs?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                When security and innovation matter most, organizations worldwide choose us for our proven expertise and unwavering commitment.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3.2 + index * 0.1 }}
                >
                  <Card className="p-8 h-full hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                        <reason.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-3">{reason.title}</h3>
                        <p className="text-muted-foreground mb-4">{reason.description}</p>
                        <ul className="space-y-2">
                          {reason.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 sm:px-6">
            <motion.div
              className="rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <h3 className="font-Helvetica text-2xl font-semibold">Ready to work with us?</h3>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                Discover how our expertise can help secure and transform your business.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="/contact">Get in Touch</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/services">Our Services</a>
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
