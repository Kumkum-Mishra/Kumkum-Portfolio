import { Award, Trophy, FileText, ExternalLink, Medal, Code2 } from "lucide-react";
import { useState } from "react";

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const achievements = [
    {
      icon: Trophy,
      title: "Cyber Cup 5.0 (Amity University)",
      description: "2nd Runner-Up for an AI carpooling system reducing traffic and carbon emissions.",
      image: "/certificate.jpg",
    },
    {
      icon: Code2,
      title: "Coding & DSA",
      description: "Solved 500+ DSA problems across platforms, including 210 on LeetCode and 206 on CodeStudio.",
      image: "/profile-card.png",
    },
    {
      icon: FileText,
      title: "Recommendation Letter from BITS Pilani",
      description: "Letter of Recommendation from research supervisor at BITS Pilani.",
      pdf: "/letter-of-recommendation.pdf",
    },
  ];

  const openPDF = (pdfPath: string) => {
    window.open(pdfPath, '_blank');
  };

  return (
    <section className="section-container" id="achievements">
      {/* Centered Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 font-['Poppins'] tracking-tight">
          Achievements
        </h2>
        <p className="text-base md:text-lg text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] font-normal">
          Recognitions and accomplishments in my journey
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <div
              key={index}
              className="bg-[hsl(200,50%,97%)] dark:bg-[hsl(220,40%,12%)] rounded-xl p-6 border-2 border-[hsl(200,30%,90%)] dark:border-[hsl(210,50%,25%)] shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                {achievement.pdf ? (
                  <div className="w-14 h-14 rounded-full bg-[hsl(217,91%,95%)] dark:bg-[hsl(210,70%,20%)] flex items-center justify-center border-2 border-[hsl(217,91%,85%)] dark:border-[hsl(210,70%,30%)] p-1.5">
                    <img
                      src="/bits-logo.png"
                      alt="BITS Pilani"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full bg-[hsl(217,91%,95%)] dark:bg-[hsl(210,70%,20%)] flex items-center justify-center border-2 border-[hsl(217,91%,85%)] dark:border-[hsl(210,70%,30%)]">
                    <Icon className="w-7 h-7 text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)]" />
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)] mb-3 text-center leading-tight">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] mb-4 text-center leading-relaxed">
                {achievement.description}
              </p>

              {/* Image or PDF Link */}
              {achievement.image ? (
                <div className="mt-4 p-2 bg-white dark:bg-[hsl(220,40%,12%)] rounded-lg border border-[hsl(200,30%,90%)] dark:border-[hsl(210,50%,25%)]">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedImage(achievement.image || null)}
                  />
                </div>
              ) : achievement.pdf ? (
                <div className="mt-4">
                  <button
                    onClick={() => openPDF(achievement.pdf!)}
                    className="w-full px-4 py-2.5 bg-[hsl(217,91%,60%)] dark:bg-[hsl(210,100%,60%)] hover:bg-[hsl(217,91%,55%)] dark:hover:bg-[hsl(210,100%,55%)] text-white rounded-lg flex items-center justify-center gap-2 transition-colors font-medium"
                  >
                    <FileText className="w-4 h-4" />
                    <span className="text-sm">View Letter of Recommendation</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-[hsl(220,40%,12%)] rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 dark:hover:bg-[hsl(210,50%,20%)] transition-colors"
            >
              <span className="text-2xl text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)]">×</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
