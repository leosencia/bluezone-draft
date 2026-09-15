import {
  Accent,
  BentoTile,
  Body,
  IconBadge,
  ImagePlaceholder,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
} from "./primitives";

const TRADITIONAL = [
  "Produce → Move → Store → Distribute → Consume",
  "Sited where the climate allows",
  "Seasonal, weather-dependent",
  "Freshness spent in transit",
];

const ZERO_MILE = [
  "Produce → Harvest → Distribute locally → Consume",
  "Sited where the demand is",
  "Year-round, controlled",
  "Freshness delivered on the day",
];

export default function SectionShift() {
  return (
    <Section id="shift" surface="mist">
      <Reveal>
        <SectionKicker>The Shift</SectionKicker>
        <SectionHeading>
          Production doesn&rsquo;t have to follow{" "}
          <Accent>the supply chain</Accent>
        </SectionHeading>
        <Body className="mt-6">
          If the growing environment is controlled, the farm can be sited by
          demand instead of by climate.
        </Body>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-6 mt-14">
        <Reveal className="h-full">
          <BentoTile innerClassName="p-8 md:p-10">
            <p className="text-bz-navy/50 text-xs uppercase tracking-[0.2em] mb-8">
              Traditional
            </p>
            <ul className="space-y-5">
              {TRADITIONAL.map((line) => (
                <li
                  key={line}
                  className="text-bz-navy/60 text-sm md:text-base font-light leading-relaxed border-b border-bz-navy/10 pb-5 last:border-b-0 last:pb-0"
                >
                  {line}
                </li>
              ))}
            </ul>
          </BentoTile>
        </Reveal>

        <Reveal delay={80} className="h-full">
          <BentoTile dark noise innerClassName="p-8 md:p-10">
            <p className="text-bz-lime text-xs uppercase tracking-[0.2em] mb-8">
              Zero-Mile
            </p>
            <ul className="space-y-5">
              {ZERO_MILE.map((line) => (
                <li
                  key={line}
                  className="text-white text-sm md:text-base font-light leading-relaxed border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                >
                  {line}
                </li>
              ))}
            </ul>
          </BentoTile>
        </Reveal>
      </div>

      <div className="grid lg:grid-cols-[1fr_minmax(0,420px)] gap-10 lg:gap-16 items-center mt-14">
        <Reveal>
          <p className="font-instrument-serif text-bz-navy text-2xl md:text-3xl lg:text-4xl leading-[1.15]">
            Same crop. <Accent>Shorter</Accent> distance. Fewer things that can
            go wrong.
          </p>
          <a
            href="#why-zero-mile"
            className="group inline-flex items-center gap-4 text-bz-navy text-sm font-medium mt-6 hover:text-bz-blue transition-colors duration-200"
          >
            Why Zero-Mile
            <IconBadge />
          </a>
        </Reveal>

        <Reveal delay={80}>
          <ImagePlaceholder
            ratio="aspect-[16/10]"
            label="Siting diagram or photo"
            hint="A unit installed beside the building it supplies."
          />
        </Reveal>
      </div>
    </Section>
  );
}
