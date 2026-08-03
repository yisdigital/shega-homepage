import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "center", className }: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--gradient-glow)]" />
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-2xl text-balance text-3xl font-bold text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
}