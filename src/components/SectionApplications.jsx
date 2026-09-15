import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  ChevronLeft,
  ChevronRight,
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

// The client's priority sectors, in carousel order.
const SECTORS = [
  {
    icon: Plane,
    title: "Airports and airline catering",
    body: "Volume, schedule reliability and presentation standards, at a site where fresh inventory has to land daily.",
    href: "/applications/airline-catering",
    image: {
      label: "Airline catering",
      hint: "Galley prep, catering facility, or apron with aircraft.",
    },
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
  },
  {
    icon: Building2,
    title: "Hotels and resorts",
    body: "Year-round menu consistency, guest-facing quality, and a visible on-property growing story.",
    href: "/applications/hotels-resorts",
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
    image: {
      label: "Grower operation",
      hint: "Glasshouse or field operation with units added alongside.",
    },
  },
];

function SectorLink({ children, href }) {
  return (
    <BentoTile className="group" innerClassName="p-0">
      <a href={href} className="relative block h-full">
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

// Card width matches the old "Airline catering" lead tile. Track and step
// are measured off the rendered card rather than hardcoded, so the "move one
// card length" arrows stay correct at every breakpoint.
export default function SectionApplications() {
  const trackRef = useRef(null);
  const cardRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [maxIndex, setMaxIndex] = useState(SECTORS.length - 1);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const card = cardRef.current;
      if (!track || !card) return;

      const trackWidth = track.parentElement.clientWidth;
      const cardWidth = card.getBoundingClientRect().width;
      const styles = getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || "0");
      const paddingRight = parseFloat(styles.paddingRight || "0");
      const cardStep = cardWidth + gap;

      // How many card-steps it takes before the final card's right edge sits
      // at (or inside) the visible right margin — that's as far as it goes.
      const scrollable = Math.max(
        0,
        track.scrollWidth - paddingRight - trackWidth,
      );
      const steps = cardStep > 0 ? Math.ceil(scrollable / cardStep) : 0;

      setStep(cardStep);
      setMaxIndex(steps);
      setIndex((i) => Math.min(i, steps));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

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

      {/* Bleeds past the section's right padding so cards run to the screen
          edge; the left edge stays flush with the heading. Clipping here and
          not at the root matters: unclipped, the track makes the whole
          document wider than the phone screen, which lets the page pan
          sideways and leaves the pinned hero not covering the viewport. */}
      <div className="mt-14 -mr-6 md:-mr-12 lg:-mr-16 overflow-hidden">
        <div
          ref={trackRef}
          style={{
            transform: `translateX(-${index * step}px)`,
            transitionTimingFunction: "cubic-bezier(0.76,0,0.24,1)",
          }}
          className="flex gap-4 md:gap-5 transition-transform duration-500 pr-6 md:pr-12 lg:pr-16"
        >
          {SECTORS.map(({ icon: Icon, title, body, href, image }, i) => (
            <div
              key={title}
              ref={i === 0 ? cardRef : undefined}
              className="shrink-0 w-[85vw] sm:w-[460px] lg:w-[560px]"
            >
              <SectorLink href={href}>
                <ImagePlaceholder
                  flat
                  ratio="aspect-[16/10]"
                  label={image.label}
                  hint={image.hint}
                  className="border-0 border-b border-dashed border-bz-navy/20"
                />
                <div className="p-7">
                  <Icon size={20} className="text-bz-blue" aria-hidden="true" />
                  <h3 className="font-instrument-serif text-bz-navy text-2xl md:text-[1.75rem] mt-4 leading-tight pr-6">
                    {title}
                  </h3>
                  <Body className="mt-3 max-w-none text-sm">{body}</Body>
                </div>
              </SectorLink>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 mt-8">
        <button
          type="button"
          onClick={goPrev}
          disabled={index === 0}
          aria-label="Previous"
          className="flex items-center justify-center w-11 h-11 rounded-full border border-bz-navy/20 text-bz-navy transition-colors duration-200 hover:bg-bz-navy/5 hover:border-bz-navy/40 disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={index >= maxIndex}
          aria-label="Next"
          className="flex items-center justify-center w-11 h-11 rounded-full border border-bz-navy/20 text-bz-navy transition-colors duration-200 hover:bg-bz-navy/5 hover:border-bz-navy/40 disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </Section>
  );
}
