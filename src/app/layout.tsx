import type { Metadata, Viewport } from "next";
import { Tektur, Exo_2, JetBrains_Mono } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import { brand } from "@/data/site";
import "./globals.css";

// Mongolian needs Ө/Ү, which live in the cyrillic-ext subset.
const tektur = Tektur({ subsets: ["cyrillic", "cyrillic-ext", "latin"], variable: "--font-tektur", display: "swap" });
const exo = Exo_2({ subsets: ["cyrillic", "cyrillic-ext", "latin"], variable: "--font-exo", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["cyrillic", "cyrillic-ext", "latin"], variable: "--font-jb", display: "swap" });

export const metadata: Metadata = {
  title: `${brand.name} — Тоглоомын төв, Улаанбаатар`,
  description:
    "Warrior Esports UB — Улаанбаатар дахь PC тоглоомын төв. VIP өрөө, Pro бүс, тэмцээн, 240Hz тоног төхөөрөмж. Gaming hub in Ulaanbaatar.",
  icons: { icon: "/images/logo.png" },
  openGraph: {
    title: brand.name,
    description: "Esports center & PC gaming hub in Ulaanbaatar.",
    images: ["/images/logo.png"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn" className={`${tektur.variable} ${exo.variable} ${mono.variable}`}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
