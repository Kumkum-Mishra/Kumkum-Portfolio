import { Building2, Sparkles, TrendingUp, Code, Brain, Zap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Freelancing - Upwork",
      logo: "/upwork-logo.png",
      role: "Freelance Machine Learning Engineer",
      period: "September 2025 – December 2025",
      location: "Remote",
      description: [
        {
          icon: TrendingUp,
          title: "Quantitative Trading Model (NIFTY Options Prediction)",
          text: "TCN-based deep learning system for CALL/PUT prediction using 1-year high-frequency market data with GPU-accelerated pipelines.",
          tags: ["Time-Series", "Deep Learning", "Financial ML"],
        },
        {
          icon: Code,
          title: "Automated Program Repair with Quantized LLMs",
          text: "End-to-end LLM-based program repair pipeline for Python and Java with benchmarking, quantization, and energy tracking.",
          tags: ["LLMs", "CodeT5", "Python/Java"],
        },
      ],
    },
    {
      id: 2,
      company: "Birla Institute of Technology and Science, Pilani (BITS Pilani)",
      logo: "/bits-logo.png",
      role: "Research Intern",
      period: "April 2025 – July 2025",
      location: "Remote",
      description: [
        {
          icon: Brain,
          text: "Contributed to the confidential Image Analysis for Indian Driving Environments research project, applying computer vision techniques on real-world driving data to derive insights while strictly adhering to academic research standards and institutional IP policies.",
          highlight: "Image Analysis for Indian Driving Environments research project",
          tags: ["Computer Vision", "Research", "PyTorch"],
        },
      ],
    },
  ];

  return (
    <section className="section-container" id="experience">
      {/* Centered Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 font-['Poppins'] tracking-tight">
          Work Experience
        </h2>
        <p className="text-base md:text-lg text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] font-normal">
          Collaborated with leading institutions and organizations worldwide
        </p>
      </div>

      {/* Experience List - Vertical Stack */}
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className={`bg-[hsl(200,50%,97%)] dark:bg-[hsl(220,40%,12%)] rounded-xl ${exp.company.includes("Upwork") ? "p-3" : "p-5"} border-2 border-[hsl(200,30%,90%)] dark:border-[hsl(210,50%,25%)] shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 w-full`}
          >
            {/* Horizontal Layout - Logo & Info on Left, Description on Right */}
            <div className={`flex ${exp.company.includes("Upwork") ? "gap-3" : "gap-5"} items-start`}>
              {/* Left Side - Organization Info */}
              <div className={`flex-shrink-0 ${exp.company.includes("Upwork") ? "w-[200px]" : "w-[180px]"}`}>
                {/* Logo */}
                <div className="mb-0 flex justify-center">
                  <img
                    src={`${exp.logo}?v=2`}
                    alt={exp.company}
                    className={`${exp.company.includes("Upwork") ? "w-28 h-28" : "w-20 h-20"} object-contain rounded-lg`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className={`${exp.company.includes("Upwork") ? "w-28 h-28" : "w-20 h-20"} bg-[hsl(217,91%,95%)] dark:bg-[hsl(210,70%,20%)] rounded-lg flex items-center justify-center hidden`}>
                    <Building2 className={`${exp.company.includes("Upwork") ? "w-14 h-14" : "w-10 h-10"} text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)]`} />
                  </div>
                </div>

                {/* Company Name */}
                <h3 className="text-base font-bold text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)] mb-1 text-center mt-0">
                  {exp.company.includes("Upwork") ? "Upwork" : exp.company.includes("BITS") ? "BITS Pilani" : exp.company}
                </h3>

                {/* Role */}
                <p className="text-sm text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)] font-medium mb-1 text-center">
                  {exp.role}
                </p>

                {/* Period & Location */}
                <p className="text-xs text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] text-center">
                  {exp.period}
                  <br />
                  <span className="text-[hsl(215,50%,50%)] dark:text-[hsl(210,40%,65%)]">({exp.location})</span>
                </p>
              </div>

              {/* Right Side - Description */}
              <div className={`flex-1 ${exp.company.includes("Upwork") ? "pt-0" : "pt-1"}`}>
                <div className={`${exp.company.includes("Upwork") ? "space-y-2" : "space-y-4"}`}>
                  {exp.description.map((item, itemIndex) => {
                    const Icon = item.icon;
                    return (
                      <div key={itemIndex} className="group">
                        {/* Icon and Text */}
                        <div className="flex items-start gap-3 mb-2">
                          <div className="mt-0.5 flex-shrink-0">
                            <div className="w-8 h-8 rounded-lg bg-[hsl(217,91%,95%)] dark:bg-[hsl(210,70%,20%)] flex items-center justify-center group-hover:bg-[hsl(217,91%,90%)] dark:group-hover:bg-[hsl(210,70%,25%)] transition-colors">
                              <Icon className="w-4 h-4 text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)]" />
                            </div>
                          </div>
                          <div className="flex-1">
                            {item.title && (
                              <h4 className="text-sm font-semibold text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)] mb-1">
                                {item.title}
                              </h4>
                            )}
                            <p className="text-sm text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] leading-relaxed">
                              {item.highlight ? (
                                <>
                                  {item.text.split(item.highlight)[0]}
                                  <span className="font-semibold text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)]">
                                    {item.highlight}
                                  </span>
                                  {item.text.split(item.highlight)[1]}
                                </>
                              ) : (
                                item.text
                              )}
                            </p>
                          </div>
                        </div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 ml-11">
                          {item.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-0.5 text-xs rounded-md bg-[hsl(217,91%,95%)] dark:bg-[hsl(210,70%,20%)] text-[hsl(217,91%,50%)] dark:text-[hsl(210,100%,70%)] border border-[hsl(217,91%,85%)] dark:border-[hsl(210,70%,30%)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
