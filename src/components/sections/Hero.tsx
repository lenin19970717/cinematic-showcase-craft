import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import framelenLogo from "@/assets/framelen-logo-plain.png";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-neon-orange/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-yellow-500/15 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-orange/10 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto pt-20">
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <img
            src={framelenLogo}
            alt="FrameLEN Media"
            className="h-24 md:h-32 lg:h-40 w-auto mx-auto drop-shadow-[0_0_40px_rgba(255,140,0,0.35)]"
          />
        </div>

        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up leading-tight"
          style={{ animationDelay: "0.2s" }}
        >
          Every Brand Has A Story.{" "}
          <span className="bg-gradient-to-r from-neon-orange to-yellow-400 bg-clip-text text-transparent">
            We Help Tell It.
          </span>
        </h1>

        <p
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          FrameLEN Media creates powerful visual content through storytelling, videography,
          photography, and content production.
        </p>

        <p
          className="text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground/70 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.35s" }}
        >
          Content Creation · Storytelling · Visual Impact
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("#showcase")}
            className="bg-gradient-to-r from-neon-orange to-yellow-500 hover:opacity-90 text-black font-semibold px-8 py-6 text-lg shadow-[0_0_25px_rgba(255,140,0,0.45)] hover:shadow-[0_0_35px_rgba(255,140,0,0.7)] transition-all"
          >
            View Portfolio
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#contact")}
            className="border-neon-orange/50 text-foreground hover:bg-neon-orange/10 hover:border-neon-orange px-8 py-6 text-lg transition-all"
          >
            Work With Us
          </Button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
