"use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "@/components/icons";
import { ASSETS } from "@/lib/assets";
import { CLOSING, METRICS, MODULES, PROCESS, SYSTEM_BLOCKS } from "@/lib/content";
import { EASE, IN_VIEW, useCountUp, useEntrance, useParallax } from "@/lib/motion";

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-[max(10px,calc(var(--u)*12))] font-bold uppercase leading-[1.2] tracking-[0.4em] opacity-40">{children}</p>;
}

export function SystemSection() {
  const ref = useRef<HTMLElement>(null);
  const { item, itemFade, itemScale } = useEntrance(0.1);
  const plateA = useParallax(ref, -70, ["start end", "end start"]);
  const plateB = useParallax(ref, -120, ["start end", "end start"]);
  const indexA = useParallax(ref, 60, ["start end", "end start"]);
  return (
    <section id="system" ref={ref} className="relative px-[clamp(20px,3vw,58px)] py-[clamp(96px,16vh,220px)]">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.4 }} viewport={IN_VIEW} transition={{ duration: 0.8 }}><Label>[ System ]</Label></motion.div>
      <div className="mt-[clamp(56px,10vh,140px)] grid grid-cols-1 gap-y-14 lg:grid-cols-12 lg:gap-x-[2%]">
        <motion.div variants={itemScale} initial="hidden" whileInView="show" viewport={IN_VIEW} style={{ y: plateA }} className="relative aspect-[431/299] overflow-hidden lg:col-span-3">
          <Image src={ASSETS.armDetail} alt="Close detail of an engineered steel and brass forearm" fill sizes="(max-width: 1023px) 100vw, 25vw" className="scale-[1.9] object-cover object-[26%_72%]" />
        </motion.div>
        <div className="hidden lg:col-span-9 lg:block" />
        <motion.div variants={itemFade} initial="hidden" whileInView="show" viewport={IN_VIEW} style={{ y: indexA }} className="techno text-[clamp(48px,calc(var(--u)*80),80px)] opacity-20 lg:col-span-2">{SYSTEM_BLOCKS[0].number}</motion.div>
        <motion.div variants={item} initial="hidden" whileInView="show" viewport={IN_VIEW} className="flex flex-col gap-[1.4em] font-light leading-[1.4] text-[max(15px,calc(var(--u)*18))] lg:col-span-4">
          {SYSTEM_BLOCKS[0].paragraphs.map((p) => <p key={p}>{p}</p>)}
        </motion.div>
      </div>
      <div className="mt-[clamp(80px,18vh,260px)] grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-[2%]">
        <div className="hidden lg:col-span-6 lg:block" />
        <motion.div variants={itemFade} initial="hidden" whileInView="show" viewport={IN_VIEW} className="techno text-[clamp(48px,calc(var(--u)*80),80px)] opacity-20 lg:col-span-6">{SYSTEM_BLOCKS[1].number}</motion.div>
        <div className="hidden lg:col-span-6 lg:block" />
        <motion.p variants={item} initial="hidden" whileInView="show" viewport={IN_VIEW} className="font-light leading-[1.4] text-[max(15px,calc(var(--u)*18))] lg:col-span-3">{SYSTEM_BLOCKS[1].paragraphs[0]}</motion.p>
        <motion.div variants={itemScale} initial="hidden" whileInView="show" viewport={IN_VIEW} style={{ y: plateB }} className="relative aspect-[471/299] overflow-hidden lg:col-span-3 lg:col-start-10">
          <Image src={ASSETS.armDetail} alt="Mirrored forearm detail showing the wrist structure" fill sizes="(max-width: 1023px) 100vw, 25vw" className="-scale-x-100 object-cover object-center" />
        </motion.div>
      </div>
    </section>
  );
}

export function ModulesSection() {
  const { container, item, itemLine } = useEntrance(0.07);
  return (
    <section id="modules" className="relative px-[clamp(20px,3vw,58px)] py-[clamp(96px,16vh,220px)]">
      <motion.div initial="hidden" whileInView="show" viewport={IN_VIEW}><Label>[ Modules ]</Label></motion.div>
      <div className="mt-12 grid items-end gap-10 lg:grid-cols-12">
        <motion.div variants={item} initial="hidden" whileInView="show" viewport={IN_VIEW} className="overflow-hidden lg:col-span-7"><div className="display text-[clamp(40px,calc(var(--u)*92),92px)]">Six modules,<br />one intent<span className="display-slash">//</span></div></motion.div>
        <motion.p variants={item} initial="hidden" whileInView="show" viewport={IN_VIEW} className="max-w-[42ch] font-light leading-[1.5] opacity-60 lg:col-span-4 lg:col-start-9">Each module ships as a finished system and still reads as one surface once assembled. Nothing is bolted on after the fact.</motion.p>
      </div>
      <motion.div variants={itemLine} initial="hidden" whileInView="show" viewport={IN_VIEW} className="mt-[clamp(40px,6vh,72px)] h-px origin-left bg-hairline" />
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={IN_VIEW} className="mt-0 grid grid-cols-1 border-l border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
        {MODULES.map((module) => <motion.article key={module.code} variants={item} tabIndex={0} className="group relative flex min-h-[clamp(300px,34vh,392px)] flex-col justify-between border-b border-r border-hairline p-[clamp(24px,2.2vw,40px)] transition-colors duration-500 hover:bg-bone/[0.04] focus-within:bg-bone/[0.04]">
          <div>
            <div className="flex items-center justify-between"><span className="techno text-[13px] opacity-30 transition-opacity duration-500 group-hover:opacity-70">{module.code}</span><ArrowRight className="w-5 -translate-x-2 opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:opacity-40" /></div>
            <h3 className="display mt-10 text-[clamp(28px,calc(var(--u)*44),44px)]">{module.name}</h3>
            <p className="mt-5 max-w-[38ch] font-light leading-[1.5] text-[15px] opacity-60 transition-opacity duration-500 group-hover:opacity-100">{module.copy}</p>
          </div>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-2 border-t border-hairline pt-5">{module.specs.map(([label, value]) => <div key={label}><dt className="text-[11px] uppercase tracking-[0.28em] opacity-30">{label}</dt><dd className="techno mt-1 text-[13px]">{value}</dd></div>)}</dl>
        </motion.article>)}
      </motion.div>
    </section>
  );
}

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 80%"] });
  const fill = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), { stiffness: 90, damping: 24, mass: 0.4 });
  const { container, item } = useEntrance(0.09);
  return (
    <section id="process" ref={ref} className="relative px-[clamp(20px,3vw,58px)] py-[clamp(96px,16vh,220px)]">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:sticky lg:top-[calc(var(--u)*180)] lg:h-fit">
          <Label>[ Process ]</Label>
          <div className="mt-10 overflow-hidden"><h2 className="display text-[clamp(40px,calc(var(--u)*92),92px)]">Four<br />passes<span className="display-slash">//</span></h2></div>
          <p className="mt-8 max-w-[36ch] font-light leading-[1.5] opacity-60">Every unit goes through the same four passes, in the same order, whether it ends up on a line in Zürich or in a lab.</p>
        </div>
        <div className="relative lg:col-span-7 lg:col-start-6">
          <div aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-px bg-hairline"><motion.div style={{ scaleY: reduce ? 1 : fill }} className="h-full w-full origin-top bg-bone/60" /></div>
          <motion.ol variants={container} initial="hidden" whileInView="show" viewport={IN_VIEW} className="m-0 list-none p-0">
            {PROCESS.map((step) => <motion.li key={step.number} variants={item} className="group relative pb-[clamp(40px,7vh,88px)] pl-[clamp(24px,3vw,64px)] last:pb-0">
              <p className="techno text-[13px] opacity-30 transition-opacity duration-500 group-hover:opacity-70">{step.number}</p>
              <h3 className="display mt-4 text-[clamp(32px,calc(var(--u)*60),60px)]">{step.title}</h3>
              <p className="mt-5 max-w-[46ch] font-light leading-[1.5] text-[max(15px,calc(var(--u)*18))] opacity-60 transition-opacity duration-500 group-hover:opacity-100">{step.copy}</p>
            </motion.li>)}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}

function MetricCell({ target, suffix, label, active }: { target: number; suffix: string; label: string; active: boolean }) {
  const value = useCountUp(target, active);
  return <div className="flex aspect-[231/258] flex-col items-center justify-center border border-hairline text-center"><div className="techno text-[clamp(34px,calc(var(--u)*50),50px)]">{value}<span>{suffix}</span></div><p className="mt-[clamp(14px,1.6vw,28px)] max-w-[12ch] font-light uppercase leading-[1.4] text-[max(13px,calc(var(--u)*18))]">{label}</p></div>;
}

export function MetricsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { once: true, amount: 0.35 });
  const { itemMask, item } = useEntrance(0.09);
  return (
    <section id="metrics" className="relative px-[clamp(20px,3vw,58px)] py-[clamp(96px,16vh,220px)]">
      <div className="grid items-end gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7 lg:col-start-2">
          <div className="overflow-hidden text-[clamp(38px,calc(var(--u)*92),92px)]">{CLOSING.map((line, i) => <div key={i} className={`overflow-hidden ${line.align === "right" ? "text-right" : "text-left"}`}><motion.p initial="hidden" whileInView="show" viewport={IN_VIEW} variants={itemMask} className="display">{line.text}{"slash" in line && line.slash && <span className="display-slash">//</span>}</motion.p></div>)}</div>
          <motion.p variants={item} initial="hidden" whileInView="show" viewport={IN_VIEW} className="mt-[clamp(40px,6vh,90px)] max-w-[466px] font-light leading-[1.4] text-[max(15px,calc(var(--u)*18))]">A new standard where design drives performance at every level. Built to merge aesthetics with purpose, creating systems that deliver clarity, efficiency, and consistent results through intelligent structure.</motion.p>
          <motion.a variants={item} initial="hidden" whileInView="show" viewport={IN_VIEW} href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }} className="pill-btn mt-[clamp(32px,4.5vh,70px)] border border-bone/20 text-[max(15px,calc(var(--u)*20))] hover:border-bone/60 hover:bg-bone/5">Discover more</motion.a>
        </div>
        <motion.div ref={ref} className="grid grid-cols-2 gap-0 self-end lg:col-span-4 lg:col-start-9">
          <div className="hidden sm:block" />
          {METRICS.map((metric) => <MetricCell key={metric.label} {...metric} active={active} />)}
        </motion.div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<{ state: "idle" | "error" | "sent"; message: string }>({ state: "idle", message: "" });
  const { container, item, itemLine } = useEntrance(0.07);
  const reduce = useReducedMotion() ?? false;
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setFormState({ state: "error", message: "That address does not look complete." });
      return;
    }
    setFormState({ state: "sent", message: `Confirmation sent to ${value}.` });
    setEmail("");
  };
  return (
    <footer id="contact" className="relative z-10 mx-auto max-w-[2100px] border-t border-hairline px-[clamp(20px,3vw,58px)] pb-[clamp(32px,4vh,56px)] pt-[clamp(72px,12vh,160px)]">
      <div className="grid gap-16 lg:grid-cols-12">
        <motion.div variants={item} initial="hidden" whileInView="show" viewport={IN_VIEW} className="lg:col-span-5">
          <Label>[ Contact ]</Label>
          <div className="mt-10 overflow-hidden"><h2 className="display text-[clamp(40px,calc(var(--u)*80),80px)]">Start a<span className="display-slash">//</span><br />deployment</h2></div>
          <form onSubmit={submit} className="mt-[clamp(32px,5vh,56px)] max-w-[420px]">
            <label htmlFor="footer-email" className="text-[11px] uppercase tracking-[0.28em] opacity-40">Field report — monthly</label>
            <div className="mt-4 flex items-center gap-4 border-b border-hairline pb-3 transition-colors duration-500 focus-within:border-bone/60">
              <input id="footer-email" type="email" value={email} onChange={(e) => { setEmail(e.target.value); if (formState.state !== "idle") setFormState({ state: "idle", message: "" }); }} aria-invalid={formState.state === "error"} aria-describedby="footer-email-status" placeholder="you@company.com" className="w-full bg-transparent font-light text-[16px] text-bone outline-none placeholder:text-bone/25" />
              <button type="submit" aria-label="Subscribe" className="transition duration-500 hover:translate-x-1 hover:opacity-100"><ArrowRight className="w-6" /></button>
            </div>
            <div id="footer-email-status" aria-live="polite" className="mt-3 min-h-[1.25rem] text-[13px]"><AnimatePresence mode="wait" initial={false}><motion.p key={formState.message} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease: EASE }} className={formState.state === "sent" ? "opacity-50" : "text-bone"}>{formState.state === "error" ? `// ${formState.message}` : formState.message}</motion.p></AnimatePresence></div>
          </form>
        </motion.div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={IN_VIEW} className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
          {[
            { title: "System", links: [{ label: "Architecture", href: "#system" }, { label: "Modules", href: "#modules" }, { label: "Process", href: "#process" }, { label: "Telemetry", href: "#metrics" }] },
            { title: "Company", links: [{ label: "About us", href: "#system" }, { label: "Careers", href: "#contact" }, { label: "Press", href: "#contact" }, { label: "Index", href: "#home" }] },
            { title: "Contact", links: [{ label: "hello@arkkhe.systems", href: "mailto:hello@arkkhe.systems" }, { label: "+41 44 000 00 00", href: "tel:+41440000000" }, { label: "Zürich — Werkhalle 4", href: "#contact" }] }
          ].map((group) => <motion.nav key={group.title} variants={item} aria-label={group.title}><h3 className="mb-6 text-[11px] uppercase tracking-[0.28em] opacity-30">{group.title}</h3><ul className="space-y-3">{group.links.map((link) => <li key={link.label}><a href={link.href} className="font-light text-[15px] opacity-60 transition-opacity duration-500 hover:opacity-100">{link.label}</a></li>)}</ul></motion.nav>)}
        </motion.div>
      </div>
      <motion.div variants={itemLine} initial="hidden" whileInView="show" viewport={IN_VIEW} className="mt-[clamp(56px,10vh,140px)] h-px origin-left bg-hairline" />
      <div className="flex flex-wrap items-center justify-between gap-6 pt-8 text-[11px] uppercase tracking-[0.28em] opacity-40"><span>Arkkhe Exoform — Zürich</span><span>© {new Date().getFullYear()}</span><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })} className="transition-opacity duration-500 hover:opacity-100">Back to top ↑</button></div>
    </footer>
  );
}
