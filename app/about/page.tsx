"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, Users, Globe } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const stats = [
  { name: "Years Experience", value: "10+", icon: Briefcase },
  { name: "Global Clients", value: "200+", icon: Globe },
  { name: "Team Members", value: "50+", icon: Users },
  { name: "Industry Awards", value: "25+", icon: Award },
];

const team = [
  {
    name: "Mr. Alex M. Kamau",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "BSc in Computer Science with expertise in AI and cybersecurity.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "15+ years experience in software architecture and cloud computing.",
  },
  {
    name: "Dr. Emily Watson",
    role: "Head of AI Research",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Leading researcher in machine learning and neural networks.",
  },
  {
    name: "James Park",
    role: "Security Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Expert in enterprise security and threat detection.",
  },
];

export default function AboutPage() {
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
                About CyberMuhscience iLabs
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We are a team of innovators, researchers, and technologists dedicated to
                pushing the boundaries of what's possible in cybersecurity and artificial
                intelligence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="flex flex-col items-center p-6">
                      <stat.icon className="h-8 w-8 text-primary" />
                      <h3 className="mt-4 font-orbitron text-3xl font-bold">{stat.value}</h3>
                      <p className="text-sm text-muted-foreground">{stat.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-muted py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-orbitron text-3xl font-bold">Our Mission</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                To empower organizations with cutting-edge technology solutions that protect,
                innovate, and transform. We believe in a future where security and
                innovation go hand in hand, creating a safer digital world for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24">
          <div className="container">
            <h2 className="text-center font-orbitron text-3xl font-bold">Our Team</h2>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="aspect-square w-full object-cover"
                    />
                    <CardContent className="p-6">
                      <h3 className="font-orbitron text-xl font-semibold">{member.name}</h3>
                      <p className="text-sm text-primary">{member.role}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
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