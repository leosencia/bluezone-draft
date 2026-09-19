import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Truck,
  Wind,
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
  SourceLink,
  Stat,
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

const PRESSURES = [
  {
    icon: Truck,
    figure: "25.4%",
    summary: "of fruits and vegetables are lost before reaching retail.",
    title: "Long supply chains",
    body: "A quarter of the world's fruit and vegetables are lost between harvest and the retail shelf. The longer the chain, the more of the crop never arrives.",
    source: "FAO, SDG indicator 12.3.1a, 2023 data",
    sourceUrl:
      "https://www.fao.org/sustainable-development-goals-data-portal/data/indicators/1231-global-food-losses/en/",
  },
  {
    icon: Droplets,
    figure: "~70%",
    summary: "of global freshwater withdrawals are from agriculture.",
    title: "Water",
    body: "Agriculture accounts for roughly 70% of global freshwater withdrawals, and renewable water available per person has fallen 7% in a decade.",
    source: "FAO AQUASTAT",
    sourceUrl: "https://www.fao.org/aquastat/en/",
  },
  {
    icon: Wind,
    figure: "19%",
    summary: "of food-system greenhouse gas emissions come from transport.",
    title: "Transport",
    body: "Moving food generates about 19% of food-system greenhouse gas emissions, roughly 3 billion tonnes of CO₂e a year. Fruit and vegetables are over a third of that, because they travel refrigerated.",
    source: "Li et al., Nature Food, 2022",
    sourceUrl: "https://www.nature.com/articles/s43016-022-00531-w",
  },
];

function EvidenceTile({ pressure, isExpanded, onToggle, fast }) {
  const { icon: Icon, figure, summary, title, body, sourceUrl } = pressure;
  const duration = fast ? "duration-150" : "duration-400";

  return (
    <div
      className={`group relative rounded-2xl border bg-white overflow-hidden transition-colors duration-300 ${
        isExpanded
          ? "border-bz-navy/15"
          : "border-bz-navy/10 hover:border-bz-navy/20"
      }`}
    >
      {/* The toggle covers the tile but sits behind the content rather than
          wrapping it: the expanded body now carries a source link, and an
          <a> inside a <button> is invalid and unreachable by keyboard. The
          content layer is pointer-events-none so clicks still fall through
          to this button everywhere except the link itself. */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-label={`${figure} — ${title}`}
        className="absolute inset-0 z-0 w-full h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bz-blue/40"
      />

      <div className="relative z-10 flex items-start gap-4 p-4 md:p-5 pointer-events-none">
        <span className="shrink-0 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-bz-blue/10 mt-0.5">
          <Icon size={18} className="text-bz-blue" aria-hidden="true" />
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-3">
            <Stat
              className={`shrink-0 transition-all ${duration} ${
                isExpanded ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl"
              }`}
            >
              {figure}
            </Stat>
            <p
              className={`text-bz-navy/55 text-xs md:text-sm font-light leading-snug pt-1 transition-all ${duration} overflow-hidden ${
                isExpanded ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
              }`}
            >
              {summary}
            </p>
          </div>

          <div
            className={`grid transition-[grid-template-rows,margin-top] ${duration} ${
              isExpanded ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr] mt-0"
            }`}
          >
            <div
              // Collapsed, this content is clipped to zero height but still
              // in the DOM — inert keeps the source link out of the tab
              // order until the tile is actually open.
              inert={!isExpanded}
              className={`overflow-hidden transition-opacity ${duration} ${
                isExpanded ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-bz-navy text-base font-sans font-medium">
                {title}
              </h3>
              <Body className="mt-2 max-w-none">{body}</Body>
              <div className="mt-4 pointer-events-auto">
                <SourceLink href={sourceUrl} />
              </div>
            </div>
          </div>
        </div>

        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`shrink-0 mt-2 text-bz-navy/40 transition-transform ${duration} ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>
    </div>
  );
}

export default function SectionProblem() {
  const [expandedEvidence, setExpandedEvidence] = useState(null);
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Section id="problem" surface="white">
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
                Every mile between a farm and a kitchen is a mile where
                freshness, margin and certainty are lost.
              </Body>
              <Body className="mt-4">
                Fresh produce moves through harvest, processing, transport, cold
                chain and distribution before it reaches a plate. Each stage
                adds cost, time and a point of failure. The model works until
                weather, fuel, freight capacity or a border interrupts it, and
                then it does not work at all.
              </Body>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-10 md:mt-14">
          <SupplyChainCarousel />
        </Reveal>
      </div>

      {/* Evidence strip: compact by default, one tile expands on click. */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-3 md:gap-4 mt-6 md:mt-8">
        {PRESSURES.map((pressure, i) => (
          <Reveal key={pressure.title} delay={i * 80}>
            <EvidenceTile
              pressure={pressure}
              isExpanded={expandedEvidence === i}
              fast={reducedMotion}
              onToggle={() =>
                setExpandedEvidence((current) => (current === i ? null : i))
              }
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
