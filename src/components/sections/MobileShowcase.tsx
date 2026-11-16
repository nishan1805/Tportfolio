import { ImagePanel } from "@/components/ui/ImagePanel";
import { mobileApps } from "@/data/mobile-apps";

/** Desktop: three 480 × 802 columns. Mobile: stacked full-width panels. */
export function MobileShowcase() {
  return (
    <section aria-label="Mobile apps" className="grid min-w-0 md:grid-cols-3">
      {mobileApps.map(({ id, category, status, background, image, webm, mp4 }) => (
        <article key={id} className={`relative flex h-[672px] min-w-0 flex-col lg:h-[802px] ${background}`}>
          <div className="absolute inset-x-[12%] top-[70px] bottom-[90px] overflow-hidden">
            {webm || mp4 ? (
              <video className="size-full object-cover" autoPlay muted loop playsInline poster={image} aria-label={category}>
                {webm && <source src={webm} type="video/webm" />}
                {mp4 && <source src={mp4} type="video/mp4" />}
              </video>
            ) : (
              <ImagePanel src={image} alt={category} className="size-full" />
            )}
          </div>
          <dl className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/20 bg-white/6 px-6 py-3 text-white backdrop-blur-[6px] lg:px-8">
            <div>
              <dt className="text-[0.875rem] font-normal leading-normal text-white/60">Categroy</dt>
              <dd className="text-[1rem] font-medium leading-6">{category}</dd>
            </div>
            <div className="text-right">
              <dt className="text-[0.875rem] font-normal leading-normal text-white/60">Status</dt>
              <dd className="text-[1rem] font-medium leading-6">{status}</dd>
            </div>
          </dl>
        </article>
      ))}
    </section>
  );
}
