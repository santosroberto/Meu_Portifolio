import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: string;
}

export function SectionHeading({ eyebrow, title, lead }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-[30px]">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{lead}</p>
      ) : null}
    </Reveal>
  );
}
