import { useState } from "react";
import { 
  Code, 
  Brain, 
  Network, 
  Database, 
  Layers, 
  Workflow, 
  BarChart3, 
  Wrench, 
  BookOpen, 
  FileText, 
  Users 
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      id: "programming",
      name: "Programming Languages",
      icon: Code,
      skills: ["Python", "C++", "SQL"],
    },
    {
      id: "ml",
      name: "Machine Learning",
      icon: Brain,
      skills: [
        "Data preprocessing",
        "Feature engineering",
        "Predictive modeling",
        "Model evaluation",
        "Hyperparameter tuning",
      ],
    },
    {
      id: "dl",
      name: "Deep Learning",
      icon: Network,
      skills: [
        "Neural networks",
        "Transformers",
        "Time-series modeling",
        "Computer vision fundamentals",
      ],
    },
    {
      id: "llm",
      name: "Large Language Models",
      icon: Database,
      skills: [
        "LLM pipelines",
        "Quantized models",
        "Prompt workflows",
        "Evaluation and benchmarking",
      ],
    },
    {
      id: "frameworks",
      name: "Frameworks & Libraries",
      icon: Layers,
      skills: [
        "PyTorch",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Streamlit",
        "Flask",
      ],
    },
    {
      id: "ml-systems",
      name: "ML Systems & Pipelines",
      icon: Workflow,
      skills: [
        "End-to-end pipelines for training",
        "Inference",
        "Performance optimization",
        "Deployment",
      ],
    },
    {
      id: "data",
      name: "Data & Analytics",
      icon: BarChart3,
      skills: [
        "Data cleaning",
        "Exploratory data analysis",
        "Statistical analysis",
        "Experiment tracking",
      ],
    },
    {
      id: "tools",
      name: "Tools & Platforms",
      icon: Wrench,
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Jupyter Notebook",
        "Google Colab",
        "Kaggle",
        "MySQL",
        "SQLite",
      ],
    },
    {
      id: "dev",
      name: "Software Development",
      icon: BookOpen,
      skills: [
        "Modular code design",
        "API development",
        "Debugging",
        "Version control workflows",
      ],
    },
    {
      id: "research",
      name: "Research Skills",
      icon: FileText,
      skills: [
        "Literature review",
        "Experimental design",
        "Benchmarking",
        "Reproducibility",
      ],
    },
    {
      id: "writing",
      name: "Technical Writing",
      icon: FileText,
      skills: [
        "Clear documentation",
        "Research-style reporting",
        "Structured technical communication",
      ],
    },
    {
      id: "soft",
      name: "Soft Skills",
      icon: Users,
      skills: [
        "Technical communication",
        "Ownership",
        "Deadline-driven execution",
      ],
    },
  ];

  const selectedCategoryData = skillCategories.find(
    (cat) => cat.id === selectedCategory
  );

  return (
    <section className="section-container pt-4" id="skills">
      {/* Centered Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 font-['Poppins'] tracking-tight">
          Skills
        </h2>
        <p className="text-base md:text-lg text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] font-normal">
          Technical toolkit for building scalable ML systems
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="bg-[hsl(200,50%,97%)] dark:bg-[hsl(220,40%,12%)] rounded-xl p-6 border-2 border-[hsl(200,30%,90%)] dark:border-[hsl(210,50%,25%)] shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-[hsl(217,91%,60%)] dark:hover:border-[hsl(210,100%,70%)] text-left group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-lg bg-[hsl(217,91%,95%)] dark:bg-[hsl(210,70%,20%)] flex items-center justify-center group-hover:bg-[hsl(217,91%,90%)] dark:group-hover:bg-[hsl(210,70%,25%)] transition-colors">
                  <Icon className="w-6 h-6 text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)]" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)] text-center leading-tight">
                {category.name}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Modal Dialog */}
      <Dialog open={selectedCategory !== null} onOpenChange={(open) => !open && setSelectedCategory(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              {selectedCategoryData && (
                <>
                  {(() => {
                    const Icon = selectedCategoryData.icon;
                    return <Icon className="w-5 h-5 text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)]" />;
                  })()}
                  {selectedCategoryData.name}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          
          {selectedCategoryData && (
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedCategoryData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 rounded-lg bg-[hsl(200,50%,97%)] dark:bg-[hsl(210,50%,18%)] text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)] text-sm font-medium border border-[hsl(200,30%,85%)] dark:border-[hsl(210,50%,25%)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Skills;
