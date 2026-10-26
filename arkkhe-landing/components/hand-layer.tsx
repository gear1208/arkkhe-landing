"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ASSETS } from "@/lib/assets";
import { EASE } from "@/lib/motion";

export function HandLayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion() ?? false;
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduce) return;
    video.src = ASSETS.handFilm;
    void video.play().catch(() => {});
    return () => {
      video.removeAttribute("src");
      video.load();
    };
  }, [reduce]);

  return (
    <motion.div aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, ease: EASE, delay: 0.1 }} className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 opacity-40 lg:opacity-100">
        <video ref={videoRef} poster={ASSETS.handPoster} muted loop playsInline preload="auto" className="h-full w-full object-cover object-center" />
      </div>
    </motion.div>
  );
}
