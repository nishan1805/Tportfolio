import type { CaseStudySection } from "@/types";

import { SectionContent } from "./SectionContent";
import { SectionNav } from "./SectionNav";

export function CaseStudyBody({ sections }: { sections: CaseStudySection[] }) {
  return (
    <div className="mx-auto w-full max-w-[1440px] min-w-0 px-5 lg:grid lg:grid-cols-[216px_48px_minmax(0,1016px)] lg:px-20">
      <aside className="min-w-0">
        <SectionNav sections={sections.map(({ id, title, navTitle }) => ({ id, title: navTitle ?? title }))} />
      </aside>
      <div className="hidden lg:block" aria-hidden />
      <div className="flex min-w-0 max-w-full flex-col gap-20 overflow-x-clip pb-24 lg:max-w-[1016px] lg:pb-20">
        {sections.map((section) => (
          <SectionContent key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
