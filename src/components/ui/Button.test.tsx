import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/Button";

describe("Button", () => {
  it("renderiza um botão quando não há href", () => {
    render(<Button onClick={() => {}}>Clique aqui</Button>);
    const button = screen.getByRole("button", { name: "Clique aqui" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
  });

  it("renderiza um <button type=submit> quando type é submit", () => {
    render(<Button type="submit">Enviar</Button>);
    expect(screen.getByRole("button", { name: "Enviar" })).toHaveAttribute("type", "submit");
  });

  it("renderiza um link interna quando href é informado", () => {
    render(<Button href="/projetos">Ver projetos</Button>);
    const link = screen.getByRole("link", { name: "Ver projetos" });
    expect(link).toHaveAttribute("href", "/projetos");
  });

  it("renderiza link externo com target e rel quando external é true", () => {
    render(<Button href="https://github.com" external>GitHub</Button>);
    const link = screen.getByRole("link", { name: "GitHub" });
    expect(link).toHaveAttribute("href", "https://github.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("aplica as classes de variante e tamanho", () => {
    render(<Button variant="secondary" size="lg">Sobre</Button>);
    const button = screen.getByRole("button", { name: "Sobre" });
    expect(button.className).toContain("border-border");
    expect(button.className).toContain("px-6");
  });

  it("dispara onClick ao clicar", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Ação</Button>);
    screen.getByRole("button", { name: "Ação" }).click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});