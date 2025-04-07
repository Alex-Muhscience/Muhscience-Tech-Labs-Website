import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectDB();
    const contact = await Contact.create(body);
    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 500 });
  }
}