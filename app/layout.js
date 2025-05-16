import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Startanator - Find Your Tech Tribe",
  description: "Connect with like-minded tech enthusiasts, find co-founders, and build amazing things together. Made by a 17-year-old developer for the tech community.",
  keywords: ["tech community", "co-founders", "startup", "tech networking", "developer community"],
  authors: [{ name: "Startanator Team" }],
  openGraph: {
    title: "Startanator - Find Your Tech Tribe",
    description: "Connect with like-minded tech enthusiasts, find co-founders, and build amazing things together.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-black dark:text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
