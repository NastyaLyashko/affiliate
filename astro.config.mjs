import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://nastyalyashko.github.io/affiliate',
  base: '/affiliate',
  output: 'static',
  markdown: {
    syntaxHighlight: 'shiki'
  },
  integrations: [
    tailwind({
      applyBaseStyles: true,
    })
  ]
});
