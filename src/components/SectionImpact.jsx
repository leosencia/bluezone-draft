import { useState } from "react";

import {
  Accent,
  Body,
  Chip,
  EASE,
  Footnote,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
  Stat,
  usePrefersReducedMotion,
} from "./primitives";

// One photo per tab, filenames numbered "1-water.png" .. "4-food-security.png"
// — already in TABS order, so sorting by source path lines them up with TABS
// by index instead of needing a name-to-file mapping.
const IMPACT_IMAGE_MODULES = import.meta.glob("../assets/impact/*.png", {
  eager: true,
  import: "default",
});
const IMPACT_IMAGES = Object.keys(IMPACT_IMAGE_MODULES)
  .sort((a, b) => a.localeCompare(b))
  .map((key) => IMPACT_IMAGE_MODULES[key]);

const TABS = [
  {
    id: "water",
    label: "Water",
    figure: "~70%",
    caption: "of freshwater withdrawals go to agriculture",
    paragraphs: [
      "Agriculture is the largest single draw on global freshwater, and renewable water available per person has fallen 7% in a decade. Field irrigation loses water to soil, runoff and evaporation before it reaches a root.",
      "An enclosed root zone changes what happens to the water that is not taken up. It is captured and recirculated instead of drained.",
    ],
    source: "FAO AQUASTAT, 2025 data release",
    image: {
      label: "Water / recirculation",
      hint: "Misted root zone or the recirculation loop, close up.",
    },
  },
  {
    id: "land",
    label: "Land",
    figure: "44%",
    caption: "of habitable land is already farmed",
    paragraphs: [
      "Almost half the world's habitable land is in agricultural use, and most of it supports livestock rather than crops for people. Expanding field production means competing for what is left.",
      "Vertical tiers multiply canopy area inside a fixed footprint, so capacity is added by stacking rather than by clearing.",
    ],
    source: "FAO, via Our World in Data, 2024",
    image: {
      label: "Footprint comparison",
      hint: "Vertical tiers against an equivalent field area.",
    },
  },
  {
    id: "emissions",
    label: "Emissions",
    figure: "19%",
    caption: "of food-system emissions come from transport",
    paragraphs: [
      "Moving food generates roughly 3 billion tonnes of CO₂e a year, close to a fifth of all food-system emissions. Fruit and vegetables account for over a third of that, because they travel refrigerated.",
      "Production sited next to demand removes the freight leg and the cold chain that goes with it.",
    ],
    source: "Li et al., Nature Food, 2022",
    image: {
      label: "Freight or cold chain",
      hint: "Air freight, reefer container, or a cold store.",
    },
  },
  {
    id: "security",
    label: "Food security",
    figure: "25.4%",
    caption: "of fruit and vegetables lost before retail",
    paragraphs: [
      "A quarter of the world's fruit and vegetable harvest is lost between the field and the shelf, and the figure has risen since 2015. Perishable crops lose the most, because they have the furthest to travel.",
      "Harvesting into the market that consumes it removes most of the journey where that loss happens.",
    ],
    source: "FAO, SDG indicator 12.3.1a, 2023 data",
    image: {
      label: "Local supply",
      hint: "Fresh punnets at point of use: kitchen, galley or market.",
    },
  },
];

export default function SectionImpact() {
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(0);
  const [visible, setVisible] = useState(true);
  const reduced = usePrefersReducedMotion();

  const select = (i) => {
    if (i === active) return;
    setActive(i);
    if (reduced) {
      setShown(i);
      return;
    }
    setVisible(false);
    setTimeout(() => {
      setShown(i);
      setVisible(true);
    }, 200);
  };

  const panel = TABS[shown];

  return (
    <Section id="impact" surface="white">
      <Reveal>
        <SectionKicker>Impact</SectionKicker>
        <SectionHeading>
          The goal isn&rsquo;t to replace the global food system. It&rsquo;s to
          make it <Accent>more resilient</Accent>
        </SectionHeading>
        <Body className="mt-6 max-w-2xl">
          Local production does not solve food security on its own. It adds a
          layer of supply that does not depend on freight, weather or a single
          growing region. The case for it should be measured, not assumed.
        </Body>
      </Reveal>

      <Reveal delay={80}>
        <div
          role="tablist"
          aria-label="Impact measures"
          className="flex flex-wrap gap-2 md:gap-3 mt-12"
        >
          {TABS.map((tab, i) => (
            <Chip
              key={tab.id}
              as="button"
              type="button"
              role="tab"
              id={`impact-tab-${tab.id}`}
              aria-selected={i === active}
              aria-controls="impact-panel"
              onClick={() => select(i)}
              selected={i === active}
              className="px-5 text-sm"
            >
              {tab.label}
            </Chip>
          ))}
        </div>
      </Reveal>

      <div
        id="impact-panel"
        role="tabpanel"
        aria-labelledby={`impact-tab-${panel.id}`}
        style={reduced ? undefined : { transitionTimingFunction: EASE }}
        className={`mt-10 ${
          reduced
            ? ""
            : `transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3">
              <p className="text-5xl md:text-6xl lg:text-7xl">
                <Stat>{panel.figure}</Stat>
              </p>
            </div>
            <p className="text-bz-navy/50 text-xs uppercase tracking-[0.15em] mt-4 leading-relaxed">
              {panel.caption}
            </p>
            <div className="mt-8 space-y-4">
              {panel.paragraphs.map((text) => (
                <Body key={text.slice(0, 24)} className="max-w-2xl">
                  {text}
                </Body>
              ))}
            </div>
            <Footnote className="mt-6">{panel.source}</Footnote>
          </div>

          <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
            <img
              src={IMPACT_IMAGES[shown]}
              alt={panel.image.label}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
