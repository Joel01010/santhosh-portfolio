export type SkillCategory = {
  name: string;
  icon: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    icon: "Code2",
    items: ["Python", "C", "C++", "Java"],
  },
  {
    name: "Data & Visualization",
    icon: "BarChart3",
    items: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    name: "Machine Learning",
    icon: "BrainCircuit",
    items: ["Scikit-Learn", "TensorFlow", "Keras", "TensorBoard", "PyTorch", "OpenCV", "Hugging Face"],
  },
  {
    name: "Graph / Simulation / Engineering",
    icon: "Wrench",
    items: ["PyG", "DGL", "SUMO", "Git", "Docker", "Linux"],
  },
  {
    name: "Specializations",
    icon: "Sparkles",
    items: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "NLP", "GNN", "Computer Vision", "Deep Learning", "Data Structures & Algorithms"],
  },
];
