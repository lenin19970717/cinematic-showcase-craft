/**
 * Creative Journey & categorized portfolio data.
 * Edit this file to update dates, links, and project cards.
 * - Add a project: copy an object in the list and change its fields.
 * - Remove a project: delete its object.
 * - `url` empty ("") shows the card with a "Link coming soon" label instead of a button.
 * - `thumbnail` is optional: import an image from "@/assets/..." and set it here.
 */

export interface PortfolioProject {
  title: string;
  role: string;
  url: string;
  description?: string;
  thumbnail?: string;
}

/** Yarl IT Hub internship */
export const internship = {
  organization: "Yarl IT Hub",
  role: "Content Creator Intern",
  startDate: "2025-04-28", // YYYY-MM-DD
  endDate: "2026-01-10", // YYYY-MM-DD
  youtubeChannelUrl: "https://www.youtube.com/@YITExperiments",
  // Video shown in the internship player (embed form of the link you provided). Set to "" to hide the player.
  youtubeVideoUrl: "https://youtu.be/0l1SG-zqfrY?si=LcSQs6maySYNRjmz",
  youtubeEmbedUrl: "https://www.youtube.com/embed/0l1SG-zqfrY",
  description:
    "During my Content Creator Internship at Yarl IT Hub, I gained practical experience in content creation, video production, editing, and digital storytelling. This collection showcases the videos and creative projects I produced during my internship.",
  // Add individual internship videos here (title, role, url, optional description/thumbnail).
  projects: [] as PortfolioProject[],
};

/** Volunteering at Yarl IT Hub — Cinematography */
export const volunteeringCinematography: PortfolioProject[] = [
  {
    title: "Robotic AI in YGC",
    role: "Cinematography & Guidance",
    url: "https://www.facebook.com/share/v/19aHZvGMFK/",
  },
  {
    title: "Startup Pitching Competition – YGC 2026 Jaffna",
    role: "Cinematographer",
    url: "",
  },
  {
    title: "Follow Your Path 2026 – YGC Jaffna",
    role: "Cinematographer",
    url: "https://www.facebook.com/share/v/1D9FuPiqpj/",
  },
];

/** Volunteering at Yarl IT Hub — AI Video Creation */
export const volunteeringAiVideos: PortfolioProject[] = [
  {
    title: "YGC 2026 Jaffna",
    role: "AI Video Creator",
    url: "https://www.facebook.com/reel/28791425807116572",
  },
  {
    title: "AI Content Creator Competition – YGC 2026",
    role: "AI Video Creator",
    url: "https://www.facebook.com/share/v/19T42pk7nF/",
  },
  {
    title: "YGC Mini Festival Promo 2026 – Mannar",
    role: "AI Video Creator",
    url: "https://www.facebook.com/share/r/1BMZXnxqwh/",
  },
  {
    title: "YGC Mini Festival Promo 2026 – Vavuniya",
    role: "AI Video Creator",
    url: "https://www.facebook.com/share/r/1JtdG7dGdL/",
  },
  {
    title: "YGC Mini Festival Promo 2026 – Kilinochchi",
    role: "AI Video Creator",
    url: "https://www.facebook.com/reel/2231393157699891",
  },
  {
    title: "YGC Mini Festival Promo 2026 – Mullaitivu",
    role: "AI Video Creator",
    url: "https://www.facebook.com/reel/2240269806722927/",
  },
];

/** Formats two YYYY-MM-DD dates as "Apr 2025 – Jan 2026". */
export function formatDateRange(start: string, end: string): string {
  const fmt = (d: string) => {
    const [y, m] = d.split("-").map(Number);
    return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    });
  };
  return `${fmt(start)} – ${fmt(end)}`;
}
