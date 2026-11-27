"use client";

import { type PointerEvent as ReactPointerEvent, useEffect, useLayoutEffect, useRef, useState } from "react";

import styles from "./Hero.module.css";

const PHONE_RECORDINGS = ["real-estate", "shop-sales", "bike-rental"];
const PROFILE_COPY = "I'm a Senior Product Designer with 6+ years of experience crafting complex digital products.";

function ProfileCard({ placement }: { placement: "peek" | "overlay" }) {
  const isPeek = placement === "peek";
  return (
    <div className={styles.card} data-placement={placement}>
      <div className={styles.profileHeader}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.avatar} src="/images/hero/avatar-tarun-2x.webp" alt="" width={40} height={40} onError={(event) => { event.currentTarget.style.visibility = "hidden"; }} />
        <span><strong>Tarun Dewangan</strong> <span className={styles.handle}>@dexipex</span></span>
      </div>
      {!isPeek && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={styles.photo} src="/images/hero/photo-card.webp" alt="Tarun Dewangan" width={290} height={244} loading="eager" decoding="async" fetchPriority="low" onError={(event) => { event.currentTarget.style.visibility = "hidden"; }} />
      )}
      <div className={styles.profileCopy}>
        <p className={isPeek ? undefined : "hidden lg:block"}>{PROFILE_COPY}</p>
        {!isPeek && (
          <p className="lg:hidden">
            I’m a <span className="text-[#3058d8]">senior product designer</span> having more
            then 6 years of experience designing digital products
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

function PhonePreview({ hero }: { hero: React.RefObject<HTMLElement | null> }) {
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const [slot, setSlot] = useState(0);
  const [playbackEnabled, setPlaybackEnabled] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 1024px)");
    let timers: number[] = [];

    function syncPlayback() {
      setPlaybackEnabled(desktop.matches && !motion.matches);
    }

    function syncMotion() {
      syncPlayback();
      timers.forEach(window.clearTimeout);
      setSlot(0);
      timers = motion.matches ? [] : PHONE_RECORDINGS.slice(1).map((_, index) =>
        window.setTimeout(() => setSlot(index + 1), (index + 1) * 20_000)
      );
    }

    syncMotion();
    motion.addEventListener("change", syncMotion);
    desktop.addEventListener("change", syncPlayback);
    return () => {
      motion.removeEventListener("change", syncMotion);
      desktop.removeEventListener("change", syncPlayback);
      timers.forEach(window.clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (!hero.current || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(hero.current);
    return () => observer.disconnect();
  }, [hero]);

  useEffect(() => {
    const video = videos.current[slot];
    if (playbackEnabled && video) video.currentTime = 0;
  }, [slot, playbackEnabled]);

  useEffect(() => {
    const video = videos.current[slot];
    if (!playbackEnabled || !inView || !video) return;

    void video.play().catch(() => {});
    return () => video.pause();
  }, [slot, playbackEnabled, inView]);

  return (
    <div className={styles.phone} aria-hidden="true">
      {PHONE_RECORDINGS.map((name, index) => (
        <video
          key={`${name}-${playbackEnabled}`}
          ref={(video) => { videos.current[index] = video; }}
          hidden={index !== slot}
          muted
          playsInline
          loop
          preload="metadata"
          poster={`/images/mobile/${name}.webp`}
          aria-hidden="true"
        >
          {playbackEnabled && (
            <>
              <source src={`/images/mobile/${name}.webm`} type="video/webm" />
              <source src={`/images/mobile/${name}.mp4`} type="video/mp4" />
            </>
          )}
        </video>
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
  const hero = useRef<HTMLElement>(null);
  const hoverTimeout = useRef<number>(undefined);
  const trigger = useRef<HTMLButtonElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const open = !dismissed && (hovered || focused || pinned);

  function keepCardHovered() {
    window.clearTimeout(hoverTimeout.current);
    setHovered(true);
  }

  function leaveCard(event: ReactPointerEvent) {
    if (event.pointerType === "touch") return;
    const target = event.relatedTarget;
    if (target instanceof Node && (card.current?.contains(target) || trigger.current?.contains(target))) return;

    window.clearTimeout(hoverTimeout.current);
    // Give the pointer time to cross the gap between the tile and card.
    hoverTimeout.current = window.setTimeout(() => setHovered(false), 80);
  }

  useEffect(() => () => window.clearTimeout(hoverTimeout.current), []);

  useLayoutEffect(() => {
    if (!hero.current || !trigger.current || !card.current) return;
    const section = hero.current;
    const tile = trigger.current;
    const overlay = card.current;
    const desktop = window.matchMedia("(min-width: 1024px)");

    function positionCard() {
      const bounds = section.getBoundingClientRect();
      const anchor = tile.getBoundingClientRect();
      const isDesktop = desktop.matches;
      const inset = isDesktop ? 24 : 16;
      const tileLeft = anchor.left - bounds.left;
      const tileTop = anchor.top - bounds.top;
      const preferredLeft = tileLeft + 7 + 94;
      const left = Math.max(inset, Math.min(preferredLeft, bounds.width - overlay.offsetWidth - inset));
      let top = Math.max(inset, tileTop + (isDesktop ? 5 : -8.5) - 201);

      // Keep the tile tappable when the viewport forces the card over it.
      if (!isDesktop && left < tileLeft + anchor.width && left + overlay.offsetWidth > tileLeft) {
        const above = tileTop - overlay.offsetHeight;
        top = above >= -8 ? Math.max(0, above) : tileTop + anchor.height + 8;
      }

      overlay.style.left = `${left}px`;
      overlay.style.top = `${top}px`;
    }

    positionCard();
    const observer = new ResizeObserver(positionCard);
    observer.observe(section);
    window.addEventListener("resize", positionCard);
    document.fonts.addEventListener("loadingdone", positionCard);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", positionCard);
      document.fonts.removeEventListener("loadingdone", positionCard);
    };
  }, []);

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
    <section ref={hero} id="about" className={styles.hero}>
      <div className={styles.content}>
        <picture className={styles.eyebrow}>
          <source media="(max-width: 1023px)" srcSet="/images/hero/eyebrow-mobile.svg" width={267} height={18} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero/eyebrow-desktop.svg" alt="Complex UI Into" width={381} height={27} />
        </picture>
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
                  keepCardHovered();
                }
              }}
              onPointerLeave={leaveCard}
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

      <div
        ref={card}
        id="hero-profile"
        className={styles.overlay}
        data-open={open}
        aria-hidden={!open || undefined}
        inert={!open}
        onPointerEnter={(event) => {
          if (event.pointerType !== "touch") keepCardHovered();
        }}
        onPointerLeave={leaveCard}
      >
        <ProfileCard placement="overlay" />
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
        <div className={styles.barCap}><PhonePreview hero={hero} /></div>
      </div>
    </section>
  );
}
