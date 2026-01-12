import { Mail, Github, Linkedin, Twitter, MapPin, Clock, Briefcase } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/kumkum-mishra-2442a82b8",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/Kumkum-Mishra",
      label: "GitHub",
    },
    {
      icon: Twitter,
      href: "https://x.com/Kumkum892004",
      label: "Twitter",
    },
    {
      icon: Mail,
      href: "mailto:Kumkummishra892004@gmail.com",
      label: "Email",
    },
    {
      icon: Briefcase,
      href: "https://www.upwork.com/freelancers/~0167e2a1978067b44f",
      label: "Upwork",
    },
  ];

  return (
    <section className="section-container" id="contact">
      {/* Header Section */}
      <div className="text-center mb-12">
        {/* Decorative Line */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-0.5 bg-[hsl(217,91%,60%)] dark:bg-[hsl(210,100%,70%)]"></div>
        </div>
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 font-['Poppins'] tracking-tight">
          Get in Touch
        </h2>
        
        {/* Call to Action Text */}
        <p className="text-base md:text-lg text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] font-normal max-w-2xl mx-auto">
          Ready to collaborate on innovative projects or discuss research opportunities? Let's connect!
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mb-12">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-[hsl(217,91%,60%)] dark:border-[hsl(210,100%,70%)] flex items-center justify-center text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)] hover:bg-[hsl(217,91%,60%)] dark:hover:bg-[hsl(210,100%,70%)] hover:text-white transition-all duration-300 hover:scale-110"
              aria-label={link.label}
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>

      {/* Collaboration Statement Card */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="bg-[hsl(200,50%,97%)] dark:bg-[hsl(220,40%,12%)] rounded-xl p-8 border-2 border-[hsl(217,91%,85%)] dark:border-[hsl(210,70%,30%)] shadow-md">
          <h3 className="text-2xl font-bold text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)] mb-4 text-center">
            Let's Collaborate
          </h3>
          <p className="text-base text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] text-center leading-relaxed">
            I'm open to collaborating on AI research, ML engineering projects, and cross-disciplinary work. Let's connect and explore how we can work together to create something meaningful.
          </p>
        </div>
      </div>

      {/* Information Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Email Card */}
        <div className="bg-[hsl(200,50%,97%)] dark:bg-[hsl(220,40%,12%)] rounded-xl p-6 border-2 border-[hsl(200,30%,90%)] dark:border-[hsl(210,50%,25%)] shadow-md hover:shadow-xl transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[hsl(217,91%,95%)] dark:bg-[hsl(210,70%,20%)] flex items-center justify-center border-2 border-[hsl(217,91%,85%)] dark:border-[hsl(210,70%,30%)] flex-shrink-0">
              <Mail className="w-6 h-6 text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)] mb-1">
                Email
              </h4>
              <a
                href="mailto:Kumkummishra892004@gmail.com"
                className="text-sm text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)] hover:text-[hsl(217,91%,60%)] dark:hover:text-[hsl(210,100%,70%)] transition-colors break-all"
              >
                Kumkummishra892004@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="bg-[hsl(200,50%,97%)] dark:bg-[hsl(220,40%,12%)] rounded-xl p-6 border-2 border-[hsl(200,30%,90%)] dark:border-[hsl(210,50%,25%)] shadow-md hover:shadow-xl transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[hsl(217,91%,95%)] dark:bg-[hsl(210,70%,20%)] flex items-center justify-center border-2 border-[hsl(217,91%,85%)] dark:border-[hsl(210,70%,30%)] flex-shrink-0">
              <MapPin className="w-6 h-6 text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)] mb-1">
                Location
              </h4>
              <p className="text-sm text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)]">
                India
              </p>
            </div>
          </div>
        </div>

        {/* Response Time Card */}
        <div className="bg-[hsl(200,50%,97%)] dark:bg-[hsl(220,40%,12%)] rounded-xl p-6 border-2 border-[hsl(200,30%,90%)] dark:border-[hsl(210,50%,25%)] shadow-md hover:shadow-xl transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[hsl(217,91%,95%)] dark:bg-[hsl(210,70%,20%)] flex items-center justify-center border-2 border-[hsl(217,91%,85%)] dark:border-[hsl(210,70%,30%)] flex-shrink-0">
              <Clock className="w-6 h-6 text-[hsl(217,91%,60%)] dark:text-[hsl(210,100%,70%)]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[hsl(215,75%,20%)] dark:text-[hsl(210,40%,85%)] mb-1">
                Response Time
              </h4>
              <p className="text-sm text-[hsl(215,50%,40%)] dark:text-[hsl(210,40%,75%)]">
                Usually within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
