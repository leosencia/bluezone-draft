import { useState } from "react";
import { ArrowUpRight, Minus, Play, Plus, RotateCcw } from "lucide-react";
import SiteNavigation from "../components/SiteNavigation";
import SectionFooter from "../components/SectionFooter";
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
import {
  BIOCUBE_CLIPS,
  CONFIGURATION,
  TECHNICAL_DETAILS,
} from "../content/biocube";
import hero from "../assets/biocube/biocube-plain.png";
import heroMobile from "../assets/biocube/biocube-plain-center.png";
import cutaway from "../assets/biocube/catalogue-cutaway.webp";
import racks from "../assets/biocube/catalogue-racks.webp";
import dosing from "../assets/biocube/catalogue-dosing.webp";
import climate from "../assets/biocube/catalogue-climate.webp";
import monitoring from "../assets/biocube/catalogue-monitoring.webp";
import chamberPoster from "../assets/biocube/chamber-poster.webp";
import mistPoster from "../assets/biocube/mist-poster.webp";
import siting from "../assets/siting.png";
import "./BioCubePage.css";

const ENQUIRY = "/?enquiry=systems#get-in-touch";
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "The system", href: "#system" },
  { label: "Inside BioCube", href: "#inside-biocube" },
  { label: "Your project", href: "#your-project" },
];

const SUBSYSTEMS = [
  {
    name: "Growing racks & lighting",
    image: racks,
    alt: "Catalogue illustration of stacked BioCube growing racks with lighting above each tier.",
    body: "Stacked racks organise the growing area around a central access aisle. LED lighting supports a planned indoor crop cycle.",
    detail: "Stacked growing space. Planned light cycles.",
  },
  {
    name: "Nutrient delivery",
    image: dosing,
    alt: "Catalogue illustration of the BioCube nutrient dosing tanks, filtration and irrigation equipment.",
    body: "Automated dosing and irrigation feed water and dissolved nutrients to misting nozzles in the enclosed root zone.",
    detail: "Nutrient solution, delivered as mist.",
  },
  {
    name: "Climate & airflow",
    image: climate,
    alt: "Catalogue illustration of the climate-control equipment at one end of the BioCube container.",
    body: "Integrated climate equipment and air distribution manage conditions throughout the growing area, alongside the crop plan.",
    detail: "A managed growing environment.",
  },
];

const PROJECT_STEPS = [
  [
    "Define the brief",
    "Agree the crop, buyer, harvest requirements and available site.",
  ],
  [
    "Plan the system",
    "Confirm the layout, utilities, equipment and operating responsibilities.",
  ],
  [
    "Measure before expanding",
    "Evaluate usable harvest, quality, water, energy, labour and cost through a pilot.",
  ],
];

function SiteFootage() {
  const [activeClip, setActiveClip] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const posters = { chamber: chamberPoster, mist: mistPoster };

  function selectClip(id) {
    setLoaded(false);
    setFailed(false);
    setActiveClip(id);
  }

  return (
    <div className="biocube-clips">
      {BIOCUBE_CLIPS.map((clip, index) => (
        <figure key={clip.id} className="biocube-clip">
          <div className="biocube-clip-frame">
            {activeClip === clip.id ? (
              failed ? (
                <div className="biocube-video-error" role="alert">
                  <p>This clip couldn&apos;t load.</p>
                  <button type="button" onClick={() => selectClip(clip.id)}>
                    <RotateCcw size={16} aria-hidden="true" /> Try again
                  </button>
                  <a href={clip.src} target="_blank" rel="noreferrer">
                    Open the video <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              ) : (
                <>
                  <video
                    key={clip.id}
                    src={clip.src}
                    poster={posters[clip.id]}
                    controls
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={clip.title}
                    onLoadedData={() => setLoaded(true)}
                    onError={() => setFailed(true)}
                  />
                  {!loaded && (
                    <span className="biocube-video-loading" role="status">
                      Loading video...
                    </span>
                  )}
                </>
              )
            ) : (
              <button
                type="button"
                className="biocube-clip-play"
                onClick={() => selectClip(clip.id)}
                aria-label={`Play ${clip.title.toLowerCase()}`}
              >
                <img
                  src={posters[clip.id]}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <span className="biocube-play-icon">
                  <Play size={22} fill="currentColor" aria-hidden="true" />
                </span>
                <span className="biocube-clip-duration">
                  {clip.id === "chamber" ? "1:15" : "0:27"}
                </span>
              </button>
            )}
          </div>
          <figcaption>
            <span>0{index + 1} / SITE FOOTAGE</span>
            <h3>{clip.title}</h3>
            <p>{clip.detail}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function BioCubePage() {
  return (
    <>
      <a className="biocube-skip-link" href="#system">
        Skip to the system
      </a>
      <main id="biocube-main">
        <section className="biocube-hero" aria-labelledby="biocube-title">
          <picture className="biocube-hero-media">
            <source media="(max-width: 767px)" srcSet={heroMobile} />
            <img
              src={hero}
              alt="Concept illustration of a BlueZone BioCube with illuminated growing racks, sited beside the sea."
              className="biocube-hero-image"
              fetchPriority="high"
            />
          </picture>
          <div className="biocube-hero-shade" aria-hidden="true" />
          <SiteNavigation
            links={NAV_LINKS}
            cta={{ label: "Discuss a BioCube", href: ENQUIRY }}
            floatingCtaLabel="Discuss a BioCube"
            floatingAfterHeader
            light
            headerClassName="!z-20"
          />
          <div className="biocube-hero-inner">
            <Reveal className="biocube-hero-content">
              <SectionKicker>BioCube</SectionKicker>
              {/* <h1 id="biocube-title">BioCube.</h1> */}
              <p className="biocube-hero-statement">
                An aeroponic farm.
                <br />
                <em>Closer to demand.</em>
              </p>
              <p className="biocube-hero-description">
                BlueZone's BioCube is a modular growing system bringing racks,
                nutrient misting, lighting and climate control together in one
                container.
              </p>
              <div className="biocube-actions">
                <PrimaryButton
                  href={ENQUIRY}
                  className="!bg-bz-navy hover:!bg-bz-teal !text-bz-mist"
                  light
                >
                  Discuss your project
                </PrimaryButton>
                <a href="#system" className="biocube-text-link">
                  Explore the system{" "}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
            <p className="biocube-hero-caption">BioCube concept illustration</p>
          </div>
        </section>

        <Section
          id="system"
          surface="white"
          containerClassName="biocube-container"
        >
          <Reveal className="biocube-intro">
            <div>
              <SectionKicker>The system</SectionKicker>
              <SectionHeading>
                A whole growing environment.
                <br />
                <Accent>One BioCube.</Accent>
              </SectionHeading>
            </div>
            <Body>
              A proposed containerised system for microgreens. The crop,
              equipment and operating plan are agreed around your project,
              bringing controlled production closer to the people it serves.
            </Body>
          </Reveal>
          <div className="biocube-overview">
            <Reveal className="biocube-cutaway">
              <figure>
                <img
                  src={cutaway}
                  alt="BioCube catalogue cutaway showing the proposed stacked growing racks, central access aisle and equipment compartments."
                  width={1416}
                  height={545}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  Catalogue illustration of the proposed microgreens
                  configuration.
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="biocube-configuration" delay={100}>
              <h3>Proposed configuration</h3>
              <dl className="biocube-configuration-grid">
                {CONFIGURATION.map(({ value, unit, prefix, label }) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>
                      {prefix && (
                        <span className="biocube-value-prefix">{prefix}</span>
                      )}{" "}
                      {value}
                      {unit && (
                        <span className="biocube-value-unit"> {unit}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="biocube-note">
                Catalogue design figures. Final specifications depend on the
                project; production output is under validation.
              </p>
            </Reveal>
          </div>
          <Reveal className="biocube-specifications">
            <div className="biocube-specifications-heading">
              <h3>A closer look at the specifications.</h3>
              <p>Proposed component details.</p>
            </div>
            <div className="biocube-spec-list">
              {TECHNICAL_DETAILS.map(({ title, page, rows }) => (
                <details key={title}>
                  <summary>
                    <span>{title}</span>
                    <Plus
                      className="biocube-detail-plus"
                      size={18}
                      aria-hidden="true"
                    />
                    <Minus
                      className="biocube-detail-minus"
                      size={18}
                      aria-hidden="true"
                    />
                  </summary>
                  <dl>
                    {rows.map(([label, value]) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="biocube-spec-source">
                    Catalogue p. {page}. Final equipment is confirmed per
                    project.
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </Section>

        <Section
          id="integrated-system"
          surface="navy"
          className="biocube-integrated"
          containerClassName="biocube-container"
        >
          <Reveal className="biocube-intro">
            <div>
              <SectionKicker onNavy>Working together</SectionKicker>
              <SectionHeading dark>
                Each part has a purpose.
                <br />
                <Accent dark>Every part is connected.</Accent>
              </SectionHeading>
            </div>
            <Body dark>
              Misting is one part of the growing process. Racks, light, climate
              and monitoring work together around the needs of the crop.
            </Body>
          </Reveal>
          <div className="biocube-subsystems">
            {SUBSYSTEMS.map(({ name, image, alt, body, detail }, index) => (
              <Reveal key={name} delay={index * 90}>
                <article className="biocube-system-card">
                  <img src={image} alt={alt} loading="lazy" decoding="async" />
                  <div className="!p-4 md:!p-8">
                    <span className="biocube-card-index">0{index + 1}</span>
                    <h3>{name}</h3>
                    <p>{body}</p>
                    <p className="biocube-card-detail">{detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="biocube-monitoring">
            <figure>
              <img
                src={monitoring}
                alt="Catalogue concept illustration of the BlueZone monitoring interface displaying growing conditions and camera views."
                loading="lazy"
                decoding="async"
              />
              <figcaption>Catalogue interface concept</figcaption>
            </figure>
            <div>
              <span className="biocube-card-index">04 / MONITORING</span>
              <h3>A clearer view of the grow.</h3>
              <Body dark>
                Digital monitoring and preset growing strategies support
                day-to-day operation. The operating team still manages
                preparation, seeding, harvesting and equipment care.
              </Body>
              <a
                href="/aeroponics-vs-hydroponics/"
                className="biocube-text-link"
              >
                Why aeroponics? <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
          <p className="biocube-note biocube-dark-note">
            Equipment and interface images are catalogue illustrations, not
            verified installation photography.
          </p>
        </Section>

        <Section
          id="inside-biocube"
          surface="navy"
          containerClassName="biocube-container"
        >
          <div className="biocube-footage-layout">
            <Reveal>
              <SectionKicker onNavy>Inside BioCube</SectionKicker>
              <SectionHeading dark>
                A look inside.
                <br />
                <Accent dark>From the growing floor.</Accent>
              </SectionHeading>
              <Body dark className="mt-5">
                Two short videos recorded inside the actual BioCube: a walk
                through the chamber and a closer view of misting at the racks.
              </Body>
              <p className="biocube-note biocube-light-note">
                On-site phone footage. The installation shown may differ from
                the proposed catalogue configuration.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <SiteFootage />
            </Reveal>
          </div>
        </Section>

        <Section
          id="your-project"
          surface="white"
          containerClassName="biocube-container"
        >
          <div className="biocube-project-layout">
            <Reveal className="biocube-project-copy">
              <SectionKicker>Your project</SectionKicker>
              <SectionHeading>
                Start with your site.
                <br />
                <span className="italic">Build the growing plan.</span>
              </SectionHeading>
              <Body className="mt-5 !text-bz-navy">
                For operators, hospitality, institutions and site partners
                exploring production close to demand. A measured pilot
                establishes the operating case before expansion.
              </Body>
              <ol className="biocube-project-steps">
                {PROJECT_STEPS.map(([title, body], index) => (
                  <li key={title}>
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="biocube-actions">
                <PrimaryButton href={ENQUIRY}>
                  Discuss a BioCube system
                </PrimaryButton>
                <SecondaryButton
                  href="/?enquiry=pilot#get-in-touch"
                  className="!border-bz-navy/40"
                >
                  Explore a pilot
                </SecondaryButton>
              </div>
            </Reveal>
            <Reveal delay={100} className="biocube-project-image">
              <figure>
                <img
                  src={siting}
                  alt="Concept illustration of a BlueZone growing container sited close to its customer location."
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  Concept siting. Location, utilities and commercial terms are
                  agreed per project.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Section>
      </main>
      <SectionFooter homePrefix="/" />
    </>
  );
}
