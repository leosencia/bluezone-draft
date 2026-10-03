import {
  Accent,
  Body,
  IconBadge,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
} from "./primitives";

const OFFER = [
  {
    number: "01",
    title: "Bluezone Microgreens",
    body: "A produce offer for wholesalers, foodservice distributors, restaurants and hospitality buyers seeking a controlled indoor supply conversation.",
  },
  {
    number: "02",
    title: "BioCube systems",
    body: "Modular aeroponic growing systems supported by crop planning, operating design and measured commercial demonstrations.",
  },
  {
    number: "03",
    title: "Somerset proof site",
    body: "A planned demonstration and training initiative intended to build operating evidence and support future projects. It is not presented as an active production site.",
  },
];

export default function SectionAbout() {
  return (
    <Section id="about" surface="mist" fade>
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-start">
        <Reveal>
          <SectionKicker>About Bluezone</SectionKicker>
          <SectionHeading>
            One company, two ways to bring produce{" "}
            <Accent>closer to demand</Accent>
          </SectionHeading>
        </Reveal>

        <Reveal delay={80}>
          <Body className="max-w-none">
            Bluezone Aeroponics is the umbrella brand for Bluezone Microgreens
            and the BioCube growing-system offer. Both are built around the
            Zero-Mile Produce idea: reduce strategic distance by locating
            suitable production nearer to the buyers and communities it serves.
          </Body>
          <Body className="mt-4 max-w-none">
            Produce customers can discuss crops, quantities, pack requirements
            and delivery needs. System customers can explore the crop plan,
            site, operator, procurement baseline and funding route needed to
            test a project responsibly.
          </Body>
          <a
            href="#get-in-touch"
            className="group inline-flex items-center gap-4 mt-7 text-bz-navy text-sm font-medium hover:text-bz-blue transition-colors duration-200"
          >
            Talk to the team
            <IconBadge />
          </a>
        </Reveal>
      </div>

      <div className="mt-14 border-t border-bz-navy/15">
        {OFFER.map(({ number, title, body }, i) => (
          <Reveal key={title} delay={i * 60}>
            <div className="grid md:grid-cols-[80px_0.7fr_1.3fr] gap-3 md:gap-8 py-7 md:py-9 border-b border-bz-navy/15">
              <p className="text-bz-blue text-xs tracking-[0.18em]">{number}</p>
              <h3 className="font-instrument-serif text-bz-navy text-2xl md:text-3xl leading-tight">
                {title}
              </h3>
              <Body className="max-w-none">{body}</Body>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
