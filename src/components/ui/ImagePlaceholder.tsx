import Image from "next/image";
import { ImagePlaceholderIcon } from "@/components/icons";
import type { GalleryImage } from "@/lib/site-config";

type ImagePlaceholderProps = {
  image: GalleryImage;
  aspect?: string;
  className?: string;
  /** Force the "Concept" badge even when a real src is set — use for
   * generated/AI visuals (e.g. from /images/generated-concepts) that must
   * never read as completed client work. */
  concept?: boolean;
};

function ConceptBadge() {
  return (
    <span className="absolute left-3 top-3 z-10 rounded-full border border-accent/40 bg-ink/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
      Concept
    </span>
  );
}

// Renders a real image once `image.src` is set in the central config,
// otherwise a clearly labeled placeholder box. Real images use object-contain
// (not cover) because source assets come in mixed aspect ratios — this
// guarantees nothing is ever stretched or cropped, at the cost of a little
// letterboxing, which reads as an intentional mat against the card surface.
export default function ImagePlaceholder({
  image,
  aspect = "aspect-[4/3]",
  className = "",
  concept = false,
}: ImagePlaceholderProps) {
  if (image.src) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl border border-border bg-surface-2 shadow-lg shadow-black/30 ${aspect} ${className}`}
      >
        {concept ? <ConceptBadge /> : null}
        <Image
          src={image.src}
          alt={image.label}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Concept placeholder — ${image.label}. Not completed client work. Replace via src/lib/site-config.ts`}
      className={`relative flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-surface-2 text-muted ${aspect} ${className}`}
    >
      <ConceptBadge />
      <ImagePlaceholderIcon className="h-6 w-6" />
      <span className="px-4 text-center text-xs font-medium uppercase tracking-wide">
        {image.label}
      </span>
    </div>
  );
}
