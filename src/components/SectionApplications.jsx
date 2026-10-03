import { useEffect, useRef, useState } from "react";
import airportImage from "../assets/application/1-airport.png";
import islandImage from "../assets/application/2-island.png";
import institutionImage from "../assets/application/3-institution.png";
import resortImage from "../assets/application/4-resorts.png";
import foodserviceImage from "../assets/application/5-food-service.png";
import growerImage from "../assets/application/6-grower.png";
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
    body: "Grow selected crops near the catering kitchen, against its procurement specification. Assess one unit before considering a wider rollout.",
    image: {
      src: airportImage,
      label: "Airline catering",
    },
  },
  {
    icon: Waves,
    title: "Islands and remote locations",
    body: "A local operator can supply resort kitchens or distributors. Assess demand, utilities, staffing and the cost of imported produce together.",
    image: {
      src: islandImage,
      label: "Island supply",
    },
  },
  {
    icon: ShieldCheck,
    title: "Government and institutions",
    body: "Local production with a defined operator and buyer for the harvest. Public or development support depends on programme eligibility.",
    image: {
      src: institutionImage,
      label: "Institutional site",
    },
  },
  {
    icon: Building2,
    title: "Hotels and resorts",
    body: "Explore produce supply, an on-property system or a local operator serving several kitchens. Operating teams and crop demand shape the model.",
    image: {
      src: resortImage,
      label: "Resort property",
    },
  },
  {
    icon: Package,
    title: "Foodservice and distribution",
    body: "Discuss microgreen supply for your customers, or assess selected production at your own depot against volumes, quality and landed cost.",
    image: {
      src: foodserviceImage,
      label: "Distribution",
    },
  },
  {
    icon: Tractor,
    title: "Commercial growers",
    body: "An additional indoor crop enterprise alongside field operations, run by trained staff. Judge the opportunity using real labour, energy and yield data.",
    image: {
      src: growerImage,
      label: "Grower operation",
    },
  },
];

function SectorLink({ children }) {
  return (
    <BentoTile className="group" innerClassName="p-0">
      <a href="#get-in-touch" data-enquiry="systems" className="relative block h-full rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bz-blue">
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
          Strong candidates combine recurring demand, costly or fragile supply,
          and a practical site, operator and funding route. We assess the crop
          and commercial case before defining a pilot.
        </Body>
      </Reveal>

      <div className="flex items-center justify-end self-end gap-3 mt-8">
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
          {SECTORS.map(({ icon: Icon, title, body, image }, i) => (
            <div
              key={title}
              ref={i === 0 ? cardRef : undefined}
              className="shrink-0 w-[85vw] sm:w-[460px] lg:w-[560px]"
            >
              <SectorLink>
                <img
                  src={image.src}
                  alt={image.label}
                  loading="lazy"
                  decoding="async"
                  className="block w-full aspect-[16/10] object-cover"
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
      <Reveal>
        <div className="mt-12 rounded-2xl bg-bz-mist p-7 md:p-10 grid md:grid-cols-2 gap-8">
          <div><h3 className="font-instrument-serif text-bz-navy text-2xl md:text-3xl">System crop planning</h3><Body className="mt-3">Leafy greens, culinary herbs, microgreens and edible flowers are crop targets for site-specific evaluation. Crop cycles, configuration and economics need to be established for each project.</Body></div>
          <div><h3 className="font-instrument-serif text-bz-navy text-2xl md:text-3xl">A market for every harvest</h3><Body className="mt-3">Airline kitchens, resort clusters, distributors and institutional caterers can provide recurring demand. Water, land, climate and logistics constraints help identify where local production may be useful.</Body><p className="mt-4 text-sm text-bz-slate">These system crop possibilities are separate from the BlueZone Microgreens supply range.</p></div>
        </div>
      </Reveal>
    </Section>
  );
}
