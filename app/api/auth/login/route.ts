// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
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
    
    if (!connection?.db) {
      throw new Error("Database connection failed");
    }

    const user = await connection.db.collection("users").findOne({ email });
    
    if (!user || !(await compare(password, user.password))) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({
      sub: user._id.toString(),
      email: user.email,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(secret);

    const cookieStore = await cookies();
    cookieStore.set({
      name: "auth-token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 86400,
      path: "/",
    });

    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
      },
    });

  } catch (error) {
    console.error("Authentication error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: "Validation failed",
          details: error.errors.map(e => ({
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