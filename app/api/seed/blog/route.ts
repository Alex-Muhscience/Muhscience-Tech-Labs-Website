import { NextResponse } from "next/server";
import { DatabaseQueries, initializeDatabase } from "@/lib/mariadb";
import connectDB from '@/lib/mariadb';

const samplePosts = [
  {
    title: "The Future of Cybersecurity: AI-Powered Threat Detection",
    slug: "future-cybersecurity-ai-threat-detection",
    content: "Artificial Intelligence is revolutionizing the way we approach cybersecurity. Modern threat detection systems leverage machine learning algorithms to identify and respond to potential security breaches in real-time. This comprehensive guide explores the latest advancements in AI-driven security solutions and their practical applications in enterprise environments.",
    excerpt: "Exploring how AI is transforming cybersecurity threat detection and response",
    author: "Dr. Sarah Chen",
    category: "Cybersecurity",
    featured_image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    status: 'published' as const,
    published_at: new Date()
  },
  {
    title: "Quantum Computing: Preparing for the Post-Quantum Era",
    content: "As quantum computers become more powerful, the need for quantum-resistant cryptography becomes increasingly critical. Organizations must start preparing for the post-quantum era. This article delves into the implications of quantum computing on current cryptographic systems and outlines strategies for maintaining security in a quantum-capable world.",
    excerpt: "Understanding the impact of quantum computing on modern cryptography",
    author: {
      name: "Dr. James Park",
      title: "Quantum Research Lead"
    },
    category: "Innovation",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    readTime: "8 min read"
  },
  {
    title: "Blockchain Security: Best Practices for Smart Contracts",
    content: "Smart contract vulnerabilities can lead to significant financial losses. This guide covers essential security practices for developing and auditing smart contracts. Learn about common vulnerabilities, testing methodologies, and tools for ensuring the security of your blockchain applications.",
    excerpt: "Essential security practices for blockchain development",
    author: {
      name: "Marcus Rodriguez",
      title: "Blockchain Security Expert"
    },
    category: "Blockchain",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    readTime: "6 min read"
  },
  {
    title: "Machine Learning in Healthcare: Ethical Considerations",
    content: "As healthcare organizations increasingly adopt ML solutions, understanding and addressing ethical implications becomes crucial. This article explores key considerations in implementing AI/ML solutions in healthcare, including data privacy, bias mitigation, and ensuring equitable access to AI-driven healthcare services.",
    excerpt: "Navigating ethical challenges in healthcare AI implementation",
    author: {
      name: "Dr. Emily Watson",
      title: "AI Ethics Researcher"
    },
    category: "AI/ML",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    readTime: "7 min read"
  },
  {
    title: "Zero Trust Architecture: Implementation Guide",
    content: "Zero Trust security models are becoming the standard for enterprise security. Learn how to implement Zero Trust principles in your organization. This comprehensive guide covers the fundamental concepts, implementation strategies, and best practices for transitioning to a Zero Trust security model.",
    excerpt: "A comprehensive guide to implementing Zero Trust security",
    author: {
      name: "Alex Thompson",
      title: "Security Architect"
    },
    category: "Cybersecurity",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    readTime: "10 min read"
  }
];

export async function GET() {
  try {
    console.log('GET /api/seed/blog - Starting request');
    
    await initializeDatabase();
    console.log('Database initialized successfully');
    
    console.log('Fetching existing blog posts...');
    const posts = await DatabaseQueries.getBlogPosts('published');
    console.log(`Found ${Array.isArray(posts) ? posts.length : 0} existing blog posts`);
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('GET /api/seed/blog - Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : undefined
    });
    return NextResponse.json({ 
      error: "Failed to fetch blog posts",
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function POST() {
  return NextResponse.json({ 
    message: "Seeding not implemented yet",
    note: "Use MariaDB directly to seed data"
  }, { status: 501 });
}
