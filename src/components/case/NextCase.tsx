import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getNextProject } from "@/lib/projects";
import { ctaLabel } from "@/data/site";

export function NextCase({ slug }: { slug: string }) {
  const next = getNextProject(slug);

  return (
    <section className="border-t border-border bg-surface">
      <Container className="py-16 text-center sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-[30px]">
          Tem um problema parecido? Vamos resolver.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted">
          Cada case deste portfólio começou como a sua situação: um processo
          manual que precisava de software.
        </p>
        <div className="mt-8">
          <Button href="/contato" size="lg">
            {ctaLabel}
          </Button>
        </div>

        <div className="mx-auto mt-14 flex max-w-xl flex-col items-center gap-4 border-t border-border pt-10">
          {next ? (
            <>
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                Próximo case
              </p>
              <Link
                href={`/projetos/${next.slug}`}
                className="group inline-flex items-center gap-2 text-lg font-semibold text-foreground transition-colors hover:text-accent"
              >
                {next.shortName}
                <ArrowRight
                  className="size-5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </>
          ) : (
            <Link
              href="/projetos"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Ver todos os cases
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
