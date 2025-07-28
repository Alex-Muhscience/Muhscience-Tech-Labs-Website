"use client";

import { motion } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Server } from "lucide-react";
import '../globals.css';

const securityMeasures = [
  {
    title: "Data Encryption",
    icon: Lock,
    description: "All data is encrypted using industry-standard AES-256 encryption",
    status: "Implemented"
  },
  {
    title: "Secure Authentication",
    icon: Shield,
    description: "Multi-factor authentication and OAuth 2.0 protocols",
    status: "Active"
  },
  {
    title: "Regular Security Audits",
    icon: Eye,
    description: "Quarterly penetration testing and security assessments",
    status: "Ongoing"
  },
  {
    title: "Infrastructure Security",
    icon: Server,
    description: "AWS-hosted infrastructure with 24/7 monitoring",
    status: "Monitored"
  }
];

const certifications = [
  { name: "ISO 27001", description: "Information Security Management" },
  { name: "SOC 2 Type II", description: "Security, Availability, and Confidentiality" },
  { name: "GDPR Compliant", description: "General Data Protection Regulation" },
  { name: "HIPAA Ready", description: "Healthcare Information Protection" }
];

export default function SecurityPage() {
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
                Security <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">First</span>
              </h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Your security is our top priority. Learn about our comprehensive security measures and compliance standards.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-16">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="font-Helvetica text-2xl font-bold sm:text-3xl">Security Measures</h2>
              <p className="mt-4 text-muted-foreground">
                Comprehensive protection for your data and privacy
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              {securityMeasures.map((measure, index) => (
                <motion.div
                  key={measure.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <measure.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-Helvetica text-xl font-semibold">
                              {measure.title}
                            </h3>
                            <Badge variant="secondary" className="text-xs">
                              {measure.status}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground">
                            {measure.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-muted">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-Helvetica text-2xl font-bold sm:text-3xl">Certifications & Compliance</h2>
              <p className="mt-4 text-muted-foreground">
                We maintain the highest industry standards
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <CardContent className="p-6">
                      <CheckCircle className="mx-auto h-8 w-8 text-green-600 mb-4" />
                      <h3 className="font-Helvetica text-lg font-semibold mb-2">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="py-16">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="mx-auto max-w-4xl"
            >
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-Helvetica text-2xl font-semibold mb-4">
                        Incident Response
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        In the unlikely event of a security incident, we have comprehensive response protocols in place:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>Immediate containment and assessment within 1 hour</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>Customer notification within 24 hours</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>Full incident report and remediation plan</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>Continuous monitoring and prevention improvements</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Contact Security Team */}
        <section className="py-16">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 p-8 text-center"
            >
              <h3 className="font-Helvetica text-2xl font-semibold">Security Concerns?</h3>
              <p className="mt-2 text-muted-foreground">
                If you have any security concerns or questions, contact our security team directly.
              </p>
              <div className="mt-6 space-y-2">
                <p className="text-sm">
                  <strong>Security Email:</strong> security@cybermuhscienceilabs.com
                </p>
                <p className="text-sm">
                  <strong>Emergency Line:</strong> +254746254055
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
