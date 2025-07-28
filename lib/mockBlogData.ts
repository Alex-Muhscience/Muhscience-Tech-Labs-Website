// Mock blog data for development when database is unavailable
export interface MockBlogPost {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  author: {
    name: string;
    title?: string;
  };
  category: string;
  imageUrl?: string;
  readTime?: string;
  createdAt: Date;
  updatedAt: Date;
}

export const mockBlogPosts: MockBlogPost[] = [
  {
    _id: 'mock-1',
    title: "The Future of Cybersecurity: AI-Powered Threat Detection",
    content: "Artificial Intelligence is revolutionizing the way we approach cybersecurity. Modern threat detection systems leverage machine learning algorithms to identify and respond to potential security breaches in real-time. This comprehensive guide explores the latest advancements in AI-driven security solutions and their practical applications in enterprise environments.",
    excerpt: "Exploring how AI is transforming cybersecurity threat detection and response",
    author: {
      name: "Dr. Sarah Chen",
      title: "Chief Security Officer"
    },
    category: "Cybersecurity",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    readTime: "5 min read",
    createdAt: new Date('2024-01-15T10:30:00Z'),
    updatedAt: new Date('2024-01-15T10:30:00Z')
  },
  {
    _id: 'mock-2',
    title: "Quantum Computing: Preparing for the Post-Quantum Era",
    content: "As quantum computers become more powerful, the need for quantum-resistant cryptography becomes increasingly critical. Organizations must start preparing for the post-quantum era. This article delves into the implications of quantum computing on current cryptographic systems and outlines strategies for maintaining security in a quantum-capable world.",
    excerpt: "Understanding the impact of quantum computing on modern cryptography",
    author: {
      name: "Dr. James Park",
      title: "Quantum Research Lead"
    },
    category: "Innovation",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    readTime: "8 min read",
    createdAt: new Date('2024-01-10T14:20:00Z'),
    updatedAt: new Date('2024-01-10T14:20:00Z')
  },
  {
    _id: 'mock-3',
    title: "Blockchain Security: Best Practices for Smart Contracts",
    content: "Smart contract vulnerabilities can lead to significant financial losses. This guide covers essential security practices for developing and auditing smart contracts. Learn about common vulnerabilities, testing methodologies, and tools for ensuring the security of your blockchain applications.",
    excerpt: "Essential security practices for blockchain development",
    author: {
      name: "Marcus Rodriguez",
      title: "Blockchain Security Expert"
    },
    category: "Blockchain",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    readTime: "6 min read",
    createdAt: new Date('2024-01-08T09:45:00Z'),
    updatedAt: new Date('2024-01-08T09:45:00Z')
  },
  {
    _id: 'mock-4',
    title: "Machine Learning in Healthcare: Ethical Considerations",
    content: "As healthcare organizations increasingly adopt ML solutions, understanding and addressing ethical implications becomes crucial. This article explores key considerations in implementing AI/ML solutions in healthcare, including data privacy, bias mitigation, and ensuring equitable access to AI-driven healthcare services.",
    excerpt: "Navigating ethical challenges in healthcare AI implementation",
    author: {
      name: "Dr. Emily Watson",
      title: "AI Ethics Researcher"
    },
    category: "AI/ML",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    readTime: "7 min read",
    createdAt: new Date('2024-01-05T16:10:00Z'),
    updatedAt: new Date('2024-01-05T16:10:00Z')
  },
  {
    _id: 'mock-5',
    title: "Zero Trust Architecture: Implementation Guide",
    content: "Zero Trust security models are becoming the standard for enterprise security. Learn how to implement Zero Trust principles in your organization. This comprehensive guide covers the fundamental concepts, implementation strategies, and best practices for transitioning to a Zero Trust security model.",
    excerpt: "A comprehensive guide to implementing Zero Trust security",
    author: {
      name: "Alex Thompson",
      title: "Security Architect"
    },
    category: "Cybersecurity",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    readTime: "10 min read",
    createdAt: new Date('2024-01-01T12:00:00Z'),
    updatedAt: new Date('2024-01-01T12:00:00Z')
  }
];

// Helper function to simulate async database operations
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
