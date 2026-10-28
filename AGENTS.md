# AGENTS.md

- Photography images are hosted via Lovable Assets: each photo has a `-thumb` and `-full` WebP pointer under `src/assets/photography/<category-slug>/`, and `src/data/photographyManifest.ts` lists categories/photos (Drive folder name, original filename, dimensions). Why: Drive share links aren't stable image URLs; pointers + manifest keep URLs and layout data in sync.
- Videography tab data lives in `src/data/videographyPortfolio.ts` (YouTube IDs + original titles from the Frames of LENIN channel); cards use official `i.ytimg.com` thumbnails and load the YouTube iframe only on click. Why: ~100 embeds would be too heavy to load at once, and titles must stay the real YouTube titles.
