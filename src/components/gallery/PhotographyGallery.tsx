import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { photographyManifest, type PhotoEntry } from "@/data/photographyManifest";
import { cn } from "@/lib/utils";

// Hosted image URLs, read from the asset pointers (one -thumb and one -full per photo).
const assetUrls = import.meta.glob("/src/assets/photography/**/*.asset.json", {
  eager: true,
  import: "url",
}) as Record<string, string>;

const urlFor = (photo: PhotoEntry, kind: "thumb" | "full") =>
  assetUrls[`/src/assets/photography/${photo.key}-${kind}.webp.asset.json`];

const altFor = (categoryName: string, photo: PhotoEntry) =>
  `${categoryName} photograph — ${photo.file}`;

export function PhotographyGallery() {
  const [categoryId, setCategoryId] = useState(photographyManifest[0].id);
  const category = photographyManifest.find((c) => c.id === categoryId) ?? photographyManifest[0];
  const photos = category.photos;

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [fullLoaded, setFullLoaded] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const open = (index: number) => {
    setOpenIndex(index);
    setFullLoaded(false);
    requestAnimationFrame(() => setVisible(true));
  };

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => setOpenIndex(null), 250);
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => {
      setOpenIndex((i) => {
        if (i === null) return i;
        setFullLoaded(false);
        return (i + dir + photos.length) % photos.length;
      });
    },
    [photos.length]
  );

  // Keyboard controls + scroll lock while the viewer is open
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, step]);

  // Preload neighbouring full-size photos for smooth next/prev
  useEffect(() => {
    if (openIndex === null || photos.length < 2) return;
    [1, -1].forEach((d) => {
      const p = photos[(openIndex + d + photos.length) % photos.length];
      const img = new Image();
      img.src = urlFor(p, "full");
    });
  }, [openIndex, photos]);

  const selectCategory = (id: string) => {
    setCategoryId(id);
    setOpenIndex(null);
    setVisible(false);
  };

  const current = openIndex !== null ? photos[openIndex] : null;

  return (
    <div>
      {/* Category navigation — names match the Google Drive folders */}
      <div
        role="tablist"
        aria-label="Photography categories"
        className="mb-6 flex flex-wrap justify-center gap-1.5 md:gap-2"
      >
        {photographyManifest.map((cat) => {
          const active = cat.id === categoryId;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active}
              onClick={() => selectCategory(cat.id)}
              className={cn(
                "group inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs md:text-sm transition-colors",
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card/60 text-muted-foreground hover:border-primary/50 hover:text-foreground"
              )}
            >
              {cat.name}
              <span
                className={cn(
                  "text-[10px] md:text-xs tabular-nums",
                  active ? "text-primary-foreground/70" : "text-muted-foreground/60"
                )}
              >
                {cat.photos.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Masonry gallery */}
      <div key={category.id} className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3 animate-fade-in">
        {photos.map((photo, index) => (
          <button
            key={photo.key}
            onClick={() => open(index)}
            aria-label={`Open ${altFor(category.name, photo)}`}
            className="group relative mb-2 md:mb-3 block w-full overflow-hidden rounded-lg border border-border/60 bg-card break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            style={{ aspectRatio: `${photo.w} / ${photo.h}` }}
          >
            <img
              src={urlFor(photo, "thumb")}
              alt={altFor(category.name, photo)}
              width={photo.w}
              height={photo.h}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {/* Lightbox viewer */}
      {current && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${category.name} photo viewer`}
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md transition-opacity duration-250",
            visible ? "opacity-100" : "opacity-0"
          )}
          onClick={close}
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          }}
        >
          <button
            onClick={close}
            aria-label="Close viewer"
            className="absolute right-3 top-3 z-10 rounded-full border border-border/60 bg-card/60 p-1.5 text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/60 hover:text-primary"
          >
            <X size={18} />
          </button>

          {photos.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous photo"
                className="absolute left-2 md:left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border/60 bg-card/60 p-1.5 text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/60 hover:text-primary"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next photo"
                className="absolute right-2 md:right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border/60 bg-card/60 p-1.5 text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/60 hover:text-primary"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}

          <div
            className={cn(
              "relative flex max-h-[86vh] max-w-[92vw] items-center justify-center transition-transform duration-300 ease-out",
              visible ? "scale-100" : "scale-95"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Thumbnail shows instantly while the high-quality photo loads */}
            <img
              key={`${current.key}-thumb`}
              src={urlFor(current, "thumb")}
              alt=""
              aria-hidden
              className={cn(
                "max-h-[86vh] max-w-[92vw] rounded-md object-contain blur-sm transition-opacity duration-300",
                fullLoaded ? "absolute opacity-0" : "opacity-100"
              )}
              style={{ aspectRatio: `${current.w} / ${current.h}` }}
            />
            <img
              key={current.key}
              src={urlFor(current, "full")}
              alt={altFor(category.name, current)}
              onLoad={() => setFullLoaded(true)}
              className={cn(
                "max-h-[86vh] max-w-[92vw] rounded-md object-contain shadow-2xl transition-opacity duration-300",
                fullLoaded ? "opacity-100" : "absolute opacity-0"
              )}
            />
          </div>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs tracking-wider text-muted-foreground tabular-nums">
            <span className="text-primary">{openIndex + 1}</span> / {photos.length}
            <span className="ml-2 text-muted-foreground/60">· {category.name}</span>
          </div>
        </div>
      )}
    </div>
  );
}
