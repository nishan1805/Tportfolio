"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useA11y } from "@/components/a11y/AccessibilityProvider";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/data/site";

import { SocialLinks } from "./SocialLinks";

const rule = "w-px shrink-0 self-stretch bg-[#d8e6e6]";

export function Navbar() {
  const { open, setOpen } = useA11y();
  const caseStudy = usePathname().startsWith("/work/");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#d8e6e6] bg-transparent shadow-[0_1px_4px_rgba(12,12,13,0.08)] lg:bg-white lg:shadow-none">
      <div
        className={
          caseStudy
            ? "mx-auto hidden h-[58px] w-full max-w-[1440px] items-center justify-between px-[86px] lg:flex"
            : "mx-auto hidden h-[58px] w-full max-w-[1440px] items-center justify-between px-20 lg:flex"
        }
      >
        {caseStudy ? (
          <>
            <Logo />
            <nav aria-label="Main" className="flex items-center gap-8">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={label === "About me" ? "/#career" : href}
                  className="text-[17px] font-semibold leading-normal text-black hover:text-[#3058d8]"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </>
        ) : (
          <>
            <div className="flex h-full items-center gap-6">
              <Logo />
              <span className={rule} aria-hidden />
              <nav aria-label="Main" className="flex h-full items-center">
                {navLinks.map(({ label, href }) => (
                  <span key={label} className="flex h-full items-center">
                    <Link
                      href={label === "About me" ? "/#career" : href}
                      className="px-6 text-[1rem] font-normal leading-normal text-black hover:text-[#3058d8]"
                    >
                      {label}
                    </Link>
                    <span className={rule} aria-hidden />
                  </span>
                ))}
              </nav>
            </div>
            <SocialLinks className="h-full" includeFigma />
          </>
        )}
      </div>

      <div className="flex h-[58px] w-full items-center justify-between border-b border-[#d8e6e6] px-6 lg:hidden">
        <Logo />
        <SocialLinks />
      </div>
      <div className="flex h-[58px] w-full items-stretch lg:hidden">
        <span className={rule} aria-hidden />
        {navLinks.map(({ label, href }) => (
          <span key={label} className="flex min-w-0 flex-1 items-center">
            <Link
              href={label === "About me" ? "/#about" : href}
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
          className="flex items-center px-2 text-[#3058d8]"
        >
          <AccessibilityIcon />
          <Caret />
        </button>
        <span className={rule} aria-hidden />
      </div>
    </header>
  );
}

function AccessibilityIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
      <circle cx="12" cy="4.5" r="1.7" fill="currentColor" />
      <path
        d="M5 9.2h14M12 9.2v4.2m0 0-3.2 6.2M12 13.4l3.2 6.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Caret() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
      <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
