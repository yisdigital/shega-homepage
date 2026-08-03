import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  withWordmark?: boolean;
  light?: boolean;
}

export function Logo({ className, withWordmark = true, light = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[var(--gradient-glow)] shadow-[0_6px_18px_-6px_rgba(22,101,52,0.6)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor" aria-hidden>
          <path d="M6.5 19V5h2.9l4.5 7.3L18.4 5h2.9v14h-3v-6.7L14 18.7h-1.9l-4.2-6.1V19H6.5Z" />
        </svg>
        <span className="absolute -inset-1 -z-10 rounded-xl bg-[var(--gradient-glow)] opacity-40 blur-md" aria-hidden />
      </span>
      {withWordmark && (
        <span className={cn("font-display text-lg font-bold tracking-tight", light ? "text-white" : "text-ink")}>
          Shega<span className="text-primary">School</span>
        </span>
      )}
    </span>
  );
}