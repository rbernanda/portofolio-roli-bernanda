import MaxWidthWrapper from "@/components/MaxwidthWrapper";

export default async function Project() {
  return (
    <MaxWidthWrapper className="py-8">
      <div className="flex flex-col items-start gap-4 mb-8">
        <h1 className="inline-block text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
          Projects
        </h1>
        <p className="text-xl text-slate-700 dark:text-slate-400">
          Showcase of my projects
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
