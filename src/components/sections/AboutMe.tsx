import { useInView } from "@/hooks/useInView";
import { GraduationCap, Briefcase, Clock } from "lucide-react";
import framelenIcon from "@/assets/framelen-icon.png.asset.json";

export function AboutMe() {
  const { ref, isInView } = useInView();

  return (
    <section id="about-me" className="py-12 md:py-20 px-4 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-neon-pink/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Meet The{" "}
            <span className="bg-gradient-to-r from-neon-orange to-yellow-400 bg-clip-text text-transparent">
              Founder
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-orange to-yellow-400 mx-auto mb-8" />

          <div className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-lg hover:border-neon-orange/40 transition-colors">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="relative w-32 h-32 flex-shrink-0">
                <div className="absolute inset-0 rounded-full border-4 border-neon-orange animate-glow-pulse" />
                <div className="absolute inset-[-4px] rounded-full border-2 border-yellow-400/50 animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
                <img
                  src={framelenIcon.url}
                  alt="Lenin Nagesh — FrameLEN Media"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-neon-orange to-yellow-400 bg-clip-text text-transparent">
                    Lenin Nagesh
                  </span>
                </h3>
                <p className="text-lg text-muted-foreground">
                  Founder · FrameLEN Media & GenLEN
                </p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Studies */}
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg border border-border hover:border-primary/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Studies</h4>
                  <p className="text-muted-foreground text-sm">
                    HNDIT & Multimedia and Graphic Designing
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg border border-border hover:border-primary/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Experience</h4>
                  <p className="text-muted-foreground text-sm">
                    Digital Marketing & Content Creation Intern - YarlITHub
                  </p>
                </div>
              </div>

              {/* Self Learning */}
              <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg border border-border hover:border-primary/30 transition-colors md:col-span-2">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Self Learning</h4>
                  <p className="text-muted-foreground text-sm">
                    5 years of self-learning in this field
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
