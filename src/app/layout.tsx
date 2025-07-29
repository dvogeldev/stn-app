// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Merriweather, Uncial_Antiqua } from "next/font/google";
import "./globals.css";
import { ApolloProvider } from "@/components/providers/apollo-provider";

// Font configurations
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

const uncialAntiqua = Uncial_Antiqua({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-uncial-antiqua",
  display: "swap",
  preload: true,
});

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
      <head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Uncial+Antiqua:wght@400&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Uncial+Antiqua:wght@400&display=swap"
        />
      </head>
      <body className={`${poppins.variable} ${merriweather.variable} ${uncialAntiqua.variable} font-body`}>
        <ApolloProvider>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}