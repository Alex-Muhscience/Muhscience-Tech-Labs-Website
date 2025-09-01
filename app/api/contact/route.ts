import { NextResponse } from 'next/server';
import { DatabaseQueries, initializeDatabase } from '@/lib/mariadb';
import { z } from 'zod';
import { VALIDATION } from '@/lib/constants';
import type { ContactFormData } from '@/types/database';

// Input validation schema
const contactSchema = z.object({
  name: z.string().min(VALIDATION.NAME_MIN_LENGTH, 'Name is required').max(VALIDATION.NAME_MAX_LENGTH, `Name must be less than ${VALIDATION.NAME_MAX_LENGTH} characters`),
  email: z.string().email('Invalid email format'),
  subject: z.string().min(VALIDATION.NAME_MIN_LENGTH, 'Subject is required').max(VALIDATION.SUBJECT_MAX_LENGTH, `Subject must be less than ${VALIDATION.SUBJECT_MAX_LENGTH} characters`),
  message: z.string().min(VALIDATION.NAME_MIN_LENGTH, 'Message is required').max(VALIDATION.MESSAGE_MAX_LENGTH, `Message must be less than ${VALIDATION.MESSAGE_MAX_LENGTH} characters`)
});


interface ErrorResponse {
  error: string;
  details?: string;
}

export async function POST(request: Request): Promise<NextResponse<any>> {
  try {
    // Initialize database tables if they don't exist
    await initializeDatabase();
    
    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Create contact record using MariaDB
    const result = await DatabaseQueries.createContact(validatedData);

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        id: (result as any).insertId
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);

    // Handle validation errors
if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: error.issues.map((err: z.ZodIssue) => `${err.path.join('.')}: ${err.message}`).join(', ')
        },
        { status: 400 }
      );
    }

    // Handle database errors
    if (error instanceof Error && error.name === 'ValidationError') {
      return NextResponse.json(
        { error: 'Invalid data provided', details: error.message },
        { status: 400 }
      );
    }

    // Handle generic errors
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
