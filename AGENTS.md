# AGENTS.md

- Photography images are hosted via Lovable Assets: each photo has a `-thumb` and `-full` WebP pointer under `src/assets/photography/<category-slug>/`, and `src/data/photographyManifest.ts` lists categories/photos (Drive folder name, original filename, dimensions). Why: Drive share links aren't stable image URLs; pointers + manifest keep URLs and layout data in sync.
