import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Achievements from "@/components/Achievements";
import Hackathons from "@/components/Hackathons";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(200,50%,95%)] dark:bg-[hsl(220,40%,12%)]">
      <Navigation />
      <main>
        <div id="home" className="relative">
          <Hero />
          <CTABanner />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="expertise">
          <Expertise />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="research">
          <Research />
        </div>
        <div id="achievements">
          <Achievements />
        </div>
        <div id="hackathons">
          <Hackathons />
        </div>
        <div id="resume">
          <Resume />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <footer className="max-w-3xl mx-auto px-6 py-8 border-t border-[hsl(var(--divider))]">
        <p className="text-xs text-muted-foreground text-center">
          © 2025 Kumkum Mishra. Built with precision.
        </p>
      </footer>
    </div>
  );
};

export default Index;
