"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import '../globals.css';

const projects = [
  {
    title: "AI-Powered Threat Detection",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    description: "Advanced threat detection system using machine learning algorithms to identify and neutralize cyber threats in real-time.",
    technologies: ["Python", "TensorFlow", "AWS"],
    github: "#",
    live: "#",
    year: "2023",
  },
  {
    title: "Smart City Infrastructure",
    category: "IoT",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=800",
    description: "Comprehensive IoT platform for monitoring and managing smart city infrastructure with predictive analytics.",
    technologies: ["React", "Node.js", "MongoDB", "IoT Core"],
    github: "#",
    live: "#",
    year: "2022",
  },
  {
    title: "Quantum-Safe Encryption",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
    description: "Implementation of post-quantum cryptographic algorithms to future-proof digital communications.",
    technologies: ["C++", "Rust", "OpenSSL", "NIST PQC"],
    github: "#",
    live: "#",
    year: "2023",
  },
  {
    title: "Autonomous Trading Platform",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    description: "Machine learning-powered algorithmic trading platform with real-time market analysis and execution.",
    technologies: ["Python", "PyTorch", "FastAPI", "QuantConnect"],
    github: "#",
    live: "#",
    year: "2022",
  },
  {
    title: "Healthcare Data Platform",
    category: "Software",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    description: "HIPAA-compliant platform for secure healthcare data management and predictive analytics.",
    technologies: ["React", "Node.js", "PostgreSQL", "FHIR"],
    github: "#",
    live: "#",
    year: "2021",
  },
  {
    title: "Smart Contract Security",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    description: "Automated security auditing tool for Ethereum smart contracts with vulnerability detection.",
    technologies: ["Solidity", "Python", "Web3.js", "Slither"],
    github: "#",
    live: "#",
    year: "2023",
  },
];

const categories = ["All", "Cybersecurity", "AI/ML", "IoT", "Software", "Blockchain"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/95 py-20 md:py-28 lg:py-32">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:75px_75px]" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/0 to-primary/20 mask-radial-gradient"
            aria-hidden="true"
          />
          <div className="container relative px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="font-Helvetica text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Our <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Projects</span>
              </h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Explore our portfolio of innovative solutions across cybersecurity,
                artificial intelligence, and cutting-edge software development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-12">
          <div className="container px-4 sm:px-6">
            <motion.div 
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full px-6"
                >
                  {category}
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20 pt-4">
          <div className="container px-4 sm:px-6">
            <AnimatePresence>
              {filteredProjects.length === 0 ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-lg text-muted-foreground">
                    No projects found in this category. Check back soon!
                  </p>
                </motion.div>
              ) : (
                <motion.div 
                  className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                  layout
                >
                  <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                      <motion.div
                        key={`${project.title}-${index}`}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        onHoverStart={() => setHoveredProject(index)}
                        onHoverEnd={() => setHoveredProject(null)}
                        className="relative"
                      >
                        <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                          <div className="relative aspect-video overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className={`h-full w-full object-cover transition-transform duration-500 ${hoveredProject === index ? 'project-img-hovered' : ''}`}
                            />
                            <div
                              className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${hoveredProject === index ? 'project-overlay-visible' : 'opacity-0'}`}
                            />
                            <span className="absolute bottom-4 left-4 rounded-full bg-background px-3 py-1 text-xs font-medium">
                              {project.year}
                            </span>
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3 className="font-Helvetica text-xl font-semibold">{project.title}</h3>
                                <p className="mt-1 text-sm text-primary">{project.category}</p>
                              </div>
                              <motion.div
                                animate={{
                                  x: hoveredProject === index ? 5 : 0
                                }}
                                transition={{ type: "spring", stiffness: 500 }}
                              >
                                <ArrowRight className="h-5 w-5 text-primary" />
                              </motion.div>
                            </div>
                            <p className="mt-3 text-sm text-muted-foreground">
                              {project.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-full bg-secondary px-3 py-1 text-xs font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between p-6 pt-0">
                            <Button variant="ghost" size="sm" className="gap-1.5 px-3" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                                Code
                              </a>
                            </Button>
                            <Button variant="ghost" size="sm" className="gap-1.5 px-3" asChild>
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
    </main>
  );
}