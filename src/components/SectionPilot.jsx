import {
  Accent,
  BentoTile,
  Body,
  Footnote,
  ImagePlaceholder,
  PrimaryButton,
  Reveal,
  Section,
  SectionHeading,
} from "./primitives";

const STEPS = [
  {
    n: "01",
    title: "Explore",
    body: "Site, demand, crops and constraints.",
    span: "",
  },
  {
    n: "02",
    title: "Design",
    body: "Configuration and production model for that site.",
    span: "",
  },
  {
    n: "03",
    title: "Pilot",
    body: "A working unit, running to cycle.",
    span: "sm:col-span-2",
  },
  {
    n: "04",
    title: "Measure",
    body: "Yield, water, energy, labour, economics.",
    span: "",
  },
  {
    n: "05",
    title: "Scale",
    body: "Add capacity against proven output.",
    span: "",
  },
];

export default function SectionPilot() {
  return (
    <Section id="pilot" surface="white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <Reveal>
          <SectionHeading>
            Don&rsquo;t take the leap. <Accent>Test the model</Accent>
          </SectionHeading>
          <Body className="mt-6">
            A pilot answers the question with your crops, your site and your
            numbers. It reduces the commitment required to find out whether
            Zero-Mile production works for your operation.
          </Body>
          <div className="mt-8">
            <PrimaryButton href="#get-in-touch">
              Explore the opportunity
            </PrimaryButton>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ImagePlaceholder
            ratio="aspect-[16/10]"
            label="Pilot install or site visit"
            hint="Team commissioning a unit, or a walkthrough with a client."
          />
        </Reveal>
      </div>

      {/* Bento: the pilot step itself takes the double tile it earns. */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-6 auto-rows-fr gap-4 md:gap-5 mt-14">
        {STEPS.map(({ n, title, body, span }, i) => (
          <Reveal key={n} delay={i * 70} className={`h-full ${span}`}>
            <BentoTile>
              <p className="text-bz-blue text-xs font-medium tracking-[0.18em]">
                {n}
              </p>
              <h3 className="font-instrument-serif text-bz-navy text-2xl md:text-[1.75rem] mt-4">
                {title}
              </h3>
              <Body className="mt-2 max-w-none text-sm">{body}</Body>
            </BentoTile>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <Footnote className="mt-8">
          Validation before commitment. Pilot duration, scope and terms are set
          per site.
        </Footnote>
      </Reveal>
    </Section>
  );
}
