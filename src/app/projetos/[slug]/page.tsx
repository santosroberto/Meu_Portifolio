import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CaseHeader } from "@/components/case/CaseHeader";
import { CaseSections } from "@/components/case/CaseSections";
import { NextCase } from "@/components/case/NextCase";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

interface CasePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.tagline,
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <CaseHeader project={project} />
      <Container className="py-16 sm:py-20">
        <CaseSections project={project} />
      </Container>
      <NextCase slug={project.slug} />
    </>
  );
}
