import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container max-w-4xl text-center">
        <div className="space-y-6 animate-fade-up">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-muted-foreground">Available for Internships & Full-Time Roles</span>
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Pratham Pratap{" "}
            <span className="gradient-text">Singh</span>
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            Full Stack Developer • MERN Specialist
          </h2>
          
          {/* Recruiter-focused Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build <span className="text-primary font-semibold">production-ready applications</span> that 
            scale. Shipped systems handling <span className="text-accent font-semibold">500+ users</span>, 
            achieved <span className="text-accent font-semibold">40% efficiency gains</span>, and 
            maintained <span className="text-primary font-semibold">99% uptime</span>. 
            Ready to contribute from <span className="text-primary font-semibold">day one</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button 
              size="lg" 
              className="gradient-bg hover:opacity-90 transition-opacity text-base px-6"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gradient-bg hover:opacity-90 transition-opacity text-base px-6"
              onClick={() => scrollToSection("experience")}
            >
              View Experience
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gradient-bg hover:opacity-90 transition-opacity text-base px-6"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-6">
            <a 
              href="https://www.linkedin.com/in/pratham-pratap-singh-1b1b73246/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
           <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=b323025@iiit-bh.ac.in"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
>
  <Mail className="w-5 h-5" />
</a>

          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
