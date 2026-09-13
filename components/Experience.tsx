"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { experienceEntry } from "@/data/experience";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3">03 — Experience</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink leading-tight">
            Professional Work
          </h2>
        </Reveal>

        <div className="relative mt-16 pl-8">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent" />
          <motion.div
            ref={ref}
            className="absolute left-4 top-0 bottom-0 w-px origin-top bg-accent/60"
            style={{ scaleY }}
          />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-white/10 bg-panel p-6"
          >
            <span className="font-mono text-xs text-accent">{experienceEntry.period}</span>
            <h3 className="mt-1 text-xl font-semibold text-ink">{experienceEntry.role}</h3>
            <p className="text-muted text-sm">{experienceEntry.company}</p>
            <ul className="mt-4 space-y-2 text-muted text-sm leading-relaxed">
              {experienceEntry.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {experienceEntry.chips.map((c) => (
                <span key={c} className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs font-mono text-faint">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
