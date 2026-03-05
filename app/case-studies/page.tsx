"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Settings, Brain, TrendingUp } from 'lucide-react';

export default function CaseStudiesPage() {
  const caseStudies = [
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
      challenge: "Manual enrollment and course management processes",
      result: "Automated enrollment system with real-time reporting",
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
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <section className="mt-16">
          <div className="text-center mb-12">
            <h1 className="font-Helvetica text-4xl font-bold mb-4">Success Stories</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from our enterprise clients across different industries
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((caseStudy, index) => (
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
      </div>
    </div>
  );
}
