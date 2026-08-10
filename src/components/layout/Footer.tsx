import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { site, navLinks } from "@/data/site";
import { getAllProjects } from "@/lib/projects";

export function Footer() {
  const projects = getAllProjects();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-accent font-mono text-xs font-bold text-accent-foreground">
              {site.initials}
            </span>
            <span className="font-semibold tracking-tight text-foreground">
              {site.name}
            </span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {site.role} — transformo processos espalhados por planilhas e grupos
            de mensagens em aplicações web simples e funcionais.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
            Navegação
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-muted transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contato" className="text-muted transition-colors hover:text-foreground">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
            Projetos
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/projetos/${project.slug}`}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {project.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
            Contato
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <Mail className="size-4" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <Github className="size-4" aria-hidden="true" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <Linkedin className="size-4" aria-hidden="true" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <p className="font-mono">Feito com Next.js + Tailwind CSS</p>
        </Container>
      </div>
    </footer>
  );
}
