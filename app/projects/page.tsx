import type { Metadata } from "next";
import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A portfolio of residential and commercial work by Palombo Architectural Design.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:px-10 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-site">
          <SectionHeading
            eyebrow="Projects"
            title="A portfolio of residential and commercial architecture designed with quiet confidence."
            description="The current project structure is prepared for future expansion, making it easy to add dedicated detail pages, narratives, and broader image galleries over time."
          />
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mx-auto grid max-w-site gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="group border border-stone-200 bg-stone-50"
            >
              <div
                className={`relative overflow-hidden bg-stone-200 ${
                  index % 4 === 0 ? "aspect-[4/5]" : "aspect-[5/4]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-3 p-6">
                <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-stone-500">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="font-serif text-2xl text-stone-900">
                  {project.title}
                </h2>
                <p className="text-sm leading-6 text-stone-700">
                  {project.location}
                </p>
                <p className="pt-3 text-sm uppercase tracking-[0.18em] text-stone-700">
                  Project detail page coming later
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
