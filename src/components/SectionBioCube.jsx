import {
  Activity,
  Fan,
  Layers3,
  Lightbulb,
  Minus,
  Plus,
  Sprout,
} from "lucide-react";
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
  {
    name: "Growing racks",
    icon: Layers3,
    body: "Stacked growing racks organise the growing area around a central access aisle.",
  },
  {
    name: "Nutrient delivery",
    icon: Sprout,
    body: "Automated dosing and irrigation deliver water and nutrients through aeroponic misting.",
  },
  {
    name: "Climate and airflow",
    icon: Fan,
    body: "Integrated climate equipment and air distribution manage conditions within the growing area.",
  },
  {
    name: "LED lighting",
    icon: Lightbulb,
    body: "Grow lighting supports a planned crop cycle inside the container.",
  },
  {
    name: "Monitoring",
    icon: Activity,
    body: "Digital monitoring and preset growing strategies support day-to-day operation.",
  },
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
      className="scroll-mt-4 bg-bz-navy noise-overlay px-6 md:px-12 lg:px-16 text-white"
    >
      <div className="max-w-7xl mx-auto py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-4">
            <SectionKicker onNavy>BioCube</SectionKicker>
            <div id="biocube-heading">
              <SectionHeading dark>
                Meet <Accent dark>BioCube</Accent>
              </SectionHeading>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Body dark className="!max-w-2xl !text-white/75">
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
            <div className="rounded-3xl px-3 py-8 sm:px-5 sm:py-10 lg:py-5">
              <img
                src={cutaway}
                width={1416}
                height={545}
                loading="lazy"
                decoding="async"
                className="md:max-w-5xl ml-18 h-auto"
                alt="BioCube catalogue cutaway showing stacked growing racks and equipment compartments."
              />
            </div>
            {/* <figcaption className="mt-3 text-xs leading-relaxed text-bz-navy/70">
              Catalogue illustration of the proposed microgreens configuration.
              Final equipment and layout may change.
            </figcaption> */}
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
            <h3 className="font-instrument-serif text-2xl sm:text-3xl text-white">
              Proposed configuration
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70 max-w-md">
              Proposed microgreens configuration. Final specifications are
              confirmed for each project. Production output is currently
              undergoing quality validation.
            </p>
            <dl className="grid grid-cols-2 mt-5 border-t border-white/15">
              {CONFIGURATION.map(({ value, prefix, label }, index) => (
                <div
                  key={label}
                  className={`flex flex-col py-4 border-b border-white/15 ${index % 2 === 0 ? "pr-4 border-r border-white/15" : "pl-5"}`}
                >
                  <dt className="order-2 mt-2 text-sm text-white/70">
                    {label}
                  </dt>
                  <dd className="order-1 flex flex-wrap items-baseline gap-x-1.5 text-white">
                    {prefix && (
                      <span className="text-xs text-white/70">{prefix}</span>
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

        <div className="grid bg-bz-teal text-white p-8 rounded-3xl lg:grid-cols-[0.65fr_1.35fr] gap-8 lg:gap-16 mt-14">
          <SectionHeading className="!text-3xl text-white">
            Working together,{" "}
            <span className="italic font-instrument-serif text-bz-navy">
              inside BioCube.
            </span>
          </SectionHeading>
          <dl className="divide-y divide-bz-mist/20 !text-white">
            {SUBSYSTEMS.map(({ name, icon: Icon, body }) => (
              <div
                key={name}
                className="grid sm:grid-cols-[auto_0.7fr_1.3fr] gap-3 sm:gap-5 py-5 first:pt-0"
              >
                <span
                  aria-hidden="true"
                  className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white"
                >
                  <Icon size={19} strokeWidth={1.8} />
                </span>
                <dt className="self-center font-medium text-sm">{name}</dt>
                <dd>
                  <Body dark className="!text-sm !text-white/85">{body}</Body>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <details className="group mt-6 border-y border-white/15">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-medium text-white hover:text-bz-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bz-lime [&::-webkit-details-marker]:hidden">
            View technical details
            <span
              aria-hidden="true"
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-bz-lime"
            >
              <Plus size={18} className="group-open:hidden" />
              <Minus size={18} className="hidden group-open:block" />
            </span>
          </summary>
          <div className="pb-8">
            {/* <p className="text-sm leading-relaxed text-bz-navy/70 max-w-2xl">
              Proposed component specifications; final equipment and operating
              requirements remain to be confirmed.
            </p> */}
            <div className="grid lg:grid-cols-2 gap-x-12 gap-y-7 mt-7">
              {TECHNICAL_DETAILS.map(({ title, slide, rows }) => (
                <div key={title}>
                  <h4 className="text-sm font-medium text-white">{title}</h4>
                  {/* <p className="mt-1 text-xs text-bz-navy/70">Source: supplied BioCube catalogue, slide {slide}.</p> */}
                  <dl className="mt-3 border-t border-white/15">
                    {rows.map(([label, value]) => (
                      <div
                        key={label}
                        className="grid lg:grid-cols-2 gap-1 lg:gap-4 py-3 border-b border-white/10 text-sm leading-relaxed text-white"
                      >
                        <dt className="text-white/65">{label}</dt>
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
