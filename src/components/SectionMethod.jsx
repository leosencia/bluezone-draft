import { Fragment } from "react";
import { Droplets, Sprout, Wind } from "lucide-react";

import {
  Accent,
  BentoTile,
  Body,
  Footnote,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
  SourceLink,
  Stat,
} from "./primitives";

// Three-way, not two-way: soil is the baseline, hydroponics the near
// neighbour, aeroponics the choice. A straight aeroponics-vs-hydroponics
// layout would read as vendor sniping; the third column makes it rationale.
const METHODS = [
  {
    key: "soil",
    icon: Sprout,
    name: "Conventional soil",
    descriptor: "The baseline",
  },
  {
    key: "hydro",
    icon: Droplets,
    name: "Hydroponics",
    descriptor: "Roots in solution",
  },
  {
    key: "aero",
    icon: Wind,
    name: "Aeroponics",
    descriptor: "Roots in air",
  },
];

// Every row here is mechanism, not performance, so none of it needs a
// citation. The figures that do are in the evidence strip below.
const ROWS = [
  {
    label: "Root zone",
    soil: "In soil",
    hydro: "Submerged in nutrient solution",
    aero: "Suspended in air, misted on a cycle",
  },
  {
    label: "Oxygen at the root",
    soil: "Limited by soil structure and moisture",
    hydro: "Dissolved in solution, must be actively aerated",
    aero: "Ambient air, continuously available",
  },
  {
    label: "Water path",
    soil: "Irrigation lost to soil, runoff and evaporation",
    hydro: "Recirculated within a reservoir",
    aero: "Recirculated, unabsorbed mist captured",
  },
  {
    label: "Substrate",
    soil: "Soil",
    hydro: "Inert media: rockwool, clay, perlite",
    aero: "None",
  },
  {
    label: "Nutrient control",
    soil: "Broadcast, corrected by soil testing",
    hydro: "Dosed to the reservoir",
    aero: "Dosed per misting cycle",
  },
  {
    label: "Root inspection",
    soil: "Buried",
    hydro: "Submerged",
    aero: "Visible without disturbing the plant",
  },
  {
    label: "Vertical stacking",
    soil: "Single plane",
    hydro: "Stackable, reservoir weight limits tiers",
    aero: "Stackable, no standing water to carry",
  },
  {
    // Naming the real weakness is deliberate — "confident enough not to
    // oversell" is a brand voice attribute. Do not soften or drop this row.
    label: "Primary failure mode",
    soil: "Weather, pests, drought",
    hydro: "Reservoir contamination spreads through the loop",
    aero: "Mist interruption, roots dry quickly without it",
  },
];

// Method-level research, never attributed to BlueZone.
const AEROPONICS_SOURCE = {
  label:
    "Advancing Sustainable Agriculture Through Aeroponics, Agriculture (MDPI), 2026",
  url: "https://www.mdpi.com/2077-0472/16/2/265",
};

const COMPARABILITY_SOURCE = {
  label:
    "Comparing resource use efficiencies in hydroponic and aeroponic production systems, Technology in Horticulture, 2024",
  url: "https://www.maxapress.com/article/doi/10.48130/tihort-0024-0002",
};

const EVIDENCE = [
  {
    figure: "Up to 98%",
    claim: "less water than conventional field cultivation",
    caveat:
      "Across published aeroponic studies. A reported range, not a BlueZone measurement.",
  },
  {
    figure: "45–75%",
    claim: "higher yield than conventional soil cultivation",
    caveat: "Range across crops and studies. Varies substantially by crop.",
  },
  {
    figure: "~60%",
    claim: "less fertiliser input",
    caveat: "Reported reduction for aeroponic systems against soil baselines.",
  },
];

export default function SectionMethod() {
  return (
    <Section id="method" surface="mist">
      <Reveal>
        <SectionKicker>Method</SectionKicker>
        <SectionHeading>
          Why the root zone is <Accent>air, not water</Accent>
        </SectionHeading>
        <Body className="mt-6 max-w-2xl">
          Hydroponics suspends roots in a nutrient solution. Aeroponics
          suspends them in air and delivers the same nutrients as a timed mist.
          Both remove soil. Only one leaves the root zone open to ambient
          oxygen, and that single difference drives most of what follows.
        </Body>
      </Reveal>

      <Reveal delay={60} className="mt-12 md:mt-14">
        {/* One CSS grid for all four columns, extending the SectionShift
            pattern: label, then the three methods, every cell of a row in the
            same grid row so they stay aligned when text wraps. Each column's
            cells carry their own fill and side borders, with rounding only on
            the header and last cell, so a column reads as one continuous
            panel. Each seam is drawn by one side only — soil draws both its
            edges, hydro only its right — otherwise two adjacent white columns
            would double the divider to 2px. */}
        <div className="hidden lg:grid grid-cols-[minmax(160px,0.7fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
          {/* Header row */}
          <div />
          {METHODS.map(({ key, icon: Icon, name, descriptor }) => {
            const isAero = key === "aero";
            return (
              <div
                key={key}
                className={`min-h-[120px] p-6 md:p-7 ${
                  isAero
                    ? "bg-bz-ocean rounded-tr-2xl"
                    : `bg-white border-t border-bz-navy/10 ${
                        key === "soil" ? "border-x rounded-tl-2xl" : "border-r"
                      }`
                }`}
              >
                <Icon
                  size={18}
                  className={isAero ? "text-bz-lime" : "text-bz-navy/50"}
                  aria-hidden="true"
                />
                <p
                  className={`font-instrument-serif text-xl md:text-2xl mt-3 ${
                    isAero ? "text-white" : "text-bz-navy"
                  }`}
                >
                  {name}
                </p>
                <p
                  className={`text-[11px] uppercase tracking-[0.18em] mt-1 ${
                    isAero ? "text-white/70" : "text-bz-navy/45"
                  }`}
                >
                  {descriptor}
                </p>
              </div>
            );
          })}

          {/* Data rows — row-by-row so alignment can't drift. */}
          {ROWS.map((row, i) => {
            const isLast = i === ROWS.length - 1;
            return (
              <Fragment key={row.label}>
                <div className="flex items-center border-t border-bz-navy/10 py-5 md:py-6 pr-6 md:pr-8">
                  <span className="text-bz-navy text-sm md:text-[15px] font-medium">
                    {row.label}
                  </span>
                </div>
                <div
                  className={`flex items-center bg-white border-t border-x border-bz-navy/10 px-6 md:px-7 py-5 md:py-6 ${
                    isLast ? "border-b rounded-bl-2xl" : ""
                  }`}
                >
                  <span className="text-bz-navy/60 text-sm font-light leading-relaxed">
                    {row.soil}
                  </span>
                </div>
                <div
                  className={`flex items-center bg-white border-t border-r border-bz-navy/10 px-6 md:px-7 py-5 md:py-6 ${
                    isLast ? "border-b" : ""
                  }`}
                >
                  <span className="text-bz-navy/60 text-sm font-light leading-relaxed">
                    {row.hydro}
                  </span>
                </div>
                <div
                  className={`flex items-center bg-bz-ocean border-t border-white/10 px-6 md:px-7 py-5 md:py-6 ${
                    isLast ? "rounded-br-2xl" : ""
                  }`}
                >
                  <span className="text-white/90 text-sm font-light leading-relaxed">
                    {row.aero}
                  </span>
                </div>
              </Fragment>
            );
          })}
        </div>

        {/* Mobile: three columns will not fit, so each criterion becomes a
            stacked group — same ROWS data, no horizontal scroller. */}
        <div className="lg:hidden">
          {ROWS.map((row) => (
            <div
              key={row.label}
              className="border-b border-bz-navy/10 py-6 first:pt-0 last:border-b-0 last:pb-0"
            >
              <p className="text-bz-navy text-sm font-medium">{row.label}</p>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-bz-navy/40 text-[11px] uppercase tracking-[0.15em]">
                    Conventional soil
                  </p>
                  <p className="mt-1 text-bz-navy/60 text-sm font-light leading-relaxed">
                    {row.soil}
                  </p>
                </div>
                <div>
                  <p className="text-bz-navy/40 text-[11px] uppercase tracking-[0.15em]">
                    Hydroponics
                  </p>
                  <p className="mt-1 text-bz-navy/60 text-sm font-light leading-relaxed">
                    {row.hydro}
                  </p>
                </div>
                <div className="rounded-xl bg-bz-ocean px-4 py-3">
                  <p className="text-white/70 text-[11px] uppercase tracking-[0.15em]">
                    Aeroponics
                  </p>
                  <p className="mt-1 text-white/90 text-sm font-light leading-relaxed">
                    {row.aero}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Evidence strip: aeroponics as a method, never BlueZone performance.
          The fourth tile is the counterweight and runs dark to break the
          repetition rather than carry a fourth figure. */}
      <div className="grid sm:grid-cols-2 auto-rows-fr gap-4 md:gap-5 mt-12 md:mt-14">
        {EVIDENCE.map(({ figure, claim, caveat }, i) => (
          <Reveal key={figure} delay={i * 70} className="h-full">
            <BentoTile>
              <Stat className="text-3xl md:text-4xl">{figure}</Stat>
              <p className="text-bz-navy text-base font-sans font-medium mt-3">
                {claim}
              </p>
              <Body className="mt-2 max-w-none text-sm flex-1">{caveat}</Body>
              <div className="mt-5">
                <SourceLink href={AEROPONICS_SOURCE.url} />
              </div>
            </BentoTile>
          </Reveal>
        ))}

        <Reveal delay={EVIDENCE.length * 70} className="h-full">
          <BentoTile dark noise>
            <h3 className="font-instrument-serif text-white text-2xl md:text-3xl">
              Energy is the trade-off
            </h3>
            <Body dark className="mt-3 max-w-none flex-1">
              Lighting electricity is the principal driver of climate impact in
              controlled-environment growing. Gains in water and land do not
              transfer automatically to carbon. Siting near low-carbon power is
              what closes that gap.
            </Body>
            <div className="mt-5">
              <SourceLink dark href={AEROPONICS_SOURCE.url} />
            </div>
          </BentoTile>
        </Reveal>
      </div>

      <Reveal>
        <Footnote className="mt-8 max-w-3xl">
          Figures above describe aeroponics as a growing method, drawn from
          published research. They are not BlueZone system performance, which
          is pending pilot measurement. Direct like-for-like comparison between
          aeroponic and hydroponic systems also remains limited in the
          literature: published studies use different crops, units and growing
          conditions, so the two are not yet cleanly comparable on a single
          number.
        </Footnote>
        <Footnote className="mt-2 max-w-3xl">
          <a
            href={COMPARABILITY_SOURCE.url}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-bz-blue transition-colors duration-200"
          >
            {COMPARABILITY_SOURCE.label}
          </a>
          {" · "}
          <a
            href="#proof"
            className="underline underline-offset-2 hover:text-bz-blue transition-colors duration-200"
          >
            See how evidence is classified.
          </a>
        </Footnote>
      </Reveal>
    </Section>
  );
}
