// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config/states.mjs';

// Same shape as gsrtc-landing's config, and for the same reasons — see that project's
// astro.config.mjs for the full Cloudflare Pages history behind these two settings. `'file'`
// build format is what serves `/foo` directly with no redirect; `trailingSlash: 'never'` is the
// one spelling that agrees with it everywhere, including inside a state's own subdirectory.
export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        if (path === '/') { item.priority = 1.0; item.changefreq = 'daily'; }
        else if (path.split('/').length === 2) { item.priority = 0.9; item.changefreq = 'weekly'; } // /state
        else { item.priority = 0.7; item.changefreq = 'weekly'; } // /state/page
        return item;
      },
    }),
  ],
});
