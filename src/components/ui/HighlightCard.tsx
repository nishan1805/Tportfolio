import Link from "next/link";

import type { Highlight } from "@/types";

type HighlightCardProps = {
  highlight: Highlight;
};

/** Mobile image-panel ratio (width / height) from the 362px-wide mobile cards. */
const MOBILE_RATIO: Record<string, string> = {
  intelligence: "362 / 247.6",
  "design-system": "362 / 238.4",
  emotion: "362 / 250.6",
  animation: "362 / 256.6",
};

export function HighlightCard({ highlight }: HighlightCardProps) {
  const { kicker, title, description, tags, caption, image, href, id } = highlight;

  const card = (
    <article className="flex min-w-0 flex-col overflow-hidden border border-[#d8e6e6] bg-white lg:h-[277px] lg:flex-row">
      <div className="order-2 flex min-w-0 flex-1 flex-col lg:order-1 lg:w-[342px] lg:shrink-0">
        <div className="flex flex-1 flex-col gap-4 px-4 py-4 lg:gap-[16.66px] lg:px-[16.66px] lg:py-6">
          <div className="flex flex-col gap-[6px]">
            {kicker && <p className="text-[14px] font-medium leading-[17px] text-[#3e8083]">{kicker}</p>}
            <h3 className="text-[20px] font-bold leading-[1.25] text-black lg:text-[24px] lg:leading-normal">{title}</h3>
          </div>
          {description && <p className="text-[14px] font-medium leading-[17px] text-black">{description}</p>}
          {tags && (
            <ul className="flex flex-wrap items-center gap-[6px] text-[12px] font-medium leading-[16.66px]">
              {tags.map((tag, index) => (
                <li key={tag} className="flex items-center gap-[6px]">
                  {index > 0 && <span aria-hidden className="size-[2px] rounded-full bg-black" />}
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
        <p className="border-t border-[#d8e6e6] bg-[#ecf2f3] px-[5px] py-[5px] text-[12px] font-medium leading-[16.66px]">
          {caption}
        </p>
      </div>

      <div
        className="relative order-1 w-full shrink-0 lg:order-2 lg:h-full lg:w-[266px]"
        style={{ aspectRatio: MOBILE_RATIO[id] ?? "362 / 248" }}
      >
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt="" className="absolute inset-0 size-full max-w-none object-cover lg:object-fill" />
        )}
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
