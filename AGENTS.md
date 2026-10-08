# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## State

Scaffolded (Astro minimal, bun). Implementing per plan in `~/.claude/plans/create-an-implementation-plan-bubbly-pizza.md`. `spec.md` (research) and `decisions.md` (answers to spec's open questions) remain. Not a git repo yet. **`decisions.md` overrides `spec.md`** where they differ. `CLAUDE.md` is a symlink to `AGENTS.md` (from scaffold) — edit `AGENTS.md`.

## Stack (decided)

- Astro, fully static (SSG). No SSR/ISR/CSR.
- Package manager/runner: bun. Scaffold `bunx create-astro@latest`; build `bun run build`; output `dist`.
- Hosting: GitHub Pages user site (`<user>.github.io`), root URL, **no `base`** in `astro.config`. Deploy via GitHub Actions `withastro/action`. (Spec says Cloudflare Pages — overridden.)
- Posts: Markdown only, **no `@astrojs/mdx`** (add only when a post needs components). No `@astrojs/svelte`/islands.
- Integrations: `@astrojs/rss`, `@astrojs/sitemap`, Shiki (built in). OG/meta tags, canonical URLs.

## Content model

- `blog` collection, typed frontmatter: `title`, `date`, `description`, `tags`, `draft`.
- Tags: frontmatter field shown on post only. No tag pages.
- Projects: section on home page, no `/projects` page. Default: `projects` content collection (one typed file each) — still open.
- Pages: home (with projects), about, blog index, blog post, 404.

## Design constraints

- Minimal typographic: text-first, system or one web font, whitespace.
- Dark mode via `prefers-color-scheme` CSS only. No toggle, no JS.
- No analytics, comments, newsletter.
- English only (default, unconfirmed).

## Open

GitHub username (needed for `site` in `astro.config`), site title, author name. Check `decisions.md` before assuming.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling](https://docs.astro.build/en/guides/styling/)
