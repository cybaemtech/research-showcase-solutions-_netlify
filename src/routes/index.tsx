import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { SineWaveBg } from "@/components/sine-wave-bg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cybaem Research — Brand discovery, strategy & growth ops" },
      { name: "description", content: "A research-led digital marketing studio. We diagnose the business, model the revenue, and build the engagement that ships it." },
      { property: "og:title", content: "Cybaem Research — Portfolio" },
      { property: "og:description", content: "How we research a brand and ship a launch plan, end-to-end. Featured case: SveeraAyurveda." },
    ],
  }),
  component: Index,
});

const cases = [
  {
    to: "/case/strategy" as const,
    eyebrow: "01 · Strategy",
    title: "6-Month Brand Launch Strategy",
    desc: "Three lensed strategies — Trust-to-Transaction, Festival Flywheel, and Ayurvedacharya Brand Authority — phased across foundation, activation and scale.",
    tag: "CTPO · Strategist · Local · Digital",
  },
  {
    to: "/case/festival-calendar" as const,
    eyebrow: "02 · Revenue Map",
    title: "Maharashtra Festival × Product Calendar",
    desc: "18 festivals from Jun 2026 to Jun 2027 mapped to products, audiences and campaign focus. Conservative revenue projection: ₹20.8L.",
    tag: "18 festivals · ₹20.8L pipeline",
  },
  {
    to: "/case/engagement-model" as const,
    eyebrow: "03 · Commercials",
    title: "Hybrid Engagement Model",
    desc: "Why a setup fee + retainer + revenue share beats pure-retainer or pure-share. Three tiers, a 12-month scenario, and contract terms.",
    tag: "Setup + Retainer + Rev Share",
  },
  {
    to: "/case/team-focus" as const,
    eyebrow: "04 · Execution",
    title: "Team Content Focus — SEO, Performance, Social",
    desc: "What each team builds week one — blog briefs, ad creatives, Reels series, keyword priorities and posting cadence.",
    tag: "SEO · Digital · Social",
  },
];

function Index() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <SineWaveBg />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16">
        <div className="text-xs font-medium uppercase tracking-[0.25em] text-[#3B6D11]">
          Research-led growth studio
        </div>
        <h1 className="mt-4 max-w-4xl text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          We research the business first.
          <span className="text-muted-foreground"> Then we ship the plan that grows it.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Cybaem Research is a small studio that does deep brand discovery, builds the strategy,
          maps the revenue, designs the commercials, and runs the day-one execution — all of it
          on one desk, all of it documented.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link
            to="/case/strategy"
            className="inline-flex items-center rounded-md bg-[#2D4A1E] px-4 py-2 font-medium text-white hover:bg-[#3B6D11]"
          >
            See the featured case study
          </Link>
          <a
            href="#process"
            className="inline-flex items-center rounded-md border border-border px-4 py-2 font-medium hover:bg-accent"
          >
            How we work
          </a>
        </div>
        </div>
      </section>

      <section id="process" className="border-y border-border bg-[#f7f6f1]">
        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-4 gap-8">
          {[
            { n: "01", t: "Discover", d: "Founder interviews, market scan, customer evidence, category gap analysis." },
            { n: "02", t: "Strategise", d: "Multiple strategy directions through four expert lenses — pick what fits the brand." },
            { n: "03", t: "Model", d: "Revenue calendar, product mapping, scenario tables — numbers before pixels." },
            { n: "04", t: "Operate", d: "Engagement model, team focus areas, weekly cadence — built to ship Monday." },
          ].map((s) => (
            <div key={s.n}>
              <div className="text-xs font-medium tracking-[0.2em] text-[#3B6D11]">{s.n}</div>
              <div className="mt-2 text-lg font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Featured case · SveeraAyurveda
            </div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
              An Ayurvedic personal-care brand, ready for launch.
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              7–8 years of private goodwill, an Ayurvedacharya founder, and an IAS-officer network.
              We turned it into four shippable artefacts.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {cases.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group block rounded-lg border border-border bg-card p-6 hover:border-[#3B6D11] hover:shadow-md transition"
            >
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-[#3B6D11]">{c.eyebrow}</div>
              <h3 className="mt-2 text-xl font-semibold group-hover:text-[#2D4A1E]">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <div className="mt-5 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{c.tag}</span>
                <span className="text-[#3B6D11]">Read case →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
