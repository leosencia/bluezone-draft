# Implementation brief: Aeroponics vs Hydroponics section + comparison figures

You are working in the BlueZone Aeroponics marketing site (Vite + React + Tailwind, JSX).
Implement the five tasks below. Do not start writing components until you have read the
files in "Read first".

---

## Read first (in this order)

1. `PRODUCT.md` — brand personality, anti-references, design principles
2. `DESIGN.md` — the design system
3. `src/components/primitives.jsx` — every shared component you must build on
4. `src/components/SectionShift.jsx` — the existing comparison-grid pattern you will extend
5. `src/components/SectionTechnology.jsx` — the section the new one sits after
6. `src/components/SectionProof.jsx` — the A/B/C/D evidence scale the new labels refer to
7. `src/App.jsx` — section order

---

## Scope note on DESIGN.md

`DESIGN.md` describes the **hero** design system (`name: BlueZone Hero`). Two of its rules are
hero-scoped and must NOT be applied to body sections:

- **"`rounded-full` is the only corner treatment"** — true of hero chrome only. Body sections
  use `rounded-2xl` / `rounded-xl` via `BentoTile` and the `SectionShift` grid. Follow the
  body idiom.
- **"achromatic, no brand color"** — true of the hero overlay only. Body sections use the
  `bz-*` palette from `tailwind.config.js`.

Everything else in `DESIGN.md` applies, in particular the no-`box-shadow` rule, the
Instrument Serif / Inter split, and the SaaS anti-patterns.

---

## Hard constraints

- **No new colors.** Use only `bz-navy`, `bz-ocean`, `bz-blue`, `bz-teal`, `bz-field`,
  `bz-lime`, `bz-mist` and white/black at opacity. Do not add to `tailwind.config.js`.
- **No `box-shadow` anywhere.** Depth comes from opacity, borders and surface color.
- **Instrument Serif** (`font-instrument-serif`) only at section-heading and stat scale.
  Inter for everything else. Never blend the two at the same size.
- **Reuse primitives.** `Section`, `SectionKicker`, `SectionHeading`, `Accent`, `Body`,
  `Footnote`, `BentoTile`, `Reveal`, `Stat`, `Chip`. Do not hand-roll equivalents.
- **Respect reduced motion** via the existing `usePrefersReducedMotion` hook, as the other
  sections do.
- **No invented numbers.** Every figure in this brief is given with its source. Do not add,
  round, extrapolate or "improve" any of them. If a number is not in this brief, it does not
  go on the page.

---

## Task 1 — Add figures to `SectionShift`

`SectionShift.jsx` currently renders a qualitative Traditional vs Zero-Mile comparison from
three index-aligned arrays (`COMPARISON_LABELS`, `TRADITIONAL`, `ZERO_MILE`).

Add a figure to each cell and add a fifth row. Keep the index-aligned-array structure — do not
refactor to an array of objects unless that is cleaner for the figure + text pair, in which
case convert all three arrays together and keep them a single source of truth for both the
desktop grid and the mobile stack.

| Label | Traditional figure | Traditional text | Zero-Mile figure | Zero-Mile text |
|---|---|---|---|---|
| Supply chain flow | `6 stages` | Farm → Processing → Transport → Cold chain → Distribution → Kitchen | `2 stages` | Harvest → Point of use |
| Distance to market | `80%+ imported` | Sited where the climate allows | `On site` | Sited where the demand is |
| Seasonality | `Weather-dependent` | Output follows the growing season | `365 days` | Output follows a controlled cycle |
| Loss before retail | `25.4%` | Freshness spent in transit | `Same-day` | Harvested into the market it serves |
| Evidence | `Unstated` | Sustainability claims made, rarely measured | `A–D labeled` | Every figure classified by source |

**Rendering:** the figure sits above the text in each cell, at a larger size, using `Stat` on
the Zero-Mile side (`dark` variant, since that column is `bz-ocean`) and `Stat` on the
Traditional side. Text keeps its current size and weight. The row-by-row `Fragment` structure
and the rounding-only-on-first-and-last-cell trick must survive — read the comment block above
the grid before touching it, it documents a real bug that was already fixed once.

**Sourcing:**
- `25.4%` — FAO, SDG indicator 12.3.1a, 2023 data. Already cited elsewhere in the repo.
- `6 stages` matches the `CHAIN` array in `SectionProblem.jsx`. Keep them consistent.
- `80%+ imported` — **BLOCKED, leave a TODO.** This figure comes from the client's brand kit
  (page 09, slide 01) with no source or date attached. Render the row, but add
  `// TODO(source): 80%+ imported — awaiting source + date from client, per brand kit §11`
  and add a `Footnote` under the grid reading: *"Import dependency figure pending source
  confirmation."* Do not ship it unsourced without that footnote.

Add a `Footnote` under the grid listing the sourced figures.

---

## Task 2 — New section: `SectionMethod.jsx`

Create `src/components/SectionMethod.jsx` and mount it in `App.jsx` **between
`SectionTechnology` and `SectionBioCube`**. Props: `<Section id="method" surface="mist">`.
That placement preserves the white → mist → navy surface rhythm — verify it still alternates
correctly after you insert it.

Check `HeroSection.jsx` for the nav link list. If the section list there is exhaustive, add
Method; if it is a curated subset, leave it alone and say which you chose and why.

### Header

- Kicker: `Method`
- Heading: `Why the root zone is <Accent>air, not water</Accent>`
- Body, directly under the heading:

> Hydroponics suspends roots in a nutrient solution. Aeroponics suspends them in air and
> delivers the same nutrients as a timed mist. Both remove soil. Only one leaves the root zone
> open to ambient oxygen, and that single difference drives most of what follows.

### 2a. The comparison grid

Three-way, not two-way. Conventional soil is the baseline, hydroponics the near neighbour,
aeroponics the choice. A two-column aeroponics-vs-hydroponics layout reads as vendor sniping;
three columns read as engineering rationale.

Build it as a **4-column CSS grid** (label + 3 value columns), directly extending the
`SectionShift` desktop pattern: each column's cells carry their own background and side
borders, rounding only on the header and last cell, no vertical gap, so each column reads as
one continuous panel.

- Conventional soil column: `bg-white`, `border-bz-navy/10`, muted text (`text-bz-navy/60`)
- Hydroponics column: `bg-white`, same treatment, muted text
- **Aeroponics column: `bg-bz-ocean`, white text** — the highlighted column, exactly as
  Zero-Mile is highlighted in `SectionShift`

Column headers get a lucide icon each (pick from the set already imported across the repo;
`Sprout`, `Droplets`, `Wind` are reasonable), the name in `font-instrument-serif`, and an
uppercase tracked descriptor line beneath, matching the `SectionShift` header cells.

| | Conventional soil | Hydroponics | Aeroponics |
|---|---|---|---|
| Root zone | In soil | Submerged in nutrient solution | Suspended in air, misted on a cycle |
| Oxygen at the root | Limited by soil structure and moisture | Dissolved in solution, must be actively aerated | Ambient air, continuously available |
| Water path | Irrigation lost to soil, runoff and evaporation | Recirculated within a reservoir | Recirculated, unabsorbed mist captured |
| Substrate | Soil | Inert media: rockwool, clay, perlite | None |
| Nutrient control | Broadcast, corrected by soil testing | Dosed to the reservoir | Dosed per misting cycle |
| Root inspection | Buried | Submerged | Visible without disturbing the plant |
| Vertical stacking | Single plane | Stackable, reservoir weight limits tiers | Stackable, no standing water to carry |
| Primary failure mode | Weather, pests, drought | Reservoir contamination spreads through the loop | Mist interruption, roots dry quickly without it |

**Keep the last row.** Naming aeroponics' real weakness is deliberate and matches the brand
voice attribute "confident enough not to oversell." Do not soften or drop it.

Every row above is mechanism, not performance — nothing here needs a citation.

**Mobile (`lg:hidden`):** three columns will not fit. Follow the `SectionShift` mobile
pattern — stack per criterion, with the label, then the two muted entries, then the aeroponics
entry in a `bg-bz-ocean rounded-xl` block. Do not use a horizontal scroller.

### 2b. Evidence strip

Below the grid, a **2×2 tile grid** of `BentoTile`s. This is where the client's requested
efficiency numbers live, and every one is attributed to aeroponics **as a method**, never to
BlueZone.

Tiles 1–3, each: figure in `Stat`, claim line, caveat line in smaller muted text, an
`EvidenceLabel level="C"` chip (Task 3), and the source in a `Footnote`.

| Figure | Claim | Caveat |
|---|---|---|
| `Up to 98%` | less water than conventional field cultivation | Across published aeroponic studies. A reported range, not a BlueZone measurement. |
| `45–75%` | higher yield than conventional soil cultivation | Range across crops and studies. Varies substantially by crop. |
| `~60%` | less fertiliser input | Reported reduction for aeroponic systems against soil baselines. |

Source for all three, rendered as a link:
`Advancing Sustainable Agriculture Through Aeroponics`, *Agriculture* (MDPI), 2026 —
https://www.mdpi.com/2077-0472/16/2/265

**Tile 4 is the counterweight and must be visually distinct** — use the `dark` variant of
`BentoTile` (`bg-bz-navy`). It carries no big figure:

> **Energy is the trade-off**
> Lighting electricity is the principal driver of climate impact in controlled-environment
> growing. Gains in water and land do not transfer automatically to carbon. Siting near
> low-carbon power is what closes that gap.

Same source, same `C` label.

### 2c. Closing footnote

A `Footnote` under the strip, verbatim:

> Figures above describe aeroponics as a growing method, drawn from published research. They
> are not BlueZone system performance, which is pending pilot measurement. Direct like-for-like
> comparison between aeroponic and hydroponic systems also remains limited in the literature:
> published studies use different crops, units and growing conditions, so the two are not yet
> cleanly comparable on a single number.

Cite: `Comparing resource use efficiencies in hydroponic and aeroponic production systems`,
*Technology in Horticulture*, 2024 — https://www.maxapress.com/article/doi/10.48130/tihort-0024-0002
Followed by an anchor link to `#proof` reading "See how evidence is classified."

---

## Task 3 — `EvidenceLabel` primitive

Add to `src/components/primitives.jsx`:

```
export function EvidenceLabel({ level, dark = false })
```

Renders a small chip: the letter, then the short name. `SectionProof.jsx` already defines the
scale — read `KEY` there and use those exact names as the single source of truth rather than
retyping them. Levels: A "BlueZone verified", B "Current modelling", C "External science",
D "Global or industry data".

Visual: uppercase, tracked, ~10–11px, `bz-teal` text on a `bz-teal/10` fill at `rounded-full`,
with a `dark` variant for navy surfaces. Give it a `title` attribute with the full definition
so it is discoverable on hover.

`SectionProof` currently defines A/B/C/D but nothing on the site renders them next to an actual
figure, which makes the scale a promise the rest of the site does not keep. After building it,
apply it retroactively to the existing stats:

- `SectionProblem.jsx` — all three `PRESSURES` entries → `D`
- `SectionImpact.jsx` — all four `TABS` entries → `D`

---

## Task 4 — Make sources linkable

`PRESSURES` in `SectionProblem.jsx` and `TABS` in `SectionImpact.jsx` both carry a `source`
string rendered as plain text in a `Footnote`. Add a `sourceUrl` field to each entry and render
the source as an underlined anchor when a URL is present, plain text when it is not.

The client's brand kit §11 requires a source and date on every statistic; a plain-text
attribution the reader cannot follow only half-satisfies that.

Find the canonical URLs for the four existing sources (FAO AQUASTAT, FAO SDG indicator
12.3.1a, FAO via Our World in Data, Li et al. *Nature Food* 2022). If you cannot verify a URL
resolves, leave `sourceUrl` undefined rather than guessing — the plain-text fallback is the
correct behaviour.

---

## Task 5 — Update the `SectionTechnology` footnote

It currently reads, in part: *"Published aeroponic efficiency claims come from suppliers rather
than independent measurement, so they are not presented here as BlueZone performance."*

Once Task 2 ships, "not presented here" is no longer accurate. Rewrite it to draw the
distinction that now exists: **supplier claims remain excluded; peer-reviewed method-level
research is presented, labeled, and attributed to the method rather than to BlueZone.** Keep it
to two sentences and keep the "pending pilot measurement" clause. Add a link to `#method`.

---

## Layout reference

Reference images were supplied showing an agricultural-drone landing page. **Take the
structure, not the styling.**

Useful from it:
- The flush tile grid with icon → bold title → one-line body, laid out as a contiguous block
  rather than as floating cards with gaps. Apply this to the 2×2 evidence strip.
- One tile in the grid rendered in a contrasting fill to break the repetition. That is what
  tile 4 (Energy) does.
- A dense multi-column comparison block reading as one panel, not as separate columns.

**Explicitly do not take:** the color scheme (it is green; BlueZone is navy/ocean/teal), the
gradient or two-tone headline treatment, the logo cloud, the "10k+ users" avatar social proof,
drop shadows on cards, or the hero stat overlay. `PRODUCT.md` names generic SaaS marketing as
the anti-reference and `DESIGN.md` names gradient-text headlines and hero-metric stat cards
specifically. The reference is a layout sketch, not a visual target.

---

## Verify before reporting done

1. `npm run build` passes with no TypeScript or ESLint errors.
2. Run the dev server and screenshot the new section at **1440px and 390px**. Confirm: no
   horizontal overflow at either width, the 4-column grid collapses to the stacked mobile
   pattern, and the aeroponics column is the visually dominant one.
3. Confirm the surface rhythm still alternates through `App.jsx` (white → mist → navy → …)
   after the insert.
4. Check contrast on white text over `bz-ocean` and on `bz-teal` chips over `bz-mist` —
   WCAG AA is the stated baseline in `PRODUCT.md`.
5. Grep the diff for any numeral you introduced that is not in this brief. There should be
   none.
6. Confirm `tailwind.config.js` is unchanged.

## Report back with

- The files you changed and created.
- The nav decision from Task 2 and your reasoning.
- Any URL from Task 4 you could not verify.
- Anything in this brief that conflicted with what you found in the repo. Say so rather than
  silently picking one — particularly if the `SectionShift` grid resists the figure addition,
  since that comment block documents a bug that was already fixed once.
