import { BarChart3, Building2, Monitor, Plug, Rocket, Smartphone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    icon: Monitor,
    title: "Aplicações web completas",
    text: "Sistemas com front-end, back-end e banco de dados, prontos para uso real — da tela de login ao deploy.",
  },
  {
    icon: BarChart3,
    title: "Sistemas administrativos e dashboards",
    text: "Painéis que transformam dados espalhados em indicadores claros: custos, consumo, desempenho, frequência.",
  },
  {
    icon: Building2,
    title: "Sistemas internos para pequenos negócios",
    text: "Substitua planilhas e grupos de mensagens por um sistema próprio: equipes, escalas, clientes, agendamentos.",
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    text: "Aplicações instaláveis que funcionam offline, no computador e no celular, sem passar por loja de aplicativos.",
  },
  {
    icon: Rocket,
    title: "Landing pages e sites institucionais",
    text: "Páginas rápidas, responsivas e otimizadas para SEO que apresentam seu negócio com profissionalismo.",
  },
  {
    icon: Plug,
    title: "Integrações com APIs",
    text: "Conexão de aplicações com serviços externos — autenticação, armazenamento e, em planejamento, WhatsApp Business — para automatizar comunicações e processos.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="border-y border-border bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Serviços"
          title="O que posso fazer por você"
          lead="Capacidades sustentadas pelos cases deste portfólio — sem promessas que os projetos não comprovam."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 80}>
              <div className="flex h-full flex-col rounded-xl border border-border bg-background p-6">
                <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <service.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
