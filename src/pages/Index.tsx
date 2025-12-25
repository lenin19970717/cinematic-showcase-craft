import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Showcase } from "@/components/sections/Showcase";
import { Contact } from "@/components/sections/Contact";
import { SocialLinks } from "@/components/sections/SocialLinks";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Showcase />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Index;
