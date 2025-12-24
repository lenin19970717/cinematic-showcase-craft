import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Video, Clapperboard, Pencil, Sparkles, Play } from "lucide-react";
import { ImageGallery } from "@/components/gallery/ImageGallery";
import { VideoEmbed } from "@/components/gallery/VideoEmbed";

// Placeholder data - Lenin will replace with actual content
const photographyCategories = {
  wildlife: [
    { src: "/placeholder.svg", alt: "Wildlife photo 1" },
    { src: "/placeholder.svg", alt: "Wildlife photo 2" },
    { src: "/placeholder.svg", alt: "Wildlife photo 3" },
  ],
  nature: [
    { src: "/placeholder.svg", alt: "Nature photo 1" },
    { src: "/placeholder.svg", alt: "Nature photo 2" },
    { src: "/placeholder.svg", alt: "Nature photo 3" },
  ],
  portraits: [
    { src: "/placeholder.svg", alt: "Portrait 1" },
    { src: "/placeholder.svg", alt: "Portrait 2" },
    { src: "/placeholder.svg", alt: "Portrait 3" },
  ],
};

const videographyCategories = {
  greeny: [
    { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Greeny Video 1" },
  ],
  blue: [
    { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Blue Video 1" },
  ],
  lightShadow: [
    { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Light & Shadow 1" },
  ],
};

const shortFilms = [
  { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Short Film 1" },
  { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Short Film 2" },
];

const drawings = [
  { src: "/placeholder.svg", alt: "Drawing 1" },
  { src: "/placeholder.svg", alt: "Drawing 2" },
  { src: "/placeholder.svg", alt: "Drawing 3" },
];

const aiPhotos = [
  { src: "/placeholder.svg", alt: "AI Photo 1" },
  { src: "/placeholder.svg", alt: "AI Photo 2" },
  { src: "/placeholder.svg", alt: "AI Photo 3" },
];

const aiVideos = [
  { url: "https://drive.google.com/file/d/FILE_ID/preview", title: "AI Video 1" },
];

const showcaseTabs = [
  { value: "photography", label: "Photography", icon: Camera },
  { value: "videography", label: "Videography", icon: Video },
  { value: "shortfilms", label: "Short Films", icon: Clapperboard },
  { value: "drawings", label: "Drawings", icon: Pencil },
  { value: "aiphoto", label: "AI Photos", icon: Sparkles },
  { value: "aivideo", label: "AI Videos", icon: Play },
];

export function Showcase() {
  const { ref, isInView } = useInView();
  const [photoCategory, setPhotoCategory] = useState<"wildlife" | "nature" | "portraits">("wildlife");
  const [videoCategory, setVideoCategory] = useState<"greeny" | "blue" | "lightShadow">("greeny");

  return (
    <section id="showcase" className="py-20 md:py-32 px-4 bg-secondary/30 relative">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-neon-orange/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-neon-purple/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-primary">Showcase</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mb-12" />

          <Tabs defaultValue="photography" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
              {showcaseTabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card border border-border px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Photography */}
            <TabsContent value="photography">
              <div className="mb-6 flex justify-center gap-2">
                {(["wildlife", "nature", "portraits"] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setPhotoCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      photoCategory === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
              <ImageGallery images={photographyCategories[photoCategory]} />
            </TabsContent>

            {/* Videography */}
            <TabsContent value="videography">
              <div className="mb-6 flex justify-center gap-2">
                {(["greeny", "blue", "lightShadow"] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setVideoCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      videoCategory === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat === "lightShadow" ? "Light & Shadow" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {videographyCategories[videoCategory].map((video, i) => (
                  <VideoEmbed key={i} url={video.url} title={video.title} />
                ))}
              </div>
            </TabsContent>

            {/* Short Films */}
            <TabsContent value="shortfilms">
              <div className="grid md:grid-cols-2 gap-6">
                {shortFilms.map((video, i) => (
                  <VideoEmbed key={i} url={video.url} title={video.title} />
                ))}
              </div>
            </TabsContent>

            {/* Drawings */}
            <TabsContent value="drawings">
              <ImageGallery images={drawings} />
            </TabsContent>

            {/* AI Photos */}
            <TabsContent value="aiphoto">
              <ImageGallery images={aiPhotos} />
            </TabsContent>

            {/* AI Videos */}
            <TabsContent value="aivideo">
              <div className="max-w-3xl mx-auto">
                {aiVideos.map((video, i) => (
                  <VideoEmbed key={i} url={video.url} title={video.title} isGoogleDrive />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
