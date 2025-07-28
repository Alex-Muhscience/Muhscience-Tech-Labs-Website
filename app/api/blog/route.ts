import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import BlogPost from '@/models/BlogPost';
import { mockBlogPosts, delay } from '@/lib/mockBlogData';

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

export async function GET() {
  try {
    console.log('GET /api/blog - Starting request');
    
    // Test database connection
    console.log('Attempting to connect to database...');
    await connectDB();
    console.log('Database connection successful');
    
    // Fetch blog posts
    console.log('Fetching blog posts...');
    const posts = await BlogPost.find({}).sort({ createdAt: -1 });
    console.log(`Found ${posts.length} blog posts`);
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('GET /api/blog - Database error:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : undefined
    });
    
    // In development, fall back to mock data if database fails
    if (IS_DEVELOPMENT) {
      console.log('🔄 Database unavailable, using mock data for development');
      
      // Simulate async delay
      await delay(100);
      
      // Sort mock posts by creation date (newest first)
      const sortedMockPosts = [...mockBlogPosts].sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      
      console.log(`Returning ${sortedMockPosts.length} mock blog posts`);
      
      return NextResponse.json(sortedMockPosts, {
        headers: {
          'X-Data-Source': 'mock',
          'X-Development-Mode': 'true'
        }
      });
    }
    
    return NextResponse.json({ 
      error: 'Failed to fetch blog posts',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  let body: any;
  
  try {
    console.log('POST /api/blog - Starting request');
    
    body = await request.json();
    console.log('Request body received:', body);
    
    // Test database connection
    console.log('Attempting to connect to database...');
    await connectDB();
    console.log('Database connection successful');
    
    // Create blog post
    console.log('Creating blog post...');
    const post = await BlogPost.create(body);
    console.log('Blog post created successfully:', post._id);
    
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('POST /api/blog - Database error:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : undefined
    });
    
    // In development, simulate post creation with mock data
    if (IS_DEVELOPMENT && body) {
      console.log('🔄 Database unavailable, simulating post creation for development');
      
      // Simulate async delay
      await delay(200);
      
      // Create a mock post with the provided data
      const mockPost = {
        _id: `mock-${Date.now()}`,
        ...body,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      console.log('Mock blog post created:', mockPost._id);
      
      return NextResponse.json(mockPost, { 
        status: 201,
        headers: {
          'X-Data-Source': 'mock',
          'X-Development-Mode': 'true'
        }
      });
    }
    
    return NextResponse.json({ 
      error: 'Failed to create blog post',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
