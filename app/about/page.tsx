"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, Users, Globe, Shield, Code, BrainCircuit, Rocket } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import '../globals.css';

const stats = [
  { name: "Years Experience", value: "3+", icon: Briefcase, color: "bg-blue-100 text-blue-600" },
  { name: "Global Clients", value: "20+", icon: Globe, color: "bg-green-100 text-green-600" },
  { name: "Team Members", value: "5+", icon: Users, color: "bg-purple-100 text-purple-600" },
  { name: "Projects Completed", value: "50+", icon: Award, color: "bg-amber-100 text-amber-600" },
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
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="font-Helvetica text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                About <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Muhscience Tech Labs</span>
              </h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                We are a team of innovators, researchers, and technologists dedicated to
                pushing the boundaries of what's possible in cybersecurity and artificial
                intelligence.
              </p>
            </motion.div>
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