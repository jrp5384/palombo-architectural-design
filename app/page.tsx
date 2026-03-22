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
        subtitle="Timeless Residential & Commercial Architecture"
        primaryHref="/projects"
        primaryLabel="View Projects"
        secondaryHref="/contact"
        secondaryLabel="Contact"
      />

      <FeaturedProjects />

      <ProcessSection />

      <section className="px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
          <SectionHeading
            eyebrow="About The Studio"
            title="Thoughtful architecture shaped through experience, listening, and precision."
            description="Palombo Architectural Design works closely with clients to create spaces that are elegant, deeply functional, and carefully resolved."
          />
          <div className="space-y-6 text-base leading-7 text-stone-700 sm:text-lg">
            <p>
              The practice brings a calm, detail-oriented approach to each
              commission, balancing architectural discipline with the realities
              of everyday use. Every project is shaped around proportion,
              material integrity, and the character of the people who will live
              or work within it.
            </p>
            <p>
              From initial conversations through drawing development and final
              coordination, the studio values clarity, responsiveness, and a
              collaborative process that leads to enduring results.
            </p>
            <Link
              href="/about"
              className="inline-flex text-sm uppercase tracking-[0.18em] text-stone-700 transition-colors duration-300 hover:text-stone-900"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-site">
          <SectionHeading
            eyebrow="Services"
            title="Design services tailored to new construction, renovation, and carefully developed interiors."
            description="A concise, hands-on process supports each stage of the work, from concept direction to coordinated drawing packages."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="border border-stone-200 bg-stone-50 p-7"
              >
                <h3 className="font-serif text-2xl text-stone-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-700">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-site gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
            <Image
              src="/images/projects/Pool house 3.JPG"
              alt="Exterior architectural project with refined modern lines"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
          <div className="lg:pl-8">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
              Future Testimonials
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-stone-900 sm:text-4xl">
              Client reflections section reserved for future content.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-stone-700">
              When client testimonials are available, this section can showcase
              select comments in the same restrained tone as the rest of the
              site.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
