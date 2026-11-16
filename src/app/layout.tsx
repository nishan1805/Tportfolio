import type { Metadata } from "next";
import localFont from "next/font/local";

import { AccessibilityProvider } from "@/components/a11y/AccessibilityProvider";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/data/site";

import "./globals.css";

// Self-hosted Outfit (OFL). next/font/google fails on Vercel because the Google
// Fonts CSS returns font URLs with no file extension. Weights match the design:
// regular, medium, semibold, bold, black. The family is --font-outfit.
const outfit = localFont({
  src: [
    { path: "./fonts/outfit-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/outfit-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/outfit-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/outfit-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/outfit-latin-900-normal.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="bg-white font-sans text-black antialiased">
        <AccessibilityProvider>
          <Navbar />
          <main className="min-w-0">{children}</main>
          <Footer />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
