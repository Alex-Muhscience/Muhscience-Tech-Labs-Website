"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const projects = [
  {
    title: "AI-Powered Threat Detection",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    description: "Advanced threat detection system using machine learning algorithms.",
    technologies: ["Python", "TensorFlow", "AWS"],
  },
  {
    title: "Smart City Infrastructure",
    category: "IoT",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=800",
    description: "IoT-based smart city monitoring and management system.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Quantum-Safe Encryption",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
    description: "Post-quantum cryptography implementation for secure communications.",
    technologies: ["C++", "Rust", "OpenSSL"],
  },
  {
    title: "Autonomous Trading Platform",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    description: "ML-powered trading platform with real-time market analysis.",
    technologies: ["Python", "PyTorch", "FastAPI"],
  },
  {
    title: "Healthcare Data Platform",
    category: "Software",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    description: "Secure healthcare data management and analysis platform.",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Smart Contract Security",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    description: "Automated security auditing for smart contracts.",
    technologies: ["Solidity", "Python", "Web3.js"],
  },
];

const categories = ["All", "Cybersecurity", "AI/ML", "IoT", "Software", "Blockchain"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/95 py-24">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:75px_75px]" />
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="font-orbitron text-4xl font-bold tracking-tight sm:text-5xl">
                Our Projects
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Explore our portfolio of innovative solutions across cybersecurity,
                artificial intelligence, and software development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-12">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="aspect-video w-full object-cover"
                    />
                    <CardContent className="p-6">
                      <h3 className="font-orbitron text-xl font-semibold">{project.title}</h3>
                      <p className="mt-1 text-sm text-primary">{project.category}</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-secondary px-3 py-1 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}