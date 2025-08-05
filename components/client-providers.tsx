"use client";

import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { ChatProvider } from '@/contexts/ChatContext';
import dynamic from 'next/dynamic';

// Dynamically import ChatWidget to prevent SSR issues
const ChatWidget = dynamic(() => import('@/components/ChatWidget').catch(() => {
  // Fallback component if ChatWidget fails to load
  return {
    default: () => null
  };
}), {
  ssr: false,
});

interface ClientProvidersProps {
  children: React.ReactNode;
}

export function ClientProviders({ children }: ClientProvidersProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Always render the same structure to prevent hydration mismatch
  return (
    <div suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <ChatProvider>
          {children}
          {/* Temporarily disabled ChatWidget to isolate webpack error */}
          {/* {mounted && <ChatWidget />} */}
        </ChatProvider>
        {mounted && <Toaster position="top-right" richColors />}
      </ThemeProvider>
    </div>
  );
}
