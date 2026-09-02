# Pensions Drawdown Calculator

An interactive UK pension drawdown planner for two people (EI & AI). Single-page
static app — HTML, CSS and JavaScript with Chart.js. No build step.

## Features

- Year-by-year projection (2025–2063) of DC (Parmenion) pots, DB pensions
  (State, Avon, Civil Service, Teachers), tax, net income and family excess
- Charts: pot balances, income/excess, tax utilisation, and a stacked bar
  chart of family gross income split by income source with a living-costs
  overlay line
- Accumulation phase with date-aware monthly contributions and growth
- Per-pension growth rates with on/off toggles
- UK income tax with personal allowance, basic/higher bands and threshold
  indexation from a configurable year
- Inflation step-change support; optional inflation linking of target income
  and living costs
- DB 25% tax-free lump sums (opt-in, grown to the year taken; annual pension
  adjusts ±25% when toggled)
- Parmenion 25% tax-free lump sum (auto-calculated from the pot at the
  chosen year)
- **Drawdown strategies per person**: standard (fully taxable) or
  **phased tax-free cash drawdown** — uses each person's remaining 25% TFC
  entitlement (auto-calculated as 25% of the pot at drawdown start, or manual)
  until exhausted
- Optimisers: depletion-age targeting and 20%-band tax optimisation, with
  automatic re-calculation when strategy or lump-sum settings change
- Manual per-year income overrides by clicking Target cells
- **Mortality planning**: optional death per person, entered as **year or age
  (the two auto-sync from the date of birth)**, with survivor
  transfers (the deceased's remaining Parmenion pot transfers in full into the
  survivor's own pot — withdrawals tax-free on death before 75, taxable at
  75+; AI receives 50% of EI's Avon pension and 3/8 (37.5%) of his Civil
  Service pension each year; EI receives a £2,000/yr survivor pension plus a
  one-off £80,000 payment that moves straight into his Parmenion pot). Family
  living costs reduce by a configurable percentage from the
  death year, and the survivor uses the transferred money like their own
  pensions: their drawdown rises if needed so net income meets the reduced
  living costs as a minimum. A per-person **Mort** column in the year-by-year
  table shows the money received from the deceased partner each year — the
  annual survivor pension, and in the death year the pot transfer (for EI
  including the £80,000 payment) — hover for the breakdown
- `audit-mortality.js`: Node audit harness that extracts the engine and
  verifies the mortality transfer/payment rules (`node audit-mortality.js`)
- **Scenario snapshots & comparison**: snapshot any result set (stored in the
  browser), pick a baseline, and compare other snapshots and/or the live
  scenario against it in a **year-by-year table** (Year / EI age / AI age ×
  per-year family excess income and total tax, with ▲/▼ deltas vs the
  baseline, a totals row, and vertical scenario headers). A flags row notes
  each scenario's lump sums, phased Parmenion drawdown and mortality years.
  Overlaid cumulative tax/excess and pot-balance charts, CSV export, and an
  extra comparison page in the Print/PDF summary.
- **Collapsible sections**: charts, Key Outcomes, the Year-by-Year table and
  Scenario Comparison all toggle open/closed from their titles (state
  persists in the browser).
- **Mortality Sensitivity card**: answers "what is the financial impact on the
  survivor if one of them dies, and how much does the year of death matter?"
  Two independent scenario blocks — *If EI dies (impact on AI)* and *If AI dies
  (impact on EI)* — each sweeping the death year 2025–2063 and rerunning the
  full projection (survivor transfers, living-cost reduction and the survivor
  minimum drawdown all applied). Per scenario: a plain-English verdict naming
  the hardest death year, a chart of the survivor's net income minus reduced
  living costs (typical year and tightest year — below £0 means the pots
  cannot cover living costs), and a chart of the survivor's Parmenion pot at
  age 90. All chart axes show the year together with both ages. Auto-detects
  parameter changes and offers a re-run.
- Scenario save/load (JSON), reset to defaults, print/PDF summary

## Running

It is a static site: open `index.html` or serve the folder with any static
server. For a live preview with auto-reload friendly hosting, run
`npm run dev` (starts `server.js`, a tiny dependency-free static server, on
port 7100 by default; override with `npm run dev -- --port 8080`).
Deployed via GitHub Pages from the `main` branch root.

## Disclaimer

For planning purposes only. Not financial advice.
