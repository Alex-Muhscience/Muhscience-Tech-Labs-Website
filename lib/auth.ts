// lib/auth.ts
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export async function verifySession() {
  try {
    const token = cookies().get("auth-token")?.value;
    if (!token) return false;

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret);
    return true;
  } catch (error) {
    return false;
  }
}