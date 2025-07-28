// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Merriweather, GFS_Didot } from "next/font/google";
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

const gfsDidot = GFS_Didot({
  subsets: ["greek"],
  weight: ["400"],
  variable: "--font-gfs-didot",
  display: "swap",
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
      <body className={`${poppins.variable} ${merriweather.variable} ${gfsDidot.variable} font-body`}>
        <ApolloProvider>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}