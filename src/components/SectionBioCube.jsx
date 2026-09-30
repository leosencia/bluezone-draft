import { Minus, Plus } from "lucide-react";
import {
  Accent,
  Body,
  PrimaryButton,
  SectionHeading,
  SectionKicker,
} from "./primitives";
import cutaway from "../assets/biocube/catalogue-cutaway.webp";

// Candidate configuration from the supplied catalogue, not validated output.
const CONFIGURATION = [
  { value: "4,500", prefix: "Up to", label: "Planting boxes" },
  { value: "70 m²", label: "Canopy area" },
  { value: "35", label: "Sections" },
  { value: "5", label: "Vertical tiers" },
];

const SUBSYSTEMS = [
  [
    "Growing racks",
    "Stacked growing racks organise the growing area around a central access aisle.",
  ],
  [
    "Nutrient delivery",
    "Automated dosing and irrigation deliver water and nutrients through aeroponic misting.",
  ],
  [
    "Climate and airflow",
    "Integrated climate equipment and air distribution manage conditions within the growing area.",
  ],
  [
    "LED lighting",
    "Grow lighting supports a planned crop cycle inside the container.",
  ],
  [
    "Monitoring",
    "Digital monitoring and preset growing strategies support day-to-day operation.",
  ],
];

const TECHNICAL_DETAILS = [
  {
    title: "Aeroponics",
    slide: 5,
    rows: [
      ["Mist particle size", "20–60 µm"],
      ["Nozzle quantity", "460"],
    ],
  },
  {
    title: "Climate",
    slide: 8,
    rows: [
      ["HVAC electrical power", "16.6 kW"],
      ["Cooling capacity", "42 kW"],
      ["Catalogue space-temperature range", "5–28°C"],
    ],
  },
  {
    title: "Nutrient delivery",
    slide: 9,
    rows: [
      ["Dosing tanks", "3 fertiliser tanks and 1 acid tank"],
      ["Chiller temperature range", "12–25°C"],
    ],
  },
  {
    title: "Lighting",
    slide: 11,
    rows: [["Total growing-light power", "9.6 kW"]],
  },
  {
    title: "Monitoring",
    slide: 13,
    rows: [
      [
        "Catalogue-described capabilities",
        "Monitoring and preset planting strategies",
      ],
    ],
  },
];

export default function SectionBioCube() {
  return (
    <section
      id="biocube"
      aria-labelledby="biocube-heading"
      className="scroll-mt-4 bg-white px-6 md:px-12 lg:px-16 text-bz-navy"
    >
      <div className="max-w-7xl mx-auto py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-4">
            <SectionKicker>BioCube</SectionKicker>
            <div id="biocube-heading">
              <SectionHeading>
                Meet <Accent>BioCube</Accent>
              </SectionHeading>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Body className="!max-w-2xl">
              A proposed containerised growing system for microgreens, bringing
              together aeroponic nutrient delivery, stacked racks, LED lighting,
              climate control and digital monitoring. Crop selection, equipment
              and site requirements are agreed around each project.
            </Body>
            <PrimaryButton
              href="#get-in-touch"
              data-enquiry="systems"
              className="mt-5 min-h-11 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bz-blue"
            >
              Discuss a BioCube system
            </PrimaryButton>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mt-10 lg:mt-12 items-center">
          <figure className="lg:col-span-8 lg:col-start-5 lg:row-start-1 min-w-0">
            <div className="rounded-2xl bg-bz-mist px-3 py-8 sm:px-5 sm:py-10 lg:py-5">
              <img
                src={cutaway}
                width={1416}
                height={545}
                loading="lazy"
                decoding="async"
                className="block w-full h-auto"
                alt="BioCube catalogue cutaway showing stacked growing racks and equipment compartments."
              />
            </div>
            <figcaption className="mt-3 text-xs leading-relaxed text-bz-navy/70">
              Catalogue illustration of the proposed microgreens configuration.
              Final equipment and layout may change.
            </figcaption>
          </figure>

          <div
            id="specifications"
            className="relative scroll-mt-6 lg:col-span-4 lg:col-start-1 lg:row-start-1"
          >
            {/* Preserve incoming links to the retired Capacity section. */}
            <span
              id="capacity"
              aria-hidden="true"
              className="absolute top-0 left-0 scroll-mt-6"
            />
            <h3 className="font-instrument-serif text-2xl sm:text-3xl">
              Proposed configuration
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-bz-navy/70 max-w-md">
              Proposed microgreens configuration, based on the supplied
              catalogue. Final specifications are confirmed for each project.
              Production output has not been verified.
            </p>
            <dl className="grid grid-cols-2 mt-5 border-t border-bz-navy/15">
              {CONFIGURATION.map(({ value, prefix, label }, index) => (
                <div
                  key={label}
                  className={`flex flex-col py-4 border-b border-bz-navy/15 ${index % 2 === 0 ? "pr-4 border-r" : "pl-5"}`}
                >
                  <dt className="order-2 mt-2 text-sm text-bz-navy/70">
                    {label}
                  </dt>
                  <dd className="order-1 flex flex-wrap items-baseline gap-x-1.5 text-bz-navy">
                    {prefix && (
                      <span className="text-xs text-bz-navy/70">{prefix}</span>
                    )}
                    <span className="font-instrument-serif text-3xl sm:text-4xl leading-none whitespace-nowrap">
                      {value}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
            {/* <p className="mt-4 text-xs leading-relaxed text-bz-navy/70">Source: supplied BioCube catalogue, slide 4.</p> */}
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-8 lg:gap-16 mt-14 border-t border-bz-navy/15 pt-10">
          <SectionHeading className="!text-3xl">
            Working together, <Accent>inside BioCube.</Accent>
          </SectionHeading>
          <dl className="divide-y divide-bz-navy/15">
            {SUBSYSTEMS.map(([name, body]) => (
              <div
                key={name}
                className="grid sm:grid-cols-[0.7fr_1.3fr] gap-2 sm:gap-6 py-5 first:pt-0"
              >
                <dt className="font-medium text-sm">{name}</dt>
                <dd>
                  <Body className="!text-sm">{body}</Body>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <details className="group mt-6 border-y border-bz-navy/15">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-medium hover:text-bz-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bz-blue [&::-webkit-details-marker]:hidden">
            View technical details
            <span
              aria-hidden="true"
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-bz-mist text-bz-blue"
            >
              <Plus size={18} className="group-open:hidden" />
              <Minus size={18} className="hidden group-open:block" />
            </span>
          </summary>
          <div className="pb-8">
            <p className="text-sm leading-relaxed text-bz-navy/70 max-w-2xl">
              Proposed component specifications; final equipment and operating
              requirements remain to be confirmed.
            </p>
            <div className="grid lg:grid-cols-2 gap-x-12 gap-y-7 mt-7">
              {TECHNICAL_DETAILS.map(({ title, slide, rows }) => (
                <div key={title}>
                  <h4 className="text-sm font-medium">{title}</h4>
                  {/* <p className="mt-1 text-xs text-bz-navy/70">Source: supplied BioCube catalogue, slide {slide}.</p> */}
                  <dl className="mt-3 border-t border-bz-navy/15">
                    {rows.map(([label, value]) => (
                      <div
                        key={label}
                        className="grid lg:grid-cols-2 gap-1 lg:gap-4 py-3 border-b border-bz-navy/10 text-sm leading-relaxed"
                      >
                        <dt className="text-bz-navy/70">{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
