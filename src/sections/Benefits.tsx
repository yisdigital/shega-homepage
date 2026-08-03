import { motion } from "framer-motion";
import { FileCheck2, Palette, Smartphone, Zap, ClipboardList, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { GlowOrb } from "@/components/Backgrounds";
import { EASE } from "@/lib/motion";

const BENEFITS = [
  {
    icon: FileCheck2,
    title: "Paperless admissions",
    desc: "Go digital end-to-end. Collect and review every application online — no paperwork, no lost forms.",
  },
  {
    icon: Palette,
    title: "Custom branding",
    desc: "Your logo, your colors, your name on a portal that feels unmistakably your school.",
  },
  {
    icon: Smartphone,
    title: "Mobile friendly",
    desc: "Parents apply from any device. The portal is beautifully responsive from day one.",
  },
  {
    icon: Zap,
    title: "Fast setup",
    desc: "Go live in minutes. Create your account and your branded portal is generated automatically.",
  },
  {
    icon: ClipboardList,
    title: "Application tracking",
    desc: "Review, organize, and approve applications from a clean, focused admin dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "Secure cloud platform",
    desc: "Every portal is SSL secured and hosted on a reliable, privacy-first cloud infrastructure.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden py-24 md:py-32">
      <GlowOrb className="right-[-10%] top-1/3 h-[420px] w-[420px] opacity-40" />
      <GlowOrb className="bottom-0 left-[-8%] h-[360px] w-[360px] opacity-30" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Why ShegaSchool"
          title="Everything you need. Nothing you don't."
          description="Focused tools built for one job — modern, online school registration."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            const isFloating = i % 2 === 0;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: EASE, delay: (i % 3) * 0.08 }}
                className={`group relative rounded-[1.6rem] border border-slate-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-lift ${
                  isFloating ? "lg:animate-float" : ""
                }`}
                style={{ animationDelay: `${i * 0.7}s` }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-[1.6rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(120% 120% at 0% 0%, rgba(34,197,94,0.10), transparent 55%)" }}
                />
                <span
                  className="relative inline-grid h-12 w-12 place-items-center rounded-2xl bg-primary-50 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(34,197,94,0.15)" }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-5 text-lg font-bold text-ink">{b.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">{b.desc}</p>
                <span
                  className="absolute inset-0 rounded-[1.6rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                  style={{ boxShadow: "0 24px 48px -20px rgba(22,101,52,0.35)" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}