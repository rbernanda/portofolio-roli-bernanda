import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { getPostByName, getPostsMeta } from "@/libs/mdx.server";
import MaxWidthWrapper from "@/components/MaxwidthWrapper";
import { getFormattedDate } from "@/utilities";
import "highlight.js/styles/github-dark.css";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped!

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.slug,
  }));
}

export async function generateMetadata({ params: { slug } }: Props) {
  const post = await getPostByName(`${slug}.mdx`); //deduped!

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { slug } }: Props) {
  const post = await getPostByName(`${slug}.mdx`); //deduped!

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.publishedAt);

  return (
    <MaxWidthWrapper className="py-8">
      <div className="space-y-2">
        <h1 className="inline-block text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
          {meta.title}
        </h1>
        {meta.publishedAt && (
          <time dateTime={pubDate} className="block text-sm">
            Published on {pubDate}
          </time>
        )}
        <p className="text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
          {meta.readingTime.text}
        </p>
      </div>
      <article className="prose mt-4 max-w-full transition-colors dark:prose-invert">
        {content}
      </article>
      <div className="flex justify-center py-6 lg:py-10 hover:text-sky-500">
        <Link href="/blog">See all posts</Link>
      </div>
    </MaxWidthWrapper>
  );
}
