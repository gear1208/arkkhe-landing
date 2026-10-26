"use client";

import { motion } from "framer-motion";
import { useId } from "react";

export function MenuGlyph({ open }: { open: boolean }) {
  const transition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const };
  return (
    <svg viewBox="0 0 28.664 16.006" fill="none" stroke="currentColor" strokeWidth={2} className="h-auto w-full overflow-visible" aria-hidden="true">
      <motion.line initial={false} x1={0} x2={23.859} y1={1} y2={1} animate={open ? { x1: 2.4, x2: 26.26, y1: 8.003, y2: 8.003, rotate: 45 } : { x1: 0, x2: 23.859, y1: 1, y2: 1, rotate: 0 }} style={{ transformOrigin: "14.332px 8.003px" }} transition={transition} />
      <motion.line initial={false} x1={10.246} x2={28.664} y1={8.003} y2={8.003} animate={{ opacity: open ? 0 : 1, x: open ? 6 : 0 }} transition={transition} />
      <motion.line initial={false} x1={0} x2={23.859} y1={15.006} y2={15.006} animate={open ? { x1: 2.4, x2: 26.26, y1: 8.003, y2: 8.003, rotate: -45 } : { x1: 0, x2: 23.859, y1: 15.006, y2: 15.006, rotate: 0 }} style={{ transformOrigin: "14.332px 8.003px" }} transition={transition} />
    </svg>
  );
}

export function Chevron({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 13.344 27.713" fill="none" stroke="currentColor" strokeWidth={5.395} className={className} aria-hidden="true"><polyline points="2.7,2.7 10.6,13.86 2.7,25.01" /></svg>;
}

export function ScrollCue({ className = "", spin = true }: { className?: string; spin?: boolean }) {
  const ringId = useId();
  return (
    <svg viewBox="0 0 97.315 97.319" className={className} fill="none" aria-hidden="true">
      <defs><path id={ringId} d="M 8.657 48.66 a 40 40 0 1 1 80 0 a 40 40 0 1 1 -80 0" /></defs>
      <motion.g style={{ transformOrigin: "48.657px 48.66px" }} animate={spin ? { rotate: 360 } : { rotate: 0 }} transition={spin ? { duration: 26, ease: "linear", repeat: Infinity } : { duration: 0 }}>
        <text fill="var(--color-bone)" fillOpacity={0.55} fontSize={8.2} letterSpacing={1.5} style={{ fontFamily: "var(--font-sans)" }}><textPath href={`#${ringId}`}>{"SCROLL DOWN · SCROLL DOWN · "}</textPath></text>
      </motion.g>
      <polyline points="43.86,49.56 49.305,53.46 54.75,49.56" stroke="var(--color-bone)" strokeWidth={2.626} />
    </svg>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" /></svg>;
}
