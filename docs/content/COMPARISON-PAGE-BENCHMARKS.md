# Comparison page benchmarks

Updated 2026-10-03 for the user's expanded aeroponics vs hydroponics brief.
After being asked about conflicting ratios, the user requested the most
reasonable figures from the supplied material. The page presents the
reconciled facility estimates as modelling, not demonstrated performance.
This qualification supersedes the older numerical hold for this page only.

## Scope and calculations

Source: supplied Leafy Greens Indoor Farm Solution proposal, pp.4, 6, 12,
as recorded in BLUEZONE-SOURCE-OF-TRUTH-REVIEW.md section 4. This is the
five-room facility, not the BioCube microgreens container.

| Page figure | Basis | Treatment |
| --- | --- | --- |
| 398 kg/m2/year | 516,096 kg/year / (4 x 324 m2) = 398.22 | Rounded modelled yield; excludes propagation and ancillary area |
| 8.72 L/kg | 375 tonnes/month x 1,000 L/tonne x 12 / 516,096 | Model-derived water use; no comparative saving claimed |
| 12.77 kWh/kg | 6,588,250 kWh/year / 516,096 | Model-derived electricity use, replacing likely cost/unit mix-up |
| 258,048 positions | Five-room proposal | Includes propagation; not all harvest-ready plants |
| 516,096 kg/year | Four cultivation rooms in proposal | Modelled only; crop schedule remains to be validated |
| 36 days for lettuce | Proposal cycle | Propagation and cultivation occupancy remain to be reconciled |
| Zero pesticides planned | User brief and proposed controlled production | Design aim, not a guarantee or residue claim |
| Year-round production | Controlled-environment operating intent | Subject to crop readiness, maintenance and staffing; no 24/7 harvest guarantee |
| GMP + GAP | Stated in brief/proposal | Explicitly unverified scope; no certification badge |

The supplied 7x and 90% claims are not headlines. 1,592 kg/m2 mixes four-room
yield with one-room area; 1.27 L/kg and 1.40 kWh/kg conflict with annual totals.
The page's expandable source notes explain those discrepancies.

Hydroponic and outdoor numeric ranges remain attributed to the supplied
brief, with no matched farm area, crop or measurement basis. They are not
published as verified industry averages or evidence of relative savings.
Unqualified claims that all outdoor farms use high pesticide levels or have
manual-only monitoring have been replaced with practice-dependent wording.

## Method explanations

- https://extension.okstate.edu/fact-sheets/hydroponics
- https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/small-scale-hydroponics

These support root-environment definitions and aeration/solution management,
not the Bluezone model or universal superiority claims. Existing hydroponic
definitions are retained; potential growth/resource benefits are qualified
by system and crop. Certification is separate from pesticide practice.

## UI and assets

ComparisonPage.jsx reuses the landing-page primitives and image-card style.
Benefits use the existing root-zone concept, catalogue dosing and rack
illustrations, and actual misting video still. Methods use existing aero.png
and hydro.png. The traditional-farm column uses left-farm.jpg. No new media
is generated. Source notes are accessible through a native details element.
