import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  const isUpcoming = project.status === "em-breve";

  return (
    <Reveal>
      <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-foreground/5">
        <div className="relative aspect-[2/1] overflow-hidden border-b border-border bg-foreground/5">
          {project.screenshots.length > 0 ? (
            <Image
              src={project.screenshots[0].src}
              alt={project.screenshots[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full items-center justify-center font-mono text-xs uppercase tracking-wide text-muted">
              Case em construção
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {project.shortName}
            </h3>
            {isUpcoming ? <Badge variant="outline">Em breve</Badge> : null}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.tagline}
          </p>

          {project.stack.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.slice(0, 3).flatMap((group) =>
                group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-muted"
                  >
                    {item}
                  </li>
                ))
              )}
            </ul>
          ) : null}

          <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
            {!isUpcoming ? (
              <Link
                href={`/projetos/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
              >
                Ver case completo
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            ) : null}
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                Demonstração
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                <Github className="size-4" aria-hidden="true" />
                Código
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
