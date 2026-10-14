"use client";

import { Check } from "lucide-react";
import { pricing, pricingNote, ui } from "@/data/site";
import { useLang } from "@/lib/lang";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Pricing() {
  const { t } = useLang();
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading
        index="03"
        label={t({ mn: "ҮНЭ", en: "PRICING" })}
        title={t({ mn: "Үнэ, багц", en: "Rates & packs" })}
        sub={t({ mn: "Хэр удаан тоглохоо шийд — үлдсэнийг бид бэлдсэн.", en: "Choose how long you play — we've got the rest." })}
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pricing.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08} className={p.popular ? "lg:-mt-3 lg:mb-3" : ""}>
            <article
              className={`clip-card relative h-full p-px ${
                p.popular
                  ? "bg-gradient-to-br from-accent via-accent-2 to-accent shadow-[0_0_45px_rgba(255,106,0,0.35)]"
                  : "bg-line"
              }`}
            >
              <div className={`clip-card flex h-full flex-col p-6 ${p.popular ? "bg-surface-2" : "bg-surface"}`}>
                {p.popular && (
                  <span className="clip-tag absolute right-4 top-0 bg-accent px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-black">
                    {t(ui.mostPopular)}
                  </span>
                )}
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">{t(p.name)}</h3>
                <p className="mt-4 font-display text-4xl font-black text-glow">{p.price}</p>
                <p className="font-mono text-xs text-mute">{t(p.unit)}</p>
                <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-5">
                  {p.perks.map((k) => (
                    <li key={k.en} className="flex items-start gap-2.5 text-[15px]">
                      <Check size={16} className="mt-1 shrink-0 text-accent" aria-hidden />
                      {t(k)}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`clip-btn mt-6 block py-3 text-center font-display text-sm font-extrabold uppercase tracking-wider transition ${
                    p.popular ? "bg-accent text-black hover:brightness-110" : "border border-line hover:border-accent hover:text-accent"
                  }`}
                >
                  {t(ui.book)}
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-8 border-l-2 border-accent pl-4 text-sm text-mute">
          {t(pricingNote)} <span className="mono-label ml-1 !text-mute">* {t(ui.demoTag)}</span>
        </p>
      </Reveal>
    </section>
  );
}
