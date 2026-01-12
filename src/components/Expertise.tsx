import { Brain, Network, Bot, Workflow, Database, FlaskConical } from "lucide-react";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "End-to-end ML system development from data to deployment",
    },
    {
      icon: Network,
      title: "Deep Learning",
      description: "Neural network design for real-world learning tasks and modeling",
    },
    {
      icon: Database,
      title: "Large Language Models (LLMs)",
      description: "Transformer-based systems for program analysis and automation",
    },
    {
      icon: Bot,
      title: "Agentic AI",
      description: "LLM-driven agents for task execution and decision workflows",
    },
    {
      icon: Workflow,
      title: "ML Systems & Pipelines",
      description: "Scalable pipelines for training, inference, and optimization",
    },
    {
      icon: FlaskConical,
      title: "Research",
      description: "Systematic experimentation, evaluation, and technical inquiry",
    },
  ];

  return (
    <section className="section-container pt-4 pb-4" id="expertise">
      {/* Centered Title - Stylish */}
      <div className="text-center mb-12">
        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 font-['Poppins'] tracking-tight">
          Expertise
        </h2>
        
        {/* Subtitle */}
        <p className="text-base md:text-lg text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] font-normal">
          Core domains where I build and innovate
        </p>
      </div>

      {/* Expertise Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseAreas.map((area, index) => {
          const Icon = area.icon;
          return (
            <div
              key={index}
              className="bg-[hsl(200,50%,97%)] dark:bg-[hsl(220,40%,12%)] rounded-xl p-6 border-2 border-[hsl(200,30%,90%)] dark:border-[hsl(210,50%,25%)] shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-[hsl(217,91%,60%)] dark:hover:border-[hsl(210,100%,70%)]"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[hsl(217,91%,95%)] dark:bg-[hsl(210,70%,20%)] flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)]" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)] mb-2 text-center">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] text-center leading-relaxed">
                {area.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Expertise;
