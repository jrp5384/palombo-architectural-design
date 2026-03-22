import Image from "next/image";
import Link from "next/link";

import { featuredProjects } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export function FeaturedProjects() {
  const leadProject = featuredProjects[0];
  const secondaryProjects = featuredProjects.slice(1);

  if (!leadProject) {
    return null;
  }

  return (
    <section className="section-space px-6 lg:px-10">
      <div className="mx-auto max-w-site">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected Work"
            title="A small selection of work where proportion, atmosphere, and daily use are held in balance."
            description="A tighter edit keeps the focus on a few representative projects and lets the imagery carry more of the experience."
          />
          <Link
            href="/projects"
            className="text-[13px] uppercase tracking-[0.18em] text-stone-700 transition-colors duration-300 hover:text-stone-900"
          >
            View all projects
          </Link>
        </div>
        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <article className="group lg:col-span-7">
            <Link href="/projects" className="block">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                <Image
                  src={leadProject.image}
                  alt={leadProject.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
              <div className="mt-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-stone-500">
                  {leadProject.category}
                </p>
                <h3 className="mt-3 font-serif text-3xl text-stone-900 sm:text-4xl">
                  {leadProject.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-stone-700">
                  {leadProject.summary}
                </p>
              </div>
            </Link>
          </article>
          <div className="grid gap-10 lg:col-span-5">
            {secondaryProjects.map((project) => (
              <article key={project.slug} className="group">
                <Link href="/projects" className="block">
                  <div className="relative aspect-[5/4] overflow-hidden bg-stone-200">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 34vw"
                    />
                  </div>
                  <div className="mt-5">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-stone-500">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-serif text-[2rem] leading-tight text-stone-900">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-stone-700">
                      {project.summary}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
