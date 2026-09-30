import { Fragment } from "react";
import { Globe, Leaf } from "lucide-react";
import sitingImgUrl from "../assets/siting.png";

import {
  Accent,
  Body,
  Footnote,
  IconBadge,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
  Stat,
} from "./primitives";

// One row per criterion, each side a figure + the line under it. This was
// three index-aligned arrays; pairing a figure with its text made the
// alignment too easy to break by editing one array and not the others, so
// the row is now the unit. Desktop grid and mobile stack both render from
// here — it stays the single source of truth for both.
const COMPARISON = [
  {
    label: "Supply chain flow",
    traditional: {
      figure: "Multi-stage",
      text: "May involve processing, transport, storage and distribution",
    },
    zeroMile: {
      figure: "Shorter route",
      text: "Wholesale supply or production at the customer’s site",
    },
  },
  {
    label: "Distance to market",
    traditional: {
      figure: "Climate-led",
      text: "Sited where the climate allows",
    },
    zeroMile: { figure: "On site", text: "Sited where the demand is" },
  },
  {
    label: "Seasonality",
    traditional: {
      figure: "Weather-dependent",
      text: "Output follows the growing season",
    },
    zeroMile: {
      figure: "Controlled",
      text: "Production can follow planned crop cycles year-round",
    },
  },
  {
    label: "Route to the buyer",
    traditional: { figure: "Time in transit", text: "Distance and handoffs vary by source" },
    zeroMile: {
      figure: "Closer harvest",
      text: "Planned around the market the crop will serve",
    },
  },
];

export default function SectionShift() {
  return (
    <Section id="shift" surface="mist">
      <Reveal>
        <SectionKicker>The Shift</SectionKicker>
        <SectionHeading>
          Production doesn&rsquo;t have to follow{" "}
          <Accent>the supply chain</Accent>
        </SectionHeading>
        <Body className="mt-6">
          If the growing environment is controlled, the farm can be sited by
          demand instead of by climate.
        </Body>
      </Reveal>

      <Reveal delay={60} className="mt-12 md:mt-14">
        {/* Desktop / tablet: one CSS grid so the label, Traditional value and
            Zero-Mile value for a row are literally the same grid row — that's
            what keeps them aligned even when a value wraps. Each Traditional
            cell carries its own bg-white + side borders, each Zero-Mile cell
            its own bg-bz-ocean, with rounding only on the header/last cell of
            each column — five cells sharing identical flat styling and no
            vertical gap read as one continuous panel per column. (A single
            div spanning every row via `grid-row: 1 / -1` was tried first, but
            an explicitly-positioned item occupying a whole column across
            every row makes CSS Grid auto-placement treat that column as full
            for every row, so it pushed all the auto-placed cells into column
            one — that was the "Traditional/Zero-Mile/Labels" reorder bug.) */}
        <div className="hidden lg:grid grid-cols-[minmax(180px,0.75fr)_minmax(0,1fr)_minmax(0,1fr)]">
          {/* Header row */}
          <div />
          <div className="min-h-[120px] p-7 md:p-8 bg-white border-t border-x border-bz-navy/10 rounded-tl-2xl">
            <Globe size={18} className="text-bz-navy/50" aria-hidden="true" />
            <p className="font-instrument-serif text-bz-navy text-xl md:text-2xl mt-3">
              Traditional
            </p>
            <p className="text-bz-navy/45 text-[11px] uppercase tracking-[0.18em] mt-1">
              Follows the supply chain
            </p>
          </div>
          <div className="min-h-[120px] p-7 md:p-8 bg-bz-ocean rounded-tr-2xl">
            <Leaf size={18} className="text-bz-lime" aria-hidden="true" />
            <p className="font-instrument-serif text-white text-xl md:text-2xl mt-3">
              Zero-Mile
            </p>
            <p className="text-white/45 text-[11px] uppercase tracking-[0.18em] mt-1">
              Sited by demand
            </p>
          </div>

          {/* Data rows — rendered row-by-row so alignment can't drift. */}
          {COMPARISON.map(({ label, traditional, zeroMile }, i) => {
            const isLast = i === COMPARISON.length - 1;
            return (
              <Fragment key={label}>
                <div className="flex items-center border-t border-bz-navy/10 py-5 md:py-6 pr-6 md:pr-10">
                  <span className="text-bz-navy text-sm md:text-[15px] font-medium">
                    {label}
                  </span>
                </div>
                <div
                  className={`flex flex-col justify-center bg-white border-t border-x border-bz-navy/10 px-7 md:px-8 py-5 md:py-6 ${
                    isLast ? "border-b rounded-bl-2xl" : ""
                  }`}
                >
                  <Stat className="text-2xl md:text-3xl">
                    {traditional.figure}
                  </Stat>
                  <span className="mt-2 text-bz-navy/60 text-sm md:text-base font-light leading-relaxed">
                    {traditional.text}
                  </span>
                </div>
                <div
                  className={`flex flex-col justify-center bg-bz-ocean border-t border-white/10 px-7 md:px-8 py-5 md:py-6 ${
                    isLast ? "rounded-br-2xl" : ""
                  }`}
                >
                  <Stat dark className="text-2xl md:text-3xl">
                    {zeroMile.figure}
                  </Stat>
                  <span className="mt-2 text-white/90 text-sm md:text-base font-light leading-relaxed">
                    {zeroMile.text}
                  </span>
                </div>
              </Fragment>
            );
          })}
        </div>

        {/* Mobile: a stacked Traditional-vs-Zero-Mile group per criterion —
            same three arrays, no horizontal scroll or compressed columns. */}
        <div className="lg:hidden">
          {COMPARISON.map(({ label, traditional, zeroMile }) => (
            <div
              key={label}
              className="border-b border-bz-navy/10 py-6 first:pt-0 last:border-b-0 last:pb-0"
            >
              <p className="text-bz-navy text-sm font-medium">{label}</p>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-bz-navy/40 text-[11px] uppercase tracking-[0.15em]">
                    Traditional
                  </p>
                  <Stat className="text-xl mt-1 block">
                    {traditional.figure}
                  </Stat>
                  <p className="mt-1 text-bz-navy/60 text-sm font-light leading-relaxed">
                    {traditional.text}
                  </p>
                </div>
                <div className="rounded-xl bg-bz-ocean px-4 py-3">
                  <p className="text-white/70 text-[11px] uppercase tracking-[0.15em]">
                    Zero-Mile
                  </p>
                  <Stat dark className="text-xl mt-1 block">
                    {zeroMile.figure}
                  </Stat>
                  <p className="mt-1 text-white/90 text-sm font-light leading-relaxed">
                    {zeroMile.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Footnote className="mt-6 max-w-3xl">
          Illustrative routes only. The actual number of handoffs, distance,
          storage requirement and delivery schedule depend on the crop,
          customer and location. Zero-Mile describes strategic proximity; it
          does not mean every journey or logistics emission disappears.
        </Footnote>
      </Reveal>

      <div className="flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-16 md:items-center justify-between mt-14 bg-white rounded-2xl p-4">
        <Reveal className="md:ml-8">
          <p className="font-instrument-serif text-bz-navy text-2xl md:text-3xl lg:text-4xl leading-[1.15]">
            Same crop. <Accent>Shorter</Accent> distance.
            <br /> Fewer things that can go wrong.
          </p>
          <a
            href="#why-zero-mile"
            className="group inline-flex items-center gap-4 text-bz-navy text-sm font-medium mt-6 hover:text-bz-blue transition-colors duration-200"
          >
            Why Zero-Mile
            <IconBadge />
          </a>
        </Reveal>

        <Reveal delay={80}>
          <figure>
            <img
              src={sitingImgUrl}
              alt="Concept illustration of an indoor growing site positioned close to demand."
              className="rounded-xl"
              width={600}
            />
            <figcaption className="mt-3 text-xs text-bz-slate">Concept illustration. Actual siting and logistics depend on the project.</figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
