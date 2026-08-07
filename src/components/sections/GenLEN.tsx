import { useInView } from "@/hooks/useInView";
import { Sparkles, Video, Megaphone, BookOpen, Share2, Wand2 } from "lucide-react";


const aiServices = [
  { icon: Video, label: "AI Promotional Videos" },
  { icon: Megaphone, label: "AI Advertising Content" },
  { icon: BookOpen, label: "AI Visual Storytelling" },
  { icon: Share2, label: "AI Social Media Content" },
  { icon: Wand2, label: "Creative AI Campaigns" },
];

export function GenLEN() {
  const { ref, isInView } = useInView();

  return (
    <section id="genlen" className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Premium backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 left-1/3 w-[40rem] h-[40rem] bg-neon-orange/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-yellow-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-orange/10 border border-neon-orange/30 text-neon-orange text-xs uppercase tracking-[0.2em] mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Introducing
            </span>
            <div className="flex justify-center mb-4">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-none drop-shadow-[0_0_40px_rgba(255,180,0,0.25)]">
                Gen<span className="bg-gradient-to-r from-neon-orange to-yellow-400 bg-clip-text text-transparent">LEN</span>
              </h2>
            </div>
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
              AI Content &amp; Media Solutions
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              GenLEN helps small and medium-sized businesses access affordable AI-powered content
              solutions without the high costs of traditional production.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mb-10">
            {aiServices.map((s) => (
              <div
                key={s.label}
                className="group relative overflow-hidden bg-card/60 backdrop-blur-sm border border-border rounded-xl p-5 text-center hover:border-neon-orange/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/0 to-yellow-500/0 group-hover:from-neon-orange/10 group-hover:to-yellow-500/5 transition-all" />
                <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-neon-orange to-yellow-500 flex items-center justify-center mx-auto mb-3 shadow-[0_0_20px_rgba(255,140,0,0.4)]">
                  <s.icon className="w-5 h-5 text-black" />
                </div>
                <p className="relative text-sm font-medium text-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-neon-orange to-yellow-500 text-black font-semibold shadow-[0_0_30px_rgba(255,140,0,0.45)]">
              <Sparkles className="w-4 h-4" /> Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
