import { Container } from "@/components/ui/Container";
import { careerStories, currentRole } from "@/data/career";
import type { CareerStory } from "@/types";

const CARD_W = 426.6667;
const CARD_H = 233.6829;
const BAND_W = 1280;
const BAND_H = 233.6829;

type Layer = {
  src: string;
  alt?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  fit?: "contain" | "cover" | "fill";
  opacity?: number;
};

function LayerImg({ src, alt = "", x, y, w, h, boxW, boxH, fit = "fill", opacity = 1, className = "" }: Layer & { boxW: number; boxH: number; className?: string }) {
  return (
    // Decorative illustration; card copy is in the text boxes.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      aria-hidden={!alt}
      className={`pointer-events-none absolute max-w-none ${className}`}
      style={{
        left: `${(x / boxW) * 100}%`,
        top: `${(y / boxH) * 100}%`,
        width: `${(w / boxW) * 100}%`,
        height: `${(h / boxH) * 100}%`,
        objectFit: fit,
        objectPosition: "top left",
        opacity,
      }}
    />
  );
}

function Box({
  x,
  y,
  w,
  h,
  boxW,
  boxH,
  z = 1,
  className,
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  boxW: number;
  boxH: number;
  z?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute ${className ?? ""}`}
      style={{
        zIndex: z,
        left: `${(x / boxW) * 100}%`,
        top: `${(y / boxH) * 100}%`,
        width: `${(w / boxW) * 100}%`,
        height: `${(h / boxH) * 100}%`,
      }}
    >
      {children}
    </div>
  );
}

function EmphasisText({ text, emphasis }: { text: string; emphasis?: string }) {
  if (!emphasis || !text.includes(emphasis)) return <>{text}</>;
  const [before, after] = text.split(emphasis);
  return (
    <>
      {before}
      <span className="font-medium text-[#5233dd]">{emphasis}</span>
      {after}
    </>
  );
}

const STORY_LAYOUT: Record<
  string,
  {
    title: { x: number; y: number; w: number; h: number };
    logo?: { src: string; x: number; y: number; w: number; h: number };
    bottom?: { x: number; y: number; w: number; h: number };
    layers: Layer[];
    titleColor: string;
    subtitleColor: string;
  }
> = {
  childhood: {
    title: { x: 15.34, y: 10.19, w: 394.12, h: 72.93 },
    layers: [
      { src: "/images/career/childhood-desk.webp", x: 47.77, y: 115.1, w: 143.5, h: 119 },
      { src: "/images/career/childhood-supplies.webp", x: 178.69, y: 150.47, w: 193.61, h: 83.5 },
    ],
    titleColor: "text-black",
    subtitleColor: "text-[#3e8083]",
  },
  engineering: {
    title: { x: 13.88, y: 11.71, w: 394.12, h: 55.93 },
    layers: [
      { src: "/images/summary/institute.webp", x: -45.08, y: 129.92, w: 516.7, h: 187.69, fit: "cover", opacity: 0.3 },
      { src: "/images/career/engineering-back.webp", x: 161.79, y: 81.09, w: 101.132, h: 152.59, fit: "fill" },
    ],
    titleColor: "text-[#193334]",
    subtitleColor: "text-[#254d4f]",
  },
  "digital-creativity": {
    title: { x: 16.21, y: 20.43, w: 394.12, h: 55.93 },
    bottom: { x: 16.21, y: 181.37, w: 394.12, h: 43.95 },
    layers: [{ src: "/images/career/digital-objects.webp", x: 108.79, y: 77.6, w: 318, h: 156.5 }],
    titleColor: "text-[#193334]",
    subtitleColor: "text-[#3e8083]",
  },
  racketszone: {
    title: { x: 16.21, y: 10.84, w: 393.25, h: 55.93 },
    logo: { src: "/images/summary/logo-a.png", x: 16.21 + 333.96, y: 10.84 + 6.98, w: 45.34, h: 32.26 },
    bottom: { x: 13.59, y: 154.06, w: 393.25, h: 72.93 },
    layers: [
      { src: "/images/career/rackets-mid.webp", x: 0, y: 91.35, w: 159, h: 142.35 },
      { src: "/images/career/rackets-laptop.webp", x: 42.91, y: 74.99, w: 95.65, h: 67.52 },
      { src: "/images/career/rackets-character.webp", x: 254.25, y: 48.83, w: 154.5, h: 185 },
    ],
    titleColor: "text-[#193334]",
    subtitleColor: "text-[#254d4f]",
  },
  bvc: {
    title: { x: 17.08, y: 11.33, w: 394.12, h: 55.93 },
    logo: { src: "/images/summary/logo-b.png", x: 17.08 + 326.03, y: 11.33 + 6.98, w: 54.14, h: 33.09 },
    bottom: { x: 17.08, y: 153.46, w: 394.12, h: 72.93 },
    layers: [{ src: "/images/career/bvc-character.webp", x: 119.97, y: 55.8, w: 186.5, h: 107.5 }],
    titleColor: "text-[#193334]",
    subtitleColor: "text-[#254d4f]",
  },
  geekyants: {
    title: { x: 10.46, y: 9.97, w: 394.99, h: 55.93 },
    logo: { src: "/images/summary/logo-c.png", x: 10.46 + 340.06, y: 9.97 + 6.98, w: 40.98, h: 40.98 },
    bottom: { x: 16.21, y: 153.19, w: 394.99, h: 72.93 },
    layers: [{ src: "/images/career/geekyants-group.webp", x: 82.84, y: 48.83, w: 266, h: 185 }],
    titleColor: "text-[#193334]",
    subtitleColor: "text-[#254d4f]",
  },
};

type SkillTile = {
  title: string;
  text: string;
  x: number;
  y: number;
  w: number;
  h: number;
  icon?: { src: string; x: number; y: number; w: number; h: number };
  research?: { x: number; y: number; w: number; h: number };
};

/** Coordinates are design pixels inside the 1280 × 233.68 band. Icon boxes are inside each card. */
const SAAS_SKILLS: SkillTile[] = [
  {
    title: "Design System",
    text: "Built and maintaining it to scale",
    x: 25.207,
    y: 95.153,
    w: 357.5,
    h: 53.189,
    icon: { src: "/images/career/skill-design-system.webp", x: 245.89, y: 9.16, w: 97.66, h: 34.88 },
  },
  {
    title: "Quick Prototyping",
    text: "Interactive prototype to test it out",
    x: 394.042,
    y: 95.153,
    w: 357.5,
    h: 53.189,
    icon: { src: "/images/summary/logo-e.png", x: 317.39, y: 6.98, w: 26.16, h: 39.24 },
  },
  {
    title: "Audit, analysis Benchmarking",
    text: "Just to make sure we are always up there",
    x: 768.11,
    y: 96.897,
    w: 357.5,
    h: 57.113,
    icon: { src: "/images/career/skill-audit.webp", x: 276.41, y: 4.14, w: 67.14, h: 48.83 },
  },
  {
    title: "Interviews. Testing",
    text: "Clarity gives us basics to innovate",
    x: 25.207,
    y: 154.446,
    w: 357.678,
    h: 61.037,
    icon: { src: "/images/career/skill-interviews.webp", x: 257.09, y: 13.95, w: 86.63, h: 74.09 },
  },
  {
    title: "Research and Conceptualisation",
    text: "Research and concept making before design",
    x: 394.22,
    y: 154.446,
    w: 357.322,
    h: 61.037,
    research: { x: 296.29, y: 6.98, w: 47.09, h: 47.09 },
  },
  {
    title: "Leading the conversations",
    text: "From sanity to overlooking deliveries",
    x: 768.11,
    y: 160.113,
    w: 358.372,
    h: 57.113,
  },
];

function StoryCard({ story }: { story: CareerStory }) {
  const layout = STORY_LAYOUT[story.id];
  return (
    <article className={`relative w-full self-start overflow-hidden ${story.background}`} style={{ aspectRatio: `${CARD_W} / ${CARD_H}` }}>
      <Box {...layout.title} boxW={CARD_W} boxH={CARD_H} z={1} className="flex items-center">
        <div className="relative flex h-full w-full items-start rounded-[6.9756px] bg-white/40 px-[14px] py-[7px]">
          <div className="min-w-0 flex-1">
            <h3 className={`text-[13.95px] font-bold leading-[1.208] ${layout.titleColor}`}>{story.title}</h3>
            {story.subtitle && (
              <p className={`mt-[7px] text-[12.207px] font-medium leading-[17.4px] ${layout.subtitleColor}`}>
                <EmphasisText text={story.subtitle} emphasis={story.emphasis} />
              </p>
            )}
          </div>
        </div>
      </Box>
      {layout.layers.map((layer) => (
        <LayerImg key={layer.src} {...layer} boxW={CARD_W} boxH={CARD_H} className="z-[2]" />
      ))}
      {layout.logo && (
        <LayerImg
          src={layout.logo.src}
          alt=""
          x={layout.logo.x}
          y={layout.logo.y}
          w={layout.logo.w}
          h={layout.logo.h}
          boxW={CARD_W}
          boxH={CARD_H}
          fit="fill"
          className="z-[3]"
        />
      )}

      {layout.bottom && (story.bottomText || story.bottomTitle) && (
        <Box {...layout.bottom} boxW={CARD_W} boxH={CARD_H} z={4} className="flex items-center">
          <div className="h-full w-full rounded-[6.9756px] bg-white px-[14px] py-[7px]">
            {story.bottomTitle && <h4 className="text-[13.95px] font-bold leading-[1.208] text-[#193334]">{story.bottomTitle}</h4>}
            <p
              className={`text-[12.207px] font-medium ${story.bottomTitle ? "mt-[7px]" : ""} ${
                story.id === "digital-creativity" ? "leading-[1.208] text-[#193334]" : "leading-[17.4px] text-[#254d4f]"
              }`}
            >
              {story.bottomText}
            </p>
          </div>
        </Box>
      )}
    </article>
  );
}

function ResearchIcon() {
  return (
    <div className="grid size-full grid-cols-2 grid-rows-2 gap-[7%]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/summary/logo-f.png" alt="" className="size-full max-w-none object-contain" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/summary/logo-g.webp" alt="" className="size-full max-w-none object-contain" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/summary/logo-i.png" alt="" className="size-full max-w-none object-contain" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/summary/logo-h.webp" alt="" className="size-full max-w-none object-contain" />
    </div>
  );
}

function CurrentRoleBand() {
  return (
    <div className="relative mt-[7.8px] overflow-hidden bg-[#eaeefb] ring-1 ring-inset ring-[#d8e6e6]" style={{ aspectRatio: `${BAND_W} / ${BAND_H}` }}>
      <Box x={13} y={1} w={1254} h={32} boxW={BAND_W} boxH={BAND_H} className="rounded-[6.9756px] bg-white/40">
        <h3 className="absolute top-1/2 -translate-y-1/2 text-[13.95px] font-bold leading-[1.208] text-[#193334]" style={{ left: `${(13.951 / 1254) * 100}%` }}>
          {currentRole.company}
        </h3>
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-[Inter,system-ui,sans-serif] text-[12.207px] font-normal leading-[17.4px] text-[#254d4f]">
          {currentRole.period}
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/summary/logo-d.png"
          alt="affle"
          className="absolute top-1/2 max-w-none -translate-y-1/2 object-contain"
          style={{ left: `${(1201.974 / 1254) * 100}%`, width: `${(38.075 / 1254) * 100}%`, height: `${(17.573 / 31.951) * 100}%` }}
        />
      </Box>

      <Box
        x={13}
        y={44}
        w={1254}
        h={183}
        boxW={BAND_W}
        boxH={BAND_H}
        className="overflow-hidden rounded-t-[10.46px] bg-[linear-gradient(180deg,rgba(207,193,255,0.6)_0%,rgba(255,255,255,0.1)_100%)]"
      >
        <p className="absolute text-[12.207px] font-semibold leading-[1.208] text-[#193334]" style={{ left: `${(9.592 / 1254) * 100}%`, top: `${(8.721 / 183) * 100}%` }}>
          {currentRole.summary}
        </p>
        <p className="absolute text-[12.207px] font-semibold leading-[1.208] text-[#193334]" style={{ left: `${(1074.244 / 1254) * 100}%`, top: `${(8.721 / 183) * 100}%` }}>
          {currentRole.jobTitle}
        </p>
      </Box>

      {SAAS_SKILLS.map((skill) => (
        <Box
          key={skill.title}
          x={skill.x}
          y={skill.y}
          w={skill.w}
          h={skill.h}
          boxW={BAND_W}
          boxH={BAND_H}
          className="overflow-visible rounded-[10.46px] bg-[linear-gradient(180deg,#ffffff_31.25%,rgba(255,255,255,0)_100%)]"
        >
          <div
            className="absolute"
            style={{
              left: `${(13.95 / skill.w) * 100}%`,
              top: `${(8.2 / skill.h) * 100}%`,
              width: `${(((skill.icon?.x ?? skill.research?.x ?? skill.w) - 22) / skill.w) * 100}%`,
            }}
          >
            <h4 className="text-[12.207px] font-bold leading-[14.8px] text-black">{skill.title}</h4>
            <p className="text-[10.46px] font-medium leading-[14.8px] text-[#3e8083]">{skill.text}</p>
          </div>
          {skill.icon && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={skill.icon.src}
              alt=""
              className="absolute max-w-none object-contain"
              style={{
                left: `${(skill.icon.x / skill.w) * 100}%`,
                top: `${(skill.icon.y / skill.h) * 100}%`,
                width: `${(skill.icon.w / skill.w) * 100}%`,
                height: `${(skill.icon.h / skill.h) * 100}%`,
              }}
            />
          )}
          {skill.research && (
            <div
              className="absolute"
              style={{
                left: `${(skill.research.x / skill.w) * 100}%`,
                top: `${(skill.research.y / skill.h) * 100}%`,
                width: `${(skill.research.w / skill.w) * 100}%`,
                height: `${(skill.research.h / skill.h) * 100}%`,
              }}
            >
              <ResearchIcon />
            </div>
          )}
        </Box>
      ))}

      <LayerImg src="/images/career/saas-avatar.webp" alt="" x={1124.817} y={88.065} w={117.919} h={145.618} boxW={BAND_W} boxH={BAND_H} fit="fill" className="z-10" />
    </div>
  );
}

/** Desktop only. Mobile home in Figma ends at the passion carousel and the footer. */
export function CareerSummary() {
  const topRow = careerStories.slice(0, 3);
  const bottomRow = careerStories.slice(3, 6);

  return (
    <section id="career" aria-labelledby="career-title" className="hidden scroll-mt-[74px] lg:mt-[180px] lg:block lg:pb-[100px]">
      <Container>
        <h2 id="career-title" className="text-[2rem] font-bold leading-[2.375rem]">
          Career Summary
        </h2>

        <div className="mt-[35px] grid grid-cols-3 items-start gap-x-0 gap-y-[6.1px]">
          {topRow.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
          {bottomRow.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

        <CurrentRoleBand />
      </Container>
    </section>
  );
}
