import type { CaseStudySection, ImageBlock, ListBlock, TextBlock } from "@/types";

import { BlockImage } from "./BlockImage";

const heading = "scroll-mt-[116px] text-[2rem] font-bold leading-[2.375rem] text-[#254d4f] lg:scroll-mt-[74px]";
const sectionClass = "scroll-mt-[116px] lg:scroll-mt-[74px]";

function Emphasis({ text, emphasis }: { text: string; emphasis?: string }) {
  if (!emphasis || !text.includes(emphasis)) return text;
  const [before, after] = text.split(emphasis);
  return (
    <>
      {before}
      <span className="font-semibold">{emphasis}</span>
      {after}
    </>
  );
}

function DiscList({ list }: { list: ListBlock }) {
  return (
    <ul className="list-disc text-[1rem] font-normal leading-6 text-[#254d4f]">
      {list.items.map((item, index) => (
        <li
          key={`${item.lead ?? ""}-${item.text}`}
          className={index < list.items.length - 1 ? "mb-4" : undefined}
          style={{ marginLeft: list.indent }}
        >
          {item.lead ? <span className="font-semibold">{item.lead}</span> : null}
          {item.lead ? ": " : null}
          {item.text}
        </li>
      ))}
    </ul>
  );
}

function textsOf(section: CaseStudySection) {
  return section.blocks.filter((block): block is TextBlock => block.type === "text");
}

function listOf(section: CaseStudySection) {
  return section.blocks.find((block): block is ListBlock => block.type === "list");
}

function imagesOf(section: CaseStudySection) {
  return section.blocks.filter((block): block is ImageBlock => block.type === "image");
}

/** Media Planner section rhythm. Other case studies stay on SectionContent. */
export function MediaPlannerSections({ section }: { section: CaseStudySection }) {
  const texts = textsOf(section);
  const list = listOf(section);
  const images = imagesOf(section);

  if (section.id === "problem-statement") {
    const summary = section.blocks.find((block) => block.type === "item");
    return (
      <section id={section.id} aria-labelledby={`${section.id}-title`} className={sectionClass}>
        <h2 id={`${section.id}-title`} className={heading}>
          {section.title}
        </h2>
        <div className="mt-9 flex flex-col gap-6">
          {texts.map((block) => (
            <p key={block.text} className="text-[1rem] font-normal leading-6 text-[#254d4f]">
              <Emphasis text={block.text} emphasis={block.emphasis} />
            </p>
          ))}
        </div>
        <div className="mt-9 overflow-hidden rounded-[8px]">
          <p className="bg-[#cceff6] p-3 text-[1rem] font-bold leading-[16.66px] text-[#254d4f]">Summary</p>
          <p className="bg-[#e6f7fb] p-3 text-[1rem] font-normal leading-6 text-[#254d4f]">
            {summary && summary.type === "item" ? summary.text : ""}
          </p>
        </div>
      </section>
    );
  }

  if (section.id === "challenges" || section.id === "solution") {
    return (
      <section id={section.id} aria-labelledby={`${section.id}-title`} className={sectionClass}>
        <h2 id={`${section.id}-title`} className={heading}>
          {section.title}
        </h2>
        <div className="mt-9">{list ? <DiscList list={list} /> : null}</div>
      </section>
    );
  }

  if (section.id === "getting-direct-inspiration") {
    const desktop = images[0];
    const mobile = images[1];
    return (
      <section id={section.id} aria-labelledby={`${section.id}-title`} className={sectionClass}>
        <h2 id={`${section.id}-title`} className={heading}>
          {section.title}
        </h2>
        <p className="mt-8 text-[1rem] font-normal leading-7 text-[#254d4f]">{texts[0]?.text}</p>
        <div className="relative mt-8 h-[320px] overflow-hidden rounded-[8px] bg-[#eaeefb]">
          {mobile?.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={mobile.src}
              alt={mobile.alt}
              width={mobile.width}
              height={mobile.height}
              loading="lazy"
              className="absolute top-[33.6px] left-[17px] w-[325.9px] max-w-none lg:hidden"
            />
          ) : null}
          {desktop?.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={desktop.src}
              alt={desktop.alt}
              width={desktop.width}
              height={desktop.height}
              loading="lazy"
              className="absolute top-[31px] left-[171px] hidden w-[612px] max-w-none lg:block"
            />
          ) : null}
        </div>
      </section>
    );
  }

  if (section.id === "wireframing") {
    return (
      <section id={section.id} aria-labelledby={`${section.id}-title`} className={sectionClass}>
        <h2 id={`${section.id}-title`} className={heading}>
          {section.title}
        </h2>
        <div className="mt-8">
          <p className="mb-4 text-[1rem] font-normal leading-6 text-[#254d4f]">{texts[0]?.text}</p>
          {list ? <DiscList list={list} /> : null}
        </div>
        <div className="mt-12 flex flex-col gap-8">
          {images.map((image) => (
            <BlockImage key={image.alt} image={image} />
          ))}
        </div>
      </section>
    );
  }

  if (section.id === "final-ui") {
    const panels = section.blocks.filter((block) => block.type === "item");
    return (
      <section id={section.id} aria-labelledby={`${section.id}-title`} className={sectionClass}>
        <h2 id={`${section.id}-title`} className={heading}>
          {section.title}
        </h2>
        <p className="mt-6 text-[1rem] font-normal leading-7 text-[#254d4f]">{texts[0]?.text}</p>
        <ul className="mt-6 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {panels.map((item, index) =>
            item.type === "item" ? (
              <li key={`${item.title}-${index}`} className="flex min-w-0 flex-col overflow-hidden rounded-[8px]">
                <h3 className="bg-[#deecdd] p-3 text-[1rem] font-bold leading-[16.66px] text-[#254d4f]">{item.title}</h3>
                <div className="flex flex-1 flex-col gap-4 bg-[#eef5ee] p-3 text-[1rem] font-normal leading-6 text-[#254d4f]">
                  <p>{item.text}</p>
                  {item.note ? (
                    <p>
                      <span className="font-semibold">Object:</span> {item.note}
                    </p>
                  ) : null}
                </div>
              </li>
            ) : null,
          )}
        </ul>
        {images[0] ? (
          <div className="mt-6">
            <BlockImage image={images[0]} />
          </div>
        ) : null}
      </section>
    );
  }

  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className={sectionClass}>
      <h2 id={`${section.id}-title`} className={heading}>
        {section.title}
      </h2>
      {texts[0] ? <p className="mt-9 text-[1rem] font-normal leading-6 text-[#254d4f]">{texts[0].text}</p> : null}
    </section>
  );
}
