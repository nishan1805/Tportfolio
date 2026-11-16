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
    <section aria-label="Expertise" className="px-0 py-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-20">
        <h2 className="mb-8 border-b border-[#d8e6e6] pb-6 text-center text-[2rem] font-semibold leading-[2.375rem] lg:hidden">
          Expertise
        </h2>
        <div className="grid min-w-0 gap-8 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
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
