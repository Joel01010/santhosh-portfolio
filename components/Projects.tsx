"use client";

import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="research" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="03 — Research & Projects"
          title="Work that ships, papers that peer."
          description="A selection of research and engineering projects spanning reinforcement learning, graph neural networks, and robotics."
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} featured={project.featured} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
