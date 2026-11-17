import { cn } from "@/lib/utils";
import type { ImageItem } from "@/types";

type BlockImageProps = {
  image: ImageItem;
  className?: string;
  radius?: "sm" | "lg";
  priority?: boolean;
};

function Media({ image, className }: { image: ImageItem; className?: string }) {
  const { src, alt, webm, mp4, poster } = image;
  const still = src || poster;

  if (webm || mp4) {
    return (
      <video
        className={className}
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
    );
  }

  if (!still) {
    return (
      <p className="absolute inset-0 flex items-center justify-center p-4 text-center text-[0.75rem] leading-5 text-[#3e8083]">
        {alt}
      </p>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={still} alt={alt} className={className} />
  );
}

/** Slot keeps the Figma aspect ratio. Former GIFs play as muted looping video. */
export function BlockImage({ image, className, radius = "sm", priority = false }: BlockImageProps) {
  const { src, alt, width, height, webm, mp4, poster, inset } = image;
  const media = src || poster;

  if (inset) {
    return (
      <div
        className={cn("relative mx-auto w-full min-w-0 max-w-full overflow-hidden rounded-[8px]", className)}
        style={{ aspectRatio: `${width} / ${height}`, maxWidth: width, background: inset.background }}
      >
        <div
          className="absolute overflow-hidden rounded-[8px]"
          style={{
            left: `${(inset.x / width) * 100}%`,
            top: `${(inset.y / height) * 100}%`,
            width: `${(inset.width / width) * 100}%`,
            height: `${(inset.height / height) * 100}%`,
            border: inset.border ? `4px solid ${inset.border}` : undefined,
          }}
        >
          <Media image={image} className="absolute inset-0 size-full object-cover" />
        </div>
      </div>
    );
  }

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
