import Image from "next/image";

import { cn } from "@/lib/utils";

type ImagePanelProps = {
  src?: string;
  alt: string;
  className?: string;
  /** 8px teal frame used on project mockups. */
  framed?: boolean;
};

export function ImagePanel({ src, alt, className, framed }: ImagePanelProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        framed && "rounded-[8px] border-[8px] border-[#193334] bg-[#eef5f5]",
        className,
      )}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 712px, 100vw" className="object-contain" unoptimized />
      ) : null}
    </div>
  );
}
