import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl px-4 animate-in fade-in slide-in-from-bottom duration-500">
      <div className="bg-white/2 dark:bg-[hsl(210,50%,18%)]/2 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-[hsl(200,30%,90%)]/5 dark:border-[hsl(210,50%,25%)]/5 relative">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/* Left Side - Icon and Text */}
          <div className="flex items-center gap-3 flex-1 min-w-[200px]">
            <div className="flex-shrink-0">
              <Send className="w-5 h-5 text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)] animate-arrow-bounce" />
            </div>
            <p className="text-sm md:text-base font-medium text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)]">
              Let's build something great together!
            </p>
          </div>

          {/* Right Side - Button */}
          <div className="flex-shrink-0">
            <Button
              size="default"
              onClick={scrollToContact}
              className="bg-[hsl(217,91%,60%)] dark:bg-[hsl(210,100%,60%)] hover:bg-[hsl(217,91%,55%)] dark:hover:bg-[hsl(210,100%,55%)] text-white shadow-md hover:shadow-lg transition-all text-sm px-4"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
