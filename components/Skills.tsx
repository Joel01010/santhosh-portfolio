"use client";

import { createElement } from "react";
import { Reveal } from "./ui/Reveal";
import { skillCategories } from "@/data/skills";
import {
  Code2,
  BarChart3,
  BrainCircuit,
  Wrench,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  BarChart3,
  BrainCircuit,
  Wrench,
  Sparkles,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3">04 — Technical Arsenal</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink leading-tight">
            The Stack I Work With
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, ci) => (
            <Reveal key={cat.name} delay={ci * 0.08}>
              <div className="group relative rounded-2xl border border-white/10 bg-panel p-5 transition-all duration-300 hover:border-accent/20">
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  <svg className="h-full w-full" viewBox="0 0 400 300">
                    <circle cx="350" cy="30" r="2" fill="rgba(231,236,244,0.3)" />
                    <circle cx="80" cy="250" r="1.5" fill="rgba(231,236,244,0.2)" />
                    <circle cx="200" cy="60" r="1" fill="rgba(231,236,244,0.15)" />
                    <line x1="350" y1="30" x2="80" y2="250" stroke="rgba(231,236,244,0.1)" strokeWidth="0.5" />
                    <line x1="200" y1="60" x2="350" y2="30" stroke="rgba(231,236,244,0.08)" strokeWidth="0.5" />
                  </svg>
                </div>
                <div className="relative flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    {createElement(iconMap[cat.icon] || Code2, { className: "h-4 w-4" })}
                  </div>
                  <h3 className="font-medium text-ink text-sm">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item, ti) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 px-2 py-0.5 text-xs font-mono text-faint transition-all duration-300 group-hover:text-ink group-hover:border-accent/30 group-hover:bg-accent/5"
                      style={{ transitionDelay: `${ti * 15}ms` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
