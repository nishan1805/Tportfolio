import Link from "next/link";

import type { Highlight } from "@/types";

import { ImagePanel } from "./ImagePanel";

type HighlightCardProps = {
  highlight: Highlight;
};

export function HighlightCard({ highlight }: HighlightCardProps) {
  const { kicker, title, description, tags, caption, previewBg, image, href } = highlight;

  const card = (
    <article className="flex h-full min-w-0 flex-col overflow-hidden border border-[#d8e6e6] bg-white lg:min-h-[277px] lg:flex-row">
      <ImagePanel
        src={image}
        alt={title}
        className={`h-[180px] w-full shrink-0 lg:h-auto lg:w-[266px] ${previewBg}`}
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex flex-1 flex-col gap-3 px-4 py-4 lg:px-[17px] lg:py-6">
          {kicker && <p className="text-[0.875rem] font-medium leading-[1.0625rem] text-[#3e8083]">{kicker}</p>}
          <h3 className="text-[1.25rem] font-bold leading-[1.45rem] text-black lg:text-[1.5rem] lg:leading-[1.8125rem]">
            {title}
          </h3>
          {description && <p className="text-[0.875rem] font-normal leading-normal text-black/70">{description}</p>}
          {tags && (
            <ul className="flex flex-wrap items-center gap-1.5 text-[0.875rem] font-medium leading-[1.0625rem]">
              {tags.map((tag, index) => (
                <li key={tag} className="flex items-center gap-1.5">
                  {index > 0 && <span aria-hidden className="size-[2px] rounded-full bg-black" />}
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
        <p className="border-t border-[#d8e6e6] px-[5px] py-[5px] text-[0.75rem] font-medium leading-[1.0625rem]">
          {caption}
        </p>
      </div>
    </article>
  );

  if (!href) return card;

  return (
    <Link href={href} className="block h-full min-w-0">
      {card}
    </Link>
  );
}
