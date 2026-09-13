"use client";

import { Reveal } from "./ui/Reveal";
import { Bot } from "lucide-react";
import { leadershipEntry } from "@/data/experience";

export function Leadership() {
  return (
    <section id="leadership" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3">05 — Leadership</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink leading-tight">
            Leadership & Community
          </h2>
        </Reveal>

        <div className="mt-12 relative">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/30 via-white/5 to-violet/30" />
          <div className="relative rounded-3xl border border-white/10 bg-panel p-8 sm:p-12">
            <div className="flex items-start gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Bot className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-mono text-xs text-accent">{leadershipEntry.role}</span>
                  <span className="text-muted">·</span>
                  <span className="font-mono text-xs text-ink">{leadershipEntry.org}</span>
                </div>
                <h3 className="text-xl font-semibold text-ink">{leadershipEntry.title}</h3>
                <p className="mt-3 text-muted leading-relaxed max-w-xl">
                  {leadershipEntry.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {leadershipEntry.focusChips.map((c) => (
                    <span key={c} className="rounded-full border border-white/10 px-3 py-1 text-xs font-mono text-muted hover:border-accent/40 hover:text-accent transition-colors">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 hidden sm:block">
              <svg viewBox="0 0 200 120" className="h-24 w-full opacity-30" aria-hidden>
                <circle cx="100" cy="30" r="12" fill="none" stroke="rgba(34,211,238,0.4)" strokeWidth="1" />
                <circle cx="100" cy="30" r="20" fill="none" stroke="rgba(34,211,238,0.2)" strokeWidth="0.5" strokeDasharray="3 4" />
                <circle cx="40" cy="70" r="8" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="0.8" />
                <circle cx="160" cy="70" r="8" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="0.8" />
                <circle cx="55" cy="105" r="6" fill="none" stroke="rgba(34,211,238,0.2)" strokeWidth="0.6" />
                <circle cx="145" cy="105" r="6" fill="none" stroke="rgba(34,211,238,0.2)" strokeWidth="0.6" />
                <line x1="100" y1="42" x2="40" y2="62" stroke="rgba(231,236,244,0.1)" strokeWidth="0.5" />
                <line x1="100" y1="42" x2="160" y2="62" stroke="rgba(231,236,244,0.1)" strokeWidth="0.5" />
                <line x1="100" y1="42" x2="55" y2="99" stroke="rgba(231,236,244,0.08)" strokeWidth="0.5" />
                <line x1="100" y1="42" x2="145" y2="99" stroke="rgba(231,236,244,0.08)" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
