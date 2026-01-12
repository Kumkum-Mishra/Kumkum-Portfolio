import { ExternalLink } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      name: "NeuroDigest",
      tagline: "Personalized Learning & Content Digest System",
      description:
        "Built a full-stack personalized digest and learning assistant that aggregates Hacker News, Reddit, and RSS feeds, converts user engagement into a compact user knowledge profile (UKP), and generates weekly LLM-powered learning roadmaps with role-specific plans and AI-graded practice, processing 30+ news items weekly. Improved system usability and reliability through session-state caching, safe Streamlit reruns, defensive schema handling, and routing fixes to deliver a stable, responsive end-to-end learning workflow.",
      tech: ["FastAPI", "Streamlit", "SQLite", "Docker", "Groq/Ollama"],
      link: "#",
    },
    {
      name: "ShareWay",
      tagline: "AI-Powered Smart Carpooling Platform",
      description:
        "Accomplished an AI-powered carpooling platform enabling users to book or offer rides through intelligent route and time matching. Integrated secure Aadhaar-based identity verification, in-app payments, and dual driver–passenger modes. Designed a reward system offering cashback and points for rides and a CO2 impact tracker to promote eco-friendly commuting and reduce carbon emissions in urban areas.",
      tech: ["AI Route Matching", "e-KYC Integration", "Impact Analytics"],
      link: "#",
    },
  ];

  return (
    <section ref={sectionRef} className="section-container" id="projects">
      {/* Centered Title */}
      <div className={`text-center mb-12 transition-all duration-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 font-['Poppins'] tracking-tight">
          Projects
        </h2>
        <p className="text-base md:text-lg text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] font-normal">
          Innovative solutions built with cutting-edge technology
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-[hsl(200,50%,97%)] dark:bg-[hsl(220,40%,12%)] rounded-xl p-6 border-2 border-[hsl(200,30%,90%)] dark:border-[hsl(210,50%,25%)] shadow-md hover:shadow-xl transition-all duration-200 hover:scale-[1.01] ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionDelay: `${index * 30}ms`,
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-4 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)] mb-1 font-['Poppins']">
                      {project.name}
                    </h3>
                    <p className="text-sm font-medium text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)] mb-3">
                      {project.tagline}
                    </p>
                  </div>
                  <a
                    href={project.link}
                    className="text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] hover:text-[hsl(217,91%,60%)] dark:hover:text-[hsl(210,100%,70%)] transition-colors shrink-0 p-2 hover:bg-[hsl(217,91%,95%)] dark:hover:bg-[hsl(210,70%,20%)] rounded-lg"
                    aria-label={`View ${project.name}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-base text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)] bg-[hsl(217,91%,95%)] dark:bg-[hsl(210,70%,20%)] px-3 py-1.5 rounded-full border border-[hsl(217,91%,85%)] dark:border-[hsl(210,70%,30%)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
