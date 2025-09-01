"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { List, AlignJustify, Book, Clipboard } from "lucide-react";
import '../globals.css';

const terms = [
  {
    title: "Acceptance of Terms",
    icon: List,
    content: [
      "By accessing our website, you agree to these terms.",
      "Continued use signifies your acceptance of any changes."
    ]
  },
  {
    title: "Use of Website",
    icon: AlignJustify,
    content: [
      "You agree to use our website for lawful purposes only.",
      "Prohibited actions include transmitting harmful content."
    ]
  },
  {
    title: "Intellectual Property",
    icon: Book,
    content: [
      "All content is our property or licensed for our use.",
      "Reproduction of content requires our express permission."
    ]
  },
  {
    title: "Disclaimer of Liability",
    icon: Clipboard,
    content: [
      "We are not liable for damages from your use of our site.",
      "Our content is provided 'as is' without warranties."
    ]
  }
];

export default function TermsPage() {
  return (
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
                Terms of <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Service
                </span>
              </h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Your use of our site is governed by these terms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="container px-4 sm:px-6">
            <div className="mx-auto max-w-4xl space-y-8">
              {terms.map((term, index) => (
                <motion.div
                  key={term.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <term.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h2 className="font-Helvetica text-2xl font-semibold mb-4">
                            {term.title}
                          </h2>
                          <ul className="space-y-3">
                            {term.content.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                <span className="text-muted-foreground">
                                  {item}
                                </span>
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
                        <Book className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h2 className="font-Helvetica text-2xl font-semibold mb-4">
                          Governing Law
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          These terms are governed by the laws of the state where our company is headquartered.
                        </p>
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
                <h3 className="font-semibold mb-2">
                  Changes to Terms
                </h3>
                <p className="text-sm text-muted-foreground">
                  We may update these Terms of Service from time to time. We'll notify you about significant changes via email or by placing a prominent notice on our site.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
    </main>
  );
}

