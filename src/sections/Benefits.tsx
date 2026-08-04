import { motion } from "framer-motion";
import { LayoutGrid, Palette, Users, Zap, ShieldCheck, BarChart3 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { GlowOrb } from "@/components/Backgrounds";
import { EASE } from "@/lib/motion";

const BENEFITS = [
  {
    icon: LayoutGrid,
    title: "All-in-one platform",
    desc: "Admissions, academics, billing, and communication in one connected system — no more juggling separate apps.",
  },
  {
    icon: Palette,
    title: "Custom branding",
    desc: "Your logo, your colors, your name across the portal and every module. It feels unmistakably your school.",
  },
  {
    icon: Users,
    title: "Built for every role",
    desc: "Admins, teachers, parents, and students each get a view tailored to what they need — nothing more, nothing less.",
  },
  {
    icon: Zap,
    title: "Fast setup",
    desc: "Go live in minutes. Create your account and your branded system is generated automatically.",
  },
  {
    icon: ShieldCheck,
    title: "Secure cloud platform",
    desc: "Every module is SSL secured and hosted on a reliable, privacy-first cloud infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Insightful analytics",
    desc: "Live reports across enrollment, grades, attendance, and finance — so you can lead with data.",
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
          title="Everything your school needs. Nothing you don't."
          description="One connected ERP that runs your school end to end — modern admissions included."
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