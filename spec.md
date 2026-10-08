# Personal site + blog — spec

Status: research / pre-implementation. Based on prior knowledge, not live-verified. Check current docs before committing to versions or free-tier limits.

## Goal

Personal portfolio with a blog. Content changes rarely (a post a week at most). Priorities: speed, SEO, low cost, no server upkeep.

## Rendering modes

| Mode | What | Pros | Cons |
|---|---|---|---|
| **SSG** | HTML built once at deploy | Fastest, cheapest (free hosting/CDN), best SEO, no server to run or secure | Rebuild on every content change. Build time grows with post count (irrelevant under ~1000 posts) |
| **CSR** (SPA) | Empty HTML, JS renders in the browser | Great for app-like interactivity, simple hosting | Slow first paint, worse SEO and link previews, blank page without JS. Wrong for a blog |
| **SSR** | HTML rendered per request on a server | Always fresh, personalized content | Needs a server or serverless, slower TTFB, costs money, more can break. Overkill for a blog |
| **ISR** | Static pages, regenerated in the background after a TTL or on demand | Static speed with fresh content, no full rebuild | Tied to specific hosts (mostly Next.js on Vercel). Cache-invalidation complexity. Solves a problem a personal blog doesn't have |

**Decision: SSG.** SSR and ISR solve freshness at scale. A rebuild takes seconds.

## Frameworks

| Tech | Pros | Cons |
|---|---|---|
| **Astro** | Content-first, zero JS by default, "islands" for interactive bits, built-in Markdown/MDX content collections, RSS and sitemap integrations, any UI framework | Not ideal if the site is mostly an app |
| **SvelteKit** (static adapter) | Tiny bundles, great DX, full-stack if needed later | Blog features (RSS, MDX, tags) are DIY or via `mdsvex`. Smaller ecosystem |
| **Next.js** | Biggest ecosystem, SSG/SSR/ISR all supported | Heavy (React runtime shipped), complex App Router, host lock-in drift, overkill |
| **Nuxt** | Same as Next but for Vue | Same overkill |
| **Hugo / Eleventy / Jekyll** | Fastest builds, minimal JS, simple | Clunky templating, weaker for component-based interactive demos |
| **Plain HTML + CSS** | Zero deps, never breaks | Manual everything, painful past ~10 posts |
| **WordPress / Ghost** | CMS UI, plugins | Server to maintain, security patching, slow, ongoing cost |

## Content source

- **Markdown/MDX in repo** (chosen): free, versioned in git, no lock-in, write in own editor.
- Headless CMS (Sanity, Contentful): only if non-devs write posts. Extra moving parts for a solo site.

## Hosting

Cloudflare Pages (chosen): free for static, unlimited bandwidth, fast CDN, deploys on `git push`. Alternatives: Netlify, Vercel, GitHub Pages.

## Recommendation

**Astro + Markdown/MDX content collections, fully static (SSG), on Cloudflare Pages.**

- Right tool for a content site: near-zero JS, perfect Lighthouse scores.
- Blog features built in: typed frontmatter collections, RSS, sitemap, syntax highlighting.
- Svelte islands available for interactive demos.
- No server, no cost, nothing to maintain.

**Fallback: SvelteKit** (`adapter-static`, `prerender = true`) if the site grows app-like features (auth, dashboards, DB). Same SSG output.

**Rejected:** CSR (SEO/speed), SSR (needless server), ISR (solution without a problem).

## Implementation plan

1. Scaffold Astro project (`bunx create-astro@latest`).
2. Define `blog` content collection with typed frontmatter (title, date, description, tags, draft).
3. Pages: home, about/projects, blog index, blog post, 404.
4. Add `@astrojs/mdx`, `@astrojs/rss`, `@astrojs/sitemap`.
5. Syntax highlighting (Shiki, built in), OG/meta tags, canonical URLs.
6. Connect repo to Cloudflare Pages (build: `bun run build`, output: `dist`).
7. Custom domain + HTTPS.

## Open questions

- Domain name?
- Design direction / visual style?
- Tags/categories needed at launch?
- Comments, analytics, newsletter? (Default: none until needed.)
- Dark mode?
