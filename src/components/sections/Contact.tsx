import { useInView } from "@/hooks/useInView";
import { User, Phone, Mail, MapPin, Home, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  { icon: User, label: "Full Name", value: "Lenin [Last Name]" },
  { icon: Phone, label: "Phone", value: "+XX XXX XXX XXXX" },
  { icon: Mail, label: "Email", value: "lenin@example.com" },
  { icon: MapPin, label: "Temporary Address", value: "Current City, Country" },
  { icon: Home, label: "Permanent Address", value: "Hometown, Country" },
];

export function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="py-20 md:py-32 px-4 relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-neon-pink/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-neon-purple/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Contact <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mb-12" />

          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            <div className="grid gap-6">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-[0_0_20px_hsl(270,80%,60%,0.4)] hover:shadow-[0_0_30px_hsl(270,80%,60%,0.6)] transition-all"
                onClick={() => window.location.href = "mailto:lenin@example.com"}
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
