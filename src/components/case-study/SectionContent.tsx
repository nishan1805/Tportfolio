import type { CSSProperties } from "react";

import { groupBlocks, type BlockUnit } from "@/lib/case-study";
import type { CaseStudySection } from "@/types";

import { BlockImage } from "./BlockImage";

const columns = (...widths: number[]) =>
  ({ "--cols": widths.map((width) => `minmax(0,${width}fr)`).join(" ") }) as CSSProperties;

function BodyText({ text }: { text: string }) {
  const lines = text.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  const bullets = lines.length > 1 && lines.every((line) => /^[-•]/.test(line));
  const numbered = lines.length > 1 && lines.every((line) => /^\d+[.)]/.test(line));

  if (bullets) {
    return (
      <ul className="list-disc space-y-2 pl-5 text-[1rem] font-normal leading-[1.625rem] text-[#254d4f]">
        {lines.map((line) => (
          <li key={line}>{line.replace(/^[-•]\s*/, "")}</li>
        ))}
      </ul>
    );
  }

  if (numbered) {
    return (
      <ol className="list-decimal space-y-2 pl-5 text-[1rem] font-normal leading-[1.625rem] text-[#254d4f]">
        {lines.map((line) => (
          <li key={line}>{line.replace(/^\d+[.)]\s*/, "")}</li>
        ))}
      </ol>
    );
  }

  return <p className="text-[1rem] font-normal leading-[1.625rem] text-[#254d4f]">{text}</p>;
}

function renderUnit(unit: BlockUnit, index: number, finalUi: boolean) {
  switch (unit.kind) {
    case "text":
      return <BodyText key={index} text={unit.text} />;

    case "image":
      return <BlockImage key={index} image={unit.image} radius={finalUi ? "lg" : "sm"} />;

    case "images":
      return (
        <div key={index} className="grid min-w-0 gap-4 md:grid-cols-(--cols)" style={columns(...unit.items.map((item) => item.width))}>
          {unit.items.map((item) => (
            <BlockImage key={item.alt} image={item} radius={finalUi ? "lg" : "sm"} />
          ))}
        </div>
      );

    case "feature": {
      const { item, image, imageFirst } = unit;
      const textWidth = item.width ?? 232;
      const [label, title] = item.title.includes(" · ") ? item.title.split(" · ") : [undefined, item.title];
      const text = (
        <div className="flex min-w-0 flex-col gap-4 text-[#254d4f]">
          <div>
            {label && <p className="mb-3 text-[0.75rem] font-medium leading-normal text-[#8bb3b5]">{label}</p>}
            <h3 className="text-[1.5rem] font-bold leading-8 text-[#193334]">{title}</h3>
          </div>
          <p className="text-[1rem] font-normal leading-[1.625rem]">{item.text}</p>
        </div>
      );

      return (
        <div
          key={index}
          className="grid min-w-0 items-start gap-6 md:grid-cols-(--cols) md:gap-8"
          style={columns(...(imageFirst ? [image.width, textWidth] : [textWidth, image.width]))}
        >
          {imageFirst ? <BlockImage image={image} radius={finalUi ? "lg" : "sm"} /> : text}
          {imageFirst ? text : <BlockImage image={image} radius={finalUi ? "lg" : "sm"} />}
        </div>
      );
    }

    case "cards":
      return (
        <ul key={index} className="grid min-w-0 gap-4 sm:grid-cols-2">
          {unit.items.map(({ title, text }, itemIndex) => {
            if (title === "Summary") {
              return (
                <li key={`${title}-${itemIndex}`} className="col-span-full overflow-hidden rounded-[8px] border border-[#d8e6e6]">
                  <p className="border-b border-[#d8e6e6] bg-[#ecf2f3] px-3 py-3 text-[0.875rem] font-semibold leading-[1.0625rem] text-[#3e8083]">
                    Summary
                  </p>
                  <p className="px-3 py-3 text-[1rem] font-normal leading-6 text-[#254d4f]">{text}</p>
                </li>
              );
            }

            return (
              <li key={`${title}-${itemIndex}`} className="rounded-[16px] border border-[#d8e6e6] bg-white p-6 text-[#254d4f]">
                <h3 className="text-[1.5rem] font-bold leading-8 text-[#254d4f]">{title}</h3>
                <p className="mt-3 text-[0.875rem] font-normal leading-5">{text}</p>
              </li>
            );
          })}
        </ul>
      );
  }
}

export function SectionContent({ section }: { section: CaseStudySection }) {
  const finalUi = section.id === "final-ui" || section.id === "design";

  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-[116px] lg:scroll-mt-[74px]">
      <h2 id={`${section.id}-title`} className="scroll-mt-[116px] text-[2rem] font-bold leading-[2.375rem] text-[#254d4f] lg:scroll-mt-[74px]">
        {section.title}
      </h2>
      <div className="mt-9 flex min-w-0 flex-col gap-8">
        {groupBlocks(section.blocks).map((unit, index) => renderUnit(unit, index, finalUi))}
      </div>
    </section>
  );
}
