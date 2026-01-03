import { Code, Database, Wrench, Zap } from "lucide-react";

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  delay: number;
}

const SkillCategory = ({ icon, title, skills, delay }: SkillCategoryProps) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 hover-lift"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg gradient-bg">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="px-3 py-1.5 text-sm bg-secondary rounded-full text-secondary-foreground hover:bg-primary/20 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-5 h-5 text-primary-foreground" />,
      title: "Languages",
      skills: ["C", "C++", "JavaScript", "HTML5", "CSS3"],
    },
    {
      icon: <Zap className="w-5 h-5 text-primary-foreground" />,
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express.js", "EJS", "Bootstrap"],
    },
    {
      icon: <Database className="w-5 h-5 text-primary-foreground" />,
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
    {
      icon: <Wrench className="w-5 h-5 text-primary-foreground" />,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Render", "MongoDB Atlas"],
    },
  ];

  const coreCompetencies = [
    "REST APIs",
    "Authentication & Authorization",
    "Performance Optimization",
    "CRUD Systems",
    "Scalable Architecture",
    "Database Design",
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={category.title}
              {...category}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Core Competencies */}
        <div className="glass-card rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-center">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {coreCompetencies.map((competency) => (
              <span 
                key={competency}
                className="px-4 py-2 text-sm border border-primary/30 rounded-full hover:bg-primary/10 hover:border-primary transition-all cursor-default"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
