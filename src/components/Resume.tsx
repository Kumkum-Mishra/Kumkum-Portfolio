import { Bot, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const resume = {
    icon: Bot,
    title: "Artificial Intelligence",
    subtitle: "AI Resume",
    description: "A resume focused on AI research, engineering, and projects.",
    points: [
      "AI research at BITS Pilani.",
      "ML pipeline development at Upwork.",
      "Deep learning, NLP, and computer vision projects.",
    ],
    pdf: "/resume.pdf",
  };

  const handleView = () => {
    window.open(resume.pdf, '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume.pdf;
    link.download = 'Kumkum_Mishra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const Icon = resume.icon;

  return (
    <section className="section-container" id="resume">
      {/* Centered Title */}
      <div className="text-center mb-12">
        <div className="relative inline-block mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white font-['Poppins'] tracking-tight">
            Resume
          </h2>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[hsl(217,91%,60%)] dark:bg-[hsl(210,100%,70%)] mt-2"></div>
        </div>
        <p className="text-base md:text-lg text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] font-normal mt-6">
          Tailored resume highlighting my professional journey
        </p>
      </div>

      {/* Resume Card */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-[hsl(200,50%,97%)] dark:bg-[hsl(220,40%,12%)] rounded-xl p-8 border-2 border-[hsl(200,30%,90%)] dark:border-[hsl(210,50%,25%)] shadow-md hover:shadow-xl transition-all duration-300">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-[hsl(217,91%,95%)] dark:bg-[hsl(210,70%,20%)] flex items-center justify-center border-2 border-[hsl(217,91%,85%)] dark:border-[hsl(210,70%,30%)]">
              <Icon className="w-10 h-10 text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)]" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)] mb-2 text-center">
            {resume.title}
          </h3>

          {/* Subtitle */}
          <p className="text-lg font-semibold text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)] mb-4 text-center">
            {resume.subtitle}
          </p>

          {/* Description */}
          <p className="text-base text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] mb-6 text-center">
            {resume.description}
          </p>

          {/* Bullet Points */}
          <ul className="space-y-2 mb-8">
            {resume.points.map((point, index) => (
              <li
                key={index}
                className="text-sm text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] flex items-start gap-2"
              >
                <span className="text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)] mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Button
              onClick={handleView}
              variant="outline"
              className="flex items-center gap-2 border-2 border-[hsl(217,91%,60%)] dark:border-[hsl(210,100%,70%)] text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)] hover:bg-[hsl(217,91%,95%)] dark:hover:bg-[hsl(210,70%,20%)] bg-white dark:bg-[hsl(220,40%,12%)]"
            >
              <Eye className="w-4 h-4" />
              View
            </Button>
            <Button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-[hsl(217,91%,60%)] dark:bg-[hsl(210,100%,60%)] hover:bg-[hsl(217,91%,55%)] dark:hover:bg-[hsl(210,100%,55%)] text-white"
            >
              <Download className="w-4 h-4" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
