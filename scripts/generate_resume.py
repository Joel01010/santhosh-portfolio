"""Generate Santhosh_V_Resume.pdf from verified resume data."""
import os
from fpdf import FPDF

pdf = FPDF()
pdf.set_auto_page_break(auto=True, margin=14)
pdf.add_page(format="A4")

# A4 width 210mm, margins 14 each -> 182mm usable
W = 210
M = 14
CW = W - 2 * M

# Fonts: use Arial (system)
pdf.set_font("Helvetica")

def section(title):
    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(34, 211, 238)
    pdf.cell(CW, 6, title.upper(), align="L")
    pdf.ln(1)
    pdf.set_draw_color(34, 211, 238)
    pdf.set_line_width(0.3)
    pdf.line(M, pdf.y, W - M, pdf.y)
    pdf.ln(2)
    pdf.set_text_color(0, 0, 0)

# ---- ABOUT ----
section("About")
pdf.set_font("Helvetica", "", 9)
pdf.multi_cell(CW, 5.2,
    "Third-year Computer Science Engineering student with a strong foundation in Machine Learning and Data Science. "
    "Passionate about building hands-on projects and exploring innovative ideas. Began learning Machine Learning during "
    "the first semester, continuing to deepen understanding of models, data, and real-world problem solving.",
    align="J")
pdf.ln(3)

# ---- EDUCATION ----
section("Education")
pdf.set_font("Helvetica", "B", 9)
pdf.cell(CW, 5, "Vellore Institute of Technology, Chennai", align="L")
pdf.ln(3)
pdf.set_font("Helvetica", "", 9)
pdf.cell(CW, 5, "B.Tech Computer Science Engineering  |  2024 - 2028  |  CGPA: 8.84", align="L")
pdf.ln(3)
pdf.set_font("Helvetica", "", 8.5)
pdf.set_text_color(80, 80, 80)
pdf.multi_cell(CW, 4.8,
    "Relevant coursework: Data Structures and Algorithms, Design and Analysis of Algorithms, Operating Systems, "
    "Computer Architecture and Organization, Computer Networks.", align="J")
pdf.ln(2)
pdf.set_text_color(0, 0, 0)
pdf.set_font("Helvetica", "", 8.5)
pdf.cell(CW, 4.5, "Additional training: Machine Learning Foundations - Andrew Ng (Coursera)", align="L")
pdf.ln(3)
pdf.set_font("Helvetica", "", 8.5)
pdf.cell(CW, 4.5, "High School: 91.2% (Honors)", align="L")
pdf.ln(6)

# ---- EXPERIENCE & PROJECTS ----
section("Experience & Research")
pdf.set_font("Helvetica", "B", 9)
pdf.cell(CW, 5, "Research & Projects", align="L")
pdf.ln(3)
pdf.set_font("Helvetica", "", 8.5)
pdf.multi_cell(CW, 5.0,
    "Co-authored a peer-reviewed research paper on a Reinforcement Learning-based traffic monitoring system optimized "
    "for edge deployment; designed and trained the RL model architecture for real-time traffic analysis under on-device "
    "compute and latency constraints.", align="J")
pdf.ln(2)
pdf.multi_cell(CW, 5.0,
    "Co-developed DG-Hetero-GNN, a domain-generalized heterogeneous graph neural network for cross-domain financial fraud "
    "detection, achieving 0.72 F1-score and 89.6% recall on out-of-distribution data, outperforming XGBoost, GAT, GCN, and "
    "GraphSAGE baselines across 4 real-world datasets (Elliptic, IEEE-CIS, DGraphFin, AMLSim) spanning 3M+ transaction edges; "
    "paper currently under conference review.", align="J")
pdf.ln(2)
pdf.multi_cell(CW, 5.0,
    "Building a hybrid demand-forecasting and deep reinforcement learning system for real-time EV charging price optimization, "
    "achieving pricing decisions within 80% of the theoretical optimum.", align="J")
pdf.ln(3)

pdf.set_font("Helvetica", "B", 9)
pdf.set_text_color(100, 100, 100)
pdf.cell(CW, 5, "Leadership", align="L")
pdf.ln(2)
pdf.set_text_color(0, 0, 0)
pdf.set_font("Helvetica", "", 8.5)
pdf.multi_cell(CW, 5.0,
    "Serving as Tech Lead of HumanoidX club, directing a team on humanoid robotics projects spanning perception, control, "
    "and systems integration.", align="J")
pdf.ln(3)

pdf.set_font("Helvetica", "B", 9)
pdf.set_text_color(100, 100, 100)
pdf.cell(CW, 5, "Experience", align="L")
pdf.ln(2)
pdf.set_text_color(0, 0, 0)
pdf.set_font("Helvetica", "", 8.5)
pdf.multi_cell(CW, 5.0,
    "Machine Learning Intern, BlackVolt Technologies. Built and deployed ML pipelines for production use cases; developed "
    "simulation environments for Autonomous Underwater Vehicles (AUVs) to support model training and validation.", align="J")
pdf.ln(2)
pdf.multi_cell(CW, 5.0,
    "Designed the model architecture for an autonomous swarm-drone minefield navigation system; contributed to SLAM integration "
    "and risk-mapping algorithms for real-time obstacle-aware decision-making.", align="J")
pdf.ln(4)

# ---- TECHNICAL SKILLS ----
section("Technical Skills")
pdf.set_font("Helvetica", "", 8.5)
skills = [
    "Programming Languages: Python, C, C++, Java",
    "Data Analysis & Visualization: NumPy, Pandas, Matplotlib, Seaborn",
    "Machine Learning: Scikit-Learn, TensorFlow, Keras, TensorBoard",
    "Specialized Skills: Supervised & Unsupervised Learning, Reinforcement Learning (currently learning), NLP (currently learning), Computer Vision, Deep Learning, Data Structures and Algorithms",
]
for s in skills:
    pdf.multi_cell(CW, 4.8, s, align="L")
pdf.ln(2)
pdf.set_font("Helvetica", "", 8.5)
pdf.set_text_color(80, 80, 80)
pdf.multi_cell(CW, 4.8, "Soft Skills: Analytical thinking | Problem solving | Logical reasoning | Dedication | Leadership | Communication", align="L")
pdf.ln(2)

output = os.path.join(os.path.dirname(__file__), "public", "Santhosh_V_Resume.pdf")
os.makedirs(os.path.dirname(output), exist_ok=True)
pdf.output(output)
print(f"WROTE: {output} ({os.path.getsize(output)} bytes)")
