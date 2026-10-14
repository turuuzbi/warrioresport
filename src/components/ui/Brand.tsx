import Image from "next/image";
import { images, brand } from "@/data/site";

export function BrandMark({ size = 36 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src={images.logo.src}
        alt={images.logo.alt.en}
        width={size}
        height={size}
        className="rounded-full ring-1 ring-accent/60"
      />
      <span className="font-display text-sm font-extrabold uppercase tracking-[0.12em] sm:text-base">
        {brand.short}
      </span>
    </span>
  );
}
