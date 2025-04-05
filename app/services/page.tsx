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
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-12">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="font-orbitron text-4xl font-bold tracking-tight sm:text-5xl">
              Our Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card
                key={service.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  activeService.id === service.id ? "border-primary" : ""
                }`}
                onClick={() => setActiveService(service)}
              >
                <CardHeader>
                  <service.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="font-orbitron">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <feature.icon className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Service Request Form */}
          <Card className="mx-auto mt-16 max-w-2xl">
            <CardHeader>
              <CardTitle className="font-orbitron">Request a Service</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements"
                    rows={4}
                  />
                </div>
                <Button className="w-full">Submit Request</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}