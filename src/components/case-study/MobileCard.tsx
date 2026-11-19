import type { ImageItem, MobileCardLayer } from "@/types";

const cardWidth = 366;

function LayerMedia({ layer, alt }: { layer: MobileCardLayer; alt: string }) {
  const clip = "absolute inset-0 size-full max-w-none rounded-[8px] object-cover";
  if (layer.webm || layer.mp4) {
    return (
      <video className={clip} autoPlay muted loop playsInline poster={layer.poster} aria-label={alt}>
        {layer.webm ? <source src={layer.webm} type="video/webm" /> : null}
        {layer.mp4 ? <source src={layer.mp4} type="video/mp4" /> : null}
      </video>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={layer.src} alt="" className={clip} />
  );
}

/** Mobile card sized on a 366-wide frame. Percentages scale it into the 360 column. */
export function MobileCard({ image }: { image: ImageItem }) {
  const card = image.mobileCard;
  if (!card) return null;

  return (
    <div
      className="relative w-full overflow-hidden rounded-[8px] lg:hidden"
      style={{ aspectRatio: `${cardWidth} / ${card.height}`, background: card.background }}
    >
      {card.flat ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={card.flat} alt={image.alt} className="absolute inset-0 size-full max-w-none rounded-[8px] object-cover" />
      ) : null}
      {card.layers?.map((layer, index) => {
        const box = {
          left: `${(layer.x / cardWidth) * 100}%`,
          top: layer.centerY ? "calc(50% + 0.5px)" : `${(layer.y / card.height) * 100}%`,
          width: `${(layer.w / cardWidth) * 100}%`,
          height: `${(layer.h / card.height) * 100}%`,
          transform: layer.centerY ? "translateY(-50%)" : undefined,
          borderColor: layer.border,
        };
        return (
          <div
            key={index}
            className={layer.border ? "absolute box-border overflow-hidden rounded-[8px] border-4" : "absolute overflow-hidden"}
            style={box}
          >
            <LayerMedia layer={layer} alt={image.alt} />
          </div>
        );
      })}
    </div>
  );
}
