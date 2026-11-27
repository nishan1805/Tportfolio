import { Fragment, type CSSProperties } from "react";

import { groupBlocks, type BlockUnit } from "@/lib/case-study";
import { cn } from "@/lib/utils";
import type { CaseStudySection, FrameBlock, FrameSpec, ImageItem, ItemBlock } from "@/types";

import { BlockImage } from "./BlockImage";
import { RaipurMobileCard } from "./RaipurMobileCard";

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
      <div className="mt-9 flex min-w-0 flex-col gap-7">
        {paragraphs.map((text) => (
          <p key={text} className="text-[1rem] font-normal leading-7 text-[#254d4f]">
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
        {intro?.type === "text" && <p className="text-[1rem] font-normal leading-7 text-[#254d4f]">{intro.text}</p>}
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
      <ul className="list-disc space-y-2 pl-5 text-[1rem] font-normal leading-7 text-[#254d4f]">
        {lines.map((line) => (
          <li key={line}>{line.replace(/^[-•]\s*/, "")}</li>
        ))}
      </ul>
    );
  }

  if (numbered) {
    return (
      <ol className="list-decimal space-y-2 pl-5 text-[1rem] font-normal leading-7 text-[#254d4f]">
        {lines.map((line) => (
          <li key={line}>{line.replace(/^\d+[.)]\s*/, "")}</li>
        ))}
      </ol>
    );
  }

  return <p className="text-[1rem] font-normal leading-7 text-[#254d4f]">{text}</p>;
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

    case "list":
      return (
        <ul key={index} className="list-disc text-[1rem] leading-6 text-[#254d4f]">
          {unit.list.items.map((item, itemIndex) => (
            <li
              key={`${item.lead ?? ""}-${item.text}`}
              className={itemIndex < unit.list.items.length - 1 ? "mb-4" : undefined}
              style={{ marginLeft: unit.list.indent }}
            >
              {item.lead ? <span className="font-semibold">{item.lead}</span> : null}
              {item.lead ? ": " : null}
              {item.text}
            </li>
          ))}
        </ul>
      );

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
          <ul key={index} className={`grid min-w-0 grid-cols-1 gap-6 lg:items-stretch ${unit.items.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
            {unit.items.map((item, itemIndex) => (
              <li key={`${item.title}-${itemIndex}`} className="flex h-full min-w-0 flex-col overflow-hidden rounded-[8px]">
                <h3 className="bg-[#deecdd] px-3 py-3 text-[1rem] font-bold leading-[16.66px] text-[#254d4f]">{item.title}</h3>
                <div className="flex flex-1 flex-col gap-4 bg-[#eef5ee] p-3 text-[1rem] font-normal leading-7 text-[#254d4f]">
                  <p>{item.text}</p>
                  {item.note ? (
                    <div className="flex flex-col gap-2">
                      <p className="font-bold">Objective:</p>
                      <p>{item.note}</p>
                    </div>
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
                <li key={`${title}-${itemIndex}`} className="col-span-full overflow-hidden rounded-[8px]">
                  <p className="site-heading bg-[#cceff6] p-3 text-[1rem] leading-[16.66px] text-[#254d4f]">Summary</p>
                  <p className="bg-[#e6f7fb] p-3 text-[1rem] font-normal leading-6 text-[#254d4f]">{text}</p>
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

function ComponentsGrid({ section }: { section: CaseStudySection }) {
  const items = section.blocks.filter((block): block is ItemBlock => block.type === "item");
  const columnItems = items.filter((item) => item.title !== "List of Components");
  const lead = items.find((item) => item.title === "List of Components");
  const tiles = section.blocks.flatMap((block) => (block.type === "image" ? [block] : []));
  const footnote = section.blocks.flatMap((block) => (block.type === "text" ? [block.text] : []));

  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className={sectionClass}>
      <SectionHeading id={section.id} title={section.title} />
      <div className="mt-9 grid min-w-0 grid-cols-1 gap-9 lg:grid-cols-3 lg:gap-9">
        {columnItems.map((item) => (
          <div key={item.title} className="flex min-w-0 flex-col gap-2 text-[#254d4f]">
            <h3 className="text-[1.5rem] font-bold leading-normal">{item.title}</h3>
            <p className="text-[1rem] font-normal leading-7">{item.text}</p>
          </div>
        ))}
      </div>
      {lead && (
        <div className="mt-9 flex flex-col gap-2 text-[#254d4f]">
          <h3 className="text-[1.5rem] font-bold leading-normal">{lead.title}</h3>
          <p className="text-[1rem] font-normal leading-7">{lead.text}</p>
        </div>
      )}
      <div className="mt-9 grid min-w-0 grid-cols-1 gap-x-6 gap-y-9 lg:grid-cols-2">
        {tiles.map((tile) => (
          <figure key={tile.alt} className="flex min-w-0 flex-col gap-3 text-[#254d4f]">
            <figcaption className="text-[1.25rem] font-semibold leading-6">{tile.alt}</figcaption>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={tile.src} alt={`${tile.alt} component`} width={tile.width} height={tile.height} className="h-auto w-full" />
          </figure>
        ))}
      </div>
      {footnote.map((text) => (
        <p key={text} className="mt-9 text-[1rem] font-normal leading-7 text-[#254d4f]">
          {text}
        </p>
      ))}
    </section>
  );
}

/**
 * Icon sheet from Figma node 1:22083, placed in the green panels
 * 1:22082 (desktop, 1012×353) and 301159:19808 (mobile, 360×353).
 */
function IconographySheet({ image }: { image: ImageItem }) {
  return (
    <div className="iconography-sheet relative w-full overflow-hidden rounded-[8px] bg-[#eef5ee]">
      <style>{`
        .iconography-sheet { aspect-ratio: 360 / 353; }
        .iconography-sheet img {
          position: absolute;
          left: ${(49 / 360) * 100}%;
          top: ${(44 / 353) * 100}%;
          width: ${(570.846 / 360) * 100}%;
          height: ${(265.167 / 353) * 100}%;
          max-width: none;
          object-fit: cover;
        }
        @media (min-width: 1024px) {
          .iconography-sheet {
            aspect-ratio: 1012 / 353;
            max-width: 1012px;
          }
          .iconography-sheet img {
            left: ${(219 / 1012) * 100}%;
            top: ${(44 / 353) * 100}%;
            width: ${(573 / 1012) * 100}%;
            height: ${(266 / 353) * 100}%;
          }
        }
      `}</style>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image.src} alt={image.alt} />
    </div>
  );
}

function IconTile({ section }: { section: CaseStudySection }) {
  const text = section.blocks.find((block) => block.type === "text");
  const image = section.blocks.find((block) => block.type === "image");

  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className={sectionClass}>
      <div className="flex min-w-0 flex-col gap-8">
        <h2
          id={`${section.id}-title`}
          className="scroll-mt-[116px] text-[1.5rem] font-bold leading-[29px] text-[#254d4f] lg:scroll-mt-[74px]"
        >
          {section.title}
        </h2>
        {text?.type === "text" ? <p className="text-[1rem] font-normal leading-7 text-[#254d4f]">{text.text}</p> : null}
        {image?.type === "image" ? <IconographySheet image={image} /> : null}
      </div>
    </section>
  );
}

function StoryLayout({ section }: { section: CaseStudySection }) {
  const texts = section.blocks.flatMap((block) => (block.type === "text" ? [block.text] : []));
  const items = section.blocks.filter((block): block is ItemBlock => block.type === "item");
  const images = section.blocks.flatMap((block) => (block.type === "image" ? [block] : []));
  const [core, factorsIntro, factors = ""] = texts;
  const [lead, loops, ...cards] = items;
  const [panel, ...cardImages] = images;
  const list = factors.split(/(?<=\.)\s+/).filter(Boolean);

  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className={sectionClass}>
      <div className="flex flex-col gap-3">
        <SectionHeading id={section.id} title={section.title} />
        <p className="text-[1rem] font-normal leading-7 text-[#254d4f]">{core}</p>
      </div>

      <div className="mt-12 flex min-w-0 flex-col items-stretch gap-8 lg:min-h-[403px] lg:flex-row lg:items-center lg:gap-14">
        <div className="flex min-w-0 flex-1 flex-col gap-4 text-[#254d4f]">
          <div className="flex flex-col gap-6">
            <h3 className="text-[1.5rem] font-bold leading-normal">{lead?.title}</h3>
            <p className="text-[1rem] font-normal leading-7">{lead?.text}</p>
          </div>
          <p className="text-[1rem] font-normal leading-7">{factorsIntro}</p>
          <ol className="list-decimal ps-[30px] text-[1.25rem] font-semibold leading-normal">
            {list.map((entry) => (
              <li key={entry} className="mb-3 last:mb-0">
                {entry}
              </li>
            ))}
          </ol>
        </div>
        {panel && (
          <div className="w-full shrink-0 overflow-hidden rounded-[8px] bg-[#eaeefb] lg:w-[459px]" style={{ aspectRatio: `${panel.width} / ${panel.height}` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={panel.src} alt={panel.alt} width={panel.width} height={panel.height} className="size-full object-cover" />
          </div>
        )}
      </div>

      <div className="mt-12 flex min-w-0 flex-col gap-8">
        <div className="flex flex-col gap-6 text-[#254d4f]">
          <h3 className="text-[1.5rem] font-bold leading-normal">{loops?.title}</h3>
          <p className="text-[1rem] font-normal leading-7">{loops?.text}</p>
        </div>
        <div className="grid min-w-0 grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {cards.map((card, index) => {
            const image = cardImages[index];
            return (
              <article
                key={card.title}
                className="flex min-w-0 flex-col gap-8 rounded-[16px] bg-gradient-to-b from-[#fbfbff] to-[#efeeff] px-6 py-8 text-[#254d4f]"
              >
                <div className="flex flex-col gap-4">
                  <h4 className="text-[1.25rem] font-semibold leading-normal">{card.title}</h4>
                  <p className="text-[0.875rem] font-normal leading-6">{card.text}</p>
                </div>
                {image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={image.src} alt={image.alt} width={image.width} height={image.height} className="h-auto w-full rounded-[8px]" />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PhotoPair({ section }: { section: CaseStudySection }) {
  const paragraphs = section.blocks.flatMap((block) => (block.type === "text" ? [block.text] : []));
  const photos = section.blocks.flatMap((block) => (block.type === "images" ? block.items : []));
  const positions = ["50% 50%", "50% 41%"];

  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className={sectionClass}>
      <SectionHeading id={section.id} title={section.title} />
      <div className="mt-9 flex min-w-0 flex-col gap-9">
        {paragraphs.map((text) => (
          <p key={text} className="text-[1rem] font-normal leading-7 text-[#254d4f]">
            {text}
          </p>
        ))}
        <div className="grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2">
          {photos.map((photo, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={photo.alt}
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="aspect-[496/377] w-full rounded-[8px] border-4 border-[#d6def7] object-cover"
              style={{ objectPosition: positions[index] ?? "50% 50%" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SideText({ item, raipur }: { item: ItemBlock; raipur?: boolean }) {
  const [label, title] = item.title.includes(" · ") ? item.title.split(" · ") : [undefined, item.title];
  const [noteHead, ...noteList] = (item.note ?? "").split(/\n+/).filter(Boolean);
  const logos = item.title === "Competition Analysis";

  return (
    <div className="flex min-w-0 flex-col gap-6 text-[#254d4f]">
      <div className="flex flex-col gap-2">
        {label && <p className="text-[0.75rem] font-medium leading-4 text-[#8bb3b5]">{label}</p>}
        <h3 className={raipur ? "text-[1.5rem] font-bold leading-[29px] lg:leading-normal" : "text-[1.5rem] font-bold leading-normal"}>{title}</h3>
      </div>
      <p className="text-[1rem] font-normal leading-7">{item.text}</p>
      {noteHead && <p className="text-[1rem] font-normal leading-7">{noteHead}</p>}
      {noteList.length > 0 && (
        <ol className="list-decimal ps-6 text-[1rem] font-normal leading-7">
          {noteList.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ol>
      )}
      {logos && (
        <div className="flex items-start gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/case-studies/telescope-overview/competition-1.webp" alt="" width={36} height={36} className="size-9" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/case-studies/telescope-overview/competition-2.webp" alt="" width={36} height={36} className="size-9 rounded-[8px] object-cover" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/case-studies/telescope-overview/competition-3.webp" alt="" width={28} height={36} className="h-9 w-7" />
        </div>
      )}
    </div>
  );
}

function StudyMedia({ image, hideOnMobile }: { image: ImageItem; hideOnMobile?: boolean }) {
  if (!image.raipurCard) {
    return <BlockImage image={image} radius="sm" className={hideOnMobile ? "hidden lg:block" : undefined} />;
  }
  return (
    <>
      <RaipurMobileCard spec={image.raipurCard} alt={image.alt} />
      <BlockImage image={image} radius="sm" className="hidden lg:block" />
    </>
  );
}

function stackHead(sectionId: string, mobile: boolean) {
  if (!mobile) {
    return {
      wrap: "flex flex-col gap-2",
      title: "text-[1.5rem] font-bold leading-normal",
      body: "text-[1rem] font-normal leading-7",
    };
  }
  const title =
    sectionId === "ideation"
      ? "text-[20px] font-bold leading-[24px] lg:text-[1.5rem] lg:leading-normal"
      : "text-[1.5rem] font-bold leading-[29px] lg:leading-normal";
  const wrap =
    sectionId === "user-research" || sectionId === "ideation"
      ? "flex flex-col gap-6 lg:gap-2"
      : sectionId === "design"
        ? "flex flex-col gap-3 lg:gap-2"
        : "flex flex-col gap-2";
  return { wrap, title, body: "text-[1rem] font-normal leading-7" };
}

function stackSpace(sectionId: string, mobile: boolean, side: boolean) {
  if (!mobile) return { mt: "mt-9", gap: side ? "gap-12" : "gap-9" };
  if (sectionId === "user-research") return { mt: "mt-4 lg:mt-9", gap: "gap-12 lg:gap-9" };
  if (sectionId === "ideation") return { mt: "mt-12 lg:mt-9", gap: "gap-12 lg:gap-9" };
  // Design is already gap-12 on desktop (side-by-side rows). Keep that gap at both breakpoints.
  if (sectionId === "design") return { mt: "mt-12 lg:mt-9", gap: "gap-12" };
  return { mt: "mt-9", gap: side ? "gap-12" : "gap-9" };
}

function StackedLayout({ section, variant }: { section: CaseStudySection; variant?: "raipur" }) {
  type Cell = { item: ItemBlock; images: ImageItem[] };
  const cells: Cell[] = [];
  const lead: string[] = [];
  const blocks = section.blocks;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.type === "text" && cells.length === 0) lead.push(block.text);
    else if (block.type === "item") {
      const next = blocks[i + 1];
      if (next?.type === "image") {
        cells.push({ item: block, images: [next] });
        i++;
      } else if (next?.type === "images") {
        cells.push({ item: block, images: next.items });
        i++;
      } else cells.push({ item: block, images: [] });
    }
  }

  // Cells share a row while their Figma widths (text or media, whichever is wider) still fit 1016px.
  const cellWidth = (cell: Cell) =>
    Math.max(cell.item.width ?? 1016, cell.images.reduce((sum, image) => sum + image.width, 0) + Math.max(cell.images.length - 1, 0) * 24);
  const rows: Cell[][] = [];
  for (const cell of cells) {
    const row = rows[rows.length - 1];
    const used = row ? row.reduce((sum, entry) => sum + cellWidth(entry), 0) + (row.length - 1) * 36 : 0;
    if (row && used + 36 + cellWidth(cell) <= 1016 + 4) row.push(cell);
    else rows.push([cell]);
  }

  const isSide = (row: Cell[]) =>
    row.length === 1 && row[0].images.length === 1 && (row[0].item.width ?? 1016) < 400 && row[0].images[0].width > 600;

  const raipur = variant === "raipur";
  const space = stackSpace(section.id, raipur, rows.some(isSide));
  const head = stackHead(section.id, raipur);
  const cols = raipur ? "lg:grid-cols-(--cols)" : "md:grid-cols-(--cols)";
  const leadClass =
    raipur && section.id === "introduction"
      ? "text-[1rem] font-normal leading-[24px] text-[#254d4f] lg:leading-7"
      : "text-[1rem] font-normal leading-7 text-[#254d4f]";
  const rowGap = raipur && section.id === "user-research" ? "gap-12 lg:gap-9" : "gap-9";

  const renderImages = (images: ImageItem[]) => {
    // The storyboard shares a row with the journey card and has no mobile card, so it stays desktop-only.
    const hideBare = raipur && images.some((image) => image.raipurCard);
    if (images.length === 1) {
      return <StudyMedia image={images[0]} hideOnMobile={hideBare && !images[0].raipurCard} />;
    }
    return (
      <div className={`grid min-w-0 gap-6 ${cols}`} style={columns(...images.map((image) => image.width))}>
        {images.map((image) => (
          <Fragment key={image.alt}>
            <StudyMedia image={image} hideOnMobile={hideBare && !image.raipurCard} />
          </Fragment>
        ))}
      </div>
    );
  };

  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className={sectionClass}>
      <SectionHeading id={section.id} title={section.title} />
      <div className={`${space.mt} flex min-w-0 flex-col ${space.gap}`}>
        {lead.map((text) => (
          <p key={text} className={leadClass}>
            {text}
          </p>
        ))}
        {rows.map((row) => {
          const [only] = row;
          if (isSide(row)) {
            return (
              <div
                key={only.item.title}
                className={`grid min-w-0 grid-cols-1 items-start gap-8 ${cols}`}
                style={columns(only.item.width ?? 232, only.images[0].width)}
              >
                <SideText item={only.item} raipur={raipur} />
                <StudyMedia image={only.images[0]} />
              </div>
            );
          }
          return (
          <div
            key={row.map((cell) => cell.item.title).join("|")}
            className={`grid min-w-0 grid-cols-1 ${rowGap} ${cols}`}
            style={columns(...row.map((cell) => cell.item.width ?? 1016))}
          >
            {row.map(({ item, images }) => (
              <div key={item.title} className="flex min-w-0 flex-col gap-8 text-[#254d4f]">
                <div className={head.wrap}>
                  <h3 className={head.title}>{item.title}</h3>
                  <p className={head.body}>{item.text}</p>
                </div>
                {images.length > 0 && renderImages(images)}
              </div>
            ))}
          </div>
          );
        })}
      </div>
    </section>
  );
}

function PlainGrid({ section, variant }: { section: CaseStudySection; variant?: "raipur" }) {
  const lead = section.blocks.flatMap((block) => (block.type === "text" ? [block.text] : []));
  const items = section.blocks.filter((block): block is ItemBlock => block.type === "item");
  const raipur = variant === "raipur";
  const goals = section.id === "project-goals-and-requirements";
  const mt = !raipur ? "mt-9" : goals ? "mt-4 lg:mt-9" : "mt-3 lg:mt-9";
  const leadClass = raipur
    ? "text-[1rem] font-normal leading-[24px] text-[#254d4f] lg:leading-7"
    : "text-[1rem] font-normal leading-7 text-[#254d4f]";
  const title = !raipur
    ? "text-[1.25rem] font-bold leading-normal"
    : goals
      ? "text-[1.25rem] font-bold leading-[24px] lg:leading-normal"
      : "text-[24px] font-bold leading-[29px] lg:text-[1.25rem] lg:leading-normal";

  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className={raipur && goals ? `${sectionClass} -mt-2 lg:mt-0` : sectionClass}
    >
      <SectionHeading id={section.id} title={section.title} />
      <div className={`${mt} flex min-w-0 flex-col gap-9`}>
        {lead.map((text) => (
          <p key={text} className={leadClass}>
            {text}
          </p>
        ))}
        <div className="grid min-w-0 grid-cols-1 gap-x-9 gap-y-9 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="flex min-w-0 flex-col gap-2 text-[#254d4f]">
              <h3 className={title}>{item.title}</h3>
              <p className="text-[1rem] font-normal leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionContent({ section, variant }: { section: CaseStudySection; variant?: "raipur" }) {
  if (section.layout === "copy") return <CopySection section={section} />;
  if (section.layout === "plain") return <PlainColumns section={section} />;
  if (section.layout === "media-cards") return <MediaCards section={section} />;
  if (section.layout === "plain-grid") return <PlainGrid section={section} variant={variant} />;
  if (section.layout === "stacked") return <StackedLayout section={section} variant={variant} />;
  if (section.layout === "story") return <StoryLayout section={section} />;
  if (section.layout === "photo-pair") return <PhotoPair section={section} />;
  if (section.layout === "components") return <ComponentsGrid section={section} />;
  if (section.layout === "icon-tile") return <IconTile section={section} />;

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
