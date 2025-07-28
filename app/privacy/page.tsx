"use client";

import { motion } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Lock, Database, Users, FileText } from "lucide-react";
import '../globals.css';

const sections = [
  {
    title: "Information We Collect",
    icon: Database,
    content: [
      "Personal information you provide (name, email, phone number)",
      "Technical data about your device and browser",
      "Usage data about how you interact with our website",
      "Professional information relevant to our services"
    ]
  },
  {
    title: "How We Use Your Information",
    icon: Users,
    content: [
      "To provide and improve our services",
      "To communicate with you about your projects",
      "To send relevant updates and marketing materials",
      "To comply with legal obligations"
    ]
  },
  {
    title: "Data Protection",
    icon: Shield,
    content: [
      "We implement industry-standard security measures",
      "Data is encrypted both in transit and at rest",
      "Access to personal data is strictly controlled",
      "Regular security audits and updates"
    ]
  },
  {
    title: "Your Rights",
    icon: Eye,
    content: [
      "Right to access your personal data",
      "Right to correct inaccurate information",
      "Right to delete your data",
      "Right to data portability"
    ]
  }
];

export default function PrivacyPage() {
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
                Privacy <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="container px-4 sm:px-6">
            <div className="mx-auto max-w-4xl space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <section.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h2 className="font-Helvetica text-2xl font-semibold mb-4">
                            {section.title}
                          </h2>
                          <ul className="space-y-3">
                            {section.content.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Additional Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h2 className="font-Helvetica text-2xl font-semibold mb-4">
                          Contact Us About Privacy
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          If you have any questions about this Privacy Policy or our data practices, please contact us:
                        </p>
                        <div className="space-y-2 text-sm">
                          <p><strong>Email:</strong> cybermuhscienceilabs@gmail.com</p>
                          <p><strong>Phone:</strong> +254746254055</p>
                          <p><strong>Address:</strong> Nairobi, Kenya</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Updates Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="rounded-lg bg-muted p-6"
              >
                <h3 className="font-semibold mb-2">Policy Updates</h3>
                <p className="text-sm text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
