'use client';

import { useEffect } from 'react';

interface ErrorInfo {
  message: string;
  stack?: string;
  url?: string;
  userAgent?: string;
  component?: string;
  props?: any;
}

class ClientErrorLogger {
  private static instance: ClientErrorLogger;
  private errorQueue: ErrorInfo[] = [];
  private isLogging = false;

  private constructor() {
    this.initializeClientErrorHandlers();
  }

  public static getInstance(): ClientErrorLogger {
    if (!ClientErrorLogger.instance) {
      ClientErrorLogger.instance = new ClientErrorLogger();
    }
    return ClientErrorLogger.instance;
  }

  private initializeClientErrorHandlers(): void {
    // Override console.error for client-side
    if (typeof window !== 'undefined') {
      const originalConsoleError = console.error;
      const originalConsoleWarn = console.warn;

      console.error = (...args: any[]) => {
        const message = args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' ');
        
        this.logError({
          message,
          url: window.location.href,
          userAgent: navigator.userAgent,
        });

        originalConsoleError.apply(console, args);
      };

      console.warn = (...args: any[]) => {
        const message = args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' ');
        
        this.logWarning({
          message,
          url: window.location.href,
          userAgent: navigator.userAgent,
        });

        originalConsoleWarn.apply(console, args);
      };

      // Global error handler for uncaught JavaScript errors
      window.addEventListener('error', (event) => {
        this.logError({
          message: `Uncaught Error: ${event.message}`,
          stack: event.error?.stack,
          url: window.location.href,
          userAgent: navigator.userAgent,
        });
      });

      // Global handler for unhandled promise rejections
      window.addEventListener('unhandledrejection', (event) => {
        this.logError({
          message: `Unhandled Promise Rejection: ${event.reason}`,
          stack: event.reason?.stack,
          url: window.location.href,
          userAgent: navigator.userAgent,
        });
      });

      // Resource loading errors
      window.addEventListener('error', (event) => {
        if (event.target !== window) {
          const target = event.target as HTMLElement;
          const tagName = target.tagName?.toLowerCase();
          const src = (target as any).src || (target as any).href;
          
          this.logError({
            message: `Resource loading error: ${tagName} failed to load ${src}`,
            url: window.location.href,
            userAgent: navigator.userAgent,
          });
        }
      }, true);
    }
  }

  public logError(errorInfo: ErrorInfo): void {
    this.errorQueue.push({
      ...errorInfo,
    });
    this.processQueue();
  }

  public logWarning(errorInfo: Omit<ErrorInfo, 'stack'>): void {
    this.errorQueue.push({
      ...errorInfo,
    });
    this.processQueue();
  }

  private async processQueue(): Promise<void> {
    if (this.isLogging || this.errorQueue.length === 0) {
      return;
    }

    this.isLogging = true;

    while (this.errorQueue.length > 0) {
      const errorInfo = this.errorQueue.shift()!;
      await this.sendErrorToServer(errorInfo);
    }

    this.isLogging = false;
  }

  private async sendErrorToServer(errorInfo: ErrorInfo): Promise<void> {
    try {
      await fetch('/api/log-error', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          type: errorInfo.stack ? 'error' : 'warning',
          source: 'client',
          ...errorInfo,
        }),
      });
    } catch (error) {
      // Fallback: if we can't send to server, at least log to console
      console.error('Failed to send error to server:', error);
    }
  }
}

export function ClientErrorLoggerComponent() {
  useEffect(() => {
    // Initialize the error logger
    ClientErrorLogger.getInstance();
  }, []);

  return null; // This component doesn't render anything
}

// Export the logger instance for manual logging
export const clientErrorLogger = ClientErrorLogger.getInstance();
