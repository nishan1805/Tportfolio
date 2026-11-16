import type { CareerStory } from "@/types";

import { ImagePanel } from "./ImagePanel";

/** Shows `text` with the `emphasis` part in the brand color. */
function EmphasisText({ text, emphasis }: { text: string; emphasis?: string }) {
  if (!emphasis || !text.includes(emphasis)) return <>{text}</>;

  const [before, after] = text.split(emphasis);
  return (
    <>
      {before}
      <span className="font-medium text-prime-blue-600">{emphasis}</span>
      {after}
    </>
  );
}

export function CareerStoryCard({ story }: { story: CareerStory }) {
  const { title, subtitle, emphasis, chips, bottomTitle, bottomText, background, image } = story;

  return (
    <article className={`flex min-h-[234px] flex-col gap-3 p-4 ${background}`}>
      <div className="rounded-lg bg-white/70 p-4">
        <h3 className="text-base font-bold">{title}</h3>
        {subtitle && (
          <p className="mt-1 text-sm text-prime-teal-600">
            <EmphasisText text={subtitle} emphasis={emphasis} />
          </p>
        )}
      </div>

      {chips && (
        <ul className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <li key={chip} className="rounded-full bg-prime-teal-600 px-3 py-1 text-xs font-semibold text-white">
              {chip}
            </li>
          ))}
        </ul>
      )}

      <ImagePanel src={image} alt={title} className="min-h-[60px] flex-1" />

      {bottomText && (
        <div className="rounded-lg bg-white p-4">
          {bottomTitle && <h4 className="text-base font-bold">{bottomTitle}</h4>}
          <p className="mt-1 text-sm leading-6 text-black/70">{bottomText}</p>
        </div>
      )}
    </article>
  );
}
