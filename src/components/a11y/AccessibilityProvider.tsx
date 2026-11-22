"use client";

import { createContext, useContext, useEffect, useId, useState, useRef } from "react";

type A11yContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const A11yContext = createContext<A11yContextValue | null>(null);

export function useA11y() {
  const value = useContext(A11yContext);
  if (!value) throw new Error("useA11y must be used within AccessibilityProvider");
  return value;
}

const FONTS = [
  { label: "Nekst", value: "var(--font-nekst), ui-sans-serif, system-ui, sans-serif" },
  { label: "System Sans", value: "ui-sans-serif, system-ui, sans-serif" },
  { label: "Serif", value: "Georgia, 'Times New Roman', serif" },
] as const;

const LANGUAGES = ["English"] as const;

function CloseIcon() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/icons/close.svg"
      alt=""
      width={18}
      height={18}
      aria-hidden
      className="inline-block"
    />
  );
}

// Chevron for select
function ChevronDownIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" aria-hidden className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
      <path d="M4.5 6.5L8 10L11.5 6.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]>("English");
  const [font, setFont] = useState(0);
  const [scale, setScale] = useState(100);
  const [dark, setDark] = useState(false);
  const [gray, setGray] = useState(false);
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = "en";
    root.dataset.theme = dark ? "dark" : "light";
    root.dataset.grayscale = gray ? "on" : "off";
    root.style.setProperty("--a11y-scale", String(scale / 100));
    root.style.setProperty("--font-family", FONTS[font].value);
  }, [dark, gray, scale, font, language]);

  // Escape key closes panel
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Lock page scroll on mobile when panel is open
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia('(max-width: 1023.98px)');
    if (!mq.matches) return;
    const prevDocOverflow = document.documentElement.style.overflow;
    const prevDocOverscroll = document.documentElement.style.overscrollBehavior;
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.overscrollBehavior = 'none';
    return () => {
      document.documentElement.style.overflow = prevDocOverflow;
      document.documentElement.style.overscrollBehavior = prevDocOverscroll;
    };
  }, [open]);

  return (
    <A11yContext.Provider value={{ open, setOpen }}>
      {children}
      {open && (
        <div className="fixed inset-0 z-[80]" role="presentation" onClick={() => setOpen(false)}>
          {/* Panel */}
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(event) => event.stopPropagation()}
            className={`
              absolute
              right-3 top-[124px]
              flex w-[min(360px,calc(100vw-24px))]
              flex-col rounded-[12px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.25)]
              h-auto max-h-[calc(100dvh-136px)] overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]
              lg:left-[min(calc(max(0px,calc((100vw_-_1440px)_/_2))_+_538px),calc(100vw_-_694px))]
              lg:top-[66px]
              lg:right-auto
              lg:w-[678px] lg:h-auto
              lg:p-0
              lg:rounded-[12px] lg:max-h-none lg:overflow-hidden
            `}
          >
            {/* Header */}
            <div className="flex gap-[10px] border-b border-[#b2cccd] p-4 lg:p-[16px]">
              <div className="min-w-0 flex-1">
                <p
                  id={titleId}
                  className="text-[1.25rem] font-bold leading-normal lg:text-[20px] lg:font-bold lg:leading-normal text-black"
                >
                  Accessibility Points
                </p>
                <p className="mt-2 text-[0.875rem] font-medium leading-normal text-[#3e8083] lg:mt-2 lg:text-[14px] lg:font-normal">
                  I’ve believe design is for everyone so, customise website accordingly.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close accessibility settings"
                onClick={() => setOpen(false)}
                className="flex size-9 shrink-0 items-center justify-center rounded-[6px] border border-[#dcdcdc] p-0 lg:size-9 lg:p-[9px] lg:border-[0.75px]"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Section 2: Language, Font, Font Size */}
            <div className="flex flex-col gap-8 border-b border-[#b2cccd] p-4 lg:p-[32px] lg:gap-[32px]">
              {/* Language */}
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
                <span className="text-[1rem] font-bold leading-normal lg:text-[16px] lg:font-bold">
                  Language
                </span>
                <div className="relative w-full lg:w-[329px]">
                  <select
                    value={language}
                    onChange={(event) => setLanguage(event.target.value as (typeof LANGUAGES)[number])}
                    className={`
                      h-11 w-full rounded-[8px] border border-[#d8e6e6] bg-white px-3 text-[0.875rem] text-black
                      lg:h-[40px] lg:w-[329px] lg:px-[16px] lg:text-[16px]
                      lg:appearance-none lg:border-[#dcdcdc]
                    `}
                  >
                    {LANGUAGES.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  <span className="hidden lg:block">
                    <ChevronDownIcon />
                  </span>
                </div>
              </div>
              {/* Font */}
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
                <span className="text-[1rem] font-bold leading-normal lg:text-[16px] lg:font-bold">
                  Font
                </span>
                <div className="relative w-full lg:w-[329px]">
                  <select
                    value={font}
                    onChange={(event) => setFont(Number(event.target.value))}
                    className={`
                      h-11 w-full rounded-[8px] border border-[#d8e6e6] bg-white px-3 text-[0.875rem] text-black
                      lg:h-[40px] lg:w-[329px] lg:px-[16px] lg:text-[16px]
                      lg:appearance-none lg:border-[#dcdcdc]
                    `}
                  >
                    {FONTS.map((option, index) => (
                      <option key={option.label} value={index}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <span className="hidden lg:block">
                    <ChevronDownIcon />
                  </span>
                </div>
              </div>
              {/* Font Size */}
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
                <span className="text-[1rem] font-bold leading-normal lg:text-[16px] lg:font-bold">
                  Font Size
                </span>
                <div className="flex flex-col items-end w-full lg:w-[328px]">
                  <input
                    type="range"
                    min={80}
                    max={140}
                    step={1}
                    value={scale}
                    aria-valuetext={`${scale}%`}
                    onChange={(event) => setScale(Number(event.target.value))}
                    className="h-1.5 w-full cursor-pointer accent-[#3058d8] lg:h-[6px] lg:w-[328px]"
                  />
                  <span className="text-[0.75rem] leading-normal text-[#acbcef] lg:text-[12px] lg:mt-[5px] lg:text-black">
                    {scale}%
                  </span>
                </div>
              </div>
            </div>

            {/* Section 3: Dark/Grayscale */}
            <div className="flex flex-col gap-8 p-4 lg:p-[32px] lg:gap-[32px]">
              <div className="flex items-center justify-between">
                <span className="text-[1rem] font-bold leading-normal lg:hidden">Dark Mode</span>
                <span className="hidden lg:inline text-[16px] font-bold leading-normal">Dark Modes</span>
                <Switch pressed={dark} label="Dark mode" onClick={() => setDark((value) => !value)} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[1rem] font-bold leading-normal lg:hidden">Grayscale</span>
                <span className="hidden lg:inline text-[16px] font-bold leading-normal">Garyscale</span>
                <Switch pressed={gray} label="Grayscale" onClick={() => setGray((value) => !value)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </A11yContext.Provider>
  );
}

function Switch({ pressed, label, onClick }: { pressed: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={pressed}
      aria-label={label}
      onClick={onClick}
      className={`relative shrink-0 w-[38.76px] h-[22px] rounded-full transition-colors outline-none ${pressed ? "bg-[#3058d8]" : "bg-[#dcdcdc]"} focus-visible:ring-2 focus-visible:ring-[#3058d8]`}
    >
      <span
        className={`absolute left-[3px] top-[3px] size-4 rounded-full bg-white transition-transform ${pressed ? "translate-x-[16.76px]" : "translate-x-0"}`}
      />
    </button>
  );
}
