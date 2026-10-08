import { getCollection } from 'astro:content';

/** Published posts, newest first. Single place that hides drafts. */
export async function getPosts() {
	const posts = await getCollection('blog', (p) => !p.data.draft);
	return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const fmtDate = (d: Date) => d.toISOString().slice(0, 10);
