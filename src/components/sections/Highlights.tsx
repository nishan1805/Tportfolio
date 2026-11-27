import { HighlightCard } from "@/components/ui/HighlightCard";
import { highlights } from "@/data/highlights";

const order: Record<string, string> = {
  intelligence: "order-1",
  "design-system": "order-2 lg:order-3",
  emotion: "order-3 lg:order-2",
  animation: "order-4",
};

export function Highlights() {
  return (
    <section aria-label="Expertise" className="mt-[42px] px-0 lg:mt-0 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-20">
        <div className="relative mb-12 h-[86px] lg:mb-16">
          <h2 className="text-center text-[2rem] font-semibold leading-[38px] lg:text-left lg:text-[#d10606]">
            <span className="lg:hidden">Expertise</span>
            <span className="hidden lg:inline">Experties</span>
          </h2>
          <span className="absolute -left-px bottom-0 h-px w-full bg-black/30 lg:left-0 lg:bg-[#0000001a]" />
        </div>
        <div className="grid min-w-0 gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
          {highlights.map((highlight) => (
            <div key={highlight.id} className={order[highlight.id]}>
              <HighlightCard highlight={highlight} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
