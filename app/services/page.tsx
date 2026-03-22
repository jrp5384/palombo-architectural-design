import type { Metadata } from "next";

import { ContactCTA } from "@/components/contact-cta";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architectural design services for residential, commercial, and renovation projects.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:px-10 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-site">
          <SectionHeading
            eyebrow="Services"
            title="Architecture services delivered with focus, technical rigor, and a measured design process."
            description="Each service is offered with the same intent: to create spaces that are refined, functional, and carefully resolved from concept to documentation."
          />
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mx-auto grid max-w-site gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="border border-stone-200 bg-stone-100 p-8 sm:p-10"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                Service
              </p>
              <h2 className="mt-4 font-serif text-3xl text-stone-900">
                {service.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-stone-700">
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
