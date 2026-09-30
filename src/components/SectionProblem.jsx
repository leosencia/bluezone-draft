import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  Accent,
  Body,
  EASE,
  ImagePlaceholder,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
  usePrefersReducedMotion,
} from "./primitives";

const CHAIN = [
  "Farm",
  "Processing",
  "Transport",
  "Cold chain",
  "Distribution",
  "Kitchen",
];

// One photo per stage, filenames numbered "1-farm.png" .. "6-kitchen.png" —
// already in CHAIN order, so sorting by source path (not the resolved,
// hashed URL) lines them straight up with CHAIN by index.
const CHAIN_IMAGE_MODULES = import.meta.glob("../assets/supply-chain/*.png", {
  eager: true,
  import: "default",
});
const CHAIN_IMAGES = Object.keys(CHAIN_IMAGE_MODULES)
  .sort((a, b) => a.localeCompare(b))
  .map((key) => CHAIN_IMAGE_MODULES[key]);

// Descriptions for each CHAIN stage, keyed by the label so CHAIN stays the
// single source of truth for names and order. Images come from CHAIN_IMAGES
// by index above; swapping a photo later is just replacing the file.
const chainMeta = {
  Farm: {
    description:
      "Produce is harvested at its peak, but the journey to market is just beginning.",
  },
  Processing: {
    description:
      "Produce is cleaned, sorted, packed and prepared for shipment.",
  },
  Transport: {
    description: "Fresh food travels long distances by road, sea or air.",
  },
  "Cold chain": {
    description:
      "Temperature-controlled storage keeps produce viable between destinations.",
  },
  Distribution: {
    description:
      "Produce moves through warehouses, logistics hubs and local distributors.",
  },
  Kitchen: {
    description:
      "After multiple handoffs, fresh produce finally reaches the point of consumption.",
  },
};

const AUTOPLAY_MS = 3800;

// Bottom-left number/title/description block, shared between the desktop
// accordion panels and the mobile cards so both render off the same markup.
function StagePanelContent({ stage, index, active, isActive, onDot, fast }) {
  const number = String(index + 1).padStart(2, "0");
  const duration = fast ? "duration-150" : "duration-500";

  return (
    <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 md:p-5 pointer-events-none">
      <span className="text-white/60 text-xs tracking-[0.15em] uppercase font-light">
        {number}
      </span>
      <h3
        className={`font-instrument-serif text-white leading-tight transition-all ${duration} ${
          isActive ? "text-2xl md:text-3xl mt-1" : "text-sm md:text-base mt-0.5"
        }`}
      >
        {stage}
      </h3>

      <div
        className={`overflow-hidden transition-all ${duration} ${
          isActive ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <span className="block w-8 h-px bg-white/40 mt-3 mb-3" />
        <p className="text-white/80 text-sm font-light leading-relaxed max-w-xs">
          {chainMeta[stage].description}
        </p>

        {isActive ? (
          <div className="flex items-center gap-1.5 mt-4 pointer-events-auto">
            {CHAIN.map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onDot(i);
                }}
                aria-label={`Go to ${label} stage`}
                aria-current={i === active ? "true" : undefined}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 bg-white"
                    : "w-3 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function StageImage({ stage, index, isActive, fast }) {
  const image = CHAIN_IMAGES[index];
  const duration = fast ? "duration-150" : "duration-700";

  if (!image) {
    return (
      <ImagePlaceholder
        flat
        dark
        ratio=""
        label={stage}
        hint="Photo pending"
        className="absolute inset-0 h-full border-0"
      />
    );
  }

  return (
    <img
      src={image}
      alt={`${stage} stage of the fresh produce supply chain`}
      draggable={false}
      style={{ transitionTimingFunction: EASE }}
      className={`absolute inset-0 w-full h-full object-cover transition-transform ${duration} ${
        isActive ? "scale-100" : "scale-105"
      }`}
    />
  );
}

function SupplyChainCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const mobileTrackRef = useRef(null);
  const suppressSync = useRef(false);
  const reducedMotion = usePrefersReducedMotion();

  const goTo = (index) => {
    setActive(((index % CHAIN.length) + CHAIN.length) % CHAIN.length);
  };

  // Reruns on every active change, manual or automatic, which is what
  // restarts the countdown after a click, arrow press or swipe.
  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = setTimeout(() => {
      setActive((a) => (a + 1) % CHAIN.length);
    }, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [active, paused, reducedMotion]);

  // Keeps the mobile track's scroll snap in sync with `active`, whichever
  // triggered the change — autoplay, arrows, dots or a desktop-panel click.
  useEffect(() => {
    const track = mobileTrackRef.current;
    const card = track?.children[active];
    if (!track || !card) return;
    suppressSync.current = true;
    // Scroll only the track's own horizontal axis, not `card.scrollIntoView`
    // — that walks every scrollable ancestor including the page, so it was
    // yanking the whole viewport back here on each autoplay tick even when
    // the user had scrolled well past this section.
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.clientWidth) / 2,
      behavior: reducedMotion ? "auto" : "smooth",
    });
    const id = setTimeout(() => {
      suppressSync.current = false;
    }, 500);
    return () => clearTimeout(id);
  }, [active, reducedMotion]);

  // Picks up manual swipes on the mobile track and folds them back into
  // `active`, so a swipe resets autoplay exactly like any other navigation.
  useEffect(() => {
    const track = mobileTrackRef.current;
    if (!track) return;
    let debounce;

    const onScroll = () => {
      if (suppressSync.current) return;
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        const cards = Array.from(track.children);
        let closest = 0;
        let closestDist = Infinity;
        cards.forEach((card, i) => {
          const dist = Math.abs(
            card.offsetLeft -
              track.scrollLeft -
              (track.clientWidth - card.clientWidth) / 2,
          );
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        setActive((a) => (a === closest ? a : closest));
      }, 120);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      clearTimeout(debounce);
    };
  }, []);

  return (
    <div
      role="region"
      aria-label="Fresh produce supply chain stages"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex justify-end gap-2 mb-4 md:mb-5">
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label="Previous supply chain stage"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-bz-navy/20 text-bz-navy transition-colors duration-200 hover:bg-bz-navy/5 hover:border-bz-navy/40"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label="Next supply chain stage"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-bz-navy/20 text-bz-navy transition-colors duration-200 hover:bg-bz-navy/5 hover:border-bz-navy/40"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Desktop: editorial accordion, all six stages visible at once. */}
      <div className="hidden lg:flex gap-2 h-[480px] xl:h-[520px]">
        {CHAIN.map((stage, i) => {
          const isActive = i === active;
          return (
            <div
              key={stage}
              className="relative h-full rounded-2xl overflow-hidden bg-bz-navy transition-[flex] duration-700"
              style={{ flex: isActive ? 4 : 1, transitionTimingFunction: EASE }}
            >
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show ${stage} stage`}
                aria-current={isActive ? "true" : undefined}
                className="absolute inset-0 z-10 w-full h-full text-left"
              />
              <StageImage
                stage={stage}
                index={i}
                isActive={isActive}
                fast={reducedMotion}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <StagePanelContent
                stage={stage}
                index={i}
                active={active}
                isActive={isActive}
                onDot={goTo}
                fast={reducedMotion}
              />
            </div>
          );
        })}
      </div>

      {/* Mobile / tablet: a conventional swipeable, snapping carousel. */}
      <div
        ref={mobileTrackRef}
        className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {CHAIN.map((stage, i) => {
          const isActive = i === active;
          return (
            <div
              key={stage}
              className={`relative shrink-0 snap-center w-[85%] sm:w-[420px] h-[420px] rounded-2xl overflow-hidden bg-bz-navy transition-opacity duration-500 ${
                isActive ? "opacity-100" : "opacity-60"
              }`}
            >
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show ${stage} stage`}
                aria-current={isActive ? "true" : undefined}
                className="absolute inset-0 z-10 w-full h-full text-left"
              />
              <StageImage
                stage={stage}
                index={i}
                isActive={isActive}
                fast={reducedMotion}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <StagePanelContent
                stage={stage}
                index={i}
                active={active}
                isActive={isActive}
                onDot={goTo}
                fast={reducedMotion}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function SectionProblem() {

  return (
    <Section
      id="problem"
      surface="white"
      containerClassName="!pt-10 sm:!pt-12 md:!pt-16 lg:!pt-20"
    >
      <div className="flex flex-col">
        <Reveal>
          <div className="w-full flex flex-col md:flex-row gap-2 md:gap-8">
            <div className="max-w-2xl">
              <SectionKicker>The Problem</SectionKicker>
              <SectionHeading>
                Food supply chains were built <Accent>for distance</Accent>
              </SectionHeading>
            </div>
            <div>
              <Body className="mt-6">
                Every additional handoff between a farm and a kitchen adds
                time, handling and another dependency to manage.
              </Body>
              <Body className="mt-4">
                Fresh produce moves through harvest, processing, transport, cold
                chain and distribution before it reaches a plate. Each stage
                can add cost and time. Weather, fuel, freight capacity and
                border disruption can all affect availability, depending on
                the route and market.
              </Body>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-10 md:mt-14">
          <SupplyChainCarousel />
        </Reveal>
      </div>

    </Section>
  );
}
