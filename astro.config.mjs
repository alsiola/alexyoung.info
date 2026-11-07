import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alexyoung.info',
  integrations: [sitemap()],
  prefetch: { prefetchAll: true },
});
