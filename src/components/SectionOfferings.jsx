import { ArrowUpRight } from "lucide-react";
import {
  Accent,
  Body,
  PrimaryButton,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
} from "./primitives";
import greens from "../assets/microgreens/mixed-microgreens-concept.png";
import cutaway from "../assets/biocube/catalogue-cutaway.webp";

export default function SectionOfferings() {
  return (
    <Section id="solutions" surface="mist" className="compact-section">
      <Reveal className="section-intro sequence-reveal">
        <div>
          <SectionKicker>BlueZone</SectionKicker>
          <SectionHeading>
            Fresh produce. <Accent>Or a farm of your own.</Accent>
          </SectionHeading>
        </div>
        <Body>
          Two ways to bring production closer: discuss supply for your buyers,
          or explore a growing system for your site.
        </Body>
      </Reveal>
      <div className="offerings-grid">
        <Reveal className="offering-reveal">
          <article id="produce" className="offering offering-produce shadow-lg">
            <figure>
              <img
                src={greens}
                alt="Illustrative mixed microgreens and micro herbs served on a ceramic dish."
                loading="lazy"
                decoding="async"
              />
              <figcaption className="rounded-md">
                Illustrative produce
              </figcaption>
            </figure>
            <div className="offering-copy">
              <p className="offering-label">
                For kitchens, hospitality & wholesale
              </p>
              <h3>BlueZone Microgreens</h3>
              <p>
                Microgreens, micro herbs and pea shoots. Discuss varieties, pack
                sizes, weekly quantities and delivery needs with our team.
              </p>
              <a
                href="#get-in-touch"
                data-enquiry="produce"
                className="offering-link"
              >
                Discuss produce supply{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </article>
        </Reveal>
        <Reveal delay={80} className="offering-reveal">
          <article id="biocube" className="offering offering-system shadow-2xl">
            <figure>
              <img
                src={cutaway}
                alt="BioCube catalogue cutaway showing the proposed microgreens racks and equipment compartments."
                loading="lazy"
                decoding="async"
              />
              <figcaption className="rounded-md !bg-bz-ocean !text-white">
                Proposed microgreens configuration
              </figcaption>
            </figure>
            <div className="offering-copy">
              <p className="offering-label">For operators & site partners</p>
              <h3>BioCube growing systems</h3>
              <p>
                A proposed modular system combining stacked racks, aeroponic
                misting, lighting and climate control.
              </p>
              <dl className="offering-specs">
                <div>
                  <dt>Canopy area</dt>
                  <dd>
                    70 m<sup>2</sup>
                  </dd>
                </div>
                <div>
                  <dt>Growing tiers</dt>
                  <dd>5</dd>
                </div>
              </dl>
              <p className="offering-detail">
                Catalogue design figures; final specifications depend on the
                project. Production output is under validation.
              </p>
              <a href="/biocube/" className="offering-link offering-link-filled">
                Explore BioCube <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
      <Reveal id="pilot" className="pilot-summary sequence-reveal">
        <div>
          <h3>
            Start with a site. <Accent>Build the case.</Accent>
          </h3>
          <Body className="mt-3">
            Agree the crop, buyer and operating team. A measured pilot evaluates
            yield, quality, water, energy and cost before any expansion.
          </Body>
        </div>
        <PrimaryButton href="#get-in-touch" data-enquiry="pilot">
          Explore a pilot
        </PrimaryButton>
      </Reveal>
    </Section>
  );
}
