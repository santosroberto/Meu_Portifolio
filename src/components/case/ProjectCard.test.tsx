import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "@/components/case/ProjectCard";
import { getAllProjects } from "@/lib/projects";

describe("ProjectCard", () => {
  it("renderiza nome, tagline e link para o case completo", () => {
    const project = getAllProjects()[0];
    render(<ProjectCard project={project} />);

    expect(screen.getByText(project.shortName)).toBeInTheDocument();
    expect(screen.getByText(project.tagline)).toBeInTheDocument();

    const link = screen.getByRole("link", { name: /Ver case completo/i });
    expect(link).toHaveAttribute("href", `/projetos/${project.slug}`);
  });

  it("renderiza a primeira imagem do projeto como alternativa", () => {
    const project = getAllProjects()[0];
    render(<ProjectCard project={project} />);

    const image = document.querySelector("img");
    expect(image).not.toBeNull();
    expect(image?.getAttribute("src")).toBe(project.screenshots[0].src);
    expect(image?.getAttribute("alt")).toBe(project.screenshots[0].alt);
  });

  it("exibe o badge Em breve para projetos não publicados", () => {
    const upcoming = getAllProjects().find((p) => p.status === "em-breve");
    if (!upcoming) return;

    render(<ProjectCard project={upcoming} />);
    expect(screen.getByText("Em breve")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /Ver case completo/i })).not.toBeInTheDocument();
  });

  it("exibe links de demonstração e código quando disponíveis", () => {
    const published = getAllProjects().find((p) => p.demoUrl && p.githubUrl);
    if (!published) return;

    render(<ProjectCard project={published} />);
    expect(screen.getByRole("link", { name: "Demonstração" })).toHaveAttribute(
      "href",
      published.demoUrl
    );
    expect(screen.getByRole("link", { name: "Código" })).toHaveAttribute(
      "href",
      published.githubUrl
    );
  });

  it("mostra até 3 itens da stack", () => {
    const project = getAllProjects()[0];
    render(<ProjectCard project={project} />);

    const stackItems = project.stack.slice(0, 3).flatMap((group) => group.items);
    for (const item of stackItems) {
      expect(screen.getAllByText(item).length).toBeGreaterThan(0);
    }
  });
});