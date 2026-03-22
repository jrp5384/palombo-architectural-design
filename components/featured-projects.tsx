import Image from "next/image";
import Link from "next/link";

import { featuredProjects } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export function FeaturedProjects() {
  return (
    <section className="px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-site">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured projects shaped with restraint, material clarity, and lived comfort."
            description="A preview of residential and commercial work that reflects the studio's focus on proportion, atmosphere, and enduring detail."
          />
          <Link
            href="/projects"
            className="text-sm uppercase tracking-[0.18em] text-stone-700 transition-colors duration-300 hover:text-stone-900"
          >
            View all projects
          </Link>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <article key={project.slug} className="group">
              <Link href="/projects" className="block">
                <div
                  className={`relative overflow-hidden bg-stone-200 ${
                    index % 3 === 0 ? "aspect-[4/5]" : "aspect-[5/4]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-stone-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-700">
                    {project.location}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
