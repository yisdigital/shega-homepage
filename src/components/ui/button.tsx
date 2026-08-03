import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

type ButtonVariant = "primary" | "accent" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const base =
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold whitespace-nowrap transition-all duration-300 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[15px]",
  lg: "h-13 px-7 text-base",
};

const variantsCls: Record<ButtonVariant, string> = {
  primary:
    "text-white bg-[var(--gradient-glow)] shadow-[0_8px_24px_-8px_rgba(22,101,52,0.5)] hover:shadow-[0_12px_36px_-8px_rgba(22,101,52,0.6)] hover:-translate-y-0.5",
  accent:
    "text-slate-900 bg-[var(--gradient-cta)] shadow-[0_8px_24px_-8px_rgba(245,158,11,0.5)] hover:shadow-[0_12px_36px_-8px_rgba(245,158,11,0.6)] hover:-translate-y-0.5",
  outline:
    "text-primary border border-primary/20 bg-white/70 hover:border-primary/40 hover:bg-white hover:-translate-y-0.5",
  ghost: "text-ink hover:bg-slate-900/5",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, onClick, children, ...props }, ref) => {
    const [ripples, setRipples] = useState<Ripple[]>([]);
    const idRef = useRef(0);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const id = ++idRef.current;
      setRipples((r) => [...r, { id, x: e.clientX - rect.left - size / 2, y: e.clientY - rect.top - size / 2, size }]);
      setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700);
      onClick?.(e);
    };

    return (
      <button ref={ref} className={cn(base, sizes[size], variantsCls[variant], className)} onClick={handleClick} {...props}>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            className="pointer-events-none absolute rounded-full bg-white/40"
            initial={{ opacity: 0.5, scale: 0, x: r.x, y: r.y, width: r.size, height: r.size }}
            animate={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: EASE }}
          />
        ))}
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";