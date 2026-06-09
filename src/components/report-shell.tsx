import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function ReportShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 pb-20">
      <Link to="/" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">
        ← Back to portfolio
      </Link>
      <div className="mt-6 mb-10 max-w-3xl">
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-[#3B6D11]">{eyebrow}</div>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>
      </div>
      <div className="report-surface rounded-lg border border-border bg-card p-6 md:p-8 shadow-sm">
        {children}
      </div>
    </div>
  );
}

export function ReportHtml({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
