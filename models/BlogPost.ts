import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the BlogPost document
interface IBlogPost extends Document {
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

const BlogPostSchema = new Schema<IBlogPost>({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
    trim: true,
  },
  content: {
    type: String,
    required: [true, 'Please provide content'],
    trim: true,
  },
  excerpt: {
    type: String,
    maxlength: [200, 'Excerpt cannot be more than 200 characters'],
    trim: true,
  },
  author: {
    name: {
      type: String,
      required: [true, 'Please provide author name'],
      trim: true,
    },
    title: {
      type: String,
      trim: true,
    },
  },
  category: {
    type: String,
    required: [true, 'Please provide a category'],
    trim: true,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
  readTime: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true, // This automatically handles createdAt and updatedAt
  collection: 'blogposts' // Explicitly set collection name
});

// Add indexes for better query performance
BlogPostSchema.index({ createdAt: -1 });
BlogPostSchema.index({ category: 1 });
BlogPostSchema.index({ 'author.name': 1 });

// Export the model, ensuring we don't re-compile in development
const BlogPost = mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);

export default BlogPost;
export type { IBlogPost };
