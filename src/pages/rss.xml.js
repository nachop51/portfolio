import rss from '@astrojs/rss';
import { url } from '../lib/url';
import { getPosts } from '../lib/posts';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getPosts();
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((p) => ({
			title: p.data.title,
			pubDate: p.data.date,
			description: p.data.description,
			link: url(`/blog/${p.id}/`),
		})),
	});
}
