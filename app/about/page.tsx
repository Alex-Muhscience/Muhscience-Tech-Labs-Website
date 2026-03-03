"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, Globe, Briefcase, Award, TrendingUp, Zap, 
  CheckCircle, Star, Lightbulb, Settings, ArrowRight,
  Calendar, Target, BarChart, Cpu, Database
} from "lucide-react";
import Link from 'next/link';
import '../globals.css';

const companyStats = [
  { name: "Systems Deployed", value: "500+", icon: Cpu, color: "bg-blue-100 text-blue-600" },
  { name: "SMEs Transformed", value: "200+", icon: TrendingUp, color: "bg-green-100 text-green-600" },
  { name: "Team Experts", value: "25+", icon: Users, color: "bg-purple-100 text-purple-600" },
  { name: "Client Retention", value: "98%", icon: Award, color: "bg-amber-100 text-amber-600" },
];

const coreValues = [
  {
    title: "Systems First",
    description: "Every solution is engineered as part of an integrated system, not as isolated components. We think in terms of ecosystems, not individual tools.",
    icon: Settings,
    color: "text-blue-400"
  },
  {
    title: "Automation Driven",
    description: "We believe in eliminating repetitive work and optimizing workflows to maximize human potential and operational efficiency.",
    icon: Zap,
    color: "text-green-400"
  },
  {
    title: "Growth Focused",
    description: "Our systems are architected to scale with your business ambitions, supporting your journey from startup to enterprise.",
    icon: TrendingUp,
    color: "text-purple-400"
  }
];

const expertiseAreas = [
  {
    title: "Business Systems Architecture",
    description: "Designing scalable, integrated systems that eliminate operational friction and enable seamless growth.",
    icon: Database,
    features: ["System Design", "Integration Planning", "Scalability Architecture", "Performance Optimization"]
  },
  {
    title: "Process Automation",
    description: "Engineering automated workflows that reduce manual effort and improve operational consistency.",
    icon: Settings,
    features: ["Workflow Design", "CRM Integration", "Reporting Systems", "Process Optimization"]
  },
  {
    title: "Technical Infrastructure",
    description: "Building the technical foundation that supports modern business operations and growth.",
    icon: Globe,
    features: ["Cloud Architecture", "Technical SEO", "Analytics Systems", "Performance Monitoring"]
  }
];

const clientResults = [
  {
    title: "Operational Efficiency",
    description: "Reduced manual processes by 75% through intelligent automation and system integration.",
    metric: "75% Reduction",
    icon: BarChart,
    color: "text-green-400"
  },
  {
    title: "Scalability Achievement",
    description: "Enabled 10x business growth without requiring system rebuilds or major overhauls.",
    metric: "10x Growth",
    icon: TrendingUp,
    color: "text-blue-400"
  },
  {
    title: "Cost Optimization",
    description: "Decreased operational costs by 45% through streamlined processes and automation.",
    metric: "45% Savings",
    icon: Target,
    color: "text-purple-400"
  }
];

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
              🏗️ About Muhscience Tech Labs
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Engineering Business Systems for <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">SME Growth</span>
            </h1>
            <p className="mt-4 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Led by Alex M. Kamau, a Systems Architect with over a decade of experience in designing and implementing custom business systems that transform how SMEs operate and scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-slate-900">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <Card className="bg-slate-800 border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${stat.color} mb-4`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.name}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-slate-800">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full text-sm font-medium text-blue-400 mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                🎯 Lead Systems Architect
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Alex M. Kamau
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                A seasoned Systems Architect with over 10 years of experience in designing and implementing custom business systems for SMEs. Alex specializes in transforming manual, fragmented operations into streamlined, automated systems that scale with business growth.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                His approach combines deep technical expertise with business acumen, ensuring that every system delivered not only works technically but also drives measurable business outcomes.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">BSc Computer Science, Systems Engineering Focus</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">10+ Years in Business Systems Architecture</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">500+ Systems Successfully Deployed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Expert in SME Digital Transformation</span>
                </div>
              </div>

              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Link>
            </div>
            
            <div className="relative">
              <Card className="bg-slate-900 border-gray-700">
                <CardContent className="p-8">
                  <div className="aspect-square bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-white mb-2">AMK</div>
                      <div className="text-blue-200">Systems Architect</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-white mb-2">Core Philosophy</h4>
                      <p className="text-gray-300 italic">
                        "Every business deserves systems that work for them, not against them. Great systems disappear into the background, enabling businesses to focus on what they do best."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-900">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Our Engineering Philosophy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Principles that guide every system we design and implement
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="bg-slate-800 border-gray-700 hover:border-blue-500 transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-6`}>
                      <value.icon className={`h-8 w-8 ${value.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-slate-800">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive systems engineering capabilities for modern SMEs
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="bg-slate-900 border-gray-700 hover:border-blue-500 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 mr-4">
                        <area.icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{area.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{area.description}</p>
                    <div className="space-y-2">
                      {area.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results */}
      <section className="py-20 bg-slate-900">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Proven Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from systems engineered for growth
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {clientResults.map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="bg-slate-800 border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-6`}>
                      <result.icon className={`h-8 w-8 ${result.color}`} />
                    </div>
                    <div className={`text-2xl font-bold mb-2 ${result.color}`}>
                      {result.metric}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{result.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{result.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
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
