import {
  Accent,
  Body,
  PrimaryButton,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
} from "./primitives";
import cutaway from "../assets/biocube/catalogue-cutaway.webp";
import chamber from "../assets/biocube/chamber-poster.webp";
import rootZone from "../assets/root-zone.png";
import climate from "../assets/biocube/catalogue-climate.webp";

const LAYERS = [
  {
    title: "Vertical growing space",
    body: "Stacked tiers organise crops indoors while leaving access for the growing team.",
    image: chamber,
    alt: "On-site view down a BioCube aisle between stacked growing tiers.",
    source: "On-site footage",
  },
  {
    title: "Aeroponic root zone",
    body: "Roots suspended in air receive water and dissolved nutrients as a timed mist.",
    image: rootZone,
    alt: "Concept illustration of nutrient mist reaching suspended plant roots.",
    source: "Concept illustration",
  },
  {
    title: "Managed conditions",
    body: "Lighting, temperature, humidity and airflow are planned around the crop.",
    image: climate,
    alt: "Catalogue illustration of the climate equipment in a proposed BioCube.",
    source: "Catalogue illustration",
  },
];

export default function SectionAeroponics() {
  return (
    <Section id="technology" surface="white" className="compact-section">
      <Reveal className="section-intro sequence-reveal">
        <div>
          <SectionKicker>Indoor Vertical Farming</SectionKicker>
          <SectionHeading>
            Grow upward. <Accent>Feed the roots with mist.</Accent>
          </SectionHeading>
        </div>
        <Body>
          Indoor vertical farming grows crops on stacked tiers within a managed
          environment. Bluezone pairs this layout with aeroponics, which
          delivers water and nutrients to suspended roots as a mist.
        </Body>
      </Reveal>

      <Reveal className="vertical-system-reveal" delay={80}>
        <figure className="vertical-system-figure">
          <img
            src={cutaway}
            alt="Catalogue cutaway of a proposed BioCube with stacked growing racks and equipment compartments."
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Proposed microgreens configuration. Catalogue illustration.
          </figcaption>
        </figure>
      </Reveal>

      <div className="vertical-layers">
        {LAYERS.map(({ title, body, image, alt, source }, index) => (
          <Reveal
            key={title}
            delay={index * 90}
            className="vertical-layer-reveal"
          >
            <article className="vertical-layer">
              <img src={image} alt={alt} loading="lazy" decoding="async" />
              <div className="vertical-layer-copy">
                <span className="vertical-layer-index">
                  0{index + 1} / {source}
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="vertical-system-outro">
        <Body>
          BioCube brings the growing space, aeroponic delivery, lighting,
          climate management and monitoring into one proposed modular system.
          Crop selection and final configuration are agreed for each project.
        </Body>
        <div className="vertical-system-actions">
          <PrimaryButton href="/biocube/">Explore BioCube</PrimaryButton>
          <PrimaryButton
            href="/aeroponics-vs-hydroponics/"
            className="!bg-bz-teal hover:!text-bz-navy hover:!bg-bz-lime !text-white"
          >
            Aeroponics vs hydroponics
          </PrimaryButton>
        </div>
      </Reveal>
    </Section>
  );
}
