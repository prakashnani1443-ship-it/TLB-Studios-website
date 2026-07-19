import Reveal from "@/components/motion/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Oversized editorial index, e.g. "01" — omit for sections that don't need one. */
  index?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  index,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={
        isCenter
          ? "relative mx-auto max-w-2xl text-center"
          : "relative max-w-2xl"
      }
    >
      {index ? (
        <span
          aria-hidden="true"
          className={`font-syne pointer-events-none absolute -top-8 select-none text-7xl font-extrabold text-foreground/5 sm:text-8xl ${
            isCenter ? "left-1/2 -translate-x-1/2" : "-left-1 sm:-left-3"
          }`}
        >
          {index}
        </span>
      ) : null}
      {eyebrow ? (
        <p className="relative mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="relative font-heading text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="relative mt-4 text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
