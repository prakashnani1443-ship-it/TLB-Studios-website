import { aboutValues } from "@/lib/site-config";
import Reveal from "@/components/motion/Reveal";
import { SketchAnnotationCircle } from "@/components/decor/Sketch";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-y border-border bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <p className="relative mb-3 inline-block text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              About TLB Studios
              <SketchAnnotationCircle className="pointer-events-none absolute -left-3 -top-3 -z-10 h-10 w-[calc(100%+1.5rem)] text-accent/25" />
            </p>
            <h2 className="font-heading text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl">
              Creativity, technology, and business thinking — together
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              TLB Studios brings together creativity, technology, media
              experience, and practical business thinking. We do not create
              digital assets only to look good. We build systems that help
              businesses communicate better, operate faster, and grow with
              clarity.
            </p>
          </Reveal>

          <div className="space-y-4">
            {aboutValues.map((value, i) => (
              <Reveal key={value} delay={i * 0.08}>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-ink p-5 transition-colors hover:border-accent/40">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 shrink-0 rounded-full bg-accent"
                  />
                  <p className="font-heading text-base font-medium text-foreground">
                    {value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
