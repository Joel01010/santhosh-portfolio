"use client";

import { Reveal } from "./ui/Reveal";
import {
  Database,
  BrainCircuit,
  FlaskConical,
  Gauge,
  Rocket,
} from "lucide-react";

const steps = [
  { icon: Database, label: "Data", desc: "Real-world inputs" },
  { icon: BrainCircuit, label: "Model", desc: "Architectures trained" },
  { icon: FlaskConical, label: "Simulation", desc: "Faithful environments" },
  { icon: Gauge, label: "Evaluation", desc: "Honest baselines" },
  { icon: Rocket, label: "Deployment", desc: "Engineered systems" },
];

const domains = [
  "Transportation",
  "Financial Fraud",
  "Energy",
  "Robotics",
  "Autonomous Systems",
];

export function Mindset() {
  return (
    <section id="mindset" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3">02 — Approach</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink leading-tight">
            From Models to Real-World Systems
          </h2>
        </Reveal>

        <div className="mt-16 relative flex items-center justify-between">
          <div className="hidden md:flex absolute top-1/2 left-0 right-0 -translate-y-1/2 h-px bg-gradient-to-r from-accent/40 via-white/10 to-violet/40" />
          <div className="relative flex items-start gap-4 sm:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-panel text-ink transition-colors hover:border-accent/40 hover:bg-accent/5">
                    <s.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-ink">{s.label}</div>
                    <div className="text-xs text-faint">{s.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.6}>
          <div className="mt-16 rounded-2xl border border-white/10 bg-panel p-8">
            <p className="text-muted leading-relaxed">
              Every project follows the same loop — take a model, ground it in a faithful
              simulation, evaluate it against honest baselines, and engineer it toward
              deployment. The domains change; the discipline doesn&apos;t.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {domains.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs font-mono text-muted hover:border-accent/40 hover:text-accent transition-colors"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
