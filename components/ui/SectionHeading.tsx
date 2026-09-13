"use client";

import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-14">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink leading-tight">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-muted max-w-xl leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
