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
};

function LayerImg({ src, alt = "", x, y, w, h, boxW, boxH, fit = "fill", className = "" }: Layer & { boxW: number; boxH: number; className?: string }) {
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
  className,
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  boxW: number;
  boxH: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute z-10 ${className ?? ""}`}
      style={{
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
      <span className="font-medium text-prime-blue-600">{emphasis}</span>
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
      { src: "/images/career/childhood-supplies.webp", x: 372.3, y: 150.47, w: 194, h: 83.5 },
    ],
    titleColor: "text-black",
    subtitleColor: "text-[#3e8083]",
  },
  engineering: {
    title: { x: 13.88, y: 11.71, w: 394.12, h: 55.93 },
    layers: [
      { src: "/images/summary/institute.webp", x: -45.08, y: 129.92, w: 516.7, h: 187.69, fit: "cover" },
      { src: "/images/career/engineering-back.webp", x: 161.79, y: 81.09, w: 101.5, h: 153, fit: "contain" },
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
      { src: "/images/career/rackets-mid.webp", x: 158.93, y: 91.35, w: 159, h: 142.5 },
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

const SKILLS: { title: string; text: string; icon?: Layer }[] = [
  {
    title: "Design System",
    text: "Built and maintaining it to scale",
    icon: { src: "/images/career/skill-design-system.webp", x: 0, y: 0, w: 97.66, h: 34.88, fit: "contain" },
  },
  {
    title: "Quick Prototyping",
    text: "Interactive prototype to test it out",
    icon: { src: "/images/summary/logo-e.png", x: 0, y: 0, w: 26.16, h: 39.24, fit: "contain" },
  },
  {
    title: "Interviews. Testing",
    text: "Clarity gives us basics to innovate",
    icon: { src: "/images/career/skill-interviews.webp", x: 0, y: 0, w: 86.63, h: 74.09, fit: "contain" },
  },
  {
    title: "Research and Conceptualisation",
    text: "Research and concept making before design",
  },
  {
    title: "Audit, analysis Benchmarking",
    text: "Just to make sure we are always up there",
    icon: { src: "/images/career/skill-audit.webp", x: 0, y: 0, w: 67.14, h: 48.83, fit: "contain" },
  },
  {
    title: "Leading the conversations",
    text: "From sanity to overlooking deliveries",
  },
];

function StoryCard({ story }: { story: CareerStory }) {
  const layout = STORY_LAYOUT[story.id];
  return (
    <article className={`relative overflow-hidden rounded-[16px] ${story.background}`} style={{ aspectRatio: `${CARD_W} / ${CARD_H}` }}>
      {layout.layers.map((layer) => (
        <LayerImg key={layer.src} {...layer} boxW={CARD_W} boxH={CARD_H} />
      ))}

      <Box {...layout.title} boxW={CARD_W} boxH={CARD_H} className="flex items-center">
        <div className="relative flex h-full w-full items-start justify-between gap-3 rounded-[8px] bg-white/80 px-3.5 py-1.5">
          <div className="min-w-0 flex-1">
            <h3 className={`text-[0.875rem] font-bold leading-[1.0625rem] ${layout.titleColor}`}>{story.title}</h3>
            {story.subtitle && (
              <p className={`mt-1 text-[0.7625rem] font-medium leading-[1.125rem] ${layout.subtitleColor}`}>
                <EmphasisText text={story.subtitle} emphasis={story.emphasis} />
              </p>
            )}
          </div>
        </div>
      </Box>
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
          fit="contain"
          className="z-20"
        />
      )}

      {layout.bottom && (story.bottomText || story.bottomTitle) && (
        <Box {...layout.bottom} boxW={CARD_W} boxH={CARD_H} className="flex items-center">
          <div className="h-full w-full rounded-[8px] bg-white px-3.5 py-1.5">
            {story.bottomTitle && <h4 className="text-[0.875rem] font-bold leading-[1.0625rem] text-[#193334]">{story.bottomTitle}</h4>}
            <p className="mt-0.5 text-[0.875rem] leading-[1.25rem] text-[#193334]">{story.bottomText}</p>
          </div>
        </Box>
      )}
    </article>
  );
}

function ResearchIcon() {
  return (
    <div className="grid size-[47px] shrink-0 grid-cols-2 grid-rows-2 gap-[3.5px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/summary/logo-f.png" alt="" className="size-[22px] object-contain" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/summary/logo-g.webp" alt="" className="size-[22px] object-contain" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/summary/logo-i.png" alt="" className="size-[22px] object-contain" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/summary/logo-h.webp" alt="" className="size-[22px] object-contain" />
    </div>
  );
}

function SkillCard({ title, text, icon, tall }: { title: string; text: string; icon?: Layer; tall?: boolean }) {
  return (
    <li className="relative flex min-h-0 items-center justify-between gap-2 overflow-visible rounded-[8px] bg-white px-3.5 py-2">
      <div className="min-w-0">
        <h4 className="text-[0.7625rem] font-bold leading-[0.95rem] text-black">{title}</h4>
        <p className="mt-0.5 text-[0.65625rem] font-medium leading-[1.05rem] text-[#3e8083]">{text}</p>
      </div>
      {title.startsWith("Research") ? (
        <ResearchIcon />
      ) : icon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={icon.src}
          alt=""
          className={`shrink-0 object-contain object-right ${tall ? "self-end" : ""}`}
          style={{ width: icon.w, height: icon.h }}
        />
      ) : null}
    </li>
  );
}

/** Desktop only. Mobile home in Figma ends at the passion carousel and the footer. */
export function CareerSummary() {
  const topRow = careerStories.slice(0, 3);
  const bottomRow = careerStories.slice(3, 6);

  return (
    <section id="career" aria-labelledby="career-title" className="hidden scroll-mt-[74px] pb-16 lg:block lg:pb-20">
      <Container>
        <h2 id="career-title" className="text-[2rem] font-bold leading-[2.375rem]">
          Career Summary
        </h2>

        <div className="mt-[35px] grid grid-cols-3 gap-x-0 gap-y-[6px]">
          {topRow.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
          {bottomRow.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

        <div className="relative mt-[8px] overflow-hidden rounded-[16px] bg-[#eaeefb]" style={{ aspectRatio: `${BAND_W} / ${BAND_H}` }}>
          <Box x={13} y={7.71} w={1254} h={31.95} boxW={BAND_W} boxH={BAND_H} className="flex items-center justify-between">
            <h3 className="text-[0.875rem] font-bold text-[#193334]">{currentRole.company}</h3>
            <p className="absolute left-1/2 -translate-x-1/2 text-[0.7625rem] font-medium text-[#193334]">{currentRole.period}</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/summary/logo-d.png" alt="affle" className="h-[17.5px] w-[38px] object-contain" />
          </Box>

          <Box x={13} y={50.68} w={1254} h={183} boxW={BAND_W} boxH={BAND_H} className="overflow-hidden rounded-[16px] bg-gradient-to-b from-[#e4e0fb] to-white">
            <div className="flex items-start justify-between px-[10px] pt-[9px] text-[0.7625rem] font-semibold text-[#193334]">
              <p>{currentRole.summary}</p>
              <p>{currentRole.jobTitle}</p>
            </div>

            <ul className="mt-2 grid grid-cols-[1fr_1fr_0.49fr] gap-x-[11px] gap-y-[6px] px-3">
              {SKILLS.map((skill) => (
                <SkillCard key={skill.title} {...skill} tall={skill.title.startsWith("Interviews")} />
              ))}
            </ul>
          </Box>

          <LayerImg
            src="/images/career/saas-avatar.webp"
            alt=""
            x={1124.82}
            y={88.07}
            w={118}
            h={146}
            boxW={BAND_W}
            boxH={BAND_H}
            fit="contain"
          />
        </div>
      </Container>
    </section>
  );
}
