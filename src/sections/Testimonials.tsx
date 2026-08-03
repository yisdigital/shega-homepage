import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { EASE } from "@/lib/motion";

const TESTIMONIALS = [
  {
    quote:
      "We went from piles of paper forms to a branded portal in one afternoon. Parents love it, and my team finally has one place to review everything.",
    name: "Adaeze Nwosu",
    role: "Principal · CollageName College",
    initials: "AN",
    color: "bg-emerald-500",
  },
  {
    quote:
      "Setting up our subdomain took minutes, not weeks. The branding looked like an agency built it — parents kept complimenting how professional it felt.",
    name: "Michael Adebayo",
    role: "Admissions Officer · Greenfield Central",
    initials: "MA",
    color: "bg-amber-500",
  },
  {
    quote:
      "I stopped getting calls asking 'did you receive my form?' Parents track their own application status now. It freed up so much of our staff's time.",
    name: "Sarah Kimani",
    role: "Head of Admissions · Sunrise Montessori",
    initials: "SK",
    color: "bg-sky-500",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by schools who believed done was impossible"
          description="Real admissions teams now run their entire application season on ShegaSchool."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              className="group relative flex flex-col justify-between rounded-[1.6rem] border border-slate-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-lift"
            >
              <span className="pointer-events-none absolute right-6 top-6 text-primary/10 transition-colors duration-300 group-hover:text-primary/20">
                <Quote className="h-10 w-10" fill="currentColor" />
              </span>

              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-600">{t.quote}</blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span className={`grid h-10 w-10 place-items-center rounded-full ${t.color} text-xs font-bold text-white`}>
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}