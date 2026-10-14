"use client";

import { stats } from "@/data/site";
import { useLang } from "@/lib/lang";
import { Counter } from "../ui/Counter";
import { Reveal } from "../ui/Reveal";

export function Stats() {
  const { t } = useLang();
  return (
    <section id="stats" aria-label="Key numbers" className="relative border-y border-line bg-surface">
      <div className="rgb-line absolute inset-x-0 top-0" />
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-line px-4 sm:px-6 md:grid-cols-4 md:divide-x">
        {stats.map((s, i) => (
          <Reveal key={s.suffix + i} delay={i * 0.08} className="px-2 py-8 text-center md:py-10">
            <div className="font-display text-4xl font-black text-accent text-glow md:text-5xl">
              <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <div className="mono-label mt-2 !text-mute">{t(s.label)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
