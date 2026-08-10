import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "estuda-mais",
    name: "Estuda+ — Gerenciador Inteligente de Estudos",
    shortName: "Estuda+",
    tagline:
      "Gerenciador inteligente de estudos — offline, sem cadastro, pronto para instalar.",
    status: "publicado",
    overview:
      "PWA de organização de estudos que funciona 100% offline, sem cadastro e sem servidor. Os dados ficam no dispositivo do usuário — estudar não depende de internet nem de conta.",
    problem:
      "Quem estuda por conta própria — livros, cursos, vídeos, PDFs, artigos — raramente acompanha progresso, metas ou tempo dedicado. As ferramentas existentes cobram recursos essenciais, exigem internet constante ou poluem a tela com funções que ninguém usa.",
    context:
      "Projeto de autoria própria. Nasceu da necessidade de organizar meus próprios estudos e da mesma dor observada em outras pessoas que estudam sozinhas.",
    audience:
      "Estudantes autodidatas (concursos, idiomas, cursos online) que usam materiais variados e precisam de um lugar único para acompanhar evolução — sem assinatura e sem depender de conexão.",
    solution:
      "Uma aplicação instalável em computador e celular que reúne o essencial: cadastro de estudos, sessões de aprendizado, metas, progresso, estatísticas, Pomodoro, relatórios e exportação.",
    features: [
      {
        title: "Cadastro de estudos",
        description: "Organize materiais, cursos, livros e disciplinas em um único lugar.",
        status: "disponivel",
      },
      {
        title: "Sessões de aprendizado",
        description: "Registre cada sessão com data, duração e material estudado.",
        status: "disponivel",
      },
      {
        title: "Metas",
        description: "Defina metas de tempo e frequência por estudo ou disciplina.",
        status: "disponivel",
      },
      {
        title: "Progresso",
        description: "Acompanhe o avanço de cursos e livros de forma visual.",
        status: "disponivel",
      },
      {
        title: "Estatísticas",
        description: "Gráficos de dedicação, tempo por material e evolução.",
        status: "disponivel",
      },
      {
        title: "Pomodoro",
        description: "Técnica de foco integrada ao registro das sessões.",
        status: "disponivel",
      },
      {
        title: "Relatórios",
        description: "Resumo do desempenho por período, material e meta.",
        status: "disponivel",
      },
      {
        title: "Exportação de dados",
        description: "Exporte seu histórico em PDF e CSV quando precisar.",
        status: "disponivel",
      },
      {
        title: "Instalação no dispositivo",
        description: "Instale no computador ou celular como um aplicativo nativo.",
        status: "disponivel",
      },
      {
        title: "Funcionamento offline",
        description: "Uso completo sem internet — inclusive relatórios e estatísticas.",
        status: "disponivel",
      },
      {
        title: "Sincronização entre dispositivos",
        description: "Opção de sincronizar os dados em múltiplos dispositivos.",
        status: "planejada",
      },
      {
        title: "Simulados com correção",
        description: "Simulados com correção automática e histórico de desempenho.",
        status: "planejada",
      },
      {
        title: "Alertas de rotina",
        description: "Lembretes de estudo e de metas em risco de não cumprimento.",
        status: "planejada",
      },
    ],
    stack: [
      { category: "Front-end", items: ["HTML5", "CSS3", "JavaScript ES6+"] },
      { category: "Persistência", items: ["LocalStorage"] },
      { category: "Visualização e exportação", items: ["Chart.js", "jsPDF", "CSV"] },
      { category: "PWA", items: ["Manifest", "Service Worker", "Cache Offline"] },
    ],
    decisions: [
      {
        decision: "Sem framework, de propósito",
        reason:
          "O escopo não exigia um framework: menos dependências, carregamento rápido em qualquer dispositivo e operação sem servidor. JavaScript modular (ES Modules) manteve o código organizado.",
      },
      {
        decision: "LocalStorage com schema versionado",
        reason:
          "Mudanças na estrutura de dados precisavam sobreviver a atualizações. Cada versão de schema tem uma migração, evitando dados corrompidos.",
      },
      {
        decision: "Service Worker com cache-first",
        reason:
          "Para o offline ser real, os assets são pré-cacheados na instalação e a navegação funciona em cache runtime.",
      },
    ],
    challenges: [
      {
        challenge: "Persistência consistente no LocalStorage",
        resolution:
          "Versionamento de schema com migrações por versão; cada leitura valida e atualiza a estrutura antes de usar.",
      },
      {
        challenge: "Offline completo e instalável",
        resolution:
          "Precache de todos os assets no Service Worker e estratégia cache-first com fallback offline.",
      },
      {
        challenge: "Estatísticas sempre atualizadas",
        resolution:
          "Indicadores derivados dos dados brutos a cada alteração — nunca armazenados como cópia, o que evita inconsistências.",
      },
      {
        challenge: "Boa experiência em qualquer tela",
        resolution:
          "Design mobile-first com breakpoints testados de 320px a desktop.",
      },
    ],
    results: [
      "Aplicação instalável em Windows, macOS, Android e iOS.",
      "Funcionamento completo offline — a aplicação não depende de rede para nenhuma funcionalidade.",
      "Nenhum dado do usuário sai do dispositivo: sem coleta, sem rastreamento.",
      "Navegação por teclado e leitores de tela.",
      "A arquitetura estudada aqui (módulos JS, PWA, Service Workers) foi a base para os projetos seguintes em React e Next.js.",
    ],
    screenshots: [
      {
        src: "/screenshots/Estuda_01.png",
        alt: "Tela de estatísticas e indicadores do Estuda+",
      },
      {
        src: "/screenshots/Estuda_02.png",
        alt: "Lista de estudos e metas do Estuda+",
      },
      {
        src: "/screenshots/Estuda_03.png",
        alt: "Sessão de estudo com Pomodoro no Estuda+",
      },
    ],
    demoUrl: null,
    githubUrl: null,
    learnings: [
      "Manipulação de DOM",
      "Arquitetura JavaScript modular",
      "Gerenciamento de estado local",
      "Progressive Web Apps e Service Workers",
      "Cache offline",
      "Responsividade mobile-first",
      "Visualização de dados",
      "Experiência do usuário",
    ],
    roadmap: [
      {
        title: "Sincronização entre dispositivos",
        description: "Conta opcional com sincronização via Supabase.",
        status: "planejada",
      },
      {
        title: "Simulados com correção automática",
        description: "Cadastro de questões com correção e histórico de desempenho.",
        status: "planejada",
      },
      {
        title: "Alertas de rotina",
        description: "Lembretes de estudo e metas em risco.",
        status: "planejada",
      },
    ],
  },
  {
    slug: "ministerio-mais",
    name: "Ministério+ — Plataforma Inteligente para Gestão Ministerial",
    shortName: "Ministério+",
    tagline:
      "Plataforma que tira escalas, equipes e eventos dos grupos de mensagens.",
    status: "publicado",
    overview:
      "Plataforma que centraliza a gestão de igrejas e ministérios: membros, equipes, escalas de voluntários, eventos e comunicação em um único sistema.",
    problem:
      "Igrejas e ministérios administram escalas, equipes, eventos e comunicação por grupos de mensagens, planilhas e anotações espalhadas. O resultado: mensagens perdidas, confirmações sem registro e sobrecarga administrativa para os líderes.",
    context:
      "Projeto de autoria própria, baseado na rotina real de ministérios — onde o WhatsApp e a planilha fazem o papel de sistema de gestão.",
    audience:
      "Líderes e administradores de igrejas e ministérios que coordenam voluntários e eventos com frequência, majoritariamente pelo celular.",
    solution:
      "Sistema único para gerenciar membros, equipes, escalas de voluntários, eventos, notificações, lembretes e confirmações de presença — com planejamento de automação via WhatsApp Business.",
    features: [
      {
        title: "Gestão de membros",
        description: "Cadastro, perfil e histórico de participação de cada voluntário.",
        status: "disponivel",
      },
      {
        title: "Equipes",
        description: "Organize voluntários em equipes com responsabilidades claras.",
        status: "disponivel",
      },
      {
        title: "Escalas de voluntários",
        description: "Monte escalas ligando voluntário, equipe, evento e horário.",
        status: "disponivel",
      },
      {
        title: "Eventos",
        description: "Cadastro de eventos com datas, locais e necessidades de equipe.",
        status: "disponivel",
      },
      {
        title: "Comunicação",
        description: "Avisos e recados centralizados para toda a equipe.",
        status: "disponivel",
      },
      {
        title: "Notificações",
        description: "Avisos de escala, mudanças e prazos no aplicativo.",
        status: "disponivel",
      },
      {
        title: "Lembretes",
        description: "Alertas automáticos para eventos e compromissos.",
        status: "disponivel",
      },
      {
        title: "Confirmações de presença",
        description: "Voluntários confirmam ou recusam escalas com registro.",
        status: "disponivel",
      },
      {
        title: "Automação via WhatsApp Business",
        description: "Envio automático de avisos e confirmações pelo WhatsApp.",
        status: "planejada",
      },
      {
        title: "Calendário integrado",
        description: "Visão mensal de eventos e escalas.",
        status: "planejada",
      },
      {
        title: "Relatórios de frequência",
        description: "Métricas de participação por voluntário e equipe.",
        status: "planejada",
      },
    ],
    stack: [
      {
        category: "Front-end",
        items: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      },
      { category: "Back-end", items: ["Node.js", "API REST"] },
      { category: "Banco de dados", items: ["Supabase", "PostgreSQL"] },
      { category: "Autenticação", items: ["Supabase Authentication"] },
      {
        category: "Integração",
        items: ["WhatsApp Business API (planejada)"],
      },
      { category: "Deploy", items: ["Vercel", "GitHub"] },
    ],
    decisions: [
      {
        decision: "Supabase como BaaS",
        reason:
          "Autenticação e banco relacional prontos, com políticas de segurança por linha (RLS) que isolam os dados por usuário — sem servidor próprio em um app de uso administrativo.",
      },
      {
        decision: "Modelagem centrada em entidades claras",
        reason:
          "Membros, equipes, escalas e eventos como tabelas com relacionamentos explícitos: uma escala liga voluntário, equipe e evento.",
      },
      {
        decision: "API REST em Node.js",
        reason:
          "Separa responsabilidades e cria o ponto único onde a integração com WhatsApp Business entrará sem reescrever o front-end.",
      },
      {
        decision: "Mobile-first",
        reason:
          "O uso acontece no celular do líder durante a semana: componentes pensados para tela pequena e operação rápida.",
      },
    ],
    challenges: [
      {
        challenge: "Processos ministeriais complexos em fluxos simples",
        resolution:
          "Simplificação em entidades centrais (membro, equipe, escala, evento) e fluxos guiados: montar escala, notificar, confirmar.",
      },
      {
        challenge: "Modelagem de escalas flexíveis",
        resolution:
          "Escalas ligadas a equipes e eventos, com datas, horários e status de confirmação por voluntário.",
      },
      {
        challenge: "Uso frequente em smartphones",
        resolution:
          "Mobile-first com componentes acessíveis e ações em no máximo 2 toques.",
      },
      {
        challenge: "Preparação para a integração com WhatsApp",
        resolution:
          "Lógica de notificação isolada em serviço próprio, com contrato definido para a integração futura.",
      },
    ],
    results: [
      "Arquitetura de dados que cobre membros, equipes, escalas e eventos com relacionamentos claros.",
      "Autenticação via Supabase Auth com isolamento por usuário (RLS).",
      "Base pronta para a integração com WhatsApp Business — mapeada como etapa futura, sem afetar o que já funciona.",
    ],
    screenshots: [
      {
        src: "/screenshots/ministerio_01.png",
        alt: "Painel de membros e equipes do Ministério+",
      },
      {
        src: "/screenshots/Ministerio_02.png",
        alt: "Montagem de escalas no Ministério+",
      },
      {
        src: "/screenshots/Ministerio_03.png",
        alt: "Eventos e comunicação no Ministério+",
      },
    ],
    demoUrl: null,
    githubUrl: null,
    learnings: [
      "Arquitetura de sistemas",
      "Modelagem de banco de dados",
      "Integração de APIs",
      "Automação de processos",
      "UX para uso diário no celular",
      "Transformação de necessidades reais em software",
    ],
    roadmap: [
      {
        title: "Integração com WhatsApp Business API",
        description: "Automação de avisos, escalas e confirmações via WhatsApp.",
        status: "planejada",
      },
      {
        title: "Calendário integrado",
        description: "Visão mensal de eventos, escalas e datas importantes.",
        status: "planejada",
      },
      {
        title: "Relatórios de frequência",
        description: "Participação por voluntário, equipe e período.",
        status: "planejada",
      },
    ],
  },
  {
    slug: "fueltrack",
    name: "FuelTrack — Gestão Inteligente de Combustível e Manutenção Veicular",
    shortName: "FuelTrack",
    tagline: "O custo real do seu veículo, calculado automaticamente.",
    status: "publicado",
    overview:
      "Plataforma de gestão de abastecimentos, despesas e manutenções veiculares, com indicadores automáticos de consumo, custo por quilômetro e evolução dos gastos.",
    problem:
      "Quem controla o carro por anotações, planilhas ou memória não responde às perguntas básicas: quanto custa rodar com este veículo? Qual o consumo real? Quando a manutenção vence?",
    context:
      "Projeto de autoria própria, motivado pela dificuldade de acompanhar o custo real de um veículo — dados espalhados não geram informação.",
    audience:
      "Proprietários de veículos que querem entender custo real, consumo e momento de manutenção — do uso pessoal a pequenas frotas.",
    solution:
      "Cadastro de veículos, abastecimentos, despesas e manutenções com cálculo automático de consumo médio e custo por quilômetro, além de dashboards que comparam períodos.",
    features: [
      {
        title: "Cadastro de veículos",
        description: "Gerencie um ou vários veículos com dados e histórico próprios.",
        status: "disponivel",
      },
      {
        title: "Registro de abastecimentos",
        description: "Registre litros, valor, odômetro e posto a cada abastecimento.",
        status: "disponivel",
      },
      {
        title: "Despesas",
        description: "Categorize gastos fixos e variáveis do veículo.",
        status: "disponivel",
      },
      {
        title: "Manutenções",
        description: "Histórico de manutenções com data, custo e tipo de serviço.",
        status: "disponivel",
      },
      {
        title: "Consumo médio automático",
        description: "Consumo real calculado pela distância entre abastecimentos.",
        status: "disponivel",
      },
      {
        title: "Custo por quilômetro",
        description: "Custo de rodagem combinando combustível e manutenções.",
        status: "disponivel",
      },
      {
        title: "Visualização de gastos",
        description: "Evolução das despesas por mês e por categoria.",
        status: "disponivel",
      },
      {
        title: "Indicadores",
        description: "Resumo rápido de consumo, gastos e manutenções pendentes.",
        status: "disponivel",
      },
      {
        title: "Dashboards e gráficos",
        description: "Análises visuais do histórico do veículo.",
        status: "disponivel",
      },
      {
        title: "Comparação de períodos",
        description: "Compare gastos e consumo entre meses e períodos.",
        status: "disponivel",
      },
      {
        title: "Alertas de manutenção preventiva",
        description: "Avisos por quilometragem ou tempo desde a última manutenção.",
        status: "planejada",
      },
      {
        title: "Importação de dados existentes",
        description: "Migre histórico de planilhas para o FuelTrack.",
        status: "planejada",
      },
      {
        title: "Categorias de despesa customizadas",
        description: "Crie categorias próprias de gastos.",
        status: "planejada",
      },
    ],
    stack: [
      {
        category: "Front-end",
        items: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      },
      { category: "Back-end / BaaS", items: ["Supabase", "PostgreSQL"] },
      { category: "Autenticação", items: ["Supabase Authentication"] },
      { category: "Visualização", items: ["Chart.js", "Recharts"] },
      { category: "Estado", items: ["Context API", "React Hooks"] },
      { category: "Deploy", items: ["Vercel", "GitHub"] },
    ],
    decisions: [
      {
        decision: "Cálculos derivados, nunca duplicados",
        reason:
          "Consumo e custo por quilômetro são calculados dos registros brutos a cada consulta — sem campos copiados que possam desatualizar.",
      },
      {
        decision: "Consumo baseado em odômetro real",
        reason:
          "O consumo é a distância entre dois abastecimentos dividida pelos litros registrados — metodologia que corresponde ao uso real.",
      },
      {
        decision: "Context API sem biblioteca externa de estado",
        reason:
          "A complexidade do app não justifica Redux ou Zustand; Context + hooks mantêm o código simples e testável.",
      },
      {
        decision: "RLS por usuário",
        reason:
          "Autenticação com políticas de linha no Supabase: cada usuário enxerga apenas os próprios veículos e registros.",
      },
    ],
    challenges: [
      {
        challenge: "Modelagem de dados veiculares",
        resolution:
          "Tabelas de veículos, abastecimentos, despesas e manutenções com relacionamentos e campos de odômetro, quilometragem e períodos.",
      },
      {
        challenge: "Cálculo correto de consumo e custo por quilômetro",
        resolution:
          "Lógica isolada em módulo de cálculo, tratando casos-limite como primeiro abastecimento e tanque não cheio.",
      },
      {
        challenge: "Dashboards sempre atualizados",
        resolution:
          "Indicadores recalculados a partir dos dados a cada mudança — o gráfico reflete o banco, nunca um valor armazenado.",
      },
      {
        challenge: "Proteção dos dados",
        resolution:
          "Autenticação obrigatória e políticas RLS por usuário no banco.",
      },
    ],
    results: [
      "Indicadores confiáveis — consumo real, custo por km e evolução de gastos — calculados automaticamente a partir de registros simples.",
      "Dados isolados por usuário com autenticação obrigatória.",
      "Experiência responsiva para uso diário no celular.",
    ],
    screenshots: [
      {
        src: "/screenshots/FuelTrack_01.png",
        alt: "Dashboard com indicadores do FuelTrack",
      },
      {
        src: "/screenshots/FuelTrack_02.png",
        alt: "Lista de abastecimentos no FuelTrack",
      },
      {
        src: "/screenshots/FuelTrack_03.png",
        alt: "Histórico de manutenções no FuelTrack",
      },
    ],
    demoUrl: null,
    githubUrl: null,
    learnings: [
      "React",
      "TypeScript",
      "Arquitetura de componentes",
      "Supabase",
      "Banco de dados relacional",
      "Autenticação",
      "Análise de dados",
      "Dashboards",
      "Transformação de dados brutos em informação útil",
    ],
    roadmap: [
      {
        title: "Alertas de manutenção preventiva",
        description: "Avisos por quilometragem ou tempo desde a última manutenção.",
        status: "planejada",
      },
      {
        title: "Importação de dados existentes",
        description: "Migração de históricos mantidos em planilhas.",
        status: "planejada",
      },
      {
        title: "Categorias de despesa customizadas",
        description: "Categorias próprias para cada tipo de gasto.",
        status: "planejada",
      },
    ],
  },
  {
    slug: "projeto-4",
    name: "[PROJETO 4 — A DEFINIR]",
    shortName: "Projeto 4",
    tagline: "Em breve — novo case em desenvolvimento.",
    status: "em-breve",
    overview:
      "O quarto projeto será adicionado neste espaço seguindo o mesmo padrão dos demais: problema real, solução completa e decisões técnicas documentadas.",
    problem: "",
    context: "",
    audience: "",
    solution: "",
    features: [],
    stack: [],
    decisions: [],
    challenges: [],
    results: [],
    screenshots: [],
    demoUrl: null,
    githubUrl: null,
    learnings: [],
    roadmap: [],
  },
];
