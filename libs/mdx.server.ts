import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import readingTime from "reading-time";

import type { BlogPost, BlogFrontmatter } from "@/types";

const postsDirectory = path.join(process.cwd(), "data", "blogposts");

export async function getPostByName(
  fileName: string
): Promise<BlogPost | undefined> {
  const fullPath = path.join(postsDirectory, `${fileName}`);
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { frontmatter, content } = await compileMDX<BlogFrontmatter>({
      source: fileContents,
      components: {},
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            // encounter a TypeScript error when adding rehypeHighlight ignore it first
            // https://github.com/hashicorp/next-mdx-remote/issues/423#issue-2055789404
            //@ts-ignore
            rehypeHighlight,
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: "wrap",
              },
            ],
          ],
          remarkPlugins: [remarkGfm],
        },
      },
    });

    const blogPostObj: BlogPost = {
      meta: {
        title: frontmatter.title,
        publishedAt: frontmatter.publishedAt,
        description: frontmatter.description,
        tags: frontmatter.tags,
        slug: fileName.replace(".mdx", ""),
        readingTime: readingTime(fileContents),
        image: frontmatter.image,
      },
      content,
    };

    return blogPostObj;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function getPostsMeta(): Promise<BlogFrontmatter[] | undefined> {
  const fileNames = fs.readdirSync(postsDirectory);
  const filesArray = fileNames.filter((path) => path.endsWith(".mdx"));

  const posts: BlogFrontmatter[] = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}
