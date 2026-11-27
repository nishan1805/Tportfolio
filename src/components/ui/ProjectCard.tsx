import Link from "next/link";

import type { Project } from "@/types";

type Box = { x: number; y: number; w: number; h: number };

type MediaBox = Box & {
  radius?: number;
  border?: number;
  borderColor?: string;
  /** Stroke is drawn outside the Figma image rect. x/y/w/h are that outer box. */
  outside?: boolean;
};

type PanelSpec = {
  panelW: number;
  panelH: number;
  mark: Box & { src: string };
  media: MediaBox;
};

type BannerSpec = {
  /** Desktop card height. The preview column is 712/1280 of the card. */
  desktopH: number;
  /** Mobile preview height in a 360-wide design. */
  mobileH: number;
  desktop: PanelSpec;
  mobile: PanelSpec;
};

const TELESCOPE = "/images/wordmarks/telescope.svg";

const BANNERS: Record<string, BannerSpec> = {
  "telescope-overview": {
    desktopH: 441,
    mobileH: 419,
    desktop: {
      panelW: 712,
      panelH: 441,
      mark: { src: TELESCOPE, x: 0, y: -13, w: 794, h: 117 },
      media: { x: 60.95, y: 58.95, w: 590.02, h: 325.02, radius: 8.0457, border: 8.0457, borderColor: "#193334", outside: true },
    },
    mobile: {
      panelW: 360,
      panelH: 419,
      mark: { src: TELESCOPE, x: 0, y: -13, w: 794, h: 117 },
      media: { x: 22.95, y: 65.95, w: 561, h: 310, radius: 8.0457, border: 8.0457, borderColor: "#193334", outside: true },
    },
  },
  "media-planner": {
    desktopH: 441,
    mobileH: 441,
    desktop: {
      panelW: 712,
      panelH: 441,
      mark: { src: "/images/wordmarks/media-planner.svg", x: -1, y: 0, w: 715, h: 58 },
      media: { x: 63, y: 61, w: 586, h: 319, radius: 8, border: 4, borderColor: "#193334", outside: true },
    },
    mobile: {
      panelW: 360,
      panelH: 441,
      mark: { src: "/images/wordmarks/media-planner.svg", x: -1, y: 0, w: 715, h: 58 },
      media: { x: 27, y: 61, w: 586, h: 319, radius: 8, border: 4, borderColor: "#193334", outside: true },
    },
  },
  "opticks-ai-editor": {
    desktopH: 442,
    mobileH: 442,
    desktop: {
      panelW: 712,
      panelH: 442,
      mark: { src: "/images/wordmarks/opticks-ai.svg", x: -7, y: -4, w: 719, h: 82 },
      media: { x: 50, y: 55, w: 612, h: 333, radius: 8, border: 4, borderColor: "#193334", outside: true },
    },
    mobile: {
      panelW: 360,
      panelH: 442,
      mark: { src: "/images/wordmarks/opticks-ai.svg", x: -7, y: -4, w: 719, h: 82 },
      media: { x: 30, y: 55, w: 612, h: 333, radius: 8, border: 4, borderColor: "#193334", outside: true },
    },
  },
  "raipur-homes": {
    desktopH: 441,
    mobileH: 441,
    desktop: {
      panelW: 712,
      panelH: 441,
      mark: { src: "/images/wordmarks/raipur-homes.svg", x: -6, y: -6, w: 731, h: 63 },
      media: { x: 55, y: 52, w: 716.009, h: 337.983 },
    },
    mobile: {
      panelW: 360,
      panelH: 441,
      mark: { src: "/images/wordmarks/raipur-homes.svg", x: -6, y: -6, w: 731, h: 63 },
      media: { x: 33, y: 80, w: 595, h: 281 },
    },
  },
  "audit-tool": {
    desktopH: 441,
    mobileH: 441,
    desktop: {
      panelW: 712,
      panelH: 441,
      mark: { src: TELESCOPE, x: 0, y: -13, w: 794, h: 117 },
      media: { x: 50, y: 56, w: 612, h: 329, radius: 12, border: 4, borderColor: "#254d4f" },
    },
    mobile: {
      panelW: 360,
      panelH: 441,
      mark: { src: TELESCOPE, x: 0, y: -13, w: 794, h: 117 },
      media: { x: -184, y: 81, w: 518.339, h: 279.012, radius: 12.675, border: 4.225, borderColor: "#254d4f" },
    },
  },
};

function boxStyle(panelW: number, panelH: number, box: Box): React.CSSProperties {
  return {
    left: `${(box.x / panelW) * 100}%`,
    top: `${(box.y / panelH) * 100}%`,
    width: `${(box.w / panelW) * 100}%`,
    height: `${(box.h / panelH) * 100}%`,
  };
}

function Preview({ spec, project }: { spec: PanelSpec; project: Project }) {
  const { media, mark, panelW } = spec;
  const radius = media.radius ? media.radius + (media.outside ? media.border ?? 0 : 0) : undefined;
  const frameStyle: React.CSSProperties = {
    ...boxStyle(spec.panelW, spec.panelH, media),
    borderRadius: radius ? `calc(100cqw * ${radius} / ${panelW})` : undefined,
    borderWidth: media.border ? `calc(100cqw * ${media.border} / ${panelW})` : undefined,
    borderStyle: media.border ? "solid" : undefined,
    borderColor: media.borderColor,
    boxSizing: "border-box",
  };

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ containerType: "inline-size" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={mark.src}
        alt=""
        aria-hidden
        className="pointer-events-none absolute z-0 max-w-none"
        style={boxStyle(spec.panelW, spec.panelH, mark)}
      />
      <div className="absolute z-10 overflow-hidden bg-black/5" style={frameStyle}>
        {project.webm || project.mp4 ? (
          <video
            className="absolute inset-0 size-full max-w-none object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={project.image}
            aria-label={`${project.title} preview`}
          >
            {project.webm && <source src={project.webm} type="video/webm" />}
            {project.mp4 && <source src={project.mp4} type="video/mp4" />}
          </video>
        ) : (
          project.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.image} alt={`${project.title} preview`} className="absolute inset-0 size-full max-w-none object-cover" />
          )
        )}
      </div>
    </div>
  );
}

/**
 * Desktop card is 1280 × 441: 438px copy, 130px gutter, 712px preview.
 * The wordmark sits behind the media at the Figma coordinates.
 */
export function ProjectCard({ project }: { project: Project }) {
  const banner = BANNERS[project.slug];
  const { title, titleSuffix, description, meta, gradient, status, href } = project;

  const card = (
    <article
      className="box-border flex min-w-0 flex-col overflow-hidden bg-white outline outline-1 -outline-offset-1 outline-[#d8e6e6] lg:h-[var(--card-h)] lg:flex-row lg:justify-between"
      style={banner ? { ["--card-h" as string]: `${banner.desktopH}px` } : undefined}
    >
      <div
        className={`flex shrink-0 flex-col gap-4 p-4 lg:h-full lg:w-[34.21875%] lg:justify-between lg:gap-0 lg:p-8 ${status ? "max-lg:min-h-[208px]" : "max-lg:h-[208px]"}`}
      >
        <div className="flex flex-col gap-[22px]">
          <h3 className="text-[20px] leading-8 text-black lg:text-[40px]">
            <span className="lg:hidden">
              {title}
              {titleSuffix ? `, ${titleSuffix}` : ""}
            </span>
            <span className="hidden items-center gap-6 lg:flex">
              {title}
              {titleSuffix && (
                <>
                  <span aria-hidden className="h-7 w-px bg-black" />
                  {titleSuffix}
                </>
              )}
            </span>
          </h3>
          <p className="text-[14px] font-medium leading-5 text-black/60 lg:text-[16px] lg:font-normal lg:leading-6 lg:text-[#254d4f]">{description}</p>
          {status && <p className="text-[14px] font-medium leading-normal text-[#65999c] lg:text-[16px]">{status}</p>}
        </div>

        <dl className="flex flex-wrap gap-x-[42px] gap-y-4">
          {meta.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-2">
              <dt className="text-[12px] font-medium leading-[14px] text-black/60 lg:text-[16px] lg:leading-normal">{label}</dt>
              <dd className="whitespace-pre text-[16px] font-medium leading-6 text-black lg:text-[20px]">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {banner && (
        <div
          className={`relative w-full lg:h-full lg:w-[55.625%] lg:shrink-0 ${gradient}`}
          style={{ aspectRatio: `360 / ${banner.mobileH}` }}
        >
          <div className="absolute inset-0 lg:hidden">
            <Preview spec={banner.mobile} project={project} />
          </div>
          <div className="absolute inset-0 hidden lg:block">
            <Preview spec={banner.desktop} project={project} />
          </div>
        </div>
      )}
    </article>
  );

  if (!href) return card;

  return (
    <Link href={href} className="block min-w-0">
      {card}
    </Link>
  );
}
