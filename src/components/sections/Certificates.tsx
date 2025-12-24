import { useInView } from "@/hooks/useInView";
import { Palette, Drama, Languages, Cpu } from "lucide-react";

const certificateItems = [
  {
    icon: Palette,
    title: "Art Competition",
    description: "Recognition in artistic excellence",
    year: "Year",
  },
  {
    icon: Drama,
    title: "Drama Competition",
    description: "Achievement in dramatic arts",
    year: "Year",
  },
  {
    icon: Languages,
    title: "English Competition",
    description: "Excellence in English language",
    year: "Year",
  },
  {
    icon: Cpu,
    title: "Tech Workshops",
    description: "Technical skill certifications",
    year: "Year",
  },
];

export function Certificates() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 md:py-32 px-4 bg-secondary/30 relative">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-neon-purple/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Extracurricular <span className="text-primary">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificateItems.map((item, index) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_25px_hsl(270,80%,60%,0.2)] transition-all group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-1">{item.description}</p>
                <p className="text-primary/70 text-sm">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
