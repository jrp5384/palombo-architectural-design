type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-4xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl leading-[0.98] text-stone-900 sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-7 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
