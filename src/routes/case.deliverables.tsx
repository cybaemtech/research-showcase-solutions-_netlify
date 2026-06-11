import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ReportShell, ReportHtml } from "@/components/report-shell";
import { deliverablesHtml } from "@/reports/deliverables";
import posterOne from "@/assets/sveera-poster-1.png.asset.json";
import ingredientsProof from "@/assets/sveera-ingredients-proof.png.asset.json";
import ingredientPoster from "@/assets/sveera-ingredient-poster.png.asset.json";
import founderProof from "@/assets/sveera-founder-proof.png.asset.json";
import chemicalVsAyurvedic from "@/assets/sveera-chemical-vs-ayurvedic.png.asset.json";

const proofOfWork = [
  {
    title: "Launch poster",
    note: "Executed creative from the team brief",
    asset: posterOne,
  },
  {
    title: "Ingredient education visual",
    note: "Educational deliverable based on the ingredient content system",
    asset: ingredientsProof,
  },
  {
    title: "Ingredient-led product poster",
    note: "Benefit-led proof of execution for the image brief direction",
    asset: ingredientPoster,
  },
  {
    title: "Founder-led brand creative",
    note: "Trust-led asset using doctor identity and product staging",
    asset: founderProof,
  },
  {
    title: "Chemical vs Ayurvedic comparison",
    note: "Direct-impact performance creative translated from strategy into output",
    asset: chemicalVsAyurvedic,
  },
] as const;

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
        <div className="space-y-12">
          <ReportHtml html={deliverablesHtml} />

          <section className="border-t border-border pt-8" aria-labelledby="proof-of-work-heading">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Proof of work</p>
              <h2 id="proof-of-work-heading" className="mt-2 text-2xl font-semibold tracking-tight">
                Final creatives produced from this brief
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                These are sample outputs created by the team from the deliverables and content directions above.
              </p>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {proofOfWork.map((item) => (
                <figure key={item.title} className="overflow-hidden rounded-md border border-border bg-background">
                  <img
                    src={item.asset.url}
                    alt={item.title}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                  <figcaption className="border-t border-border px-4 py-3">
                    <div className="text-sm font-medium text-foreground">{item.title}</div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.note}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>
      </ReportShell>
    </SiteLayout>
  );
}

