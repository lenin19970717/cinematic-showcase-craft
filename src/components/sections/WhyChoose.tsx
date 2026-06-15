import { useInView } from "@/hooks/useInView";
import { Film, Smartphone, Wallet, Award, Lightbulb, Heart } from "lucide-react";

const points = [
  { icon: Film, title: "Story-Driven Approach", desc: "Every frame serves a narrative — built to move, not just look good." },
  { icon: Smartphone, title: "Mobile-First Production", desc: "Optimized for the platforms where your audience actually watches." },
  { icon: Wallet, title: "Budget-Friendly Solutions", desc: "Premium quality without traditional production overhead." },
  { icon: Award, title: "Professional Quality", desc: "Cinematic craft, color, and audio across every deliverable." },
  { icon: Lightbulb, title: "Creative Strategy", desc: "Concepts rooted in your brand, audience, and business goals." },
  { icon: Heart, title: "Personalized Service", desc: "Direct collaboration with the creators behind every project." },
];

export function WhyChoose() {
  const { ref, isInView } = useInView();

  return (
    <section id="why" className="py-12 md:py-20 px-4 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-neon-orange/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-neon-orange to-yellow-400 bg-clip-text text-transparent">
              FrameLEN?
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-orange to-yellow-400 mx-auto mb-10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {points.map((p) => (
              <div
                key={p.title}
                className="group bg-card border border-border rounded-xl p-6 hover:border-neon-orange/50 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,140,0,0.15)] transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-neon-orange/20 to-yellow-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <p.icon className="w-5 h-5 text-neon-orange" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
