import {
  Accent,
  Body,
  PrimaryButton,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
} from "./primitives";
import rootZone from "../assets/root-zone.png";

const CONTROLS = [
  [
    "Mist at the roots",
    "Water and nutrients reach roots suspended in an enclosed air chamber.",
  ],
  [
    "Water in circulation",
    "A recirculating configuration captures unused solution for reuse.",
  ],
  [
    "A planned growing climate",
    "Light, temperature, humidity and airflow are managed around the crop.",
  ],
];

export default function SectionAeroponics() {
  return (
    <Section id="technology" surface="white" className="compact-section">
      <div className="aeroponics-layout">
        <Reveal className="aeroponics-intro sequence-reveal">
          <SectionKicker>Aeroponics</SectionKicker>
          <SectionHeading>
            Aeroponics. <Accent>Growing with control.</Accent>
          </SectionHeading>
          <Body className="mt-5">
            Aeroponics grows plants without soil, feeding their roots with a
            timed nutrient mist. Indoors, it supports planned crop cycles with
            less exposure to outdoor seasons.
          </Body>
        </Reveal>
        <Reveal className="aeroponics-details controls-reveal">
          <dl className="growing-controls">
            {CONTROLS.map(([title, body], index) => (
              <div key={title}>
                <span aria-hidden="true">0{index + 1}</span>
                <div>
                  <dt>{title}</dt>
                  <dd>{body}</dd>
                </div>
              </div>
            ))}
          </dl>
          <Body className="mt-5">
            Both aeroponics and other hydroponic methods grow without soil. The
            difference is how water, nutrients and oxygen reach the roots.
          </Body>
          <PrimaryButton href="/aeroponics-vs-hydroponics/" className="mt-6">
            Aeroponics vs hydroponics
          </PrimaryButton>
        </Reveal>
        <Reveal delay={80} className="aeroponics-visual root-zone-reveal">
          <figure>
            <img
              src={rootZone}
              alt="Concept illustration of nutrient mist reaching exposed roots in an aeroponic chamber."
              loading="lazy"
              decoding="async"
            />
            <figcaption>Illustration of the aeroponic root zone.</figcaption>
          </figure>
          <div className="research-result">
            <p className="research-number">+114%</p>
            <div>
              <h3>Higher irrigation water-use efficiency</h3>
              <p>
                High-pressure aeroponics versus ebb-and-flow in a University of
                Bologna lettuce trial.
              </p>
              <a
                href="https://doi.org/10.1016/j.agwat.2023.108365"
                target="_blank"
                rel="noreferrer"
              >
                Carotti et al., 2023
              </a>
              {/* <p className="research-context">Published study result, not measured BlueZone performance. This metric excludes climate-control and management water.</p> */}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
