import type { CSSProperties } from "react";

import type { CaseStudySection, ImageBlock, ItemBlock, MobileList } from "@/types";

import { BlockImage } from "./BlockImage";
import { MobileCard } from "./MobileCard";

const sectionClass = "scroll-mt-[116px] lg:scroll-mt-[74px]";
const headingBase = "scroll-mt-[116px] text-[2rem] font-bold text-[#254d4f] lg:scroll-mt-[74px]";

function SectionHeading({ id, title, research = false }: { id: string; title: string; research?: boolean }) {
  return (
    <h2
      id={`${id}-title`}
      className={research ? `${headingBase} leading-[39px] lg:leading-[38px]` : `${headingBase} leading-[38px]`}
    >
      {title}
    </h2>
  );
}

function Body({ text, className = "mt-6", lh = "26" }: { text: string; className?: string; lh?: "24" | "26" | "28" }) {
  const leading = lh === "24" ? "leading-6 lg:leading-[26px]" : lh === "28" ? "leading-7 lg:leading-[26px]" : "leading-[26px]";
  return <p className={`text-base font-normal text-[#254d4f] ${leading} ${className}`}>{text}</p>;
}

function BulletList({ list, leadClass }: { list: MobileList; leadClass: string }) {
  return (
    <div className="lg:hidden">
      <p className={`text-base font-normal leading-6 text-[#254d4f] ${leadClass}`}>{list.lead}</p>
      <ul className={`list-disc ${leadClass.includes("mb-6") ? "" : "mt-6"}`}>
        {list.items.map((item) => (
          <li key={`${item.label ?? ""}-${item.text}`} className="ms-6 mb-4 text-base leading-6 text-[#254d4f] last:mb-0">
            {item.label ? <span className="font-bold">{item.label}</span> : null}
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EyebrowTitle({ item }: { item: ItemBlock }) {
  return (
    <div>
      {item.eyebrow ? (
        <p className="text-[14px] font-medium leading-[17px] text-[#65999c] lg:leading-normal">{item.eyebrow}</p>
      ) : null}
      <h3 className={`text-[24px] font-bold leading-[29px] text-[#254d4f] ${item.eyebrow ? "mt-1" : ""}`}>{item.title}</h3>
    </div>
  );
}

function OpticksImage({ image }: { image: ImageBlock }) {
  if (!image.mobileCard) return <BlockImage image={image} />;
  return (
    <>
      <MobileCard image={image} />
      <div className="hidden lg:block">
        <BlockImage image={image} />
      </div>
    </>
  );
}

function Feature({
  item,
  image,
  numbered,
  hideMobile = false,
}: {
  item: ItemBlock;
  image: ImageBlock;
  numbered?: number;
  hideMobile?: boolean;
}) {
  return (
    <div
      className={
        hideMobile
          ? "hidden items-start gap-8 lg:grid lg:grid-cols-(--cols) lg:gap-14"
          : "grid items-start gap-8 lg:grid-cols-(--cols) lg:gap-14"
      }
      style={{ "--cols": `${item.width ?? 227}fr ${image.width}fr` } as CSSProperties}
    >
      <div>
        {numbered ? (
          <>
            <h3 className="hidden text-[24px] font-bold leading-[29px] text-[#254d4f] lg:block">{item.title}</h3>
            <ol start={numbered} className="ms-[30px] list-decimal lg:hidden">
              <li className="text-[20px] font-bold leading-[24px] text-[#254d4f]">{item.title}</li>
            </ol>
          </>
        ) : (
          <EyebrowTitle item={item} />
        )}
        <Body text={item.text} lh="28" />
      </div>
      <OpticksImage image={image} />
    </div>
  );
}

function Note({ item }: { item: ItemBlock }) {
  return (
    <div className="overflow-hidden rounded-[8px]">
      <p className="bg-[#cceff6] p-3 text-base font-bold leading-[16.66px] text-[#254d4f]">{item.title}</p>
      <p className="bg-[#e6f7fb] p-3 text-base font-normal leading-6 text-[#254d4f]">{item.text}</p>
    </div>
  );
}

function Panels({ items }: { items: ItemBlock[] }) {
  return (
    <ul className="grid grid-cols-1 gap-6 lg:grid-cols-[272fr_218.67fr_218.67fr_218.67fr]">
      {items.map((item) => (
        <li key={item.title} className="overflow-hidden rounded-[8px]">
          <h3 className="bg-[#deecdd] p-3 text-base font-bold leading-[16.66px] text-[#254d4f]">{item.title}</h3>
          <p className="bg-[#eef5ee] p-3 text-base font-normal leading-6 text-[#254d4f]">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

function Columns({ items }: { items: ItemBlock[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {items.map((item) => (
        <div key={item.title}>
          <h3 className="text-[24px] font-bold leading-[29px] text-[#254d4f]">{item.title}</h3>
          {item.mobileList ? (
            <>
              <Body text={item.text} className="mt-6 hidden lg:block" />
              <BulletList list={item.mobileList} leadClass="mt-6 mb-6" />
            </>
          ) : (
            <Body text={item.text} />
          )}
        </div>
      ))}
    </div>
  );
}

type Unit =
  | { kind: "text"; text: string; mobileList?: MobileList }
  | { kind: "feature"; item: ItemBlock; image: ImageBlock }
  | { kind: "note"; item: ItemBlock }
  | { kind: "heading"; item: ItemBlock }
  | { kind: "panels"; items: ItemBlock[] }
  | { kind: "columns"; items: ItemBlock[] }
  | { kind: "image"; image: ImageBlock };

function unitsOf(section: CaseStudySection): Unit[] {
  const units: Unit[] = [];
  const blocks = section.blocks;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.type === "text") {
      units.push({ kind: "text", text: block.text, mobileList: block.mobileList });
      continue;
    }
    if (block.type === "image") {
      units.push({ kind: "image", image: block });
      continue;
    }
    if (block.type !== "item") continue;

    if (block.variant === "panel") {
      const items: ItemBlock[] = [block];
      let next = blocks[i + 1];
      while (next?.type === "item" && next.variant === "panel") {
        items.push(next);
        i++;
        next = blocks[i + 1];
      }
      units.push({ kind: "panels", items });
      continue;
    }
    if (block.variant === "note") {
      units.push({ kind: "note", item: block });
      continue;
    }
    if (block.variant === "heading") {
      units.push({ kind: "heading", item: block });
      continue;
    }
    const next = blocks[i + 1];
    if (next?.type === "image") {
      units.push({ kind: "feature", item: block, image: next });
      i++;
      continue;
    }
    const items: ItemBlock[] = [block];
    let following = blocks[i + 1];
    while (following?.type === "item" && !following.variant && blocks[i + 2]?.type !== "image") {
      items.push(following);
      i++;
      following = blocks[i + 1];
    }
    units.push({ kind: "columns", items });
  }

  return units;
}

function UnitView({ unit, lead = false }: { unit: Unit; lead?: boolean }) {
  switch (unit.kind) {
    case "text":
      if (unit.mobileList) {
        return (
          <>
            <Body text={unit.text} className="hidden lg:block" />
            <BulletList list={unit.mobileList} leadClass="" />
          </>
        );
      }
      return <Body text={unit.text} className="" lh={lead ? "24" : "26"} />;
    case "feature":
      return <Feature item={unit.item} image={unit.image} />;
    case "note":
      return <Note item={unit.item} />;
    case "heading":
      return (
        <div>
          <h3 className="text-[24px] font-bold leading-[29px] text-[#254d4f]">{unit.item.title}</h3>
          <Body text={unit.item.text} lh="28" />
        </div>
      );
    case "panels":
      return <Panels items={unit.items} />;
    case "columns":
      return <Columns items={unit.items} />;
    case "image":
      return <OpticksImage image={unit.image} />;
  }
}

/** Opticks AI Editor sections, measured from the desktop and mobile Figma frames. */
export function OpticksSection({ section }: { section: CaseStudySection }) {
  const units = unitsOf(section);
  const intro = section.id === "introduction";
  const research = section.id === "research-phase-1";
  const finalUi = section.id === "final-ui";
  const wire = section.id === "wireframing";
  const leadText = intro || wire || section.id === "problem-statement" || section.id === "solution" || section.id === "challenges" || section.id === "approach";

  const stack = intro
    ? "mt-12 flex flex-col gap-12 lg:mt-9 lg:gap-9"
    : wire
      ? "mt-12 flex flex-col gap-12 lg:mt-8 lg:gap-8"
      : "mt-8 flex flex-col gap-8";

  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className={sectionClass}>
      <SectionHeading id={section.id} title={section.title} research={research} />
      {research ? (
        <Research units={units} />
      ) : finalUi ? (
        <Final units={units} />
      ) : (
        <div className={stack}>
          {units.map((unit, index) => (
            <UnitView key={index} unit={unit} lead={leadText && unit.kind === "text"} />
          ))}
        </div>
      )}
    </section>
  );
}

function Research({ units }: { units: Unit[] }) {
  const lead = units.find((unit) => unit.kind === "heading");
  const features = units.filter((unit) => unit.kind === "feature");
  const competitors = features.slice(0, 3);
  const references = features.slice(3);

  return (
    <div className="mt-16 flex flex-col">
      {lead ? <UnitView unit={lead} /> : null}
      <div className="mt-14 flex flex-col gap-8">
        {competitors.map((unit, index) =>
          unit.kind === "feature" ? (
            <Feature key={index} item={unit.item} image={unit.image} numbered={index + 1} hideMobile={index === 2} />
          ) : (
            <UnitView key={index} unit={unit} />
          ),
        )}
      </div>
      <div className="mt-16 flex flex-col gap-12">
        {references.map((unit, index) => (
          <UnitView key={index} unit={unit} />
        ))}
      </div>
    </div>
  );
}

function Final({ units }: { units: Unit[] }) {
  const [intro, ...rest] = units;
  const clusters: Unit[][] = [];
  let cluster: Unit[] = [];

  rest.forEach((unit) => {
    const startsCluster =
      unit.kind === "feature" || (unit.kind === "columns" && unit.items.some((item) => item.eyebrow));
    if (startsCluster && cluster.length) {
      clusters.push(cluster);
      cluster = [];
    }
    cluster.push(unit);
  });
  if (cluster.length) clusters.push(cluster);

  const split = intro?.kind === "text" ? intro.text.split(" To maximize") : null;

  return (
    <div className="mt-8 flex flex-col gap-8">
      {intro?.kind === "text" && split && split.length === 2 ? (
        <>
          <div className="flex flex-col gap-6 lg:hidden">
            <p className="text-base font-normal leading-6 text-[#254d4f]">{split[0]}</p>
            <p className="text-base font-normal leading-6 text-[#254d4f]">{`To maximize${split[1]}`}</p>
          </div>
          <p className="hidden text-base font-normal leading-[26px] text-[#254d4f] lg:block">{intro.text}</p>
        </>
      ) : intro ? (
        <UnitView unit={intro} />
      ) : null}
      {clusters.map((items, index) => (
        <div key={index} className="flex flex-col gap-6">
          {items.map((unit, itemIndex) => {
            if (unit.kind === "feature") {
              return (
                <div key={itemIndex} className="flex flex-col gap-6">
                  <div>
                    <EyebrowTitle item={unit.item} />
                    <Body text={unit.item.text} lh="28" />
                  </div>
                  <OpticksImage image={unit.image} />
                </div>
              );
            }
            if (unit.kind === "columns" && unit.items[0]?.eyebrow) {
              const item = unit.items[0];
              return (
                <div key={itemIndex}>
                  <EyebrowTitle item={item} />
                  <Body text={item.text} />
                </div>
              );
            }
            return <UnitView key={itemIndex} unit={unit} />;
          })}
        </div>
      ))}
    </div>
  );
}
