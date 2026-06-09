import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ReportShell, ReportHtml } from "@/components/report-shell";
import { teamHtml } from "@/reports/team";

export const Route = createFileRoute("/case/team-focus")({
  head: () => ({
    meta: [
      { title: "Team Content Focus — SEO, Digital, Social · Cybaem Research" },
      { name: "description", content: "What each team builds on day one — blog content, on-page SEO, ad creatives, conversion assets, Reels series and posting cadence." },
      { property: "og:title", content: "Team Execution Plan — SveeraAyurveda" },
      { property: "og:description", content: "The week-one execution map across SEO, Digital Marketing and Social Media teams." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <ReportShell
        eyebrow="Case 04 · Execution"
        title="Team Content Focus — SEO, Digital, Social"
        intro="Strategy only matters if Monday morning looks different. This is the execution map we hand to the three operating teams: what SEO writes and ranks for, what the performance team builds in Meta and Google, and what social posts, films and ships — with a minimum viable posting cadence."
      >
        <ReportHtml html={teamHtml} />
      </ReportShell>
    </SiteLayout>
  );
}
