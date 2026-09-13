"use client";

import { useReducedMotion } from "framer-motion";
import type { VizType } from "@/data/projects";

function TrafficViz() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 400 120" className="h-full w-full" aria-hidden>
      <rect x="0" y="40" width="400" height="12" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="0" y="80" width="400" height="12" rx="2" fill="rgba(255,255,255,0.08)" />
      <line x1="190" y1="28" x2="190" y2="100" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      {!reduce && (
        <>
          <rect x="0" y="40" width="400" height="12" rx="2" fill="rgba(34,211,238,0.2)" className="flow-slide" />
          <rect x="0" y="80" width="400" height="12" rx="2" fill="rgba(139,92,246,0.15)" className="flow-slide" style={{ animationDirection: "reverse" }} />
        </>
      )}
      <circle cx="190" cy="46" r="5" fill="#22d3ee" opacity="0.6" />
      <circle cx="190" cy="86" r="5" fill="#8b5cf6" opacity="0.6" />
    </svg>
  );
}

function GraphViz() {
  const reduce = useReducedMotion();
  const nodes = [
    [40, 20], [120, 40], [200, 15], [280, 35], [360, 20],
    [80, 60], [160, 80], [240, 55], [320, 75], [400, 60],
  ];
  const edges = [
    [0,1],[1,2],[2,3],[3,4],[0,5],[1,6],[2,7],[3,8],[4,9],[5,7],[6,8],
  ];
  const fraudNodes = new Set([8, 9]);
  return (
    <svg viewBox="0 0 400 120" className="h-full w-full" aria-hidden>
      {edges.map(([a, b]) => {
        const x1 = nodes[a][0], y1 = nodes[a][1], x2 = nodes[b][0], y2 = nodes[b][1];
        return (
          <line key={`${a}-${b}`} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={fraudNodes.has(a) || fraudNodes.has(b) ? "rgba(244,63,94,0.25)" : "rgba(255,255,255,0.07)"} strokeWidth="0.5" />
        );
      })}
      {!reduce && edges.slice(0, 8).map(([a, b], i) => {
        const x1 = nodes[a][0], y1 = nodes[a][1], x2 = nodes[b][0], y2 = nodes[b][1];
        return (
          <circle key={`pulse-${i}`} r="2" fill="#22d3ee" opacity="0.6">
            <animateMotion dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" path={`M${x1},${y1} L${x2},${y2}`} begin={`${i * 0.25}s`} />
          </circle>
        );
      })}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={fraudNodes.has(i) ? 4 : 2.5}
          fill={fraudNodes.has(i) ? "#f43f5e" : "rgba(231,236,244,0.6)"} />
      ))}
    </svg>
  );
}

function EvViz() {
  const reduce = useReducedMotion();
  const stages = ["EV STATIONS", "FORECAST", "RL AGENT", "PRICE"];
  const cols = [50, 140, 230, 320];
  return (
    <svg viewBox="0 0 400 120" className="h-full w-full" aria-hidden>
      {stages.map((s, i) => (
        <g key={i}>
          <rect x={cols[i] - 25} y="45" width="50" height="30" rx="4"
            fill={i === 2 ? "rgba(34,211,238,0.15)" : "rgba(255,255,255,0.06)"}
            stroke={i === 2 ? "rgba(34,211,238,0.5)" : "rgba(255,255,255,0.1)"}
            strokeWidth="0.5" />
          <text x={cols[i]} y="64" textAnchor="middle" fill="rgba(231,236,244,0.7)" fontSize="5.5" fontFamily="monospace">{s}</text>
        </g>
      ))}
      {!reduce && (
        <>
          {[75, 165, 255].map((x, i) => (
            <line key={i} x1={x} y1="60" x2={x + 40} y2="60" stroke="rgba(34,211,238,0.2)" strokeWidth="0.5" className="flow-dash" />
          ))}
          {[75, 165, 255].map((x, i) => (
            <circle key={`dot-${i}`} cx={x + 20} cy="60" r="2" fill="#22d3ee">
              <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" begin={`${i * 0.6}s`} />
            </circle>
          ))}
        </>
      )}
      <rect x="140" y="28" width="120" height="12" rx="3" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" />
      <text x="200" y="37" textAnchor="middle" fill="#22d3ee" fontSize="5" fontFamily="monospace">DYNAMIC</text>
    </svg>
  );
}

function SwarmViz() {
  const reduce = useReducedMotion();
  const drones = [
    [80, 50], [150, 30], [220, 45], [300, 35], [350, 55],
  ];
  return (
    <svg viewBox="0 0 400 120" className="h-full w-full" aria-hidden>
      <circle cx="210" cy="55" r="30" fill="none" stroke="rgba(139,92,246,0.12)" strokeWidth="0.5" strokeDasharray="3 4" className="risk-spin" />
      {drones.map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 3} y={y - 3} width="6" height="6" rx="1" fill="rgba(34,211,238,0.5)" transform={`rotate(45 ${x} ${y})`} />
          {!reduce && <circle cx={x} cy={y} r="1.5" fill="#8b5cf6" opacity="0.5"><animate attributeName="r" values="1.5;5;1.5" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" /></circle>}
        </g>
      ))}
    </svg>
  );
}

function AuvViz() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 400 120" className="h-full w-full" aria-hidden>
      <path d="M0,40 Q50,30 100,40 T200,40 T300,35 T400,40" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="0.8" />
      <path d="M0,55 Q60,45 120,55 T240,55 T340,50 T400,55" fill="none" stroke="rgba(139,92,246,0.25)" strokeWidth="0.8" />
      <path d="M0,70 Q70,60 140,70 T280,70 T360,65 T400,70" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" />
      {!reduce && (
        <>
          <circle r="3" fill="rgba(34,211,238,0.4)">
            <animate attributeName="r" values="3;10;3" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="55" r="1" fill="#22d3ee">
            <animate attributeName="cy" values="55;45;55" dur="2s" repeatCount="indefinite" />
          </circle>
        </>
      )}
      <ellipse cx="200" cy="55" rx="8" ry="4" fill="rgba(34,211,238,0.3)" transform="rotate(-10 200 55)" />
      <line x1="208" y1="53" x2="215" y2="50" stroke="rgba(34,211,238,0.4)" strokeWidth="0.5" />
    </svg>
  );
}

const vizMap: Record<VizType, typeof TrafficViz> = {
  traffic: TrafficViz,
  graph: GraphViz,
  ev: EvViz,
  swarm: SwarmViz,
  auv: AuvViz,
};

export function ProjectVisuals({ type }: { type: VizType }) {
  const Viz = vizMap[type];
  return <Viz />;
}
