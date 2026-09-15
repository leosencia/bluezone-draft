import {
  Accent,
  BentoTile,
  Body,
  Chip,
  Marquee,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
} from "./primitives";

const CATEGORIES = [
  "Production",
  "Crop performance",
  "Water",
  "Energy",
  "Logistics",
  "Economics",
  "Operations",
];

const KEY = [
  {
    level: "A",
    title: "BlueZone verified",
    body: "Measured in a BlueZone system.",
    span: "lg:col-span-2",
  },
  {
    level: "B",
    title: "Current modelling",
    body: "Calculated from the proposed configuration, not yet measured.",
    span: "",
  },
  {
    level: "C",
    title: "External science",
    body: "Published peer-reviewed research.",
    span: "",
  },
  {
    level: "D",
    title: "Global or industry data",
    body: "FAO, UN and comparable sources.",
    span: "lg:col-span-2",
  },
];

export default function SectionProof() {
  return (
    <Section id="proof" surface="mist">
      <Reveal>
        <SectionKicker>Proof</SectionKicker>
        <SectionHeading>
          Measure <Accent>what matters</Accent>
        </SectionHeading>
        <Body className="mt-6 max-w-2xl">
          Every figure on this site is classified by where it comes from, so a
          modelled number is never mistaken for a measured one.
        </Body>
      </Reveal>

      <Reveal delay={60}>
        <Marquee className="mt-10">
          {CATEGORIES.map((category) => (
            <Chip key={category} className="whitespace-nowrap">
              {category}
            </Chip>
          ))}
        </Marquee>
      </Reveal>

      {/* Bento: A and D bookend the scale on wider tiles. */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 md:gap-5 mt-12">
        {KEY.map(({ level, title, body, span }, i) => (
          <Reveal key={level} delay={i * 70} className={`h-full ${span}`}>
            <BentoTile>
              <h3 className="text-bz-navy text-base font-sans font-medium">
                {title}
              </h3>
              <Body className="mt-2 max-w-none text-sm">{body}</Body>
            </BentoTile>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="font-instrument-serif text-bz-navy text-2xl md:text-3xl lg:text-4xl mt-14 text-center">
          The pilot is how a modelled number becomes a{" "}
          <Accent>measured one</Accent>.
        </p>
      </Reveal>
    </Section>
  );
}
