import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel/serverless';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],
  experimental: {
    viewTransitions: true,
  },
  output: 'hybrid',
  adapter: vercel(),
});
