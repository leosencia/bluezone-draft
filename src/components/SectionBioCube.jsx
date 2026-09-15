import { useState } from "react";

import {
  Accent,
  Body,
  BentoTile,
  Footnote,
  ImagePlaceholder,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
  SecondaryButton,
} from "./primitives";

// Hotspot coordinates are percentages of the product visual, so they hold
// their position as the image scales.
const HOTSPOTS = [
  {
    id: "climate",
    label: "Climate control",
    body: "Temperature, humidity and CO₂ held to setpoint, independent of the weather outside.",
    x: 78,
    y: 30,
  },
  {
    id: "root-zone",
    label: "Aeroponic root zone",
    body: "Roots suspended in air, misted with water and nutrients on a controlled cycle.",
    x: 34,
    y: 62,
  },
  {
    id: "lighting",
    label: "LED lighting",
    body: "Photoperiod and spectrum tuned per crop, running to a fixed schedule.",
    x: 46,
    y: 34,
  },
  {
    id: "irrigation",
    label: "Irrigation and recirculation",
    body: "Water not taken up by the plant is captured and returned to the loop.",
    x: 64,
    y: 70,
  },
  {
    id: "zones",
    label: "Growing zones",
    body: "Separate zones allow different crops or cycle stages to run at once.",
    x: 22,
    y: 42,
  },
  {
    id: "controls",
    label: "Controls and monitoring",
    body: "Setpoints, cycle state and alarms in one place, on site or remotely.",
    x: 88,
    y: 55,
  },
  {
    id: "modularity",
    label: "Modularity",
    body: "Ships as a unit. Connects to power and water, then starts producing to cycle.",
    x: 56,
    y: 18,
  },
  {
    id: "scalability",
    label: "Scalability",
    body: "Capacity is added by adding units, so it grows in steps rather than in one build.",
    x: 12,
    y: 74,
  },
];

export default function SectionBioCube() {
  const [active, setActive] = useState(0);
  const hotspot = HOTSPOTS[active];

  return (
    <Section id="biocube" surface="navy">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end">
        <Reveal>
          <SectionKicker onNavy>BioCube</SectionKicker>
          <SectionHeading dark>
            Meet <Accent dark>BioCube</Accent>
          </SectionHeading>
          <Body dark className="mt-6">
            The infrastructure behind Zero-Mile production.
          </Body>
        </Reveal>

        <Reveal delay={80}>
          <Body dark className="max-w-none">
            BioCube is a modular, controlled-environment growing system. It
            ships as a unit, connects to power and water, and starts producing
            to a fixed cycle. Units are added as demand grows, so capacity
            scales in steps rather than in one build.
          </Body>
        </Reveal>
      </div>

      {/* Interactive product visual */}
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] gap-8 lg:gap-12 mt-14">
        <Reveal>
          <div className="relative">
            <ImagePlaceholder
              dark
              ratio="aspect-[16/11]"
              label="BioCube product visual"
              hint="Three-quarter render or photo of the unit, doors open, lit interior. Keep the branded face in frame."
            />

            {HOTSPOTS.map((spot, i) => (
              <button
                key={spot.id}
                type="button"
                onClick={() => setActive(i)}
                aria-label={spot.label}
                aria-pressed={i === active}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full text-[0.65rem] font-medium hidden md:flex items-center justify-center transition-all duration-300 ${
                  i === active
                    ? "bg-bz-lime text-bz-navy scale-110"
                    : "bg-white/15 text-white border border-white/40 hover:bg-white/25"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="h-full flex flex-col">
            <BentoTile dark noise fill="bg-white/5" innerClassName="p-6 md:p-8">
              <p className="text-bz-lime text-xs uppercase tracking-[0.18em]">
                {String(active + 1).padStart(2, "0")}
              </p>
              <h3 className="font-instrument-serif text-white text-2xl md:text-3xl mt-3">
                {hotspot.label}
              </h3>
              <Body dark className="mt-3 max-w-none">
                {hotspot.body}
              </Body>
            </BentoTile>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2">
              {HOTSPOTS.map((spot, i) => (
                <button
                  key={spot.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`flex items-baseline gap-2 text-left text-xs font-light py-1.5 transition-colors duration-200 ${
                    i === active
                      ? "text-bz-lime"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <span aria-hidden="true" className="tabular-nums opacity-60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {spot.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-14 pt-8 border-t border-white/10">
          <Footnote dark className="flex-1">
            BioCube is a platform within BlueZone, not the entire company.
          </Footnote>
          <SecondaryButton dark href="#specifications">
            System specifications
          </SecondaryButton>
        </div>
      </Reveal>
    </Section>
  );
}
