import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Search, Phone, Mail, MapPin, Check } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { GridBackground } from "@/components/Backgrounds";
import { EASE } from "@/lib/motion";

export function PortalPreview() {
  return (
    <section id="portal-preview" className="relative overflow-hidden bg-[var(--gradient-bg)] py-24 md:py-32">
      <GridBackground className="h-[360px]" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Portal preview"
          title="What parents see when they open your link"
          description="A clean, mobile-friendly admission portal carrying your school's brand — every single time."
        />

        <Reveal className="mx-auto mt-14 max-w-5xl">
          <div className="rounded-[1.9rem] border border-slate-900/10 bg-white shadow-lift">
            {/* Browser chrome */}
            <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-3.5">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="mx-auto flex w-full max-w-md items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 text-xs text-muted">
                <Search className="h-3.5 w-3.5" />
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  wirtu.shegaschool.com
                </motion.span>
              </div>
              <div className="h-5 w-5" aria-hidden />
            </div>

            <div className="relative grid gap-0 md:grid-cols-[1.2fr_1fr]">
              {/* Left column — portal content */}
              <motion.div
                className="relative space-y-6 p-7 md:p-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.6 }}
              >
                <motion.div
                  initial={{ y: 12, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5, ease: EASE }}
                  className="flex items-center gap-3"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gradient-glow)] text-white shadow-[0_8px_20px_-8px_rgba(22,101,52,0.6)]">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-ink">Wirtu College</p>
                    <p className="text-xs text-muted">Admissions portal · 2026 intake</p>
                  </div>
                </motion.div>

                <div>
                  <motion.h3
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5, ease: EASE }}
                    className="text-2xl font-bold leading-tight text-ink"
                  >
                    Welcome to Wirtu College.
                    <br />
                    Begin your admission today.
                  </motion.h3>
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5, ease: EASE }}
                    className="mt-3 max-w-sm text-sm leading-relaxed text-muted"
                  >
                    Submit your student&rsquo;s application online in under five minutes. Our team reviews every
                    application and replies promptly.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ y: 12, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5, ease: EASE }}
                  className="flex flex-wrap items-center gap-3"
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-cta)] px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-[0_8px_20px_-8px_rgba(245,158,11,0.6)]">
                    Start application
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-medium text-primary">
                    Check application status
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-100 pt-5 text-xs text-muted"
                >
                  <span className="inline-flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-primary" /> +1 (555) 010-2210</span>
                  <span className="inline-flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-primary" /> admissions@wirtu.edu</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" /> 12 Academy Road</span>
                </motion.div>
              </motion.div>

              {/* Right column — status checker */}
              <div className="relative hidden items-center justify-center border-l border-slate-100 bg-neutral/60 p-8 md:flex">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55, duration: 0.6, ease: EASE }}
                  className="w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
                >
                  <p className="text-sm font-semibold text-ink">Application status</p>
                  <div className="mt-3 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
                    <Search className="h-3.5 w-3.5 text-muted" />
                    <span className="text-xs text-muted">Application ID</span>
                  </div>
                  <div className="mt-3 flex items-center gap-3 rounded-xl bg-emerald-50 p-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-green-600 text-white">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-primary">Application approved</p>
                      <p className="text-[11px] text-muted">Updated 2 minutes ago</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-[11px] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Portal is live and accepting applications
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}