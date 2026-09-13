"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/lib/useActiveSection";
import { navItems } from "@/data/site";
import { MagneticButton } from "./ui/MagneticButton";


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(
    navItems.map((n) => n.id),
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className="mx-auto max-w-6xl px-4 sm:px-6"
      >
        <div
          className={`mt-4 flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 ${scrolled ? "border-white/10 bg-bg/80 backdrop-blur-xl shadow-lg shadow-black/40" : "border-transparent bg-transparent"}`}
        >
          <a href="#home" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-ink">
              <span className="text-accent">S</span>
              <span className="text-violet">V</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative px-3 py-1.5 text-sm transition-colors ${active === item.id ? "text-ink" : "text-muted hover:text-ink"}`}
                >
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/5 border border-white/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <MagneticButton href={"/Santhosh_V_Resume.pdf"}>
                Resume
              </MagneticButton>
            </div>
            <button
              className="md:hidden p-1 text-ink"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation"
            >
              <span className="block w-5 h-0.5 bg-ink relative">
                <span className="absolute top-1.5 left-0 w-5 h-0.5 bg-ink" />
                <span className="absolute top-3 left-0 w-3 h-0.5 bg-ink" />
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="md:hidden rounded-2xl border border-white/10 bg-panel/95 backdrop-blur-xl p-2 flex flex-col gap-1"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2.5 text-sm rounded-xl ${active === item.id ? "text-ink bg-white/5" : "text-muted hover:text-ink"}`}
                >
                  {item.label}
                </a>
              ))}
              <MagneticButton href={"/Santhosh_V_Resume.pdf"} className="mt-2 w-full justify-center">
                Resume
              </MagneticButton>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
