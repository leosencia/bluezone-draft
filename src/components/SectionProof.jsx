import {
  Accent,
  BentoTile,
  Body,
  Chip,
  EVIDENCE_LEVELS,
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

// Names and definitions come from EVIDENCE_LEVELS so this legend and the
// EvidenceLabel chips rendered beside figures elsewhere can never drift
// apart. Only the tile spans — a layout concern — live here.
const KEY_SPANS = {
  A: "lg:col-span-2",
  B: "",
  C: "",
  D: "lg:col-span-2",
};

const KEY = Object.entries(EVIDENCE_LEVELS).map(([level, { title, body }]) => ({
  level,
  title,
  body,
  span: KEY_SPANS[level],
}));

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
