"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Crosshair } from "lucide-react";
import { brand, images, status, ui } from "@/data/site";
import { useLang } from "@/lib/lang";

function Typed({ phrases }: { phrases: string[] }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [del, setDel] = useState(false);
  const text = phrases[i % phrases.length];

  useEffect(() => {
    if (reduce) return;
    const done = n === text.length;
    const id = setTimeout(
      () => {
        if (!del && done) return setDel(true);
        if (del && n === 0) {
          setDel(false);
          return setI((v) => v + 1);
        }
        setN((v) => v + (del ? -1 : 1));
      },
      done && !del ? 1800 : del ? 25 : 60,
    );
    return () => clearTimeout(id);
  }, [n, del, text, reduce]);

  // Reset typing when the language (and therefore phrase list) changes
  useEffect(() => {
    setN(0);
    setDel(false);
  }, [phrases[0]]);

  return (
    <span aria-label={text}>
      <span aria-hidden>{reduce ? text : text.slice(0, n)}</span>
      {!reduce && <span className="caret ml-0.5 text-accent" aria-hidden>▌</span>}
    </span>
  );
}

export function Hero() {
  const { t } = useLang();
  const phrases = brand.heroTyped.map(t);

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-24">
      {/* background photo */}
      <Image
        src={images.arena.src}
        alt={t(images.arena.alt)}
        fill
        priority
        sizes="100vw"
        className="-z-30 scale-110 object-cover object-center blur-[1.5px]"
      />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-bg/80 via-bg/70 to-bg" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-bg via-bg/30 to-transparent" />
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="scanlines absolute inset-0 -z-10" />
      <div className="absolute -left-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-accent/25 blur-[120px]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="clip-tag inline-flex items-center gap-2.5 border border-ok/40 bg-ok/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-ok"
        >
          <span className="pulse-dot h-2 w-2 rounded-full bg-ok" aria-hidden />
          {t(ui.online)} • {status.pcsAvailable} {t(ui.pcsAvailable)}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display text-[2.6rem] font-black uppercase leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="glitch text-glow" data-text="Warrior">Warrior</span>
          <br />
          <span className="bg-gradient-to-r from-accent via-accent-2 to-accent bg-clip-text text-transparent">
            Esports UB
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-5 flex min-h-[2rem] items-center gap-2 font-mono text-base text-ink/90 sm:text-xl"
        >
          <Crosshair size={18} className="shrink-0 text-accent" aria-hidden />
          <Typed phrases={phrases} />
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-3 max-w-xl text-base text-mute sm:text-lg"
        >
          {t(brand.tagline)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="clip-btn bg-accent px-8 py-4 text-center font-display text-base font-extrabold uppercase tracking-wider text-black shadow-[0_0_30px_rgba(255,106,0,0.45)] transition hover:brightness-110"
          >
            {t(ui.book)}
          </a>
          <a
            href="#pricing"
            className="clip-btn border border-accent/60 bg-white/[0.03] px-8 py-4 text-center font-display text-base font-extrabold uppercase tracking-wider text-ink backdrop-blur transition hover:border-accent hover:bg-accent/10"
          >
            {t(ui.prices)}
          </a>
        </motion.div>
      </div>

      <a
        href="#stats"
        aria-label={t(ui.scroll)}
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-[0.3em] text-mute"
      >
        {t(ui.scroll)}
        <ChevronDown size={18} className="animate-bounce motion-reduce:animate-none" aria-hidden />
      </a>
    </section>
  );
}
