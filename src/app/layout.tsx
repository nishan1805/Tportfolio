import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import { AccessibilityProvider } from "@/components/a11y/AccessibilityProvider";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/data/site";

import "./globals.css";

// Stand-in for Nekst. Weights match the design: regular, medium, semibold, bold, black.
// The family is exposed as --font-outfit and applied through --font-family in globals.css.
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
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
