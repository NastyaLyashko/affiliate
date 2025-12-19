import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://example.com',
  markdown: {
    syntaxHighlight: 'shiki'
  },
  output: 'server',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    })
  ]
});
