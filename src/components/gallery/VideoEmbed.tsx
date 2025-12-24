interface VideoEmbedProps {
  url: string;
  title: string;
  isGoogleDrive?: boolean;
  isShort?: boolean;
}

export function VideoEmbed({ url, title, isGoogleDrive = false, isShort = false }: VideoEmbedProps) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-[0_0_20px_hsl(270,80%,60%,0.15)] transition-all">
      <div className={isShort ? "aspect-[9/16] max-h-[500px] mx-auto" : "aspect-video"}>
        <iframe
          src={url}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-4">
        <h3 className="text-foreground font-medium">{title}</h3>
        {isGoogleDrive && (
          <p className="text-muted-foreground text-sm mt-1">Hosted on Google Drive</p>
        )}
      </div>
    </div>
  );
}
