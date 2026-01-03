import { Briefcase, Calendar, TrendingUp, Zap, BarChart } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline Item */}
          <div className="relative pl-8 border-l-2 border-primary/30">
            {/* Timeline Dot */}
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full gradient-bg flex items-center justify-center">
              <Briefcase className="w-3 h-3 text-primary-foreground" />
            </div>

            {/* Content Card */}
            <div className="glass-card rounded-xl p-6 hover-lift">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold">Product Management Virtual Experience</h3>
                  <p className="text-primary font-medium">EA Sports (Forage)</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>Aug 2025</span>
                  <span className="px-2 py-0.5 bg-accent/10 text-accent rounded-full text-xs">Remote</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                Gained hands-on experience in product thinking and data-driven decision making through 
                real-world simulations in the gaming industry.
              </p>

              {/* Achievements */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-primary/10 mt-0.5">
                    <BarChart className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">KPI Analysis & Strategy</p>
                    <p className="text-sm text-muted-foreground">Analyzed key performance indicators to drive product decisions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-accent/10 mt-0.5">
                    <TrendingUp className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">30% Milestone Tracking Improvement</p>
                    <p className="text-sm text-muted-foreground">Enhanced project milestone tracking and execution</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-stat-green/10 mt-0.5">
                    <Zap className="w-4 h-4 text-stat-green" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">25% Faster Decision-Making</p>
                    <p className="text-sm text-muted-foreground">Delivered data-driven presentations for rapid product decisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
