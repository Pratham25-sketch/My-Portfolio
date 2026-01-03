import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const StatCard = ({ value, suffix, label, color }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div 
      ref={ref}
      className={`glass-card rounded-xl p-6 text-center hover-lift ${isVisible ? 'animate-count-up' : 'opacity-0'}`}
    >
      <div className={`text-4xl md:text-5xl font-bold ${color}`}>
        {count}{suffix}
      </div>
      <p className="text-muted-foreground mt-2 text-sm md:text-base">{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">results-driven Full Stack Developer</span> specializing 
              in the MERN stack with a passion for building scalable, high-performance web applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise lies in <span className="text-primary">backend optimization</span>, 
              <span className="text-accent"> API performance tuning</span>, secure authentication systems, 
              and designing architectures that scale. I focus on delivering measurable impact through 
              clean code and thoughtful engineering.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing B.Tech at IIIT Bhubaneswar while building products that serve 
              hundreds of users with <span className="text-primary">99% uptime</span> and 
              <span className="text-accent"> sub-200ms response times</span>.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard 
              value={40} 
              suffix="%" 
              label="System Efficiency Improvement" 
              color="text-stat-purple"
            />
            <StatCard 
              value={25} 
              suffix="%" 
              label="User Retention Increase" 
              color="text-stat-blue"
            />
            <StatCard 
              value={500} 
              suffix="+" 
              label="Monthly Active Users" 
              color="text-stat-green"
            />
            <StatCard 
              value={1000} 
              suffix="+" 
              label="Sessions Secured" 
              color="text-stat-orange"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
