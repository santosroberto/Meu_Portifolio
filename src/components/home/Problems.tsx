import Link from "next/link";
import { ArrowRight, BookOpen, Car, Church } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const problems = [
  {
    icon: BookOpen,
    title: "Estudos sem acompanhamento",
    text: "Progresso, metas e tempo dedicado se perdem entre livros, cursos, PDFs e vídeos.",
    case: "Estuda+",
    href: "/projetos/estuda-mais",
  },
  {
    icon: Church,
    title: "Escalas e equipes dispersas",
    text: "Voluntários, escalas e eventos espalhados em grupos de mensagens e planilhas.",
    case: "Ministério+",
    href: "/projetos/ministerio-mais",
  },
  {
    icon: Car,
    title: "Custo do veículo invisível",
    text: "Abastecimentos e manutenções sem registro: consumo e gasto real desconhecidos.",
    case: "FuelTrack",
    href: "/projetos/fueltrack",
  },
];

export function Problems() {
  return (
    <section id="problemas" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Problemas que resolvo"
          title="Dores reais, soluções completas"
          lead="Cada projeto deste portfólio começou com um processo real controlado à mão. Esta é a dor que ele resolve."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((problem, index) => (
            <Reveal key={problem.title} delay={index * 80}>
              <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-6">
                <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <problem.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                  {problem.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {problem.text}
                </p>
                <Link
                  href={problem.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  Como o {problem.case} resolveu
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
