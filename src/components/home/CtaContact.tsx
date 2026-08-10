import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site, ctaLabel } from "@/data/site";

export function CtaContact() {
  return (
    <section className="border-t border-border bg-surface">
      <Container className="flex flex-col items-center py-20 text-center sm:py-24">
        <Reveal>
          <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-foreground sm:text-[30px]">
            Tem uma ideia ou um processo que precisa de organização?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Conte sua situação em poucas linhas: o que você controla hoje na mão
            e o que gostaria que um sistema fizesse por você. Eu respondo com uma
            avaliação honesta e um caminho possível.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Button href="/contato" size="lg">
              {ctaLabel}
            </Button>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              ou escreva para {site.email}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
