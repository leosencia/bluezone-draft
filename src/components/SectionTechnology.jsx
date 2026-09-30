import { Droplets, Lightbulb, Recycle, Thermometer } from "lucide-react";

import {
  Accent,
  BentoTile,
  Body,
  Footnote,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
} from "./primitives";

import rootZone from "../assets/root-zone.png";

const CAPABILITIES = [
  {
    icon: Droplets,
    title: "Root zone",
    body: "Timed nutrient mist delivered to roots in an enclosed chamber.",
  },
  {
    icon: Recycle,
    title: "Water",
    body: "Automated dosing and irrigation support the crop plan.",
  },
  {
    icon: Thermometer,
    title: "Climate",
    body: "Climate equipment and airflow manage conditions in the growing area.",
  },
  {
    icon: Lightbulb,
    title: "Light",
    body: "LED lighting supports planned indoor crop cycles.",
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
          <figure>
            <img
              src={rootZone}
              alt="Illustrative pea shoots with curled tendrils on cool stone and navy linen."
              width={1122}
              height={1402}
              loading="lazy"
              decoding="async"
              className="w-full aspect-[4/3] lg:aspect-[4/5] object-cover rounded-2xl"
            />
            <figcaption className="mt-3 text-xs text-bz-slate">
              Illustrative imagery.
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={80}>
          <Body className="max-w-none">
            In a recirculating configuration, water not taken up can be captured
            and reused. In an indoor growing room, lighting, temperature,
            humidity and CO&#8322; can be managed to a crop plan.
          </Body>
          <Body className="mt-4 max-w-none">
            This supports planned, year-round crop cycles with less exposure to
            outdoor seasons. People still seed, load, inspect, harvest, clean
            and maintain the growing system.
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
          Crop performance and resource use depend on the configuration and
          operating conditions. Explore how aeroponics and hydroponics differ{" "}
          <a
            href="/aeroponics-vs-hydroponics/"
            className="underline underline-offset-2 hover:text-bz-blue transition-colors duration-200"
          >
            in our comparison
          </a>
          .
        </Footnote>
      </Reveal>
    </Section>
  );
}
