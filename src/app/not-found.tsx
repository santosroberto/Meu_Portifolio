import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="border-b border-border">
      <Container className="flex flex-col items-center py-24 text-center sm:py-32">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-accent">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
          Página não encontrada
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          O conteúdo que você procura não existe ou foi movido.
        </p>
        <div className="mt-8">
          <Button href="/">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Voltar para o início
          </Button>
        </div>
      </Container>
    </section>
  );
}
