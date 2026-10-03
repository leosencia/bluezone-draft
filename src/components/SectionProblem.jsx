import {
  Accent,
  Body,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
} from "./primitives";
import farm from "../assets/supply-chain/1-farm.png";
import transport from "../assets/supply-chain/3-transport.png";
import distribution from "../assets/supply-chain/5-distribution.png";

const STAGES = [
  {
    image: farm,
    title: "Harvest & handling",
    text: "Freshness starts counting down from the moment a crop is picked.",
    alt: "Illustration of fresh produce being harvested on a farm.",
  },
  {
    image: transport,
    title: "Time in transit",
    text: "Fuel prices, weather and shipping disruptions can interrupt the journey.",
    alt: "Illustration of produce moving along a transport route.",
  },
  {
    image: distribution,
    title: "The final handoffs",
    text: "Storage and distribution add time before produce reaches the kitchen.",
    alt: "Illustration of produce passing through a distribution warehouse.",
  },
];

export default function SectionProblem() {
  return (
    <Section id="problem" surface="mist" className="compact-section">
      <Reveal className="section-intro sequence-reveal">
        <div>
          <SectionKicker>The Problem</SectionKicker>
          <SectionHeading>
            A long journey. <Accent>A fragile supply.</Accent>
          </SectionHeading>
        </div>
        <Body>
          Every handoff between farm and kitchen adds cost, delay, and risk.
          Passing through harvest, processing, transit, and distribution leaves
          fresh produce vulnerable to weather, fuel prices, and shipping
          disruptions.
        </Body>
      </Reveal>
      <div className="problem-stories">
        {STAGES.map(({ image, title, text, alt }, index) => (
          <Reveal
            key={title}
            delay={index * 60}
            className="problem-story-reveal"
          >
            <article className="problem-story bg-white rounded-3xl shadow-xl">
              <img
                src={image}
                alt={alt}
                loading="lazy"
                decoding="async"
                className="h-full md:h-auto"
              />
              <div className="p-4 pt-0">
                <span className="story-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
