import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Play, Sparkles, GraduationCap, Globe, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function FinalCTA() {
  const root = useRef<HTMLElement | null>(null);
  const gradientRef = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || !root.current) return;

    const ctx = gsap.context(() => {
      gsap.to(gradientRef.current, {
        backgroundPosition: "200% 50%",
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.utils.toArray<HTMLElement>(".cta-shape").forEach((el, i) => {
        gsap.to(el, {
          y: () => (i % 2 === 0 ? -22 : 22),
          x: () => (i % 3 === 0 ? 14 : -14),
          rotation: () => (i % 2 === 0 ? 8 : -8),
          duration: 6 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={root}
      id="final-cta"
      className="relative overflow-hidden py-24 md:py-36"
    >
      <div
        ref={gradientRef}
        className="absolute inset-0 bg-[linear-gradient(115deg,#14532d,#166534,#15803d,#14532d,#166534)] bg-[length:200%_200%]"
      />
      <div className="absolute inset-0 opacity-[0.06] mix-blend-soft-light" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)", backgroundSize: "34px 34px" }} />

      {/* Floating abstract shapes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="cta-shape absolute left-[8%] top-[20%] h-24 w-24 rounded-[2rem] border border-white/25 bg-white/10 backdrop-blur-sm" />
        <div className="cta-shape absolute right-[10%] top-[16%] h-16 w-16 rounded-full bg-white/10 blur-[1px] backdrop-blur-sm" />
        <div className="cta-shape absolute bottom-[18%] left-[16%] h-14 w-14 rounded-2xl bg-accent/70 shadow-[0_0_40px_rgba(251,191,36,0.4)]" />
        <div className="cta-shape absolute bottom-[24%] right-[14%] h-20 w-20 rounded-full bg-white/15 backdrop-blur-sm" />
        <div className="cta-shape absolute right-[28%] top-[58%] h-10 w-10 rounded-xl border border-white/20 bg-white/10" />
        <Sparkles className="cta-shape absolute left-[30%] top-[12%] h-8 w-8 text-white/40" />
      </div>

      <div className="container-px relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[13px] font-medium text-white backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            No credit card required
          </span>

          <h2 className="mt-7 text-balance text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl">
            Your school&rsquo;s portal is <span className="text-accent">minutes away.</span>
          </h2>

          <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-emerald-50/85">
            Join thousands of schools running modern, paperless admissions. Create your account and get your branded
            portal today.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <Button size="lg" variant="accent">
              Register your school
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" className="bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border border-white/25">
              <Play className="h-4 w-4 fill-current" />
              Watch demo
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-emerald-50/80">
            <span className="inline-flex items-center gap-2">
              <Globe className="h-4 w-4 text-accent" /> Free subdomain included
            </span>
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-accent" /> Built for schools
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" /> SSL secure by default
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}