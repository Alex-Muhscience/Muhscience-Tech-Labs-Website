"use client";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import "../globals.css";
import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We specialize in comprehensive cybersecurity solutions, AI/ML implementation, and full-stack development services. Our team delivers end-to-end protection for your digital assets while driving technological innovation through custom software solutions.",
    category: "General"
  },
  {
    question: "How can I get in touch with your team?",
    answer: "You can reach us through our contact page, email us directly at cybermuhscienceilabs@gmail.com, or call our support line at +254746254055. Our business hours are Monday-Friday, 9AM-5PM EST.",
    category: "Contact"
  },
  {
    question: "Do you offer customized solutions for specific business needs?",
    answer: "Absolutely. We pride ourselves on developing bespoke solutions tailored to your unique requirements. Our process begins with a thorough consultation to understand your challenges, followed by a proposal outlining our recommended approach.",
    category: "Services"
  },
  {
    question: "What industries do you primarily serve?",
    answer: "We have extensive experience across multiple sectors including financial services, healthcare, government, education, and technology. Our solutions are adaptable to meet the specific compliance and security requirements of each industry.",
    category: "Industries"
  },
  {
    question: "How long has CyberMuhscience iLabs been operating?",
    answer: "Since our founding in 2025, we've been at the forefront of technological innovation. Over the past few months, we've successfully delivered over 5 projects for clients in 3 countries.",
    category: "Company"
  },
  {
    question: "What security certifications does your team hold?",
    answer: "Our team includes professionals with CISSP, CISM, CEH, and OSCP certifications. We're also compliant with ISO 27001 and SOC 2 Type II standards.",
    category: "Security"
  },
  {
    question: "What's your typical project timeline?",
    answer: "Project durations vary based on complexity, but most engagements range from 3-9 months. We provide detailed timelines during our initial consultation after assessing your requirements.",
    category: "Process"
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer tiered support packages ranging from basic maintenance to comprehensive 24/7 monitoring and emergency response services.",
    category: "Support"
  }
];

const categories = ["All", "General", "Services", "Contact", "Industries", "Company", "Security", "Process", "Support"];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFaqs = activeCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

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
                Frequently Asked <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Questions</span>
              </h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Find answers to common questions about our services, processes, and company policies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 md:py-16">
          <div className="container px-4 sm:px-6">
            {/* Category Filters */}
            <motion.div 
              className="mb-12 flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* FAQ Accordion */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mx-auto max-w-3xl"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="rounded-lg border bg-card p-1 shadow-sm transition-all hover:shadow-md"
                  >
                    <AccordionTrigger className="flex w-full items-center justify-between p-4 text-left font-medium [&[data-state=open]>svg:last-child:rotate-180">
                      <span className="font-Helvetica text-base sm:text-lg">{faq.question}</span>
                      
                    </AccordionTrigger>
                    <AccordionContent className="overflow-hidden px-4 pb-4 pt-0 text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {faq.answer}
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Empty State */}
              {filteredFaqs.length === 0 && (
                <motion.div
                  className="py-12 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-lg text-muted-foreground">
                    No FAQs found in this category. Try another category or contact us directly.
                  </p>
                  <Button className="mt-6" asChild>
                    <a href="/contact">Contact Us</a>
                  </Button>
                </motion.div>
              )}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="mt-16 rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="font-Helvetica text-2xl font-semibold">Still have questions?</h3>
              <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                Our team is ready to help answer any questions you may have about our services and solutions.
              </p>
              <Button className="mt-6" size="lg" asChild>
                <a href="/contact">Get in Touch</a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

