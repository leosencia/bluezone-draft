import {
  ArrowUpRight,
  Building2,
  Package,
  Plane,
  ShieldCheck,
  Tractor,
  Waves,
} from "lucide-react";

import {
  Accent,
  BentoTile,
  Body,
  ImagePlaceholder,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
} from "./primitives";

// The client's priority sectors lead the grid and carry the images.
const LEAD = [
  {
    icon: Plane,
    title: "Airports and airline catering",
    body: "Volume, schedule reliability and presentation standards, at a site where fresh inventory has to land daily.",
    href: "/applications/airline-catering",
    image: {
      label: "Airline catering",
      hint: "Galley prep, catering facility, or apron with aircraft.",
    },
    span: "lg:col-span-3",
  },
  {
    icon: Waves,
    title: "Islands and remote locations",
    body: "Freight dependence, long lead times and arrival quality.",
    href: "/applications/islands",
    image: {
      label: "Island supply",
      hint: "Island port, supply vessel, or coastal community.",
    },
    span: "lg:col-span-3",
  },
  {
    icon: ShieldCheck,
    title: "Government and institutions",
    body: "Local production capacity as part of food security planning.",
    href: "/applications/food-security",
    image: {
      label: "Institutional site",
      hint: "Public facility, school or hospital kitchen.",
    },
    span: "lg:col-span-2",
  },
];

const REST = [
  {
    icon: Building2,
    title: "Hotels and resorts",
    body: "Year-round menu consistency, guest-facing quality, and a visible on-property growing story.",
    href: "/applications/hotels-resorts",
    span: "lg:col-span-2",
    image: {
      label: "Resort property",
      hint: "Restaurant terrace, or a unit sited on resort grounds.",
    },
  },
  {
    icon: Package,
    title: "Foodservice and distribution",
    body: "Predictable supply and shelf life against a variable import market.",
    href: "/applications/foodservice",
    span: "lg:col-span-2",
    image: {
      label: "Distribution",
      hint: "Packing line, chilled store, or a delivery being received.",
    },
  },
  {
    icon: Tractor,
    title: "Commercial growers",
    body: "Added controlled-environment capacity alongside existing field operations.",
    href: "/applications/commercial-growers",
    span: "md:col-span-2 lg:col-span-6",
    image: {
      label: "Grower operation",
      hint: "Glasshouse or field operation with units added alongside.",
      // Full-width tile: the image sits beside the copy instead of above it.
      beside: true,
    },
  },
];

function SectorLink({ children, href, linkClassName = "" }) {
  return (
    <BentoTile className="group" innerClassName="p-0">
      <a href={href} className={`relative block h-full ${linkClassName}`}>
        {children}
        <ArrowUpRight
          size={16}
          aria-hidden="true"
          className="absolute top-6 right-6 text-bz-navy/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-bz-blue"
        />
      </a>
    </BentoTile>
  );
}

export default function SectionApplications() {
  return (
    <Section id="applications" surface="white">
      <Reveal>
        <SectionKicker>Applications</SectionKicker>
        <SectionHeading>
          Where could production <Accent>move closer?</Accent>
        </SectionHeading>
        <Body className="mt-6">
          Anywhere fresh produce arrives late, expensive, or not at all.
        </Body>
      </Reveal>

      {/* Bento: the three priority sectors carry the wider tiles; the rest
          fill in around them. */}
      <div className="grid md:grid-cols-2 lg:grid-cols-6 auto-rows-fr gap-4 md:gap-5 mt-14">
        {[...LEAD, ...REST].map(
          ({ icon: Icon, title, body, href, image, span }, i) => (
            <Reveal key={title} delay={i * 70} className={`h-full ${span}`}>
              <SectorLink
                href={href}
                linkClassName={image.beside ? "md:flex md:items-stretch" : ""}
              >
                <ImagePlaceholder
                  flat
                  ratio={image.beside ? "aspect-[16/6]" : "aspect-[16/10]"}
                  label={image.label}
                  hint={image.hint}
                  className={`border-0 border-dashed border-bz-navy/20 ${
                    image.beside
                      ? "border-b md:border-b-0 md:border-r md:w-1/2 md:aspect-auto"
                      : "border-b"
                  }`}
                />
                <div className="p-7">
                  <Icon size={20} className="text-bz-blue" aria-hidden="true" />
                  <h3 className="font-instrument-serif text-bz-navy text-2xl md:text-[1.75rem] mt-4 leading-tight pr-6">
                    {title}
                  </h3>
                  <Body className="mt-3 max-w-none text-sm">{body}</Body>
                </div>
              </SectorLink>
            </Reveal>
          ),
        )}
      </div>
    </Section>
  );
}
