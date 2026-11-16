import Link from "next/link";

import type { Project } from "@/types";

import { ImagePanel } from "./ImagePanel";

type ProjectCardProps = {
  project: Project;
};

/**
 * Desktop card is 1280 × 441: 438px text column, 712px preview.
 * No hover shadow — the design frame is flat.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const WORDMARK: Record<string, string> = {
  "telescope-overview": "telescope",
  "media-planner": "MEDIA PLANNER",
  "opticks-ai-editor": "OPTICKS AI",
  "raipur-homes": "RAIPUR HOMES",
  "audit-tool": "telescope",
};

const { title, titleSuffix, description, meta, gradient, image, webm, mp4, status, href, slug } = project;
  const mark = WORDMARK[slug];

  const card = (
    <article className="grid min-w-0 overflow-hidden border border-[#d8e6e6] bg-white lg:h-[441px] lg:grid-cols-[438px_minmax(0,1fr)]">
      <div className="flex min-w-0 flex-col justify-between gap-8 p-6 lg:p-8">
        <div className="flex flex-col gap-[22px]">
          <h3 className="flex flex-wrap items-center gap-x-4 text-[1.5rem] font-semibold leading-8 text-black lg:text-[2.5rem]">
            {title}
            {titleSuffix && (
              <>
                <span aria-hidden className="hidden h-8 w-px bg-black/30 sm:block" />
                <span>{titleSuffix}</span>
              </>
            )}
          </h3>
          {status && (
            <span className="w-fit rounded-full bg-[#fdae44] px-3 py-1 text-[0.75rem] font-semibold">{status}</span>
          )}
          <p className="text-[1rem] font-medium leading-6 text-black/60">{description}</p>
        </div>

        <dl className="flex flex-wrap gap-x-[42px] gap-y-4">
          {meta.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-2">
              <dt className="text-[1rem] font-medium leading-normal text-black/60">{label}</dt>
              <dd className="text-[1.25rem] font-medium leading-6 text-black">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={`relative min-h-[220px] min-w-0 overflow-hidden ${gradient}`}>
        {mark && (
          <p aria-hidden className="pointer-events-none absolute inset-x-0 top-[8%] text-center text-[3.5rem] font-bold leading-none tracking-tight whitespace-nowrap text-white/10 lg:text-[4.5rem]">
            {mark}
          </p>
        )}
        <div className="absolute inset-x-6 top-8 bottom-4 overflow-hidden lg:inset-x-10 lg:top-12 lg:bottom-6">
          {webm || mp4 ? (
            <video
              className="size-full object-contain object-center"
              autoPlay
              muted
              loop
              playsInline
              poster={image}
              aria-label={`${title} preview`}
            >
              {webm && <source src={webm} type="video/webm" />}
              {mp4 && <source src={mp4} type="video/mp4" />}
            </video>
          ) : (
            <ImagePanel src={image} alt={`${title} preview`} className="size-full" />
          )}
        </div>
      </div>
    </article>
  );

  if (!href) return card;

  return (
    <Link href={href} className="block min-w-0">
      {card}
    </Link>
  );
}
