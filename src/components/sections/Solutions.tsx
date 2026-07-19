import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { solutions } from "@/lib/site-config";

// TLB-OS (index 0) is the flagship platform — give it more visual weight.
const spans = ["lg:col-span-2 lg:row-span-2", "lg:col-span-1", "lg:col-span-1", "lg:col-span-1", "lg:col-span-1", "lg:col-span-1"];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="scroll-mt-16 border-y border-border bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="What We Build"
          title="Systems and platforms, not just deliverables"
          description="A set of focused solutions we design and build for clients — some live, some in active development."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[1fr]">
          {solutions.map((solution, i) => (
            <Reveal key={solution.id} delay={i * 0.06} className={spans[i]}>
              <div
                className={`relative h-full overflow-hidden rounded-2xl border border-border bg-ink p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 ${
                  i === 0 ? "flex flex-col justify-center sm:p-8" : ""
                }`}
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet/10 blur-2xl"
                />
                <h3
                  className={`relative font-heading font-semibold text-foreground ${
                    i === 0 ? "text-2xl" : "text-lg"
                  }`}
                >
                  {solution.title}
                </h3>
                <p
                  className={`relative mt-3 leading-relaxed text-muted ${
                    i === 0 ? "text-base" : "text-sm"
                  }`}
                >
                  {solution.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
