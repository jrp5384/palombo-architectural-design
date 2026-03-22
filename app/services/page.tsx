import type { Metadata } from "next";

import { ContactCTA } from "@/components/contact-cta";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architectural services for residential, commercial, and renovation projects.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:px-10 lg:pb-28 lg:pt-32">
        <div className="mx-auto max-w-site">
          <SectionHeading
            eyebrow="Services"
            title="Services are offered selectively and shaped to fit the needs of each project."
            description="Rather than a broad menu of offerings, each commission is approached with a scope matched to what will genuinely move the design forward."
          />
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto grid max-w-site gap-x-12 gap-y-12 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="border-t border-stone-300 pt-8">
              <p className="text-[11px] uppercase tracking-[0.24em] text-stone-500">
                Service
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-stone-900 sm:text-4xl">
                {service.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-stone-700">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
