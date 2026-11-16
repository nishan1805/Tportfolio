import { socialLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import type { SocialPlatform } from "@/types";

const rule = "hidden h-full w-px shrink-0 bg-[#d8e6e6] lg:block";

type SocialLinksProps = {
  className?: string;
  includeFigma?: boolean;
};

export function SocialLinks({ className, includeFigma = false }: SocialLinksProps) {
  const links = socialLinks.filter(({ platform }) => includeFigma || platform !== "figma");

  return (
    <ul className={cn("flex items-center gap-4", className)}>
      <li aria-hidden className={rule} />
      {links.map(({ platform, label, href }) => (
        <li key={platform}>
          <a
            href={href}
            aria-label={label}
            className="flex size-8 items-center justify-center lg:size-10"
          >
            <SocialGlyph platform={platform} compact={!includeFigma} />
          </a>
        </li>
      ))}
      <li aria-hidden className={rule} />
    </ul>
  );
}

function SocialGlyph({ platform, compact }: { platform: SocialPlatform; compact?: boolean }) {
  const src = `/icons/${platform}.svg`;
  const size = compact ? (platform === "youtube" ? 32 : 19) : platform === "youtube" ? 40 : 24;
  return (
    // Icons exported from the Figma header.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" width={size} height={size} className="max-h-full max-w-full" />
  );
}
