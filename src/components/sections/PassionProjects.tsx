import { passionProjects } from "@/data/passion-projects";

/**
 * Desktop cards are 1188 × 532, white, with a 64px two-line title.
 * Mobile is a horizontal carousel of 297 × 425 cards.
 */
export function PassionProjects() {
  return (
    <section aria-label="Passion projects" className="py-10 lg:py-16">
      <div className="mx-auto w-full max-w-[1440px] min-w-0 px-5 lg:px-20">
        <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:thin] lg:gap-12">
          {passionProjects.map((project) => (
            <li key={project.id} className="w-[297px] shrink-0 snap-start lg:w-[1188px]">
              <article className="flex h-[425px] min-w-0 flex-col overflow-hidden border border-[#d8e6e6] bg-white lg:h-[532px] lg:flex-row">
                <div className="flex min-w-0 flex-col lg:h-full lg:w-[697px]">
                  <div className="flex flex-col px-4 py-4 lg:flex-1 lg:px-8 lg:py-8">
                    <p className="text-[0.875rem] font-semibold leading-[0.875rem] lg:text-[1.5rem] lg:font-semibold lg:leading-8">
                      {project.kicker}
                    </p>
                    <h3 className="mt-3 text-[1.25rem] font-bold leading-6 lg:mt-0 lg:text-[4rem] lg:leading-[1.2]">
                      {project.title}
                    </h3>
                    <ul className="mt-4 flex items-center gap-3 text-[0.875rem] font-medium leading-[0.875rem] lg:mt-8 lg:leading-[1.0625rem]">
                      {(project.mobileTags ?? project.tags).map((tag, index) => (
                        <li key={`m-${tag}`} className="flex items-center gap-3 lg:hidden">
                          {index > 0 && <span aria-hidden className="size-1 rounded-full bg-black" />}
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
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt=""
                      className="absolute bottom-0 left-1/2 h-[78%] w-[70%] -translate-x-1/2 object-contain object-bottom lg:left-[-42px] lg:h-[424px] lg:w-[533px] lg:translate-x-0"
                    />
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
