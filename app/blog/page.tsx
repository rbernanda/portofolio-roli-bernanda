import Link from "next/link";
import Image from "next/image";

import MaxWidthWrapper from "@/components/MaxwidthWrapper";
import { getPostsMeta } from "@/libs/mdx.server";
import { getFormattedDate } from "@/utilities";

export default async function Blog() {
  const posts = await getPostsMeta();

  return (
    <MaxWidthWrapper className="py-8">
      <div className="flex flex-col items-start gap-4 mb-8">
        <h1 className="inline-block text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
          Blog
        </h1>
        <p className="text-xl text-slate-700 dark:text-slate-400">
          A blog built using MDX-Remote. Posts are written in MDX.
        </p>
      </div>
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="relative flex flex-col space-y-2"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={804}
                  height={240}
                  className="rounded-md border transition-colors object-cover object-center h-60"
                  priority={index <= 1}
                />
              )}
              <h2 className="inline-block text-2xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
                {post.title}
              </h2>
              {post.description && (
                <p className="text-lg text-slate-700 dark:text-slate-400">
                  {post.description}
                </p>
              )}
              <div className="flex gap-x-2 items-center text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
                {post.publishedAt && (
                  <p className="text-sm">
                    {getFormattedDate(post.publishedAt)}
                  </p>
                )}
                <p>-</p>
                <p className="text-sm">{post.readingTime.text}</p>
              </div>

              <Link href={`blog/${post.slug}`} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </MaxWidthWrapper>
  );
}
