import { cn } from "@/lib/utils";
import type { ImageItem } from "@/types";

type BlockImageProps = {
  image: ImageItem;
  className?: string;
  radius?: "sm" | "lg";
  priority?: boolean;
};

/** Slot keeps the Figma aspect ratio. Former GIFs play as muted looping video. */
export function BlockImage({ image, className, radius = "sm", priority = false }: BlockImageProps) {
  const { src, alt, width, height, webm, mp4, poster } = image;
  const media = src || poster;

  return (
    <div
      className={cn(
        "relative mx-auto w-full min-w-0 max-w-full overflow-hidden bg-[#eaeefb]",
        radius === "lg" ? "rounded-[16px]" : "rounded-[8px]",
        className,
      )}
      style={{ aspectRatio: `${width} / ${height}`, maxWidth: width }}
    >
      {webm || mp4 ? (
        <video
          className="absolute inset-0 size-full object-contain"
          autoPlay
          muted
          loop
          playsInline
          poster={poster || src}
          aria-label={alt}
        >
          {webm && <source src={webm} type="video/webm" />}
          {mp4 && <source src={mp4} type="video/mp4" />}
        </video>
      ) : media ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={media}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className="absolute inset-0 size-full object-contain"
        />
      ) : (
        <p className="absolute inset-0 flex items-center justify-center p-4 text-center text-[0.75rem] leading-5 text-[#3e8083]">
          {alt}
        </p>
      )}
    </div>
  );
}
