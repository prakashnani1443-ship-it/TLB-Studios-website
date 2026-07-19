// Site-wide subtle grid texture. Pure CSS, no client JS needed.
export default function GridBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-20 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(to right, #e7edf7 1px, transparent 1px), linear-gradient(to bottom, #e7edf7 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  );
}
