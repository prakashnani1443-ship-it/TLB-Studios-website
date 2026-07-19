type StatusBadgeProps = {
  label: string;
  /** "type" renders a neutral outline badge; "status" adds a colored dot. */
  tone?: "type" | "status";
};

// Maps known status labels to a dot color. Falls back to muted for anything
// not in this list (e.g. a future status added in site-config.ts).
const statusColor: Record<string, string> = {
  Live: "bg-accent",
  Active: "bg-accent",
  "In Development": "bg-violet",
  Planned: "bg-muted",
};

export default function StatusBadge({ label, tone = "type" }: StatusBadgeProps) {
  if (tone === "type") {
    return (
      <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted">
        {label}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground">
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${statusColor[label] ?? "bg-muted"}`}
      />
      {label}
    </span>
  );
}
