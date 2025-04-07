"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Search } from "lucide-react";

interface BlogPost {
  _id: string;
  title: string;
  category: string;
  author: {
    name: string;
    title?: string;
  };
  createdAt: string;
  imageUrl: string;
  excerpt: string;
  readTime: string;
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/blog');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(
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
            {loading ? (
              <div className="text-center">Loading posts...</div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden">
                      <img
                        src={post.imageUrl}
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
                          <span className="text-sm font-medium">{post.author.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {new Date(post.createdAt).toLocaleDateString("en-US", {
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
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}