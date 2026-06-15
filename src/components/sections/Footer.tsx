import framelenIcon from "@/assets/framelen-icon.png.asset.json";
import genlenIcon from "@/assets/genlen-icon.png.asset.json";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          {/* FrameLEN */}
          <div className="flex items-start gap-4">
            <img src={framelenIcon.url} alt="FrameLEN Media" className="h-14 w-14 rounded-lg flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold">
                Frame<span className="bg-gradient-to-r from-neon-orange to-yellow-400 bg-clip-text text-transparent">LEN</span>{" "}
                <span className="text-muted-foreground font-normal text-sm">Media</span>
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Content Creation · Storytelling · Visual Impact
              </p>
            </div>
          </div>

          {/* GenLEN */}
          <div className="flex items-start gap-4">
            <img src={genlenIcon.url} alt="GenLEN" className="h-14 w-14 rounded-lg flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold">
                Gen<span className="bg-gradient-to-r from-neon-orange to-yellow-400 bg-clip-text text-transparent">LEN</span>
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                AI Content & Media Solutions
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            Founder: <span className="text-foreground font-medium">Lenin Nagesh</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FrameLEN Media — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
