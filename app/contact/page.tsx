import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { contactDetails } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Palombo Architectural Design to discuss a new project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="px-6 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:px-10 lg:pb-28 lg:pt-32">
        <div className="mx-auto max-w-site">
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch to discuss a project, renovation, or early design idea."
            description="Share a few initial details below to begin the conversation about fit, timing, and next steps."
          />
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto grid max-w-site gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <form className="border-t border-stone-300 pt-8">
            <div className="grid gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-stone-900"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="mt-3 w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 text-base text-stone-900 outline-none transition-colors duration-300 placeholder:text-stone-400 focus:border-stone-900 focus:ring-0"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-stone-900"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-3 w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 text-base text-stone-900 outline-none transition-colors duration-300 placeholder:text-stone-400 focus:border-stone-900 focus:ring-0"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-stone-900"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-3 w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 text-base text-stone-900 outline-none transition-colors duration-300 placeholder:text-stone-400 focus:border-stone-900 focus:ring-0"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-stone-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  className="mt-3 w-full resize-y border border-stone-300 bg-stone-50 px-4 py-4 text-base text-stone-900 outline-none transition-colors duration-300 placeholder:text-stone-400 focus:border-stone-900"
                  placeholder="Tell us about your project, location, and timeline."
                />
              </div>
              <button
                type="button"
                className="inline-flex w-fit items-center justify-center border border-stone-900 bg-stone-900 px-7 py-3.5 text-[13px] uppercase tracking-[0.18em] text-stone-50 transition-colors duration-300 hover:bg-transparent hover:text-stone-900"
              >
                Send Inquiry
              </button>
              <p className="text-sm leading-6 text-stone-500">
                Form submission logic can be connected here when the backend
                workflow is ready.
              </p>
            </div>
          </form>

          <aside className="border-t border-stone-300 pt-8">
            <p className="text-[11px] uppercase tracking-[0.24em] text-stone-500">
              Direct Contact
            </p>
            <div className="mt-8 space-y-8">
              <div>
                <h2 className="font-serif text-3xl text-stone-900">Email</h2>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="mt-3 inline-block text-base text-stone-700 transition-colors duration-300 hover:text-stone-900"
                >
                  {contactDetails.email}
                </a>
              </div>
              <div>
                <h2 className="font-serif text-3xl text-stone-900">Phone</h2>
                <a
                  href={`tel:${contactDetails.phone.replace(/[^0-9]/g, "")}`}
                  className="mt-3 inline-block text-base text-stone-700 transition-colors duration-300 hover:text-stone-900"
                >
                  {contactDetails.phone}
                </a>
              </div>
              <div>
                <h2 className="font-serif text-3xl text-stone-900">Meetings</h2>
                <p className="mt-3 text-base leading-8 text-stone-700">
                  {contactDetails.office}. Initial conversations can be arranged
                  once a few project details are shared.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
