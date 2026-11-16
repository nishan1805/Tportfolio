import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="work" aria-label="Assignments" className="pb-12 lg:pb-16">
      <Container className="flex min-w-0 flex-col gap-8 lg:gap-12">
        <h2 className="border-b border-[#d8e6e6] pb-6 text-center text-[2rem] font-semibold leading-[2.375rem] lg:hidden">
          Assignments
        </h2>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </Container>
    </section>
  );
}
