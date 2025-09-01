"use client";

import React, { useEffect, useState } from 'react';

interface ClientSafeDivProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function ClientSafeDiv({ children, fallback = null, ...props }: ClientSafeDivProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return fallback ? <div {...props}>{fallback}</div> : <div {...props}>{children}</div>;
  }

  return <div {...props}>{children}</div>;
}
