import { Accent, Body, PrimaryButton, Reveal, Section, SectionHeading, SectionKicker } from "./primitives";

export default function SectionMethod() {
  return (
    <Section id="method" surface="mist" containerClassName="!py-14 md:!py-20">
      <Reveal className="grid lg:grid-cols-[1fr_auto] items-end gap-8 lg:gap-16">
        <div>
          <SectionKicker>Compare the methods</SectionKicker>
          <SectionHeading>Aeroponics <Accent>vs hydroponics</Accent></SectionHeading>
          <Body className="mt-5">Both grow plants without soil. Aeroponics delivers water and nutrients as a mist to roots suspended in air. Explore how the methods differ and why BlueZone uses aeroponics.</Body>
        </div>
        <div><PrimaryButton href="/aeroponics-vs-hydroponics/">Compare the growing methods</PrimaryButton></div>
      </Reveal>
    </Section>
  );
}
