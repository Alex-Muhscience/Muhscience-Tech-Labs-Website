'use client';

import { useCallback } from 'react';
import { toast } from '@/hooks/use-toast';

interface ErrorInfo {
  message: string;
  code?: string;
  details?: string;
}

interface UseErrorHandlerReturn {
  handleError: (error: unknown, fallbackMessage?: string) => void;
  handleApiError: (response: Response, fallbackMessage?: string) => Promise<void>;
}

export function useErrorHandler(): UseErrorHandlerReturn {
  const handleError = useCallback((error: unknown, fallbackMessage = 'An unexpected error occurred') => {
    let errorInfo: ErrorInfo;

    if (error instanceof Error) {
      errorInfo = {
        message: error.message,
        code: 'code' in error ? String(error.code) : undefined,
      };
    } else if (typeof error === 'string') {
      errorInfo = { message: error };
    } else {
      errorInfo = { message: fallbackMessage };
    }

    // Log error for debugging
    console.error('Error handled:', errorInfo);

    // Show user-friendly toast
    toast({
      title: 'Error',
      description: errorInfo.message,
      variant: 'destructive',
    });
  }, []);

  const handleApiError = useCallback(async (response: Response, fallbackMessage = 'API request failed') => {
    try {
      const errorData = await response.json();
      const message = errorData.error || errorData.message || fallbackMessage;
      const details = errorData.details;

      toast({
        title: `Error ${response.status}`,
        description: details ? `${message}: ${details}` : message,
        variant: 'destructive',
      });
    } catch {
      // If we can't parse the error response, use fallback
      toast({
        title: `Error ${response.status}`,
        description: fallbackMessage,
        variant: 'destructive',
      });
    }
  }, []);

  return { handleError, handleApiError };
}
