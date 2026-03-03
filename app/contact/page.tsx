"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle, Calendar, Users, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import '../globals.css';

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Nairobi, Kenya", "Strategic East African Hub"],
    link: "https://maps.google.com",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+254746254055", "Monday to Friday, 9AM-6PM EAT"],
    link: "tel:+254746254055",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["cybermuhscienceilabs@gmail.com", "Response within 24 hours"],
    link: "mailto:cybermuhscienceilabs@gmail.com",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Calendar,
    title: "Book Strategy Call",
    details: ["Schedule a consultation", "30-minute discovery session"],
    link: "#strategy-form",
    color: "bg-amber-100 text-amber-600"
  }
];

const benefits = [
  {
    icon: Users,
    title: "Expert Consultation",
    description: "Work with systems architects who understand SME challenges"
  },
  {
    icon: TrendingUp,
    title: "Growth-Focused Solutions",
    description: "Systems designed to scale with your business ambitions"
  },
  {
    icon: Calendar,
    title: "No-Obligation Strategy Call",
    description: "Free 30-minute consultation to explore your needs"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    revenueRange: "",
    operationalChallenge: "",
    message: ""
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
      toast.success('Strategy call request submitted successfully!');
      setFormData({ 
        name: "", 
        company: "", 
        email: "", 
        revenueRange: "", 
        operationalChallenge: "", 
        message: "" 
      });
      
      // Reset success state after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to submit request. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 py-20 md:py-28">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:75px_75px]" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-blue-600/0 to-blue-600/10 mask-radial-gradient"
            aria-hidden="true"
          />
          <div className="container relative px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full text-sm font-medium text-blue-400 mb-8">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                📅 Book Your Strategy Call
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Transform Your Business <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Systems</span>
              </h1>
              <p className="mt-4 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                Schedule a free 30-minute strategy session to explore how custom business systems and automation can eliminate operational friction and accelerate your growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-slate-900">
          <div className="container px-4 sm:px-6">
            <motion.div 
              className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full bg-slate-800 border-gray-700 transition-all hover:shadow-lg hover:border-blue-500">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 p-2">
                        <benefit.icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-white">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-400">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Strategy Call Form Section */}
        <section id="strategy-form" className="py-20 bg-slate-800">
          <div className="container px-4 sm:px-6">
            <div className="mx-auto max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Book Your Free Strategy Call
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Fill out the form below to schedule your 30-minute consultation with our systems architects.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-slate-900 border-gray-700">
                  <CardContent className="p-8">
                    <AnimatePresence mode="wait">
                      {submitSuccess ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="text-center py-12"
                        >
                          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                          <h3 className="text-2xl font-bold text-white mb-2">
                            Strategy Call Requested!
                          </h3>
                          <p className="text-gray-300 mb-6">
                            Thank you for your interest. We'll contact you within 24 hours to schedule your consultation.
                          </p>
                          <Button 
                            onClick={() => setSubmitSuccess(false)}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            Submit Another Request
                          </Button>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="name" className="text-gray-300">Full Name *</Label>
                              <Input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                className="bg-slate-800 border-gray-600 text-white placeholder-gray-500 focus:border-blue-500"
                                placeholder="John Doe"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="company" className="text-gray-300">Company Name *</Label>
                              <Input
                                id="company"
                                name="company"
                                type="text"
                                required
                                value={formData.company}
                                onChange={handleInputChange}
                                className="bg-slate-800 border-gray-600 text-white placeholder-gray-500 focus:border-blue-500"
                                placeholder="Acme Corporation"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="bg-slate-800 border-gray-600 text-white placeholder-gray-500 focus:border-blue-500"
                              placeholder="john@company.com"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="revenueRange" className="text-gray-300">Annual Revenue Range *</Label>
                            <select
                              id="revenueRange"
                              name="revenueRange"
                              required
                              value={formData.revenueRange}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 bg-slate-800 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="">Select revenue range</option>
                              <option value="under-100k">Under $100K</option>
                              <option value="100k-500k">$100K - $500K</option>
                              <option value="500k-1m">$500K - $1M</option>
                              <option value="1m-5m">$1M - $5M</option>
                              <option value="5m-10m">$5M - $10M</option>
                              <option value="10m+">$10M+</option>
                            </select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="operationalChallenge" className="text-gray-300">Main Operational Challenge *</Label>
                            <Textarea
                              id="operationalChallenge"
                              name="operationalChallenge"
                              required
                              rows={3}
                              value={formData.operationalChallenge}
                              onChange={handleInputChange}
                              className="bg-slate-800 border-gray-600 text-white placeholder-gray-500 focus:border-blue-500 resize-none"
                              placeholder="Describe your biggest operational challenge or the system you want to build..."
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message" className="text-gray-300">Additional Information</Label>
                            <Textarea
                              id="message"
                              name="message"
                              rows={3}
                              value={formData.message}
                              onChange={handleInputChange}
                              className="bg-slate-800 border-gray-600 text-white placeholder-gray-500 focus:border-blue-500 resize-none"
                              placeholder="Any other details you'd like to share..."
                            />
                          </div>

                          <Button
                            type="submit"
                            disabled={submitting}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {submitting ? (
                              <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                Submitting...
                              </div>
                            ) : (
                              <div className="flex items-center justify-center">
                                <Calendar className="mr-2 h-5 w-5" />
                                Book Strategy Call
                              </div>
                            )}
                          </Button>
                        </form>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-16 bg-slate-900">
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
                    <Card className="h-full bg-slate-800 border-gray-700 transition-all hover:shadow-lg hover:border-blue-500">
                      <CardContent className="flex flex-col items-center p-6 text-center">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${item.color} p-2`}>
                          <item.icon className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                        {item.details.map((detail, i) => (
                          <p
                            key={i}
                            className="mt-2 text-sm text-gray-400"
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
    </main>
  );
}
