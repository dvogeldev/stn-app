// src/components/providers/apollo-provider.tsx
"use client";

import { ApolloProvider as Provider } from "@apollo/client";
import { initializeApollo } from "@/lib/apollo/client"; // This import path should be correct now

interface ApolloProviderProps {
  children: React.ReactNode;
}

export function ApolloProvider({ children }: ApolloProviderProps) {
  const client = initializeApollo();
  return <Provider client={client}>{children}</Provider>;
}