"use client";

import { Fragment } from "react";
import Link from "next/link";

import { useA11y } from "@/components/a11y/AccessibilityProvider";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/data/site";

import { SocialLinks } from "./SocialLinks";

const AccessibilityIcon = () => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/icons/accessibility.svg"
    alt=""
    width={24}
    height={24}
    className="inline-block"
    aria-hidden
  />
);

const ArrowDropDownIcon = ({ open }: { open: boolean }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/icons/arrow-drop-down.svg"
    alt=""
    width={24}
    height={24}
    className={`inline-block transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    aria-hidden
  />
);

const rule = "w-px shrink-0 self-stretch bg-[#d8e6e6]";

export function Navbar() {
  const { open, setOpen } = useA11y();

  // Desktop header (lg and up)
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d8e6e6] bg-white shadow-[0_1px_2px_rgba(12,12,13,0.05)] lg:shadow-none">
      {/* Desktop */}
      <div className="mx-auto hidden h-[58px] w-full max-w-[1440px] items-center justify-between px-[80px] lg:flex">
        {/* LEFT group */}
        <div className="flex h-full items-center gap-[24px]">
          <Logo />
          <span className={rule} aria-hidden />
          <nav aria-label="Main" className="contents">
            {navLinks.map((link, idx) => (
              <Fragment key={link.label}>
                <Link
                  href={link.href}
                  className="text-[16px] font-normal leading-normal text-black hover:text-[#3058d8] transition-colors"
                >
                  {link.label}
                </Link>
                {idx < navLinks.length - 1 && (
                  <span className={rule} aria-hidden />
                )}
              </Fragment>
            ))}
          </nav>
          {/* Accessibility trigger group */}
          <div className="flex h-full items-center gap-[16px]">
            <span className={rule} aria-hidden />
            <button
              type="button"
              aria-label="Accessibility settings"
              aria-haspopup="dialog"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="flex h-6 w-auto items-center gap-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3058d8] transition-opacity hover:opacity-80"
            >
              <AccessibilityIcon />
              <ArrowDropDownIcon open={open} />
            </button>
            <span className={rule} aria-hidden />
          </div>
        </div>
        {/* RIGHT group */}
        <SocialLinks className="h-full" includeFigma />
      </div>

      {/* Mobile header (unchanged) */}
      <div className="flex h-[58px] w-full items-center justify-between border-b border-[#d8e6e6] px-6 lg:hidden">
        <Logo />
        <SocialLinks />
      </div>
      <div className="flex h-[58px] w-full items-stretch lg:hidden">
        <span className={rule} aria-hidden />
        {navLinks.map(({ label, href }) => (
          <span key={label} className="flex min-w-0 flex-1 items-center">
            <Link
              href={href}
              className="flex flex-1 items-center justify-center px-2 text-[0.875rem] font-normal leading-normal text-black"
            >
              {label}
            </Link>
            <span className={rule} aria-hidden />
          </span>
        ))}
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="dialog"
          aria-label="Accessibility settings"
          onClick={() => setOpen(!open)}
          className="flex items-center px-2 text-[#3058d8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3058d8]"
        >
          {/* Use the same SVGs as desktop for icon/caret, but keep layout */}
          <AccessibilityIcon />
          <ArrowDropDownIcon open={open} />
        </button>
        <span className={rule} aria-hidden />
      </div>
    </header>
  );
}
