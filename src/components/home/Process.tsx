import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Entender",
    text: "Sua rotina, o fluxo atual e a dor real — antes de qualquer linha de código.",
  },
  {
    number: "02",
    title: "Desenhar",
    text: "Telas, fluxos e estrutura de dados validados antes da implementação.",
  },
  {
    number: "03",
    title: "Construir",
    text: "Código limpo, mobile-first e revisões contínuas ao longo do caminho.",
  },
  {
    number: "04",
    title: "Entregar",
    text: "Deploy, documentação e suporte aos ajustes depois do lançamento.",
  },
];

export function Process() {
  return (
    <section id="processo" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Como eu trabalho"
          title="Do problema à entrega, sem surpresa"
          lead="Um processo claro e previsível — você sabe o que acontece em cada etapa."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-6">
                <span className="font-mono text-sm font-semibold text-accent">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
