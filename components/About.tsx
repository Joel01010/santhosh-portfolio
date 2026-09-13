"use client";

import { Reveal } from "./ui/Reveal";
import { CountUp } from "./ui/CountUp";
import { stats } from "@/data/site";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3">01 — About</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink leading-tight">
            From first-semester curiosity to systems that ship.
          </h2>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-[1.1fr,1fr] gap-12 items-start">
          <div className="space-y-5 text-muted leading-relaxed">
            <Reveal delay={0.1}>
              <p>
                I&apos;m <span className="text-ink font-medium">Santhosh V</span>, a third-year Computer
                Science Engineering student at Vellore Institute of Technology, Chennai. I bring a strong
                foundation in Machine Learning and Data Science to everything I build.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p>
                I began learning Machine Learning during my first semester and have continued deepening
                my understanding of models, data, and real-world problem solving ever since — moving
                from notebooks into simulations, evaluations, and deployable systems.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p>
                My focus is on taking models out of theory and into systems that interact with the
                real world: transportation, financial fraud, energy, robotics, and autonomous systems.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[stats[0], stats[1]].map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-panel p-4">
                  <div className="font-mono text-2xl sm:text-3xl font-semibold text-ink">
                    {s.decimals > 0 ? (
                      <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
                    ) : (
                      <CountUp value={s.value} suffix={s.suffix} />
                    )}
                  </div>
                  <div className="mt-1 text-xs text-faint">{s.label}</div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.34}>
              <div className="rounded-2xl border border-white/10 bg-panel p-4 col-span-2">
                <div className="font-mono text-2xl sm:text-3xl font-semibold text-accent">
                  <CountUp value={3} suffix="M+" />
                </div>
                <div className="mt-1 text-xs text-faint">Transaction Edges Analyzed</div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="rounded-2xl border border-white/10 bg-panel p-4">
                <div className="font-mono text-2xl sm:text-3xl font-semibold text-ink">
                  <CountUp value={4} suffix="" />
                </div>
                <div className="mt-1 text-xs text-faint">Real-World Datasets</div>
              </div>
            </Reveal>
            <div className="rounded-2xl border border-white/10 bg-panel p-4">
              <div className="font-mono text-2xl sm:text-3xl font-semibold text-ink">
                <span className="flex items-baseline gap-1">
                  <CountUp value={9} suffix="%" />
                  <CountUp value={14} suffix="%" className="ml-2" />
                  <CountUp value={26} suffix="%" className="ml-2" />
                </span>
              </div>
              <div className="mt-1 text-xs text-faint">
                Traffic Signal Improvements (Queue · Wait · Delay)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
