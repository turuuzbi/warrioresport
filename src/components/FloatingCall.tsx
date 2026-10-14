"use client";

import { Phone } from "lucide-react";
import { brand, ui } from "@/data/site";
import { useLang } from "@/lib/lang";

/** Sticky call bar, mobile only */
export function FloatingCall() {
  const { t } = useLang();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <a
        href={`tel:${brand.phone.tel}`}
        className="clip-btn flex items-center justify-center gap-2.5 bg-accent py-3.5 font-display text-base font-extrabold uppercase tracking-wider text-black shadow-[0_0_30px_rgba(255,106,0,0.55)]"
      >
        <Phone size={18} aria-hidden /> {t(ui.callNow)} · {brand.phone.display}
      </a>
    </div>
  );
}
