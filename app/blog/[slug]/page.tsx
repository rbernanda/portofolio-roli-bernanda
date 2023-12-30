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
      <div>
        {meta.publishedAt && (
          <time
            dateTime={pubDate}
            className="block text-sm text-muted-foreground"
          >
            Published on {pubDate}
          </time>
        )}
        <p className="mt-2 text-sm">{meta.readingTime.text}</p>
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {meta.title}
        </h1>
      </div>
      <article className="mt-10 space-y-4">{content}</article>
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog">See all posts</Link>
      </div>
    </MaxWidthWrapper>
  );
}
