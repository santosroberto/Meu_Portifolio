import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Reveal } from "@/components/ui/Reveal";

describe("Reveal", () => {
  it("renderiza o conteúdo passado como filho", () => {
    render(
      <Reveal>
        <p>Conteúdo revelado</p>
      </Reveal>
    );
    expect(screen.getByText("Conteúdo revelado")).toBeInTheDocument();
  });

  it("fica visível imediatamente quando IntersectionObserver não existe (fallback)", () => {
    render(
      <Reveal>
        <span>Fallback</span>
      </Reveal>
    );
    const container = screen.getByText("Fallback").parentElement;
    expect(container?.className).toContain("opacity-100");
  });

  it("aplica o delay via transitionDelay quando informado", () => {
    render(
      <Reveal delay={200}>
        <span>Com delay</span>
      </Reveal>
    );
    const container = screen.getByText("Com delay").parentElement;
    expect(container).toHaveStyle({ transitionDelay: "200ms" });
  });

  it("usa IntersectionObserver quando disponível", () => {
    const observe = vi.fn();
    const unobserve = vi.fn();
    const disconnect = vi.fn();

    class MockObserver {
      observe = observe;
      unobserve = unobserve;
      disconnect = disconnect;
    }

    const OriginalObserver = globalThis.IntersectionObserver;
    vi.stubGlobal("IntersectionObserver", MockObserver);

    try {
      render(
        <Reveal>
          <span>Com observer</span>
        </Reveal>
      );

      const container = screen.getByText("Com observer").parentElement;
      expect(container?.className).toContain("opacity-0");
      expect(observe).toHaveBeenCalled();
    } finally {
      vi.stubGlobal("IntersectionObserver", OriginalObserver);
    }
  });
});