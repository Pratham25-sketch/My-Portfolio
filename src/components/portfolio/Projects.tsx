import { ExternalLink, Github, TrendingUp, Shield, Zap, Users, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MetricProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const Metric = ({ icon, value, label }: MetricProps) => (
  <div className="flex items-center gap-2 text-sm">
    <div className="text-primary">{icon}</div>
    <span className="font-semibold text-foreground">{value}</span>
    <span className="text-muted-foreground">{label}</span>
  </div>
);

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  metrics: { icon: React.ReactNode; value: string; label: string }[];
  githubUrl?: string;
}

const ProjectCard = ({ title, subtitle, description, techStack, metrics, githubUrl }: ProjectCardProps) => {
  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 hover-lift">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h3 className="text-2xl font-bold gradient-text">{title}</h3>
          <p className="text-muted-foreground mt-1">{subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-border">
          {metrics.map((metric, index) => (
            <Metric key={index} {...metric} />
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4">
          {githubUrl ? (
            <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </Button>
          ) : (
            <Button variant="outline" className="border-primary/50 hover:bg-primary/10" disabled>
              <Github className="w-4 h-4 mr-2" />
              Coming Soon
            </Button>
          )}
          <Button variant="ghost" className="text-muted-foreground" disabled>
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Forever Beater",
      subtitle: "AI Heart Wellness Platform",
      description: "A comprehensive health monitoring platform powered by AI, featuring real-time analytics dashboards, secure authentication, and personalized insights using OpenAI integration.",
      techStack: ["React", "Node.js", "MongoDB", "Clerk", "OpenAI"],
      metrics: [
        { icon: <TrendingUp className="w-4 h-4" />, value: "5+", label: "Analytical Dashboards" },
        { icon: <Zap className="w-4 h-4" />, value: "60%", label: "Less Manual Data Entry" },
        { icon: <TrendingUp className="w-4 h-4" />, value: "35%", label: "Data Accuracy Boost" },
        { icon: <Shield className="w-4 h-4" />, value: "1000+", label: "Secured Sessions" },
        { icon: <Clock className="w-4 h-4" />, value: "200ms", label: "API Response Time" },
        { icon: <Zap className="w-4 h-4" />, value: "99%", label: "Uptime" },
        { icon: <Users className="w-4 h-4" />, value: "40%", label: "Engagement via AI" },
        { icon: <Shield className="w-4 h-4" />, value: "Auth", label: "Production Stable" },
      ],
    },
    {
      title: "Vacation Rental Platform",
      subtitle: "Full-Stack Booking System",
      description: "A scalable vacation rental marketplace with advanced search optimization, secure payment processing, and a robust review system supporting hundreds of concurrent users.",
      techStack: ["JavaScript", "Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
      metrics: [
        { icon: <Users className="w-4 h-4" />, value: "50+", label: "Active Listings" },
        { icon: <TrendingUp className="w-4 h-4" />, value: "95%", label: "Booking Success Rate" },
        { icon: <Shield className="w-4 h-4" />, value: "<0.2%", label: "Payment Failures" },
        { icon: <Star className="w-4 h-4" />, value: "200+", label: "Reviews (4.5+ Rating)" },
        { icon: <Zap className="w-4 h-4" />, value: "3s→400ms", label: "Search Optimization" },
        { icon: <Users className="w-4 h-4" />, value: "500+", label: "Concurrent Users" },
        { icon: <TrendingUp className="w-4 h-4" />, value: "30%", label: "UI Responsiveness" },
        { icon: <Clock className="w-4 h-4" />, value: "NoSQL", label: "Scalable Schema" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Production-ready applications with measurable impact, built with modern technologies and best practices.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
