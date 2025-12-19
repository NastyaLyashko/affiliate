/// <reference types="astro/client" />

type Post = {
  url: string;
  slug: string;
  title: string;
  date: string;
  tags: string[];
  icon?: string;
  description?: string;
};

export async function getAllPosts(): Promise<Post[]> {
  const modules = import.meta.glob('../../content/blog/*.md', { eager: true }) as Record<string, any>;
  const posts: Post[] = [];
  Object.entries(modules).map(([path, mod]) => {
    const filename = path.split('/').pop()?.replace(/\.md$/, '');
    const slug = mod.frontmatter?.slug ?? filename;
    if (mod.frontmatter) {
      posts.push({
        url: `/blog/${slug}`,
        slug,
        title: mod.frontmatter?.title || 'No title',
        date: mod.frontmatter?.date || '1970-01-01',
        tags: mod.frontmatter?.tags || [],
        icon: mod.frontmatter?.icon || '',
        description: mod.frontmatter?.description || '',
      });
    }
  });

  posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
  return posts;
}

export async function getPostBySlug(slug: string) {
  const module = (await import(`../../content/blog/${slug}.md`)) as any;
  return { front: module.frontmatter, Content: module.default };
}
