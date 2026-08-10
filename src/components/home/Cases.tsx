import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/case/ProjectCard";
import { getAllProjects } from "@/lib/projects";

export function Cases() {
  const projects = getAllProjects();

  return (
    <section id="cases" className="border-y border-border bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Cases técnicos"
          title="Projetos completos, de ponta a ponta"
          lead="Três produtos de autoria própria — da dor real ao deploy. Cada case documenta decisões, desafios e resultados."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
