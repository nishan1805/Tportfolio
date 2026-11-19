import type { CSSProperties } from "react";

import { groupBlocks, type BlockUnit } from "@/lib/case-study";
import { cn } from "@/lib/utils";
import type { CaseStudySection, FrameBlock, FrameSpec, ImageItem, ItemBlock } from "@/types";

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

function FrameCanvas({ spec, cap }: { spec: FrameSpec; cap: boolean }) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: `${spec.width} / ${spec.height}`,
        maxWidth: cap ? spec.width : undefined,
        background: spec.background,
        borderRadius: spec.radius ?? 8,
      }}
    >
      {spec.items.map((item) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`${item.src}-${item.x}-${item.y}`}
          src={item.src}
          alt={item.alt}
          className="absolute object-cover"
          style={{
            left: `${(item.x / spec.width) * 100}%`,
            top: `${(item.y / spec.height) * 100}%`,
            width: `${(item.width / spec.width) * 100}%`,
            height: `${(item.height / spec.height) * 100}%`,
            maxWidth: "none",
            borderRadius: item.radius,
            boxShadow: item.border ? `0 0 0 ${item.borderWidth ?? 4}px ${item.border}` : undefined,
          }}
        />
      ))}
    </div>
  );
}

function FrameView({ frame }: { frame: FrameBlock }) {
  if (!frame.mobile) return <FrameCanvas spec={frame} cap={frame.cap ?? true} />;

  return (
    <div className="min-w-0">
      <div className="lg:hidden">
        <FrameCanvas spec={frame.mobile} cap={frame.mobile.cap ?? false} />
      </div>
      <div className="hidden lg:block">
        <FrameCanvas spec={frame} cap={frame.cap ?? true} />
      </div>
    </div>
  );
}

function FeatureText({ item }: { item: ItemBlock }) {
  const [label, title] = item.title.includes(" · ") ? item.title.split(" · ") : [undefined, item.title];

  return (
    <div>
      <div className="flex min-w-0 flex-col gap-4 text-[#254d4f]">
        <div>
          {label && <p className="text-base font-medium leading-4 text-[#254d4f]">{label}</p>}
          <h3
            className={cn(
              "text-[1.5rem] font-bold",
              label ? "mt-4 leading-[29px] text-[#254d4f]" : "leading-8 text-[#193334]",
            )}
          >
            {title}
          </h3>
        </div>
        <p className={cn("text-base font-normal", label ? "leading-7" : "leading-[1.625rem]")}>{item.text}</p>
      </div>
      {item.note ? <p className="mt-8 text-base font-normal leading-7 text-[#254d4f]">{item.note}</p> : null}
      {item.footerImage?.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.footerImage.src}
          alt={item.footerImage.alt}
          width={item.footerImage.width}
          height={item.footerImage.height}
          className="mt-8 h-9 w-[132px] max-w-full object-contain object-left"
        />
      ) : null}
    </div>
  );
}

function renderUnit(unit: BlockUnit, index: number, finalUi: boolean) {
  switch (unit.kind) {
    case "text":
      return <BodyText key={index} text={unit.text} />;

    case "image":
      return <BlockImage key={index} image={unit.image} radius={finalUi ? "lg" : "sm"} />;

    case "frame":
      return <FrameView key={index} frame={unit.frame} />;

    case "images":
      return (
        <div key={index} className="grid min-w-0 gap-4 md:grid-cols-(--cols)" style={columns(...unit.items.map((item) => item.width))}>
          {unit.items.map((item) => (
            <BlockImage key={item.alt} image={item} radius={finalUi ? "lg" : "sm"} />
          ))}
        </div>
      );

    case "feature": {
      const { item, image, frame, imageFirst } = unit;
      const visualWidth = frame?.width ?? image?.width ?? 1;
      const textWidth = item.width ?? 232;
      const pairAtLg = frame?.pairAt === "lg" || image?.pairAt === "lg";
      const text = <FeatureText item={item} />;
      const visual = frame ? <FrameView frame={frame} /> : image ? <BlockImage image={image} radius={finalUi ? "lg" : "sm"} /> : null;

      return (
        <div
          key={index}
          className={cn(
            "grid min-w-0 items-start gap-8",
            pairAtLg ? "lg:grid-cols-(--cols) lg:gap-14" : "md:grid-cols-(--cols) md:gap-8",
            item.align === "center" && (pairAtLg ? "lg:items-center" : "md:items-center"),
          )}
          style={columns(...(imageFirst ? [visualWidth, textWidth] : [textWidth, visualWidth]))}
        >
          {imageFirst ? visual : text}
          {imageFirst ? text : visual}
        </div>
      );
    }

    case "cards": {
      if (unit.items.length > 0 && unit.items.every((item) => item.variant === "heading")) {
        return (
          <div key={index} className="flex min-w-0 flex-col gap-8">
            {unit.items.map((item) => (
              <div key={item.title}>
                <h3 className="text-[1.5rem] font-bold leading-[29px] text-[#254d4f]">{item.title}</h3>
                <p className="mt-8 text-base font-normal leading-7 text-[#254d4f]">{item.text}</p>
              </div>
            ))}
          </div>
        );
      }

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
      <div className="mt-9 flex min-w-0 flex-col" style={{ gap: section.blockGap ?? 32 }}>
        {groupBlocks(section.blocks).map((unit, index) => renderUnit(unit, index, finalUi))}
      </div>
    </section>
  );
}
