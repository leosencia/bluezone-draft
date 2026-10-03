import { Fragment } from "react";
import {
  Body,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
} from "./primitives";
import farm from "../assets/left-farm.jpg";
import siting from "../assets/siting.png";

const ROWS = [
  {
    label: "The journey",
    traditional: "Multiple handoffs",
    zeroMile: "A shorter route",
  },
  {
    label: "The location",
    traditional: "Led by climate",
    zeroMile: "Closer to demand",
  },
  {
    label: "The growing cycle",
    traditional: "Season-dependent",
    zeroMile: "Planned year-round",
  },
];

export default function SectionShift() {
  return (
    <Section
      id="shift"
      surface="navy"
      className="compact-section shift-section"
    >
      <span id="why-zero-mile" className="anchor-alias" aria-hidden="true" />
      <div className="shift-layout">
        <Reveal className="sequence-reveal">
          <SectionKicker onNavy className="">
            The Shift
          </SectionKicker>
          <SectionHeading dark>
            Bring the farm <span className="italic">closer to the table.</span>
          </SectionHeading>
          <Body dark className="mt-5">
            A controlled growing environment makes it possible to plan selected
            crops around the people who need them. That is the Zero-Mile idea.
          </Body>
          {/* <p className="shift-note text-white/50">
            Closer production can complement existing suppliers. It still needs
            reliable power, skilled operators and a viable local market.
          </p> */}
        </Reveal>
        <Reveal delay={80} className="shift-comparison-reveal">
          <div
            className="shift-comparison"
            role="table"
            aria-label="Traditional and Zero-Mile production"
          >
            <div role="row" className="contents shadow-lg">
              <div
                role="columnheader"
                className="comparison-header traditional-cell"
              >
                <img
                  src={farm}
                  alt="Illustrative outdoor growing landscape."
                  loading="lazy"
                  className="rounded-b-3xl"
                />
                <h3>Traditional</h3>
                <p>Follows the supply chain</p>
              </div>
              <div
                role="columnheader"
                className="comparison-header zero-mile-cell"
              >
                <img
                  src={siting}
                  alt="Concept of a Bluezone growing unit beside a buyer's warehouse."
                  loading="lazy"
                  className="rounded-b-3xl"
                />
                <h3>Zero-Mile</h3>
                <p>Sited by demand</p>
              </div>
            </div>
            {ROWS.map(({ label, traditional, zeroMile }) => (
              <div role="row" className="contents" key={label}>
                {[traditional, zeroMile].map((value, index) => (
                  <Fragment key={value}>
                    <div
                      role="cell"
                      className={
                        index
                          ? "comparison-cell zero-mile-cell"
                          : "comparison-cell traditional-cell"
                      }
                    >
                      <span>{label}</span>
                      <p>{value}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-white/75">
            Illustrative routes and siting. Zero-Mile means strategic proximity;
            it does not mean every journey or logistics emission disappears.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
