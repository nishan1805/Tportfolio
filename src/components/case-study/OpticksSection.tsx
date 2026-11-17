import type { CSSProperties } from "react";

import type { CaseStudySection, ImageBlock, ItemBlock } from "@/types";

import { BlockImage } from "./BlockImage";

const sectionClass = "scroll-mt-[116px] lg:scroll-mt-[74px]";
const headingClass =
  "scroll-mt-[116px] text-[2rem] font-bold leading-[38px] text-[#254d4f] lg:scroll-mt-[74px]";

function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <h2 id={`${id}-title`} className={headingClass}>
      {title}
    </h2>
  );
}

function Body({ text, className = "mt-6" }: { text: string; className?: string }) {
  return <p className={`text-base font-normal leading-[26px] text-[#254d4f] ${className}`}>{text}</p>;
}

function EyebrowTitle({ item }: { item: ItemBlock }) {
  return (
    <div>
      {item.eyebrow ? <p className="text-[14px] font-medium leading-normal text-[#65999c]">{item.eyebrow}</p> : null}
      <h3 className={`text-[24px] font-bold leading-[29px] text-[#254d4f] ${item.eyebrow ? "mt-1" : ""}`}>{item.title}</h3>
    </div>
  );
}

function Feature({ item, image }: { item: ItemBlock; image: ImageBlock }) {
  return (
    <div
      className="grid items-start gap-8 lg:grid-cols-(--cols) lg:gap-14"
      style={{ "--cols": `${item.width ?? 227}fr ${image.width}fr` } as CSSProperties}
    >
      <div>
        <EyebrowTitle item={item} />
        <Body text={item.text} />
      </div>
      <BlockImage image={image} />
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
          <Body text={item.text} />
        </div>
      ))}
    </div>
  );
}

type Unit =
  | { kind: "text"; text: string }
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
      units.push({ kind: "text", text: block.text });
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

function UnitView({ unit }: { unit: Unit }) {
  switch (unit.kind) {
    case "text":
      return <Body text={unit.text} className="" />;
    case "feature":
      return <Feature item={unit.item} image={unit.image} />;
    case "note":
      return <Note item={unit.item} />;
    case "heading":
      return (
        <div>
          <h3 className="text-[24px] font-bold leading-[29px] text-[#254d4f]">{unit.item.title}</h3>
          <Body text={unit.item.text} />
        </div>
      );
    case "panels":
      return <Panels items={unit.items} />;
    case "columns":
      return <Columns items={unit.items} />;
    case "image":
      return <BlockImage image={unit.image} />;
  }
}

/** Opticks AI Editor sections, measured from the desktop and mobile Figma frames. */
export function OpticksSection({ section }: { section: CaseStudySection }) {
  const units = unitsOf(section);
  const intro = section.id === "introduction";
  const research = section.id === "research-phase-1";
  const finalUi = section.id === "final-ui";

  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className={sectionClass}>
      <SectionHeading id={section.id} title={section.title} />
      {research ? (
        <Research units={units} />
      ) : finalUi ? (
        <Final units={units} />
      ) : (
        <div className={intro ? "mt-9 flex flex-col gap-9" : "mt-8 flex flex-col gap-8"}>
          {units.map((unit, index) => (
            <UnitView key={index} unit={unit} />
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
        {competitors.map((unit, index) => (
          <UnitView key={index} unit={unit} />
        ))}
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

  return (
    <div className="mt-8 flex flex-col gap-8">
      {intro ? <UnitView unit={intro} /> : null}
      {clusters.map((items, index) => (
        <div key={index} className="flex flex-col gap-6">
          {items.map((unit, itemIndex) => {
            if (unit.kind === "feature") {
              return (
                <div key={itemIndex} className="flex flex-col gap-6">
                  <div>
                    <EyebrowTitle item={unit.item} />
                    <Body text={unit.item.text} />
                  </div>
                  <BlockImage image={unit.image} />
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
