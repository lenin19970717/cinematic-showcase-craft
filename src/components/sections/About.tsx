import { useInView } from "@/hooks/useInView";

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-20 md:py-32 px-4 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-neon-purple/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mb-12" />

          <div className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-lg hover:border-primary/30 transition-colors">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am a passionate visual storyteller and creative professional working across
              videography, photography, filmmaking, and AI-driven content creation. Under the
              brand <span className="text-primary font-semibold">LENIN'S VISUAL</span>, I
              transform ideas and emotions into impactful visual stories. My work includes
              cinematography, video editing, short film direction, acting, photography, digital
              art, and AI image and video generation. I also bring stage performance experience
              in singing and mimicry, which enhances my storytelling and expression. With
              hands-on experience through volunteer work, internships, and zero-budget short
              films, I continuously explore creative and technological boundaries to deliver
              meaningful visual experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
