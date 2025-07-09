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

  // --- ADD THESE CONSOLE.LOGS ---
  console.log("ApolloProvider receiving children:");
  console.log("Type of children:", typeof children);
  console.log("Is children an array?", Array.isArray(children));
  console.log("Number of children:", React.Children.count(children));
  if (Array.isArray(children) && children.length > 0) {
      console.log("First child:", children[0]);
  } else {
      console.log("Children (if single):", children);
  }
  // ------------------------------

  return (
    <OriginalApolloProvider client={client}>
      <div>{children}</div>
    </OriginalApolloProvider>
  );
}