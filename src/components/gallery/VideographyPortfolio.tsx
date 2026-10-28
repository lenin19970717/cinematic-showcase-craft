import { useState, type ReactNode } from "react";
import { ExternalLink, ListVideo, Play, Youtube } from "lucide-react";
import {
  CHANNEL_URL,
  channelPlaylists,
  channelShorts,
  channelVideos,
  ownCreations,
  type YouTubeVideo,
} from "@/data/videographyPortfolio";
import { cn } from "@/lib/utils";

const SHORTS_PAGE = 12;

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/**
 * YouTube titles here are mostly hashtags. Show the words of the real title;
 * when a title is only an emoji + hashtags, show its first three hashtags as words.
 */
export function displayTitle(title: string) {
  const tags = title.match(/#[^\s#]+/g) ?? [];
  const cleaned = title
    .replace(/#[^\s#]+/g, "")
    .replace(/\s+/g, " ")
    .replace(/[.\s]+$/, "")
    .trim();
  if (/[\p{L}\p{N}]{2,}/u.test(cleaned)) return cleaned;
  const fromTags = tags.slice(0, 3).map((t) => capitalize(t.slice(1))).join(" · ");
  return [cleaned, fromTags].filter(Boolean).join(" ");
}

const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

interface PlayerCardProps {
  title: string;
  label?: string;
  thumbnail: string;
  embedUrl: string;
  watchUrl: string;
  vertical?: boolean;
  badge?: ReactNode;
}

function PlayerCard({ title, label, thumbnail, embedUrl, watchUrl, vertical, badge }: PlayerCardProps) {
  const [playing, setPlaying] = useState(false);
  const shown = displayTitle(title);

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.45)]">
      <div className={cn("relative overflow-hidden bg-background", vertical ? "aspect-[9/16]" : "aspect-video")}>
        {playing ? (
          <iframe
            src={embedUrl}
            title={shown}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${shown}`}
            className="absolute inset-0 h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
          >
            <img
              src={thumbnail}
              alt={shown}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span
                className={cn(
                  "flex items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110",
                  vertical ? "h-10 w-10" : "h-14 w-14"
                )}
              >
                <Play className={cn("ml-0.5", vertical ? "h-5 w-5" : "h-7 w-7")} fill="currentColor" />
              </span>
            </span>
            {badge && <span className="absolute left-2 top-2">{badge}</span>}
          </button>
        )}
      </div>
      <div className={cn("flex items-start justify-between gap-2", vertical ? "p-2.5" : "p-3.5")}>
        <div className="min-w-0">
          {label && (
            <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">{label}</p>
          )}
          <h4
            title={title}
            className={cn("line-clamp-2 font-medium text-foreground", vertical ? "text-xs" : "text-sm md:text-base")}
          >
            {shown}
          </h4>
        </div>
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Watch ${shown} on YouTube`}
          title="Watch on YouTube"
          className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:text-primary"
        >
          <ExternalLink className={vertical ? "h-3.5 w-3.5" : "h-4 w-4"} />
        </a>
      </div>
    </div>
  );
}

function VideoCard({ video, vertical }: { video: YouTubeVideo; vertical?: boolean }) {
  return (
    <PlayerCard
      title={video.title}
      label={video.label}
      thumbnail={thumb(video.id)}
      embedUrl={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
      watchUrl={
        video.url ??
        (vertical ? `https://www.youtube.com/shorts/${video.id}` : `https://www.youtube.com/watch?v=${video.id}`)
      }
      vertical={vertical}
    />
  );
}

function SubHeading({ title, count }: { title: string; count?: number }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <h4 className="text-lg md:text-xl font-semibold text-foreground">{title}</h4>
      {count !== undefined && <span className="text-xs tabular-nums text-muted-foreground">{count}</span>}
      <span className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
    </div>
  );
}

export function VideographyPortfolio({ children }: { children?: ReactNode }) {
  const [shortsShown, setShortsShown] = useState(SHORTS_PAGE);

  return (
    <div className="space-y-10">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold">
          Videography{" "}
          <span className="bg-gradient-to-r from-neon-orange to-yellow-400 bg-clip-text text-transparent">
            Portfolio
          </span>
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm md:text-base text-muted-foreground">
          Explore my video production, visual storytelling, filmmaking, and creative video projects.
        </p>
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary transition-opacity hover:opacity-80"
        >
          <Youtube className="h-4 w-4" /> Frames of LENIN on YouTube
        </a>
      </div>

      <section aria-label="Own creations">
        <SubHeading title="Own Creations" />
        <div className="grid gap-5 md:grid-cols-2">
          {ownCreations.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </section>

      {children && (
        <section aria-label="Signature edits">
          <SubHeading title="Signature Edits" />
          {children}
        </section>
      )}

      <section aria-label="Full videos">
        <SubHeading title="Full Videos" count={channelVideos.length} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channelVideos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </section>

      <section aria-label="Playlists">
        <SubHeading title="Playlists" count={channelPlaylists.length} />
        <div className="grid gap-5 md:grid-cols-2">
          {channelPlaylists.map((p) => (
            <PlayerCard
              key={p.id}
              title={p.title.charAt(0).toUpperCase() + p.title.slice(1)}
              thumbnail={thumb(p.coverVideoId)}
              embedUrl={`https://www.youtube.com/embed/videoseries?list=${p.id}&autoplay=1&rel=0`}
              watchUrl={`https://www.youtube.com/playlist?list=${p.id}`}
              badge={
                <span className="inline-flex items-center gap-1 rounded-md bg-background/80 px-2 py-1 text-[11px] font-medium text-foreground backdrop-blur-sm">
                  <ListVideo className="h-3.5 w-3.5 text-primary" /> {p.count} videos
                </span>
              }
            />
          ))}
        </div>
      </section>

      <section aria-label="Shorts">
        <SubHeading title="Shorts" count={channelShorts.length} />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {channelShorts.slice(0, shortsShown).map((v) => (
            <VideoCard key={v.id} video={v} vertical />
          ))}
        </div>
        {shortsShown < channelShorts.length && (
          <div className="mt-5 text-center">
            <button
              type="button"
              onClick={() => setShortsShown((n) => n + SHORTS_PAGE)}
              className="rounded-full border border-primary/50 px-5 py-2 text-sm text-foreground transition-colors hover:bg-primary/10"
            >
              Show more shorts ({channelShorts.length - shortsShown} left)
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
