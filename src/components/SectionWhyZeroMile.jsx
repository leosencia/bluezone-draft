import {
  Gauge,
  MapPin,
  Repeat,
  ShieldCheck,
  Sprout,
  Target,
} from "lucide-react";

import {
  Accent,
  BentoTile,
  Body,
  Footnote,
  ImagePlaceholder,
  Reveal,
  Section,
  SectionHeading,
} from "./primitives";

const PILLARS = [
  {
    icon: Target,
    title: "Closer",
    body: "Production sited next to the buyer, not the climate.",
    span: "lg:col-span-2",
  },
  {
    icon: Gauge,
    title: "Controlled",
    body: "Key growing conditions managed rather than forecast.",
    span: "",
  },
  {
    icon: Repeat,
    title: "Year-round",
    body: "Output designed around controlled cycles, not seasons.",
    span: "",
  },
  {
    icon: MapPin,
    title: "Local",
    body: "Capacity built where demand already exists.",
    span: "",
  },
  {
    icon: Sprout,
    title: "Flexible",
    body: "Crop selection driven by what the market needs.",
    span: "",
  },
  {
    icon: ShieldCheck,
    title: "Resilient",
    body: "An additional layer of supply, alongside existing sourcing.",
    span: "lg:col-span-2",
  },
];

export default function SectionWhyZeroMile() {
  return (
    <Section id="why-zero-mile" surface="mist">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] gap-12 lg:gap-16 items-start">
        <Reveal>
          <SectionHeading>
            Production as close as commercially practical to{" "}
            <Accent>the point of demand</Accent>
          </SectionHeading>
          <Body className="mt-6">
            Zero-Mile is the model behind everything BlueZone builds: move the
            growing environment to the market instead of moving the crop to the
            market.
          </Body>
        </Reveal>

        <Reveal delay={100}>
          <ImagePlaceholder
            ratio="aspect-[4/5]"
            label="Sited unit photo"
            hint="A BioCube in context: rooftop, resort grounds, airport apron."
          />
        </Reveal>
      </div>

      {/* Bento: first and last pillars run wide, the four between sit square. */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-4 md:gap-5 mt-14">
        {PILLARS.map(({ icon: Icon, title, body, span }, i) => (
          <Reveal key={title} delay={i * 60} className={`h-full ${span}`}>
            <BentoTile innerClassName="p-7 md:p-8">
              <Icon size={20} className="text-bz-teal" aria-hidden="true" />
              <h3 className="font-instrument-serif text-bz-navy text-2xl md:text-3xl mt-5">
                {title}
              </h3>
              <Body className="mt-2 max-w-none">{body}</Body>
            </BentoTile>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <Footnote className="mt-8">
          Zero-Mile is a strategic concept, not a literal claim that every
          product travels zero miles.
        </Footnote>
      </Reveal>
    </Section>
  );
}
