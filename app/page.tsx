import Image from "next/image";
import Link from "next/link";

import { ContactCTA } from "@/components/contact-cta";
import { FeaturedProjects } from "@/components/featured-projects";
import { Hero } from "@/components/hero";
import { ProcessSection } from "@/components/process-section";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <Hero
        image="/images/projects/Kitchen 9.JPG"
        title="Palombo Architectural Design"
        subtitle="Timeless residential and commercial architecture shaped with care, clarity, and attention to detail."
        primaryHref="/projects"
        primaryLabel="View Projects"
        secondaryHref="/contact"
        secondaryLabel="Contact"
      />

      <FeaturedProjects />

      <ProcessSection />

      <section className="section-space px-6 lg:px-10">
        <div className="mx-auto grid max-w-site gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-20">
          <SectionHeading
            eyebrow="About"
            title="Architecture shaped with close attention to proportion, use, and material restraint."
            description="Palombo Architectural Design approaches each commission with clarity, care, and steady involvement from first conversation through drawing development."
          />
          <div className="space-y-7 text-base leading-8 text-stone-700 sm:text-lg">
            <p>
              The work is guided by a belief that good architecture should feel
              calm, lasting, and deeply tied to the way people actually live.
              Projects are shaped through careful listening, disciplined study,
              and an insistence on details that continue to matter long after
              construction ends.
            </p>
            <p>
              Residential and commercial commissions are each approached with
              the same seriousness: clear planning, honest materials, and a
              measured design process that keeps the final result both refined
              and usable.
            </p>
            <Link
              href="/about"
              className="inline-flex pt-2 text-[13px] uppercase tracking-[0.18em] text-stone-700 transition-colors duration-300 hover:text-stone-900"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space bg-stone-100 px-6 lg:px-10">
        <div className="mx-auto max-w-site">
          <SectionHeading
            eyebrow="Services"
            title="Services are focused and carefully matched to the needs of each commission."
            description="The scope can range from early concept development to complete drawing packages, with the same measured attention carried through the process."
          />
          <div className="mt-16 grid gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="border-t border-stone-300 pt-6">
                <h3 className="font-serif text-3xl leading-tight text-stone-900">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-stone-700">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space px-6 lg:px-10">
        <div className="mx-auto max-w-site border-t border-stone-200 pt-12 sm:pt-16">
          <p className="text-[11px] uppercase tracking-[0.24em] text-stone-500">
            Future Testimonials
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[0.98] text-stone-900 sm:text-5xl">
            A reserved space for future client reflections.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-700">
            No testimonials have been added yet. When available, they can be
            introduced here in the same restrained tone as the rest of the
            website.
          </p>
          <div className="mt-12 relative aspect-[16/8] overflow-hidden bg-stone-200">
            <Image
              src="/images/projects/Pool house 3.JPG"
              alt="Exterior architectural project with refined modern lines"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
