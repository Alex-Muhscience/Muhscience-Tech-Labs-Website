// Database model types for MariaDB

export interface Contact {
  id?: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'pending' | 'read' | 'responded';
  created_at?: Date;
  updated_at?: Date;
}

export interface BlogPost {
  id?: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  author: string;
  category: string;
  tags?: string[];
  featured_image?: string;
  status: 'draft' | 'published' | 'archived';
  published_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}

export interface Project {
  id?: number;
  title: string;
  slug: string;
  description: string;
  long_description?: string;
  client: string;
  industry: string;
  services?: string[];
  technologies?: string[];
  challenges?: string;
  solutions?: string;
  results?: string;
  timeline_start?: Date;
  timeline_end?: Date;
  featured_image?: string;
  gallery?: string[];
  testimonial_author?: string;
  testimonial_content?: string;
  testimonial_position?: string;
  status: 'draft' | 'published' | 'featured';
  created_at?: Date;
  updated_at?: Date;
}

// Form data types (for API validation)
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface BlogPostFormData {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  author: string;
  category: string;
  tags?: string[];
  featured_image?: string;
  status?: 'draft' | 'published' | 'archived';
  published_at?: string; // ISO date string
}

export interface ProjectFormData {
  title: string;
  slug: string;
  description: string;
  long_description?: string;
  client: string;
  industry: string;
  services?: string[];
  technologies?: string[];
  challenges?: string;
  solutions?: string;
  results?: string;
  timeline_start?: string; // ISO date string
  timeline_end?: string; // ISO date string
  featured_image?: string;
  gallery?: string[];
  testimonial_author?: string;
  testimonial_content?: string;
  testimonial_position?: string;
  status?: 'draft' | 'published' | 'featured';
}
