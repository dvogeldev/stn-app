// src/app/layout.tsx
import { Header } from "@/components/Header";
import type { Metadata } from "next";
import "./globals.css";
import { ApolloProvider } from "@/components/providers/apollo-provider";

export const metadata: Metadata = {
  title: "STN App",
  description: "A Next.js frontend for WordPress with GraphQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <ApolloProvider>
          {/* CRUCIAL CHANGE: Using a single explicit div to wrap Header and children */}
          <div>
            <Header />
            {children}
          </div>
        </ApolloProvider>
      </body>
    </html>
  );
}