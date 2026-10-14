"use client";

import { motion } from "framer-motion";
import { games } from "@/data/site";
import { useLang } from "@/lib/lang";
import { SectionHeading } from "../ui/SectionHeading";

export function Games() {
  const { t } = useLang();
  return (
    <section id="games" className="relative border-y border-line bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="04"
          label={t({ mn: "ТОГЛООМ", en: "LIBRARY" })}
          title={t({ mn: "Суулгасан тоглоомууд", en: "Installed titles" })}
          sub={t({ mn: "Бүх шинэчлэлт бэлэн — зүгээр суугаад тогло.", en: "Always patched and ready. Sit down and play." })}
        />
        <ul className="flex flex-wrap gap-3">
          {games.map((g, i) => (
            <motion.li
              key={g.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: (i % 8) * 0.04, duration: 0.35 }}
              className={`clip-tag cursor-default border px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wider transition hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(255,106,0,0.45)] sm:text-base ${
                g.hot
                  ? "border-accent bg-accent/15 text-accent-2"
                  : "border-line bg-bg text-ink/90 hover:border-accent/60"
              }`}
            >
              {g.name}
              {g.hot && <span className="ml-2 font-mono text-[10px] text-hot">● HOT</span>}
            </motion.li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-xs text-mute">+ {t({ mn: "болон бусад олон тоглоом", en: "and many more" })}</p>
      </div>
    </section>
  );
}
