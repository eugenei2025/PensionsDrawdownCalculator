# Pensions Drawdown Calculator

An interactive UK pension drawdown planner for two people (EI & AI). Single-page
static app — HTML, CSS and JavaScript with Chart.js. No build step.

## Features

- Year-by-year projection (2025–2063) of DC (Parmenion) pots, DB pensions
  (State, Avon, Civil Service, Teachers), tax, net income and family excess
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
  browser), pick a baseline, and compare it against the live scenario — key
  metric delta table (tax, depletion ages, pots at 85, excess, TFC), overlaid
  cumulative tax/excess and pot-balance charts, CSV export, and an extra
  comparison page in the Print/PDF summary
- Scenario save/load (JSON), reset to defaults, print/PDF summary

## Running

It is a static site: open `index.html` or serve the folder with any static
server. Deployed via GitHub Pages from the `main` branch root.

## Disclaimer

For planning purposes only. Not financial advice.
