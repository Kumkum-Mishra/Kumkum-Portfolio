import { Award, Brain, BookOpen, GraduationCap, Cloud } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      icon: Brain,
      title: "Machine Learning A-Z with Python",
      source: "Udemy",
      description: "Comprehensive ML course covering supervised learning (regression, classification), unsupervised learning (clustering, dimensionality reduction), model evaluation, cross-validation, hyperparameter tuning, ensemble methods, and deployment best practices using scikit-learn.",
    },
    {
      icon: BookOpen,
      title: "PyTorch Deep Learning Bootcamp",
      source: "Udemy",
      description: "In-depth PyTorch training covering CNNs, RNNs, LSTMs, GRUs, transformer architectures, training loops, backpropagation, and optimization algorithms. Built real-world projects including image classification, NLP tasks, and learned model deployment strategies.",
    },
    {
      icon: GraduationCap,
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      source: "Oracle",
      description: "Introduces fundamental AI and ML concepts with practical application within Oracle Cloud Infrastructure. Covers core AI principles, ML workflows, responsible AI practices, and hands-on experience with OCI AI services. Ideal for beginners entering AI/ML without requiring extensive prior technical experience.",
    },
    {
      icon: Cloud,
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      source: "Oracle",
      description: "Validates expertise in Large Language Models (LLMs) and proficiency with OCI Generative AI Service. Demonstrates understanding of Retrieval-Augmented Generation (RAG), Semantic Search, Vector database management, and LangChain integration. Skilled in building, tracing, evaluating, and deploying production-ready LLM applications.",
    },
  ];

  return (
    <section className="section-container pt-4 pb-8" id="certifications">
      {/* Centered Title - Stylish */}
      <div className="text-center mb-12">
        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 font-['Poppins'] tracking-tight">
          Certifications
        </h2>
        
        {/* Subtitle */}
        <p className="text-base md:text-lg text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] font-normal">
          Recognized training in AI, Machine Learning, Oracle
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => {
          const Icon = cert.icon;
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
              <h4 className="text-lg font-bold text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)] mb-2 text-center">
                {cert.title}
              </h4>

              {/* Source */}
              <p className="text-sm text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)] font-medium mb-3 text-center">
                ({cert.source})
              </p>

              {/* Description */}
              <p className="text-sm text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] leading-relaxed">
                {cert.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
