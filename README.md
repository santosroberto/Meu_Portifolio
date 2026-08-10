# Portfólio Profissional — Desenvolvedor Full Stack

Portfólio pessoal em **Next.js (App Router) + TypeScript + Tailwind CSS** com cases técnicos documentados de ponta a ponta: problema real, solução, decisões técnicas, desafios, resultados e roadmap.

## Projetos apresentados

- **Estuda+** — PWA de organização de estudos, 100% offline e sem cadastro.
- **Ministério+** — Plataforma de gestão ministerial: membros, equipes, escalas e eventos.
- **FuelTrack** — Gestão de combustível e manutenção veicular com indicadores automáticos.

## Stack

- Next.js 15 (App Router, RSC, `generateStaticParams`)
- React 19 + TypeScript (strict)
- Tailwind CSS 4 (dark mode com class)
- lucide-react (ícones)
- SEO: sitemap.xml, robots.txt, Open Graph, JSON-LD (Person + ItemList)

## Scripts

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção (inclui lint + type check)
npm start        # roda o build de produção
npm run lint     # ESLint (flat config)
```

## Estrutura

```
src/
├── app/            # páginas, layout, sitemap, robots, not-found
├── components/
│   ├── case/       # cards e páginas de case
│   ├── contato/    # formulário de contato
│   ├── home/       # seções da página inicial
│   ├── layout/     # Header, Footer, ThemeToggle
│   └── ui/         # primitivos (Button, Container, Badge, Reveal...)
├── data/           # site.ts (dados pessoais) e projects.ts (cases)
├── lib/            # acesso aos dados dos projetos
└── types/          # tipos TypeScript
public/screenshots/ # imagens dos cases
```

## Personalização

Tudo o que é pessoal está centralizado em `src/data/site.ts` e `src/data/projects.ts`:

- **site.ts** — nome, e-mail, GitHub, LinkedIn, disponibilidade e URL.
- **projects.ts** — cada case é um objeto `Project` tipado em `src/types/project.ts`; para adicionar um projeto, basta adicionar um novo objeto na lista.

### Antes de publicar

- Substitua `site.url` (atualmente `https://seu-dominio.com.br`) pelo domínio real — ele alimenta `sitemap.xml`, `robots.txt`, Open Graph e JSON-LD.
- Substitua as capturas de tela em `public/screenshots/` pelas imagens reais de cada projeto.

## Deploy

Deploy recomendado na **Vercel** (GitHub → importar repositório → deploy automático). Nenhuma variável de ambiente é necessária.

## Licença

Uso pessoal — conteúdo e identidade pertencem ao autor.
