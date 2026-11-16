import type { CaseStudy } from "@/types";

type HeroSpec = {
  gradient: string;
  wordmark?: string;
  markClass: string;
  fit: "contain" | "fill";
  /** Desktop media box as percentages of the 1440×493 banner. */
  box: string;
  motion: boolean;
};

const HEROES: Record<string, HeroSpec> = {
  "telescope-overview": {
    gradient: "linear-gradient(#ea6828, #fdad86)",
    wordmark: "telescope",
    markClass: "text-[9rem] font-bold tracking-tight text-white/10",
    fit: "fill",
    box: "left-[18%] top-[12%] h-[78%] w-[64%]",
    motion: true,
  },
  "media-planner": {
    gradient: "linear-gradient(#9244b9, #e2a8ff)",
    wordmark: "MEDIA PLANNER",
    markClass: "text-[7.5rem] font-bold tracking-tight text-white/10",
    fit: "fill",
    box: "left-[16%] top-[10%] h-[80%] w-[68%]",
    motion: true,
  },
  "opticks-ai-editor": {
    gradient: "linear-gradient(#b40001, #ff6061)",
    wordmark: "OPTICKS AI",
    markClass: "text-[8rem] font-bold tracking-tight text-white/10",
    fit: "fill",
    box: "left-[14%] top-[8%] h-[84%] w-[72%]",
    motion: true,
  },
  "raipur-homes": {
    gradient: "linear-gradient(#3f5cff, #bcc6ff)",
    wordmark: "RAIPUR HOMES",
    markClass: "text-[7rem] font-bold tracking-tight text-white/10",
    fit: "contain",
    box: "left-[20%] top-[-8%] h-[190%] w-[57%]",
    motion: false,
  },
  "intelligence-and-recommendation": {
    gradient: "linear-gradient(#666d93, #b9c2f5)",
    wordmark: "INTELLIGENCE",
    markClass: "text-[8rem] font-bold tracking-tight text-white/10",
    fit: "fill",
    box: "left-[16%] top-[8%] h-[84%] w-[68%]",
    motion: true,
  },
  "emotion-driven-design": {
    gradient: "linear-gradient(#a4c8ff, #fff8ed)",
    wordmark: "EMOTIONAL",
    markClass: "text-[8.5rem] font-bold tracking-tight text-white/20",
    fit: "contain",
    box: "left-[18%] top-[-10%] h-[191%] w-[60%]",
    motion: false,
  },
  "design-system-and-iconography": {
    gradient: "linear-gradient(#f7f8fc, #eef1f8)",
    markClass: "",
    fit: "contain",
    box: "inset-x-[8%] top-[6%] h-[88%]",
    motion: false,
  },
};

export function CaseStudyBanner({ study }: { study: CaseStudy }) {
  const spec = HEROES[study.slug] ?? HEROES["telescope-overview"];
  const poster = `/images/case-studies/banner-${study.slug}.webp`;
  const fitClass = spec.fit === "contain" ? "object-contain object-top" : "object-contain object-center";

  return (
    <div
      className={`relative h-[280px] sm:h-[380px] lg:h-[493px] ${spec.fit === "contain" ? "overflow-visible" : "overflow-hidden"}`}
      style={{ background: spec.gradient }}
    >
      {spec.wordmark && (
        <p
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 top-[18%] text-center leading-none whitespace-nowrap ${spec.markClass}`}
        >
          {spec.wordmark}
        </p>
      )}
      {spec.motion ? (
        <video
          className={`absolute ${spec.box} ${fitClass}`}
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          aria-label={`${study.title} banner`}
        >
          <source src={`/images/case-studies/banner-${study.slug}.webm`} type="video/webm" />
          <source src={`/images/case-studies/banner-${study.slug}.mp4`} type="video/mp4" />
        </video>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt="" className={`absolute ${spec.box} ${fitClass}`} />
      )}
    </div>
  );
}
