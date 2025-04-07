import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  content: {
    type: String,
    required: [true, 'Please provide content'],
  },
  excerpt: {
    type: String,
    maxlength: [200, 'Excerpt cannot be more than 200 characters'],
  },
  author: {
    name: {
      type: String,
      required: [true, 'Please provide author name'],
    },
    title: String,
  },
  category: {
    type: String,
    required: [true, 'Please provide a category'],
  },
  imageUrl: String,
  readTime: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);