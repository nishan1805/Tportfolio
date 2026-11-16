"use client";

import Link from "next/link";
import { useState } from "react";

import { navLinks } from "@/data/site";

import { SocialLinks } from "./SocialLinks";

/** Menu button + dropdown, shown only on small screens. */
export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="flex size-10 items-center justify-center text-2xl leading-none"
      >
        <span aria-hidden>{isOpen ? "✕" : "☰"}</span>
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-50 border-b border-prime-teal-200 bg-white px-6 py-4 shadow-md"
        >
          <ul>
            {navLinks.map(({ label, href }) => (
              <li key={label} className="border-b border-prime-teal-200 last:border-b-0">
                <Link href={href} onClick={close} className="block py-3 text-base">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <SocialLinks />
          </div>
        </div>
      )}
    </div>
  );
}
