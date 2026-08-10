import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/types/project";

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-accent">
      {children}
    </p>
  );
}

function TextBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <h3 className="text-sm font-semibold tracking-tight text-foreground">
        {label}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
    </div>
  );
}

export function CaseSections({ project }: { project: Project }) {
  return (
    <div className="space-y-16 sm:space-y-20">
      <Reveal>
        <section>
          <Eyebrow>Visão geral</Eyebrow>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground">
            {project.overview}
          </p>
          {project.context || project.audience ? (
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {project.context ? (
                <TextBlock label="Contexto" text={project.context} />
              ) : null}
              {project.audience ? (
                <TextBlock label="Para quem é" text={project.audience} />
              ) : null}
            </div>
          ) : null}
        </section>
      </Reveal>

      {project.problem || project.solution ? (
        <Reveal>
          <section className="grid gap-6 lg:grid-cols-2">
            {project.problem ? (
              <div>
                <Eyebrow>O problema</Eyebrow>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {project.problem}
                </p>
              </div>
            ) : null}
            {project.solution ? (
              <div>
                <Eyebrow>A solução</Eyebrow>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {project.solution}
                </p>
              </div>
            ) : null}
          </section>
        </Reveal>
      ) : null}

      {project.features.length > 0 ? (
        <Reveal>
          <section>
            <Eyebrow>Funcionalidades</Eyebrow>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="success">Disponível</Badge>
              <Badge variant="warning">Planejada</Badge>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex h-full flex-col rounded-xl border border-border bg-surface p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-semibold tracking-tight text-foreground">
                      {feature.title}
                    </h3>
                    <Badge
                      variant={
                        feature.status === "disponivel" ? "success" : "warning"
                      }
                    >
                      {feature.status === "disponivel"
                        ? "Disponível"
                        : "Planejada"}
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      ) : null}

      {project.stack.length > 0 || project.decisions.length > 0 ? (
        <Reveal>
          <section>
            <Eyebrow>Arquitetura e decisões técnicas</Eyebrow>
            {project.stack.length > 0 ? (
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {project.stack.map((group) => (
                  <div
                    key={group.category}
                    className="rounded-xl border border-border bg-surface p-5"
                  >
                    <h3 className="text-sm font-semibold tracking-tight text-foreground">
                      {group.category}
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : null}
            {project.decisions.length > 0 ? (
              <div className="mt-6 space-y-4">
                {project.decisions.map((decision) => (
                  <div
                    key={decision.decision}
                    className="rounded-xl border border-border bg-surface p-5"
                  >
                    <h3 className="font-semibold tracking-tight text-foreground">
                      {decision.decision}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {decision.reason}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </section>
        </Reveal>
      ) : null}

      {project.challenges.length > 0 ? (
        <Reveal>
          <section>
            <Eyebrow>Desafios e como foram resolvidos</Eyebrow>
            <div className="mt-6 space-y-4">
              {project.challenges.map((item) => (
                <div
                  key={item.challenge}
                  className="grid gap-4 rounded-xl border border-border bg-surface p-5 sm:grid-cols-2"
                >
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight text-foreground">
                      {item.challenge}
                    </h3>
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed text-muted">
                      {item.resolution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      ) : null}

      {project.results.length > 0 ? (
        <Reveal>
          <section>
            <Eyebrow>Resultados</Eyebrow>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.results.map((result) => (
                <li
                  key={result}
                  className="flex items-start gap-3 rounded-xl border border-border bg-surface p-5 text-sm leading-relaxed text-muted"
                >
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-success"
                    aria-hidden="true"
                  />
                  {result}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      ) : null}

      {project.screenshots.length > 1 ? (
        <Reveal>
          <section>
            <Eyebrow>Screenshots</Eyebrow>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.screenshots.slice(1).map((screenshot) => (
                <div
                  key={screenshot.src}
                  className="relative aspect-[2/1] overflow-hidden rounded-xl border border-border"
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      ) : null}

      {project.learnings.length > 0 || project.roadmap.length > 0 ? (
        <Reveal>
          <section className="grid gap-6 lg:grid-cols-2">
            {project.learnings.length > 0 ? (
              <div>
                <Eyebrow>O que aprendi</Eyebrow>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.learnings.map((learning) => (
                    <li
                      key={learning}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {project.roadmap.length > 0 ? (
              <div>
                <Eyebrow>Próximas evoluções</Eyebrow>
                <div className="mt-6 space-y-4">
                  {project.roadmap.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-border bg-surface p-5"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold tracking-tight text-foreground">
                          {item.title}
                        </h3>
                        <Badge variant="warning">Planejada</Badge>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        </Reveal>
      ) : null}
    </div>
  );
}
