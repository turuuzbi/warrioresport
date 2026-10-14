"use client";

import { CalendarDays, Trophy } from "lucide-react";
import { events, ui } from "@/data/site";
import { useLang } from "@/lib/lang";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Events() {
  const { t } = useLang();
  return (
    <section id="events" className="relative border-y border-line bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="06"
          label={t({ mn: "ТЭМЦЭЭН", en: "EVENTS" })}
          title={t({ mn: "Удахгүй болох", en: "Upcoming" })}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {events.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.1}>
              <article className="glow-border clip-card h-full">
                <div className="inner clip-card flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="mono-label">{e.game}</span>
                    <span className="border border-hot/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-hot">
                      {t(ui.demoTag)}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-extrabold uppercase leading-tight">{t(e.title)}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-mute">{t(e.desc)}</p>
                  <dl className="mt-5 space-y-2 border-t border-line pt-4 font-mono text-sm">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={15} className="text-accent" aria-hidden />
                      <dt className="sr-only">Date</dt>
                      <dd>{t(e.date)}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy size={15} className="text-accent-2" aria-hidden />
                      <dt className="sr-only">Prize</dt>
                      <dd className="text-accent-2">{t(e.prize)}</dd>
                    </div>
                  </dl>
                  <a
                    href="#contact"
                    className="clip-btn mt-5 block border border-accent/60 py-3 text-center font-display text-sm font-extrabold uppercase tracking-wider transition hover:bg-accent hover:text-black"
                  >
                    {t({ mn: "Бүртгүүлэх", en: "Register" })}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
