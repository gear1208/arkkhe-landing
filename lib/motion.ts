"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion, useScroll, useTransform, type Variants, type MotionValue } from "framer-motion";
import type { RefObject } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;
export const IN_VIEW = { once: true, margin: "0px 0px -12% 0px" } as const;

export function useEntrance(stagger = 0.08, delay = 0.15) {
  const reduce = useReducedMotion() ?? false;
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: reduce ? 0 : delay } }
  };
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0.25 : 0.9, ease: EASE } }
  };
  const itemFade: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: reduce ? 0.25 : 1.1, ease: EASE } }
  };
  const itemMask: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: "115%" },
    show: { opacity: 1, y: "0%", transition: { duration: reduce ? 0.25 : 1.1, ease: EASE } }
  };
  const itemScale: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, scale: 1.08 },
    show: { opacity: 1, scale: 1, transition: { duration: reduce ? 0.25 : 1.15, ease: EASE } }
  };
  const itemLine: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, scaleX: 0 },
    show: { opacity: 1, scaleX: 1, transition: { duration: reduce ? 0.25 : 0.8, ease: EASE } }
  };
  return { reduce, container, item, itemFade, itemMask, itemScale, itemLine };
}

export function useParallax<T extends HTMLElement>(
  ref: RefObject<T | null>,
  distance: number,
  offset: ["start start", "end start"] | ["start end", "end start"] = ["start start", "end start"]
): MotionValue<number> {
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset });
  return useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : distance]);
}

export function useCountUp(target: number, active: boolean, duration = 1600) {
  const reduce = useReducedMotion() ?? false;
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (reduce) { setValue(target); return; }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setValue(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, reduce, target]);
  return value;
}

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]?.target instanceof HTMLElement) setActive(visible[0].target.id);
    }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);
  return active;
}
