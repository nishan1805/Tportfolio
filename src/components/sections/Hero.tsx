"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./Hero.module.css";

const PHONE_STILLS = ["real-estate", "shop-sales", "bike-rental"];
const PROFILE_COPY = "I'm a Senior Product Designer with 6+ years of experience crafting complex digital products.";

function ProfileCard({ placement }: { placement: "peek" | "overlay" }) {
  const isPeek = placement === "peek";
  return (
    <div className={styles.card} data-placement={placement}>
      <div className={styles.profileHeader}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.avatar} src="/images/hero/avatar-tarun-2x.webp" alt="" width={40} height={40} onError={(event) => { event.currentTarget.style.visibility = "hidden"; }} />
        <span><strong>Tarun Dewangan</strong> <span className="text-slate-600">@dexipex</span></span>
      </div>
      {!isPeek && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={styles.photo} src="/images/hero/photo-card.webp" alt="Tarun Dewangan" width={290} height={244} onError={(event) => { event.currentTarget.style.visibility = "hidden"; }} />
      )}
      <div className={styles.profileCopy}>
        <p className={isPeek ? undefined : "hidden lg:block"}>{PROFILE_COPY}</p>
        {!isPeek && (
          <p className="lg:hidden">
            I’m a <span className="text-[#3058d8]">senior product designer</span> having more
            then 6 years of experience designing digital products.
          </p>
        )}
      </div>
      <svg className={styles.profileIcons} width="100%" height="22" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round">
          <path d="M3 7c0-4 5-5 7-2 2-3 7-2 7 2 0 3-4 6-7 8-3-2-7-5-7-8Z" />
          <path d="M35 13a6 6 0 1 1 2-3l1 5Z" />
          <path d="m47 4 12 1-7 10-1-6Zm4 5 8-4" />
          <svg x="100%" width="20" overflow="visible">
            <path d="M-14 3h9v12l-4.5-4-4.5 4Z" />
          </svg>
        </g>
      </svg>
    </div>
  );
}

function PhonePreview() {
  const [still, setStill] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timers: number[] = [];

    function sync() {
      timers.forEach(window.clearTimeout);
      setStill(0);
      timers = motion.matches ? [] : PHONE_STILLS.slice(1).map((_, index) =>
        window.setTimeout(() => setStill(index + 1), (index + 1) * 20_000)
      );
    }

    sync();
    motion.addEventListener("change", sync);
    return () => {
      motion.removeEventListener("change", sync);
      timers.forEach(window.clearTimeout);
    };
  }, []);

  return (
    <div className={styles.phone} aria-hidden="true">
      {PHONE_STILLS.map((name, index) => (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img key={name} src={`/images/mobile/${name}.webp`} alt="" hidden={index !== still} />
      ))}
    </div>
  );
}

function BarItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className={styles.barItem}>
      <svg viewBox="0 0 18 18" width="18" height="18" fill="currentColor" aria-hidden="true">
        <circle cx="3" cy="3" r="2.4" /><circle cx="9" cy="3" r="2.4" />
        <circle cx="15" cy="3" r="2.4" /><circle cx="15" cy="9" r="2.4" /><circle cx="15" cy="15" r="2.4" />
      </svg>
      <div>
        <dt className="text-[12px] leading-[14px]">{label}</dt>
        <dd className="text-[16px] leading-[18px]">{children}</dd>
      </div>
    </div>
  );
}

export function Hero() {
  const trigger = useRef<HTMLButtonElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const open = !dismissed && (hovered || focused || pinned);

  useEffect(() => {
    if (!open) return;

    function dismiss() {
      setDismissed(true);
      setPinned(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") dismiss();
    }

    function onPointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !trigger.current?.contains(event.target) && !card.current?.contains(event.target)) {
        dismiss();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <section id="about" className={`${styles.hero} font-bitcount`}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Complex UI Into</p>
        <h1 className={styles.headline}>
          <span className={styles.word}>
            <span className="hidden lg:inline">Unforgettabl</span>
            <span className="lg:hidden"><span className={styles.mobileFirstLine}>Unforget-</span>tabl</span>
            <button
              ref={trigger}
              type="button"
              className={styles.tile}
              aria-expanded={open}
              aria-controls="hero-profile"
              aria-label="e, show profile"
              onPointerEnter={(event) => {
                if (event.pointerType !== "touch") {
                  setDismissed(false);
                  setHovered(true);
                }
              }}
              onPointerLeave={() => setHovered(false)}
              onFocus={(event) => {
                if (event.currentTarget.matches(":focus-visible")) {
                  setDismissed(false);
                  setFocused(true);
                }
              }}
              onBlur={() => {
                setFocused(false);
                setPinned(false);
              }}
              onClick={() => {
                setDismissed(pinned);
                setPinned(!pinned);
              }}
            >
              e
            </button>
          </span>
          <span className={styles.interface}>Interface</span>
        </h1>
        <p className={styles.hint}>Hover on <strong>e</strong> to know me more</p>
      </div>

      <div className={styles.peek}><ProfileCard placement="peek" /></div>

      <div ref={card} id="hero-profile" className={styles.overlay} hidden={!open}>
        {open && <ProfileCard placement="overlay" />}
      </div>

      <div className={styles.bar}>
        <dl className={styles.barMain}>
          <div className="lg:hidden">
            <BarItem label="Industry">Adtech, Direct Consumer</BarItem>
          </div>
          <BarItem label="Experience">
            <span className={styles.experienceValues}>
              <span>6 Years</span><span>•</span>
              <span>B2B <small>(product)</small></span><span>•</span>
              <span>B2C <small>(Service)</small></span>
            </span>
          </BarItem>
          <div className="hidden lg:block">
            <BarItem label="Additional Expertise">Design System</BarItem>
          </div>
        </dl>
        <div className={styles.barCap}><PhonePreview /></div>
      </div>
    </section>
  );
}
