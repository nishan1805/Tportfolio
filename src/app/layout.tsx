import type { Metadata } from "next";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { AccessibilityProvider } from "@/components/a11y/AccessibilityProvider";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/data/site";

import "./globals.css";

const outfit = localFont({
  src: [
    { path: "./fonts/outfit-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/outfit-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/outfit-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-outfit",
  display: "swap",
});

const bitcountSingle = localFont({
  src: [
    { path: "./fonts/bitcount-single-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/bitcount-single-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/bitcount-single-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-bitcount-single",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${bitcountSingle.variable}`}>
      <body className="bg-white font-sans text-black antialiased">
        <AccessibilityProvider>
          <Navbar />
          <main className="min-w-0">{children}</main>
          <Footer />
        </AccessibilityProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
