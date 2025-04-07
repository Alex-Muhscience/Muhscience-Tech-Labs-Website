"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Nairobi"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+254 746254055", "Monday to Friday"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["contact@cybermuhscienceilabs.com", "support@cybermuhscienceilabs.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["9:00 AM - 6:00 PM EAT", "24/7 Emergency Support"],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

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
                Get in Touch
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Have a question or want to discuss a project? We're here to help.
                Reach out to our team of experts.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <item.icon className="h-8 w-8 text-primary" />
                      <h3 className="mt-4 font-orbitron text-xl font-semibold">
                        {item.title}
                      </h3>
                      {item.details.map((detail, i) => (
                        <p
                          key={i}
                          className="mt-2 text-sm text-muted-foreground"
                        >
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12">
          <div className="container">
            <Card className="mx-auto max-w-2xl">
              <CardHeader>
                <CardTitle className="font-orbitron text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12">
          <div className="container">
            <div className="overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101268.89989132444!2d-122.1076353!3d37.4219999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sPalo+Alto%2C+CA!5e0!3m2!1sen!2sus!4v1123456789"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}