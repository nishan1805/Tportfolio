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

const fadeDown = "bg-gradient-to-b from-[#fbfbff] to-[#efeeff]";
const fadeUp = "bg-gradient-to-b from-[#efeeff] to-[#fbfbff]";

function MediaPlannerSummary() {
  return (
    <section aria-labelledby="summary-title" className="bg-[#e6f7fb]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 lg:px-20">
        <h2 id="summary-title" className="text-center text-[1.5rem] font-bold leading-7 text-[#254d4f] lg:text-left">
          Summary
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 rounded-[16px] bg-white p-4 lg:h-[572px] lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:h-full lg:min-h-0">
            <article className={`flex flex-col justify-end rounded-[16px] px-6 py-8 text-[#254d4f] lg:min-h-0 lg:flex-1 ${fadeDown}`}>
              <div className="flex flex-col gap-4">
                <h3 className="text-[1.25rem] font-semibold leading-normal">Defining Problem</h3>
                <p className="text-[0.875rem] font-normal leading-5">
                  At Affle, creating media reports was a slow, manual process. Teams had to pull data from multiple sources (like SensorTower), calculate metrics by hand, and build reports from scratch in Google Sheets.
                </p>
              </div>
            </article>
            <article className={`flex flex-col justify-end rounded-[16px] px-6 py-8 text-[#254d4f] lg:shrink-0 ${fadeUp}`}>
              <div className="flex flex-col gap-4">
                <h3 className="text-[1.25rem] font-semibold leading-normal">Inspiration Collection</h3>
                <p className="text-[0.875rem] font-normal leading-5">
                  Our existing report templates from different business units served as the primary inspiration for the design.
                </p>
              </div>
            </article>
          </div>

          <article className="flex flex-col justify-between gap-6 rounded-[16px] border border-[#d8e6e6] bg-white p-6 text-[#254d4f] lg:h-full">
            <p className="text-[2rem] font-bold leading-[2.3125rem]">3-4 Iterations</p>
            <div className="flex flex-col gap-4">
              <h3 className="text-[1.25rem] font-semibold leading-normal">Wireframing</h3>
              <p className="text-[0.875rem] font-normal leading-5">
                We frequently leveraged AI tools to rapidly ideate and align with stakeholders, ensuring our design direction was validated early on.
              </p>
              <div className="flex items-start gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/case-studies/media-planner/lovable-icon.svg" alt="Lovable" width={36} height={36} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/case-studies/media-planner/figma-icon.svg" alt="Figma" width={25} height={36} />
              </div>
            </div>
          </article>

          <article className={`flex flex-col justify-between gap-6 rounded-[16px] p-6 text-[#254d4f] lg:h-full ${fadeUp}`}>
            <p className="text-[2rem] font-bold leading-[2.3125rem]">UI Design and Prototype</p>
            <div className="flex flex-col gap-6">
              <h3 className="text-[1.25rem] font-semibold leading-normal">UI Finalization</h3>
              <p className="text-[0.875rem] font-normal leading-5">
                With the user flows and conceptual structure confirmed, we transitioned from our AI-generated concepts to high-fidelity design. Using our established design system, we rebuilt the interface in Figma and developed an interactive prototype.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function OpticksSummary() {
  return (
    <section aria-labelledby="summary-title" className="bg-[#e6f7fb]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 px-5 py-12 lg:items-start lg:px-20">
        <h2 id="summary-title" className="text-[1.5rem] font-bold leading-7 text-[#254d4f]">
          Summary
        </h2>
        <div className="grid w-full grid-cols-1 gap-6 rounded-[16px] bg-white p-4 lg:h-[572px] lg:grid-cols-4">
          <article className="flex flex-col justify-end gap-4 rounded-[16px] bg-gradient-to-b from-[#fbfbff] to-[#efeeff] px-6 py-8 text-[#254d4f] lg:h-full">
            <h3 className="text-[1.25rem] font-semibold leading-normal">Problem Statement</h3>
            <p className="text-[0.875rem] font-normal leading-5">
              We noticed advertisers constantly struggling to create app store screenshots. While we recognized this gap early on, solutions were limited.
            </p>
          </article>

          <article className="flex flex-col gap-8 rounded-[16px] bg-gradient-to-b from-[#efeeff] to-[#fbfbff] p-6 text-[#254d4f] lg:h-full lg:justify-between lg:gap-0">
            <p className="text-[1.5rem] font-bold leading-normal lg:text-[2rem] lg:leading-[37px]">Creative set generation tool</p>
            <div className="flex flex-col gap-6">
              <h3 className="text-[1.25rem] font-semibold leading-normal">Solution</h3>
              <p className="text-[0.875rem] font-normal leading-5">
                Our initial concept used single prompts. Since AI rarely yields perfect immediate results, we will add a customization editor in phase two
              </p>
            </div>
          </article>

          <div className="flex flex-col gap-4 lg:h-full">
            <article className="flex flex-col gap-8 rounded-[16px] bg-gradient-to-b from-[#fbfbff] to-[#efeeff] px-6 py-8 lg:h-[292px] lg:justify-between lg:gap-0">
              <p className="text-[0.875rem] font-medium leading-5 text-[#3e8083]">4-6 Weeks</p>
              <div className="flex flex-col gap-4 text-[#254d4f]">
                <h3 className="text-[1.25rem] font-semibold leading-normal">Phase 1, Generation Tool</h3>
                <p className="text-[0.875rem] font-normal leading-5">
                  Phase 1 focused on defining the core user experience and UI design for the image generation engine.
                </p>
              </div>
            </article>
            <article className="flex flex-col gap-8 rounded-[16px] bg-gradient-to-b from-[#efeeff] to-[#fbfbff] px-6 py-8 lg:min-h-0 lg:flex-1 lg:justify-between lg:gap-0">
              <p className="text-[0.875rem] font-medium leading-5 text-[#3e8083]">3-4 Weeks</p>
              <div className="flex flex-col gap-4 text-[#254d4f]">
                <h3 className="text-[1.25rem] font-semibold leading-normal">Phase 2, Editor</h3>
                <p className="text-[0.875rem] font-normal leading-5">
                  Based on advertiser feedback, the initial editing options were insufficient, leading us to build an advanced, comprehensive editor.
                </p>
              </div>
            </article>
          </div>

          <div className="flex flex-col gap-4 lg:h-full">
            <article className="flex flex-col gap-[122px] rounded-[16px] border border-[#d8e6e6] bg-white p-6 text-[#254d4f] lg:h-[225px] lg:justify-between lg:gap-0">
              <p className="text-[1.5rem] font-bold leading-normal lg:text-[2rem] lg:leading-[37px]">5 Iterations</p>
              <div className="flex flex-col gap-3">
                <h3 className="text-[1.25rem] font-semibold leading-normal">Wireframing</h3>
                <p className="text-[0.875rem] font-normal leading-normal">
                  More then 5 Iterations has been done to reach upto final solution.
                </p>
              </div>
            </article>
            <article className="flex flex-col justify-end gap-4 rounded-[16px] bg-gradient-to-b from-[#fbfbff] to-[#efeeff] px-6 py-8 text-[#254d4f] lg:min-h-0 lg:flex-1">
              <h3 className="text-[1.25rem] font-semibold leading-normal">Design for Phase 1 and 2</h3>
              <p className="text-[0.875rem] font-normal leading-5">It was a time where we had to finalise UI with prototype.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Mixed-height summary bento. Omitted on pages whose Figma frame has no Summary. */
export function SummaryCards({ study }: { study: CaseStudy }) {
  if (study.slug === "opticks-ai-editor") return <OpticksSummary />;
  if (study.slug === "media-planner") return <MediaPlannerSummary />;
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
