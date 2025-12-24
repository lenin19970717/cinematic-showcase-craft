import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4">
          <img src={logo} alt="Lenin's Visual" className="h-12 w-12" />
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} LENIN'S VISUAL – All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
