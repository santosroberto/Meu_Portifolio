import { describe, expect, it, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

describe("ThemeToggle", () => {
  beforeEach(() => {
    document.documentElement.classList.remove("dark");
    localStorage.clear();
  });

  it("inicia no modo claro e alterna para escuro ao clicar", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    const button = screen.getByRole("button", { name: "Ativar tema escuro" });
    await user.click(button);

    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(screen.getByRole("button", { name: "Ativar tema claro" })).toBeInTheDocument();
  });

  it("alterna de volta para o modo claro", async () => {
    const user = userEvent.setup();
    document.documentElement.classList.add("dark");

    render(<ThemeToggle />);
    await user.click(screen.getByRole("button", { name: "Ativar tema claro" }));

    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("light");
  });
});