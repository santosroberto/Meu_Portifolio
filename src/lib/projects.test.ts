import { describe, expect, it } from "vitest";
import { getAllProjects, getNextProject, getProjectBySlug } from "@/lib/projects";

describe("projects", () => {
  it("getAllProjects retorna a lista de projetos", () => {
    const all = getAllProjects();
    expect(all.length).toBeGreaterThan(0);
    expect(all[0]).toMatchObject({ slug: "estuda-mais", status: "publicado" });
  });

  it("getProjectBySlug retorna o projeto correto", () => {
    const project = getProjectBySlug("fueltrack");
    expect(project).toBeDefined();
    expect(project?.shortName).toBeTypeOf("string");
  });

  it("getProjectBySlug retorna undefined para slug inexistente", () => {
    expect(getProjectBySlug("nao-existe")).toBeUndefined();
  });

  it("getNextProject retorna o próximo projeto na ordem", () => {
    const all = getAllProjects();
    const next = getNextProject("estuda-mais");
    expect(next?.slug).toBe(all[1].slug);
  });

  it("getNextProject retorna null para o último projeto", () => {
    const all = getAllProjects();
    const last = all[all.length - 1];
    expect(getNextProject(last.slug)).toBeNull();
  });

  it("getNextProject retorna null para slug inexistente", () => {
    expect(getNextProject("nao-existe")).toBeNull();
  });

  it("todos os projetos publicados possuem dados essenciais", () => {
    const published = getAllProjects().filter((p) => p.status === "publicado");
    expect(published.length).toBeGreaterThan(0);

    for (const project of published) {
      expect(project.slug).toBeTruthy();
      expect(project.name).toBeTruthy();
      expect(project.tagline).toBeTruthy();
      expect(project.stack.length).toBeGreaterThan(0);
      expect(project.features.length).toBeGreaterThan(0);
      expect(["publicado", "em-breve"]).toContain(project.status);
    }
  });
});