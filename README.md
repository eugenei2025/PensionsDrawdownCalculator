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
- **Mortality planning**: optionally model either person dying in a chosen
  year. Their pensions and drawdown stop; the survivor receives the
  survivor's benefits (AI: 50% of EI's Avon & Civil Service pensions; EI:
  £2,000/yr plus a one-off £80,000 tax-free payment), family living costs
  reduce by a configurable percentage (single vs couple), and the survivor
  inherits the Parmenion pot — withdrawals from the inherited pot are
  tax-free if death was before age 75, otherwise taxed as the survivor's
  income (per pension death-benefit rules). Death years are marked † in the
  projection table.
- Scenario save/load (JSON), reset to defaults, print/PDF summary

## Running

It is a static site: open `index.html` or serve the folder with any static
server. For a live preview with auto-reload friendly hosting, run
`npm run dev` (starts `server.js`, a tiny dependency-free static server, on
port 7100 by default; override with `npm run dev -- --port 8080`).
Deployed via GitHub Pages from the `main` branch root.

## Disclaimer

For planning purposes only. Not financial advice.
