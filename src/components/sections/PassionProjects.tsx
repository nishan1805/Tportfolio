import { passionProjects } from "@/data/passion-projects";
import type { PassionPlacement } from "@/types";

function PlacedImage({ src, placement }: { src: string; placement: PassionPlacement }) {
  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      className="absolute max-w-none"
      style={{
        left: placement.image.x,
        top: placement.image.y,
        width: placement.image.w,
        height: placement.image.h,
        maxWidth: "none",
        objectFit: placement.fit,
      }}
    />
  );

  if (!placement.clip) return image;

  const { x, y, w, h } = placement.clip;
  return (
    <div className="absolute overflow-hidden" style={{ left: x, top: y, width: w, height: h }}>
      {image}
    </div>
  );
}

/**
 * Desktop cards are 1188 × 532. Mobile is a horizontal carousel of 297 × 425 cards.
 */
export function PassionProjects() {
  return (
    <section aria-label="Passion projects" className="mb-[88px] mt-[95.3px] lg:mb-0 lg:mt-[160px]">
      <div className="mx-auto w-full min-w-0 max-w-[1440px] px-[21px] lg:px-20">
        <ul className="flex snap-x snap-mandatory gap-[15px] overflow-x-auto [scrollbar-width:thin] lg:gap-12">
          {passionProjects.map((project) => (
            <li key={project.id} className={`w-[297px] shrink-0 snap-start lg:w-[1188px] ${project.id === "medicine-reminder" ? "max-lg:order-first" : ""}`}>
              <article className="flex h-[425px] min-w-0 flex-col overflow-hidden bg-white outline outline-1 -outline-offset-1 outline-[#d8e6e6] lg:h-[532px] lg:flex-row">
                <div
                  className={`flex min-w-0 shrink-0 flex-col lg:h-full lg:w-[697px] ${project.mobileCopyH === 136 ? "h-[136px]" : "h-[112px]"}`}
                >
                  <div className="flex flex-col px-4 pt-4 lg:flex-1 lg:px-8 lg:py-8">
                    <p className="text-[12px] font-semibold leading-[1.208] lg:text-[1.5rem] lg:leading-8">
                      <span className="lg:hidden">{project.mobileKicker ?? project.kicker}</span>
                      <span className="hidden lg:inline">{project.kicker}</span>
                    </p>
                    <h3 className="mt-[11.5px] text-[1.25rem] font-bold leading-6 lg:mt-0 lg:text-[4rem] lg:leading-[77px]">
                      {project.desktopHref ? (
                        <>
                          <span className="lg:hidden">{project.title}</span>
                          <a className="hidden lg:inline" href={project.desktopHref}>{project.title}</a>
                        </>
                      ) : project.title}
                    </h3>
                    <ul className="mt-4 flex items-center gap-3 text-[12px] font-medium leading-[1.208] lg:mt-8 lg:text-[0.875rem] lg:leading-[1.0625rem]">
                      {(project.mobileTags ?? project.tags).map((tag, index) => (
                        <li key={`m-${tag}`} className="flex items-center gap-3 lg:hidden">
                          {index > 0 && <span aria-hidden className="size-1 rounded-full bg-[#3e8083]" />}
                          {tag}
                        </li>
                      ))}
                      {project.tags.map((tag, index) => (
                        <li key={`d-${tag}`} className="hidden items-center gap-3 lg:flex">
                          {index > 0 && <span aria-hidden className="size-1 rounded-full bg-black" />}
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-auto hidden border-t border-[#d8e6e6] p-2.5 text-[0.875rem] font-medium leading-8 lg:block">
                    {project.caption}
                  </p>
                </div>

                <div className={`relative min-h-0 flex-1 overflow-hidden ${project.panel}`}>
                  {project.image && (
                    <>
                      <div className="absolute inset-0 lg:hidden">
                        <PlacedImage src={project.image} placement={project.mobile} />
                      </div>
                      <div className="absolute inset-0 hidden lg:block">
                        <PlacedImage src={project.image} placement={project.desktop} />
                      </div>
                    </>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
