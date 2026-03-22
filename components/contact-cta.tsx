import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-site border border-stone-200 bg-stone-100 px-8 py-12 sm:px-12 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
            Start A Conversation
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-stone-900 sm:text-4xl">
            Planning a new home, a commercial space, or a thoughtful renovation?
          </h2>
          <p className="mt-5 text-base leading-7 text-stone-700 sm:text-lg">
            Share a few details about your project and the studio will be in
            touch to discuss scope, timeline, and how the design process can
            support your goals.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center border border-stone-900 bg-stone-900 px-6 py-3 text-sm uppercase tracking-[0.18em] text-stone-50 transition-colors duration-300 hover:bg-transparent hover:text-stone-900"
          >
            Contact The Studio
          </Link>
        </div>
      </div>
    </section>
  );
}
