"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

const inputClasses =
  "mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-accent";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      "",
      "O que você precisa organizar:",
      subject,
      "",
      "Detalhes:",
      message,
    ].join("\n");

    const mailtoUrl = `mailto:${site.email}?subject=${encodeURIComponent(
      `Projeto: ${subject}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-foreground">Seu nome</span>
          <input
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={inputClasses}
            placeholder="Como posso te chamar?"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-foreground">Seu e-mail</span>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={inputClasses}
            placeholder="voce@exemplo.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium text-foreground">
          O que você precisa organizar?
        </span>
        <input
          type="text"
          required
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          className={inputClasses}
          placeholder="Ex.: escalas da minha equipe, controle de abastecimento..."
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-foreground">
          Conte mais sobre o projeto
        </span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${inputClasses} resize-y`}
          placeholder="Como funciona hoje, o que incomoda e o que você imagina como solução."
        />
      </label>

      <div>
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Enviar mensagem
        </Button>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          O formulário abre seu e-mail com a mensagem pronta — sem envio por
          servidor.
        </p>
      </div>
    </form>
  );
}
