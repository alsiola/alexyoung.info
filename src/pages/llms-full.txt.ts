import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('thoughts', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const body = [
    '# Alex Young: Thoughts',
    '',
    ...posts.map((p) => [
      `## ${p.data.title}`,
      '',
      `URL: ${new URL(`/thoughts/${p.id}/`, context.site!).href}`,
      `Published: ${p.data.date.toISOString().slice(0, 10)}`,
      '',
      `> ${p.data.description}`,
      '',
      (p.body ?? '').trim(),
      '',
    ].join('\n')),
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
