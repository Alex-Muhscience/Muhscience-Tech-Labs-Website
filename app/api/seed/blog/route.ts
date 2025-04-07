import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";

const samplePosts = [
  {
    title: "The Future of Cybersecurity: AI-Powered Threat Detection",
    content: "Artificial Intelligence is revolutionizing the way we approach cybersecurity. Modern threat detection systems leverage machine learning algorithms to identify and respond to potential security breaches in real-time...",
    excerpt: "Exploring how AI is transforming cybersecurity threat detection and response",
    author: {
      name: "Dr. Sarah Chen",
      title: "Chief Security Officer"
    },
    category: "Cybersecurity",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    readTime: "5 min read"
  },
  {
    title: "Quantum Computing: Preparing for the Post-Quantum Era",
    content: "As quantum computers become more powerful, the need for quantum-resistant cryptography becomes increasingly critical. Organizations must start preparing for the post-quantum era...",
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
    content: "Smart contract vulnerabilities can lead to significant financial losses. This guide covers essential security practices for developing and auditing smart contracts...",
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
    content: "As healthcare organizations increasingly adopt ML solutions, understanding and addressing ethical implications becomes crucial. This article explores key considerations...",
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
    content: "Zero Trust security models are becoming the standard for enterprise security. Learn how to implement Zero Trust principles in your organization...",
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

export async function POST() {
  try {
    await connectDB();
    
    // Clear existing posts
    await BlogPost.deleteMany({});
    
    // Insert sample posts
    const posts = await BlogPost.insertMany(samplePosts);
    
    return NextResponse.json({ 
      message: "Sample blog posts created successfully",
      count: posts.length 
    }, { status: 201 });
  } catch (error) {
    console.error('Error seeding blog posts:', error);
    return NextResponse.json({ 
      error: "Failed to seed blog posts" 
    }, { status: 500 });
  }
}