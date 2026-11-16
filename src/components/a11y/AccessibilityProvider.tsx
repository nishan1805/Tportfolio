"use client";

import { createContext, useContext, useEffect, useId, useState } from "react";

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
  { label: "Outfit", value: "var(--font-outfit), ui-sans-serif, system-ui, sans-serif" },
  { label: "System Sans", value: "ui-sans-serif, system-ui, sans-serif" },
  { label: "Serif", value: "Georgia, 'Times New Roman', serif" },
] as const;

const LANGUAGES = ["English"] as const;

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]>("English");
  const [font, setFont] = useState(0);
  const [scale, setScale] = useState(100);
  const [dark, setDark] = useState(false);
  const [gray, setGray] = useState(false);
  const titleId = useId();

  useEffect(() => {
    const root = document.documentElement;
    root.lang = "en";
    root.dataset.theme = dark ? "dark" : "light";
    root.dataset.grayscale = gray ? "on" : "off";
    root.style.setProperty("--a11y-scale", String(scale / 100));
    root.style.setProperty("--font-family", FONTS[font].value);
  }, [dark, gray, scale, font, language]);

  return (
    <A11yContext.Provider value={{ open, setOpen }}>
      {children}
      {open && (
        <div className="fixed inset-0 z-[80]" role="presentation" onClick={() => setOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(event) => event.stopPropagation()}
            className="absolute right-3 top-[124px] flex h-[532px] w-[min(360px,calc(100vw-24px))] flex-col overflow-hidden rounded-[12px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.25)]"
          >
            <div className="flex gap-2.5 border-b border-[#b2cccd] p-4">
              <div className="min-w-0 flex-1">
                <p id={titleId} className="text-[1.25rem] font-bold leading-normal">
                  Accessibility Points
                </p>
                <p className="mt-2 text-[0.875rem] font-medium leading-normal text-[#3e8083]">
                  I’ve believe design is for everyone so, customise website accordingly.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close accessibility settings"
                onClick={() => setOpen(false)}
                className="flex size-9 shrink-0 items-center justify-center rounded-[6px] border border-[#dcdcdc]"
              >
                <span aria-hidden className="text-lg leading-none">
                  ×
                </span>
              </button>
            </div>

            <div className="flex flex-col gap-8 border-b border-[#b2cccd] p-4">
              <label className="flex flex-col gap-4">
                <span className="text-[1rem] font-bold leading-normal">Language</span>
                <select
                  value={language}
                  onChange={(event) => setLanguage(event.target.value as (typeof LANGUAGES)[number])}
                  className="h-11 w-full rounded-[8px] border border-[#d8e6e6] bg-white px-3 text-[0.875rem]"
                >
                  {LANGUAGES.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-4">
                <span className="text-[1rem] font-bold leading-normal">Font</span>
                <select
                  value={font}
                  onChange={(event) => setFont(Number(event.target.value))}
                  className="h-11 w-full rounded-[8px] border border-[#d8e6e6] bg-white px-3 text-[0.875rem]"
                >
                  {FONTS.map((option, index) => (
                    <option key={option.label} value={index}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-4">
                <span className="text-[1rem] font-bold leading-normal">Font Size</span>
                <span className="flex flex-col items-end gap-1">
                  <input
                    type="range"
                    min={80}
                    max={140}
                    step={1}
                    value={scale}
                    aria-valuetext={`${scale}%`}
                    onChange={(event) => setScale(Number(event.target.value))}
                    className="h-1.5 w-full cursor-pointer accent-[#3058d8]"
                  />
                  <span className="text-[0.75rem] leading-normal text-[#acbcef]">{scale}%</span>
                </span>
              </label>
            </div>

            <div className="flex flex-col gap-8 p-4">
              <div className="flex items-center justify-between">
                <span className="text-[1rem] font-bold leading-normal">Dark Mode</span>
                <Switch pressed={dark} label="Dark mode" onClick={() => setDark((value) => !value)} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[1rem] font-bold leading-normal">Grayscale</span>
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
      className={`relative h-[22px] w-[39px] rounded-full transition-colors ${pressed ? "bg-[#3058d8]" : "bg-[#d5d5d5]"}`}
    >
      <span
        className={`absolute top-[2px] size-[18px] rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.25)] transition-transform ${pressed ? "translate-x-[18px]" : "translate-x-[2px]"}`}
      />
    </button>
  );
}
