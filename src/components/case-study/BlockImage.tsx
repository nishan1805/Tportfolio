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
  const { src, alt, width, height, webm, mp4, poster, inset, mobileSrc, mobileWidth, mobileHeight } = image;
  const media = src || poster;

  if (mobileSrc && mobileWidth && mobileHeight && !inset && !webm && !mp4) {
    const radiusClass = radius === "lg" ? "rounded-[16px]" : "rounded-[8px]";
    return (
      <div className={cn("min-w-0", className)}>
        <div
          className={cn("relative w-full overflow-hidden bg-[#eaeefb] lg:hidden", radiusClass)}
          style={{ aspectRatio: `${mobileWidth} / ${mobileHeight}` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mobileSrc} alt={alt} className="absolute inset-0 size-full object-cover" />
        </div>
        <div
          className={cn("relative hidden w-full overflow-hidden bg-[#eaeefb] lg:mx-0 lg:block", radiusClass)}
          style={{ aspectRatio: `${width} / ${height}`, maxWidth: width }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={media} alt={alt} loading={priority ? "eager" : "lazy"} className="absolute inset-0 size-full object-cover" />
        </div>
      </div>
    );
  }

  const mobileInset = image.mobile?.inset;
  const slotClass = image.alt.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  if (inset && mobileInset && image.mobile?.slotHeight && image.mobile.slotWidth) {
    const slotWidth = image.mobile.slotWidth;
    const slotHeight = image.mobile.slotHeight;
    const border = inset.border ? `4px solid ${inset.border}` : undefined;
    return (
      <div
        className={cn("mp-slot relative w-full overflow-hidden rounded-[8px]", slotClass, className)}
        style={{ maxWidth: width, background: inset.background }}
      >
        <style>{`
          .mp-slot.${slotClass} { height: ${slotHeight}px; }
          .mp-slot.${slotClass} .mp-frame {
            position: absolute;
            box-sizing: border-box;
            overflow: hidden;
            border-radius: 8px;
            border: ${border ?? "none"};
            left: ${(mobileInset.x / slotWidth) * 100}%;
            top: ${(mobileInset.y / slotHeight) * 100}%;
            width: ${(mobileInset.width / slotWidth) * 100}%;
            height: ${(mobileInset.height / slotHeight) * 100}%;
          }
          @media (min-width: 1024px) {
            .mp-slot.${slotClass} { height: ${height}px; }
            .mp-slot.${slotClass} .mp-frame {
              left: ${(inset.x / width) * 100}%;
              top: ${(inset.y / height) * 100}%;
              width: ${(inset.width / width) * 100}%;
              height: ${(inset.height / height) * 100}%;
            }
          }
        `}</style>
        <div className="mp-frame">
          <Media image={image} className="absolute inset-0 size-full object-cover" />
        </div>
      </div>
    );
  }

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
