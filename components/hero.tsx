import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  image: string;
  title: string;
  subtitle: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function Hero({
  image,
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: HeroProps) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-stone-900">
      <Image
        src={image}
        alt="Featured architectural project"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/32 to-black/18" />
      <div className="relative mx-auto flex min-h-screen max-w-site items-end px-6 pb-16 pt-36 sm:pb-24 lg:px-10 lg:pb-28">
        <div className="max-w-4xl text-stone-50">
          <p className="mb-6 text-[11px] uppercase tracking-[0.32em] text-stone-200/85">
            Residential And Commercial Architecture
          </p>
          <h1 className="font-serif text-6xl leading-[0.9] sm:text-7xl lg:text-[6.5rem]">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-100/88 sm:text-xl lg:text-[1.4rem] lg:leading-9">
            {subtitle}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center border border-stone-100 bg-stone-50 px-7 py-3.5 text-[13px] uppercase tracking-[0.18em] text-stone-900 transition-colors duration-300 hover:bg-transparent hover:text-stone-50"
            >
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center border border-stone-200/70 px-7 py-3.5 text-[13px] uppercase tracking-[0.18em] text-stone-50 transition-colors duration-300 hover:bg-stone-50 hover:text-stone-900"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
