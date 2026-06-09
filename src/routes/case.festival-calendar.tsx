import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ReportShell, ReportHtml } from "@/components/report-shell";
import { festivalHtml } from "@/reports/festival";

export const Route = createFileRoute("/case/festival-calendar")({
  head: () => ({
    meta: [
      { title: "Maharashtra Festival × Product Revenue Map — Cybaem Research" },
      { name: "description", content: "18 festivals from Jun 2026 to Jun 2027, mapped to products, audiences, campaign angles and a conservative ₹20.8L revenue projection." },
      { property: "og:title", content: "Maharashtra Festival Revenue Map — SveeraAyurveda" },
      { property: "og:description", content: "Festival-by-festival product, audience and campaign plan with a 12-month conservative revenue model." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <ReportShell
        eyebrow="Case 02 · Revenue Map"
        title="Maharashtra Festival × Product Calendar"
        intro="A full 12-month festival calendar built around Maharashtra-first cultural moments — Ganesh Chaturthi, Navratri, Diwali, Gudi Padwa and more — with the products to push, the audience to target, the campaign angle, and the realistic revenue we expect from each."
      >
        <ReportHtml html={festivalHtml} />
      </ReportShell>
    </SiteLayout>
  );
}
