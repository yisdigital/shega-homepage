import { motion } from "framer-motion";
import { UserPlus, Globe, Database, Users, LayoutGrid, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { GridBackground } from "@/components/Backgrounds";
import { EASE } from "@/lib/motion";

const STEPS = [
  {
    icon: UserPlus,
    title: "School registers",
    desc: "Create your account in under two minutes — no code, no technical setup.",
  },
  {
    icon: Globe,
    title: "Your system is created",
    desc: "We auto-generate a dedicated subdomain and workspace for your school instantly.",
  },
  {
    icon: Database,
    title: "Add your school's data",
    desc: "Import students, staff, classes, and fees — or start fresh and add as you go.",
  },
  {
    icon: Users,
    title: "Invite your team",
    desc: "Admins, teachers, and parents get secure logins tailored to their role.",
  },
  {
    icon: LayoutGrid,
    title: "Turn on the modules",
    desc: "Admissions, gradebook, attendance, billing — switch on whichever you need.",
  },
  {
    icon: Rocket,
    title: "Run your school",
    desc: "Every department works from one connected dashboard, with data that flows together.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[var(--gradient-bg)] py-24 md:py-32">
      <GridBackground className="opacity-60 h-[400px] top-0" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="How it works"
          title="From signup to a running school — in a few steps"
          description="Start with admissions or switch on the full suite. Either way, your whole school lives in one system from day one."
        />

        <div className="relative mt-16">
          <motion.div
            className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-primary/30 via-[#16a34a]/20 to-transparent md:left-1/2 md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.6, ease: EASE }}
            style={{ transformOrigin: "top" }}
          />

          <div className="grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-14 lg:gap-x-28">
            {STEPS.map((step, i) => {
              const left = i % 2 === 0;
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: left ? -36 : 36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="relative flex flex-col gap-3 pl-6 md:pl-0"
                >
<div className="flex items-center gap-4">
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--gradient-glow)] text-white shadow-[0_10px_24px_-10px_rgba(22,101,52,0.7)] ${
                        left ? "md:order-last" : ""
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className={left ? "md:text-right" : ""}>
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-1 text-lg font-bold text-ink">{step.title}</h3>
                      <p className="max-w-sm text-sm leading-relaxed text-muted">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}