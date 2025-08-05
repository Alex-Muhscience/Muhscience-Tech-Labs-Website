"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award, Briefcase, Users, Globe, Shield, BrainCircuit, Rocket,
  CheckCircle, Star, Zap, Lightbulb, Headphones, Cloud,
  Settings, Trophy, TrendingUp, Bot, Eye
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

const stats = [
  { name: "Years Experience", value: "10+", icon: Briefcase, color: "bg-blue-100 text-blue-600" },
  { name: "Global Clients", value: "500+", icon: Globe, color: "bg-green-100 text-green-600" },
  { name: "Team Members", value: "15+", icon: Users, color: "bg-purple-100 text-purple-600" },
  { name: "Projects Completed", value: "1000+", icon: Award, color: "bg-amber-100 text-amber-600" },
];

const team = [
  {
    name: "Mr. Alex M. Kamau",
    role: "Chief Executive Officer",
    image: "/images/CEO.jpg",
    bio: "BSc in Computer Science with expertise in AI and cybersecurity. Founded CyberMuhscience in 2023 with a vision to bridge security and innovation.",
    social: { linkedin: "https://linkedin.com/in/alex-m-kamau-20015b340", twitter: "#" }
  },
  {
    name: "Apollo Kiiru",
    role: "Chief Technology Officer",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQGsYAMstZLE3w/profile-framedphoto-shrink_100_100/B4DZXAT83MHkAk-/0/1742688210661?e=17518824006v=beta6t=HoxMqsj7KeDM4nNIi2Y5-aTYrbyuV6SBm90hOUZLJS8",
    bio: "3+ years experience in software architecture and cloud computing. Leads our technical strategy and infrastructure.",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Mr. Brian Kimunya",
    role: "Head of AI Research and Data Science",
    image: "/images/AI_Research_Lead.jpg",
    bio: "BSc in Applied Statistics and Computer Science with a focus on AI and Data Science.",
    social: { linkedin: "#", twitter: "#" }
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


const awards = [
  {
    title: "Best Cybersecurity Innovation",
    organization: "Tech Excellence Awards 2024",
    year: "2024",
    icon: Trophy,
    description: "Recognition for our AI-driven threat detection platform"
  },
  {
    title: "AI Security Solution of the Year",
    organization: "CyberSec Summit",
    year: "2024",
    icon: Award,
    description: "Awarded for breakthrough machine learning algorithms in cybersecurity"
  },
  {
    title: "Rising Star in Cloud Security",
    organization: "Cloud Security Alliance",
    year: "2023",
    icon: Star,
    description: "Recognized as a leading innovator in cloud-native security solutions"
  },
  {
    title: "Top 10 Security Startups to Watch",
    organization: "Security Magazine",
    year: "2023",
    icon: TrendingUp,
    description: "Featured among the most promising cybersecurity companies globally"
  }
];


const whyChooseUs = [
  {
    title: "24/7 Elite Support",
    description: "Round-the-clock monitoring and support from our team of certified security experts with average response time under 15 minutes",
    icon: Headphones,
    features: ["Dedicated Security Operations Center", "Real-time threat alerts", "Emergency incident response", "Proactive threat hunting"],
    stats: "15min average response time"
  },
  {
    title: "Cutting-Edge Technology",
    description: "We invest 40% of our revenue in R6D to stay ahead of emerging threats and leverage breakthrough technologies",
    icon: BrainCircuit,
    features: ["AI-powered threat detection", "Quantum-resistant encryption", "Advanced behavioral analytics", "Proprietary threat intelligence"],
    stats: "40% revenue invested in R6D"
  },
  {
    title: "Proven Track Record",
    description: "Over 1000 successful deployments with zero security breaches across our entire client base since inception",
    icon: CheckCircle,
    features: ["100% deployment success rate", "Zero client breaches", "Industry certifications", "Compliance expertise"],
    stats: "0 breaches in 1000+ deployments"
  },
  {
    title: "Scalable Solutions",
    description: "From 10-person startups to Fortune 500 enterprises, our modular architecture adapts to any scale",
    icon: TrendingUp,
    features: ["Flexible pricing models", "Modular architecture", "Global deployment capability", "Custom integration options"],
    stats: "10 to 100,000+ user scalability"
  }
];


export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/95 py-20 md:py-28">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:75px_75px]" />
          <div className="container relative px-4 sm:px-6">
            {mounted ? (
              <div className="mx-auto max-w-4xl text-center opacity-0 animate-fadeIn">
                <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                  🚀 Pioneering the Future of Technology
                </Badge>
                <h1 className="font-Helvetica text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">
                  About <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Muhscience Tech Labs</span>
                </h1>
                <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-xl sm:leading-9 max-w-3xl mx-auto">
                  We are your trusted partner in cybersecurity, AI innovation, and cloud solutions. 
                  We empower businesses worldwide to secure their digital future and unlock new potentials.
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
              </div>
            ) : (
              <div className="mx-auto max-w-4xl text-center">
                <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                  🚀 Pioneering the Future of Technology
                </Badge>
                <h1 className="font-Helvetica text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">
                  About <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Muhscience Tech Labs</span>
                </h1>
                <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-xl sm:leading-9 max-w-3xl mx-auto">
                  We are your trusted partner in cybersecurity, AI innovation, and cloud solutions.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container px-4 sm:px-6 max-w-5xl mx-auto">
            <h2 className="text-center font-Helvetica text-3xl font-bold mb-8">Our Philosophy</h2>
            <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              At Muhscience Tech Labs, we believe technology should do more than function — it should inspire, empower, and transform. We blend innovation with integrity, delivering tailored solutions that anticipate future needs while fortifying today's security landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="font-semibold text-xl mb-2">Security at the Core</h3>
                <p className="text-muted-foreground">
                  We place security at the heart of everything we build, ensuring our clients withstand today's evolving cyber threats.
                </p>
              </div>
              <div className="text-center">
                <Rocket className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="font-semibold text-xl mb-2">Innovation Forward</h3>
                <p className="text-muted-foreground">
                  Pushing technological boundaries is in our DNA; we leverage AI, cloud, and data science to create game-changing solutions.
                </p>
              </div>
              <div className="text-center">
                <Users className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="font-semibold text-xl mb-2">Client Partnership</h3>
                <p className="text-muted-foreground">
                  We build long-term partnerships, adapting and scaling our solutions to grow alongside our clients' ambitions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container px-4 sm:px-6 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <Card key={stat.name} className="h-full">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${stat.color} p-2`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-Helvetica text-3xl font-bold">{stat.value}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{stat.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
            <h2 className="font-Helvetica text-3xl font-bold mb-6 text-center">Success Stories That Matter</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 text-center">
              See how our award-winning solutions are driving transformative results for clients globally.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story) => (
                <Card key={story.title} className="h-full p-6 hover:shadow-xl transition-all duration-300">
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
              ))}
            </div>
          </div>
        </section>

        {/* Innovation Lab Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-purple-50/50 to-blue-50/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="container px-4 sm:px-6 max-w-6xl mx-auto relative">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                🧪 Innovation Lab
              </Badge>
              <h2 className="font-Helvetica text-3xl font-bold mb-6">Where Tomorrow's Security is Born Today</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Step inside our innovation lab where cutting-edge research meets real-world application. We're not just responding to threats — we're anticipating them.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6">Research & Development Focus Areas</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                      <BrainCircuit className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Quantum-Resistant AI</h4>
                      <p className="text-muted-foreground text-sm">Developing AI models that remain secure even against quantum computing attacks, ensuring your data stays protected in the post-quantum era.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                      <Eye className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Predictive Threat Intelligence</h4>
                      <p className="text-muted-foreground text-sm">Advanced algorithms that predict cyber attacks 72 hours before they occur, giving you unprecedented preparation time.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                      <Bot className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Autonomous Security Operations</h4>
                      <p className="text-muted-foreground text-sm">Self-healing security systems that adapt, learn, and respond to threats without human intervention, providing 24/7 protection.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="bg-primary/10 rounded-full p-4 w-20 h-20 mx-auto mb-4">
                    <Lightbulb className="h-12 w-12 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Innovation Pipeline</h4>
                  <p className="text-muted-foreground text-sm">Current breakthrough projects in development</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-sm">Neural Network Threat Detection</span>
                    <Badge variant="outline" className="text-xs">Q2 2024</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-sm">Quantum-Safe Protocol Suite</span>
                    <Badge variant="outline" className="text-xs">Q3 2024</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium text-sm">Autonomous Incident Response</span>
                    <Badge variant="outline" className="text-xs">Q4 2024</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Settings className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-3">40% Revenue in R&D</h4>
                <p className="text-muted-foreground text-sm mb-4">We invest nearly half our revenue back into research and development, ensuring we stay ahead of emerging threats.</p>
                <div className="text-2xl font-bold text-primary">40%</div>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-indigo-600" />
                </div>
                <h4 className="font-semibold mb-3">15+ Patents Filed</h4>
                <p className="text-muted-foreground text-sm mb-4">Our innovations are protected by intellectual property, representing breakthrough solutions in cybersecurity.</p>
                <div className="text-2xl font-bold text-primary">15+</div>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="bg-teal-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <h4 className="font-semibold mb-3">PhD Research Team</h4>
                <p className="text-muted-foreground text-sm mb-4">Our research team includes PhD-level experts in AI, cryptography, and quantum computing from top universities.</p>
                <div className="text-2xl font-bold text-primary">8+</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Awards and Recognition Section */}
        <section className="py-20">
          <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
            <h2 className="font-Helvetica text-3xl font-bold mb-6 text-center">Awards & Recognition</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 text-center">
              Our innovative solutions have earned accolades from industry leaders and security experts worldwide.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {awards.map((award) => (
                <Card key={award.title} className="p-6 text-center h-full hover:shadow-lg transition-all">
                  <div className="bg-amber-100 rounded-full p-3 w-16 h-16 mx-auto mb-4">
                    <award.icon className="h-10 w-10 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{award.title}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{award.organization}</p>
                  <Badge variant="outline" className="text-xs">{award.year}</Badge>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
            <h2 className="text-center font-Helvetica text-3xl font-bold mb-6">Meet Our Leadership Team</h2>
            <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              Our leadership is driven by passion, expertise, and a relentless commitment to client success.
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <Card key={member.name} className="overflow-hidden transition-all hover:shadow-lg">
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
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container px-4 sm:px-6 max-w-5xl mx-auto">
            <h2 className="text-center font-Helvetica text-3xl font-bold mb-6">Why Choose Muhscience Tech Labs?</h2>
            <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              Discover the unparalleled advantages that set us apart in the cybersecurity and AI innovation space.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div className="mx-auto max-w-4xl text-center" key={reason.title}>
                  <Card className="p-8 h-full hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                        <reason.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-3">{reason.title}</h3>
                        <p className="text-muted-foreground mb-4">{reason.description}</p>
                        <ul className="space-y-2">
                          {reason.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-purple-500/10">
          <div className="container px-4 sm:px-6 max-w-4xl mx-auto text-center">
            <h3 className="font-Helvetica text-2xl font-semibold mb-4">Ready to Partner with Us?</h3>
            <p className="text-muted-foreground mb-6">
              Let’s build your next secure, innovative digital solution together. Contact us today to get started.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact">Get in Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/services">Explore Our Services</a>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}

