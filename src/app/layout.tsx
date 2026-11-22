import type { Metadata } from "next";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { AccessibilityProvider } from "@/components/a11y/AccessibilityProvider";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/data/site";

import "./globals.css";

// Self-hosted Nekst demo, the exact family used in the Figma file
// ("FONTSPRING DEMO - Nekst"). Each weight is a separate demo cut, so they are
// registered on one family via next/font/local. The family is --font-nekst.
const nekst = localFont({
  src: [
    { path: "./fonts/nekst-thin.woff2", weight: "100", style: "normal" },
    { path: "./fonts/nekst-light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/nekst-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/nekst-medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/nekst-semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/nekst-bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/nekst-black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-nekst",
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
    <html lang="en" className={nekst.variable}>
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
