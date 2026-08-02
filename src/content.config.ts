import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({}).passthrough(),
});

export const collections = { blog };
