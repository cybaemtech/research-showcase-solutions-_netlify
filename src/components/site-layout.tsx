import { Link } from "@tanstack/react-router";
import { type ReactNode, useState, useEffect } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const getNextSunday1159PM = () => {
      const now = new Date();
      // Add 14 days (2 weeks) to the next Sunday
      const daysUntilSunday = ((7 - now.getDay()) % 7) + 14;
      const target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysUntilSunday);
      target.setHours(23, 59, 59, 999);
      return target.getTime();
    };

    const targetDate = getNextSunday1159PM();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft("00:00:00:00");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(
        `${days.toString().padStart(2, '0')}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`
      );
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  return <span className="font-mono bg-primary-foreground text-primary px-2 py-0.5 rounded-md text-xs tracking-wider font-bold shadow-sm">{timeLeft}</span>;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur flex flex-col">
        <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium flex items-center justify-center gap-3 shadow-sm z-50 relative">
          <span>Special Offer Ends Sunday at 11:59 PM:</span>
          <CountdownTimer />
        </div>
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2" aria-label="Cybaem Tech">
            <span className="font-bold tracking-tight text-xl text-primary">Cybaem-DIGI: Powered by Cybaem Tech</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
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
