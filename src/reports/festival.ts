export const festivalHtml = String.raw`
<h2 class="sr-only">SveeraAyurveda Maharashtra festival calendar with product mapping and revenue projections June 2026 to June 2027</h2>
<style>
.fw { padding: 4px 0; font-size: 12px; }
.summary-bar { display: grid; grid-template-columns: repeat(4,1fr); gap: 8px; margin-bottom: 16px; }
.s-card { background: var(--color-background-secondary); border-radius: var(--border-radius-md); padding: 10px 12px; border: 0.5px solid var(--color-border-tertiary); }
.s-label { font-size: 9.5px; color: var(--color-text-tertiary); text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 3px; }
.s-val { font-size: 20px; font-weight: 500; color: var(--color-text-primary); }
.s-sub { font-size: 10px; color: var(--color-text-secondary); margin-top: 1px; }

.legend { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 12px; align-items: center; }
.leg { display: flex; align-items: center; gap: 5px; font-size: 11px; color: var(--color-text-secondary); }
.ld { width: 10px; height: 10px; border-radius: 2px; }
.lhigh { background: #27500A; }
.lmid  { background: #854F0B; }
.llow  { background: #3C3489; }
.lspec { background: #085041; }

.fw table { width: 100%; border-collapse: collapse; font-size: 11px; }
.fw thead tr { background: #2D4A1E; }
.fw th { padding: 8px 9px; text-align: left; color: #fff; font-weight: 500; font-size: 10px; letter-spacing: 0.8px; white-space: nowrap; }
.fw th:last-child { text-align: right; }
.fw tbody tr { border-bottom: 0.5px solid var(--color-border-tertiary); }
.fw tbody tr:hover { background: var(--color-background-secondary); }
.fw td { padding: 7px 9px; vertical-align: middle; color: var(--color-text-secondary); line-height: 1.4; }
.fw td:last-child { text-align: right; font-weight: 500; white-space: nowrap; }

.month-row td { background: var(--color-background-secondary); font-size: 10px; font-weight: 500; color: var(--color-text-tertiary); letter-spacing: 1.5px; text-transform: uppercase; padding: 5px 9px; border-bottom: 0.5px solid var(--color-border-tertiary); }

.fest-name { font-weight: 500; color: var(--color-text-primary); font-size: 11.5px; }
.fest-date { font-size: 10px; color: var(--color-text-tertiary); margin-top: 1px; }

.rel-bar { display: flex; gap: 2px; align-items: center; }
.rb { width: 7px; height: 7px; border-radius: 1px; }
.rb-fill-h { background: #3B6D11; }
.rb-fill-m { background: #BA7517; }
.rb-fill-l { background: #534AB7; }
.rb-empty { background: var(--color-border-tertiary); }

.prod-pill { display: inline-flex; align-items: center; gap: 3px; padding: 2px 7px; border-radius: 20px; font-size: 9.5px; font-weight: 500; margin: 1px 2px 1px 0; white-space: nowrap; }
.pp-s { background: #EAF3DE; color: #27500A; border: 0.5px solid #C0DD97; }
.pp-sh { background: #EEEDFE; color: #26215C; border: 0.5px solid #CECBF6; }
.pp-c { background: #FAEEDA; color: #412402; border: 0.5px solid #FAC775; }
.pp-set { background: #FAECE7; color: #4A1B0C; border: 0.5px solid #F0997B; }

.rev-high { color: #27500A; font-size: 12px; }
.rev-mid  { color: #633806; }
.rev-low  { color: #3C3489; }
.rev-spec { color: #085041; }

.focus-text { font-size: 10.5px; color: var(--color-text-secondary); max-width: 160px; }
.target-text { font-size: 10.5px; }

.mh { background: #EAF3DE !important; }
.mm { background: #FEF3C7 !important; }
.ml { background: #F5F3FF !important; }
.ms { background: #E1F5EE !important; }

.total-row td { background: #2D4A1E !important; color: #fff !important; font-weight: 500; font-size: 12px; }
.total-row td.rev-total { color: #D4EDBA !important; font-size: 14px; }
</style>

<style>.fw{zoom:1.45;}@media (max-width:768px){.fw{zoom:1.15;}}</style>
<div class="fw">

  <div class="summary-bar">
    <div class="s-card">
      <div class="s-label">Total Festivals</div>
      <div class="s-val">18</div>
      <div class="s-sub">Jun 2026 – Jun 2027</div>
    </div>
    <div class="s-card">
      <div class="s-label">Peak Revenue Window</div>
      <div class="s-val">Oct–Nov</div>
      <div class="s-sub">Navratri → Diwali season</div>
    </div>
    <div class="s-card">
      <div class="s-label">Est. Total Revenue</div>
      <div class="s-val" style="color:#3B6D11">₹20.8L</div>
      <div class="s-sub">Conservative 12-month</div>
    </div>
    <div class="s-card">
      <div class="s-label">Highest Single Event</div>
      <div class="s-val" style="color:#3B6D11">₹5.4L</div>
      <div class="s-sub">Diwali — Nov 8, 2026</div>
    </div>
  </div>

  <div class="legend">
    <span style="font-size:10px;color:var(--color-text-tertiary);font-weight:500;margin-right:2px">Revenue:</span>
    <span class="leg"><span class="ld lhigh"></span> High (₹1L+)</span>
    <span class="leg"><span class="ld lmid"></span> Medium (₹25K–₹1L)</span>
    <span class="leg"><span class="ld llow"></span> Low (&lt;₹25K)</span>
    <span class="leg"><span class="ld lspec"></span> Maharashtra-special</span>
    <span style="font-size:10px;color:var(--color-text-tertiary);margin-left:6px;font-weight:500">Products:</span>
    <span class="leg"><span class="prod-pill pp-s" style="padding:1px 5px">Soap</span></span>
    <span class="leg"><span class="prod-pill pp-sh" style="padding:1px 5px">Shampoo</span></span>
    <span class="leg"><span class="prod-pill pp-c" style="padding:1px 5px">Conditioner</span></span>
    <span class="leg"><span class="prod-pill pp-set" style="padding:1px 5px">Gift Set</span></span>
  </div>

  <table>
    <thead>
      <tr>
        <th style="width:18%">Festival</th>
        <th style="width:9%">Date</th>
        <th style="width:8%">MH Relevance</th>
        <th style="width:20%">Products to Push</th>
        <th style="width:16%">Target Audience</th>
        <th style="width:16%">Campaign Focus</th>
        <th style="width:13%">Est. Revenue</th>
      </tr>
    </thead>
    <tbody>

      <tr class="month-row"><td colspan="7">▸ July 2026</td></tr>

      <tr class="ms">
        <td><div class="fest-name">Ashadhi Ekadashi</div><div class="fest-date">~Jul 6, 2026</div></td>
        <td>Jul 6</td>
        <td><div class="rel-bar"><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-empty"></span></div></td>
        <td><span class="prod-pill pp-s">Herbal Soap</span><span class="prod-pill pp-sh">Shampoo</span></td>
        <td class="target-text">Pilgrims, devotees, Pune–Pandharpur belt</td>
        <td class="focus-text">Ritual purity — "Ayurvedic cleanse for Wari"</td>
        <td class="rev-spec">₹18,000</td>
      </tr>

      <tr>
        <td><div class="fest-name">Guru Purnima</div><div class="fest-date">Jul 29, 2026</div></td>
        <td>Jul 29</td>
        <td><div class="rel-bar"><span class="rb rb-fill-m"></span><span class="rb rb-fill-m"></span><span class="rb rb-empty"></span><span class="rb rb-empty"></span><span class="rb rb-empty"></span></div></td>
        <td><span class="prod-pill pp-set">Gift Set</span><span class="prod-pill pp-s">Soap</span></td>
        <td class="target-text">Students gifting teachers, spiritual seekers</td>
        <td class="focus-text">Premium guru dakshina gifting</td>
        <td class="rev-low">₹15,000</td>
      </tr>

      <tr class="month-row"><td colspan="7">▸ August 2026</td></tr>

      <tr>
        <td><div class="fest-name">Nag Panchami</div><div class="fest-date">~Aug 7, 2026</div></td>
        <td>Aug 7</td>
        <td><div class="rel-bar"><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-empty"></span><span class="rb rb-empty"></span></div></td>
        <td><span class="prod-pill pp-s">Herbal Soap</span></td>
        <td class="target-text">Women, Maharashtra rural + urban both</td>
        <td class="focus-text">Ritual bath — "Pure Ayurvedic cleanse"</td>
        <td class="rev-low">₹12,000</td>
      </tr>

      <tr class="mm">
        <td><div class="fest-name">Raksha Bandhan</div><div class="fest-date">Aug 28, 2026</div></td>
        <td>Aug 28</td>
        <td><div class="rel-bar"><span class="rb rb-fill-m"></span><span class="rb rb-fill-m"></span><span class="rb rb-fill-m"></span><span class="rb rb-empty"></span><span class="rb rb-empty"></span></div></td>
        <td><span class="prod-pill pp-set">Gift Set</span><span class="prod-pill pp-sh">Shampoo</span><span class="prod-pill pp-c">Conditioner</span></td>
        <td class="target-text">Brothers gifting sisters, families</td>
        <td class="focus-text">"Gift her healthy hair" — sister care hamper</td>
        <td class="rev-mid">₹95,000</td>
      </tr>

      <tr class="month-row"><td colspan="7">▸ September 2026</td></tr>

      <tr class="mh" style="border-left: 3px solid #3B6D11;">
        <td><div class="fest-name">Ganesh Chaturthi</div><div class="fest-date">Sep 14–25, 2026</div></td>
        <td>Sep 14</td>
        <td><div class="rel-bar"><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span></div></td>
        <td><span class="prod-pill pp-set">Gift Set</span><span class="prod-pill pp-s">Soap</span><span class="prod-pill pp-sh">Shampoo</span><span class="prod-pill pp-c">Conditioner</span></td>
        <td class="target-text">All households, pandal organisers, corporate</td>
        <td class="focus-text">10-day campaign — pandal gifting, bulk corporate, "Ganpati bappa morya" branding</td>
        <td class="rev-high">₹2,40,000</td>
      </tr>

      <tr class="month-row"><td colspan="7">▸ October 2026</td></tr>

      <tr class="mh">
        <td><div class="fest-name">Navratri</div><div class="fest-date">Oct 11–20, 2026</div></td>
        <td>Oct 11</td>
        <td><div class="rel-bar"><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-empty"></span></div></td>
        <td><span class="prod-pill pp-sh">Shampoo</span><span class="prod-pill pp-c">Conditioner</span><span class="prod-pill pp-s">Soap</span><span class="prod-pill pp-set">Gift Set</span></td>
        <td class="target-text">Women 25–45, Pune + Mumbai</td>
        <td class="focus-text">Hair & skin care for 9 nights of garba — "Look beautiful naturally"</td>
        <td class="rev-high">₹1,30,000</td>
      </tr>

      <tr>
        <td><div class="fest-name">Dussehra</div><div class="fest-date">Oct 20, 2026</div></td>
        <td>Oct 20</td>
        <td><div class="rel-bar"><span class="rb rb-fill-m"></span><span class="rb rb-fill-m"></span><span class="rb rb-fill-m"></span><span class="rb rb-empty"></span><span class="rb rb-empty"></span></div></td>
        <td><span class="prod-pill pp-set">Gift Set</span><span class="prod-pill pp-s">Soap</span></td>
        <td class="target-text">Families, community exchanges</td>
        <td class="focus-text">New beginnings gifting — post-Navratri push</td>
        <td class="rev-mid">₹48,000</td>
      </tr>

      <tr class="mm">
        <td><div class="fest-name">Karva Chauth</div><div class="fest-date">Oct 29, 2026</div></td>
        <td>Oct 29</td>
        <td><div class="rel-bar"><span class="rb rb-fill-m"></span><span class="rb rb-fill-m"></span><span class="rb rb-empty"></span><span class="rb rb-empty"></span><span class="rb rb-empty"></span></div></td>
        <td><span class="prod-pill pp-sh">Shampoo</span><span class="prod-pill pp-c">Conditioner</span><span class="prod-pill pp-s">Soap</span></td>
        <td class="target-text">Married women, urban Mumbai/Pune</td>
        <td class="focus-text">"Get ready for him — Ayurvedic beauty ritual"</td>
        <td class="rev-mid">₹52,000</td>
      </tr>

      <tr class="month-row"><td colspan="7">▸ November 2026 — PEAK SEASON</td></tr>

      <tr class="mh">
        <td><div class="fest-name">Dhanteras</div><div class="fest-date">Nov 6, 2026</div></td>
        <td>Nov 6</td>
        <td><div class="rel-bar"><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-empty"></span></div></td>
        <td><span class="prod-pill pp-set">Gift Set</span><span class="prod-pill pp-sh">Shampoo</span><span class="prod-pill pp-c">Conditioner</span><span class="prod-pill pp-s">Soap</span></td>
        <td class="target-text">All buyers — auspicious purchase day</td>
        <td class="focus-text">Launch Diwali gift hampers on Dhanteras — "Buy wellness this Dhanteras"</td>
        <td class="rev-high">₹1,60,000</td>
      </tr>

      <tr class="mh" style="border-left: 3px solid #3B6D11;">
        <td><div class="fest-name">Diwali</div><div class="fest-date">Nov 8, 2026</div></td>
        <td>Nov 8</td>
        <td><div class="rel-bar"><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span></div></td>
        <td><span class="prod-pill pp-set">Gift Set</span><span class="prod-pill pp-sh">Shampoo</span><span class="prod-pill pp-c">Conditioner</span><span class="prod-pill pp-s">Soap</span></td>
        <td class="target-text">Corporate + personal — all segments</td>
        <td class="focus-text">Corporate gifting, ₹499/₹999/₹1999 hamper tiers, WhatsApp bulk orders, influencer unboxings</td>
        <td class="rev-high">₹5,40,000</td>
      </tr>

      <tr class="ms">
        <td><div class="fest-name">Bhau Beej</div><div class="fest-date">Nov 11, 2026</div></td>
        <td>Nov 11</td>
        <td><div class="rel-bar"><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span></div></td>
        <td><span class="prod-pill pp-set">Gift Set</span><span class="prod-pill pp-sh">Shampoo</span><span class="prod-pill pp-c">Conditioner</span></td>
        <td class="target-text">Sisters gifting brothers — Maharashtra exclusive</td>
        <td class="focus-text">"Bhau ला द्या Ayurvedic gift" — Marathi-language campaign</td>
        <td class="rev-mid">₹62,000</td>
      </tr>

      <tr>
        <td><div class="fest-name">Chhath Puja</div><div class="fest-date">Nov 15, 2026</div></td>
        <td>Nov 15</td>
        <td><div class="rel-bar"><span class="rb rb-fill-m"></span><span class="rb rb-fill-m"></span><span class="rb rb-empty"></span><span class="rb rb-empty"></span><span class="rb rb-empty"></span></div></td>
        <td><span class="prod-pill pp-s">Herbal Soap</span><span class="prod-pill pp-sh">Shampoo</span></td>
        <td class="target-text">UP/Bihar community in Pune/Mumbai — growing segment</td>
        <td class="focus-text">River-bath purity — "Ayurvedic cleanse for Chhath"</td>
        <td class="rev-low">₹18,000</td>
      </tr>

      <tr class="month-row"><td colspan="7">▸ December 2026 – January 2027</td></tr>

      <tr class="mm">
        <td><div class="fest-name">Christmas + New Year</div><div class="fest-date">Dec 25 – Jan 1</div></td>
        <td>Dec 25</td>
        <td><div class="rel-bar"><span class="rb rb-fill-m"></span><span class="rb rb-fill-m"></span><span class="rb rb-fill-m"></span><span class="rb rb-empty"></span><span class="rb rb-empty"></span></div></td>
        <td><span class="prod-pill pp-set">Gift Set</span><span class="prod-pill pp-sh">Shampoo</span><span class="prod-pill pp-c">Conditioner</span></td>
        <td class="target-text">Urban Pune/Mumbai, IT crowd, millennials</td>
        <td class="focus-text">"New year, natural you" — wellness resolution gifting</td>
        <td class="rev-mid">₹1,10,000</td>
      </tr>

      <tr>
        <td><div class="fest-name">Makar Sankranti</div><div class="fest-date">Jan 14, 2027</div></td>
        <td>Jan 14</td>
        <td><div class="rel-bar"><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-empty"></span></div></td>
        <td><span class="prod-pill pp-s">Til Soap</span><span class="prod-pill pp-set">Gift Set</span></td>
        <td class="target-text">Maharashtra households — tilgul exchange tradition</td>
        <td class="focus-text">"Tilgul ghya, god god bola" — limited til-infused soap edition</td>
        <td class="rev-mid">₹35,000</td>
      </tr>

      <tr class="month-row"><td colspan="7">▸ February – March 2027</td></tr>

      <tr class="mm">
        <td><div class="fest-name">Valentine's Day</div><div class="fest-date">Feb 14, 2027</div></td>
        <td>Feb 14</td>
        <td><div class="rel-bar"><span class="rb rb-fill-m"></span><span class="rb rb-fill-m"></span><span class="rb rb-fill-m"></span><span class="rb rb-empty"></span><span class="rb rb-empty"></span></div></td>
        <td><span class="prod-pill pp-set">Couple Gift Set</span><span class="prod-pill pp-s">Soap</span><span class="prod-pill pp-c">Conditioner</span></td>
        <td class="target-text">Urban couples 22–38, Pune + Mumbai</td>
        <td class="focus-text">"Natural love, natural care" — couple hamper set</td>
        <td class="rev-mid">₹58,000</td>
      </tr>

      <tr class="mh">
        <td><div class="fest-name">Holi</div><div class="fest-date">Mar 23, 2027</div></td>
        <td>Mar 23</td>
        <td><div class="rel-bar"><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-empty"></span></div></td>
        <td><span class="prod-pill pp-sh">Shampoo</span><span class="prod-pill pp-c">Conditioner</span><span class="prod-pill pp-s">Soap</span></td>
        <td class="target-text">All segments — post-Holi hair/skin damage repair</td>
        <td class="focus-text">"Protect before Holi, repair after" — 2-phase campaign</td>
        <td class="rev-high">₹1,35,000</td>
      </tr>

      <tr class="month-row"><td colspan="7">▸ April – June 2027</td></tr>

      <tr class="ms" style="border-left: 3px solid #1D9E75;">
        <td><div class="fest-name">Gudi Padwa</div><div class="fest-date">Apr 7, 2027</div></td>
        <td>Apr 7</td>
        <td><div class="rel-bar"><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span></div></td>
        <td><span class="prod-pill pp-set">Gift Set</span><span class="prod-pill pp-sh">Shampoo</span><span class="prod-pill pp-c">Conditioner</span><span class="prod-pill pp-s">Soap</span></td>
        <td class="target-text">All Maharashtrian households — New Year gifting</td>
        <td class="focus-text">Marathi New Year launch — "नवीन वर्ष, नैसर्गिक सौंदर्य" — full Marathi campaign</td>
        <td class="rev-high">₹1,45,000</td>
      </tr>

      <tr>
        <td><div class="fest-name">Akshaya Tritiya</div><div class="fest-date">Apr 20, 2027</div></td>
        <td>Apr 20</td>
        <td><div class="rel-bar"><span class="rb rb-fill-m"></span><span class="rb rb-fill-m"></span><span class="rb rb-fill-m"></span><span class="rb rb-empty"></span><span class="rb rb-empty"></span></div></td>
        <td><span class="prod-pill pp-set">Gift Set</span><span class="prod-pill pp-sh">Shampoo</span></td>
        <td class="target-text">Families, auspicious purchase occasion</td>
        <td class="focus-text">"Most auspicious day to start your Ayurvedic journey"</td>
        <td class="rev-mid">₹55,000</td>
      </tr>

      <tr class="ms">
        <td><div class="fest-name">Vat Purnima</div><div class="fest-date">Jun 2027</div></td>
        <td>Jun 2027</td>
        <td><div class="rel-bar"><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-fill-h"></span><span class="rb rb-empty"></span></div></td>
        <td><span class="prod-pill pp-sh">Shampoo</span><span class="prod-pill pp-c">Conditioner</span><span class="prod-pill pp-s">Soap</span></td>
        <td class="target-text">Married women — Maharashtra exclusive festival</td>
        <td class="focus-text">"Beauty ritual for Vat Purnima" — women's Ayurvedic care kit</td>
        <td class="rev-mid">₹38,000</td>
      </tr>

      <tr class="total-row">
        <td colspan="6" style="color:#fff;font-weight:500;">Total Projected Revenue — Jun 2026 to Jun 2027 (Conservative Estimate)</td>
        <td class="rev-total">₹20,80,000</td>
      </tr>

    </tbody>
  </table>

  <div style="margin-top:10px;padding:10px 12px;background:var(--color-background-secondary);border-radius:var(--border-radius-md);border:0.5px solid var(--color-border-tertiary);font-size:10.5px;color:var(--color-text-secondary);line-height:1.6;">
    <strong style="color:var(--color-text-primary)">Assumptions:</strong> Estimates based on conservative order projections — Diwali: ~600 units avg ₹900 | Ganesh Chaturthi: ~400 units avg ₹600 | Other high festivals: 100–250 units. AOV for gift sets ₹600–₹1,200; individual products ₹300–₹600. Does not include bulk corporate orders which can 2–3× Diwali numbers alone. AYUSH/FSSAI certification assumed obtained before marketplace listings go live.
  </div>

</div>
`;
