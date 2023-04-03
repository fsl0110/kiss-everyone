import { defineCollection, z } from 'astro:content';

const future = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		pubDate: z
		.string()
		.or(z.date())
		.transform((val) => new Date(val)),
		heroImage: z.string(),
		draft: z.boolean()
	}),
});

export const collections = { future };
