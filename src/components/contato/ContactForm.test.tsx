import { describe, expect, it, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "@/components/contato/ContactForm";
import { site } from "@/data/site";

function mockWindowLocation() {
  const location = { href: "" } as Location;
  Object.defineProperty(window, "location", {
    configurable: true,
    writable: true,
    value: location,
  });
  return location;
}

describe("ContactForm", () => {
  beforeEach(() => {
    mockWindowLocation();
  });

  it("renderiza o formulário com todos os campos", () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText("Como posso te chamar?")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("voce@exemplo.com")).toBeInTheDocument();
    expect(screen.getByText("Seu nome")).toBeInTheDocument();
    expect(screen.getByText("Seu e-mail")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Enviar mensagem" })).toBeInTheDocument();
  });

  it("abre o mailto com os dados preenchidos ao submeter", async () => {
    const user = userEvent.setup();
    const location = mockWindowLocation();

    render(<ContactForm />);

    await user.type(screen.getByPlaceholderText("Como posso te chamar?"), "João Silva");
    await user.type(screen.getByPlaceholderText("voce@exemplo.com"), "joao@email.com");
    await user.type(
      screen.getByPlaceholderText("Ex.: escalas da minha equipe, controle de abastecimento..."),
      "Controle de estoque"
    );
    await user.type(
      screen.getByPlaceholderText(
        "Como funciona hoje, o que incomoda e o que você imagina como solução."
      ),
      "Preciso automatizar o controle de estoque da minha empresa."
    );

    await user.click(screen.getByRole("button", { name: "Enviar mensagem" }));

    expect(location.href).toContain(`mailto:${site.email}`);
    const decoded = decodeURIComponent(location.href);
    expect(decoded).toContain("João Silva");
    expect(decoded).toContain("joao@email.com");
    expect(decoded).toContain("Controle de estoque");
  });

  it("não abre email se o formulário estiver vazio (validação nativa)", async () => {
    const user = userEvent.setup();
    const location = mockWindowLocation();

    render(<ContactForm />);
    await user.click(screen.getByRole("button", { name: "Enviar mensagem" }));

    expect(location.href).toBe("");
  });
});