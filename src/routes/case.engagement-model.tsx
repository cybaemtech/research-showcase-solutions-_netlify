import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ReportShell, ReportHtml } from "@/components/report-shell";
import { hybridHtml } from "@/reports/hybrid";

export const Route = createFileRoute("/case/engagement-model")({
  head: () => ({
    meta: [
      { title: "Hybrid Engagement Model — Cybaem Research" },
      { name: "description", content: "Setup fee + monthly retainer + revenue share. Three tiers, a 12-month scenario, and the contract terms that make it work for both sides." },
      { property: "og:title", content: "Hybrid Engagement Model — SveeraAyurveda Proposal" },
      { property: "og:description", content: "Why a hybrid beats pure-retainer or pure-revenue-share, with tiers, a worked example, and recommended contract clauses." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <ReportShell
        eyebrow="Case 03 · Commercials"
        title="Hybrid Engagement Model"
        intro="The commercial framework we proposed to SveeraAyurveda — a one-time setup fee, a monthly retainer, and a revenue share. Three tiers, a fully worked 12-month earnings scenario, a side-by-side against pure-retainer and pure-revenue-share, and the contract terms that protect both sides."
      >
        <ReportHtml html={hybridHtml} />
      </ReportShell>
    </SiteLayout>
  );
}
