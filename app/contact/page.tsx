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
      <section className="px-6 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:px-10 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-site">
          <SectionHeading
            eyebrow="Contact"
            title="Begin the conversation about your project."
            description="Use the form below to share a few initial details. The form is structured for future backend integration and currently serves as a polished front-end contact experience."
          />
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <form className="border border-stone-200 bg-stone-100 p-8 sm:p-10">
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
                  className="mt-2 w-full border border-stone-300 bg-stone-50 px-4 py-3 text-base text-stone-900 outline-none transition-colors duration-300 placeholder:text-stone-400 focus:border-stone-900"
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
                  className="mt-2 w-full border border-stone-300 bg-stone-50 px-4 py-3 text-base text-stone-900 outline-none transition-colors duration-300 placeholder:text-stone-400 focus:border-stone-900"
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
                  className="mt-2 w-full border border-stone-300 bg-stone-50 px-4 py-3 text-base text-stone-900 outline-none transition-colors duration-300 placeholder:text-stone-400 focus:border-stone-900"
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
                  className="mt-2 w-full resize-y border border-stone-300 bg-stone-50 px-4 py-3 text-base text-stone-900 outline-none transition-colors duration-300 placeholder:text-stone-400 focus:border-stone-900"
                  placeholder="Tell us about your project, location, and timeline."
                />
              </div>
              <button
                type="button"
                className="inline-flex w-fit items-center justify-center border border-stone-900 bg-stone-900 px-6 py-3 text-sm uppercase tracking-[0.18em] text-stone-50 transition-colors duration-300 hover:bg-transparent hover:text-stone-900"
              >
                Send Inquiry
              </button>
              <p className="text-sm leading-6 text-stone-500">
                Form submission logic can be connected here when the backend
                workflow is ready.
              </p>
            </div>
          </form>

          <aside className="border border-stone-200 bg-stone-50 p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
              Direct Contact
            </p>
            <div className="mt-8 space-y-8">
              <div>
                <h2 className="font-serif text-2xl text-stone-900">Email</h2>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="mt-3 inline-block text-base text-stone-700 transition-colors duration-300 hover:text-stone-900"
                >
                  {contactDetails.email}
                </a>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-stone-900">Phone</h2>
                <a
                  href={`tel:${contactDetails.phone.replace(/[^0-9]/g, "")}`}
                  className="mt-3 inline-block text-base text-stone-700 transition-colors duration-300 hover:text-stone-900"
                >
                  {contactDetails.phone}
                </a>
              </div>
              <div>
                <h2 className="font-serif text-2xl text-stone-900">Meetings</h2>
                <p className="mt-3 text-base leading-7 text-stone-700">
                  {contactDetails.office}. Initial consultations can be arranged
                  once project details are received.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
