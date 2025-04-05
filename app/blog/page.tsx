"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Search } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Quantum Computing in Cybersecurity",
    category: "Cybersecurity",
    author: "Dr. Sarah Chen",
    date: "2024-02-28",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    excerpt: "Exploring how quantum computing will revolutionize cybersecurity and the measures we need to take to prepare for this technological shift.",
    readTime: "5 min read",
  },
  {
    title: "Implementing Zero Trust Architecture",
    category: "Security",
    author: "James Park",
    date: "2024-02-25",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    excerpt: "A comprehensive guide to implementing zero trust architecture in your organization's security infrastructure.",
    readTime: "8 min read",
  },
  {
    title: "AI in Healthcare: Transforming Patient Care",
    category: "AI/ML",
    author: "Dr. Emily Watson",
    date: "2024-02-22",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    excerpt: "How artificial intelligence is revolutionizing healthcare delivery and improving patient outcomes.",
    readTime: "6 min read",
  },
  {
    title: "The Rise of Edge Computing",
    category: "Technology",
    author: "Marcus Rodriguez",
    date: "2024-02-20",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
    excerpt: "Understanding the impact of edge computing on modern application architecture and performance.",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                Latest Insights
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Stay updated with the latest trends and insights in cybersecurity,
                artificial intelligence, and technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12">
          <div className="container">
            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="aspect-video w-full object-cover"
                    />
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-primary">{post.category}</span>
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle className="font-orbitron text-xl">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{post.excerpt}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-medium">{post.author}</span>
                        <span className="text-sm text-muted-foreground">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
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