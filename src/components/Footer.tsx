"use client";

import { brand, ui } from "@/data/site";
import { useLang } from "@/lib/lang";
import { BrandMark } from "./ui/Brand";
import { InstagramIcon, YoutubeIcon } from "./ui/SocialIcons";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative border-t border-line bg-surface pb-24 pt-10 md:pb-10">
      <div className="rgb-line absolute inset-x-0 top-0" />
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <BrandMark size={44} />
          <p className="mt-3 max-w-sm text-sm text-mute">{t(brand.tagline)}</p>
        </div>
        <div className="flex items-center gap-3" aria-label={t(ui.followUs)}>
          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="clip-btn grid h-11 w-11 place-items-center border border-line transition hover:border-accent hover:text-accent"
          >
            <InstagramIcon />
          </a>
          <a
            href={brand.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="clip-btn grid h-11 w-11 place-items-center border border-line transition hover:border-accent hover:text-accent"
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-line px-4 pt-5 font-mono text-[11px] text-mute sm:px-6 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} {brand.name}. {t(ui.rights)}</p>
        <p>{t(ui.demoNote)}</p>
        <p className="text-accent-2">{brand.demoCredit}</p>
      </div>
    </footer>
  );
}
