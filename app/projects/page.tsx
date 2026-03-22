import type { Metadata } from "next";
import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A portfolio of residential and commercial work by a single architect at Palombo Architectural Design.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="px-6 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:px-10 lg:pb-28 lg:pt-32">
        <div className="mx-auto max-w-site">
          <SectionHeading
            eyebrow="Projects"
            title="A portfolio of residential and commercial work shaped with restraint and close personal involvement."
            description="The current structure remains ready for future project detail pages, while the main grid keeps the focus on imagery, proportion, and concise project information."
          />
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto grid max-w-site gap-x-10 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.slug} className="group">
              <div
                className={`relative overflow-hidden bg-stone-200 ${
                  index % 4 === 0 ? "aspect-[4/5]" : "aspect-[5/4]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-4 pt-6">
                <div className="flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.18em] text-stone-500">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="font-serif text-3xl leading-tight text-stone-900">
                  {project.title}
                </h2>
                <p className="text-sm uppercase tracking-[0.16em] text-stone-600">
                  {project.location}
                </p>
                <p className="max-w-sm text-base leading-7 text-stone-700">
                  {project.summary}
                </p>
                <p className="pt-2 text-[13px] uppercase tracking-[0.18em] text-stone-700">
                  Project detail page prepared for later
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
