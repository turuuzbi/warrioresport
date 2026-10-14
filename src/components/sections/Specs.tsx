"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { specs } from "@/data/site";
import { useLang } from "@/lib/lang";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Specs() {
  const { t } = useLang();
  return (
    <section id="specs" className="relative border-y border-line bg-surface py-20 md:py-28">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="02"
          label={t({ mn: "ТОНОГ ТӨХӨӨРӨМЖ", en: "HARDWARE" })}
          title={t({ mn: "Тоног төхөөрөмж", en: "Built for frames" })}
          sub={t({
            mn: "Бүх суудал дээр ижил хүчирхэг тохиргоо — лагггүй, тасалдалгүй.",
            en: "The same powerful setup at every seat — no lag, no excuses.",
          })}
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glow-border clip-card">
              <div className="inner clip-card p-5 sm:p-7">
                <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
                  <p className="mono-label flex items-center gap-2">
                    <Cpu size={14} aria-hidden /> {t(specs.title)}
                  </p>
                  <p className="font-mono text-xs text-mute">
                    BUILD <span className="text-ink">{specs.build}</span>
                  </p>
                </div>
                <dl className="space-y-5">
                  {specs.rows.map((r, i) => (
                    <div key={r.key}>
                      <div className="flex flex-col justify-between gap-0.5 sm:flex-row sm:items-baseline">
                        <dt className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">{r.key}</dt>
                        <dd className="font-mono text-sm text-ink sm:text-base">{r.value}</dd>
                      </div>
                      <div className="mt-2 h-1.5 w-full bg-white/[0.06]" role="presentation">
                        <motion.div
                          className="h-full bg-gradient-to-r from-accent to-accent-2 shadow-[0_0_10px_rgba(255,106,0,0.7)]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${r.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, delay: 0.1 + i * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ok">
                  <span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden /> ALL SYSTEMS NOMINAL
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-2">
            <div className="glow-border clip-card h-full">
              <div className="inner clip-card p-5 sm:p-7">
                <p className="mono-label mb-6 border-b border-line pb-4">
                  {t({ mn: "ПЕРИФЕРАЛ", en: "PERIPHERALS" })}
                </p>
                <ul className="space-y-4">
                  {specs.peripherals.map((p) => (
                    <li key={p.v} className="border-l-2 border-accent pl-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">{t(p.k)}</p>
                      <p className="mt-0.5 font-display text-lg font-bold">{p.v}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
