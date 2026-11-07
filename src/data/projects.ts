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
    tagline: 'Keeps coding agents working on issues and pull requests until they are actually done.',
    summary:
      'A daemon that runs on your machine and tracks issues, pull requests, Slack threads and alerts as work to be finished. If a run fails, CI goes red or a reviewer replies, it picks the work back up. The agent only gets the permissions you give it, and those are checked outside the model.',
    points: [
      'Mostly builds itself: on 2 Nov 2026, 158 of the 168 merged PRs came from its own agents',
      'Work can wait hours or days for a merge, a CI result or a reply, and survives restarts',
      'Works with GitHub, Linear, Jira, Slack and scheduled jobs',
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
    tagline: 'Website, members area and match-day app for my cricket club.',
    summary:
      'Everything online for Percy Main Community Sports Club: the public site, members area and payments, and an app captains use on match days. It runs on AWS. It also has Scout, which looks up the opposition in Play Cricket and ball-by-ball data and writes a scouting report.',
    points: [
      'Match-day app for team sheets, availability and payments that still works when the signal at the ground drops',
      'Scout remembers things captains tell it and cites its sources in the PDF reports',
      'An assistant that drafts match reports from the scorecard',
      'Over 500 commits since March 2026, infrastructure in Terraform',
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
    tagline: 'A memory sidecar for Claude Code that tidies up what it has learned overnight.',
    summary:
      'It records what Claude Code does and what you tell it, and builds up beliefs about how you like to work. On a timer it goes to sleep: it looks for beliefs that contradict each other and has a model resolve them, writing up a dream journal as it goes. Every twelfth cycle it goes on a spirit quest and rewrites everything, then checks whether the rewrites were any good.',
    points: [
      'Runs alongside Claude Code via hooks',
      'Beliefs get kept, merged or retired when they conflict',
      'Each new session starts with a summary of what changed overnight',
    ],
    stack: ['TypeScript', 'Claude API', 'SQLite', 'Docker'],
    status: 'Experiment',
    links: [{ label: 'GitHub', href: 'https://github.com/alsiola/fuguestate' }],
  },
  {
    slug: 'quantum-ai',
    name: 'Quantum AI',
    tagline: 'Research into using quantum measurement as the memory of a sequence model.',
    summary:
      'Can measuring a quantum system be how a sequence model updates its memory? Here, producing the next token and updating the memory are the same step: the model measures a helper qubit, the result is the token, and the memory keeps whatever state the measurement left it in.',
    points: [
      'Includes qmem, a small differentiable simulator',
      'Two to four memory qubits, built on PyTorch',
      'Simulation only for now, and mostly worked on by Open Conduit agents',
    ],
    stack: ['Python', 'PyTorch', 'uv'],
    status: 'Research',
    links: [{ label: 'GitHub', href: 'https://github.com/alsiola/quantum-ai' }],
  },
];
