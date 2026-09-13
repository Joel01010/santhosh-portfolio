export type VizType = "traffic" | "graph" | "ev" | "swarm" | "auv";

export type ProjectLink = { label: string; disabled: true; note: string };

export type Project = {
  id: string;
  title: string;
  category: string;
  badge: string;
  featured?: boolean;
  description: string;
  viz: VizType;
  problem: string;
  approach: string;
  challenges: string[];
  results: { value: string; label: string }[];
  technologies: string[];
  extras?: { label: string; value: string[] }[];
  note?: string;
};

export const projects: Project[] = [
  {
    id: "ppo-traffic",
    title: "PPO-Based Adaptive Traffic Signal Control",
    category: "Reinforcement Learning · Intelligent Transportation",
    badge: "Research",
    featured: true,
    description:
      "Developed a PPO-based reinforcement learning traffic-signal control system in a custom SUMO simulation environment optimized for edge deployment.",
    viz: "traffic",
    problem:
      "Fixed-time signals waste capacity under fluctuating demand, and edge hardware rules out heavy models.",
    approach:
      "Custom SUMO simulation with a PPO agent controlling signal phases; observation and action spaces optimized for on-device inference.",
    challenges: [
      "Found a credit-assignment bug mislabelling 34–42% of transitions in the training buffer — rebuilt the transition labelling logic.",
      "Diagnosed an environment defect producing an abnormal 113× action-sensitivity gain; isolated it through controlled perturbation runs.",
      "After fixes, training converged to a stable policy with monotonic evaluation gains.",
    ],
    results: [
      { value: "9%", label: "Queue Length ↓" },
      { value: "14%", label: "Wait Time ↓" },
      { value: "26%", label: "Delay ↓" },
    ],
    technologies: ["PPO", "SUMO", "Python", "Edge Optimization"],
    extras: [
      { label: "Baselines", value: ["Fixed-Time Signal Control"] },
      { label: "Paper", value: ["Peer-reviewed research paper on RL-based traffic monitoring optimized for edge deployment"] },
    ],
    note: "Peer-reviewed research paper (RL-based traffic monitoring, edge deployment).",
  },
  {
    id: "dg-hetero-gnn",
    title: "DG-Hetero-GNN",
    category: "Graph Neural Networks · Financial Fraud Detection",
    badge: "Research",
    description:
      "Co-developed a domain-generalized heterogeneous graph neural network for cross-domain financial fraud detection.",
    viz: "graph",
    problem:
      "Financial fraud detection must generalize across institutions where labeled fraud data is sparse and domain-shifted.",
    approach:
      "Domain-generalized heterogeneous GNN trained to identify fraud patterns across structurally distinct transaction graphs.",
    challenges: [],
    results: [
      { value: "0.72", label: "F1-Score" },
      { value: "89.6%", label: "Recall" },
    ],
    technologies: ["Heterogeneous GNN", "Domain Generalization", "PyTorch", "PyG"],
    extras: [
      { label: "Datasets", value: ["Elliptic", "IEEE-CIS", "DGraphFin", "AMLSim"] },
      { label: "Baselines", value: ["XGBoost", "GAT", "GCN", "GraphSAGE"] },
    ],
    note: "Paper currently under conference review.",
  },
  {
    id: "ev-charging",
    title: "Real-Time EV Charging Price Optimization",
    category: "Demand Forecasting · Deep Reinforcement Learning",
    badge: "Engineering",
    featured: false,
    description:
      "Building a hybrid demand-forecasting and deep reinforcement learning system for real-time EV charging price optimization.",
    viz: "ev",
    problem:
      "EV charging prices must respond to volatile demand and grid constraints in real time.",
    approach:
      "Hybrid demand-forecasting model feeding a deep RL agent that produces dynamic pricing decisions.",
    challenges: [],
    results: [{ value: "80%", label: "Within theoretical optimum" }],
    technologies: ["Demand Forecasting", "Deep RL", "Python"],
    note: "Currently being built.",
  },
  {
    id: "swarm-drone",
    title: "Autonomous Swarm-Drone Minefield Navigation",
    category: "Robotics · SLAM · Risk Mapping",
    badge: "Research",
    description:
      "Designed the model architecture for an autonomous swarm-drone minefield navigation system.",
    viz: "swarm",
    problem:
      "Coordinating multiple drones through a minefield requires real-time obstacle awareness and shared risk modeling.",
    approach:
      "Swarm architecture with SLAM integration and risk-mapping algorithms for obstacle-aware decision making.",
    challenges: [],
    results: [],
    technologies: ["SLAM", "Risk Mapping", "Swarm Coordination"],
    extras: [{ label: "Competition", value: ["Robofest"] }],
  },
  {
    id: "auv-simulation",
    title: "Autonomous Underwater Vehicle Simulation",
    category: "Machine Learning · Robotics · Simulation",
    badge: "Engineering",
    description:
      "Developed simulation environments for Autonomous Underwater Vehicles (AUVs) to support model training and validation.",
    viz: "auv",
    problem:
      "AUV models require realistic underwater simulation environments for safe training and validation.",
    approach:
      "Built AUV simulation environments integrated into production ML pipelines.",
    challenges: [],
    results: [],
    technologies: ["Simulation", "Python", "ML Pipelines"],
    extras: [{ label: "Company", value: ["BlackVolt Technologies"] }],
  },
];
