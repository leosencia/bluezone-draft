import { Minus, Plus } from "lucide-react";
import SiteNavigation from "../components/SiteNavigation";
import {
  Accent,
  Body,
  PrimaryButton,
  Reveal,
  SecondaryButton,
  Section,
  SectionHeading,
  SectionKicker,
} from "../components/primitives";
import SectionFooter from "../components/SectionFooter";
import {
  FACILITY_COMPARISON,
  FAQS,
  PERFORMANCE_METRICS,
} from "../content/comparison";
import aero from "../assets/aero.png";
import hydro from "../assets/hydro.png";
import container from "../assets/container.png";
import roots from "../assets/root-zone.png";
import dosing from "../assets/biocube/catalogue-dosing.webp";
import racks from "../assets/biocube/catalogue-racks.webp";
import mist from "../assets/biocube/mist-poster.webp";
import farm from "../assets/left-farm.jpg";
import "./ComparisonPage.css";

const ENQUIRY = "/?enquiry=systems#get-in-touch";
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Why aeroponics", href: "#why-aeroponics" },
  { label: "The methods", href: "#methods" },
  { label: "Performance", href: "#bluezone-approach" },
  { label: "Head to head", href: "#head-to-head" },
];

const BENEFITS = [
  {
    title: "Growth starts at the roots",
    image: roots,
    alt: "Illustration of exposed plant roots receiving nutrient mist.",
    text: "An oxygen-rich root zone supports active roots and potentially faster growth, depending on the crop and conditions.",
  },
  {
    title: "Water where it matters",
    image: dosing,
    alt: "BioCube catalogue illustration of nutrient dosing and water delivery equipment.",
    text: "Precise misting delivers water and nutrients to the roots. Timed dosing and recovery can reduce waste and resource use.",
  },
  {
    title: "A cleaner root zone",
    image: mist,
    alt: "Still from inside BioCube showing misting at the growing racks.",
    text: "Suspended roots avoid a standing nutrient bath. Controlled delivery supports cleaner production, alongside regular cleaning and monitoring.",
  },
  {
    title: "Designed to scale",
    image: racks,
    alt: "BioCube catalogue illustration of stacked growing racks and lighting.",
    text: "Modular rooms and automated controls simplify expansion around the crop, site services and operating team.",
  },
];

const METHODS = [
  {
    name: "Aeroponics",
    image: aero,
    alt: "Illustration of greens with exposed roots receiving nutrient mist in a growing chamber.",
    summary:
      "Roots hang in an enclosed air space. Nozzles deliver water and dissolved nutrients as a timed mist.",
    facts: [
      ["Oxygen", "Direct access to air between misting cycles"],
      ["Growth", "Potential for faster growth; crop-dependent"],
      [
        "Water & nutrients",
        "Precisely timed delivery; recovery affects total use",
      ],
      [
        "Hygiene & control",
        "Accessible root zone; standardised cleaning and misting",
      ],
      ["Watch closely", "Nozzles and mist delivery"],
    ],
  },
  {
    name: "Other hydroponic systems",
    image: hydro,
    alt: "Illustration of leafy greens growing above a flowing nutrient solution.",
    summary:
      "Roots receive the same essentials through a flowing film, aerated solution or irrigated growing medium.",
    facts: [
      ["Oxygen", "Managed through aeration, flow and system design"],
      ["Growth", "Consistent growth under well-managed conditions"],
      [
        "Water & nutrients",
        "Solution management and recirculation affect total use",
      ],
      ["Hygiene & control", "Solution, reservoir and equipment management"],
      ["Watch closely", "Flow, aeration and root zone"],
    ],
  },
];

export default function ComparisonPage() {
  return (
    <>
      <main id="comparison-main">
        <section className="comparison-hero" aria-labelledby="comparison-title">
          <img
            src={aero}
            alt="Illustration of aeroponic greens with exposed roots receiving nutrient mist."
            className="comparison-hero-image"
            fetchPriority="high"
          />
          <div className="comparison-hero-shade" aria-hidden="true" />
          <SiteNavigation
            links={NAV_LINKS}
            cta={{ label: "Discuss a project", href: ENQUIRY }}
            floatingCtaLabel="Get in touch"
            floatingAfterHeader
            headerClassName="page-section-aligned-header !z-20"
          />
          <div className="comparison-hero-inner">
            <Reveal className="comparison-hero-content">
              <SectionKicker onNavy>Growing methods</SectionKicker>
              <h1 id="comparison-title">
                Aeroponics <span>vs hydroponics.</span>
              </h1>
              <p>
                Two ways to grow without soil. The difference starts with how
                water and nutrients reach the roots.
              </p>
              <div className="comparison-hero-actions">
                <PrimaryButton
                  href="#methods"
                  className="!bg-bz-mist !text-bz-navy hover:!bg-bz-lime"
                >
                  Compare the methods
                </PrimaryButton>
                <a href="#bluezone-approach" className="comparison-hero-link">
                  See Bluezone&apos;s approach
                </a>
              </div>
            </Reveal>
            <p className="comparison-hero-caption">
              Aeroponic root zone, illustrative imagery
            </p>
          </div>
        </section>

        <Section
          id="why-aeroponics"
          surface="mist"
          className="comparison-section"
          containerClassName="comparison-container"
        >
          <Reveal className="comparison-benefits-heading">
            <div>
              <SectionKicker>Why aeroponics?</SectionKicker>
              <SectionHeading>
                More air at the roots.{" "}
                <Accent>More control over the grow.</Accent>
              </SectionHeading>
            </div>
            <Body>
              Fine nutrient mist feeds roots suspended in air. Bluezone combines
              this oxygen-rich root environment with automated delivery and
              climate control to support efficient, consistent growing.
            </Body>
          </Reveal>
          <div className="comparison-benefits">
            {BENEFITS.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 70}>
                <article className="comparison-benefit !p-0">
                  <img
                    src={benefit.image}
                    alt={benefit.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="!p-4">
                    <span className="comparison-benefit-index">
                      0{index + 1}
                    </span>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id="methods"
          surface="white"
          className="comparison-section"
          containerClassName="comparison-container"
        >
          <Reveal className="comparison-section-heading">
            <SectionKicker className="comparison-kicker-compact">
              At the roots
            </SectionKicker>
            <div>
              <SectionHeading>
                Same essentials. <Accent>Different delivery.</Accent>
              </SectionHeading>
              <Body className="mt-4">
                Both methods feed plants water and dissolved nutrients. Their
                root environments and equipment needs differ.
              </Body>
            </div>
          </Reveal>

          <div className="comparison-method-grid">
            {METHODS.map((method, index) => (
              <Reveal key={method.name} delay={index * 80}>
                <article className="comparison-method">
                  <img
                    src={method.image}
                    alt={method.alt}
                    loading="lazy"
                    decoding="async"
                    className="!rounded-b-3xl"
                  />
                  <div className="comparison-method-copy">
                    <span className="comparison-method-index">
                      0{index + 1} / METHOD
                    </span>
                    <h3>{method.name}</h3>
                    <p>{method.summary}</p>
                    <dl>
                      {method.facts.map(([label, value]) => (
                        <div key={label}>
                          <dt>{label}</dt>
                          <dd>{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="comparison-measure">
            <h3>The method is only part of the result.</h3>
            <div>
              <p>
                Compare usable harvest, crop quality, total water and energy,
                labour and reliability for the actual system, crop and site.
              </p>
              <p>
                Method references:{" "}
                <a href="https://extension.okstate.edu/fact-sheets/hydroponics">
                  Oklahoma State University
                </a>
                {" and "}
                <a href="https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/small-scale-hydroponics">
                  University of Minnesota Extension
                </a>
                .
              </p>
            </div>
          </Reveal>
        </Section>

        <Section
          id="bluezone-approach"
          surface="navy"
          className="comparison-section comparison-bluezone"
          containerClassName="comparison-container"
        >
          <Reveal className="comparison-performance-heading">
            <SectionKicker onNavy>Performance &amp; scale</SectionKicker>
            <SectionHeading dark>
              Controlled growing. <Accent dark>Measured potential.</Accent>
            </SectionHeading>
            <Body dark className="mt-4">
              A look at Bluezone&apos;s proposed indoor leafy-greens facility.
              The figures below are modelled planning estimates, not measured
              performance or BioCube container specifications.
            </Body>
          </Reveal>
          <div className="comparison-performance-metrics">
            {PERFORMANCE_METRICS.map((metric, index) => (
              <Reveal key={metric.label} delay={index * 60}>
                <div className="comparison-performance-metric">
                  <p className="comparison-metric-value">{metric.value}</p>
                  <h3>{metric.label}</h3>
                  <p>{metric.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <a
            className="comparison-basis-link"
            href="#comparison-basis"
            onClick={() => {
              document.getElementById("comparison-basis").open = true;
            }}
          >
            Calculation basis and assumptions
          </a>
          <div className="comparison-bluezone-grid">
            <Reveal className="comparison-system-visual">
              <img
                src={container}
                alt="Illustrative Bluezone growing system showing stacked racks inside a container."
                loading="lazy"
                decoding="async"
              />
              <p>
                Illustrative system concept. Configuration is project-specific.
              </p>
            </Reveal>
            <Reveal className="comparison-bluezone-copy" delay={80}>
              <SectionHeading dark as="h3">
                From a single system <Accent dark>to modular rooms.</Accent>
              </SectionHeading>
              <Body dark className="mt-5">
                Bluezone&apos;s proposed systems pair aeroponic misting with
                racks, lighting, climate management and monitoring. The right
                setup depends on the crop, site and buyer. A measured pilot
                establishes usable yield, resource use and operating effort
                before expansion.
              </Body>
              <div className="comparison-bluezone-actions">
                <PrimaryButton
                  href={ENQUIRY}
                  className="!bg-white !text-bz-navy hover:!bg-bz-mist"
                >
                  Discuss a growing project
                </PrimaryButton>
                <SecondaryButton href="/biocube/" dark>
                  Explore BioCube
                </SecondaryButton>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section
          id="head-to-head"
          surface="white"
          className="comparison-section"
          containerClassName="comparison-container"
        >
          <Reveal className="comparison-benefits-heading">
            <div>
              <SectionKicker>Head to head</SectionKicker>
              <SectionHeading>
                Three approaches. <Accent>The details that matter.</Accent>
              </SectionHeading>
            </div>
            <Body>
              Bluezone&apos;s facility model alongside the supplied hydroponic
              and outdoor benchmarks. The reference farms have no matched area
              or operating basis, so these are planning comparisons, not a
              like-for-like performance ranking.
            </Body>
          </Reveal>
          <div className="comparison-table-wrap">
            <table
              className="comparison-facility-table"
              role="table"
              aria-describedby="comparison-table-note"
            >
              <caption className="sr-only">
                Bluezone aeroponics, hydroponics and traditional outdoor farming
              </caption>
              <thead role="rowgroup">
                <tr role="row">
                  <th
                    scope="col"
                    role="columnheader"
                    className="comparison-feature-heading"
                  >
                    What you compare
                  </th>
                  {[
                    ["Bluezone aeroponics", aero, "Facility model"],
                    ["Hydroponics", hydro, "Supplied benchmark"],
                    ["Traditional outdoor", farm, "Supplied benchmark"],
                  ].map(([name, image, label]) => (
                    <th scope="col" role="columnheader" key={name}>
                      <img src={image} alt="" loading="lazy" decoding="async" />
                      <span>{name}</span>
                      <small>{label}</small>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody role="rowgroup">
                {FACILITY_COMPARISON.map(([feature, ...values]) => (
                  <tr key={feature} role="row">
                    <th scope="row" role="rowheader">
                      {feature}
                    </th>
                    {values.map((value, index) => (
                      <td key={index} role="cell">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p id="comparison-table-note" className="comparison-table-note">
            Modelled values are subject to validation. Five rooms include
            propagation; annual harvest is attributed to four cultivation rooms.
            Certification status and scope require confirmation for the
            operating facility.
          </p>
          <details id="comparison-basis" className="comparison-source-notes">
            <summary>
              Calculation basis &amp; source notes
              <Plus size={18} className="faq-plus" aria-hidden="true" />
              <Minus size={18} className="faq-minus" aria-hidden="true" />
            </summary>
            <div>
              <p>
                Source: Bluezone&apos;s supplied{" "}
                <cite>Leafy Greens Indoor Farm Solution</cite> proposal, pages
                4, 6 and 12, and the supplied comparison brief. These figures
                describe the proposed facility, not demonstrated output.
              </p>
              <p>
                <strong>Yield basis:</strong> 516,096 kg/year divided by four
                324 m² cultivation rooms gives approximately 398 kg/m²/year.
                Propagation and ancillary space are excluded from that area.
              </p>
              <p>
                <strong>1. Comparison ranges:</strong> Hydroponic and outdoor
                figures are supplied reference ranges, not verified industry
                averages. Their crop specification, area and measurement periods
                have not been matched to the Bluezone model.
              </p>
              <p>
                <strong>2. Resource calculations:</strong> 375 tonnes of water
                per month is approximately 4,500,000 litres/year, or 8.72 L/kg.
                Annual electricity of 6,588,250 kWh gives 12.77 kWh/kg at the
                modelled yield. These reconciled estimates replace the
                conflicting 1.27 L/kg and 1.40 kWh/kg summary figures. The
                supplied 7× yield and 90% water-saving claims have no consistent
                comparison basis.
              </p>
              <p>
                <strong>3. Crop schedule:</strong> The proposal lists 36 days
                for lettuce; propagation time, cultivation occupancy and harvest
                scheduling must be reconciled with the annual output model.
                Year-round control does not mean every crop is ready at all
                times.
              </p>
            </div>
          </details>
        </Section>

        <Section
          surface="mist"
          className="comparison-section"
          containerClassName="comparison-container"
        >
          <div className="comparison-faq-grid">
            <Reveal>
              <SectionKicker>Short answers</SectionKicker>
              <SectionHeading>
                Before <Accent>you grow.</Accent>
              </SectionHeading>
            </Reveal>
            <div className="comparison-faq-list">
              {FAQS.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    <span>{question}</span>
                    <Plus size={19} className="faq-plus" aria-hidden="true" />
                    <Minus size={19} className="faq-minus" aria-hidden="true" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <SectionFooter homePrefix="/" comparisonPage />
    </>
  );
}
