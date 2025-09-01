// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/mariadb";
import { compare } from "bcrypt";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { z } from "zod";

// Environment validation
const envSchema = z.object({
  JWT_SECRET: z.string().min(32),
  NODE_ENV: z.enum(["development", "production", "test"]),
});

envSchema.parse(process.env);

// Request validation
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(request: Request) {
  try {
    const { email, password } = loginSchema.parse(await request.json());
    const connection = await connectDB();
    
    if (!connection) {
      throw new Error("Database connection failed");
    }

    // For now, return a not implemented response since we don't have user authentication set up yet
    return NextResponse.json(
      { error: "Authentication not implemented yet" },
      { status: 501 }
    );

  } catch (error) {
    console.error("Authentication error:", error);
    
if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: "Validation failed",
          details: error.issues.map((e: z.ZodIssue) => ({
            field: e.path.join("."),
            message: e.message
          }))
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    );
  }
}