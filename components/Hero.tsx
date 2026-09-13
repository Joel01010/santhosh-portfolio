"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Linkedin,
} from "lucide-react";
import { NeuralCanvas } from "./NeuralCanvas";

export function Hero() {
  const words = [
    "Building",
    "Intelligent",
    "Systems",
    "for the",
    "Real World.",
  ];

  return (
    <section id="home" className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <NeuralCanvas />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[1fr,1.1fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-mono text-accent mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              System online · all subsystems nominal
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              {words.map((w, i) => (
                <motion.span
                  key={w}
                  className="inline-block overflow-hidden"
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  {w}{" "}
                </motion.span>
              ))}
              <motion.span
                className="text-accent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                Real
              </motion.span>{" "}
              <motion.span
                className="text-violet"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                World.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-6 max-w-lg text-lg text-muted leading-relaxed"
            >
              Computer Science Engineering student focused on Machine Learning,
              Reinforcement Learning, Graph Neural Networks, and intelligent
              autonomous systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#research">
                <motion.button className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg hover:bg-accent-deep transition-colors">
                  View Projects
                </motion.button>
              </a>
              <a href="/Santhosh_V_Resume.pdf" download>
                <motion.button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-ink hover:bg-white/10 transition-colors">
                  <Download className="h-4 w-4" />
                  Download Resume
                </motion.button>
              </a>
              <a href="https://www.linkedin.com/in/santhosh-vijayakumar-092702324" target="_blank" rel="noopener noreferrer">
                <motion.button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-ink hover:bg-white/10 transition-colors">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </motion.button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-10 font-mono text-xs text-faint"
            >
              <span className="text-accent">&gt;</span> AI / ML Engineer · Researcher · Builder
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-accent/[0.03] blur-2xl" />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-faint"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
