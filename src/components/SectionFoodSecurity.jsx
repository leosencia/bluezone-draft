import { ArrowUpRight } from "lucide-react";
import {
  Accent,
  Body,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
} from "./primitives";
import dubai from "../assets/food-security/dubai-desert-skyline.jpg";
import food from "../assets/impact/4-food-security.png";
import water from "../assets/impact/1-water.png";
import siting from "../assets/siting.png";

const FACTS = [
  {
    value: "~90%",
    label: "of food consumption has historically been imported",
    source: "UAE Government case study",
    href: "https://u.ae/-/media/About-UAE/Success-stories/cs-docs/CS10.ashx",
  },
  {
    value: "0.7%",
    label: "of land was classified as arable in 2023",
    source: "World Bank / FAO",
    href: "https://data.worldbank.org/indicator/AG.LND.ARBL.ZS?locations=AE",
  },
  {
    value: "23rd",
    label: "globally on the 2022 Global Food Security Index",
    source: "UAE Government",
    href: "https://u.ae/en/information-and-services/environment-and-energy/food-security",
  },
];

const CONTRIBUTIONS = [
  {
    image: food,
    alt: "Illustration of fresh vegetables being prepared in a commercial kitchen.",
    title: "Produce locally",
    body: "Modular growing systems could add UAE-based supply of suitable leafy greens and microgreens closer to hospitality, wholesale and institutional buyers.",
  },
  {
    image: water,
    alt: "Illustration of aeroponic mist reaching roots beneath growing greens.",
    title: "Use water precisely",
    body: "Timed nutrient misting and recirculation are designed to manage water carefully. Actual use depends on the crop, equipment and operation.",
  },
  {
    image: siting,
    alt: "Concept illustration of a Bluezone growing container beside a distribution facility.",
    title: "Plan production year-round",
    body: "Lighting, climate control and monitoring support planned crop cycles with less dependence on outdoor heat, seasons and long import routes.",
  },
];

export default function SectionFoodSecurity() {
  return (
    <Section
      id="food-security"
      surface="navy"
      className="compact-section food-security-section"
    >
      <Reveal className="section-intro sequence-reveal security-intro">
        <div>
          <SectionKicker onNavy>UAE Food Security</SectionKicker>
          <SectionHeading dark>
            A national ambition. <Accent dark>Grown closer to home.</Accent>
          </SectionHeading>
        </div>
        <Body dark>
          The UAE has built a strong food system through global trade. Limited
          arable land, scarce water and reliance on imports leave fresh supply
          exposed to extreme heat and disruptions in international routes.
        </Body>
      </Reveal>

      <div className="security-context" aria-label="UAE food security context">
        {FACTS.map((fact, index) => (
          <Reveal key={fact.value} delay={index * 70}>
            <div className="security-context-fact">
              <p className="security-context-value">{fact.value}</p>
              <p className="security-context-label">{fact.label}</p>
              <a href={fact.href} target="_blank" rel="noreferrer">
                {fact.source} <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="security-strategy-reveal">
        <div className="security-strategy">
          <img
            src={dubai}
            alt="Dubai skyline beyond a sandy landscape with scattered trees."
            loading="lazy"
            decoding="async"
          />
          <div className="security-strategy-copy">
            <p className="security-strategy-label">
              National Food Security Strategy 2051
            </p>
            <p className="security-strategy-ambition">
              No. 1 <span>by 2051</span>
            </p>
            <h3>UAE&apos;s global food security ambition.</h3>
            <p>
              The strategy aims for first place in the Global Food Security
              Index. It calls for technology-enabled local production alongside
              diversified trade, resilient supply and less food loss.
            </p>
            <a
              href="https://u.ae/en/about-the-uae/strategies-initiatives-and-awards/strategies-plans-and-visions/environment-and-energy/national-food-security-strategy-2051"
              target="_blank"
              rel="noreferrer"
            >
              Explore the UAE strategy{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <p className="security-photo-credit">
          Dubai photograph by{" "}
          <a
            href="https://unsplash.com/photos/green-trees-on-brown-sand-during-daytime-o27Syy2u6wU"
            target="_blank"
            rel="noreferrer"
          >
            Ahmed Galal / Unsplash
          </a>
        </p>
      </Reveal>

      <Reveal className="security-contribution-intro">
        <div>
          <p className="security-contribution-label">Bluezone&apos;s role</p>
          <SectionHeading dark as="h3">
            Focused local production.{" "}
            <Accent dark>A stronger supply mix.</Accent>
          </SectionHeading>
        </div>
        <Body dark>
          Bluezone&apos;s contribution would be focused on crops suited to
          controlled aeroponic growing, alongside the wider UAE food system.
        </Body>
      </Reveal>

      <div className="security-stories">
        {CONTRIBUTIONS.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 80}
            className="security-story-reveal"
          >
            <article className="security-story !p-0">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
              />
              <div className="security-story-copy !p-6 md:!p-8">
                <span className="security-story-index">0{index + 1}</span>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="security-footnote">
        Bluezone concepts are illustrative. Local growing can complement imports
        and field agriculture; crop suitability, affordability, energy and
        reliable operation all matter to food security.
      </p>
      <a className="security-next-link" href="#solutions">
        Explore Bluezone <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </Section>
  );
}
