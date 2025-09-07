import Hero from "@/components/Hero";
import About from "@/components/About";
import Cybersecurity from "@/components/Cybersecurity";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Cybersecurity />
      <Skills />
      <Projects />
    </div>
  );
};

export default Index;
