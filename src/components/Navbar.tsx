import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

const LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Portal", href: "#portal" },
  { label: "Benefits", href: "#benefits" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const [active, setActive] = useState("");

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-slate-900/5 shadow-[0_4px_24px_-12px_rgba(15,23,42,0.12)]" : "bg-transparent"
      )}
    >
      <nav className="container-px mx-auto flex h-16 items-center justify-between md:h-[72px]">
        <a href="#top" aria-label="ShegaSchool home" className="relative z-50">
          <Logo />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className={cn(
                    "absolute inset-x-3.5 bottom-1.5 h-px origin-left bg-[var(--gradient-glow)] transition-transform duration-300",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" onClick={() => (window.location.href = "#final-cta")}>
            Sign in
          </Button>
          <Button size="sm" onClick={() => (window.location.href = "#final-cta")}>
            Register your school
          </Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-ink transition-colors hover:bg-slate-900/5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="glass overflow-hidden border-b border-slate-900/5 lg:hidden"
          >
            <div className="container-px flex flex-col gap-1 py-4">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-700 transition-colors hover:bg-slate-900/5 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => {
                    setOpen(false);
                    window.location.href = "#final-cta";
                  }}
                >
                  Sign in
                </Button>
                <Button
                  className="w-full"
                  onClick={() => {
                    setOpen(false);
                    window.location.href = "#final-cta";
                  }}
                >
                  Register your school
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}