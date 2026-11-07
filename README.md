# alexyoung.info

Astro static site, deployed on Netlify.

```sh
npm install
npm run dev        # http://localhost:4321
npx netlify dev    # same, plus the contact function at /api/contact
```

## Thoughts

Add a Markdown file to `src/content/thoughts/`:

```md
---
title: My first post
description: One line for lists and RSS.
date: 2026-11-07
---
```

## Contact form

`netlify/functions/contact.mts` emails submissions through [Resend](https://resend.com). Set these in Netlify's environment variables:

- `RESEND_API_KEY`
- `CONTACT_TO`: the inbox that receives messages
- `CONTACT_FROM`: a sender on a domain verified in Resend, e.g. `Website <contact@alexyoung.info>`
