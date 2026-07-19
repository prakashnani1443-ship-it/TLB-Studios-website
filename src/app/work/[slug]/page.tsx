import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { work, getWorkItem } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import StatusBadge from "@/components/ui/StatusBadge";
import Reveal from "@/components/motion/Reveal";
import { ArrowRightIcon } from "@/components/icons";

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.id }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkItem(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.description,
    openGraph: { title: item.title, description: item.description },
    twitter: { title: item.title, description: item.description },
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getWorkItem(slug);
  if (!item) notFound();

  const { images } = item;

  return (
    <article className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Work", href: "/#work" },
            { label: item.title },
          ]}
        />

        {/* Overview */}
        <Reveal className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            {item.category}
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            {item.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {item.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <StatusBadge label={item.type} tone="type" />
            <StatusBadge label={item.status} tone="status" />
          </div>
        </Reveal>

        {/* Problem + What We Built */}
        <Reveal delay={0.05} className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              The business problem
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.problem}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              What TLB Studios built
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.built}
            </p>
          </div>
        </Reveal>

        {/* Key features */}
        <Reveal delay={0.1} className="mt-14">
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Key features
          </h2>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {item.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 rounded-xl border border-border bg-surface p-4 text-sm text-muted"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                />
                {feature}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Dashboard preview */}
        <Reveal delay={0.1} className="mt-14">
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Dashboard Preview
          </h2>
          <div className="mt-5">
            <ImagePlaceholder image={images.mainScreen} aspect="aspect-[16/10]" />
          </div>
        </Reveal>

        {/* Mobile preview */}
        <Reveal delay={0.1} className="mt-14">
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Mobile Preview
          </h2>
          <div className="mt-5 max-w-xs">
            <ImagePlaceholder image={images.mobile} aspect="aspect-[9/16]" />
          </div>
        </Reveal>

        {/* System workflow */}
        <Reveal delay={0.1} className="mt-14">
          <h2 className="font-heading text-lg font-semibold text-foreground">
            System Workflow
          </h2>
          <div className="mt-5">
            <ImagePlaceholder image={images.workflow} aspect="aspect-[16/9]" />
          </div>
        </Reveal>

        {/* Additional gallery, when present */}
        {images.gallery.length > 0 ? (
          <Reveal delay={0.1} className="mt-14">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Additional gallery
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {images.gallery.map((image) => (
                <ImagePlaceholder key={image.id} image={image} />
              ))}
            </div>
          </Reveal>
        ) : null}

        {/* Tools */}
        <Reveal delay={0.1} className="mt-14">
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Tools &amp; systems used
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {item.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Current status */}
        <Reveal delay={0.1} className="mt-14 rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Current status
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <StatusBadge label={item.type} tone="type" />
            <StatusBadge label={item.status} tone="status" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Images on this page are tasteful placeholders until real project
            media is added — none of them represent delivered results,
            metrics, or client testimonials.
          </p>
        </Reveal>

        {/* Contact CTA */}
        <Reveal
          delay={0.1}
          className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-center"
        >
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Have something similar in mind?
            </h2>
            <p className="mt-2 text-sm text-muted">
              Tell us about your business and what you&apos;re trying to build.
            </p>
          </div>
          <Link
            href="/#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            Start a Project
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <div className="mt-10">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
            Back to Work
          </Link>
        </div>
      </div>
    </article>
  );
}
