import type { Metadata } from "next";
import Script from "next/script";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/case/ProjectCard";
import { getAllProjects } from "@/lib/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Cases técnicos completos: Estuda+, Ministério+ e FuelTrack — problema, solução, decisões, desafios e resultados documentados.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Cases técnicos",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      url: `${site.url}/projetos/${project.slug}`,
    })),
  };

  return (
    <>
      <Script
        id="itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Cases técnicos"
            title="Projetos de autoria própria"
            lead="Cada case documenta problema, solução, decisões técnicas, desafios e resultados — da primeira linha de código ao deploy."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
