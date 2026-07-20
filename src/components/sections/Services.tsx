import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { services } from "@/lib/site-config";
import {
  AutomationIcon,
  WebsiteIcon,
  ContentIcon,
  BrandIcon,
  CameraIcon,
  OperationsIcon,
  GrowthIcon,
} from "@/components/icons";

const icons = {
  "ai-automation": AutomationIcon,
  "websites-digital-systems": WebsiteIcon,
  "social-media-content": ContentIcon,
  "branding-visual-design": BrandIcon,
  "photography-media": CameraIcon,
  "business-operations-automation": OperationsIcon,
  "advertising-growth": GrowthIcon,
} as const;

// Bento rhythm: 2/1, 1/2, 2/1 columns per row on large screens, with the
// newest service closing the grid as a full-width capstone row.
const spans = ["lg:col-span-2", "lg:col-span-1", "lg:col-span-1", "lg:col-span-2", "lg:col-span-2", "lg:col-span-1", "lg:col-span-3"];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow="What We Do"
          title="Services built around real business needs"
          description="Seven practical service areas that cover how a growing business communicates, presents itself, and operates day to day."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.id as keyof typeof icons];
            return (
              <Reveal key={service.id} delay={i * 0.06} className={spans[i]}>
                <div
                  className={`group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 ${
                    service.image ? "lg:grid lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-8" : ""
                  }`}
                >
                  <div className="relative">
                    <span
                      aria-hidden="true"
                      className="font-syne pointer-events-none absolute -right-2 -top-4 select-none text-6xl font-extrabold text-foreground/[0.04]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="relative mt-5 font-heading text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <ul className="relative mt-4 space-y-1.5">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {service.image ? (
                    <ImagePlaceholder
                      image={service.image}
                      concept
                      aspect="aspect-[16/9]"
                      className="relative mt-6 lg:mt-0"
                    />
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
