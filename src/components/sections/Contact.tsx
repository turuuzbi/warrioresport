"use client";

import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "../ui/SocialIcons";
import { brand, ui } from "@/data/site";
import { useLang } from "@/lib/lang";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Contact() {
  const { t } = useLang();
  const rows = [
    { icon: MapPin, label: t({ mn: "Хаяг", en: "Address" }), value: t(brand.address), sub: t(brand.city) },
    {
      icon: Phone,
      label: t({ mn: "Утас", en: "Phone" }),
      value: brand.phone.display,
      sub: brand.phone.secondary,
      href: `tel:${brand.phone.tel}`,
    },
    { icon: Clock, label: t({ mn: "Цагийн хуваарь", en: "Hours" }), value: t(brand.hours.display), sub: t(brand.hours.detail) },
    {
      icon: InstagramIcon,
      label: "Instagram",
      value: brand.instagramHandle,
      href: brand.instagram,
      external: true,
    },
  ];

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading
        index="07"
        label={t({ mn: "ХОЛБОО БАРИХ", en: "CONTACT" })}
        title={t({ mn: "Суудлаа захиал", en: "Reserve your seat" })}
        sub={t({ mn: "Залгаад суудлаа баталгаажуул, эсвэл шууд ирээрэй.", en: "Call to lock in a seat, or just walk in." })}
      />
      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="space-y-4 lg:col-span-2">
          <ul className="space-y-3">
            {rows.map((r) => {
              const Icon = r.icon;
              const body = (
                <>
                  <span className="clip-btn grid h-11 w-11 shrink-0 place-items-center bg-accent/15 text-accent">
                    <Icon size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="mono-label block !text-mute">{r.label}</span>
                    <span className="block break-words font-display text-base font-bold">{r.value}</span>
                    {r.sub && <span className="block text-sm text-mute">{r.sub}</span>}
                  </span>
                </>
              );
              return (
                <li key={r.label}>
                  {r.href ? (
                    <a
                      href={r.href}
                      {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center gap-4 border border-line bg-surface p-4 transition hover:border-accent"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 border border-line bg-surface p-4">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
          <a
            href={`tel:${brand.phone.tel}`}
            className="clip-btn flex items-center justify-center gap-3 bg-accent py-4 font-display text-lg font-extrabold uppercase tracking-wider text-black shadow-[0_0_30px_rgba(255,106,0,0.4)] transition hover:brightness-110"
          >
            <Phone size={20} aria-hidden /> {t(ui.callNow)} · {brand.phone.display}
          </a>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="glow-border clip-card h-full min-h-[320px]">
            <div className="inner clip-card relative h-full min-h-[320px]">
              <iframe
                title={`${brand.name} — map`}
                src={brand.mapEmbed}
                className="absolute inset-0 h-full w-full border-0 [filter:invert(0.92)_hue-rotate(180deg)_saturate(0.7)_brightness(0.9)]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={brand.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="clip-btn absolute bottom-3 right-3 flex items-center gap-2 bg-black/80 px-4 py-2 font-mono text-xs uppercase tracking-wider backdrop-blur hover:text-accent"
              >
                {t(ui.openMap)} <ExternalLink size={13} aria-hidden />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
