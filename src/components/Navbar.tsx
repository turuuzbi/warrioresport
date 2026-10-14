"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { brand, nav, ui } from "@/data/site";
import { useLang } from "@/lib/lang";
import { BrandMark } from "./ui/Brand";

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const toggle = (
    <div role="group" aria-label={t(ui.langLabel)} className="flex overflow-hidden border border-line font-mono text-xs">
      {(["mn", "en"] as const).map((k) => (
        <button
          key={k}
          type="button"
          onClick={() => setLang(k)}
          aria-pressed={lang === k}
          className={`px-2.5 py-1.5 uppercase tracking-widest transition-colors ${
            lang === k ? "bg-accent text-black" : "text-mute hover:text-ink"
          }`}
        >
          {k}
        </button>
      ))}
    </div>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-md" : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6" aria-label="Primary">
        <a href="#top" aria-label={brand.name}>
          <BrandMark />
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="font-mono text-xs uppercase tracking-widest text-mute transition-colors hover:text-accent-2">
                {t(n.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {toggle}
          <a
            href={`tel:${brand.phone.tel}`}
            className="clip-btn hidden bg-accent px-4 py-2 font-display text-sm font-bold uppercase tracking-wider text-black transition hover:brightness-110 sm:flex sm:items-center sm:gap-2"
          >
            <Phone size={15} aria-hidden /> {brand.phone.display}
          </a>
          <button
            type="button"
            className="p-1.5 lg:hidden"
            aria-label={t(ui.menu)}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-bg/95 px-4 lg:hidden"
          >
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3.5 font-display text-lg uppercase tracking-wide"
                >
                  {t(n.label)}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <div className="rgb-line opacity-70" />
    </header>
  );
}
