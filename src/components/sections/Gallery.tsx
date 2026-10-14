"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery, ui } from "@/data/site";
import { useLang } from "@/lib/lang";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Gallery() {
  const { t } = useLang();
  const [active, setActive] = useState<number | null>(null);

  const step = useCallback((d: number) => setActive((a) => (a === null ? a : (a + d + gallery.length) % gallery.length)), []);

  useEffect(() => {
    if (active === null) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", key);
    };
  }, [active, step]);

  const cur = active === null ? null : gallery[active];

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading
        index="05"
        label={t({ mn: "ГАЛЕРЕЙ", en: "GALLERY" })}
        title={t({ mn: "Заалын дотор", en: "Inside the arena" })}
      />
      <div className="columns-2 gap-3 md:columns-3 md:gap-4">
        {gallery.map((g, i) => (
          <Reveal key={g.src} delay={(i % 3) * 0.06} className="mb-3 break-inside-avoid md:mb-4">
            <button
              type="button"
              onClick={() => setActive(i)}
              className="clip-card group relative block w-full overflow-hidden border border-line"
              aria-label={t(g.alt)}
            >
              <Image
                src={g.src}
                alt={t(g.alt)}
                width={g.w}
                height={g.h}
                sizes="(min-width:1280px) 400px, (min-width:768px) 33vw, 50vw"
                className="h-auto w-full transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {cur && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t(cur.alt)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 border border-line bg-black/60 p-2.5 hover:border-accent"
              aria-label={t(ui.close)}
              onClick={() => setActive(null)}
            >
              <X size={22} />
            </button>
            <button
              type="button"
              className="absolute left-2 top-1/2 -translate-y-1/2 border border-line bg-black/60 p-2.5 hover:border-accent sm:left-6"
              aria-label={t(ui.prev)}
              onClick={(e) => { e.stopPropagation(); step(-1); }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 border border-line bg-black/60 p-2.5 hover:border-accent sm:right-6"
              aria-label={t(ui.next)}
              onClick={(e) => { e.stopPropagation(); step(1); }}
            >
              <ChevronRight size={24} />
            </button>
            <motion.figure
              key={cur.src}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-h-[85vh] max-w-[min(92vw,900px)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={cur.src}
                alt={t(cur.alt)}
                width={cur.w}
                height={cur.h}
                sizes="92vw"
                className="max-h-[78vh] w-auto border border-accent/50 object-contain shadow-[0_0_50px_rgba(255,106,0,0.25)]"
              />
              <figcaption className="mt-3 text-center font-mono text-xs text-mute">
                {String((active ?? 0) + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")} — {t(cur.alt)}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
