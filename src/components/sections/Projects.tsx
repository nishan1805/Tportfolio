import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="work" aria-label="Assignments" className="pb-12 lg:pb-0">
      <div className="mx-auto flex w-full min-w-0 max-w-[1440px] flex-col gap-12 px-5 lg:px-20">
        <h2 className="border-b border-[#d8e6e6] pb-6 text-center text-[2rem] font-semibold leading-[2.375rem] lg:hidden">
          Assignments
        </h2>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
