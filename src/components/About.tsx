const About = () => {
  return (
    <section className="section-container pt-8 pb-4">
      {/* Centered Title - Stylish */}
      <div className="text-center mb-8">
        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 font-['Poppins'] tracking-tight">
          About Me
        </h2>
        
        {/* Subtitle */}
        <p className="text-base md:text-lg text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] font-normal">
          Transforming research into production-ready ML solutions
        </p>
      </div>

      {/* Content with Border */}
      <div className="bg-[hsl(200,50%,97%)] dark:bg-[hsl(220,40%,12%)] rounded-xl p-8 md:p-10 border-2 border-[hsl(200,30%,90%)] dark:border-[hsl(210,50%,25%)] shadow-lg">
        <div className="prose prose-slate max-w-none">
          <p className="text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)] leading-relaxed text-base md:text-lg font-normal mb-6">
            I am a Computer Science undergraduate pursuing a B.Tech at Sharda University, with a strong foundation in machine learning and deep learning and hands-on experience building production-grade ML systems. My work spans large language model (LLM) systems, computer vision, and applied machine learning, with a consistent focus on scalability, efficiency, and real-world deployment.
          </p>
          
          <p className="text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)] leading-relaxed text-base md:text-lg font-normal mb-6">
            Alongside my academic training, I have worked as a freelance machine learning engineer, delivering end-to-end ML solutions for real-world use cases, including time-series modeling and LLM-based program analysis. This industry exposure has strengthened my ability to design robust data pipelines, optimize model performance, and translate research ideas into reliable systems.
          </p>
          
          <p className="text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)] leading-relaxed text-base md:text-lg font-normal">
            I have also contributed to academic research as a research intern at BITS Pilani, where I worked on a confidential computer vision project focused on real-world driving environments, adhering to rigorous research standards and institutional guidelines. Through these experiences, I aim to bridge the gap between theoretical machine learning research and practical, deployable systems, and I am particularly interested in ML systems, LLMs, and efficient AI for real-world applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
