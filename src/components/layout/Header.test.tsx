import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "@/components/layout/Header";
import { navLinks, site, ctaLabel } from "@/data/site";

describe("Header", () => {
  it("exibe a identidade do site e todos os links de navegação", () => {
    render(<Header />);
    expect(screen.getByText(site.name)).toBeInTheDocument();
    expect(screen.getByText(site.initials)).toBeInTheDocument();

    for (const link of navLinks) {
      const anchor = screen.getByRole("link", { name: link.label });
      expect(anchor).toHaveAttribute("href", link.href);
    }
  });

  it("exibe o botão de chamada de ação para a página de contato", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: ctaLabel })).toHaveAttribute("href", "/contato");
  });

  it("abre e fecha o menu mobile", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const toggle = screen.getByRole("button", { name: "Abrir menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation", { name: "Menu mobile" })).not.toBeInTheDocument();

    await user.click(toggle);
    expect(screen.getByRole("navigation", { name: "Menu mobile" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Fechar menu" }));
    expect(screen.queryByRole("navigation", { name: "Menu mobile" })).not.toBeInTheDocument();
  });
});