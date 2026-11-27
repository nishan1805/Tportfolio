import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="work" aria-label="Assignments" className="mt-[116px] lg:mt-0">
      <div className="mx-auto flex w-full min-w-0 max-w-[1440px] flex-col gap-12 px-5 lg:px-20">
        <div className="relative h-[86px]">
          <h2 className="text-center text-[2rem] font-semibold leading-[38px] lg:text-left lg:text-[#d10606]">Assignments</h2>
          <span className="absolute -left-px bottom-0 h-px w-full bg-black/30 lg:left-0 lg:bg-[#0000001a]" />
        </div>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
