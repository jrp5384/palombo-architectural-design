import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="section-space px-6 lg:px-10">
      <div className="mx-auto max-w-site border-y border-stone-200/80 py-14 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.24em] text-stone-500">
            Start A Conversation
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-[0.98] text-stone-900 sm:text-5xl">
            Planning a home, a commercial interior, or a thoughtful renovation?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
            Share a few details to begin a conversation about the project,
            timeline, and next steps.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center border border-stone-900 bg-stone-900 px-7 py-3.5 text-[13px] uppercase tracking-[0.18em] text-stone-50 transition-colors duration-300 hover:bg-transparent hover:text-stone-900"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
