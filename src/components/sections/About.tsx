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
            About <span className="text-primary">Us</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mb-12" />

          <div className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-lg hover:border-primary/30 transition-colors">
            <p className="text-muted-foreground text-lg leading-relaxed">
              <span className="text-primary font-semibold">LENIN'S VISUAL</span> is a creative 
              production company specializing in visual storytelling across videography, photography, 
              filmmaking, and AI-driven content creation. We transform ideas and emotions into 
              impactful visual stories. Our services include cinematography, video editing, short 
              film production, photography, digital art, and AI image and video generation. With 
              hands-on experience through diverse projects and creative collaborations, we 
              continuously explore creative and technological boundaries to deliver meaningful 
              visual experiences for our clients.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-6">
              I started this with no resources. But with the little help I got to showcase my talent, 
              I created these works. From now on, if I get better resources, I can create even better works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
