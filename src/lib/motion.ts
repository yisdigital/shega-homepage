import type { Variants } from "framer-motion";

/** Signature ease used across the site — smooth, premium deceleration. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: custom * 0.08 },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: EASE, delay: custom * 0.08 },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 16 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: custom * 0.08 },
  }),
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const viewportOnce = { once: true, amount: 0.2 } as const;
