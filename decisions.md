# Decisions

Answers to spec.md open questions. Overrides spec where they differ.

## Decided

- **Framework:** Astro, fully static (SSG). Per spec.
- **Hosting:** GitHub Pages, user site `<user>.github.io`. Root URL, no `base` in `astro.config`. Deploy via GitHub Actions (`withastro/action`). **Overrides spec's Cloudflare Pages.**
- **Domain:** `<user>.github.io`. No custom domain.
- **Design:** minimal typographic. Text-first, system or one web font, whitespace.
- **Dark mode:** auto via `prefers-color-scheme`. CSS only, no toggle, no JS.
- **Tags:** `tags` frontmatter field only, shown on post. No tag pages.
- **Projects:** section on the home page. No separate `/projects` page.
- **Post format:** Markdown only. **Overrides spec's `@astrojs/mdx`.** Add MDX when a post needs components.
- **Interactive islands:** none. No `@astrojs/svelte` for now.
- **Extras:** no analytics, comments, or newsletter.

## Still open

- GitHub username (needed for `site` in `astro.config`).
- Site title and author name.
- Projects on home: hand-written list, or `projects` content collection (typed, one file each)? Default: collection.
- Language: English only? Default: yes.

## Unchanged from spec

- Collection `blog` with typed frontmatter: title, date, description, tags, draft.
- `@astrojs/rss`, `@astrojs/sitemap`, Shiki highlighting, OG/meta tags, canonical URLs.
- Pages: home (with projects), about, blog index, blog post, 404.
- Scaffold: `bunx create-astro@latest`. Build: `bun run build`, output `dist`.
