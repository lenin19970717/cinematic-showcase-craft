import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-neon-pink/20 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-orange/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo with glow */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <img
            src={logo}
            alt="Lenin's Visual Logo"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full drop-shadow-[0_0_30px_hsl(270,80%,60%,0.5)]"
          />
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-orange bg-clip-text text-transparent animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          LENIN'S VISUAL
        </h1>

        {/* Name */}
        <p
          className="text-2xl md:text-3xl text-foreground font-medium mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Lenin
        </p>

        {/* Tagline */}
        <p
          className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Visual Storyteller | Filmmaker | AI Content Creator
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("#showcase")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-[0_0_20px_hsl(270,80%,60%,0.4)] hover:shadow-[0_0_30px_hsl(270,80%,60%,0.6)] transition-all"
          >
            View Showcase
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#contact")}
            className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-lg transition-all"
          >
            Contact Me
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
