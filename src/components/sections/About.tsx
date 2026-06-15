import { useInView } from "@/hooks/useInView";

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-12 md:py-20 px-4 relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-neon-orange/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Who{" "}
            <span className="bg-gradient-to-r from-neon-orange to-yellow-400 bg-clip-text text-transparent">
              We Are
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-orange to-yellow-400 mx-auto mb-8" />

          <div className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-lg hover:border-neon-orange/40 transition-colors">
            <p className="text-muted-foreground text-lg leading-relaxed">
              <span className="text-foreground font-semibold">FrameLEN Media</span> is a creative
              media studio focused on visual storytelling, content creation, videography,
              photography, and brand-focused content production.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-6">
              We help businesses, creators, and organizations communicate their stories through
              impactful visual experiences — combining cinematic craft with modern, mobile-first
              production for brands of every size.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
