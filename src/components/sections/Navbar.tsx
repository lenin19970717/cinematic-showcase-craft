import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import framelenIcon from "@/assets/framelen-icon.png.asset.json";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#skills" },
  { label: "GenLEN", href: "#genlen" },
  { label: "Portfolio", href: "#showcase" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="relative h-10 w-10 md:h-12 md:w-12">
              <div className="absolute inset-0 rounded-full border-2 border-primary animate-glow-pulse" />
              <img src={framelenIcon.url} alt="FrameLEN Media" className="h-full w-full rounded-full object-cover" />
            </div>
            <span className="text-base md:text-xl font-bold tracking-tight">
              Frame<span className="bg-gradient-to-r from-neon-orange to-yellow-400 bg-clip-text text-transparent">LEN</span>
              <span className="text-muted-foreground font-normal text-xs md:text-sm ml-1">Media</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-orange to-yellow-400 transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border animate-fade-in">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 text-left text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
