import { Droplets, Lightbulb, Recycle, Thermometer } from "lucide-react";

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
} from "./primitives";

const CAPABILITIES = [
  {
    icon: Droplets,
    title: "Root zone",
    body: "Misted nutrient delivery. No soil, no substrate waste.",
  },
  {
    icon: Recycle,
    title: "Water",
    body: "Closed-loop recirculation, dosed to the cycle.",
  },
  {
    icon: Thermometer,
    title: "Climate",
    body: "Temperature, humidity and CO₂ held to setpoint.",
  },
  {
    icon: Lightbulb,
    title: "Light",
    body: "LED photoperiod tuned per crop.",
  },
];

export default function SectionTechnology() {
  return (
    <Section id="technology" surface="white">
      <Reveal>
        <SectionKicker>Technology</SectionKicker>
        <SectionHeading>
          Control the environment. <Accent>Not the weather</Accent>
        </SectionHeading>
        <Body className="mt-6 max-w-2xl">
          Aeroponics grows plants in air. Roots hang in an enclosed chamber and
          receive a fine mist of water and nutrients on a controlled cycle.
        </Body>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-14">
        <Reveal>
          <ImagePlaceholder
            ratio="aspect-[4/3]"
            label="Aeroponic root zone"
            hint="Macro shot of misted roots, or a cutaway of the chamber."
          />
        </Reveal>

        <Reveal delay={80}>
          <Body className="max-w-none">
            Because the root zone is enclosed, water that is not taken up is
            captured and recirculated instead of draining away. Because the room
            is enclosed, light, temperature, humidity and CO&#8322; are set
            rather than hoped for.
          </Body>
          <Body className="mt-4 max-w-none">
            The result is a growing cycle that repeats to a schedule, 365 days a
            year, independent of the season outside.
          </Body>

          <div className="grid sm:grid-cols-2 auto-rows-fr gap-4 mt-10">
            {CAPABILITIES.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 60} className="h-full">
                <BentoTile innerClassName="p-5 md:p-6">
                  <Icon size={18} className="text-bz-teal" aria-hidden="true" />
                  <h3 className="text-bz-navy text-base font-sans font-medium mt-3">
                    {title}
                  </h3>
                  <Body className="mt-1 max-w-none text-sm">{body}</Body>
                </BentoTile>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal>
        <Footnote className="mt-10 max-w-2xl">
          Water and fertiliser efficiency figures for BlueZone systems are
          pending pilot measurement. Published aeroponic efficiency claims come
          from suppliers rather than independent measurement, so they are not
          presented here as BlueZone performance.
        </Footnote>
      </Reveal>
    </Section>
  );
}
