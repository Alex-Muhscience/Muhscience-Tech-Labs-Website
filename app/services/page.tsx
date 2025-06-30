"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Brain, Code, Lock, Sparkles, CheckCircle, Server, Shield, Database, Bot, Cloud, Smartphone, BarChart } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "cybersecurity",
    icon: Lock,
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions",
    features: [
      { icon: Shield, name: "Threat Detection & Response" },
      { icon: Database, name: "Data Encryption" },
      { icon: Server, name: "Network Security" },
    ],
    highlightColor: "from-blue-500 to-purple-600",
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI/ML Solutions",
    description: "Intelligent automation systems",
    features: [
      { icon: Bot, name: "Machine Learning Models" },
      { icon: BarChart, name: "Predictive Analytics" },
      { icon: CheckCircle, name: "Process Automation" },
    ],
    highlightColor: "from-emerald-500 to-teal-600",
  },
  {
    id: "software",
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions",
    features: [
      { icon: Cloud, name: "Cloud Applications" },
      { icon: Smartphone, name: "Mobile Development" },
      { icon: Server, name: "Enterprise Systems" },
    ],
    highlightColor: "from-amber-500 to-orange-600",
  },
  {
    id: "innovation",
    icon: Sparkles,
    title: "Innovation Labs",
    description: "Research & development hub",
    features: [
      { icon: Brain, name: "Emerging Tech Research" },
      { icon: Bot, name: "Prototype Development" },
      { icon: BarChart, name: "Technology Consulting" },
    ],
    highlightColor: "from-violet-500 to-fuchsia-600",
  },
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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
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

          {/* Services Grid */}
          <section className="mt-12 lg:mt-16">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
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
                    <CardHeader>
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${service.highlightColor} p-2 text-white`}>
                        <service.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="font-Helvetica mt-4 text-lg sm:text-xl">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <feature.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <span className="text-sm sm:text-base">{feature.name}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Service Details & Form Section */}
          <section className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-8">
            {/* Service Details */}
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="font-Helvetica text-2xl font-bold sm:text-3xl">
                {activeService.title} Details
              </h2>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <p className="mb-6 text-muted-foreground">
                  Our {activeService.title.toLowerCase()} services provide comprehensive solutions 
                  tailored to your specific business requirements.
                </p>
                <ul className="space-y-4">
                  {activeService.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-4">
                      <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                        <feature.icon className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{feature.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Detailed description of {feature.name.toLowerCase()} service...
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
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
      </main>
      <SiteFooter />
    </div>
  );
}