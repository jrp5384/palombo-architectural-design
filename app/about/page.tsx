import type { Metadata } from "next";
import Image from "next/image";

import { ContactCTA } from "@/components/contact-cta";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the design approach behind Palombo Architectural Design.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:px-10 lg:pb-28 lg:pt-32">
        <div className="mx-auto max-w-site">
          <SectionHeading
            eyebrow="About"
            title="Each project is shaped through close involvement from beginning to end."
            description="Palombo Architectural Design is grounded in clear thinking, disciplined drawings, and spaces that feel composed, livable, and lasting."
          />
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto grid max-w-site gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          <div className="space-y-7">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
              <Image
                src="/images/projects/Desk 1.JPG"
                alt="Architect's desk with working materials and samples"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <p className="text-sm leading-7 text-stone-600">
              Space reserved for a portrait or office photograph if one is
              added later.
            </p>
          </div>
          <div className="space-y-10 text-base leading-8 text-stone-700 sm:text-lg">
            <div>
              <h2 className="font-serif text-3xl text-stone-900 sm:text-4xl">
                Personal Approach
              </h2>
              <p className="mt-5">
                Each commission is approached with close attention from the
                outset, allowing decisions to stay clear, consistent, and
                thoughtfully resolved as the work develops.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-stone-900 sm:text-4xl">
                Design Philosophy
              </h2>
              <p className="mt-5">
                The work favors architecture that feels calm, well-proportioned,
                and materially honest. Light, circulation, and restraint are
                treated as central parts of the design, not afterthoughts. The
                aim is not novelty for its own sake, but spaces that remain
                convincing and useful over time.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-stone-900 sm:text-4xl">
                How Projects Move Forward
              </h2>
              <p className="mt-5">
                Each project moves from conversation to sketches, concept
                studies, drawing refinement, and coordinated documentation with
                careful oversight along the way. Whether the work is residential
                or commercial, the aim remains the same: to create architecture
                that feels measured, personal, and fully resolved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-stone-100 px-6 lg:px-10">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
            <Image
              src="/images/drawings/Drawing 8.JPG"
              alt="Architectural drawing pinned for design review"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-stone-500">
              Drawings And Development
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[0.98] text-stone-900 sm:text-5xl">
              Drawing work remains central to how ideas are tested and refined.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
              Concept sketches, drawing studies, and technical coordination are
              not treated as separate from design. They are part of how the
              architecture becomes more precise, more buildable, and more
              convincing.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
