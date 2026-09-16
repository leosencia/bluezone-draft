import { Flower2, Leaf, Salad, Sprout } from "lucide-react";
import fiveXUrl from "../assets/5x.png";

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
  Stat,
} from "./primitives";

const CROPS = [
  {
    icon: Sprout,
    name: "Microgreens",
    body: "Harvested young, at peak nutrient density. Days from seed to cut.",
    image: { label: "Microgreens", hint: "Tray at harvest, top-down." },
    span: "lg:col-span-2",
  },
  {
    icon: Leaf,
    name: "Micro herbs",
    body: "High-value garnish and flavour, consistent year-round.",
    image: {
      label: "Micro herbs",
      hint: "Close crop, shallow depth of field.",
    },
    span: "",
  },
  {
    icon: Salad,
    name: "Leafy greens",
    body: "The volume staple, grown to a repeatable cycle.",
    image: { label: "Leafy greens", hint: "Mature heads in the growing tier." },
    span: "",
  },
  {
    icon: Flower2,
    name: "Edible flowers",
    body: "Specialty presentation for hospitality and fine dining.",
    image: { label: "Edible flowers", hint: "Plated detail or harvest tray." },
    span: "lg:col-span-2",
  },
];

export default function SectionProduce() {
  return (
    <Section id="produce" surface="mist">
      <Reveal>
        <SectionKicker>Produce</SectionKicker>
        <SectionHeading>
          Grow <Accent>what the market needs</Accent>
        </SectionHeading>
        <Body className="mt-6">
          Crop selection follows location, demand, production requirements and
          economics.
        </Body>
      </Reveal>

      {/* Bento: the volume staple takes the tall tile, the rest sit beside it. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 md:gap-5 mt-14">
        {CROPS.map(({ icon: Icon, name, body, image, span }, i) => (
          <Reveal key={name} delay={i * 80} className={`h-full ${span}`}>
            <BentoTile innerClassName="p-0 overflow-hidden">
              <ImagePlaceholder
                flat
                ratio="aspect-[4/3]"
                label={image.label}
                hint={image.hint}
                className="border-0 border-b border-dashed border-bz-navy/20"
              />
              <div className="p-6 flex-1 flex flex-col">
                <Icon size={18} className="text-bz-field" aria-hidden="true" />
                <h3 className="font-instrument-serif text-bz-navy text-2xl md:text-[1.75rem] mt-4">
                  {name}
                </h3>
                <Body className="mt-2 max-w-none text-sm flex-1">{body}</Body>
              </div>
            </BentoTile>
          </Reveal>
        ))}
      </div>

      {/* Nutrient callout */}
      <Reveal>
        <BentoTile
          className="mt-4 md:mt-5"
          innerClassName="p-8 md:p-12 grid lg:grid-cols-[minmax(0,240px)_1fr] gap-2 lg:gap-4 items-center"
        >
          <div>
            <img src={fiveXUrl} width={200} alt="5x" />
          </div>
          <div>
            <h3 className="text-bz-navy text-lg md:text-xl font-sans font-medium">
              5x more nutrients in the fraction of the space
            </h3>
            <Body className="mt-3 max-w-2xl">
              USDA researchers measured 25 microgreen varieties for vitamin C,
              vitamin E, vitamin K and carotenoids and found levels about five
              times those of the mature leaves of the same plants. Red cabbage,
              cilantro, garnet amaranth and green daikon radish led the
              individual nutrient measures.
            </Body>
            <Footnote className="mt-4">
              Xiao et al., Journal of Agricultural and Food Chemistry, 2012
            </Footnote>
          </div>
        </BentoTile>
      </Reveal>
    </Section>
  );
}
