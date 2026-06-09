export const strategyHtml = String.raw`
<h2 class="sr-only">SveeraAyurveda 6-month brand launch strategy across three approaches with expert lens breakdown</h2>

<style>
.sw { padding: 4px 0 0; font-size: 13px; }
.lenses { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 20px; }
.lens { display: inline-flex; align-items: center; gap: 5px; padding: 5px 11px; border-radius: 20px; font-size: 11px; font-weight: 500; border: 0.5px solid; }
.l1 { background:#EEEDFE; color:#3C3489; border-color:#AFA9EC; }
.l2 { background:#E1F5EE; color:#085041; border-color:#5DCAA5; }
.l3 { background:#FAEEDA; color:#633806; border-color:#EF9F27; }
.l4 { background:#FAECE7; color:#712B13; border-color:#F0997B; }

.strat { background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: var(--border-radius-lg); margin-bottom: 14px; overflow: hidden; }
.strat-hdr { padding: 14px 18px 12px; border-bottom: 0.5px solid var(--color-border-tertiary); }
.strat-num { font-size: 11px; font-weight: 500; letter-spacing: 1.5px; color: var(--color-text-tertiary); text-transform: uppercase; margin-bottom: 3px; }
.strat-name { font-size: 17px; font-weight: 500; color: var(--color-text-primary); margin-bottom: 2px; }
.strat-tag { font-size: 12px; color: var(--color-text-secondary); }
.strat-body { padding: 14px 18px; }

.phases { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 14px; }
.phase { border-radius: var(--border-radius-md); padding: 10px 11px; border: 0.5px solid var(--color-border-tertiary); }
.ph1 { background:#EAF3DE; border-color:#C0DD97; }
.ph2 { background:#FAEEDA; border-color:#FAC775; }
.ph3 { background:#EEEDFE; border-color:#CECBF6; }
.phase-label { font-size: 10px; font-weight: 500; margin-bottom: 5px; }
.ph1 .phase-label { color:#3B6D11; }
.ph2 .phase-label { color:#854F0B; }
.ph3 .phase-label { color:#3C3489; }
.phase-item { font-size: 11px; color: var(--color-text-secondary); margin-bottom: 3px; display: flex; gap: 5px; align-items: flex-start; line-height: 1.4; }
.phase-item::before { content: '·'; flex-shrink: 0; font-weight: 700; margin-top: -1px; }
.ph1 .phase-item::before { color: #639922; }
.ph2 .phase-item::before { color: #BA7517; }
.ph3 .phase-item::before { color: #534AB7; }

.expert-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; margin-bottom: 12px; }
.expert-card { padding: 9px 11px; border-radius: var(--border-radius-md); border: 0.5px solid var(--color-border-tertiary); background: var(--color-background-secondary); }
.expert-label { font-size: 10px; font-weight: 500; display: flex; align-items: center; gap: 5px; margin-bottom: 4px; }
.el1 { color:#3C3489; }
.el2 { color:#085041; }
.el3 { color:#633806; }
.el4 { color:#712B13; }
.expert-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
.ed1 { background:#534AB7; }
.ed2 { background:#1D9E75; }
.ed3 { background:#BA7517; }
.ed4 { background:#D85A30; }
.expert-text { font-size: 11.5px; color: var(--color-text-secondary); line-height: 1.5; }

.kpi-row { display: flex; gap: 7px; flex-wrap: wrap; }
.kpi { display: inline-flex; align-items: center; gap: 5px; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 500; background: var(--color-background-secondary); border: 0.5px solid var(--color-border-tertiary); color: var(--color-text-secondary); }
.kpi i { font-size: 13px; }
</style>

<div class="sw">
  <div class="lenses">
    <span class="lens l1"><i class="ti ti-cpu" aria-hidden="true"></i> CTPO</span>
    <span class="lens l2"><i class="ti ti-chess" aria-hidden="true"></i> Strategist</span>
    <span class="lens l3"><i class="ti ti-map-pin" aria-hidden="true"></i> Local Marketing</span>
    <span class="lens l4"><i class="ti ti-speakerphone" aria-hidden="true"></i> Digital Marketing</span>
  </div>

  <div class="strat">
    <div class="strat-hdr">
      <div class="strat-num">Strategy 01 · Recommended First</div>
      <div class="strat-name">Trust-to-Transaction Engine</div>
      <div class="strat-tag">Convert 7–8 years of private goodwill into public brand authority &amp; first sales</div>
    </div>
    <div class="strat-body">
      <div class="phases">
        <div class="phase ph1">
          <div class="phase-label">Month 1–2 · Foundation</div>
          <div class="phase-item">Map &amp; contact all past gift recipients via WhatsApp</div>
          <div class="phase-item">Collect 10–15 video/text testimonials from real users</div>
          <div class="phase-item">Launch D2C website with trust-first design</div>
          <div class="phase-item">Set up Instagram, Facebook &amp; Google Business Profile</div>
        </div>
        <div class="phase ph2">
          <div class="phase-label">Month 3–4 · Activation</div>
          <div class="phase-item">Run testimonial-led Meta ads targeting Pune + Mumbai</div>
          <div class="phase-item">WhatsApp broadcast to warm network — first commercial offer</div>
          <div class="phase-item">Early-adopter pricing for existing gift recipients</div>
          <div class="phase-item">Google retargeting for website visitors</div>
        </div>
        <div class="phase ph3">
          <div class="phase-label">Month 5–6 · Scale</div>
          <div class="phase-item">Referral programme: existing users bring 2 new buyers</div>
          <div class="phase-item">Expand geo targeting to Nashik, Nagpur, Hyderabad</div>
          <div class="phase-item">Lookalike audience ads from first 100 buyers</div>
          <div class="phase-item">Google Reviews campaign — 50+ verified reviews</div>
        </div>
      </div>
      <div class="expert-grid">
        <div class="expert-card">
          <div class="expert-label el1"><span class="expert-dot ed1"></span> CTPO</div>
          <div class="expert-text">Build a lightweight WhatsApp CRM (Google Sheet + automation) to track every past recipient. AI-assisted follow-up messages personalised by product gifted.</div>
        </div>
        <div class="expert-card">
          <div class="expert-label el2"><span class="expert-dot ed2"></span> Strategist</div>
          <div class="expert-text">The brand story IS the moat. An IAS officer's network vouching for a product beats any ad campaign. Position the testimonials as the proof of credibility, not just product reviews.</div>
        </div>
        <div class="expert-card">
          <div class="expert-label el3"><span class="expert-dot ed3"></span> Local Marketing</div>
          <div class="expert-text">Hyperlocal launch — SAKAL Nagar &amp; Magarpatta first. These are high-income, brand-conscious localities. Leaflets in residential society offices + WhatsApp society groups.</div>
        </div>
        <div class="expert-card">
          <div class="expert-label el4"><span class="expert-dot ed4"></span> Digital Marketing</div>
          <div class="expert-text">Run UGC (user-generated content) campaigns. Offer free products to first 30 buyers in exchange for honest Instagram reels. Seed the social proof before scaling paid ads.</div>
        </div>
      </div>
      <div class="kpi-row">
        <span class="kpi"><i class="ti ti-target" aria-hidden="true"></i> Target: First 200 paying customers</span>
        <span class="kpi"><i class="ti ti-star" aria-hidden="true"></i> 50+ Google &amp; Insta reviews</span>
        <span class="kpi"><i class="ti ti-repeat" aria-hidden="true"></i> 40% repeat purchase rate</span>
        <span class="kpi"><i class="ti ti-currency-rupee" aria-hidden="true"></i> ₹3–5L revenue by month 6</span>
      </div>
    </div>
  </div>

  <div class="strat">
    <div class="strat-hdr">
      <div class="strat-num">Strategy 02 · Highest Revenue Potential</div>
      <div class="strat-name">Festival &amp; Gifting Commerce Flywheel</div>
      <div class="strat-tag">Own India's gifting calendar — corporate + personal gifting as the primary sales engine</div>
    </div>
    <div class="strat-body">
      <div class="phases">
        <div class="phase ph1">
          <div class="phase-label">Month 1–2 · Foundation</div>
          <div class="phase-item">Design premium gift boxes: ₹499, ₹999 &amp; ₹1,999 tiers</div>
          <div class="phase-item">Build gifting landing page with WhatsApp ordering flow</div>
          <div class="phase-item">Pitch corporate gifting to IAS network contacts (B2B)</div>
          <div class="phase-item">Identify 10 wedding planners in Pune for tie-ups</div>
        </div>
        <div class="phase ph2">
          <div class="phase-label">Month 3–4 · Activation</div>
          <div class="phase-item">Launch Diwali gifting campaign — 8 weeks ahead</div>
          <div class="phase-item">Partner with 3–5 wedding planners as curated gifting add-on</div>
          <div class="phase-item">LinkedIn campaign targeting HR &amp; Admin managers (corporate gifting)</div>
          <div class="phase-item">WhatsApp catalogue with instant gifting checkout</div>
        </div>
        <div class="phase ph3">
          <div class="phase-label">Month 5–6 · Scale</div>
          <div class="phase-item">Deepen corporate pipeline: target IT parks in Pune/Mumbai</div>
          <div class="phase-item">Add Navratri, Holi &amp; New Year editions to gifting range</div>
          <div class="phase-item">Introduce bulk gifting discounts: 10, 25, 50+ units</div>
          <div class="phase-item">Amazon gifting section listing (post FSSAI approval)</div>
        </div>
      </div>
      <div class="expert-grid">
        <div class="expert-card">
          <div class="expert-label el1"><span class="expert-dot ed1"></span> CTPO</div>
          <div class="expert-text">Build a gifting configurator on the website — pick products, customise box, add name/message, checkout via UPI. Automated WhatsApp confirmation + tracking flow for corporate orders.</div>
        </div>
        <div class="expert-card">
          <div class="expert-label el2"><span class="expert-dot ed2"></span> Strategist</div>
          <div class="expert-text">The IAS network is the unfair advantage for corporate gifting. One bulk order to a government department or PSU is worth 200 individual sales. Prioritise B2B over B2C for first 3 months.</div>
        </div>
        <div class="expert-card">
          <div class="expert-label el3"><span class="expert-dot ed3"></span> Local Marketing</div>
          <div class="expert-text">Pune has 30,000+ weddings annually. Every wedding is a gifting opportunity. Partner with Magarpatta &amp; SAKAL Nagar community halls, event managers &amp; caterers as referral network.</div>
        </div>
        <div class="expert-card">
          <div class="expert-label el4"><span class="expert-dot ed4"></span> Digital Marketing</div>
          <div class="expert-text">Run Instagram &amp; Facebook "Diwali gifting" campaign 6 weeks before the festival. Target audience: 28–45, Pune + Mumbai, interested in gifting, organic products &amp; wellness. Budget: ₹15–20K/campaign.</div>
        </div>
      </div>
      <div class="kpi-row">
        <span class="kpi"><i class="ti ti-building" aria-hidden="true"></i> 5+ corporate gifting accounts</span>
        <span class="kpi"><i class="ti ti-gift" aria-hidden="true"></i> 500+ gifting units at Diwali</span>
        <span class="kpi"><i class="ti ti-users" aria-hidden="true"></i> 3 wedding planner tie-ups</span>
        <span class="kpi"><i class="ti ti-currency-rupee" aria-hidden="true"></i> ₹8–12L revenue by month 6</span>
      </div>
    </div>
  </div>

  <div class="strat">
    <div class="strat-hdr">
      <div class="strat-num">Strategy 03 · Longest-lasting Asset</div>
      <div class="strat-name">The Ayurvedacharya Brand Authority</div>
      <div class="strat-tag">Build Dr.'s expert voice as a content engine that attracts, educates &amp; converts organically</div>
    </div>
    <div class="strat-body">
      <div class="phases">
        <div class="phase ph1">
          <div class="phase-label">Month 1–2 · Foundation</div>
          <div class="phase-item">Launch Dr.'s Instagram as the brand face (Reels: Ayurvedic tips)</div>
          <div class="phase-item">Start a YouTube Shorts series: "Why your shampoo is harming you"</div>
          <div class="phase-item">Publish 4 SEO blog posts: Ayurvedic hair care, natural soaps</div>
          <div class="phase-item">Set up Google Business profile with AYUSH certification story</div>
        </div>
        <div class="phase ph2">
          <div class="phase-label">Month 3–4 · Activation</div>
          <div class="phase-item">Collaborate with 2–3 wellness micro-influencers (50K–200K)</div>
          <div class="phase-item">Weekly Instagram Lives: Q&amp;A on Ayurvedic personal care</div>
          <div class="phase-item">Target: rank on Google for "Ayurvedic shampoo Pune"</div>
          <div class="phase-item">Repurpose Reels as WhatsApp Status content for existing users</div>
        </div>
        <div class="phase ph3">
          <div class="phase-label">Month 5–6 · Scale</div>
          <div class="phase-item">Host a free Ayurvedic skincare workshop in Pune (PR event)</div>
          <div class="phase-item">Pitch Dr. to regional media: Sakal, Loksatta, TV9 Marathi</div>
          <div class="phase-item">Launch an email newsletter: "Ayurvedic Living" — 1,000 subscribers</div>
          <div class="phase-item">Amazon SEO content optimised listings (post FSSAI)</div>
        </div>
      </div>
      <div class="expert-grid">
        <div class="expert-card">
          <div class="expert-label el1"><span class="expert-dot ed1"></span> CTPO</div>
          <div class="expert-text">Build an AI-powered content repurposing pipeline — one Reel script becomes a blog post, 3 WhatsApp messages &amp; a YouTube Short automatically. Maximise Dr.'s limited time with zero content waste.</div>
        </div>
        <div class="expert-card">
          <div class="expert-label el2"><span class="expert-dot ed2"></span> Strategist</div>
          <div class="expert-text">Dr.'s face IS the brand differentiation. No competitor has a practising Ayurvedacharya as founder. "Made by the doctor who uses it herself" is the headline no marketing budget can manufacture.</div>
        </div>
        <div class="expert-card">
          <div class="expert-label el3"><span class="expert-dot ed3"></span> Local Marketing</div>
          <div class="expert-text">Tie up with local yoga studios, organic markets (Pune's Organic Farmers Market) &amp; Ayurvedic clinics. Dr. as a guest speaker builds local authority &amp; drives offline-to-online traffic at near-zero cost.</div>
        </div>
        <div class="expert-card">
          <div class="expert-label el4"><span class="expert-dot ed4"></span> Digital Marketing</div>
          <div class="expert-text">SEO goldmine: "Ayurvedic shampoo without sulphate", "natural soap for dry skin India" — zero competition, high intent. Ranking on 5 such terms drives free traffic permanently with no ongoing ad spend.</div>
        </div>
      </div>
      <div class="kpi-row">
        <span class="kpi"><i class="ti ti-brand-instagram" aria-hidden="true"></i> 5,000+ Instagram followers</span>
        <span class="kpi"><i class="ti ti-seeding" aria-hidden="true"></i> 5 keywords ranked on Google</span>
        <span class="kpi"><i class="ti ti-news" aria-hidden="true"></i> 2 regional media features</span>
        <span class="kpi"><i class="ti ti-trending-up" aria-hidden="true"></i> 30% organic traffic by month 6</span>
      </div>
    </div>
  </div>
</div>
`;
