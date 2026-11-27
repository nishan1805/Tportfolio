import Link from "next/link";

import type { Highlight } from "@/types";

type HighlightCardProps = {
  highlight: Highlight;
};

/** Mobile image-panel height inside the 362 × 380 card. Desktop panel is 266 × 277. */
const PANEL: Record<string, { height: string; className: string }> = {
  intelligence: { height: "h-[247.58px]", className: "bg-[#eaeefb]" },
  "design-system": { height: "h-[238.36px]", className: "bg-[#eef5ee]" },
  emotion: {
    height: "h-[250.59px]",
    className: "bg-[linear-gradient(180deg,#bcd6fd_0%,#fde9c7_100%)]",
  },
  animation: { height: "h-[256.59px]", className: "bg-[#fee8f0]" },
};

export function HighlightCard({ highlight }: HighlightCardProps) {
  const { kicker, title, description, tags, caption, image, mobileImage, href, id } = highlight;
  const panel = PANEL[id] ?? { height: "h-[248px]", className: highlight.previewBg };
  const textPad = id === "design-system" ? "p-[16.7px]" : "px-[16.7px] py-6";

  const card = (
    <article className="box-border flex h-[380px] min-w-0 flex-col overflow-hidden bg-white outline outline-1 -outline-offset-1 outline-[#d8e6e6] lg:h-[277px] lg:flex-row">
      <div className="order-2 flex min-h-0 min-w-0 flex-1 flex-col lg:order-1 lg:w-[342px] lg:shrink-0">
        <div className={`flex min-h-0 flex-1 flex-col gap-[16.7px] ${textPad}`}>
          {kicker && <p className="text-[12.49px] font-semibold leading-[16.7px] text-black">{kicker}</p>}
          <h3 className="text-[20px] leading-[24px] text-black lg:text-[24px] lg:leading-[29px]">
            {title}
          </h3>
          {description && (
            <p className="text-[12px] font-medium leading-[1.208] text-black lg:leading-[16.7px]">{description}</p>
          )}
          {tags && tags.length > 0 && (
            <ul className="flex flex-wrap items-center gap-[6px] text-[12px] font-medium leading-[16.7px]">
              {tags.map((tag, index) => (
                <li key={tag} className="flex items-center gap-[6px]">
                  {index > 0 && <span aria-hidden className="size-[2px] rounded-full bg-black" />}
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
        <p className="flex h-[27.4px] shrink-0 items-center border-t border-[#d8e6e6] bg-[#ecf2f3] px-[5.2px] text-[12px] font-medium leading-[16.66px]">
          {caption}
        </p>
      </div>

      <div className={`relative order-1 w-full shrink-0 overflow-hidden lg:order-2 lg:h-full lg:w-[266px] ${panel.height} ${panel.className}`}>
        {mobileImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={mobileImage} alt="" className="block h-auto w-full max-w-none lg:hidden" />
        )}
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt="" className="absolute inset-0 hidden size-full max-w-none object-fill lg:block" />
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
