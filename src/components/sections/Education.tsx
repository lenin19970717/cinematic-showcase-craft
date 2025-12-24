import { useInView } from "@/hooks/useInView";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const educationItems = [
  {
    icon: BookOpen,
    title: "O/L",
    description: "Ordinary Level Examination",
    detail: "Details coming soon",
  },
  {
    icon: GraduationCap,
    title: "A/L",
    description: "Advanced Level Examination",
    detail: "Details coming soon",
  },
  {
    icon: Award,
    title: "Higher Studies",
    description: "Pursuing further education",
    detail: "Details coming soon",
  },
];

export function Education() {
  const { ref, isInView } = useInView();

  return (
    <section id="education" className="py-20 md:py-32 px-4 bg-secondary/30 relative">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-neon-pink/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Educational <span className="text-primary">Qualifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-6">
            {educationItems.map((item, index) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(270,80%,60%,0.15)] transition-all group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-2">{item.description}</p>
                <p className="text-sm text-muted-foreground/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
