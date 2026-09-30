import { ArrowRight, Box, Sprout, Truck } from "lucide-react";

import leftFarm from "../assets/left-farm.jpg";
import rightSkyline from "../assets/right-skyline.png";
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

function FullPremiseImage({ src, side }) {
  const isLeft = side === "left";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 hidden w-[72%] overflow-hidden sm:block sm:w-[58%] lg:w-[54%] ${
        isLeft
          ? "-left-[38%] sm:-left-[12%] lg:left-0"
          : "-right-[38%] sm:-right-[12%] lg:right-0"
      }`}
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover opacity-70 sm:opacity-80 lg:opacity-90 ${
          isLeft ? "object-[62%_center]" : "object-[72%_center]"
        }`}
      />
      <div
        className="absolute inset-0"
        style={{
          background: isLeft
            ? "linear-gradient(to right, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.06) 42%, rgba(255,255,255,0.46) 76%, rgba(255,255,255,0.96) 96%, rgb(255,255,255) 100%)"
            : "linear-gradient(to left, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.06) 42%, rgba(255,255,255,0.46) 76%, rgba(255,255,255,0.96) 96%, rgb(255,255,255) 100%)",
        }}
      />
    </div>
  );
}

function JourneyImage({ src, side }) {
  const isLeft = side === "left";

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className={`pointer-events-none absolute inset-y-0 h-full w-[66%] object-cover sm:w-[60%] ${
        isLeft
          ? "left-0 object-[58%_center]"
          : "right-0 object-[72%_center]"
      }`}
      style={{
        maskImage: isLeft
          ? "linear-gradient(to right, black 0%, black 68%, transparent 100%)"
          : "linear-gradient(to left, black 0%, black 68%, transparent 100%)",
        WebkitMaskImage: isLeft
          ? "linear-gradient(to right, black 0%, black 68%, transparent 100%)"
          : "linear-gradient(to left, black 0%, black 68%, transparent 100%)",
      }}
    />
  );
}

function JourneyPath({ imageBacked = false }) {
  return (
    <ol
      aria-label="The path from distance to proximity"
      className={`relative z-10 mx-auto flex items-start ${
        imageBacked
          ? "max-w-3xl px-4 py-8"
          : "max-w-[15rem] sm:max-w-2xl"
      }`}
    >
      {PATH.map(({ label, icon: Icon, active }, index) => (
        <li key={label} className="contents">
          <div className="flex min-w-0 flex-1 flex-col items-center">
            <span
              className={`flex size-9 items-center justify-center rounded-full border sm:size-12 ${
                active
                  ? imageBacked
                    ? "border-bz-field/25 bg-bz-lime/70 text-bz-navy"
                    : "border-bz-field/20 bg-bz-lime/35 text-bz-navy"
                  : imageBacked
                    ? "border-white/70 bg-white/85 text-bz-navy/75"
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
                  ? "font-medium text-bz-navy/70 [text-shadow:0_1px_10px_rgba(255,255,255,0.95)]"
                  : active
                    ? "font-medium text-bz-navy"
                    : "font-light text-bz-navy/55"
              } ${active && imageBacked ? "!text-bz-navy" : ""}`}
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
                  index === PATH.length - 2
                    ? "bg-bz-field/45"
                    : "bg-bz-navy/15"
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
      containerClassName="!py-12 sm:relative sm:flex sm:min-h-[520px] sm:items-center sm:justify-center sm:overflow-hidden sm:rounded-2xl sm:!py-14 lg:min-h-[560px] lg:!py-16"
    >
      <div className="hidden sm:block">
        <FullPremiseImage src={leftFarm} side="left" />
        <FullPremiseImage src={rightSkyline} side="right" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 90% at 50% 53%, rgb(255,255,255) 10%, rgba(255,255,255,0.99) 45%, rgba(255,255,255,0.9) 59%, rgba(255,255,255,0.5) 78%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/65 to-transparent"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center sm:px-12">
        <Reveal className="flex flex-col items-center">
          <SectionKicker>The Zero-Mile Premise</SectionKicker>
          <SectionHeading className="mx-auto !max-w-3xl">
            <span className="block">Freshness is a</span>
            <span className="block">
              <Accent>proximity problem.</Accent>
            </span>
          </SectionHeading>
          <Body className="mx-auto mt-5 text-center">
            BlueZone starts with a simple question: how close can production be
            to the people who need it? The answer depends on the market, the
            crop and the operating model.
          </Body>
        </Reveal>

        <Reveal delay={100} className="mt-8 sm:hidden">
          <div className="relative isolate w-full overflow-hidden rounded-2xl">
            <JourneyImage src={leftFarm} side="left" />
            <JourneyImage src={rightSkyline} side="right" />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 72% 170% at 50% 50%, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.9) 34%, rgba(255,255,255,0.58) 68%, rgba(255,255,255,0.25) 100%)",
              }}
            />

            <JourneyPath imageBacked />
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-10 hidden sm:block">
          <JourneyPath />
        </Reveal>
      </div>
    </Section>
  );
}
