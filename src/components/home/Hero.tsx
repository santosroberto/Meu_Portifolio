import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site, heroStack, ctaLabel } from "@/data/site";

export function Hero() {
  return (
    <section className="border-b border-border">
      <Container className="flex flex-col items-center py-20 text-center sm:py-28">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-xs text-muted">
            <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
            {site.role}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl text-[34px] font-bold leading-[1.15] tracking-tight text-foreground sm:text-[48px]">
            Sistemas web que organizam o que você{" "}
            <span className="text-accent">gerencia na mão</span>.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Se você administra estudos, equipes ou o custo de um veículo entre
            planilhas, anotações e grupos de mensagens, eu construo a aplicação
            que centraliza tudo — simples, rápida e acessível de qualquer lugar.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Button href="/contato" size="lg">
              {ctaLabel}
            </Button>
            <Button href="#cases" variant="secondary" size="lg">
              Ver meus projetos
            </Button>
          </div>
        </Reveal>

        {site.availability ? (
          <Reveal delay={320}>
            <p className="mt-6 text-sm text-muted">{site.availability}</p>
          </Reveal>
        ) : null}

        <Reveal delay={400}>
          <ul className="mt-10 flex flex-wrap justify-center gap-2">
            {heroStack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
