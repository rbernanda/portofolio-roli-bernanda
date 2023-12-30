import Link from "next/link";

import MaxWidthWrapper from "@/components/MaxwidthWrapper";
import { getPostsMeta } from "@/libs/mdx.server";
import { getFormattedDate } from "@/utilities";

export default async function Blog() {
  const posts = await getPostsMeta();
  console.log({ posts });

  return (
    <MaxWidthWrapper className="py-8">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            A blog built using MDX-Remote. Posts are written in MDX.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="group relative flex flex-col space-y-2"
            >
              {/* {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={804}
                    height={452}
                    className="rounded-md border bg-muted transition-colors"
                    priority={index <= 1}
                  />
                )} */}
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && (
                <p className="text-muted-foreground">{post.description}</p>
              )}
              {post.publishedAt && (
                <p className="text-sm text-muted-foreground">
                  {getFormattedDate(post.publishedAt)}
                </p>
              )}
              <Link href={`/blog/${post.slug}`} className="absolute inset-0">
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
