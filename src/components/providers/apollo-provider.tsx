// src/components/providers/apollo-provider.tsx
"use client";

import { ApolloProvider as OriginalApolloProvider } from "@apollo/client";
import { initializeApollo } from "@/lib/apollo/client";
import React from 'react'; // <-- Make sure React is imported for React.Children utility

interface ApolloProviderProps {
  children: React.ReactNode;
}

export function ApolloProvider({ children }: ApolloProviderProps) {
  const client = initializeApollo();

  return (
    <OriginalApolloProvider client={client}>
      {children}
    </OriginalApolloProvider>
  );
}