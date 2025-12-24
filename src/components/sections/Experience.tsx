import { useInView } from "@/hooks/useInView";
import { Heart, Briefcase, Building2 } from "lucide-react";

const experienceItems = [
  {
    icon: Heart,
    title: "Volunteer Year",
    organization: "Organization Name",
    period: "Year",
    description: "Details about volunteer experience coming soon",
  },
  {
    icon: Briefcase,
    title: "Internship – First",
    organization: "Company Name",
    period: "Duration",
    description: "Details about first internship coming soon",
  },
  {
    icon: Building2,
    title: "Internship – Second",
    organization: "Company Name",
    period: "Duration",
    description: "Details about second internship coming soon",
  },
];

export function Experience() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="py-20 md:py-32 px-4 relative">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-neon-orange/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-6">
            {experienceItems.map((item, index) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-[0_0_20px_hsl(330,90%,55%,0.15)] transition-all group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-primary text-sm mb-1">{item.organization}</p>
                <p className="text-muted-foreground/70 text-sm mb-3">{item.period}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
