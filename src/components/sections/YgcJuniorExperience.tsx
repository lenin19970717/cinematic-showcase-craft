import { useState } from "react";
import { CalendarDays, Palette } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import p1 from "@/assets/ygc-junior/ygc-1.webp.asset.json";
import p2 from "@/assets/ygc-junior/ygc-2.webp.asset.json";
import p3 from "@/assets/ygc-junior/ygc-3.webp.asset.json";
import p4 from "@/assets/ygc-junior/ygc-4.webp.asset.json";
import p5 from "@/assets/ygc-junior/ygc-5.webp.asset.json";
import p6 from "@/assets/ygc-junior/ygc-6.webp.asset.json";

const photos = [p1, p2, p3, p4, p5, p6].map((p) => p.url);

export function YgcJuniorExperience() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="grid lg:grid-cols-5 gap-6 items-start">
      <div className="lg:col-span-2 bg-card/60 backdrop-blur border border-border rounded-xl p-5 space-y-4">
        <p className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary">
          <Palette className="w-4 h-4" /> Volunteer Experience
        </p>
        <h4 className="text-xl font-semibold text-foreground">YGC Junior 2026 Competition Seminar</h4>
        <dl className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 text-sm">
          <dt className="text-muted-foreground">Position</dt>
          <dd className="text-foreground font-medium">Art &amp; Craft Facilitator</dd>
          <dt className="text-muted-foreground">Dates</dt>
          <dd className="text-foreground font-medium flex items-center gap-1.5">
            <CalendarDays className="w-4 h-4 text-primary" /> 16 May 2026 &amp; 23 May 2026
          </dd>
        </dl>
        <p className="text-sm text-muted-foreground">
          Facilitated the Art &amp; Craft section during the YGC Junior 2026 Competition Seminar, supporting and guiding
          participants in creative and artistic activities through practical engagement and creative learning.
        </p>
      </div>

      <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {photos.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpen(i)}
            className="group overflow-hidden rounded-lg border border-border"
          >
            <img
              src={src}
              alt={`YGC Junior 2026 Art & Craft session ${i + 1}`}
              loading="lazy"
              className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-5xl p-2 bg-background border-border">
          <DialogTitle className="sr-only">YGC Junior 2026 photo</DialogTitle>
          {open !== null && (
            <div className="relative">
              <img src={photos[open]} alt={`YGC Junior 2026 Art & Craft session ${open + 1}`} className="w-full max-h-[80vh] object-contain" />
              <button onClick={() => setOpen((open - 1 + photos.length) % photos.length)} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 text-foreground" aria-label="Previous">‹</button>
              <button onClick={() => setOpen((open + 1) % photos.length)} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 text-foreground" aria-label="Next">›</button>
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-muted-foreground bg-background/70 px-2 py-0.5 rounded">{open + 1} / {photos.length}</span>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
