import { useState } from "react";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  url: string;
  title: string;
  isGoogleDrive?: boolean;
  isShort?: boolean;
  thumbnail?: string;
}

export function VideoEmbed({ url, title, isGoogleDrive = false, isShort = false, thumbnail }: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-[0_0_20px_hsl(270,80%,60%,0.15)] transition-all">
      <div className={isShort ? "aspect-[9/16] max-h-[500px] mx-auto" : "aspect-video"}>
        {thumbnail && !isPlaying ? (
          <div 
            className="relative w-full h-full cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            <img 
              src={thumbnail} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/20 transition-colors">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        ) : (
          <iframe
            src={url}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
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
