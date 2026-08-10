import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const groups = [
  {
    category: "Front-end",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    category: "Back-end",
    items: ["Node.js", "API REST", "Java"],
  },
  {
    category: "Banco de dados",
    items: ["Supabase", "PostgreSQL", "LocalStorage (offline)"],
  },
  {
    category: "Ferramentas e plataformas",
    items: ["Git", "GitHub", "Vercel", "PWA / Service Workers"],
  },
];

export function Stack() {
  return (
    <section className="border-t border-border py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Tecnologias"
          title="A stack que sustenta os cases"
          lead="Escolhida para resolver o problema certo com o menor custo de manutenção."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, index) => (
            <Reveal key={group.category} delay={index * 80}>
              <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-6">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-accent">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
