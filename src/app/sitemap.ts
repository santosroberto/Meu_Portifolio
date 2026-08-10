import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes: MetadataRoute.Sitemap = getAllProjects().map(
    (project) => ({
      url: `${site.url}/projetos/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/projetos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/contato`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    ...projectRoutes,
  ];
}
