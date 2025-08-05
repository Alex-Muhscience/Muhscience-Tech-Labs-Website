import { writeFile, appendFile, existsSync } from 'fs';
import { join } from 'path';

const LOG_FILE_PATH = join(process.cwd(), 'runtime-errors.log');

interface ErrorLog {
  timestamp: string;
  type: 'error' | 'warning' | 'info';
  source: 'client' | 'server';
  message: string;
  stack?: string;
  url?: string;
  userAgent?: string;
  component?: string;
  props?: any;
}

export class ErrorLogger {
  private static instance: ErrorLogger;
  private logQueue: ErrorLog[] = [];
  private isWriting = false;

  private constructor() {
    this.initializeLogFile();
  }

  public static getInstance(): ErrorLogger {
    if (!ErrorLogger.instance) {
      ErrorLogger.instance = new ErrorLogger();
    }
    return ErrorLogger.instance;
  }

  private initializeLogFile(): void {
    if (!existsSync(LOG_FILE_PATH)) {
      const header = `=== Muhscience Tech Labs Website - Runtime Error Log ===\nStarted: ${new Date().toISOString()}\n\n`;
      writeFile(LOG_FILE_PATH, header, (err) => {
        if (err) console.error('Failed to initialize error log file:', err);
      });
    }
  }

  public logError(
    message: string,
    error?: Error,
    source: 'client' | 'server' = 'client',
    additionalInfo?: {
      url?: string;
      userAgent?: string;
      component?: string;
      props?: any;
    }
  ): void {
    const errorLog: ErrorLog = {
      timestamp: new Date().toISOString(),
      type: 'error',
      source,
      message,
      stack: error?.stack,
      ...additionalInfo,
    };

    this.queueLog(errorLog);
  }

  public logWarning(
    message: string,
    source: 'client' | 'server' = 'client',
    additionalInfo?: {
      url?: string;
      userAgent?: string;
      component?: string;
    }
  ): void {
    const warningLog: ErrorLog = {
      timestamp: new Date().toISOString(),
      type: 'warning',
      source,
      message,
      ...additionalInfo,
    };

    this.queueLog(warningLog);
  }

  public logInfo(
    message: string,
    source: 'client' | 'server' = 'client',
    additionalInfo?: {
      url?: string;
      userAgent?: string;
      component?: string;
    }
  ): void {
    const infoLog: ErrorLog = {
      timestamp: new Date().toISOString(),
      type: 'info',
      source,
      message,
      ...additionalInfo,
    };

    this.queueLog(infoLog);
  }

  private queueLog(log: ErrorLog): void {
    this.logQueue.push(log);
    this.processQueue();
  }

  private async processQueue(): Promise<void> {
    if (this.isWriting || this.logQueue.length === 0) {
      return;
    }

    this.isWriting = true;

    while (this.logQueue.length > 0) {
      const log = this.logQueue.shift()!;
      await this.writeLogToFile(log);
    }

    this.isWriting = false;
  }

  private writeLogToFile(log: ErrorLog): Promise<void> {
    return new Promise((resolve) => {
      const logEntry = this.formatLogEntry(log);
      
      appendFile(LOG_FILE_PATH, logEntry, (err) => {
        if (err) {
          console.error('Failed to write to error log:', err);
        }
        resolve();
      });
    });
  }

  private formatLogEntry(log: ErrorLog): string {
    let entry = `[${log.timestamp}] [${log.type.toUpperCase()}] [${log.source.toUpperCase()}] ${log.message}\n`;
    
    if (log.url) {
      entry += `  URL: ${log.url}\n`;
    }
    
    if (log.component) {
      entry += `  Component: ${log.component}\n`;
    }
    
    if (log.userAgent) {
      entry += `  User Agent: ${log.userAgent}\n`;
    }
    
    if (log.props) {
      entry += `  Props: ${JSON.stringify(log.props, null, 2)}\n`;
    }
    
    if (log.stack) {
      entry += `  Stack Trace:\n${log.stack}\n`;
    }
    
    entry += '\n';
    return entry;
  }
}

// Server-side error logging utility
export const serverErrorLogger = ErrorLogger.getInstance();

// Console override for server-side
if (typeof window === 'undefined') {
  const originalConsoleError = console.error;
  const originalConsoleWarn = console.warn;

  console.error = (...args: any[]) => {
    const message = args.map(arg => 
      typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
    ).join(' ');
    
    serverErrorLogger.logError(message, undefined, 'server');
    originalConsoleError.apply(console, args);
  };

  console.warn = (...args: any[]) => {
    const message = args.map(arg => 
      typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
    ).join(' ');
    
    serverErrorLogger.logWarning(message, 'server');
    originalConsoleWarn.apply(console, args);
  };
}
