"use client";

import { Reveal } from "./ui/Reveal";
import { Mail, Linkedin, Download, MapPin, Phone } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";
import { email, linkedInUrl, resumePath, location, phone } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3">07 — Contact</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink leading-tight">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-accent to-violet bg-clip-text text-transparent">
              Intelligent
            </span>
            .
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-5 text-muted max-w-lg mx-auto leading-relaxed">
            Interested in machine learning, intelligent systems, research, or robotics?
            Let&apos;s connect.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${email}`}>
              <MagneticButton>
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </MagneticButton>
            </a>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <MagneticButton>
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </MagneticButton>
            </a>
            <a href={resumePath} download>
              <MagneticButton>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </MagneticButton>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-12 grid grid-cols-3 gap-6 font-mono text-xs text-faint">
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-accent/60" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-accent/60" />
              <a href={`mailto:${email}`} className="hover:text-accent transition-colors">
                {email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-accent/60" />
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-accent transition-colors">
                {phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
