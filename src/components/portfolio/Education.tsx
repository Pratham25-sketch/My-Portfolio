import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 px-4">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-8 hover-lift">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="p-4 rounded-xl gradient-bg flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    B.Tech in Electrical and Electronics Engineering
                  </h3>
                  <p className="text-primary font-medium mt-1">
                    International Institute of Information Technology, Bhubaneswar
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>2023 – 2027</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Bhubaneswar, India</span>
                  </div>
                </div>

                {/* CGPA Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">CGPA: 8.24 / 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
