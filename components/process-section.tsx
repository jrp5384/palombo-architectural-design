import Image from "next/image";

import { drawings } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export function ProcessSection() {
  return (
    <section className="section-space bg-stone-100 px-6 lg:px-10">
      <div className="mx-auto grid max-w-site gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Process"
            title="Sketches, models, and drawing development remain central to the work."
            description="Each project begins with careful study. Early concepts, technical drawings, and models are used to test proportion, light, circulation, and detail before the work moves further."
          />
          <div className="mt-10 space-y-6 text-base leading-8 text-stone-700">
            <p>
              Drawings are treated as design tools rather than just final
              deliverables. They allow ideas to be tested with discipline and
              keep the work grounded in both atmosphere and constructability.
            </p>
            <p>
              That measured process helps projects feel resolved, personal, and
              quietly confident.
            </p>
          </div>
        </div>
        <div className="grid gap-7 sm:grid-cols-2">
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
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="mt-4 text-sm text-stone-700">
                {drawing.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
