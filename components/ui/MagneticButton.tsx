"use client";

import { useReducedMotion } from "framer-motion";

export function MagneticButton({
  children,
  href,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  [key: string]: unknown;
}) {
  const reduce = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };
  const handleMouseLeave = (e: React.MouseEvent) => {
    (e.currentTarget as HTMLElement).style.transform = "";
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      className={`inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-accent hover:text-bg hover:border-accent ${className}`}
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Component>
  );
}
