import Link from "next/link";

import MaxWidthWrapper from "@/components/MaxwidthWrapper";

export default async function Home() {
  return (
    <MaxWidthWrapper className="py-8">
      <section className="min-h-main mb-20 flex flex-col justify-center fade-in-start">
        <h1 className="font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-slate-200 tracking-tight">
          Hi, I&apos;m <strong>Roli Bernanda</strong>
        </h1>
        <p className="mt-4 md:text-lg 2xl:text-xl">
          I specialize in TypeScript, React, and Web Performance Optimization.
        </p>

        <p className="mt-4 md:text-lg 2xl:text-xl">
          <Link
            href="/about"
            className="tracking-tight font-semibold text-sky-500 dark:text-sky-400 underline leading-6 hover:text-sky-700 transition-colors dark:hover:text-sky-700 duration-500"
          >
            Read more →
          </Link>
        </p>
      </section>
    </MaxWidthWrapper>
  );
}
