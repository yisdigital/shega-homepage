import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, UserPlus, CheckCircle2, Clock, FileText, Bell, X } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { GridBackground, GlowOrb } from "@/components/Backgrounds";
import { useCountUp } from "@/hooks/useCountUp";
import { EASE } from "@/lib/motion";

const CHART_POINTS = "0,110 28,96 56,102 84,84 112,90 140,66 168,74 196,52 224,60 252,40 280,44 308,22";

function Counter({ value, suffix = "", label, decimals = 0 }: { value: number; suffix?: string; label: string; decimals?: number }) {
  const ref = useCountUp({ end: value, decimals });
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4">
      <p className="text-2xl font-bold text-ink sm:text-3xl">
        <span ref={ref}>0</span>
        {suffix}
      </p>
      <p className="mt-1 text-xs font-medium text-muted">{label}</p>
    </div>
  );
}

const RECENT = [
  { name: "Amina Yusuf", student: "Grade 7 — Admission", time: "2m ago", color: "bg-emerald-500" },
  { name: "Daniel Okoro", student: "Grade 4 — Admission", time: "12m ago", color: "bg-amber-500" },
  { name: "Grace Okafor", student: "Grade 9 — Transfer", time: "34m ago", color: "bg-sky-500" },
  { name: "Samuel Ade", student: "Grade 1 — Admission", time: "1h ago", color: "bg-violet-500" },
];

const BAR_WIDTHS = [48, 62, 55, 72, 68, 84, 76, 92];

export function Dashboard() {
  const [chartRef, chartInView] = useInView({ triggerOnce: true, threshold: 0.4 });
  const [notifRef, notifInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="dashboard" className="relative overflow-hidden bg-[var(--gradient-bg)] py-24 md:py-32">
      <GridBackground className="h-[400px]" />
      <GlowOrb className="left-[10%] top-10 h-[320px] w-[320px] opacity-40" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Admin dashboard"
          title="Every application, one calm view"
          description="Your team reviews and approves applications from a clean dashboard — no spreadsheets, no guesswork."
        />

        <Reveal className="mx-auto mt-16 max-w-6xl">
          <div className="relative rounded-[1.9rem] border border-slate-900/10 bg-white shadow-lift">
            {/* Sidebar */}
            <div className="hidden w-full border-b border-slate-100 md:flex md:items-center md:justify-between md:px-7 md:py-4">
              <span className="flex items-center gap-2 text-sm font-bold text-ink">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-[var(--gradient-glow)] text-xs font-bold text-white">
                  W
                </span>
                Wirtu College · Admissions
              </span>
              <span className="flex items-center gap-2 text-xs font-medium text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Portal live
              </span>
            </div>

            <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[1.4fr_1fr]">
              {/* Chart panel */}
              <div className="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-ink">Applications received</p>
                    <p className="text-xs text-muted">Last 8 weeks</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-primary">
                    <TrendingUp className="h-3.5 w-3.5" />
                    +38% this week
                  </span>
                </div>

                <div ref={chartRef} className="mt-5">
                  <svg viewBox="0 0 320 130" className="h-32 w-full sm:h-40" fill="none" aria-hidden>
                    <defs>
                      <linearGradient id="area" x1="0" y1="0" x2="0" y2="130" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#22c55e" stopOpacity="0.28" />
                        <stop offset="1" stopColor="#22c55e" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[28, 58, 88, 118].map((y) => (
                      <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="#f1f5f9" strokeWidth="1" />
                    ))}
                    <motion.path
                      d={`M0,130 L${CHART_POINTS} L320,130 Z`}
                      fill="url(#area)"
                      initial={{ opacity: 0 }}
                      animate={chartInView ? { opacity: 1 } : {}}
                      transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
                    />
                    <motion.path
                      d={`M ${CHART_POINTS}`}
                      stroke="#16a34a"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={chartInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 1.6, delay: 0.3, ease: EASE }}
                    />
                    <motion.circle
                      cx="308"
                      cy="22"
                      r="5"
                      fill="#fff"
                      stroke="#16a34a"
                      strokeWidth="2.5"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={chartInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1.9, duration: 0.3 }}
                    />
                  </svg>

                  {/* Weekly bars */}
                  <div className="mt-4 flex h-14 items-end gap-2">
                    {BAR_WIDTHS.map((w, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 origin-bottom rounded-t-md bg-[var(--gradient-glow)] opacity-90"
                        initial={{ scaleY: 0 }}
                        animate={chartInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 0.7, ease: EASE, delay: 0.5 + i * 0.06 }}
                        style={{ height: `${w}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column: counters + recent */}
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-3">
                  <Counter value={326} label="Total applications" />
                  <Counter value={94} suffix="%" label="Reviewed" />
                </div>
                <div className="flex flex-col justify-between gap-3 rounded-2xl border border-slate-100 bg-white p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-ink">Application funnel</p>
                    <span className="text-xs font-semibold text-primary">Cycle 2026</span>
                  </div>
                  {[
                    { label: "New", value: 326, pct: 100, color: "bg-emerald-500" },
                    { label: "Under review", value: 204, pct: 63, color: "bg-amber-400" },
                    { label: "Approved", value: 122, pct: 37, color: "bg-[#16a34a]" },
                  ].map((row, i) => (
                    <div key={row.label}>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-600">{row.label}</span>
                        <span className="font-semibold text-ink">{row.value}</span>
                      </div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          className={`h-full rounded-full ${row.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${row.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: EASE, delay: 0.2 + i * 0.15 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent applications + notification */}
            <div className="relative border-t border-slate-100">
              <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <p className="mb-4 text-sm font-bold text-ink">Recent applications</p>
                  <div className="space-y-2.5">
                    {RECENT.map((app, i) => (
                      <motion.div
                        key={app.name}
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-5%" }}
                        transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
                        className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 transition-colors hover:border-emerald-200"
                      >
                        <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${app.color} text-xs font-bold text-white`}>
                          {app.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-ink">{app.name}</p>
                          <p className="truncate text-xs text-muted">{app.student}</p>
                        </div>
                        <span className="flex shrink-0 items-center gap-1.5 text-[11px] font-medium text-muted">
                          {app.time}
                          {i === 0 ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : (
                            <Clock className="h-4 w-4 text-slate-300" />
                          )}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div ref={notifRef} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 16, scale: 0.96 }}
                    animate={notifInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.55, ease: EASE, delay: 0.4 }}
                    className="w-full rounded-2xl border border-slate-100 bg-white p-5 shadow-soft"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm font-bold text-ink">
                        <Bell className="h-4 w-4 text-primary" />
                        Notifications
                      </span>
                      <button className="rounded-full p-1 text-slate-300 transition-colors hover:text-slate-500" aria-label="Dismiss">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-3 space-y-2.5">
                      {[
                        { icon: UserPlus, text: "New application from Amina Yusuf", time: "just now" },
                        { icon: FileText, text: "Grace Okafor uploaded documents", time: "34m" },
                        { icon: CheckCircle2, text: "Samuel Ade's application approved", time: "1h" },
                      ].map((n, i) => {
                        const Icon = n.icon;
                        return (
                          <motion.div
                            key={n.text}
                            initial={{ opacity: 0, x: 20 }}
                            animate={notifInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, ease: EASE, delay: 0.55 + i * 0.12 }}
                            className="flex items-start gap-2.5 rounded-xl bg-neutral/70 px-3 py-2.5"
                          >
                            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary-50 text-primary">
                              <Icon className="h-3.5 w-3.5" />
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-xs font-semibold text-ink">{n.text}</p>
                              <p className="text-[11px] text-muted">{n.time}</p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}