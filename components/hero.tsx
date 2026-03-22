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
    <section className="relative isolate min-h-[76vh] overflow-hidden bg-stone-900">
      <Image
        src={image}
        alt="Featured architectural project"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-black/20" />
      <div className="relative mx-auto flex min-h-[76vh] max-w-site items-end px-6 pb-14 pt-28 sm:pb-20 lg:px-10">
        <div className="max-w-3xl text-stone-50">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-stone-200/90">
            Architecture Studio
          </p>
          <h1 className="font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100/90 sm:text-xl">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center border border-stone-100 bg-stone-50 px-6 py-3 text-sm uppercase tracking-[0.18em] text-stone-900 transition-colors duration-300 hover:bg-transparent hover:text-stone-50"
            >
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center border border-stone-200/70 px-6 py-3 text-sm uppercase tracking-[0.18em] text-stone-50 transition-colors duration-300 hover:bg-stone-50 hover:text-stone-900"
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
