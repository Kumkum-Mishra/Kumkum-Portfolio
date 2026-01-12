import { Brain, Network, Eye, Leaf } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Research = () => {
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

  const interests = [
    {
      icon: Network,
      area: "Machine Learning Systems",
      description: "Efficient training and inference pipelines, model optimization, and deployment at scale",
    },
    {
      icon: Brain,
      area: "Large Language Models",
      description: "Fine-tuning, quantization, and application of LLMs for code generation and automated reasoning",
    },
    {
      icon: Eye,
      area: "Computer Vision for Real-World Environments",
      description: "Semantic segmentation and scene understanding for autonomous systems",
    },
    {
      icon: Leaf,
      area: "Sustainable and Energy-Efficient AI",
      description: "Developing ML systems with reduced computational footprint and environmental impact",
    },
  ];

  return (
    <section ref={sectionRef} className="section-container" id="research">
      {/* Centered Title */}
      <div className={`text-center mb-12 transition-all duration-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 font-['Poppins'] tracking-tight">
          Research Interests
        </h2>
        <p className="text-base md:text-lg text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] font-normal">
          Areas of focus in AI and machine learning research
        </p>
      </div>

      {/* Research Interests Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {interests.map((interest, index) => {
          const Icon = interest.icon;
          return (
            <div
              key={index}
              className={`bg-[hsl(200,50%,97%)] dark:bg-[hsl(220,40%,12%)] rounded-xl p-6 border-2 border-[hsl(200,30%,90%)] dark:border-[hsl(210,50%,25%)] shadow-md hover:shadow-xl transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: `${index * 30}ms`,
              }}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-[hsl(217,91%,95%)] dark:bg-[hsl(210,70%,20%)] flex items-center justify-center border-2 border-[hsl(217,91%,85%)] dark:border-[hsl(210,70%,30%)]">
                  <Icon className="w-6 h-6 text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)]" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)] mb-3 leading-tight">
                {interest.area}
              </h3>

              {/* Description */}
              <p className="text-sm text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] leading-relaxed">
                {interest.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Research;
