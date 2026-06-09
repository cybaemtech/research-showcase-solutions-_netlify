export const hybridHtml = String.raw`
<h2 class="sr-only">SveeraAyurveda hybrid engagement model proposal with three tiers and revenue scenarios</h2>
<style>
.hw { padding: 4px 0; font-size: 12px; }

.why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 16px; }
.why-card { border-radius: var(--border-radius-md); padding: 11px 13px; border: 0.5px solid var(--color-border-tertiary); }
.wc-green { background: #EAF3DE; border-color: #C0DD97; }
.wc-purple { background: #EEEDFE; border-color: #CECBF6; }
.why-label { font-size: 9.5px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 6px; }
.wl-g { color: #3B6D11; }
.wl-p { color: #3C3489; }
.why-item { display: flex; gap: 6px; font-size: 11px; color: var(--color-text-secondary); margin-bottom: 4px; line-height: 1.4; }
.why-item:last-child { margin-bottom: 0; }
.wi-dot { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; margin-top: 4px; }
.wdg { background: #639922; }
.wdp { background: #534AB7; }

.model-label { font-size: 10px; font-weight: 500; letter-spacing: 1.8px; text-transform: uppercase; color: var(--color-text-tertiary); margin-bottom: 8px; }

.component-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 16px; }
.comp-card { background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: var(--border-radius-lg); padding: 13px 14px; text-align: center; }
.comp-icon { font-size: 22px; margin-bottom: 6px; color: var(--color-text-tertiary); }
.comp-title { font-size: 13px; font-weight: 500; color: var(--color-text-primary); margin-bottom: 3px; }
.comp-desc { font-size: 10.5px; color: var(--color-text-secondary); line-height: 1.5; margin-bottom: 8px; }
.comp-purpose { font-size: 9.5px; padding: 3px 8px; border-radius: 20px; display: inline-block; font-weight: 500; }
.cp-one { background: #FAEEDA; color: #633806; }
.cp-ret { background: #EEEDFE; color: #3C3489; }
.cp-rev { background: #EAF3DE; color: #27500A; }

.tiers { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 16px; }
.tier-card { background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: var(--border-radius-lg); overflow: hidden; }
.tier-card.recommended { border: 2px solid #3B6D11; }
.tier-hdr { padding: 11px 13px; border-bottom: 0.5px solid var(--color-border-tertiary); }
.t1h { background: #EEEDFE; }
.t2h { background: #2D4A1E; }
.t3h { background: #FAEEDA; }
.tier-name { font-size: 13px; font-weight: 500; }
.t1n { color: #3C3489; }
.t2n { color: #fff; }
.t3n { color: #633806; }
.tier-sub { font-size: 10px; margin-top: 2px; }
.t1s { color: #534AB7; }
.t2s { color: rgba(255,255,255,0.65); }
.t3s { color: #854F0B; }
.rec-badge { display: inline-block; background: #D4EDBA; color: #27500A; font-size: 9px; font-weight: 500; padding: 2px 7px; border-radius: 20px; margin-top: 4px; }
.tier-body { padding: 12px 13px; }
.tier-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 7px; padding-bottom: 7px; border-bottom: 0.5px solid var(--color-border-tertiary); }
.tier-row:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
.tr-label { font-size: 10px; color: var(--color-text-tertiary); }
.tr-val { font-size: 12.5px; font-weight: 500; color: var(--color-text-primary); }
.tr-val.green { color: #3B6D11; }
.tr-val.amber { color: #854F0B; }

.scenario-section { margin-bottom: 16px; }
.scenario-label { font-size: 10px; font-weight: 500; letter-spacing: 1.8px; text-transform: uppercase; color: var(--color-text-tertiary); margin-bottom: 10px; }
table.sc { width: 100%; border-collapse: collapse; font-size: 11px; }
table.sc thead tr { background: #2D4A1E; }
table.sc th { padding: 7px 10px; color: #fff; font-weight: 500; font-size: 10px; letter-spacing: 0.5px; text-align: left; }
table.sc th:not(:first-child) { text-align: right; }
table.sc tbody tr { border-bottom: 0.5px solid var(--color-border-tertiary); }
table.sc tbody tr:hover { background: var(--color-background-secondary); }
table.sc td { padding: 7px 10px; color: var(--color-text-secondary); }
table.sc td:not(:first-child) { text-align: right; }
.sc-month { font-weight: 500; color: var(--color-text-primary); font-size: 11px; }
.sc-rev { color: var(--color-text-secondary); }
.sc-earn { font-weight: 500; color: #3B6D11; }
.sc-earn.peak { color: #27500A; font-size: 12px; }
.sc-total { background: #EAF3DE !important; }
.sc-total td { font-weight: 500; color: #27500A !important; }
.sc-peak { background: #FEF3C7 !important; }

.comparison { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 16px; }
.comp-col { border-radius: var(--border-radius-md); border: 0.5px solid var(--color-border-tertiary); overflow: hidden; }
.comp-hdr { padding: 9px 12px; font-size: 12px; font-weight: 500; }
.ch-gray { background: var(--color-background-secondary); color: var(--color-text-secondary); }
.ch-amber { background: #FAEEDA; color: #633806; }
.ch-green { background: #2D4A1E; color: #fff; }
.comp-body { padding: 10px 12px; }
.cbi { display: flex; gap: 6px; font-size: 10.5px; color: var(--color-text-secondary); margin-bottom: 5px; line-height: 1.4; }
.cbi::before { content: '·'; color: var(--color-text-tertiary); font-weight: 700; flex-shrink: 0; }
.cbi.pro { color: #3B6D11; }
.cbi.pro::before { content: '✓'; color: #3B6D11; }
.cbi.con::before { content: '✗'; color: #D85A30; }
.cbi.con { color: #993C1D; }

.terms { background: var(--color-background-secondary); border-radius: var(--border-radius-md); border: 0.5px solid var(--color-border-tertiary); padding: 12px 14px; }
.terms-title { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: var(--color-text-tertiary); margin-bottom: 8px; }
.terms-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px; }
.term-item { font-size: 10.5px; color: var(--color-text-secondary); }
.term-item strong { color: var(--color-text-primary); display: block; font-size: 11px; margin-bottom: 1px; }
</style>

<div class="hw">

  <div class="model-label">Why a hybrid model is the right call</div>
  <div class="why-grid">
    <div class="why-card wc-green">
      <div class="why-label wl-g"><i class="ti ti-leaf" aria-hidden="true"></i>  What it gives the client</div>
      <div class="why-item"><span class="wi-dot wdg"></span>Lower upfront commitment vs pure retainer — less financial risk on an unproven revenue stream</div>
      <div class="why-item"><span class="wi-dot wdg"></span>Cybaem Tech has real skin in the game — incentivised to drive actual sales, not just deliver reports</div>
      <div class="why-item"><span class="wi-dot wdg"></span>Costs scale with success — the more they earn, the more we earn together</div>
      <div class="why-item"><span class="wi-dot wdg"></span>Setup fee covers a defined scope — no ambiguity on what's delivered upfront</div>
    </div>
    <div class="why-card wc-purple">
      <div class="why-label wl-p"><i class="ti ti-building" aria-hidden="true"></i>  What it gives Cybaem Tech</div>
      <div class="why-item"><span class="wi-dot wdp"></span>Retainer covers operational costs — team hours, tools, ad management don't run at a loss</div>
      <div class="why-item"><span class="wi-dot wdp"></span>Setup fee compensates the discovery, strategy and onboarding work already done</div>
      <div class="why-item"><span class="wi-dot wdp"></span>Revenue share creates compounding upside as the brand scales — festival season alone can 3× retainer earnings</div>
      <div class="why-item"><span class="wi-dot wdp"></span>Protects against clients who don't convert — guaranteed floor even if sales ramp slowly</div>
    </div>
  </div>

  <div class="model-label">The three components — how each works</div>
  <div class="component-row">
    <div class="comp-card">
      <div class="comp-icon"><i class="ti ti-tool" aria-hidden="true"></i></div>
      <div class="comp-title">One-Time Setup Fee</div>
      <div class="comp-desc">Paid once at signing. Covers brand audit, D2C website, social media setup, WhatsApp catalogue, product photography brief, Amazon/Flipkart onboarding, and content strategy document.</div>
      <span class="comp-purpose cp-one">Covers past + upfront work</span>
    </div>
    <div class="comp-card">
      <div class="comp-icon"><i class="ti ti-calendar-repeat" aria-hidden="true"></i></div>
      <div class="comp-title">Monthly Retainer</div>
      <div class="comp-desc">Fixed monthly amount. Covers team operations — content creation, ad management, SEO, reporting, WhatsApp broadcasts, and account management. Payable on the 1st of each month.</div>
      <span class="comp-purpose cp-ret">Covers ongoing operations</span>
    </div>
    <div class="comp-card">
      <div class="comp-icon"><i class="ti ti-trending-up" aria-hidden="true"></i></div>
      <div class="comp-title">Revenue Share</div>
      <div class="comp-desc">% of net revenue from all Cybaem Tech–managed digital channels — D2C website, Amazon, Flipkart, WhatsApp orders, and Meta/Google ad-attributed sales. Settled monthly with invoice.</div>
      <span class="comp-purpose cp-rev">Rewards growth together</span>
    </div>
  </div>

  <div class="model-label">Three proposal tiers — pick what fits the conversation</div>
  <div class="tiers">

    <div class="tier-card">
      <div class="tier-hdr t1h">
        <div class="tier-name t1n">Starter Hybrid</div>
        <div class="tier-sub t1s">Lower entry, higher share</div>
      </div>
      <div class="tier-body">
        <div class="tier-row"><span class="tr-label">One-time setup</span><span class="tr-val amber">₹25,000</span></div>
        <div class="tier-row"><span class="tr-label">Monthly retainer</span><span class="tr-val amber">₹20,000</span></div>
        <div class="tier-row"><span class="tr-label">Revenue share</span><span class="tr-val amber">18%</span></div>
        <div class="tier-row"><span class="tr-label">Min. commitment</span><span class="tr-val">6 months</span></div>
        <div class="tier-row"><span class="tr-label">Best for</span><span class="tr-val" style="font-size:10px;text-align:right;max-width:120px">Client wants max skin-in-game from us</span></div>
      </div>
    </div>

    <div class="tier-card recommended">
      <div class="tier-hdr t2h">
        <div class="tier-name t2n">Balanced Hybrid</div>
        <div class="tier-sub t2s">Recommended</div>
        <span class="rec-badge">Best fit for SveeraAyurveda</span>
      </div>
      <div class="tier-body">
        <div class="tier-row"><span class="tr-label">One-time setup</span><span class="tr-val green">₹35,000</span></div>
        <div class="tier-row"><span class="tr-label">Monthly retainer</span><span class="tr-val green">₹30,000</span></div>
        <div class="tier-row"><span class="tr-label">Revenue share</span><span class="tr-val green">15%</span></div>
        <div class="tier-row"><span class="tr-label">Min. commitment</span><span class="tr-val">6 months</span></div>
        <div class="tier-row"><span class="tr-label">Best for</span><span class="tr-val" style="font-size:10px;text-align:right;max-width:120px">Fair balance, sustainable ops for both sides</span></div>
      </div>
    </div>

    <div class="tier-card">
      <div class="tier-hdr t3h">
        <div class="tier-name t3n">Growth Hybrid</div>
        <div class="tier-sub t3s">Higher retainer, lower share</div>
      </div>
      <div class="tier-body">
        <div class="tier-row"><span class="tr-label">One-time setup</span><span class="tr-val">₹50,000</span></div>
        <div class="tier-row"><span class="tr-label">Monthly retainer</span><span class="tr-val">₹45,000</span></div>
        <div class="tier-row"><span class="tr-label">Revenue share</span><span class="tr-val">10%</span></div>
        <div class="tier-row"><span class="tr-label">Min. commitment</span><span class="tr-val">6 months</span></div>
        <div class="tier-row"><span class="tr-label">Best for</span><span class="tr-val" style="font-size:10px;text-align:right;max-width:120px">Client expects high volumes, wants to protect margins at scale</span></div>
      </div>
    </div>

  </div>

  <div class="scenario-section">
    <div class="scenario-label">Revenue scenario — Balanced Hybrid (₹30K retainer + 15% share)</div>
    <table class="sc">
      <thead>
        <tr>
          <th>Month / Event</th>
          <th>Est. Brand Revenue</th>
          <th>Retainer</th>
          <th>Rev Share (15%)</th>
          <th>Total Cybaem Earnings</th>
          <th>Client Net (After Share)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><span class="sc-month">Month 1–2 · Setup + Launch</span></td><td class="sc-rev">₹0 (pre-revenue)</td><td>₹30,000 × 2</td><td>₹0</td><td class="sc-earn">₹60,000</td><td>—</td></tr>
        <tr><td><span class="sc-month">Aug · Raksha Bandhan</span></td><td class="sc-rev">₹95,000</td><td>₹30,000</td><td>₹14,250</td><td class="sc-earn">₹44,250</td><td>₹80,750</td></tr>
        <tr class="sc-peak"><td><span class="sc-month">Sep · Ganesh Chaturthi</span></td><td class="sc-rev">₹2,40,000</td><td>₹30,000</td><td>₹36,000</td><td class="sc-earn peak">₹66,000</td><td>₹2,04,000</td></tr>
        <tr><td><span class="sc-month">Oct · Navratri + Dussehra</span></td><td class="sc-rev">₹1,78,000</td><td>₹30,000</td><td>₹26,700</td><td class="sc-earn">₹56,700</td><td>₹1,51,300</td></tr>
        <tr class="sc-peak"><td><span class="sc-month">Nov · Diwali Season</span></td><td class="sc-rev">₹7,80,000</td><td>₹30,000</td><td>₹1,17,000</td><td class="sc-earn peak">₹1,47,000</td><td>₹6,63,000</td></tr>
        <tr><td><span class="sc-month">Dec–Jan · Festive tail</span></td><td class="sc-rev">₹1,45,000</td><td>₹60,000</td><td>₹21,750</td><td class="sc-earn">₹81,750</td><td>₹1,23,250</td></tr>
        <tr><td><span class="sc-month">Feb–Mar · Holi + Valentine</span></td><td class="sc-rev">₹1,93,000</td><td>₹60,000</td><td>₹28,950</td><td class="sc-earn">₹88,950</td><td>₹1,64,050</td></tr>
        <tr class="sc-peak"><td><span class="sc-month">Apr · Gudi Padwa</span></td><td class="sc-rev">₹2,00,000</td><td>₹30,000</td><td>₹30,000</td><td class="sc-earn peak">₹60,000</td><td>₹1,70,000</td></tr>
        <tr class="sc-total"><td>Total · 12 Months</td><td>₹17,31,000</td><td>₹3,90,000</td><td>₹2,74,650</td><td>₹6,64,650</td><td>₹14,56,350</td></tr>
      </tbody>
    </table>
  </div>

  <div class="model-label">Why not pure revenue share or pure retainer</div>
  <div class="comparison">
    <div class="comp-col">
      <div class="comp-hdr ch-amber">Pure Revenue Share (Client wanted)</div>
      <div class="comp-body">
        <div class="cbi pro">Client pays nothing until revenue flows</div>
        <div class="cbi con">Cybaem Tech runs at loss for 2–3 months</div>
        <div class="cbi con">No operational cost cover — team quality drops</div>
        <div class="cbi con">Cybaem has no guaranteed floor — exits if sales slow</div>
        <div class="cbi con">Attribution disputes kill the relationship over time</div>
      </div>
    </div>
    <div class="comp-col">
      <div class="comp-hdr ch-gray">Pure Retainer (Original ₹65K)</div>
      <div class="comp-body">
        <div class="cbi pro">Predictable for Cybaem Tech operations</div>
        <div class="cbi pro">No revenue attribution complexity</div>
        <div class="cbi con">High risk for pre-revenue brand — ₹3.9L/6mo upfront</div>
        <div class="cbi con">Cybaem has zero incentive to chase sales volume</div>
        <div class="cbi con">Client feels like they're paying for activity, not results</div>
        <div class="cbi con">Likely to be rejected — client already said revenue share</div>
      </div>
    </div>
    <div class="comp-col">
      <div class="comp-hdr ch-green">Hybrid Model (Proposed)</div>
      <div class="comp-body">
        <div class="cbi pro">Cybaem operations covered by retainer</div>
        <div class="cbi pro">Client's risk is ₹30K/month — not ₹65K</div>
        <div class="cbi pro">Revenue share aligns incentives completely</div>
        <div class="cbi pro">Festival seasons reward both parties proportionally</div>
        <div class="cbi pro">Setup fee signals serious commitment from client</div>
      </div>
    </div>
  </div>

  <div class="terms">
    <div class="terms-title">Recommended contract terms to include</div>
    <div class="terms-grid">
      <div class="term-item"><strong>Attribution window</strong>Last-click + WhatsApp orders tracked separately. 7-day attribution on Meta/Google ads.</div>
      <div class="term-item"><strong>Revenue definition</strong>Net revenue after returns/refunds. Excludes COD-refused orders. Settled on the 7th of each month.</div>
      <div class="term-item"><strong>Minimum lock-in</strong>6-month minimum. Month 7 onwards: either party can exit with 30-day written notice.</div>
      <div class="term-item"><strong>Revenue floor clause</strong>If brand revenue exceeds ₹5L/month, rev share drops to 12% (protects client at scale).</div>
      <div class="term-item"><strong>Setup deliverables</strong>Clearly scoped: website, social handles, WhatsApp catalogue, content calendar, onboarding doc.</div>
      <div class="term-item"><strong>Review milestone</strong>90-day performance review — both parties can renegotiate tier based on actual traction.</div>
    </div>
  </div>

</div>
`;
