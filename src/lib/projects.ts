import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project | null {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1 || index === projects.length - 1) return null;
  return projects[index + 1];
}
