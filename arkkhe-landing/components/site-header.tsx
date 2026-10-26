"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, MenuGlyph } from "@/components/icons";
import { NAV } from "@/lib/content";
import { EASE, useActiveSection, useEntrance } from "@/lib/motion";
import { ASSETS } from "@/lib/assets";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  const ids = ["home", "system", "modules", "contact"];
  const active = useActiveSection(ids);

  const go = useCallback((href: string) => {
    setOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  }, [reduce]);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { close(); return; }
      if (event.key === "Tab") {
        const nodes = panelRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        if (!nodes?.length) return;
        const first = nodes[0], last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    const gutter = window.innerWidth - document.documentElement.clientWidth;
    const oldOverflow = document.body.style.overflow;
    const oldPadding = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (gutter > 0) document.body.style.paddingRight = `${gutter}px`;
    panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = oldOverflow;
      document.body.style.paddingRight = oldPadding;
    };
  }, [open, close]);

  const menuEntrance = useEntrance(0.06, 0.12);
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="relative mx-auto h-[calc(var(--u)*134)] max-w-[2100px]">
          <a href="#home" aria-label="Arkkhe — back to top" className="absolute left-[1.755%] top-[calc(var(--u)*33.382)] block aspect-square w-[calc(var(--u)*67.03)] min-w-[34px] mix-blend-screen">
            <Image src={ASSETS.logo} alt="" width={256} height={256} priority className="h-full w-full object-contain" />
          </a>
          <nav aria-label="Primary" className="absolute left-1/2 top-[calc(var(--u)*60)] hidden w-[74.271%] -translate-x-1/2 items-center justify-between lg:flex">
            {NAV.map((item) => {
              const isActive = active === item.href.slice(1);
              return <a key={item.href} href={item.href} aria-current={isActive ? "page" : undefined} onClick={(e) => { e.preventDefault(); go(item.href); }} className={`text-[max(10px,calc(var(--u)*12))] font-bold uppercase leading-[1.2] tracking-[0.4em] transition-opacity duration-500 hover:opacity-100 ${isActive ? "opacity-100" : "opacity-40"}`}>{isActive ? `[ ${item.label} ]` : item.label}</a>;
            })}
          </nav>
          <button ref={toggleRef} type="button" aria-expanded={open} aria-controls="site-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)} className="absolute right-[calc(2.867%_-_7.7px)] top-[calc(var(--u)*66.9_-_22px)] grid h-11 w-11 place-items-center text-bone transition-opacity duration-300 hover:opacity-60">
            <span className="block w-[max(24px,calc(var(--u)*28.664))]"><MenuGlyph open={open} /></span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div ref={panelRef} id="site-menu" role="dialog" aria-modal="true" aria-label="Site menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduce ? 0.15 : 0.5, ease: EASE }} className="fixed inset-0 z-40 bg-ink">
            <motion.div initial="hidden" animate="show" variants={menuEntrance.container} className="flex h-full flex-col justify-between px-[clamp(20px,3vw,58px)] pb-[clamp(28px,4vw,64px)] pt-[calc(var(--u)*160)]">
              <ol className="m-0 list-none p-0">
                {NAV.map((item, i) => (
                  <motion.li key={item.href} variants={menuEntrance.itemMask} className="overflow-hidden border-b border-hairline">
                    <a href={item.href} onClick={(e) => { e.preventDefault(); go(item.href); }} className="group flex items-baseline gap-[0.5em] py-[0.28em] display text-[clamp(44px,calc(var(--u)*104),128px)] opacity-60 transition-opacity duration-[400ms] hover:opacity-100 focus-visible:opacity-100">
                      <span className="techno text-[0.2em] opacity-40">0{i + 1}</span>{item.label}<ArrowRight className="ml-auto w-[0.28em] -translate-x-3 opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:opacity-60" />
                    </a>
                  </motion.li>
                ))}
              </ol>
              <div className="flex flex-wrap justify-between gap-5 text-[13px] uppercase tracking-[0.32em]">
                <a href="mailto:hello@arkkhe.systems" className="opacity-60 transition-opacity hover:opacity-100">hello@arkkhe.systems</a>
                <span className="opacity-30">Zürich — Werkhalle 4</span>
                <span className="opacity-30">EXO / 2026</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
