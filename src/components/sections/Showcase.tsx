import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Video, Clapperboard, Pencil, Sparkles, Play } from "lucide-react";
import { ImageGallery } from "@/components/gallery/ImageGallery";
import { VideoEmbed } from "@/components/gallery/VideoEmbed";

// Import photography images - Wildlife
import wildlifePhoto from "@/assets/wildlife.jpg";
import wildlifeOwl from "@/assets/wildlife-owl.jpg";
import wildlifeKite from "@/assets/wildlife-kite.jpg";
import wildlifeEgret from "@/assets/wildlife-egret.jpg";
import wildlifeEgrets from "@/assets/wildlife-egrets.jpg";

// Import photography images - Nature
import naturePhoto from "@/assets/nature.jpg";
import natureJellyfish from "@/assets/nature-jellyfish.jpg";

// Import photography images - Portraits
import portraitPhoto from "@/assets/portrait.jpg";

// Import AI photos
import aiPhoto1 from "@/assets/ai-photo-1.jpg";
import aiPhoto2 from "@/assets/ai-photo-2.jpg";
import aiPhoto3 from "@/assets/ai-photo-3.png";

// Import Drawings
import drawing1 from "@/assets/drawing-1.jpg";
import drawing2 from "@/assets/drawing-2.jpg";
import drawing3 from "@/assets/drawing-3.jpg";
import drawing4 from "@/assets/drawing-4.jpg";

// Import AI Video thumbnail
import kannukullaThumbnail from "@/assets/kannukulla-thumbnail.jpg";

const photographyCategories = {
  wildlife: [
    { src: wildlifePhoto, alt: "Wildlife - Bird Photography" },
    { src: wildlifeOwl, alt: "Wildlife - Owl on Ground" },
    { src: wildlifeKite, alt: "Wildlife - Brahminy Kite" },
    { src: wildlifeEgret, alt: "Wildlife - Great Egret" },
    { src: wildlifeEgrets, alt: "Wildlife - Egrets in Grass" },
  ],
  nature: [
    { src: naturePhoto, alt: "Nature - Green Grass" },
    { src: natureJellyfish, alt: "Nature - Jellyfish on Beach" },
  ],
  portraits: [
    { src: portraitPhoto, alt: "Portrait - Child studying by candlelight" },
  ],
};

const videographyCategories = {
  greeny: [
    { url: "https://www.youtube.com/embed/nf2ybbjdYVk", title: "Greeny" },
  ],
  blue: [
    { url: "https://www.youtube.com/embed/iXw0aeeUY1s", title: "Blue" },
  ],
  lightShadow: [
    { url: "https://www.youtube.com/embed/CZzWbvVIaCQ", title: "Light & Shadow" },
  ],
};

const shortFilms = [
  { url: "https://www.youtube.com/embed/o9lxCOGskis", title: "OONJAL" },
  { url: "https://www.youtube.com/embed/NNBcSQI2BVI", title: "Soul Diemention" },
];

const drawings = [
  { src: drawing1, alt: "Drawing - Desert Landscape with Tree" },
  { src: drawing2, alt: "Drawing - Still Life with Pots" },
  { src: drawing3, alt: "Drawing - Eyes Portrait" },
  { src: drawing4, alt: "Drawing - Child Portrait" },
];

const aiPhotos = [
  { src: aiPhoto1, alt: "AI Generated - Kannukulla Poster 1" },
  { src: aiPhoto2, alt: "AI Generated - Kannukulla Poster 2" },
  { src: aiPhoto3, alt: "AI Generated - Textile Shop Scene" },
];

const aiVideos = [
  { url: "https://drive.google.com/file/d/1-pcXP26qVDiPt-SwYrfhwGRnnEcNmK-q/preview", title: "Kannukulla...!", thumbnail: kannukullaThumbnail },
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
            Our <span className="text-primary">Portfolio</span>
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
              <div className="max-w-2xl mx-auto">
                {videographyCategories[videoCategory].map((video, i) => (
                  <VideoEmbed key={i} url={video.url} title={video.title} isShort />
                ))}
              </div>
            </TabsContent>

            {/* Short Films */}
            <TabsContent value="shortfilms">
              <div className="grid md:grid-cols-2 gap-6">
                {shortFilms.map((video, i) => (
                  <div key={i} className="space-y-2">
                    <h3 className="text-lg font-semibold text-center text-foreground">{video.title}</h3>
                    <VideoEmbed url={video.url} title={video.title} />
                  </div>
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
                  <VideoEmbed key={i} url={video.url} title={video.title} isGoogleDrive thumbnail={video.thumbnail} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
