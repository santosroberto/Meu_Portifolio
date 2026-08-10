import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="sobre" className="py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl">
          <p className="text-center font-mono text-xs font-medium uppercase tracking-[0.08em] text-accent">
            Sobre mim
          </p>
          <h2 className="mt-3 text-center text-2xl font-bold tracking-tight text-foreground sm:text-[30px]">
            Quem constrói esses projetos
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
            <p>
              Sou {site.name}, {site.role}. Comecei a programar para resolver um
              problema meu: não conseguia acompanhar os estudos entre tantos
              materiais. Essa necessidade virou o Estuda+, e depois dele vieram o
              Ministério+ e o FuelTrack — ambos nascidos de dores reais de outras
              pessoas.
            </p>
            <p>
              Hoje construo aplicações web completas, do banco de dados à
              interface, com foco em produtos simples de usar e fáceis de manter.
              Meu trabalho começa antes do código: entender o processo que
              precisa ser organizado e desenhar a solução certa para ele.
            </p>
            <p>
              O que busco: projetos reais onde eu possa aplicar o que aprendi e
              continuar evoluindo — entregando software que funciona no dia a dia.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            <li className="rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-[11px] text-muted">
              {site.location}
            </li>
            <li className="rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-[11px] text-muted">
              Full Stack: React, Next.js, Node.js, TypeScript
            </li>
            <li className="rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-[11px] text-muted">
              3 projetos de autoria própria
            </li>
          </ul>

          <div className="mt-8 text-center">
            <Button href="/contato" variant="secondary" size="lg">
              Fale comigo
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
