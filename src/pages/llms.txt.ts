import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { projects } from '../data/projects';

export async function GET(context: APIContext) {
  const site = context.site!;
  const url = (p: string) => new URL(p, site).href;
  const posts = (await getCollection('thoughts', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const body = `# Alex Young

> Software engineer, previously a vet. Right now mostly building tools that let coding agents take on longer, messier work.

The full text of every post is at ${url('/llms-full.txt')}.

## Pages

- [About](${url('/about/')}): Career history (veterinary surgeon, then twelve years as a software engineer) and skills
- [Projects](${url('/projects/')}): Things I'm building
- [Thoughts](${url('/thoughts/')}): Occasional writing
- [Contact](${url('/contact/')}): Send me a message

## Projects

${projects.map((p) => `- [${p.name}](${url(`/projects/#${p.slug}`)}): ${p.tagline}`).join('\n')}

## Thoughts

${posts.map((p) => `- [${p.data.title}](${url(`/thoughts/${p.id}/`)}): ${p.data.description}`).join('\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
