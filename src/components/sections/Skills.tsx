import { useInView } from "@/hooks/useInView";
import {
  Video,
  Camera,
  Film,
  Pencil,
  Clapperboard,
  Sparkles,
  Play,
  Mic,
  Share2,
} from "lucide-react";

const skills = [
  { icon: Video, label: "Videography", color: "primary" },
  { icon: Camera, label: "Photography", color: "accent" },
  { icon: Film, label: "Video Editing", color: "primary" },
  { icon: Share2, label: "Content Creation", color: "accent" },
  { icon: Pencil, label: "Drawing & Art", color: "primary" },
  { icon: Clapperboard, label: "Film Making", color: "accent" },
  { icon: Sparkles, label: "AI Image Creation", color: "primary" },
  { icon: Play, label: "AI Video Creation", color: "accent" },
  { icon: Mic, label: "Stage Performance", color: "primary" },
];

export function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-20 md:py-32 px-4 relative">
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-neon-pink/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mb-12" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.label}
                className="bg-card border border-border rounded-lg p-3 md:p-4 text-center hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_20px_hsl(270,80%,60%,0.2)] transition-all duration-300 group cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div
                  className={`w-6 h-6 md:w-8 md:h-8 rounded-md ${
                    skill.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                  } flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon
                    className={`w-3 h-3 md:w-4 md:h-4 ${
                      skill.color === "primary" ? "text-primary" : "text-accent"
                    }`}
                  />
                </div>
                <p className="text-xs md:text-sm text-foreground font-medium">{skill.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
