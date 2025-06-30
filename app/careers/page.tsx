"use client";

import { motion } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Shield, BrainCircuit, Code, Rocket, Users, ArrowRight } from "lucide-react";
import '../globals.css';

const jobOpenings = [
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    description: "Protect digital assets and infrastructure with cutting-edge security solutions.",
    responsibilities: [
      "Monitor and analyze security threats",
      "Implement security measures",
      "Conduct vulnerability assessments",
      "Respond to security incidents"
    ],
    requirements: [
      "3+ years security experience",
      "Certifications preferred (CISSP, CEH)",
      "Knowledge of security frameworks"
    ],
    type: "Full-time",
    location: "Remote/Hybrid",
    icon: Shield,
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: "ai-researcher",
    title: "AI Researcher",
    description: "Pioneer innovative AI solutions and push the boundaries of machine learning.",
    responsibilities: [
      "Develop novel ML algorithms",
      "Publish research findings",
      "Collaborate with product teams",
      "Stay current with AI advancements"
    ],
    requirements: [
      "PhD in Computer Science or related",
      "Strong publication record",
      "Experience with TensorFlow/PyTorch"
    ],
    type: "Full-time",
    location: "San Francisco, CA",
    icon: BrainCircuit,
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: "fullstack-developer",
    title: "Full Stack Developer",
    description: "Build scalable web applications using modern technologies.",
    responsibilities: [
      "Develop frontend and backend components",
      "Write clean, maintainable code",
      "Collaborate with design team",
      "Optimize application performance"
    ],
    requirements: [
      "3+ years full stack experience",
      "Proficient in React/Node.js",
      "Experience with cloud platforms"
    ],
    type: "Full-time",
    location: "Remote",
    icon: Code,
    color: "bg-green-100 text-green-600"
  },
  {
    id: "innovation-intern",
    title: "Innovation Lab Intern",
    description: "Gain hands-on experience with emerging technologies.",
    responsibilities: [
      "Assist with research projects",
      "Prototype new ideas",
      "Participate in design sprints",
      "Document findings"
    ],
    requirements: [
      "Currently enrolled in CS/Engineering",
      "Passion for technology",
      "Basic programming skills"
    ],
    type: "Internship",
    location: "Boston, MA",
    icon: Rocket,
    color: "bg-amber-100 text-amber-600"
  }
];

const benefits = [
  {
    title: "Competitive Compensation",
    description: "Salary and equity packages that reward your contributions",
    icon: Briefcase
  },
  {
    title: "Flexible Work",
    description: "Remote and hybrid options to suit your lifestyle",
    icon: Users
  },
  {
    title: "Learning Budget",
    description: "Annual stipend for professional development",
    icon: BrainCircuit
  }
];

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/95 py-20 md:py-28">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:75px_75px]" />
          <div className="container relative px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="font-Helvetica text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Build the Future with <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Us</span>
              </h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Join our team of innovators working at the intersection of cybersecurity, AI, and cutting-edge software development.
              </p>
              <Button className="mt-8" size="lg" asChild>
                <a href="#open-positions">View Open Positions</a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container px-4 sm:px-6">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-Helvetica text-2xl font-bold sm:text-3xl">Why Join Our Team?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                We're committed to creating an environment where talented people can do their best work.
              </p>
            </motion.div>
            <motion.div 
              className="mt-12 grid gap-8 sm:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-6 font-Helvetica text-xl font-semibold">{benefit.title}</h3>
                    <p className="mt-2 text-muted-foreground">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="open-positions" className="py-16">
          <div className="container px-4 sm:px-6">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="font-Helvetica text-2xl font-bold sm:text-3xl">Current Openings</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                We're always looking for talented individuals to join our growing team.
              </p>
            </motion.div>
            <motion.div 
              className="mt-12 grid gap-8 md:grid-cols-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                    <CardHeader className="pb-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${job.color}`}>
                            <job.icon className="h-6 w-6" />
                          </div>
                          <CardTitle className="font-Helvetica text-xl">{job.title}</CardTitle>
                          <div className="mt-2 flex gap-3">
                            <span className="rounded-full bg-secondary px-3 py-1 text-xs">{job.type}</span>
                            <span className="rounded-full bg-secondary px-3 py-1 text-xs">{job.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground">{job.description}</p>
                      
                      <div className="mt-6">
                        <h4 className="font-medium">Key Responsibilities:</h4>
                        <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                          {job.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-medium">Requirements:</h4>
                        <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                          {job.requirements.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="mt-8 w-full" asChild>
                        <a href={`/careers/${job.id}`}>
                          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container px-4 sm:px-6">
            <motion.div
              className="rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <h3 className="font-Helvetica text-2xl font-semibold">Don't See Your Dream Role?</h3>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                We're always interested in meeting talented people. Send us your resume and tell us how you can contribute.
              </p>
              <Button className="mt-6" size="lg" variant="outline" asChild>
                <a href="/contact">Submit General Application</a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}