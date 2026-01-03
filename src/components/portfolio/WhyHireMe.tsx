import { Rocket, Code2, Users, Zap, CheckCircle2, Target } from "lucide-react";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const WhyHireMe = () => {
  const reasons = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Ship Fast, Ship Right",
      description: "I've built and deployed production apps with 99% uptime and 200ms response times. I understand the urgency of startup velocity without compromising quality.",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full Stack Capable",
      description: "From React frontends to Node.js backends, MongoDB schemas to REST APIs—I own the entire stack. One developer, end-to-end delivery.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Obsessed",
      description: "Reduced search latency from 3s to 400ms. Improved system efficiency by 40%. I don't just make things work—I make them fast.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Built for Scale",
      description: "Designed systems handling 500+ concurrent users and 1000+ secure sessions. I think in terms of growth from day one.",
    },
  ];

  const highlights = [
    "Production experience with real users",
    "Strong problem-solving mindset",
    "Clear communication & documentation",
    "Quick learner, adaptable to new tech",
    "Passionate about clean, maintainable code",
    "Available immediately for opportunities",
  ];

  return (
    <section id="why-hire-me" className="py-24 px-4">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="gradient-text">Hire Me</span>?
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Not just another developer—I bring measurable impact, startup mindset, and a track record of shipping real products.
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Highlights */}
        <div className="glass-card rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">What You Get</h3>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-sm text-muted-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to bring value to your team?
          </p>
        <button
  type="button"
  onClick={() => scrollToSection("contact")}
  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity"
>
  Let's Talk
</button>

        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
