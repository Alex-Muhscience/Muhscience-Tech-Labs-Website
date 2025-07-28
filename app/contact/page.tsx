"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import '../globals.css';

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["", "Nairobi, Kenya"],
    link: "https://maps.google.com",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+254746254055", "Monday to Friday"],
    link: "tel:+254746254055",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["cybermuhscienceilabs@gmail.com", "cybermuhscienceilabs@gmail.com"],
    link: "mailto:cybermuhscienceilabs@gmail.com",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["9:00 AM - 6:00 PM EAT", "24/7 Emergency Support"],
    color: "bg-amber-100 text-amber-600"
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setSubmitSuccess(true);
      toast.success('Message sent successfully!');
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success state after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/95 py-20 md:py-28">
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
                Contact <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Us</span>
              </h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Have a question or want to discuss a project? Our team is ready to help you with innovative solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-12">
          <div className="container px-4 sm:px-6">
            <motion.div 
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="h-full transition-all hover:shadow-lg">
                      <CardContent className="flex flex-col items-center p-6 text-center">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${item.color} p-2`}>
                          <item.icon className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 font-Helvetica text-xl font-semibold">
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
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="pb-16 pt-4">
          <div className="container px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="font-Helvetica text-2xl">
                      Send Us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            required
                            disabled={submitting}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            required
                            disabled={submitting}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          required
                          disabled={submitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          rows={6}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          required
                          disabled={submitting}
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <Button 
                          type="submit" 
                          className="w-full sm:w-auto"
                          disabled={submitting}
                        >
                          {submitting ? (
                            <>
                              <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Send Message
                            </>
                          )}
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
                              Message sent!
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Map Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="h-full overflow-hidden rounded-xl"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.03101100311!2d36.8064952!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d5a7e6e7e9%3A0x9b6f8b0c7e8b7b7b!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1719830000000!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  className="min-h-[400px] w-full rounded-xl border-0 shadow-lg"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Our location on Google Maps"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container px-4 sm:px-6">
            <motion.div
              className="rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="font-Helvetica text-2xl font-semibold">Ready to start your project?</h3>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                Contact us today to discuss how we can help bring your vision to life.
              </p>
              <Button className="mt-6" size="lg" asChild>
                <a href="#contact-form">Get a Free Consultation</a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}