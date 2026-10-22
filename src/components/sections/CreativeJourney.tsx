import { Briefcase, Clapperboard, ExternalLink, Film, GraduationCap, Sparkles, Youtube } from "lucide-react";
import {
  internship,
  volunteeringAiVideos,
  volunteeringCinematography,
  formatDateRange,
  type PortfolioProject,
} from "@/data/creativeJourney";

const dateRange = formatDateRange(internship.startDate, internship.endDate);

const timeline = [
  {
    icon: GraduationCap,
    period: dateRange,
    title: "Yarl IT Hub – Content Creator Internship",
    text: "Videos and creative work produced during my internship.",
  },
  {
    icon: Briefcase,
    period: "Freelance",
    title: "Freelance Creative Projects",
    text: "Independent video production, editing, and storytelling projects.",
  },
  {
    icon: Film,
    period: "Now",
    title: "FrameLEN Media – Current Work",
    text: "Real-world video production, visual storytelling, photography, and AI-powered content creation.",
  },
];

function SubHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="text-center mb-6">
      <p className="text-xs uppercase tracking-[0.25em] text-primary mb-1">{eyebrow}</p>
      <h3 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
      {children && <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base">{children}</p>}
    </div>
  );
}

function ProjectCard({ project, icon: Icon, tag }: { project: PortfolioProject; icon: typeof Film; tag: string }) {
  return (
    <div className="group relative flex flex-col bg-card/60 backdrop-blur border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.4)]">
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-secondary via-card to-background">
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-12 h-12 text-primary/70 transition-transform duration-500 group-hover:scale-110" />
          </div>
        )}
        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-background/80 backdrop-blur border border-border text-primary">
          {tag}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-4">
        <h4 className="text-foreground font-semibold leading-snug">{project.title}</h4>
        <p className="text-sm text-muted-foreground mb-3">Role: {project.role}</p>
        {project.description && <p className="text-sm text-muted-foreground mb-3">{project.description}</p>}
        <div className="mt-auto">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-neon-orange to-accent text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Watch Video <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span className="inline-flex px-4 py-2 rounded-lg text-sm border border-border text-muted-foreground">
              Link coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function CreativeJourney() {
  return (
    <div className="space-y-14 mb-14">
      {/* My Creative Journey */}
      <div>
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            My Creative{" "}
            <span className="bg-gradient-to-r from-neon-orange to-accent bg-clip-text text-transparent">Journey</span>
          </h3>
          <p className="text-primary font-medium mb-2">From Yarl IT Hub to Leninraj</p>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base">
            Discover my creative journey through the videos and projects I've created, starting with my Content Creator
            Internship at Yarl IT Hub and continuing through my freelance work, video production, visual storytelling,
            and AI-powered creative projects.
          </p>
        </div>

        <ol className="relative grid gap-4 md:grid-cols-3">
          <div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-px bg-gradient-to-r from-neon-orange via-accent to-neon-orange opacity-50" />
          {timeline.map((step, i) => (
            <li key={step.title} className="relative flex md:flex-col md:items-center md:text-center gap-4 md:gap-3">
              <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-background border border-primary/60 flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.35)]">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 bg-card/60 backdrop-blur border border-border rounded-xl p-4 hover:border-primary/50 transition-colors">
                <p className="text-xs uppercase tracking-wider text-primary mb-1">
                  {String(i + 1).padStart(2, "0")} · {step.period}
                </p>
                <h4 className="text-foreground font-semibold">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* 1. Former Internship */}
      <div>
        <SubHeading eyebrow="01 · Internship" title="Former Internship at Yarl IT Hub">
          {internship.description}
        </SubHeading>

        <div className="grid lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-2 bg-card/60 backdrop-blur border border-border rounded-xl p-5 space-y-3">
            <dl className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 text-sm">
              <dt className="text-muted-foreground">Organization</dt>
              <dd className="text-foreground font-medium">{internship.organization}</dd>
              <dt className="text-muted-foreground">Position</dt>
              <dd className="text-foreground font-medium">{internship.role}</dd>
              <dt className="text-muted-foreground">Duration</dt>
              <dd className="text-foreground font-medium">{dateRange}</dd>
              <dt className="text-muted-foreground">YouTube</dt>
              <dd>
                <a
                  href={internship.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  {internship.youtubeChannelUrl.replace(/^https?:\/\/(www\.)?/, "")}
                </a>
              </dd>
            </dl>
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={internship.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-neon-orange to-accent text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Youtube className="w-4 h-4" /> Watch My Video Portfolio
              </a>
              <a
                href={internship.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-primary/60 text-foreground hover:bg-primary/10 transition-colors"
              >
                Watch Internship Projects <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {internship.youtubeEmbedPlaylistId && (
            <div className="lg:col-span-3 aspect-video rounded-xl overflow-hidden border border-border bg-card">
              <iframe
                src={`https://www.youtube.com/embed/videoseries?list=${internship.youtubeEmbedPlaylistId}`}
                title="Yarl IT Hub internship videos"
                className="w-full h-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>

        {internship.projects.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {internship.projects.map((p) => (
              <ProjectCard key={p.title} project={p} icon={GraduationCap} tag="Internship" />
            ))}
          </div>
        )}
      </div>

      {/* 2. Volunteering */}
      <div>
        <SubHeading eyebrow="02 · Volunteering" title="AI-Powered Video Projects & Cinematography During Volunteering">
          After my internship, I continued contributing as a volunteer at Yarl IT Hub. During this period, I created
          several AI-powered videos and creative visual projects to support its activities and initiatives. This section
          highlights those projects and my experience using AI tools for visual storytelling and video production.
        </SubHeading>

        <div className="space-y-8">
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
              <Clapperboard className="w-5 h-5 text-primary" /> Cinematography Work
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {volunteeringCinematography.map((p) => (
                <ProjectCard key={p.title} project={p} icon={Clapperboard} tag="Volunteering · Cinematography" />
              ))}
            </div>
          </div>
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
              <Sparkles className="w-5 h-5 text-primary" /> AI Video Creation
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {volunteeringAiVideos.map((p) => (
                <ProjectCard key={p.title} project={p} icon={Sparkles} tag="Volunteering · AI Video" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Independent heading (existing portfolio tabs render below) */}
      <SubHeading eyebrow="03 · Independent" title="Independent Creative Projects">
        Explore my independent creative work, including video production, visual storytelling, photography,
        AI-generated content, and experimental media projects developed through my creative journey and FrameLEN Media.
      </SubHeading>
    </div>
  );
}

