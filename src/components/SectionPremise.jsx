import { ArrowRight, Box, Sprout, Truck } from "lucide-react";

import premiseImage from "../assets/premise.png";
import {
  Accent,
  Body,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
} from "./primitives";

const PATH = [
  { label: "Distance", icon: Truck },
  { label: "Dependency", icon: Box },
  { label: "Proximity", icon: Sprout, active: true },
];

function JourneyPath({ imageBacked = false }) {
  return (
    <ol
      aria-label="The path from distance to proximity"
      className={`relative z-10 mx-auto flex items-start ${
        imageBacked ? "max-w-3xl px-4 py-8" : "max-w-[15rem] sm:max-w-2xl"
      }`}
    >
      {PATH.map(({ label, icon: Icon, active }, index) => (
        <li key={label} className="contents">
          <div className="flex min-w-0 flex-1 flex-col items-center">
            <span
              className={`flex size-9 items-center justify-center rounded-full border sm:size-12 ${
                active
                  ? imageBacked
                    ? "border-white/65 bg-white/20 text-white"
                    : "border-bz-field/20 bg-bz-lime/35 text-bz-navy"
                  : imageBacked
                    ? "border-white/45 bg-white/15 text-white/85"
                    : "border-bz-navy/10 bg-white/75 text-bz-navy/70"
              }`}
            >
              <Icon
                className="size-4 sm:size-[19px]"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </span>
            <span
              className={`mt-1.5 text-[10px] sm:mt-2 sm:text-sm ${
                imageBacked
                  ? "font-medium text-white [text-shadow:0_1px_10px_rgba(7,27,43,0.55)]"
                  : active
                    ? "font-medium text-bz-navy"
                    : "font-light text-bz-navy/55"
              }`}
            >
              {label}
            </span>
          </div>

          {index < PATH.length - 1 ? (
            <div
              aria-hidden="true"
              className="mt-[1.05rem] flex min-w-4 flex-1 items-center sm:mt-[1.45rem] sm:min-w-8"
            >
              <span
                className={`h-px flex-1 ${
                  index === PATH.length - 2 ? "bg-bz-field/45" : "bg-bz-navy/15"
                }`}
              />
              <ArrowRight
                className={`size-3.5 shrink-0 sm:size-[17px] ${
                  index === PATH.length - 2
                    ? "text-bz-field"
                    : "text-bz-navy/45"
                }`}
                strokeWidth={1.6}
              />
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export default function SectionPremise() {
  return (
    <Section
      id="premise"
      surface="white"
      className="isolate md:py-20 lg:py-30"
      containerClassName="relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-2xl !py-12 sm:!py-14 lg:min-h-[560px] lg:!py-16"
    >
      <img
        src={premiseImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center sm:px-12">
        <Reveal className="flex flex-col items-center">
          <SectionKicker>The Zero-Mile Premise</SectionKicker>
          <SectionHeading className="mx-auto !max-w-3xl">
            <span className="block">Freshness is a</span>
            <span className="block">
              <Accent>proximity problem.</Accent>
            </span>
          </SectionHeading>
          <Body className="mx-auto mt-5 text-center text-white">
            BlueZone starts with a simple question: how close can production be
            to the people who need it? The answer depends on the market, the
            crop and the operating model.
          </Body>
        </Reveal>

        <Reveal delay={100} className="mt-8 sm:hidden">
          <div className="relative isolate w-full overflow-hidden rounded-2xl">
            <JourneyPath imageBacked />
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-10 hidden sm:block">
          <JourneyPath imageBacked />
        </Reveal>
      </div>
    </Section>
  );
}
