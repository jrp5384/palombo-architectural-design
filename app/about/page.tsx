import type { Metadata } from "next";
import Image from "next/image";

import { ContactCTA } from "@/components/contact-cta";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the philosophy and studio approach behind Palombo Architectural Design.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:px-10 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-site">
          <SectionHeading
            eyebrow="About"
            title="A design practice centered on clarity, craftsmanship, and thoughtful client collaboration."
            description="Palombo Architectural Design creates residential and commercial environments with a disciplined eye for proportion, materiality, and the experience of space."
          />
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
            <Image
              src="/images/drawings/Drawing 8.JPG"
              alt="Architectural drawing pinned for studio review"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <div className="space-y-8 text-base leading-8 text-stone-700 sm:text-lg">
            <div>
              <h2 className="font-serif text-3xl text-stone-900">
                Studio Background
              </h2>
              <p className="mt-4">
                The firm approaches each project with the belief that well-made
                architecture should feel both composed and deeply livable.
                Whether working on a new residence, a renovation, or a
                commercial interior, the process begins with understanding how
                clients want to live, work, gather, and move through a space.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-stone-900">
                Design Philosophy
              </h2>
              <p className="mt-4">
                The studio favors architecture that is calm, enduring, and
                precisely detailed. Natural light, material consistency,
                measured scale, and functional planning all play a central role.
                The result is work that feels elegant without excess and
                practical without compromise.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-stone-900">
                Working With Clients
              </h2>
              <p className="mt-4">
                Clear communication and responsiveness remain integral
                throughout the process. From concept development through drawing
                coordination, clients are guided through decisions with care so
                the final work reflects both strong architectural intent and the
                realities of construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
