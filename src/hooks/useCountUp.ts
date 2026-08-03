import { useEffect, useRef } from "react";
import { animate, useInView, type AnimationOptions } from "framer-motion";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  ease?: AnimationOptions["ease"];
  delay?: number;
  decimals?: number;
}

export function useCountUp({ end, duration = 1.6, ease = "easeOut", delay = 0.1, decimals = 0 }: UseCountUpOptions) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.6 });

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;

    const controls = animate(0, end, {
      duration,
      ease,
      delay,
      onUpdate: (value) => {
        node.textContent = value.toFixed(decimals);
      },
    });

    return () => controls.stop();
  }, [inView, end, duration, ease, delay, decimals]);

  return ref;
}