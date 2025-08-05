// Common utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ApiError {
  error: string;
  details?: string;
  code?: string | number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

// Blog types
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
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

// Webinar types
export interface Webinar {
  id: string;
  title: string;
  description: string;
  presenter: {
    name: string;
    title: string;
    image: string;
  };
  date: Date;
  duration: number;
  registrationUrl: string;
  imageUrl: string;
  category: string;
}

// Service types
export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  price?: {
    amount: number;
    currency: string;
    period?: 'monthly' | 'yearly' | 'one-time';
  };
  category: string;
}

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
}

// Navigation types
export interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
  children?: NavigationItem[];
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// Generic entity with timestamps
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// File upload types
export interface FileUpload {
  file: File;
  progress: number;
  status: 'pending' | 'uploading' | 'success' | 'error';
  error?: string;
}

// Analytics types
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
  timestamp: Date;
}

// Environment types
export interface EnvironmentConfig {
  NODE_ENV: 'development' | 'production' | 'test';
  MONGODB_URI: string;
  JWT_SECRET: string;
  NEXT_PUBLIC_SITE_URL?: string;
}

// Component prop types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface LoadingProps extends BaseComponentProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export interface ErrorBoundaryProps extends BaseComponentProps {
  fallback?: React.ComponentType<{
    error?: Error;
    resetError: () => void;
  }>;
}

// Utility types for React components
export type ComponentPropsWithoutRef<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;
export type ComponentPropsWithRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>;

// Database model types
export interface MongoDocument {
  _id: string;
  __v: number;
  createdAt: Date;
  updatedAt: Date;
}
