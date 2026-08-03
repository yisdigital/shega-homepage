import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check, Loader2, Sparkles, Copy } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { EASE } from "@/lib/motion";
import { slugify } from "@/lib/utils";

const EXAMPLES = ["Bright Future Academy", "Wirtu School", "Greenfield Central", "Sunrise Montessori"];

function useTypewriter() {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  const example = useRef(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const target = EXAMPLES[example.current];

    if (phase === "typing") {
      if (text.length < target.length) {
        timer = setTimeout(() => setText(target.slice(0, text.length + 1)), 45);
      } else {
        timer = setTimeout(() => setPhase("pausing"), 2200);
      }
    } else if (phase === "pausing") {
      example.current = (example.current + 1) % EXAMPLES.length;
      timer = setTimeout(() => setPhase("deleting"), 350);
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), 22);
      } else {
        timer = setTimeout(() => setPhase("typing"), 350);
      }
    }
    return () => clearTimeout(timer);
  }, [text, phase]);

  return text;
}

function GenerateButton() {
  const [state, setState] = useState<"idle" | "generating" | "done">("idle");

  const run = () => {
    if (state !== "idle") return;
    setState("generating");
    setTimeout(() => setState("done"), 1600);
    setTimeout(() => setState("idle"), 3200);
  };

  return (
    <Button onClick={run} disabled={state !== "idle"} className="min-w-[150px]">
      {state === "idle" && (
        <>
          <Sparkles className="h-4 w-4" />
          Generate
        </>
      )}
      {state === "generating" && (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Generating…
        </>
      )}
      {state === "done" && (
        <>
          <Check className="h-4 w-4" />
          Portal live
        </>
      )}
    </Button>
  );
}

export function PortalGenerator() {
  const schoolText = useTypewriter();
  const slug = useMemo(() => slugify(schoolText), [schoolText]);
  const live = schoolText.length > 0;
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (!live) return;
    try {
      await navigator.clipboard.writeText(`https://${slug}.shegaschool.com`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="portal" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Portal generator"
          title="Your subdomain, generated instantly"
          description="Type a school name and watch your very own branded registration portal come to life."
        />

        <Reveal className="mx-auto mt-14 max-w-2xl">
          <div className="glass relative rounded-[1.75rem] border border-white/60 p-6 shadow-lift sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <label htmlFor="school-name" className="sr-only">
                School name
              </label>
              <div className="flex flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <span className="shrink-0 text-sm font-semibold text-primary">School name</span>
                <input
                  id="school-name"
                  className="w-full bg-transparent text-lg font-semibold text-ink outline-none"
                  placeholder="Bright Future Academy"
                  readOnly
                  value={schoolText}
                  aria-label="Demo school name"
                />
                <span className="inline-block h-6 w-[2px] animate-pulse rounded bg-primary/60" aria-hidden />
              </div>
              <GenerateButton />
            </div>

            <AnimatePresence mode="wait">
              {live && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[var(--gradient-hero)] p-4">
                    <span className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-white">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/15">
                        <Globe className="h-4 w-4" />
                      </span>
                      https://{slug}.shegaschool.com
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 16 }}
                        className="inline-flex items-center gap-1 rounded-full bg-emerald-400/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-100"
                      >
                        <Check className="h-3 w-3" />
                        {slug === "" ? "portal" : "live"}
                      </motion.span>
                    </span>
                    <button
                      onClick={copy}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white/15 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/25"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copied ? "Copied" : "Copy link"}
                    </button>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-green-600" /> Branded materials
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-green-600" /> SSL secured
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-green-600" /> Ready to share
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}