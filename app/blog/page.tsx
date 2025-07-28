"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Search, Clock, Calendar, User, ArrowRight, Mail, Send } from "lucide-react";
import '../globals.css';

interface BlogPost {
  _id: string;
  title: string;
  category: string;
  author: {
    name: string;
    title?: string;
    avatar?: string;
  };
  createdAt: string;
  imageUrl: string;
  excerpt: string;
  readTime: string;
  tags?: string[];
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayCount, setDisplayCount] = useState(6);
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
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

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(posts.map(post => post.category)))];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));

    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(6);
  }, [searchQuery, selectedCategory]);

  const handleNewsletterSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsSubscribing(true);
    try {
      // Here you would typically send the email to your backend
      // For now, we'll just simulate the process
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubscribing(false);
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
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/0 to-primary/20 blog-mask-gradient"
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
                Latest <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Insights</span>
              </h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Stay updated with the latest trends and insights in cybersecurity,
                artificial intelligence, and emerging technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12">
          <div className="container px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mx-auto max-w-4xl space-y-6"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles by title, category, or keywords..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full px-4"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-20 pt-4">
          <div className="container px-4 sm:px-6">
            {loading ? (
              <motion.div
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {[...Array(6)].map((_, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video w-full animate-pulse bg-secondary" />
                    <CardHeader>
                      <div className="h-4 w-1/2 animate-pulse rounded bg-secondary" />
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="h-4 w-full animate-pulse rounded bg-secondary" />
                        <div className="h-4 w-4/5 animate-pulse rounded bg-secondary" />
                        <div className="h-4 w-3/4 animate-pulse rounded bg-secondary" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            ) : (
              <AnimatePresence>
                {filteredPosts.length > 0 ? (
                  <>
                    <motion.div
                      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                      layout
                    >
                      {filteredPosts.slice(0, displayCount).map((post, index) => (
                      <motion.div
                        key={post._id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ y: -5 }}
                      >
                        <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                          <div className="relative aspect-video overflow-hidden">
                            <img
                              src={post.imageUrl}
                              alt={post.title}
                              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute bottom-4 left-4 rounded-full bg-background px-3 py-1 text-xs font-medium">
                              {post.category}
                            </div>
                          </div>
                          <CardHeader>
                            <CardTitle className="font-Helvetica text-xl">
                              {post.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{post.excerpt}</p>
                            
                            {post.tags && post.tags.length > 0 && (
                              <div className="mt-4 flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="rounded-full bg-secondary px-3 py-1 text-xs"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}

                            <div className="mt-6 flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                {post.author.avatar ? (
                                  <img
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    className="h-8 w-8 rounded-full"
                                  />
                                ) : (
                                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                    <User className="h-4 w-4 text-primary" />
                                  </div>
                                )}
                                <div>
                                  <p className="text-sm font-medium">{post.author.name}</p>
                                  {post.author.title && (
                                    <p className="text-xs text-muted-foreground">{post.author.title}</p>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Calendar className="mr-1 h-4 w-4" />
                                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  })}
                                </div>
                                <div className="flex items-center">
                                  <Clock className="mr-1 h-4 w-4" />
                                  {post.readTime}
                                </div>
                              </div>
                            </div>

                            <Button
                              variant="link"
                              className="mt-4 px-0 font-medium"
                              asChild
                            >
                              <a href={`/blog/${post._id}`}>
                                Read more <ArrowRight className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                      ))}
                    </motion.div>
                    
                    {/* Load More Button */}
                    {displayCount < filteredPosts.length && (
                      <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Button
                          onClick={() => setDisplayCount(prev => Math.min(prev + 6, filteredPosts.length))}
                          variant="outline"
                          size="lg"
                          className="px-8 py-3 font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          Load More Articles ({filteredPosts.length - displayCount} remaining)
                        </Button>
                      </motion.div>
                    )}
                  </>
                ) : (
                  <motion.div
                    className="py-12 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <h3 className="font-Helvetica text-xl font-medium">No articles found</h3>
                    <p className="mt-2 text-muted-foreground">
                      Try adjusting your search or filter criteria
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("All");
                      }}
                    >
                      Clear filters
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        </section>
        
        {/* Newsletter Subscription Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-background to-primary/10 py-16">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="container relative px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="font-Helvetica text-2xl font-bold tracking-tight sm:text-3xl">
                Stay <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Informed</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get the latest insights on cybersecurity, AI, and emerging technologies delivered straight to your inbox.
              </p>
              
              <form onSubmit={handleNewsletterSubscribe} className="mt-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                  <div className="relative flex-1 w-full">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10 h-12"
                      disabled={isSubscribing}
                    />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubscribing || !email.trim()}
                      className="h-12 px-8 font-semibold bg-primary hover:bg-primary/90 transition-all duration-300"
                    >
                      {isSubscribing ? (
                        <div className="flex items-center">
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                          Subscribing...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Subscribe
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </form>
              
              <p className="mt-4 text-sm text-muted-foreground">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}