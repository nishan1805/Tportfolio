import type { CaseStudy, SummaryCard } from "@/types";

type Cell = {
  title: string;
  text: string;
  big?: string;
  variant: "fade-down" | "fade-up" | "plain";
  logos?: boolean;
  className?: string;
};

const TELESCOPE: Cell[][] = [
  [
    {
      title: "Problem Statement",
      text: "Stakeholder Interviews and Going through the product itself gives lot of clarity.",
      variant: "fade-down",
      className: "lg:h-[358px] lg:justify-end",
    },
    {
      title: "Competition",
      text: "No one has the same tool",
      variant: "plain",
      logos: true,
      className: "lg:flex-1",
    },
  ],
  [
    {
      title: "Solution",
      text: "Stakeholder Interviews and Going through the product itself gives lot of clarity.",
      big: "Report Generation Tool",
      variant: "fade-up",
      className: "lg:h-full",
    },
  ],
  [
    {
      title: "Research",
      text: "Stakeholder Interviews, Brainstorming, User Interviews and analysis",
      variant: "fade-down",
      className: "lg:h-[263px] lg:justify-end",
    },
    {
      title: "Wireframing",
      text: "More then 5 Iterations has been done to reach upto final solution.",
      big: "5 Iterations",
      variant: "plain",
      className: "lg:flex-1",
    },
  ],
  [
    {
      title: "Design Finalisation",
      text: "Stakeholder Interviews, Brainstorming, User Interviews and analysis",
      big: "Prototype",
      variant: "fade-up",
      className: "lg:flex-1",
    },
    {
      title: "Prototype Testing",
      text: "More then 5 Iterations has been done to reach upto final solution.",
      variant: "plain",
      className: "lg:h-[125px]",
    },
  ],
];

function fromCards(cards: SummaryCard[]): Cell[][] {
  const texts = cards
    .map((card) => card.text)
    .filter((text): text is NonNullable<SummaryCard["text"]> => Boolean(text));

  const cell = (index: number, fallback: Cell): Cell => {
    const text = texts[index];
    if (!text) return fallback;
    return {
      ...fallback,
      title: text.title,
      text: text.text,
      big: text.label ?? fallback.big,
    };
  };

  return TELESCOPE.map((column, columnIndex) =>
    column.map((item, itemIndex) => cell(columnIndex * 2 + itemIndex, item)),
  );
}

function CellCard({ cell }: { cell: Cell }) {
  const fade =
    cell.variant === "fade-down"
      ? "bg-gradient-to-b from-[#fbfbff] to-[#efeeff]"
      : cell.variant === "fade-up"
        ? "bg-gradient-to-b from-[#efeeff] to-[#fbfbff]"
        : "border border-[#d8e6e6] bg-white";

  return (
    <article className={`flex min-h-[148px] flex-col justify-between gap-4 rounded-[16px] p-6 text-[#254d4f] ${fade} ${cell.className ?? ""}`}>
      {cell.big && cell.variant === "fade-up" && (
        <p className="text-[2rem] font-bold leading-[2.3125rem]">{cell.big}</p>
      )}
      {cell.big && cell.variant === "plain" && (
        <p className="text-[2rem] font-bold leading-[2.3125rem]">{cell.big}</p>
      )}
      <div className="flex flex-col gap-3">
        <h3 className="text-[1.25rem] font-semibold leading-normal">{cell.title}</h3>
        <p className="text-[0.875rem] font-normal leading-5">{cell.text}</p>
      </div>
      {cell.logos && (
        <div className="flex items-center gap-4">
          {["/images/summary/logo-a.png", "/images/summary/logo-b.png", "/images/summary/logo-c.png"].map((src) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={src} src={src} alt="" className="h-9 w-9 rounded-[8px] object-cover" />
          ))}
        </div>
      )}
    </article>
  );
}

const NO_SUMMARY = new Set([
  "emotion-driven-design",
  "intelligence-and-recommendation",
  "design-system-and-iconography",
]);

/** Mixed-height summary bento. Omitted on pages whose Figma frame has no Summary. */
export function SummaryCards({ study }: { study: CaseStudy }) {
  if (NO_SUMMARY.has(study.slug) || !study.summary?.length) return null;
  const columns = study.slug === "telescope-overview" || !study.summary?.length ? TELESCOPE : fromCards(study.summary);

  return (
    <section aria-labelledby="summary-title" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 lg:px-20 lg:pb-12 lg:pt-12">
        <h2 id="summary-title" className="text-center text-[1.5rem] font-bold leading-7 text-[#254d4f] lg:text-left">
          Summary
        </h2>
        <div className="mt-6 grid min-w-0 grid-cols-1 gap-4 rounded-[16px] bg-white p-4 lg:mt-6 lg:h-[572px] lg:grid-cols-4 lg:gap-6">
          {columns.map((column, index) => (
            <div key={index} className="flex h-full min-w-0 flex-col gap-4">
              {column.map((cell) => (
                <CellCard key={`${cell.title}-${cell.big ?? ""}`} cell={cell} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
