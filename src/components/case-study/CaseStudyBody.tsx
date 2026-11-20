import type { CaseStudySection } from "@/types";

import { cn } from "@/lib/utils";

import { MediaPlannerSections } from "./MediaPlannerSections";
import { OpticksSection } from "./OpticksSection";
import { SectionContent } from "./SectionContent";
import { SectionNav } from "./SectionNav";

export function CaseStudyBody({
  sections,
  variant,
}: {
  sections: CaseStudySection[];
  /** Kept for callers. Every page now uses 56px (mobile) / 80px (desktop) between the banner and the first section. */
  lead?: boolean;
  /** Opticks, Media Planner, and Raipur Homes use their own section rhythm. Other pages stay on the shared layout. */
  variant?: "opticks" | "media-planner" | "raipur";
}) {
  const opticks = variant === "opticks";
  const mediaPlanner = variant === "media-planner";
  const raipur = variant === "raipur";

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] min-w-0 lg:grid lg:px-20",
        opticks ? "lg:grid-cols-[216px_64px_minmax(0,1000px)]" : "lg:grid-cols-[216px_48px_minmax(0,1016px)]",
        "px-[21px]",
      )}
    >
      <aside className="min-w-0">
        <SectionNav sections={sections.map(({ id, title, navTitle }) => ({ id, title: navTitle ?? title }))} />
      </aside>
      <div className="hidden lg:block" aria-hidden />
      <div
        className={cn(
          "flex min-w-0 max-w-full flex-col overflow-x-clip",
          opticks
            ? "gap-0 pt-20 pb-20 lg:max-w-[1000px]"
            : mediaPlanner
              ? "max-w-full gap-0 pt-[66px] pb-[45px] lg:max-w-[1016px] lg:gap-20 lg:pt-20 lg:pb-[65px]"
              : raipur
                ? "gap-14 pt-14 pb-[52px] lg:max-w-[1016px] lg:gap-20 lg:pt-20 lg:pb-20"
                : "gap-20 pt-14 pb-24 lg:max-w-[1016px] lg:pt-20 lg:pb-20",
        )}
      >
        {opticks
          ? sections.map((section, index) => (
              <div key={section.id} className={index > 0 ? "mt-20 border-t border-[#d8e6e6] pt-20" : undefined}>
                <OpticksSection section={section} />
              </div>
            ))
          : mediaPlanner
            ? sections.map((section, index) => (
                <div
                  key={section.id}
                  className={index > 0 ? "mt-20 border-t border-[#d8e6e6] pt-[81px] lg:mt-0 lg:border-t-0 lg:pt-0" : undefined}
                >
                  <MediaPlannerSections section={section} />
                </div>
              ))
            : raipur
              ? sections.map((section) => <SectionContent key={section.id} section={section} variant="raipur" />)
              : sections.map((section) => <SectionContent key={section.id} section={section} />)}
      </div>
    </div>
  );
}
