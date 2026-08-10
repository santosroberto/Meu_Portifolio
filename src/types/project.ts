export type FeatureStatus = "disponivel" | "planejada";

export type ProjectStatus = "publicado" | "em-breve";

export interface ProjectFeature {
  title: string;
  description: string;
  status: FeatureStatus;
}

export interface ProjectStack {
  category: string;
  items: string[];
}

export interface ProjectDecision {
  decision: string;
  reason: string;
}

export interface ProjectChallenge {
  challenge: string;
  resolution: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  status: ProjectStatus;
  overview: string;
  problem: string;
  context: string;
  audience: string;
  solution: string;
  features: ProjectFeature[];
  stack: ProjectStack[];
  decisions: ProjectDecision[];
  challenges: ProjectChallenge[];
  results: string[];
  screenshots: ProjectScreenshot[];
  demoUrl: string | null;
  githubUrl: string | null;
  learnings: string[];
  roadmap: ProjectFeature[];
}

export interface SiteData {
  name: string;
  initials: string;
  role: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  url: string;
  availability: string;
}
