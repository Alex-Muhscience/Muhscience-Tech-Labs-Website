'use client';

import { useEffect, useState } from 'react';

interface HydrationSafeWrapperProps {
  children: React.ReactNode;
}

/**
 * A wrapper component that prevents hydration mismatches by ensuring
 * the component only renders after the client has mounted.
 * This is useful for components that might be affected by browser extensions
 * or other client-side modifications.
 */
export function HydrationSafeWrapper({ children }: HydrationSafeWrapperProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    // Return a placeholder that matches the server-rendered content
    return <div suppressHydrationWarning>{children}</div>;
  }

  return <>{children}</>;
}

/**
 * A hook that returns whether the component has mounted on the client.
 * Useful for preventing hydration mismatches in client-only code.
 */
export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}
