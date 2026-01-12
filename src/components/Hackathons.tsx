import { Zap, Globe, Award, Trophy } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Hackathons = () => {
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
  const hackathons = [
    {
      icon: Zap,
      title: "Smart India Hackathon (SIH) 2025",
      description: "Advanced to the final round under the Smart and Sustainable Living / Renewable & Sustainable Energy theme for developing the 'Carbon Prompting Playground', a web tool promoting eco-conscious AI usage through prompt optimization and carbon tracking.",
    },
    {
      icon: Globe,
      title: "Cyber Cup 5.0, Amity University",
      description: "Secured 2nd Runner-Up (3rd Position) for building an AI-powered intelligent carpooling system that optimizes routes to reduce traffic congestion and carbon emissions.",
    },
    {
      icon: Award,
      title: "Hacktoberfest 2025",
      description: "Achieved Supercontributor status among the first 10,000 global participants by making 6+ accepted pull requests in open-source projects.",
    },
    {
      icon: Zap,
      title: "GGSIPU USAR Hackathon 2025",
      description: "Participated and showcased the 'Carbon Prompting Playground', a web-based tool designed to promote eco-conscious AI usage through prompt optimization and real-time carbon tracking.",
    },
  ];

  return (
    <section ref={sectionRef} className="section-container" id="hackathons">
      {/* Centered Title */}
      <div className={`text-center mb-12 transition-all duration-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 font-['Poppins'] tracking-tight">
          Hackathons
        </h2>
      </div>

      {/* Hackathons Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hackathons.map((hackathon, index) => {
          const Icon = hackathon.icon;
          return (
            <div
              key={index}
              className={`bg-[hsl(200,50%,97%)] dark:bg-[hsl(220,40%,12%)] rounded-xl p-5 border-2 border-[hsl(200,30%,90%)] dark:border-[hsl(210,50%,25%)] shadow-md hover:shadow-xl transition-all duration-200 hover:scale-[1.05] hover:-translate-y-2 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: `${index * 30}ms`,
              }}
            >
              {/* Icon */}
              <div className="mb-4 transform transition-transform duration-150 hover:scale-110">
                <Icon className="w-6 h-6 text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)]" />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)] mb-3 leading-tight">
                {hackathon.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] leading-relaxed">
                {hackathon.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hackathons;
