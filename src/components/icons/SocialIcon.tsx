import type { SocialPlatform } from "@/types";

type SocialIconProps = {
  platform: SocialPlatform;
};

// TODO: swap these with the exact icons exported from Figma (public/icons).
export function SocialIcon({ platform }: SocialIconProps) {
  switch (platform) {
    case "figma":
      return (
        <svg viewBox="0 0 24 24" className="size-6 fill-prime-blue-600" aria-hidden>
          <path d="M8 0h4v8H8a4 4 0 0 1 0-8Z" />
          <path d="M12 0h4a4 4 0 0 1 0 8h-4Z" />
          <path d="M8 8h4v8H8a4 4 0 0 1 0-8Z" />
          <circle cx="16" cy="12" r="4" />
          <path d="M8 16h4v4a4 4 0 1 1-4-4Z" />
        </svg>
      );
    case "behance":
      return <span className="text-xl font-bold text-prime-blue-600">Bē</span>;
    case "youtube":
      return (
        <svg viewBox="0 0 40 40" className="size-10" aria-hidden>
          <rect x="8" y="11" width="24" height="18" rx="5" className="fill-prime-blue-600" />
          <path d="M17 15.5v9l8-4.5Z" fill="white" />
        </svg>
      );
    case "linkedin":
      return <span className="text-xl font-bold text-prime-blue-600">in</span>;
  }
}
