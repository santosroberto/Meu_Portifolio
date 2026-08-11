import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "@/components/ui/Badge";
import { StackChips } from "@/components/ui/StackChips";

describe("Badge", () => {
  it("renderiza o conteúdo filho", () => {
    render(<Badge>Em breve</Badge>);
    expect(screen.getByText("Em breve")).toBeInTheDocument();
  });

  it("usa a variante neutral por padrão", () => {
    render(<Badge>Neutro</Badge>);
    expect(screen.getByText("Neutro").className).toContain("bg-foreground/5");
  });

  it("aplica a classe da variante success", () => {
    render(<Badge variant="success">Disponível</Badge>);
    expect(screen.getByText("Disponível").className).toContain("text-success");
  });

  it("aplica a classe da variante warning", () => {
    render(<Badge variant="warning">Atenção</Badge>);
    expect(screen.getByText("Atenção").className).toContain("text-warning");
  });

  it("aplica a classe da variante outline", () => {
    render(<Badge variant="outline">Borda</Badge>);
    expect(screen.getByText("Borda").className).toContain("border-dashed");
  });
});

describe("StackChips", () => {
  it("renderiza todos os itens da lista", () => {
    render(<StackChips items={["React", "Next.js", "TypeScript"]} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("renderiza uma lista vazia sem quebrar", () => {
    render(<StackChips items={[]} />);
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});