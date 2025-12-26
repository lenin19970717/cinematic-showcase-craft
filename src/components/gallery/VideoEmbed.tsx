import { useState } from "react";
import { Play, Heart } from "lucide-react";

interface VideoEmbedProps {
  url: string;
  title: string;
  isGoogleDrive?: boolean;
  isShort?: boolean;
  thumbnail?: string;
}

export function VideoEmbed({ url, title, isGoogleDrive = false, isShort = false, thumbnail }: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(128);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

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
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="text-foreground font-medium">{title}</h3>
          {isGoogleDrive && (
            <p className="text-muted-foreground text-sm mt-1">Hosted on Google Drive</p>
          )}
        </div>
        <button
          onClick={handleLike}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
          title="Like this video"
        >
          <Heart 
            className={`w-5 h-5 transition-colors ${isLiked ? "text-red-500 fill-red-500" : "text-muted-foreground group-hover:text-red-400"}`}
          />
        </button>
      </div>
    </div>
  );
}
