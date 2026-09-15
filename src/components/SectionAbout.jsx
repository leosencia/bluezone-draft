import {
  Accent,
  Body,
  Footnote,
  IconBadge,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
  StatCard,
} from "./primitives";

// Placeholder credentials. Replace with real, attributable figures — nothing
// here should ship as an invented claim. `image` takes a photo URL once the
// shoot lands; until then each card falls back to its placeholder fill.
const CREDENTIALS = [
  {
    figure: "—",
    caption: "Years in controlled-environment agriculture",
    imageLabel: "Founder on site",
    placement: "left-6 right-6 bottom-6",
  },
  {
    figure: "—",
    caption: "Units deployed",
    imageLabel: "Unit in operation",
    offset: true,
    placement: "left-6 bottom-16",
  },
  {
    figure: "—",
    caption: "Crops in production",
    imageLabel: "Harvest detail",
    placement: "left-6 right-20 bottom-6",
  },
];

export default function SectionAbout() {
  return (
    <Section id="about" surface="mist" fade>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-20">
        <Reveal>
          <SectionKicker>About</SectionKicker>
          <SectionHeading>
            We&rsquo;re building the infrastructure for{" "}
            <Accent>
              <span className="whitespace-nowrap">Zero-Mile</span> production
            </Accent>
          </SectionHeading>
        </Reveal>

        <Reveal delay={80} className="flex flex-col max-w-xl">
          <Body className="max-w-none">
            Placeholder paragraph. Who BlueZone is, how the company started, and
            what it builds. BlueZone Aeroponics is the umbrella identity for
            both the commercial produce business and the aeroponic
            farming-system business.
          </Body>
          <Body className="mt-4 max-w-none">
            Placeholder paragraph. The technology philosophy and the commercial
            approach: what gets measured, what gets proven in a pilot, and how
            capacity scales from there.
          </Body>

          <a
            href="#get-in-touch"
            className="group inline-flex items-center gap-4 mt-6 text-bz-navy text-sm font-medium hover:text-bz-blue transition-colors duration-200 self-start"
          >
            Talk to the team
            <IconBadge />
          </a>
        </Reveal>
      </div>

      <blockquote className="font-instrument-serif italic text-bz-navy/90 text-xl md:text-2xl leading-snug border-l-2 border-bz-blue pl-6 mt-14 max-w-3xl">
        Placeholder quote. One or two sentences from the founder on why
        production belongs next to the people eating it.
      </blockquote>

      <Reveal>
        <div className="mt-8">
          <p className="text-bz-navy text-sm font-medium">Founder name</p>
          <p className="text-bz-navy/50 text-sm font-light mt-1">
            Founder, BlueZone Aeroponics
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
        {CREDENTIALS.map((credential, i) => (
          <StatCard key={credential.caption} delay={i * 80} {...credential} />
        ))}
      </div>

      <Reveal>
        <Footnote className="mt-10">
          Credentials above are placeholders pending confirmation.
        </Footnote>
      </Reveal>
    </Section>
  );
}
