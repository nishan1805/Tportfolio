import type { NavLink, SocialLink } from "@/types";

export const siteConfig = {
  name: "Tarun Dewangan",
  firstName: "TARUN",
  lastName: "DEWANGAN",
  role: "Product Designer",
  description:
    "Senior product designer with more than 6 years of experience building digital products.",
  email: "Tarundewkumar33@gmail.com",
  phone: "+917389884905",
  copyright: "© 2026 Tarun Dewanngan. All rights reserved.",
} as const;

export const navLinks: NavLink[] = [
  { label: "Work", href: "/#work" },
  // Desktop lands on Career Summary. On small screens that section is omitted,
  // so the link points at the hero introduction instead.
  { label: "About me", href: "/#career" },
  { label: "Contact", href: "/#contact" },
];

// TODO: replace "#" with the real profile URLs.
export const socialLinks: SocialLink[] = [
  { platform: "figma", label: "Figma", href: "#" },
  { platform: "behance", label: "Behance", href: "#" },
  { platform: "youtube", label: "YouTube", href: "#" },
  { platform: "linkedin", label: "LinkedIn", href: "#" },
];
