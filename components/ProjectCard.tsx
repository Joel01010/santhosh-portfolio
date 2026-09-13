"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Github,
  FileText,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { Project } from "@/data/projects";
import { ProjectVisuals } from "./ProjectVisuals";
import { MagneticButton } from "./ui/MagneticButton";

export function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group relative rounded-2xl border border-white/10 bg-panel transition-all duration-300 hover:border-accent/20 ${featured ? "lg:col-span-2" : ""}`}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px at var(--mx,50%) var(--my,50%), rgba(34,211,238,0.06), transparent)",
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
          e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.setProperty("--mx", "50%");
          e.currentTarget.style.setProperty("--my", "50%");
        }}
      />

      <button
        className="w-full text-left"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls={`proj-${project.id}-panel`}
      >
        <div className="relative overflow-hidden rounded-t-2xl border-b border-white/5">
          <ProjectVisuals type={project.viz} />
          <div className="absolute bottom-3 left-4 flex items-center gap-2">
            <span className="rounded-full bg-bg/70 backdrop-blur-sm px-2 py-0.5 text-[10px] font-mono text-accent border border-accent/30">
              {project.badge}
            </span>
            <span className="rounded-full bg-bg/70 backdrop-blur-sm px-2 py-0.5 text-[10px] font-mono text-faint">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-ink leading-tight">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="mt-1 shrink-0"
            >
              <ChevronDown className="h-4 w-4 text-muted" />
            </motion.div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.results.slice(0, 3).map((r) => (
              <span key={r.label} className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-mono text-accent">
                {r.value} <span className="text-faint font-normal">{r.label}</span>
              </span>
            ))}
            {project.note && (
              <span className="rounded-md bg-violet/10 px-2 py-0.5 text-xs font-mono text-violet">
                {project.note}
              </span>
            )}
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((t) => (
              <span key={t} className="rounded-md border border-white/10 px-2 py-0.5 text-[10px] font-mono text-faint">
                {t}
              </span>
            ))}
          </div>
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            id={`proj-${project.id}-panel`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/5 p-5 sm:p-6 pt-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-2">Problem</h4>
                  <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-2">Approach</h4>
                  <p className="text-sm text-muted leading-relaxed">{project.approach}</p>
                </div>
              </div>

              {project.challenges.length > 0 && (
                <div className="mt-5">
                  <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
                    Engineering Challenges
                  </h4>
                  <ul className="space-y-2">
                    {project.challenges.map((c, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted leading-relaxed">
                        <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent/60" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="rounded-md border border-accent/30 bg-accent/5 px-2 py-0.5 text-xs font-mono text-accent">
                    {t}
                  </span>
                ))}
              </div>

              {project.extras && (
                <div className="mt-5 space-y-3">
                  {project.extras.map((extra) => (
                    <div key={extra.label}>
                      <span className="text-xs font-mono text-faint">{extra.label}: </span>
                      <span className="text-sm text-ink">{extra.value.join(", ")}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-mono text-muted flex items-center gap-1.5">
                  <Github className="h-3 w-3" /> Code — Available on Request
                </span>
                {project.note?.includes("under conference") && (
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-mono text-muted flex items-center gap-1.5">
                    <FileText className="h-3 w-3" /> Paper — Under Conference Review
                  </span>
                )}
                {project.note?.includes("currently being built") && (
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-mono text-muted flex items-center gap-1.5">
                    <ExternalLink className="h-3 w-3" /> Status — In Development
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
