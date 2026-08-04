import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { TrustBar } from "@/components/TrustBar";
import { HowItWorks } from "@/sections/HowItWorks";
import { Modules } from "@/sections/Modules";
import { PortalGenerator } from "@/sections/PortalGenerator";
import { PortalPreview } from "@/sections/PortalPreview";
import { Benefits } from "@/sections/Benefits";
import { Dashboard } from "@/sections/Dashboard";
import { Testimonials } from "@/sections/Testimonials";
import { FinalCTA } from "@/sections/FinalCTA";

export default function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -72 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Modules />
        <PortalGenerator />
        <PortalPreview />
        <Benefits />
        <Dashboard />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}