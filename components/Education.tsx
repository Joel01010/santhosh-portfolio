"use client";

import { Reveal } from "./ui/Reveal";
import { CountUp } from "./ui/CountUp";
import { education } from "@/data/education";
import { GraduationCap, BadgeCheck } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3">06 — Education</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink leading-tight">
            Academic Foundation
          </h2>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-[1.4fr,1fr] gap-6">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-panel p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">{education.institution}</h3>
                  <p className="text-muted text-sm">{education.degree}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-baseline gap-4">
                <span className="font-mono text-sm text-muted">{education.period}</span>
                <span className="text-muted">·</span>
                <span className="font-mono text-sm text-ink">
                  CGPA <CountUp value={education.cgpa} decimals={2} />
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span key={c} className="rounded-full border border-white/10 px-3 py-1 text-xs font-mono text-muted">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="space-y-4">
            <Reveal delay={0.18}>
              <div className="rounded-2xl border border-white/10 bg-panel p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <BadgeCheck className="h-4 w-4" />
                  </div>
                  <h4 className="text-sm font-medium text-ink">Training</h4>
                </div>
                <p className="text-muted text-sm">{education.training}</p>
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="rounded-2xl border border-white/10 bg-panel p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="font-mono text-2xl font-semibold text-ink">
                    {education.highSchool.percent}%
                  </div>
                </div>
                <p className="text-muted text-sm">{education.highSchool.label}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
