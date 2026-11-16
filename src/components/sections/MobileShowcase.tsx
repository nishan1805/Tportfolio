import { mobileApps } from "@/data/mobile-apps";

/** Design column is 480 × 802. Mobile artboards are the same layout scaled to the column width. */
const COL_W = 480;

function cq(px: number) {
  return `calc(100cqw * ${px} / ${COL_W})`;
}

type ScreenSpec = {
  w: number;
  h: number;
  top: number;
  /** Horizontal shift from the column centre, in design pixels. */
  dx: number;
  radius: number;
  border: number;
  borderColor: string;
  burst: string;
  /** Image placement inside the phone frame, as percentages. */
  crop?: { top: string; left: string; width: string; height: string };
};

const SCREENS: Record<string, ScreenSpec> = {
  "shop-sales": {
    w: 286,
    h: 624,
    top: 70,
    dx: 0,
    radius: 8,
    border: 2,
    borderColor: "#acbcef",
    burst: "/images/mobile/burst-a.svg",
  },
  "bike-rental": {
    w: 284,
    h: 624,
    top: 66,
    dx: 1,
    radius: 10,
    border: 2,
    borderColor: "#d6def7",
    burst: "/images/mobile/burst-b.svg",
    crop: { top: "-0.8%", left: "-1.8%", width: "103.61%", height: "102.09%" },
  },
  "real-estate": {
    w: 279,
    h: 617,
    top: 69,
    dx: 0.5,
    radius: 8,
    border: 2,
    borderColor: "#acbcef",
    burst: "/images/mobile/burst-a.svg",
    crop: { top: "0%", left: "-0.07%", width: "100.15%", height: "100.61%" },
  },
};

export function MobileShowcase() {
  return (
    <section aria-label="Mobile apps" className="grid min-w-0 lg:grid-cols-3">
      {mobileApps.map((app) => {
        const screen = SCREENS[app.id];
        return (
          <article
            key={app.id}
            className={`relative w-full overflow-hidden ${app.background}`}
            style={{ aspectRatio: "480 / 802", containerType: "inline-size" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={screen.burst}
              alt=""
              aria-hidden
              className="pointer-events-none absolute z-0 max-w-none"
              style={{ left: cq(-227), top: cq(-56), width: cq(866), height: cq(866) }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mobile/glow.svg"
              alt=""
              aria-hidden
              className="pointer-events-none absolute z-0 max-w-none"
              style={{ left: cq(-11), top: cq(132), width: cq(500), height: cq(500) }}
            />

            <div
              className="absolute z-10 overflow-hidden border-solid"
              style={{
                left: `calc(50% + ${cq(screen.dx)})`,
                top: cq(screen.top),
                width: cq(screen.w),
                height: cq(screen.h),
                borderRadius: cq(screen.radius),
                borderWidth: cq(screen.border),
                borderColor: screen.borderColor,
                transform: "translateX(-50%)",
              }}
            >
              <video
                className="absolute max-w-none object-cover"
                style={screen.crop ?? { inset: 0, width: "100%", height: "100%" }}
                autoPlay
                muted
                loop
                playsInline
                poster={app.image}
                aria-label={app.category}
              >
                {app.webm && <source src={app.webm} type="video/webm" />}
                {app.mp4 && <source src={app.mp4} type="video/mp4" />}
              </video>
            </div>

            <dl
              className="absolute inset-x-0 z-20 flex items-center justify-between border-t border-white/20 bg-white/6 text-white"
              style={{
                top: cq(733),
                height: cq(69),
                paddingLeft: cq(32),
                paddingRight: cq(32),
                backdropFilter: `blur(${cq(6)})`,
                WebkitBackdropFilter: `blur(${cq(6)})`,
              }}
            >
              <div>
                <dt className="font-normal text-white/60" style={{ fontSize: cq(14), lineHeight: "normal" }}>
                  Categroy
                </dt>
                <dd className="font-medium" style={{ fontSize: cq(16), lineHeight: cq(24) }}>
                  {app.category}
                </dd>
              </div>
              <div className="text-right">
                <dt className="font-normal text-white/60" style={{ fontSize: cq(14), lineHeight: "normal" }}>
                  Status
                </dt>
                <dd className="font-medium" style={{ fontSize: cq(16), lineHeight: cq(24) }}>
                  {app.status}
                </dd>
              </div>
            </dl>
          </article>
        );
      })}
    </section>
  );
}
