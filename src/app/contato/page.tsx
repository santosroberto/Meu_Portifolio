import type { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contato/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Vamos construir seu projeto? Conte sua situação e receba uma avaliação honesta de um desenvolvedor Full Stack.",
};

export default function ContactPage() {
  return (
    <section className="border-b border-border bg-surface py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div>
            <h1 className="text-[28px] font-bold leading-tight tracking-tight text-foreground sm:text-[38px]">
              Vamos construir seu projeto?
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Conte sua situação em poucas linhas: o que você controla hoje na
              mão — planilha, caderno, grupo de mensagens — e o que gostaria que
              um sistema fizesse por você. Eu respondo com uma avaliação honesta
              e um caminho possível.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <Mail className="size-4" aria-hidden="true" />
                {site.email}
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <Github className="size-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <Linkedin className="size-4" aria-hidden="true" />
                LinkedIn
              </a>
            </div>

            {site.availability ? (
              <div className="mt-8 rounded-xl border border-border bg-background p-5">
                <p className="text-sm font-semibold text-foreground">
                  Disponibilidade
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {site.availability}
                </p>
              </div>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
