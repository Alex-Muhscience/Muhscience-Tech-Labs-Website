import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { compare } from "bcrypt";
import { sign, type SignOptions } from "jsonwebtoken";
import { cookies } from "next/headers";
import { Db } from "mongodb";
import { z } from "zod";

// Strict environment validation schema
const envSchema = z.object({
  JWT_SECRET: z.string().min(32),
  NODE_ENV: z.enum(["development", "production", "test"]),
});

// Validate environment variables at module load time
try {
  envSchema.parse(process.env);
} catch (error) {
  throw new Error(
    "Invalid environment configuration: " + 
    (error instanceof z.ZodError ? error.errors.map(e => e.message).join(", ") : String(error))
  );
}

// Type-safe request body schema
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type LoginRequest = z.infer<typeof loginSchema>;

interface UserDocument {
  _id: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function POST(request: Request) {
  try {
    // Parse and validate request body with Zod
    const body = await request.json();
    const { email, password }: LoginRequest = loginSchema.parse(body);

    // Database connection with proper null checks
    const connection = await connectDB();
    if (!connection?.db) {
      throw new Error("Database connection failed - no DB instance available");
    }
    const db: Db = connection.db;

    // Find user with proper typing
    const user = await db.collection<UserDocument>("users").findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Secure password comparison
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // JWT signing with verified secret and proper options
    const jwtOptions: SignOptions = {
      expiresIn: '24h',
      algorithm: 'HS256'
    };

    const token = sign(
      {
        userId: user._id.toString(),
        email: user.email,
        iat: Math.floor(Date.now() / 1000)
      },
      process.env.JWT_SECRET!, // Non-null assertion is safe due to Zod validation
      jwtOptions
    );

    // Secure cookie configuration
    const cookieConfig = {
      name: 'auth-token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict' as const,
      maxAge: 86400,
      path: '/',
    };

    cookies().set(cookieConfig);

    // Type-safe success response
    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        email: user.email
      }
    }, { status: 200 });

  } catch (error) {
    console.error('Authentication error:', error);
    
    // Handle validation errors specifically
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: "Validation error",
          details: error.errors.map(e => ({
            path: e.path.join('.'),
            message: e.message
          }))
        },
        { status: 400 }
      );
    }

    // Generic error response
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    );
  }
}