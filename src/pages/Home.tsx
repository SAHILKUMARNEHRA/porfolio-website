import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import YoutubeSection from "@/components/sections/YoutubeSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 font-sans selection:bg-purple-500/30 selection:text-purple-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <YoutubeSection />
        <Contact />
      </main>
    </div>
  );
}
