import type { MobileCardLayer, MobileCardSpec } from "@/types";

type BoxLayer = Exclude<MobileCardLayer, { kind: "line" }>;

const boxStyle = (layer: BoxLayer, cardHeight: number) => ({
  left: `${(layer.x / 360) * 100}%`,
  top: `${(layer.y / cardHeight) * 100}%`,
  width: `${(layer.w / 360) * 100}%`,
  height: `${(layer.h / cardHeight) * 100}%`,
});

function Video({ base, label }: { base: string; label?: string }) {
  return (
    <video
      className="absolute inset-0 size-full rounded-[8px] object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster={`${base}.webp`}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <source src={`${base}.webm`} type="video/webm" />
      <source src={`${base}.mp4`} type="video/mp4" />
    </video>
  );
}

/** 360×H card. Layer px are percentages of the card so the frame scales with the column. */
export function MobileCard({ spec, alt }: { spec: MobileCardSpec; alt: string }) {
  const { height, background, layers } = spec;
  const labeled = layers.findIndex((layer) => layer.kind !== "line");

  return (
    <div
      className="relative w-full overflow-hidden rounded-[8px] lg:hidden"
      style={{ aspectRatio: `360 / ${height}`, background }}
    >
      {layers.map((layer, index) => {
        const label = index === labeled ? alt : undefined;

        if (layer.kind === "line") {
          return (
            <div
              key={index}
              className="absolute left-0 right-0 h-px bg-[#acbcef]"
              style={{ top: `${(layer.y / height) * 100}%` }}
            />
          );
        }

        const position = boxStyle(layer, height);

        if (layer.kind === "img") {
          return (
            <div key={index} className="absolute" style={position}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={layer.src}
                alt={label ?? ""}
                className={`absolute inset-0 size-full max-w-none ${layer.fit === "cover" ? "object-cover" : "object-contain"}`}
              />
            </div>
          );
        }

        if (layer.kind === "crop") {
          return (
            <div key={index} className="absolute overflow-hidden" style={position}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={layer.src}
                alt={label ?? ""}
                className="absolute max-w-none"
                style={{
                  left: `${layer.image.left}%`,
                  top: `${layer.image.top}%`,
                  width: `${layer.image.width}%`,
                  height: `${layer.image.height}%`,
                  maxWidth: "none",
                }}
              />
            </div>
          );
        }

        const video = layer.kind === "video" ? layer.video : layer.video;
        const bordered = layer.kind === "bordered";

        return (
          <div
            key={index}
            className={bordered ? "absolute box-border rounded-[8px] border-4 border-[#acbcef]" : "absolute"}
            style={position}
          >
            {video ? (
              <Video base={video} label={label} />
            ) : (
              layer.kind === "bordered" &&
              layer.src && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={layer.src} alt={label ?? ""} className="absolute inset-0 size-full rounded-[8px] object-cover" />
              )
            )}
          </div>
        );
      })}
    </div>
  );
}
