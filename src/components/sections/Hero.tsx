import Link from "next/link";
import { site } from "@/lib/site-config";
import { ArrowRightIcon } from "@/components/icons";
import Reveal from "@/components/motion/Reveal";
import LightTrail from "@/components/decor/LightTrail";
import OrbitNodes from "@/components/decor/OrbitNodes";
import { SketchArrow } from "@/components/decor/Sketch";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/3 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-violet/20 blur-[110px]" />
        <LightTrail />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <Reveal className="max-w-2xl text-center lg:text-left">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            {site.eyebrow}
          </p>
          <h1 className="font-syne text-6xl font-extrabold leading-[0.92] tracking-[-0.02em] text-foreground sm:text-7xl md:text-[5.5rem] md:leading-[0.9]">
            {site.tagline}
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
            We create intelligent digital systems, high-impact content,
            modern websites, visual identities, and practical operational
            tools that help businesses work better and grow with clarity.
          </p>

          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <SketchArrow className="pointer-events-none absolute -left-16 -top-14 hidden h-14 w-14 -rotate-12 text-accent/40 lg:block" />
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Start a Project
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Explore Our Work
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="hidden lg:block">
          <OrbitNodes />
        </Reveal>
      </div>
    </section>
  );
}
