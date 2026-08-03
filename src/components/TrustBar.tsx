import { GraduationCap } from "lucide-react";

const SCHOOLS = ["Wirtu", "Greenfield", "Sunrise Montessori", "Arcadia", "Bright Future", "Kingsbridge", "Maplewood", "Crestview"];

export function TrustBar() {
  return (
    <section className="border-y border-slate-100 bg-white py-10">
      <div className="container-px">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted">
          Trusted by forward-thinking schools everywhere
        </p>
        <div className="relative mt-7 overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}>
          <div className="flex w-max animate-marquee gap-12">
            {[...SCHOOLS, ...SCHOOLS].map((school, i) => (
              <span key={i} className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-400">
                <GraduationCap className="h-5 w-5 text-primary/60" />
                {school}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}