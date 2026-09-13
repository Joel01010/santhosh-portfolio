"use client";

import { useRef, useEffect } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  isAccent: boolean;
}

export function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);
  const runningRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = container.clientWidth;
    let height = container.clientHeight;
    const count = Math.min(Math.max(Math.floor((width * height) / 22000), 30), 100);

    const nodes: Node[] = [];
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.8,
        isAccent: Math.random() > 0.85,
      });
    }
    nodesRef.current = nodes;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const handleMouse = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    container.addEventListener("pointermove", handleMouse, { passive: true });

    const io = new IntersectionObserver(([entry]) => {
      runningRef.current = entry.isIntersecting;
    });
    io.observe(canvas);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animate = () => {
      if (!runningRef.current) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const nodes = nodesRef.current;
      const threshold = Math.min(130, width / 4);

      // update positions
      for (const n of nodes) {
        if (!reduced) {
          const dx = mx - n.x;
          const dy = my - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200 && dist > 1) {
            n.vx += (dx / dist) * 0.0004;
            n.vy += (dy / dist) * 0.0004;
          }
        }
        n.x += n.vx;
        n.y += n.vy;
        n.vx *= 0.99;
        n.vy *= 0.99;
        if (n.x < 0) n.x += width;
        if (n.x > width) n.x -= width;
        if (n.y < 0) n.y += height;
        if (n.y > height) n.y -= height;
      }

      // edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < threshold) {
            const alpha = (1 - d / threshold) * 0.3;
            const isAccentEdge = a.isAccent || b.isAccent;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = isAccentEdge
              ? `rgba(139,92,246,${alpha})`
              : `rgba(34,211,238,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const dist = Math.sqrt((mx - n.x) ** 2 + (my - n.y) ** 2);
        const brighten = dist < 180 ? 0.3 * (1 - dist / 180) : 0;
        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(0.5, n.r), 0, Math.PI * 2);
        if (n.isAccent) {
          ctx.fillStyle = `rgba(139,92,246,${0.8 + brighten})`;
        } else {
          ctx.fillStyle = `rgba(231,236,244,${0.6 + brighten})`;
        }
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    if (!reduced) {
      animate();
    } else {
      // draw one static frame
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      for (const n of nodesRef.current) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(0.5, n.r), 0, Math.PI * 2);
        ctx.fillStyle = n.isAccent ? "rgba(139,92,246,0.6)" : "rgba(231,236,244,0.4)";
        ctx.fill();
      }
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      io.disconnect();
      container.removeEventListener("pointermove", handleMouse);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 h-full w-full opacity-60">
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden />
    </div>
  );
}
