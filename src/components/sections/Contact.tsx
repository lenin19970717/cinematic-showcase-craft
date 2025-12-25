import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { User, Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { ref, isInView } = useInView();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:leninscontent17@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening your email client...",
      description: "Please send the email to complete your message.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-neon-pink/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-neon-purple/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-2xl relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mb-12" />

          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  Phone (Optional)
                </label>
                <Input
                  type="tel"
                  placeholder="+XX XXX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-secondary/50 border-border"
                />
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
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg shadow-[0_0_20px_hsl(270,80%,60%,0.4)] hover:shadow-[0_0_30px_hsl(270,80%,60%,0.6)] transition-all"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
