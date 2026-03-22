import Image from "next/image";

import { drawings } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export function ProcessSection() {
  return (
    <section className="bg-stone-100 px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-site gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Process"
            title="Drawings, studies, and careful development remain central to every project."
            description="The studio approaches each commission through measured concept work, technical rigor, and close attention to how spaces will be experienced over time."
          />
          <div className="mt-10 space-y-6 text-base leading-7 text-stone-700">
            <p>
              Early sketches and drawing packages are treated as essential
              design tools, not simply deliverables. They guide proportion,
              circulation, light, and material decisions from the first concept
              through construction.
            </p>
            <p>
              This disciplined process supports projects that feel resolved,
              practical, and quietly distinctive.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {drawings.map((drawing, index) => (
            <figure
              key={drawing.image}
              className={index === 0 ? "sm:col-span-2" : ""}
            >
              <div
                className={`relative overflow-hidden bg-stone-200 ${
                  index === 0 ? "aspect-[16/10]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={drawing.image}
                  alt={drawing.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="mt-3 text-sm text-stone-700">
                {drawing.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
