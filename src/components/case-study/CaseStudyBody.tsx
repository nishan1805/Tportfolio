import type { CaseStudySection } from "@/types";

import { cn } from "@/lib/utils";

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
  /** Opticks uses its own column and the Figma section rhythm. Other pages stay on the shared layout. */
  variant?: "opticks";
}) {
  const opticks = variant === "opticks";

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
          opticks ? "gap-0 pt-20 pb-20 lg:max-w-[1000px]" : "gap-20 pb-24 lg:max-w-[1016px] lg:pb-20",
          !opticks && "pt-14 lg:pt-20",
        )}
      >
        {opticks
          ? sections.map((section, index) => (
              <div key={section.id} className={index > 0 ? "mt-20 border-t border-[#d8e6e6] pt-20" : undefined}>
                <OpticksSection section={section} />
              </div>
            ))
          : sections.map((section) => <SectionContent key={section.id} section={section} />)}
      </div>
    </div>
  );
}
