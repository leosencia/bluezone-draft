import { ChevronRight, Droplets, Truck, Wind } from "lucide-react";

import {
  Accent,
  BentoTile,
  Body,
  Footnote,
  ImagePlaceholder,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
  Stat,
} from "./primitives";

const CHAIN = [
  "Farm",
  "Processing",
  "Transport",
  "Cold chain",
  "Distribution",
  "Kitchen",
];

const PRESSURES = [
  {
    icon: Truck,
    figure: "25.4%",
    title: "Long supply chains",
    body: "A quarter of the world's fruit and vegetables are lost between harvest and the retail shelf. The longer the chain, the more of the crop never arrives.",
    source: "FAO, SDG indicator 12.3.1a, 2023 data",
    span: "md:col-span-2",
  },
  {
    icon: Droplets,
    figure: "~70%",
    title: "Water",
    body: "Agriculture accounts for roughly 70% of global freshwater withdrawals, and renewable water available per person has fallen 7% in a decade.",
    source: "FAO AQUASTAT",
    span: "",
  },
  {
    icon: Wind,
    figure: "19%",
    title: "Transport",
    body: "Moving food generates about 19% of food-system greenhouse gas emissions, roughly 3 billion tonnes of CO₂e a year. Fruit and vegetables are over a third of that, because they travel refrigerated.",
    source: "Li et al., Nature Food, 2022",
    span: "md:col-span-2 lg:col-span-1",
  },
];

export default function SectionProblem() {
  return (
    <Section id="problem" surface="white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <Reveal>
          <SectionKicker>The Problem</SectionKicker>
          <SectionHeading>
            Food supply chains were built <Accent>for distance</Accent>
          </SectionHeading>
          <Body className="mt-6">
            Every mile between a farm and a kitchen is a mile where freshness,
            margin and certainty are lost.
          </Body>
          <Body className="mt-4">
            Fresh produce moves through harvest, processing, transport, cold
            chain and distribution before it reaches a plate. Each stage adds
            cost, time and a point of failure. The model works until weather,
            fuel, freight capacity or a border interrupts it, and then it does
            not work at all.
          </Body>
        </Reveal>

        <Reveal delay={100}>
          <ImagePlaceholder
            ratio="aspect-[4/3]"
            label="Supply chain photo"
            hint="Refrigerated freight, port or cargo hold. Wide, cool tones."
          />
        </Reveal>
      </div>

      {/* Supply chain rail */}
      <Reveal delay={60}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 md:gap-x-4 mt-16 pt-8 border-t border-bz-navy/10">
          {CHAIN.map((step, i) => (
            <div key={step} className="flex items-center gap-3 md:gap-4">
              <span className="text-bz-navy/50 text-xs tracking-[0.15em] uppercase font-light whitespace-nowrap">
                {step}
              </span>
              {i < CHAIN.length - 1 ? (
                <ChevronRight
                  size={14}
                  className="text-bz-blue/40 shrink-0"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          ))}
        </div>
      </Reveal>

      {/* Bento: the lead pressure takes a double-width tile. */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 md:gap-5 mt-10">
        {PRESSURES.map(
          ({ icon: Icon, figure, title, body, source, span }, i) => (
            <Reveal key={title} delay={i * 80} className={`h-full ${span}`}>
              <BentoTile>
                <div className="flex items-start justify-between">
                  <Icon size={20} className="text-bz-blue" aria-hidden="true" />
                </div>
                <p className={`mt-6 ${i === 0 ? "text-5xl md:text-7xl" : "text-4xl md:text-5xl"}`}>
                  <Stat>{figure}</Stat>
                </p>
                <h3 className="text-bz-navy text-base font-sans font-medium mt-3">
                  {title}
                </h3>
                <Body className="mt-2 max-w-none flex-1">{body}</Body>
                <Footnote className="mt-4">{source}</Footnote>
              </BentoTile>
            </Reveal>
          ),
        )}
      </div>
    </Section>
  );
}
