"use client";

import Image from "next/image";
import { Users } from "lucide-react";
import { zones } from "@/data/site";
import { useLang } from "@/lib/lang";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Zones() {
  const { t } = useLang();
  return (
    <section id="zones" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading
        index="01"
        label={t({ mn: "БҮСҮҮД", en: "ZONES" })}
        title={t({ mn: "Өөрийн бүсээ сонго", en: "Pick your zone" })}
        sub={t({
          mn: "Энгийн тоглолтоос эхлээд тэмцээний түвшин хүртэл — бүх хэрэгцээнд тохирсон талбай.",
          en: "From casual sessions to tournament-grade — a space for every kind of player.",
        })}
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {zones.map((z, i) => (
          <Reveal key={z.id} delay={(i % 3) * 0.08} className={i === 0 ? "lg:col-span-2" : ""}>
            <article className="glow-border clip-card group h-full">
              <div className="inner clip-card flex h-full flex-col">
                <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
                  <Image
                    src={z.image.src}
                    alt={t(z.image.alt)}
                    fill
                    sizes={i === 0 ? "(min-width:1024px) 66vw, 100vw" : "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                  <span className="mono-label clip-tag absolute left-3 top-3 bg-black/70 px-3 py-1 backdrop-blur">
                    {t(z.tag)}
                  </span>
                  {z.seats > 0 && (
                    <span className="absolute right-3 top-3 flex items-center gap-1.5 bg-black/70 px-2.5 py-1 font-mono text-xs backdrop-blur">
                      <Users size={13} className="text-accent" aria-hidden /> {z.seats}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide">{t(z.name)}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-mute">{t(z.desc)}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {z.specs.map((s) => (
                      <li key={s} className="border border-accent/35 bg-accent/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-accent-2">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
