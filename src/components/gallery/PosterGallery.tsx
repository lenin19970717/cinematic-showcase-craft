import { PhotographyGallery } from "./PhotographyGallery";
import { posterManifest } from "@/data/posterManifest";

export function PosterGallery() {
  return (
    <div className="min-w-0">
      <h3 className="mb-5 text-center text-xl font-semibold md:text-2xl">
        My Poster Design Samples
      </h3>
      <PhotographyGallery categories={posterManifest} galleryLabel="Poster design" />
    </div>
  );
}