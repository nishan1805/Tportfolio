import type { CaseStudy } from "@/types";

type Rect = { x: number; y: number; w: number; h: number };

type HeroSpec = {
  gradient: string;
  /** Full-width wordmark exported from Figma, per breakpoint (x/y/w/h inside the band). */
  wordmark?: { desktop: Rect; mobile: Rect };
  /** Video or still that sits on top of the wordmark. */
  media?: { desktop: Rect; mobile: Rect; motion: boolean };
  /** 3D phone render clipped by a frame (Raipur Homes, Emotion Driven Design). */
  phone?: { desktop: { frame: Rect; image: Rect }; mobile: { frame: Rect; image: Rect } };
};

/** Bands are 1440x493 on desktop and 402x422 on mobile in Figma. Coordinates are copied from there. */
const HEROES: Record<string, HeroSpec> = {
  "telescope-overview": {
    gradient: "linear-gradient(#ea6828, #fdad86)",
    wordmark: {
      desktop: { x: 0, y: -26.29, w: 1605.84, h: 236.63 },
      mobile: { x: -13, y: -6, w: 433, h: 64 },
    },
    media: {
      desktop: { x: 263, y: 57, w: 914, h: 492 },
      mobile: { x: -141, y: 73, w: 512, h: 276 },
      motion: true,
    },
  },
  "media-planner": {
    gradient: "linear-gradient(#9244b9, #e2a8ff)",
    wordmark: {
      desktop: { x: -1, y: -1, w: 1455, h: 118 },
      mobile: { x: -1, y: -1, w: 546, h: 91 },
    },
    media: {
      desktop: { x: 255, y: 55, w: 930, h: 501 },
      mobile: { x: -63, y: 69, w: 527, h: 284 },
      motion: true,
    },
  },
  "opticks-ai-editor": {
    gradient: "linear-gradient(#b40001, #ff6061)",
    wordmark: {
      desktop: { x: -29, y: -4, w: 1481, h: 170 },
      mobile: { x: -29, y: -4, w: 577, h: 87 },
    },
    media: {
      desktop: { x: 257, y: 58, w: 926, h: 498 },
      mobile: { x: 30, y: 63, w: 552, h: 297 },
      motion: true,
    },
  },
  "raipur-homes": {
    gradient: "linear-gradient(#3f5cff, #bcc6ff)",
    wordmark: {
      desktop: { x: -6, y: -6, w: 1450, h: 125 },
      mobile: { x: -36, y: -6, w: 974.4, h: 84 },
    },
    phone: {
      desktop: { frame: { x: 512, y: -51, w: 371, h: 544 }, image: { x: -225, y: -113, w: 826, h: 901 } },
      mobile: { frame: { x: 68.57, y: 26, w: 270.07, h: 396 }, image: { x: -163.79, y: -82.26, w: 601.28, h: 655.88 } },
    },
  },
  "emotion-driven-design": {
    gradient: "linear-gradient(#a4c8ff, #fff8ed)",
    wordmark: {
      desktop: { x: 0, y: -5, w: 1440, h: 168 },
      mobile: { x: 0, y: -5, w: 507, h: 59 },
    },
    phone: {
      desktop: { frame: { x: 484, y: -59, w: 425, h: 552 }, image: { x: -218, y: -103, w: 862, h: 941 } },
      mobile: { frame: { x: 68.57, y: 26, w: 270.07, h: 396 }, image: { x: -156, y: -74, w: 618, h: 675 } },
    },
  },
  "design-system-and-iconography": {
    gradient: "linear-gradient(#a0a8ff, #eef1f8)",
    media: {
      desktop: { x: 256, y: 123, w: 927, h: 370 },
      mobile: { x: 35, y: 48, w: 569, h: 326 },
      motion: false,
    },
  },
};

/** The Figma frame does not clip its render, so the image is placed by frame + image offset. */
const place = ({ frame, image }: { frame: Rect; image: Rect }): Rect => ({
  x: frame.x + image.x,
  y: frame.y + image.y,
  w: image.w,
  h: image.h,
});

const px = (value: number) => `${Math.round(value * 100) / 100}px`;
const box = (rect: Rect) => `left:${px(rect.x)};top:${px(rect.y)};width:${px(rect.w)};height:${px(rect.h)};`;

/**
 * The wordmark scales with the screen width so it always spans the full band.
 * `.hero-wm` has the Figma band ratio, so percentage offsets match the design at any width.
 */
function wordmarkCss(slug: string, wordmark: { desktop: Rect; mobile: Rect }) {
  const pct = (rect: Rect, bandW: number, bandH: number) =>
    `left:${(rect.x / bandW) * 100}%;top:${(rect.y / bandH) * 100}%;width:${(rect.w / bandW) * 100}%;height:${(rect.h / bandH) * 100}%;`;
  return (
    `.${slug}-hero .hero-wm{position:absolute;left:0;top:0;width:100%;aspect-ratio:402/422;}` +
    `.${slug}-hero .hero-wordmark{position:absolute;max-width:none;${pct(wordmark.mobile, 402, 422)}}` +
    `@media (min-width:1024px){.${slug}-hero .hero-wm{aspect-ratio:1440/493;}` +
    `.${slug}-hero .hero-wordmark{${pct(wordmark.desktop, 1440, 493)}}}`
  );
}

/** Mobile rules first, desktop rules under `lg`, so each element keeps one DOM node. */
function bannerCss(slug: string, spec: HeroSpec) {
  const rule = (selector: string, mobile: Rect, desktop: Rect) =>
    `.${slug}-hero ${selector}{position:absolute;max-width:none;${box(mobile)}}` +
    `@media (min-width:1024px){.${slug}-hero ${selector}{${box(desktop)}}}`;

  return [
    spec.wordmark && wordmarkCss(slug, spec.wordmark),
    spec.media && rule(".hero-media", spec.media.mobile, spec.media.desktop),
    spec.phone && rule(".hero-phone", place(spec.phone.mobile), place(spec.phone.desktop)),
  ]
    .filter(Boolean)
    .join("");
}

const INTEL_BANNER = "/images/case-studies/banner-intelligence-and-recommendation";

/** Desktop 1440×493 and mobile 402×422 hero from Figma TV-13 / iPhone 17. */
function IntelligenceBanner({ study }: { study: CaseStudy }) {
  return (
    <div
      className="relative h-[422px] overflow-hidden lg:h-[493px]"
      style={{ background: "linear-gradient(#666d93, #b9c2f5)" }}
    >
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        {/* Figma wordmarks sit on the top edge of the band and bleed past the frame. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/case-studies/intelligence-and-recommendation/wordmark-mobile.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-[-4px] left-[-7px] lg:hidden"
          style={{ width: 710, height: 70, maxWidth: "none" }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/case-studies/intelligence-and-recommendation/wordmark-desktop.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-[-4px] left-[-7px] hidden lg:block"
          style={{ width: 1447, height: 143, maxWidth: "none" }}
        />
        <div className="absolute top-1/2 left-[calc(50%+67px)] h-[232px] w-[478px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[8px] border-4 border-[#99e0ed] lg:top-[45px] lg:left-1/2 lg:h-[462px] lg:w-[952px] lg:translate-y-0">
          <video
            className="absolute inset-0 size-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={`${INTEL_BANNER}.webp`}
            aria-label={`${study.title} banner`}
          >
            <source src={`${INTEL_BANNER}.webm`} type="video/webm" />
            <source src={`${INTEL_BANNER}.mp4`} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export function CaseStudyBanner({ study }: { study: CaseStudy }) {
  if (study.slug === "intelligence-and-recommendation") {
    return <IntelligenceBanner study={study} />;
  }

  const spec = HEROES[study.slug] ?? HEROES["telescope-overview"];
  const poster = `/images/case-studies/banner-${study.slug}.webp`;
  const wordmarkBase = `/images/case-studies/${study.slug}`;
  const mediaClass = "hero-media object-cover object-center";

  const canvas = "absolute top-0 left-1/2 h-full w-[402px] -translate-x-1/2 lg:w-[1440px]";
  const designSystem = study.slug === "design-system-and-iconography";

  return (
    <>
      {designSystem && (
        // Mobile frame 301159:19025, 402×422, exported from Figma. Desktop uses the shared hero below.
        <div className="relative w-full overflow-hidden lg:hidden" style={{ aspectRatio: "402 / 422" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/case-studies/design-system-and-iconography/cover-mobile.png"
            alt=""
            className="absolute inset-0 size-full object-cover"
            style={{ maxWidth: "none" }}
          />
        </div>
      )}
    <div
      className={`${study.slug}-hero relative h-[422px] lg:h-[493px] ${designSystem ? "hidden lg:block" : ""}`}
      style={{ background: spec.gradient }}
    >
      <style>{bannerCss(study.slug, spec)}</style>
      {/* The wordmark and media are clipped to the band. The Figma canvas is 402px (mobile) or 1440px (desktop) wide, centred. */}
      <div className="absolute inset-0 overflow-hidden">
        {spec.wordmark && (
          <div className="hero-wm pointer-events-none" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${wordmarkBase}/wordmark-mobile.svg`} alt="" className="hero-wordmark lg:hidden" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${wordmarkBase}/wordmark-desktop.svg`} alt="" className="hero-wordmark hidden lg:block" />
          </div>
        )}
        <div className={canvas}>
          {spec.media &&
            (spec.media.motion ? (
              <video className={mediaClass} autoPlay muted loop playsInline poster={poster} aria-label={`${study.title} banner`}>
                <source src={`/images/case-studies/banner-${study.slug}.webm`} type="video/webm" />
                <source src={`/images/case-studies/banner-${study.slug}.mp4`} type="video/mp4" />
              </video>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={poster} alt="" className={mediaClass} />
            ))}
        </div>
      </div>
      {/* In Figma the phone render starts above the band (it is not clipped there) and the next section covers its bottom. */}
      {spec.phone && (
        <div className={`${canvas} pointer-events-none`} style={{ clipPath: "inset(-400px -100px 0 -100px)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster} alt="" className="hero-phone object-contain" />
        </div>
      )}
    </div>
    </>
  );
}
