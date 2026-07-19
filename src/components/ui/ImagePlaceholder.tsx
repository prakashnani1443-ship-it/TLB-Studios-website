import Image from "next/image";
import { ImagePlaceholderIcon } from "@/components/icons";
import type { GalleryImage } from "@/lib/site-config";

type ImagePlaceholderProps = {
  image: GalleryImage;
  aspect?: string;
  className?: string;
};

// Renders a real image once `image.src` is set in the central config,
// otherwise a clearly labeled placeholder box.
export default function ImagePlaceholder({
  image,
  aspect = "aspect-[4/3]",
  className = "",
}: ImagePlaceholderProps) {
  if (image.src) {
    return (
      <div className={`relative overflow-hidden rounded-2xl border border-border ${aspect} ${className}`}>
        <Image
          src={image.src}
          alt={image.label}
          fill
          className="object-cover"
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
      <span className="absolute left-3 top-3 rounded-full border border-accent/40 bg-ink/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
        Concept
      </span>
      <ImagePlaceholderIcon className="h-6 w-6" />
      <span className="px-4 text-center text-xs font-medium uppercase tracking-wide">
        {image.label}
      </span>
    </div>
  );
}
