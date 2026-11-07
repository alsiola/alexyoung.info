import type { Config, Context } from '@netlify/functions';

// Sends contact-form submissions by email through Resend (https://resend.com).
// Env: RESEND_API_KEY, CONTACT_TO (your inbox), CONTACT_FROM (a sender on a verified Resend domain).

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export default async (req: Request, _context: Context) => {
  if (req.method !== 'POST') return json(405, { error: 'Method not allowed' });

  let data: Record<string, string>;
  try {
    const ct = req.headers.get('content-type') ?? '';
    data = ct.includes('application/json')
      ? await req.json()
      : Object.fromEntries((await req.formData()) as unknown as Iterable<[string, string]>);
  } catch {
    return json(400, { error: 'Could not read the form.' });
  }

  // Honeypot: bots fill every field. Pretend it worked.
  if (data.company) return json(200, { ok: true });

  const name = String(data.name ?? '').trim().slice(0, 200);
  const email = String(data.email ?? '').trim().slice(0, 320);
  const message = String(data.message ?? '').trim().slice(0, 10_000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(422, { error: 'Please give a name, a valid email and a message.' });
  }

  const key = Netlify.env.get('RESEND_API_KEY');
  const to = Netlify.env.get('CONTACT_TO');
  const from = Netlify.env.get('CONTACT_FROM') ?? 'Website <contact@alexyoung.info>';
  if (!key || !to) {
    console.error('contact: RESEND_API_KEY or CONTACT_TO is not set');
    return json(500, { error: 'The form is not configured yet. Try again later.' });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `alexyoung.info: message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  });

  if (!res.ok) {
    console.error('contact: resend failed', res.status, await res.text());
    return json(502, { error: 'Sending failed. Try again in a minute.' });
  }
  return json(200, { ok: true });
};

export const config: Config = { path: '/api/contact' };
