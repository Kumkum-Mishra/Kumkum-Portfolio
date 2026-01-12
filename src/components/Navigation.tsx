import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = ["home", "about", "expertise", "skills", "certifications", "experience", "projects", "achievements", "hackathons", "resume", "contact"];
      const scrollPosition = window.scrollY + 150;
      
      // Check if we're at the top (home)
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }
      
      // Check other sections
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#expertise", label: "Expertise", id: "expertise" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#certifications", label: "Certifications", id: "certifications" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#achievements", label: "Achievements", id: "achievements" },
    { href: "#hackathons", label: "Hackathons", id: "hackathons" },
    { href: "#resume", label: "Resume", id: "resume" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[hsl(220,40%,12%)] border-b border-[hsl(200,30%,90%)] dark:border-[hsl(210,50%,20%)] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Full Name */}
        <a 
          href="#" 
          className="text-lg font-bold text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)] hover:opacity-80 transition-opacity"
        >
          Kumkum Mishra
        </a>
        
        <div className="flex items-center gap-3">
          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-medium transition-all relative px-4 py-2 rounded-lg ${
                    isActive
                      ? "bg-[hsl(200,50%,97%)] dark:bg-[hsl(210,50%,20%)] text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)]"
                      : "text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)] hover:bg-[hsl(200,50%,98%)] dark:hover:bg-[hsl(210,50%,18%)]"
                  } hidden md:block`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[hsl(217,91%,60%)] dark:bg-[hsl(210,100%,70%)]"></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Theme Toggle */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 rounded-lg border border-[hsl(217,91%,60%)] dark:border-[hsl(210,100%,70%)] bg-white dark:bg-[hsl(220,40%,12%)] hover:bg-[hsl(200,50%,98%)] dark:hover:bg-[hsl(210,50%,18%)]"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)]" />
              ) : (
                <Moon className="h-4 w-4 text-[hsl(217,91%,60%)]" />
              )}
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
