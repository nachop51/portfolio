// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL, REPO } from './src/consts';

export default defineConfig({
	site: SITE_URL,
	base: `/${REPO}`,
	integrations: [sitemap()],
	markdown: {
		shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
	},
});
