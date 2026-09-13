"use client";

import { navItems, name, location } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-faint">
          © 2026 {name} — Building intelligent systems.
        </span>
        <nav aria-label="Footer" className="flex items-center gap-6 font-mono text-xs text-faint">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-accent transition-colors">
              {item.label}
            </a>
          ))}
          <span className="hidden sm:inline text-muted">{location || ""}</span>
        </nav>
      </div>
    </footer>
  );
}
