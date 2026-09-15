import {
  Accent,
  BentoTile,
  Footnote,
  ImagePlaceholder,
  Reveal,
  Section,
  SectionHeading,
  Stat,
} from "./primitives";

const STATS = [
  {
    figure: "15.8–17.3",
    unit: "tonnes",
    label: "Potential annual pea-shoot production",
    size: "text-5xl md:text-6xl",
    span: "col-span-2",
  },
  {
    figure: "225",
    unit: "trays",
    label: "Growing trays per unit",
    size: "text-5xl md:text-6xl",
    span: "",
  },
  {
    figure: "4,500",
    unit: "punnets",
    label: "Capacity per full production cycle",
    size: "text-5xl md:text-6xl",
    span: "",
  },
  {
    figure: "365",
    unit: "days",
    label: "Controlled production, year-round",
    size: "text-5xl md:text-6xl",
    span: "col-span-2",
  },
];

export default function SectionCapacity() {
  return (
    <Section id="capacity" surface="mist">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] gap-12 lg:gap-16 items-start">
        <div>
          <Reveal>
            <SectionHeading>
              Built for <Accent>commercial production</Accent>
            </SectionHeading>
          </Reveal>

          {/* Bento: the annual-production figure anchors the grid full-width. */}
          <div className="grid grid-cols-2 auto-rows-fr gap-4 md:gap-5 mt-12">
            {STATS.map(({ figure, unit, label, size, span }, i) => (
              <Reveal key={label} delay={i * 70} className={`h-full ${span}`}>
                <BentoTile innerClassName="p-6 md:p-8">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <p className={size}>
                      <Stat>{figure}</Stat>
                    </p>
                    <span className="text-bz-blue text-sm font-light">
                      {unit}
                    </span>
                  </div>
                  <p className="text-bz-navy/70 text-sm font-light mt-4 leading-relaxed">
                    {label}
                  </p>
                </BentoTile>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Footnote className="mt-8 max-w-2xl">
              Current modelling indicates approximately 15,840&ndash;17,280
              kg/year. Actual production varies by crop, cycle time, operating
              conditions and production model.
            </Footnote>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <ImagePlaceholder
            ratio="aspect-[3/4]"
            label="Trays in production"
            hint="Stacked trays at harvest density, lit interior."
          />
        </Reveal>
      </div>
    </Section>
  );
}
