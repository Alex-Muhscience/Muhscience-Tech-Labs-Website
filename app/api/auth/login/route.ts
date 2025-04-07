import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { compare } from "bcrypt";
import { sign, type SignOptions } from "jsonwebtoken";
import { cookies } from "next/headers";
import { Db } from "mongodb";
import { z } from "zod";

// Environment validation schema
const envSchema = z.object({
  JWT_SECRET: z.string().min(32, "JWT_SECRET must be at least 32 characters"),
  NODE_ENV: z.enum(["development", "production", "test"]),
});

// Validate environment variables at startup
try {
  envSchema.parse(process.env);
} catch (error) {
  const errorMessage = error instanceof z.ZodError 
    ? error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')
    : "Invalid environment configuration";
  throw new Error(`Configuration error: ${errorMessage}`);
}

// Request body validation schema
const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

interface UserDocument {
  _id: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export async function POST(request: Request) {
  try {
    // Parse and validate request
    const requestBody = await request.json();
    const { email, password } = loginSchema.parse(requestBody);

    // Database connection
    const connection = await connectDB();
    if (!connection?.db) {
      throw new Error("Database connection failed - no DB instance available");
    }
    const db: Db = connection.db;

    // User lookup
    const user = await db.collection<UserDocument>("users").findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Password verification
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // JWT configuration
    const jwtOptions: SignOptions = {
      expiresIn: '24h',
      algorithm: 'HS256'
    };

    // Token generation
    const token = sign(
      {
        sub: user._id.toString(),
        email: user.email,
        iat: Math.floor(Date.now() / 1000),
      },
      process.env.JWT_SECRET!,
      jwtOptions
    );

    // Secure cookie settings
    cookies().set({
      name: 'auth-token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 86400,
      path: '/',
    });

    // Success response
    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Authentication error:', error);
    
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: "Validation failed",
          details: error.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    );
  }
}