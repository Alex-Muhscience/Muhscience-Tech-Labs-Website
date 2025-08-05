import { NextRequest, NextResponse } from 'next/server';
import { serverErrorLogger } from '@/lib/error-logger';

export async function POST(request: NextRequest) {
  try {
    const errorData = await request.json();
    
    const {
      timestamp,
      type,
      source,
      message,
      stack,
      url,
      userAgent,
      component,
      props
    } = errorData;

    // Log the error using our server-side logger
    if (type === 'error') {
      serverErrorLogger.logError(
        message,
        stack ? { stack } as Error : undefined,
        source,
        {
          url,
          userAgent,
          component,
          props
        }
      );
    } else if (type === 'warning') {
      serverErrorLogger.logWarning(
        message,
        source,
        {
          url,
          userAgent,
          component
        }
      );
    } else {
      serverErrorLogger.logInfo(
        message,
        source,
        {
          url,
          userAgent,
          component
        }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to log error:', error);
    return NextResponse.json({ success: false, error: 'Failed to log error' }, { status: 500 });
  }
}
