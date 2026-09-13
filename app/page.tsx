import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Mindset } from "@/components/Mindset";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Leadership } from "@/components/Leadership";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="content" className="relative">
        <Hero />
        <About />
        <Mindset />
        <Projects />
        <Experience />
        <Skills />
        <Leadership />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
