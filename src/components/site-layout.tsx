import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#3B6D11]" />
            Cybaem Research
          </Link>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <Link to="/case/strategy" className="hover:text-foreground">Strategy</Link>
            <Link to="/case/festival-calendar" className="hover:text-foreground">Revenue Map</Link>
            <Link to="/case/engagement-model" className="hover:text-foreground">Engagement</Link>
            <Link to="/case/team-focus" className="hover:text-foreground">Execution</Link>
            <Link to="/case/deliverables" className="hover:text-foreground">Deliverables</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-border mt-24">
        <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-3">
          <span>© Cybaem Research — Brand discovery, strategy & growth operations.</span>
          <span>Case study: SveeraAyurveda · Pune, Maharashtra</span>
        </div>
      </footer>
    </div>
  );
}
