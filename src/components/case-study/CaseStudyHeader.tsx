import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/types";

type CaseStudyHeaderProps = {
  study: CaseStudy;
};

function MetaList({
  items,
  compact,
}: {
  items: { label: string; value: string }[];
  compact?: boolean;
}) {
  return (
    <>
      {items.map(({ label, value }) => (
        <div key={label} className={compact ? undefined : "min-w-[7rem] lg:w-[282px]"}>
          <dt
            className={
              compact
                ? "text-[12px] font-normal leading-normal text-[#193334]"
                : "text-[0.875rem] font-normal leading-[26px] text-[#193334]"
            }
          >
            {label}
          </dt>
          <dd
            className={
              compact
                ? "text-[14px] font-semibold leading-[26px] text-[#193334]"
                : "text-[1rem] font-semibold leading-[26px] text-[#193334]"
            }
          >
            {value}
          </dd>
        </div>
      ))}
    </>
  );
}

/** Title 48/58 (36/37 mobile) teal-800, description 16/26, meta 16 + 20/26 teal-900. */
export function CaseStudyHeader({ study }: CaseStudyHeaderProps) {
  const { title, description, meta, mobileMeta, titleSuffix } = study;
  const intel = study.slug === "intelligence-and-recommendation";
  const opticks = study.slug === "opticks-ai-editor";
  const designSystem = study.slug === "design-system-and-iconography";

  return (
    <header className="bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col lg:min-h-[308px] lg:flex-row lg:items-center">
        <div
          className={
            intel
              ? "flex items-center px-8 py-8 lg:w-[853px] lg:py-10 lg:pr-[46px] lg:pl-20"
              : "flex items-center px-8 py-8 lg:w-[853px] lg:px-20 lg:py-10"
          }
        >
          <div
            className={
              intel
                ? "flex w-full max-w-[338px] flex-col gap-6 text-[#254d4f] lg:w-[727px] lg:max-w-[727px] lg:gap-8"
                : "flex w-full max-w-[727px] flex-col gap-6 text-[#254d4f] lg:gap-8"
            }
          >
            <h1
              className={
                opticks
                  ? "text-[36px] font-bold leading-[37px] lg:text-[48px]"
                  : "text-[2.25rem] font-bold leading-[37px] lg:text-[3rem] lg:leading-[58px]"
              }
            >
              {opticks && titleSuffix ? (
                <span className="flex h-12 items-start gap-6">
                  <span>{title}</span>
                  <span aria-hidden className="h-12 w-px shrink-0 bg-[#d8e6e6]" />
                  <span>{titleSuffix}</span>
                </span>
              ) : (
                title
              )}
            </h1>
            <p className="text-[1rem] font-medium leading-[1.625rem]">{description}</p>
          </div>
        </div>

        {intel ? (
          <div className="relative hidden w-0 shrink-0 self-stretch lg:block" aria-hidden>
            <div className="absolute inset-y-0 left-0 w-px bg-[#d8e6e6]" />
          </div>
        ) : (
          <div className="hidden w-px shrink-0 self-stretch bg-[#d8e6e6] lg:block" aria-hidden />
        )}

        {intel ? (
          <>
            <dl className="flex gap-6 border-t border-[#b2cccd] px-8 py-6 text-[#193334] lg:hidden">
              <MetaList items={mobileMeta ?? meta} compact />
            </dl>
            <dl className="hidden w-[587px] shrink-0 flex-col items-start justify-center gap-8 px-20 py-10 text-[#193334] lg:flex">
              <MetaList items={meta} />
            </dl>
          </>
        ) : opticks ? (
          <>
            <dl className="flex gap-6 border-t border-[#b2cccd] px-8 py-6 text-[#193334] lg:hidden">
              <MetaList items={meta} compact />
            </dl>
            <dl className="hidden w-[587px] shrink-0 flex-col justify-center gap-6 px-20 py-10 text-[#193334] lg:flex">
              <MetaList items={meta} />
            </dl>
          </>
        ) : designSystem ? (
          <>
            <dl className="flex gap-6 border-t border-[#d8e6e6] px-8 py-6 text-[#193334] lg:hidden [&_dt]:leading-[14px]">
              <MetaList items={mobileMeta ?? meta} compact />
            </dl>
            <dl className="hidden w-[587px] shrink-0 flex-col justify-center gap-6 px-20 py-10 text-[#193334] lg:flex">
              <MetaList items={meta} />
            </dl>
          </>
        ) : (
          // lg:flex-nowrap: with wrap + content-center the lone flex line is centred
          // on the cross axis, which pushed the meta 73px right of Figma's x=933.
          <dl className="flex flex-wrap content-center gap-x-6 gap-y-4 border-t border-[#b2cccd] px-8 py-6 text-[#193334] lg:w-[587px] lg:flex-col lg:flex-nowrap lg:justify-center lg:gap-6 lg:border-t-0 lg:px-20 lg:py-10">
            <MetaList items={meta} />
          </dl>
        )}
      </div>
    </header>
  );
}

export function bannerClass(slug: string, fallback: string) {
  const map: Record<string, string> = {
    "telescope-overview": "bg-gradient-to-b from-[#ea6828] to-[#fdad86]",
    "media-planner": "bg-gradient-to-b from-[#6d4aff] to-[#c4b5fd]",
    "opticks-ai-editor": "bg-gradient-to-b from-[#c2413a] to-[#f0a8a2]",
    "raipur-homes": "bg-gradient-to-b from-[#3a4fd0] to-[#a9b6f5]",
    "intelligence-and-recommendation": "bg-gradient-to-b from-[#1d4e89] to-[#b9d4f5]",
    "emotion-driven-design": "bg-gradient-to-b from-[#7c3aed] to-[#e9d5ff]",
    "design-system-and-iconography": "bg-gradient-to-b from-[#0f766e] to-[#99f6e4]",
  };
  return cn(map[slug] ?? fallback);
}
