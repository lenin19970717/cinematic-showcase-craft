import { useInView } from "@/hooks/useInView";
import {
  Video, Camera, Film, Share2, Megaphone, Clapperboard, Sparkles, Compass, BookOpen,
} from "lucide-react";

const services = [
  { icon: BookOpen, label: "Visual Storytelling" },
  { icon: Video, label: "Videography" },
  { icon: Camera, label: "Photography" },
  { icon: Share2, label: "Social Media Content" },
  { icon: Megaphone, label: "Brand Storytelling" },
  { icon: Clapperboard, label: "Documentary Production" },
  { icon: Sparkles, label: "Creative Design" },
  { icon: Compass, label: "Content Strategy" },
  { icon: Film, label: "Video Editing" },
];

export function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-12 md:py-20 px-4 relative">
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-yellow-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What{" "}
            <span className="bg-gradient-to-r from-neon-orange to-yellow-400 bg-clip-text text-transparent">
              We Do
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-orange to-yellow-400 mx-auto mb-8" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {services.map((s, index) => (
              <div
                key={s.label}
                className="group relative bg-card border border-border rounded-xl p-5 text-center hover:border-neon-orange/50 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,140,0,0.2)] transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-orange/20 to-yellow-500/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <s.icon className="w-5 h-5 text-neon-orange" />
                </div>
                <p className="text-sm font-medium text-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
