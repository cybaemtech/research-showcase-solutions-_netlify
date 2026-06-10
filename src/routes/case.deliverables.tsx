import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ReportShell, ReportHtml } from "@/components/report-shell";
import { deliverablesHtml } from "@/reports/deliverables";

export const Route = createFileRoute("/case/deliverables")({
  head: () => ({
    meta: [
      { title: "Deliverables — Content Team Brief · Cybaem Research" },
      { name: "description", content: "First content drop for SveeraAyurveda: 3 images and 1 reel briefed against our documented content system." },
      { property: "og:title", content: "Deliverables — SveeraAyurveda Content Brief" },
      { property: "og:description", content: "How a strategy becomes shipped creative — image and reel briefs, naming convention and rationale." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <ReportShell
        eyebrow="Case 05 · Deliverables"
        title="Content Team Brief — First Drop"
        intro="Where strategy meets the cutting board. This is the internal brief handed to the content team for SveeraAyurveda's first drop — three images and one reel, mapped to our documented content system with formats, copy, naming and rationale."
      >
        <ReportHtml html={deliverablesHtml} />
      </ReportShell>
    </SiteLayout>
  );
}
