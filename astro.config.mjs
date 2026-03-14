import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://nastyalyashko.github.io',
  base: '/affiliate',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    })
  ]
});
