import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCall } from "@/components/FloatingCall";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Zones } from "@/components/sections/Zones";
import { Specs } from "@/components/sections/Specs";
import { Pricing } from "@/components/sections/Pricing";
import { Games } from "@/components/sections/Games";
import { Gallery } from "@/components/sections/Gallery";
import { Events } from "@/components/sections/Events";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[70] focus:bg-accent focus:px-3 focus:py-2 focus:text-black">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <Zones />
        <Specs />
        <Pricing />
        <Games />
        <Gallery />
        <Events />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
