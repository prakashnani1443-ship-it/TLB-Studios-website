import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import StatusBadge from "@/components/ui/StatusBadge";
import { SketchUnderline } from "@/components/decor/Sketch";
import { work } from "@/lib/site-config";
import { ArrowRightIcon } from "@/components/icons";

export default function Work() {
  return (
    <section id="work" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <SectionHeading
            index="03"
            eyebrow="Selected Work"
            title="Projects across products, clients, and internal systems"
            description="A mix of live builds and planned systems. Every project card and detail page shows its current type and status."
          />
          <SketchUnderline className="pointer-events-none absolute -bottom-3 left-0 hidden h-3 w-44 text-accent/40 sm:block" />
        </div>

        <div className="mt-16 flex flex-col gap-16 sm:gap-20">
          {work.map((item, i) => {
            const reversed = i % 2 === 1;
            const cover = item.images.cover;
            return (
              <Reveal key={item.id} delay={0.05}>
                <Link
                  href={`/work/${item.id}`}
                  className="group grid grid-cols-1 items-center gap-8 rounded-2xl focus-visible:outline-none lg:grid-cols-2 lg:gap-14"
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl ${
                      reversed ? "lg:order-2" : ""
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="font-syne absolute -top-6 left-4 z-10 select-none text-8xl font-extrabold text-foreground/[0.06] sm:text-9xl"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {cover ? (
                      <ImagePlaceholder
                        image={cover}
                        aspect="aspect-[3/2]"
                        className="relative transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    ) : null}
                  </div>

                  <div className={reversed ? "lg:order-1" : ""}>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      {item.category}
                    </p>
                    <h3 className="mt-3 font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                      {item.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <StatusBadge label={item.type} tone="type" />
                      <StatusBadge label={item.status} tone="status" />
                    </div>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                      View project
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
