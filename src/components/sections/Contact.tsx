import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { User, Mail, MessageSquare, Send, Building2, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { ref, isInView } = useInView();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    const subject = encodeURIComponent(`FrameLEN Media — inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nBusiness: ${formData.business}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:leninscontent17@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client...", description: "Please send the email to complete your message." });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4 relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-neon-orange/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-2xl relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Let's Tell Your{" "}
            <span className="bg-gradient-to-r from-neon-orange to-yellow-400 bg-clip-text text-transparent">
              Story
            </span>
          </h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-6 text-base md:text-lg">
            Tell us about your brand, project, or idea — we'll bring it to life through visual
            storytelling and AI-powered content.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-orange to-yellow-400 mx-auto mb-8" />

          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground flex items-center gap-2">
                    <User className="w-4 h-4" /> Full Name *
                  </label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary/50 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> Business
                  </label>
                  <Input
                    placeholder="Company / brand"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    className="bg-secondary/50 border-border"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-secondary/50 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Contact Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+XX XXX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-secondary/50 border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Message *
                </label>
                <Textarea
                  placeholder="Tell us about your project or inquiry..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary/50 border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-neon-orange to-yellow-500 hover:opacity-90 text-black font-semibold py-6 text-lg shadow-[0_0_25px_rgba(255,140,0,0.45)] hover:shadow-[0_0_35px_rgba(255,140,0,0.7)] transition-all"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/94000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/lenin-nageswaran-235531262"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#0A66C2]/40 text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
