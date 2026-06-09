import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ReportShell, ReportHtml } from "@/components/report-shell";
import { strategyHtml } from "@/reports/strategy";

export const Route = createFileRoute("/case/strategy")({
  head: () => ({
    meta: [
      { title: "6-Month Brand Launch Strategy — SveeraAyurveda · Cybaem Research" },
      { name: "description", content: "Three lensed launch strategies for an Ayurvedic personal-care brand — phased across foundation, activation and scale." },
      { property: "og:title", content: "6-Month Brand Launch Strategy — SveeraAyurveda" },
      { property: "og:description", content: "Trust-to-Transaction, Festival Flywheel, and Ayurvedacharya Brand Authority — across Tech & Product, Strategist, Local and Digital lenses." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <ReportShell
        eyebrow="Case 01 · Strategy"
        title="6-Month Brand Launch Strategy"
        intro="Three distinct go-to-market strategies for SveeraAyurveda, each pressure-tested through four expert lenses — Chief Tech & Product, Brand Strategist, Local Marketing and Digital Marketing — and broken into Foundation, Activation and Scale phases with concrete KPIs."
      >
        <ReportHtml html={strategyHtml} />
      </ReportShell>
    </SiteLayout>
  );
}
