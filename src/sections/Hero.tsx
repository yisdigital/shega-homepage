import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Sparkles, Check, Building2, Globe, FileText, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GridBackground, GlowOrb } from "@/components/Backgrounds";
import { EASE, fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

const WORKFLOW = [
  { icon: Building2, label: "School registers", desc: "admin account created" },
  { icon: Globe, label: "System generated", desc: "subdomain live" },
  { icon: Globe, label: "schoolName.shegaschool.com", desc: "branded & secure" },
  { icon: UserPlus, label: "Admissions module", desc: "parents apply online" },
  { icon: FileText, label: "Applications reviewed", desc: "from one dashboard" },
  { icon: Check, label: "School runs on ShegaSchool", desc: "grades, fees, attendance" },
];

function Workflow() {
  const [active, setActive] = useState(-1);

  useEffect(() => {
    let i = -1;
    let raf = 0;
    const tick = () => {
      i += 1;
      if (i > WORKFLOW.length - 1) {
        setTimeout(() => {
          i = -2;
          raf = requestAnimationFrame(tick);
        }, 1400);
        return;
      }
      setActive(i);
      raf = requestAnimationFrame(tick);
    };
    const start = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, 600);
    return () => {
      clearTimeout(start);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative max-w-md w-full">
      <div
        className="absolute inset-y-4 left-[26px] w-px -translate-x-1/2 rounded-full bg-slate-200"
        aria-hidden
      />

      <div className="relative flex flex-col gap-3">
        {WORKFLOW.map((step, idx) => {
          const done = active >= idx;
          const isLive = idx === 2;
          const isActive = active === idx;
          const Icon = step.icon;
          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: Math.min(idx * 0.06, 0.3) }}
              className="relative flex items-center gap-3"
            >
              <span
                className={cn(
                  "relative z-10 grid h-[52px] w-[52px] shrink-0 place-items-center rounded-2xl border transition-all duration-500",
                  done
                    ? "border-transparent bg-[var(--gradient-glow)] text-white shadow-[0_10px_24px_-8px_rgba(22,101,52,0.6)]"
                    : "border-slate-200 bg-white text-slate-400"
                )}
              >
                <Icon className="h-5 w-5" />
                {done && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-primary-500"
                  >
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </motion.span>
                )}
              </span>

              <AnimatePresence mode="popLayout">
                <motion.div
                  key={done ? "done" : "idle"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className={cn(
                    "flex-1 rounded-2xl border px-4 py-2.5",
                    isLive
                      ? "border-emerald-200 bg-emerald-50/80"
                      : done
                      ? isActive
                        ? "border-primary/25 bg-white shadow-soft"
                        : "border-slate-100 bg-white"
                      : "border-slate-100 bg-white"
                  )}
                >
                  <p className="text-sm font-semibold text-ink">{step.label}</p>
                  <p className="text-xs text-muted">{step.desc}</p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* travelling beam grows with progress */}
      <motion.div
        className="absolute top-4 bottom-4 left-[26px] w-1 -translate-x-1/2 origin-top rounded-full bg-[var(--gradient-glow)] shadow-[0_0_14px_rgba(34,197,94,0.7)]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: Math.max(((active + 1) / WORKFLOW.length), 0.02) }}
        transition={{ duration: 0.5, ease: EASE }}
        aria-hidden
      />
      <motion.div
        className="absolute left-[26px] h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_10px_rgba(34,197,94,0.9)]"
        animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: EASE }}
        className="mt-4 flex items-center justify-between rounded-2xl border border-emerald-100 bg-white px-4 py-3 shadow-soft"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-ink">
          <Sparkles className="h-4 w-4 text-primary" />
          System ready
        </span>
        <span className="text-xs font-medium text-muted">
          <span className="font-semibold text-green-600">224</span> applications this cycle
        </span>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <GridBackground className="h-[620px]" />
      <GlowOrb className="-top-24 right-[-10%] h-[480px] w-[480px] opacity-60" />
      <GlowOrb className="top-[40%] left-[-12%] h-[420px] w-[420px] opacity-40" />

      <div className="container-px relative grid gap-14 pb-20 pt-32 md:pb-28 md:pt-40 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3.5 py-1.5 text-[13px] font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              The complete school ERP
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-6 max-w-xl text-balance text-[2.6rem] font-bold leading-[1.05] text-ink sm:text-6xl md:text-[4.15rem]"
          >
            Run your entire school on{" "}
            <span className="relative inline-block bg-gradient-to-r from-primary-500 via-[#16a34a] to-[#0f9d58] bg-clip-text text-transparent">
              one platform
            </span>
            .
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-muted">
            ShegaSchool is a full school ERP — admissions, gradebook, attendance, fees, and parent communication in one branded, secure system.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} className="mt-9 flex flex-wrap items-center gap-3.5">
            <Button size="lg">
              Register your school
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              <Play className="h-4 w-4 fill-current" />
              Watch demo
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4} className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {["JD", "AM", "PK", "SR"].map((initials, i) => (
                <span
                  key={initials}
                  className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-[var(--gradient-glow)] text-[10px] font-bold text-white"
                  style={{ zIndex: 4 - i }}
                >
                  {initials}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted">
              <span className="font-semibold text-ink">1,200+ schools</span> run their school on ShegaSchool
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
          className="relative"
        >
          <div className="glass relative rounded-[2rem] border border-white/60 p-5 shadow-lift">
            <div className="mb-4 flex items-center justify-between px-1">
              <span className="text-sm font-semibold text-ink">Your school&rsquo;s journey</span>
              <span className="text-xs font-medium text-muted">admissions module</span>
            </div>
            <Workflow />
          </div>
          <GlowOrb className="bottom-[-40px] right-[-30px] h-[220px] w-[220px] opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}