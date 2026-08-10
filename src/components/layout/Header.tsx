"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "./ThemeToggle";
import { site, navLinks, ctaLabel } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between gap-4 md:h-16">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-accent font-mono text-xs font-bold text-accent-foreground">
            {site.initials}
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href="/contato" size="md">
            {ctaLabel}
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {open ? (
        <nav
          className="border-t border-border bg-surface md:hidden"
          aria-label="Menu mobile"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-border/20"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 px-3 pb-2">
              <Button
                href="/contato"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {ctaLabel}
              </Button>
            </div>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
