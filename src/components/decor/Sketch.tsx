// Small hand-drawn accent marks — used sparingly, never as primary typography.
type SketchProps = { className?: string };

export function SketchArrow({ className = "" }: SketchProps) {
  return (
    <svg
      viewBox="0 0 80 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 6 C 22 3, 46 11, 60 30 C 64 36, 66 41, 68 48" />
      <path d="M55 43 L 69 49 L 65 34" />
    </svg>
  );
}

export function SketchUnderline({ className = "" }: SketchProps) {
  return (
    <svg
      viewBox="0 0 200 16"
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M2 9 C 40 3, 78 14, 118 7 S 178 3, 198 10" />
    </svg>
  );
}

export function SketchAnnotationCircle({ className = "" }: SketchProps) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M58 3 C 90 1, 117 15, 113 31 C 109 49, 77 58, 52 55 C 22 52, 3 38, 8 22 C 13 6, 38 1, 58 3 Z" />
    </svg>
  );
}
