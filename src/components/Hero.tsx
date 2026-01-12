import { Mail, Github, Linkedin, FileText, Rocket, Coffee, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-12 px-6 relative bg-gradient-to-br from-[hsl(210,55%,93%)] via-[hsl(215,50%,92%)] to-[hsl(210,55%,93%)] dark:from-[hsl(220,45%,10%)] dark:via-[hsl(215,50%,12%)] dark:to-[hsl(220,45%,10%)]">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Tag Badge - Reference Style */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(217,91%,95%)] dark:bg-[hsl(210,70%,20%)] text-[hsl(217,91%,50%)] dark:text-[hsl(210,100%,70%)] text-sm font-medium border border-[hsl(217,91%,85%)] dark:border-[hsl(210,70%,30%)]">
              <span className="w-2 h-2 rounded-full bg-[hsl(217,91%,60%)] dark:bg-[hsl(210,100%,65%)]"></span>
              AIML Engineer & Researcher
            </div>

            {/* Name - Reference Style */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)] tracking-tight leading-tight">
              Kumkum Mishra
            </h1>

            {/* Role - Reference Style */}
            <p className="text-xl md:text-2xl text-[hsl(215,75%,25%)] dark:text-[hsl(210,80%,75%)] font-medium">
              AIML Engineer & Researcher
            </p>

            {/* Description - Blueish */}
            <p className="text-base md:text-lg text-[hsl(217,70%,35%)] dark:text-[hsl(210,60%,75%)] leading-relaxed max-w-2xl">
              I'm a 3rd Year B.Tech CSE Student specializing in Machine Learning and Deep Learning. 
              Building scalable ML systems at the intersection of deep learning, computer vision, 
              and large language models. Focused on applied research with production-grade implementations.
            </p>

            {/* CTA Buttons - Reference Style */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                size="lg" 
                className="group bg-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,55%)] text-white"
                onClick={() => {
                  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Rocket className="w-4 h-4" />
                Explore My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="group bg-white border-[hsl(217,91%,60%)] text-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,95%)]"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Coffee className="w-4 h-4" />
                Let's Connect
              </Button>
            </div>

            {/* Social Icons - Reference Style */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://linkedin.com/in/kumkum-mishra-2442a82b8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[hsl(215,75%,20%)] hover:text-[hsl(217,91%,60%)] transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Kumkum-Mishra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[hsl(215,75%,20%)] hover:text-[hsl(217,91%,60%)] transition-colors shadow-sm"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Kumkum892004"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[hsl(215,75%,20%)] hover:text-[hsl(217,91%,60%)] transition-colors shadow-sm"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:Kumkummishra892004@gmail.com"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[hsl(215,75%,20%)] hover:text-[hsl(217,91%,60%)] transition-colors shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Picture - Circular with Animation */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md flex justify-center">
              {/* Circular Profile Picture - Floating Animation */}
              <div className="relative animate-float">
                <img 
                  src="/profile-photo.png" 
                  alt="Kumkum Mishra" 
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-[hsl(217,70%,75%)] dark:border-[hsl(210,70%,80%)] animate-pulse-glow"
                />
              </div>

              {/* Decorative Dots - Animated */}
              <div className="absolute top-8 -right-2 w-4 h-4 rounded-full bg-[hsl(217,91%,60%)] opacity-60 animate-float-slow"></div>
              <div className="absolute bottom-8 -left-2 w-6 h-6 rounded-full bg-[hsl(217,91%,60%)] opacity-40 animate-float-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
