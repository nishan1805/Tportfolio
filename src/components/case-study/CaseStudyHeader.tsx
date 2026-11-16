import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/types";

type CaseStudyHeaderProps = {
  study: CaseStudy;
};

/** Title 48/37 teal-800, description 16/26, meta 16 + 20/26 teal-900. */
export function CaseStudyHeader({ study }: CaseStudyHeaderProps) {
  const { title, description, meta } = study;

  return (
    <header className="bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col lg:min-h-[308px] lg:flex-row lg:items-center">
        <div className="flex items-center px-8 py-8 lg:w-[853px] lg:px-20 lg:py-10">
          <div className="flex w-full max-w-[727px] flex-col gap-6 text-[#254d4f] lg:gap-8">
            <h1 className="text-[2.25rem] font-bold leading-[2.5rem] lg:text-[3rem] lg:leading-[2.3125rem]">{title}</h1>
            <p className="text-[1rem] font-medium leading-[1.625rem]">{description}</p>
          </div>
        </div>

        <div className="hidden w-px shrink-0 self-stretch bg-[#b2cccd] lg:block" aria-hidden />

        <dl className="flex flex-wrap content-center gap-x-6 gap-y-4 border-t border-[#b2cccd] px-8 py-6 text-[#193334] lg:w-[587px] lg:flex-col lg:justify-center lg:gap-6 lg:border-t-0 lg:px-20 lg:py-10">
          {meta.map(({ label, value }) => (
            <div key={label} className="min-w-[7rem] lg:w-[282px]">
              <dt className="text-[0.875rem] font-normal leading-[26px] text-[#193334]">{label}</dt>
              <dd className="text-[1rem] font-semibold leading-[26px] text-[#193334]">{value}</dd>
            </div>
          ))}
        </dl>
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
