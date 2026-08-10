import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types/project";

export function CaseHeader({ project }: { project: Project }) {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="py-10 sm:py-14">
        <Link
          href="/projetos"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Todos os casos
        </Link>

        <div className="mt-6 flex items-center gap-3">
          <h1 className="max-w-3xl text-[28px] font-bold leading-tight tracking-tight text-foreground sm:text-[38px]">
            {project.name}
          </h1>
          {project.status === "em-breve" ? (
            <Badge variant="outline">Em breve</Badge>
          ) : null}
        </div>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {project.tagline}
        </p>

        {project.demoUrl || project.githubUrl ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.demoUrl ? (
              <Button href={project.demoUrl} external size="lg">
                Ver demonstração
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Button>
            ) : null}
            {project.githubUrl ? (
              <Button href={project.githubUrl} external variant="secondary" size="lg">
                <Github className="size-4" aria-hidden="true" />
                Código no GitHub
              </Button>
            ) : null}
          </div>
        ) : null}

        {project.screenshots.length > 0 ? (
          <div className="relative mx-auto mt-10 max-w-[768px] aspect-[2/1] overflow-hidden rounded-xl border border-border">
            <Image
              src={project.screenshots[0].src}
              alt={project.screenshots[0].alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1120px"
              className="object-cover"
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
