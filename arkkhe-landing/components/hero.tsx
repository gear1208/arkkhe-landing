"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { Chevron, ScrollCue } from "@/components/icons";
import { VECTORS } from "@/lib/content";
import { EASE, useEntrance, useParallax } from "@/lib/motion";

const CHIP_OPACITY = [1, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.1];
const CHEVRON_OPACITY = [0.1, 0.2, 0.4, 0.2, 0.1];

function DisplayLines({ lines, className = "", itemMask }: { lines: readonly { text: string; align: string; slash?: boolean }[]; className?: string; itemMask: any }) {
  return <div className={className}>{lines.map((line, i) => <div key={`${line.text}-${i}`} className={`overflow-hidden ${line.align === "right" ? "text-right" : "text-left"}`}><motion.p variants={itemMask} className="display">{line.text}{line.slash && <span className="display-slash">//</span>}</motion.p></div>)}</div>;
}

const HERO_LINES = [
  { text: "Where", align: "right" },
  { text: "Form", align: "right" },
  { text: "Meets", align: "left", slash: true },
  { text: "Function", align: "left" }
] as const;

function ChipSelector({ scope, selected, setSelected, reduce }: { scope: string; selected: number; setSelected: (i: number) => void; reduce: boolean }) {
  const chosen = VECTORS[selected];
  const copySwap = {
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: reduce ? { opacity: 0 } : { opacity: 0, y: -12 },
    transition: { duration: reduce ? 0.15 : 0.45, ease: EASE }
  };
  return (
    <>
      <div role="group" aria-label="System vectors" className="flex w-full flex-wrap">
        {VECTORS.map((vector, index) => <button key={vector.id} type="button" onClick={() => setSelected(index)} aria-pressed={index === selected} aria-controls={`vector-copy-${scope}`} style={{ "--chip-o": CHIP_OPACITY[index] } as React.CSSProperties} className="chip text-[max(11px,calc(var(--u)*14))]">{vector.label}</button>)}
      </div>
      <div className="mt-6 min-h-[5.8em] leading-[1.4] text-[max(14px,calc(var(--u)*18))]" id={`vector-copy-${scope}`} aria-live="polite">
        <AnimatePresence mode="wait" initial={false}><motion.span key={chosen.id} {...copySwap} className="block">{chosen.copy}</motion.span></AnimatePresence>
      </div>
    </>
  );
}

function ChevronSweep({ selected, reduce }: { selected: number; reduce: boolean }) {
  return <div aria-hidden="true" className="flex items-center gap-[max(3px,calc(var(--u)*5.31))]">{CHEVRON_OPACITY.map((base, i) => <motion.span key={`${selected}-${i}`} initial={{ opacity: reduce ? base : base }} animate={{ opacity: reduce ? base : [base, 1, base] }} transition={{ duration: reduce ? 0 : 0.9, ease: EASE, delay: reduce ? 0 : i * 0.07 }} className="block w-[max(7px,calc(var(--u)*13.344))] text-bone"><Chevron className="h-auto w-full" /></motion.span>)}</div>;
}

export function Hero() {
  const stageRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState(4);
  const { reduce, container, item, itemFade, itemMask, itemScale } = useEntrance();
  const cueY = useParallax(stageRef, -70);
  const chipsY = useParallax(stageRef, -40);
  const counterY = useParallax(stageRef, -110);
  const selectedVector = VECTORS[selected];

  return (
    <section id="home" ref={stageRef} className="relative">
      <motion.div initial="hidden" animate="show" variants={container} className="stage relative hidden h-[max(100svh,calc(var(--u)*800))] overflow-hidden lg:block">
        <DisplayLines lines={HERO_LINES} itemMask={itemMask} className="absolute left-[3.022%] top-[28.716%] z-10 w-[36.406%] text-[calc(var(--u)*120)]" />
        <motion.p variants={item} className="absolute left-[20.177%] top-[74.907%] z-10 w-[15.083%] text-right font-light leading-[1.4] text-[max(14px,calc(var(--u)*18))]">Where precision shapes every motion. Design defines intent. Form and function exist as one unified system.</motion.p>
        <motion.a variants={item} href="#process" onClick={(e) => { e.preventDefault(); document.querySelector("#process")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" }); }} className="pill-btn absolute left-[2.223%] top-[74.769%] z-30 bg-bone text-[max(15px,calc(var(--u)*20))] text-ink hover:bg-white">Our process</motion.a>
        <motion.div variants={item} style={{ y: chipsY }} className="absolute left-[68.854%] top-[41.944%] z-30 w-[20.5%]"><ChipSelector scope="lg" selected={selected} setSelected={setSelected} reduce={reduce} /></motion.div>
        <motion.button type="button" aria-label="Scroll down to the system" onClick={() => document.querySelector("#system")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" })} variants={itemScale} style={{ y: cueY }} className="absolute left-[56.302%] top-[82.407%] z-30 block w-[5.068%] transition-opacity duration-500 hover:opacity-60"><ScrollCue className="w-full" spin={!reduce} /></motion.button>
        <motion.div variants={itemFade} style={{ y: counterY }} className="absolute right-[6.5625%] top-[74.988%] z-30"><div className="techno -translate-y-[0.25em] text-right text-[calc(var(--u)*80)] opacity-20"><AnimatePresence mode="wait" initial={false}><motion.span key={selectedVector.index} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: reduce ? 0.15 : 0.45, ease: EASE }}>{selectedVector.index}</motion.span></AnimatePresence></div></motion.div>
        <div className="absolute left-[70.99%] top-[76.297%] z-30"><ChevronSweep selected={selected} reduce={reduce} /></div>
      </motion.div>

      <motion.div initial="hidden" animate="show" variants={container} className="relative overflow-hidden px-[clamp(20px,5vw,48px)] pb-16 pt-[120px] lg:hidden">
        <DisplayLines lines={HERO_LINES} itemMask={itemMask} className="relative z-10 text-[clamp(46px,13vw,104px)]" />
        <motion.p variants={item} className="relative z-10 mt-10 max-w-[34ch] font-light leading-[1.5] text-[15px]">Where precision shapes every motion. Design defines intent. Form and function exist as one unified system.</motion.p>
        <motion.a variants={item} href="#process" onClick={(e) => { e.preventDefault(); document.querySelector("#process")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" }); }} className="pill-btn relative z-10 mt-8 bg-bone text-[15px] text-ink hover:bg-white">Our process</motion.a>
        <motion.div variants={item} className="relative z-10 mt-14"><ChipSelector scope="sm" selected={selected} setSelected={setSelected} reduce={reduce} /></motion.div>
        <motion.div variants={item} className="relative z-10 mt-10 flex items-center justify-between gap-6"><ChevronSweep selected={selected} reduce={reduce} /><span className="techno text-[46px] leading-none opacity-20">{selectedVector.index}</span></motion.div>
      </motion.div>
    </section>
  );
}
