import type { CSSProperties } from "react";

import { groupBlocks, type BlockUnit } from "@/lib/case-study";
import type { CaseStudySection, ImageItem, ItemBlock } from "@/types";

import { BlockImage } from "./BlockImage";

const sectionClass = "scroll-mt-[116px] lg:scroll-mt-[74px]";
const headingClass = "scroll-mt-[116px] text-[2rem] font-bold leading-[2.375rem] text-[#254d4f] lg:scroll-mt-[74px]";

function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <h2 id={`${id}-title`} className={headingClass}>
      {title}
    </h2>
  );
}

function CopySection({ section }: { section: CaseStudySection }) {
  const paragraphs = section.blocks.flatMap((block) => (block.type === "text" ? [block.text] : []));

  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className={sectionClass}>
      <SectionHeading id={section.id} title={section.title} />
      <div className="mt-9 flex min-w-0 flex-col gap-6">
        {paragraphs.map((text) => (
          <p key={text} className="text-[1rem] font-normal leading-6 text-[#254d4f]">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}

function PlainColumns({ section }: { section: CaseStudySection }) {
  const items = section.blocks.filter((block): block is ItemBlock => block.type === "item");

  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className={sectionClass}>
      <SectionHeading id={section.id} title={section.title} />
      <div className="mt-9 grid min-w-0 grid-cols-1 gap-9 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="flex min-w-0 flex-col gap-2 text-[#254d4f]">
            <h3 className="text-[1.5rem] font-bold leading-normal">{item.title}</h3>
            <p className="text-[1rem] font-normal leading-7">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CardMedia({ media }: { media: ImageItem }) {
  if (media.webm || media.mp4) {
    const mobile = media.mobile ?? { width: 340, height: 165, shiftX: -28 };
    return (
      <div
        className="intel-niko-frame relative h-[166px] w-full overflow-hidden rounded-[8px] lg:h-[462px]"
        style={{ outline: "4px solid #99e0ed", outlineOffset: "-4px" }}
      >
        <style>{`
          .intel-niko-frame video {
            position: absolute;
            top: 0;
            max-width: none;
            width: ${mobile.width}px;
            height: ${mobile.height}px;
            left: ${mobile.shiftX}px;
            object-fit: cover;
          }
          @media (min-width: 1024px) {
            .intel-niko-frame video {
              width: ${media.width}px;
              height: ${media.height}px;
              left: ${media.shiftX ?? -473}px;
            }
          }
        `}</style>
        <video autoPlay muted loop playsInline poster={media.poster} aria-label={media.alt}>
          {media.webm && <source src={media.webm} type="video/webm" />}
          {media.mp4 && <source src={media.mp4} type="video/mp4" />}
        </video>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: `${media.width} / ${media.height}` }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={media.src} alt={media.alt} className="absolute inset-0 size-full object-cover" />
    </div>
  );
}

function MediaCards({ section }: { section: CaseStudySection }) {
  const intro = section.blocks.find((block) => block.type === "text");
  const items = section.blocks.filter((block): block is ItemBlock => block.type === "item");

  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className={sectionClass}>
      <div className="flex flex-col gap-3">
        <SectionHeading id={section.id} title={section.title} />
        {intro?.type === "text" && <p className="text-[1rem] font-normal leading-6 text-[#254d4f]">{intro.text}</p>}
      </div>
      <div className="mt-9 grid min-w-0 grid-cols-1 items-stretch gap-6 lg:grid-cols-[465fr_527fr]">
        {items.map((item) => (
          <article
            key={item.title}
            className="flex min-w-0 flex-col gap-8 overflow-hidden rounded-[16px] bg-gradient-to-b from-[#fbfbff] to-[#efeeff] px-6 py-8"
          >
            <div className="flex flex-col gap-4 text-[#254d4f]">
              <h3 className="text-[1.25rem] font-semibold leading-6">{item.title}</h3>
              <p className="text-[0.875rem] font-normal leading-5">{item.text}</p>
            </div>
            {item.media && <CardMedia media={item.media} />}
          </article>
        ))}
      </div>
    </section>
  );
}

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

    case "cards": {
      if (unit.items.length > 0 && unit.items.every((item) => item.variant === "panel")) {
        return (
          <ul key={index} className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
            {unit.items.map((item, itemIndex) => (
              <li key={`${item.title}-${itemIndex}`} className="flex h-full min-w-0 flex-col overflow-hidden rounded-[8px]">
                <h3 className="bg-[#deecdd] px-3 py-3 text-[1rem] font-bold leading-[16.66px] text-[#254d4f]">{item.title}</h3>
                <div className="flex flex-1 flex-col gap-4 bg-[#eef5ee] p-3 text-[1rem] font-normal leading-6 text-[#254d4f]">
                  <p>{item.text}</p>
                  {item.note ? (
                    <p>
                      <span className="font-semibold">Object:</span> {item.note}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        );
      }

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
}

export function SectionContent({ section }: { section: CaseStudySection }) {
  if (section.layout === "copy") return <CopySection section={section} />;
  if (section.layout === "plain") return <PlainColumns section={section} />;
  if (section.layout === "media-cards") return <MediaCards section={section} />;

  const finalUi = section.id === "final-ui" || section.id === "design";

  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className={sectionClass}>
      <SectionHeading id={section.id} title={section.title} />
      <div className="mt-9 flex min-w-0 flex-col gap-8">
        {groupBlocks(section.blocks).map((unit, index) => renderUnit(unit, index, finalUi))}
      </div>
    </section>
  );
}
