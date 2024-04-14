import { defineConfig } from 'astro/config';
import { remarkModifiedTime } from './src/plugins/last-modified-time.mjs';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkModifiedTime],
  }
});