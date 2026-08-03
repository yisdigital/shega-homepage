import { cn } from "@/lib/utils";

export function GridBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(22,101,52,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,101,52,0.06) 1px, transparent 1px)",
        backgroundSize: "52px 52px",
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
      }}
    />
  );
}

export function GlowOrb({
  className,
  gradient = "radial-gradient(circle at center, rgba(34,197,94,0.35), transparent 70%)",
}: {
  className?: string;
  gradient?: string;
}) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute rounded-full blur-3xl will-change-transform", className)} style={{ background: gradient }} />
  );
}

export function NoiseLayer({ className }: { className?: string }) {
  return <div aria-hidden className={cn("noise-overlay", className)} />;
}