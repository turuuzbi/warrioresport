"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { MotionConfig } from "framer-motion";
import type { L } from "@/data/site";

export type Lang = "mn" | "en";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (s: L) => string };

const LangContext = createContext<Ctx>({ lang: "mn", setLang: () => {}, t: (s) => s.mn });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("mn");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "mn") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "mn" ? "mn" : "en";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  }, []);

  const value = useMemo<Ctx>(() => ({ lang, setLang, t: (s) => s[lang] }), [lang, setLang]);

  return (
    <LangContext.Provider value={value}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
