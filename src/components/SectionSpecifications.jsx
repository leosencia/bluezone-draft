import { Boxes, Layers, Ruler, Scaling } from "lucide-react";

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

const SPECS = [
  { icon: Boxes, value: "Up to 4,500", label: "Planting boxes" },
  { icon: Ruler, value: "70 m²", label: "Canopy area" },
  { icon: Scaling, value: "35", label: "Growing sections" },
  { icon: Layers, value: "5", label: "Vertical tiers" },
];

export default function SectionSpecifications() {
  return (
    <Section id="specifications" surface="white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <ImagePlaceholder
            ratio="aspect-[4/3]"
            label="Cutaway or elevation drawing"
            hint="Technical view of the tiers and sections, dimensions called out."
          />
        </Reveal>

        <div>
          <Reveal delay={80}>
            <SectionHeading>
              Engineered <Accent>for density</Accent>
            </SectionHeading>
            <Body className="mt-6">
              Canopy area is multiplied by stacking, so output per square metre
              of floor is a function of tiers rather than land.
            </Body>
          </Reveal>

          <dl className="grid grid-cols-2 auto-rows-fr gap-4 mt-10">
            {SPECS.map(({ icon: Icon, value, label }, i) => (
              <Reveal key={label} delay={i * 60} className="h-full">
                <BentoTile innerClassName="p-5 md:p-6">
                  <Icon
                    size={18}
                    className="text-bz-teal shrink-0"
                    aria-hidden="true"
                  />
                  <dd className="font-instrument-serif text-bz-navy text-2xl md:text-3xl leading-none mt-4">
                    {value}
                  </dd>
                  <dt className="text-bz-navy/60 text-sm font-light mt-2">
                    {label}
                  </dt>
                </BentoTile>
              </Reveal>
            ))}
          </dl>

          <Reveal>
            <div className="flex items-start gap-3 mt-6">
              <Footnote className="flex-1">
                Proposed configuration. Subject to final configuration and
                verification.
              </Footnote>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
