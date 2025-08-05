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
  title: "St. Nicholas Antiochian Orthodox Church - Grand Rapids, MI",
  description: 'Welcome to St. Nicholas Orthodox Church. Experience ancient Christian worship in Grand Rapids. Join us for Divine Liturgy, Vespers, and community.',
  keywords: ['Orthodox Church Grand Rapids', 'Antiochian Orthodox', 'Divine Liturgy', 'Orthodox Christianity Michigan'],
  openGraph: {
    title: 'St. Nicholas Antiochian Orthodox Church - MI',
    description: 'Ancient faith, living community in Grand Rapids',
    url: 'https://stnicholasgr.com',
    siteName: 'St. Nicholas Antiochian Orthodox Church',
    images: [
      {
        url:'/assests/og-image.jpeg',
        width: 1200,
        height: 630,
        alt:'Some BS',
      },
    ],
    locale: "en_US",
    type: 'website',
  },
  twitter: {
    card: 'St. Nicholas Antiochian Churc',
    title: 'St. Nicholas Antiochian Orthodox Church - Grand Rapids, MI',
    description: 'Welcome to St. Nicholas Orthodox Church. Experience ancient Christian worship in Grand Rapids. Join us for Divine Liturgy, Vespers, and community.',
    images: ["https://stnicholasgr.com/assests/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${merriweather.variable} ${uncialAntiqua.variable} font-body`}>
        <ApolloProvider>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}
