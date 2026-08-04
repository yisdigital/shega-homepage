import { motion } from "framer-motion";
import {
  FileText,
  BookOpen,
  CalendarCheck,
  CreditCard,
  CalendarDays,
  ListChecks,
  MessagesSquare,
  BarChart3,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { GridBackground } from "@/components/Backgrounds";
import { EASE } from "@/lib/motion";

const MODULES = [
  {
    icon: FileText,
    title: "Admissions & enrollment",
    desc: "Your branded registration portal — applications, reviews, and offers, end to end.",
    highlight: "The module this site started from",
  },
  {
    icon: BookOpen,
    title: "Gradebook & report cards",
    desc: "Scores, termly reports, and transcripts generated automatically for every class.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance tracking",
    desc: "Daily registers with instant parent alerts for unexplained absences.",
  },
  {
    icon: CreditCard,
    title: "Fees & billing",
    desc: "Invoices, receipts, and payment tracking — no more fee ledger spreadsheets.",
  },
  {
    icon: CalendarDays,
    title: "Timetable & scheduling",
    desc: "Class timetables, staff allocations, and room booking that just work.",
  },
  {
    icon: ListChecks,
    title: "Exams & assessments",
    desc: "Continuous assessment, exam entries, and result computation in one place.",
  },
  {
    icon: MessagesSquare,
    title: "Parent communication",
    desc: "Announcements, results, and reminders delivered straight to families.",
  },
  {
    icon: BarChart3,
    title: "Analytics & reports",
    desc: "Live dashboards across enrollment, academics, attendance, and finance.",
  },
];

export function Modules() {
  return (
    <section id="modules" className="relative overflow-hidden py-24 md:py-32">
      <GridBackground className="h-[420px]" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="The full school ERP"
          title="One platform for your entire school"
          description="Registration was just the beginning. ShegaSchool runs admissions, academics, attendance, billing, and communication from one connected system."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: EASE, delay: (i % 4) * 0.07 }}
                className="group relative flex flex-col rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-lift"
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-[1.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(120% 120% at 0% 0%, rgba(34,197,94,0.10), transparent 55%)" }}
                />
                <span
                  className="relative inline-grid h-11 w-11 place-items-center rounded-xl bg-primary-50 text-primary transition-transform duration-300 group-hover:scale-110"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(34,197,94,0.15)" }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-4 text-[15px] font-bold text-ink">{m.title}</h3>
                <p className="relative mt-1.5 text-[13px] leading-relaxed text-muted">{m.desc}</p>
                {"highlight" in m && m.highlight && (
                  <span className="relative mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--gradient-glow)]" />
                    {m.highlight}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
