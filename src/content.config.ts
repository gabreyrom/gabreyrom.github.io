import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects page (/projects/) supports up to nine published entries, ordered by `order`.
// To add a project:
//   1. Create a new .md file here with the fields below.
//   2. Set `order` to the next open slot (currently 1-5 are in use; 6-9 are free).
//   3. Leave `draft: true` until it's ready to publish; the Projects page and homepage
//      "Featured Projects" both skip drafts automatically.
//   4. Set `featured: true` only if it should also replace one of the homepage's three
//      Featured Projects slots — that selection is independent of Projects-page order,
//      so adding a project here never changes the homepage on its own.
//   5. Leave `caseStudy: true` (the default) once a full case-study writeup (the markdown
//      body below the frontmatter) is ready to publish at /projects/<slug>/. Set it to
//      `false` for a project that should appear as a card only, with its title as plain
//      text (no link) — used for the two entries added without a published case study.
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    technologies: z.array(z.string()),
    repoUrl: z.string().url(),
    demoUrl: z.string().url().optional(),
    highlights: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    order: z.number(),
    draft: z.boolean().default(false),
    caseStudy: z.boolean().default(true),
  }),
});

export const collections = { projects };
