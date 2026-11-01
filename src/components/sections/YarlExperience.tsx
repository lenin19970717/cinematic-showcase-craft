import { useState } from "react";
import { CheckCircle2, ExternalLink, Linkedin } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import p1 from "@/assets/yarl-it-hub/yit-1.webp.asset.json";
import p2 from "@/assets/yarl-it-hub/yit-2.webp.asset.json";
import p3 from "@/assets/yarl-it-hub/yit-3.webp.asset.json";
import p4 from "@/assets/yarl-it-hub/yit-4.webp.asset.json";
import p5 from "@/assets/yarl-it-hub/yit-5.webp.asset.json";
import p6 from "@/assets/yarl-it-hub/yit-6.webp.asset.json";
import p7 from "@/assets/yarl-it-hub/yit-7.webp.asset.json";

const LINKEDIN_URL = "https://lnkd.in/p/gFc5cfHC";
const photos = [p1, p2, p3, p4, p5, p6, p7].map((p) => p.url);

const contributions = [
  "Created digital content for initiatives such as Puthiya Payanangal.",
  "Contributed to YGC Competition and YGC Innovation Festival.",
  "Created content for various workshops and organizational activities.",
  "Developed practical skills in content creation, videography, graphic designing, and video editing.",
  "Created the final Puthiya Payanangal story using AI, which received appreciation and helped me gain experience in AI content creation.",
  "Built valuable professional connections and friendships through this experience.",
];

export function YarlExperience() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-5 gap-6 items-start">
        <div className="lg:col-span-3 bg-card/60 backdrop-blur border border-border rounded-xl p-5 space-y-4">
          <dl className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 text-sm">
            <dt className="text-muted-foreground">Organization</dt>
            <dd className="text-foreground font-medium">Yarl IT Hub, Jaffna</dd>
            <dt className="text-muted-foreground">Role</dt>
            <dd className="text-foreground font-medium">Digital Marketing Intern &amp; Content Creator</dd>
            <dt className="text-muted-foreground">Duration</dt>
            <dd className="text-foreground font-medium">8 Months</dd>
          </dl>
          <p className="text-sm text-muted-foreground">
            I completed 8 months at Yarl IT Hub as a Digital Marketing Intern and Content Creator. This journey helped
            me discover my abilities, develop my creative skills, and gain valuable professional and personal
            experiences.
          </p>
          <div>
            <h4 className="text-foreground font-semibold mb-2">Key Contributions &amp; Skills</h4>
            <ul className="space-y-2">
              {contributions.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="lg:col-span-2 group block bg-card/60 backdrop-blur border border-border rounded-xl overflow-hidden hover:border-primary/60 transition-colors"
        >
          <img src={photos[0]} alt="Yarl IT Hub LinkedIn post" loading="lazy" className="w-full aspect-video object-cover" />
          <div className="p-5 space-y-3">
            <p className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary">
              <Linkedin className="w-4 h-4" /> LinkedIn Post
            </p>
            <h4 className="text-foreground font-semibold">8 Months at Yarl IT Hub</h4>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-neon-orange to-accent text-primary-foreground group-hover:opacity-90">
              View LinkedIn Post <ExternalLink className="w-4 h-4" />
            </span>
          </div>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {photos.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpen(i)}
            className={`group relative overflow-hidden rounded-lg border border-border ${i === 0 ? "col-span-2 row-span-2" : ""}`}
          >
            <img
              src={src}
              alt={`Yarl IT Hub activity ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-5xl p-2 bg-background border-border">
          <DialogTitle className="sr-only">Yarl IT Hub photo</DialogTitle>
          {open !== null && (
            <div className="relative">
              <img src={photos[open]} alt={`Yarl IT Hub activity ${open + 1}`} className="w-full max-h-[80vh] object-contain" />
              <button onClick={() => setOpen((open - 1 + photos.length) % photos.length)} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 text-foreground" aria-label="Previous">‹</button>
              <button onClick={() => setOpen((open + 1) % photos.length)} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 text-foreground" aria-label="Next">›</button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
