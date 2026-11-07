export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  points: string[];
  stack: string[];
  status: string;
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    slug: 'open-conduit',
    name: 'Open Conduit',
    tagline: 'Your coding agents finish the job.',
    summary:
      'A local daemon that turns issues, pull requests, threads and alerts into durable Work. Runs survive waits, restarts and red CI. Claude Code, a script or a person can pick it up, with permissions enforced at the host instead of in the prompt.',
    points: [
      'Builds itself: 158 of 168 PRs merged on 2 Nov 2026 came from its own agents',
      'Durable Work, Events, Executions, Timers and Waits as the core',
      'GitHub, Linear, Jira, Slack and schedules all feed one history',
    ],
    stack: ['Go', 'Claude Code', 'Codex CLI', 'TUI + Web'],
    status: 'Active',
    links: [
      { label: 'GitHub', href: 'https://github.com/open-conduit/open-conduit' },
      { label: 'Docs', href: 'https://open-conduit.github.io/open-conduit/' },
    ],
  },
  {
    slug: 'percy-main',
    name: 'Percy Main',
    tagline: 'A cricket club, run like a product.',
    summary:
      'The whole digital side of Percy Main Community Sports Club: public site, members area, payments and an offline match-day app for captains. Underneath sits a real AWS platform, plus Scout, an AI analyst that researches opposition from Play Cricket and ball-by-ball data and writes scouting reports.',
    points: [
      'Match-day PWA: team sheets, availability and payments, with background sync for when the pavilion signal drops',
      'Scout: an agent with RAG fact memory that produces cited PDF scouting reports',
      'AI content assistant that writes match reports straight into the editor',
      '60+ ADRs, Terraform-managed AWS, 500+ commits since March 2026',
    ],
    stack: ['TypeScript', 'Fastify', 'React', 'PostgreSQL', 'AWS + Terraform', 'Stripe'],
    status: 'Live',
    links: [
      { label: 'Site', href: 'https://www.percymain.org' },
      { label: 'GitHub', href: 'https://github.com/percy-main/website-v2' },
    ],
  },
  {
    slug: 'fuguestate',
    name: 'FugueState',
    tagline: 'Agent memory that dreams.',
    summary:
      'A memory sidecar for Claude Code. It watches every prompt and tool call, forms beliefs about how you work, lies awake at night worrying about contradictions, then dreams up resolutions. Every twelfth night it goes on a spirit quest, then sobers up to check whether the visions were insight or hallucination.',
    points: [
      'Hooks into Claude Code and records every interaction',
      'Sleep cycle: scan for conflicts, REM dreams that keep, merge or retire beliefs',
      'Morning briefing on what it dreamed and what changed, so you stay in the loop',
    ],
    stack: ['TypeScript', 'Claude API', 'SQLite', 'Docker'],
    status: 'Experiment',
    links: [{ label: 'GitHub', href: 'https://github.com/alsiola/fuguestate' }],
  },
  {
    slug: 'quantum-ai',
    name: 'Quantum AI',
    tagline: 'Measurement as memory.',
    summary:
      'Can quantum measurement backaction be the memory update of an autoregressive sequence model? Emitting a symbol and updating a persistent quantum memory become one operation: a trainable instrument measures an ancilla, the outcome is the token, and the memory keeps the collapsed state.',
    points: [
      'qmem: a small differentiable density-matrix simulator',
      '2–4 memory qubits, 1–2 output ancillas, complex128 PyTorch',
      'Simulation-first research campaign, worked by Open Conduit agents',
    ],
    stack: ['Python', 'PyTorch', 'uv'],
    status: 'Research',
    links: [{ label: 'GitHub', href: 'https://github.com/alsiola/quantum-ai' }],
  },
];
