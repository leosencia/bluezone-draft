import { useState, useEffect } from 'react';
import { ChevronDown, Ship, Droplets, Truck, MapPin, Box, ArrowRight } from 'lucide-react';

/* ==================================================================
   PLACEHOLDERS — replace before this goes anywhere near production.
   ================================================================== */

// Carried over from the Motion-Sites prompt. This is someone else's
// CloudFront asset and will break when that bucket rotates.
// Brand kit §06 wants documented CEA footage — real facility, roots + fine
// mist, controlled lighting, composition left spacious for text overlays.
// Per-slide image direction is noted on each SLIDE below.
const HERO_VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_165750_358b1e72-c921-48b7-aaac-f200994f32fb.mp4';

// Brand kit §11: "Every statistic must have a source and date."
// I have not verified any of these figures — they came from the kit's
// carousel table without attribution. Fill in publisher + year before launch.
const SOURCE_TODO = 'Source pending — add publisher + year';

// §12 checklist: "Hero carousel ... does not autoplay too quickly."
// The Motion prompt said 4s; 7s gives the five-part argument room to land.
const AUTOPLAY_MS = 7000;

/* ==================================================================
   The five-part hero narrative — brand kit §05, verbatim.
   ================================================================== */

const SLIDES = [
  {
    num: '01',
    tab: 'Import',
    icon: Ship,
    label: 'The Import Problem',
    variant: 'stat',
    stat: '80%+',
    statBody: 'of food is imported.',
    bar: 80,
    resolve: 'Why should fresh food travel so far?',
    evidence: 'D · Industry data',
    accent: 'blue',
    // §06 image language 01: island + port + supply route
  },
  {
    num: '02',
    tab: 'Water',
    icon: Droplets,
    label: 'The Water Pressure',
    variant: 'stat',
    stat: '72%',
    statBody: 'of global freshwater withdrawals go to agriculture.',
    bar: 72,
    resolve: 'We need to grow more with less.',
    evidence: 'D · Industry data',
    accent: 'blue',
    // §06 image language 02: roots + fine mist + controlled lighting
  },
  {
    num: '03',
    tab: 'Distance',
    icon: Truck,
    label: 'The Distance Problem',
    variant: 'stat',
    stat: '25.4%',
    statBody: 'of fruits & vegetables are lost before retail.',
    bar: 25.4,
    resolve: 'What if the farm was closer to the kitchen?',
    evidence: 'D · Industry data',
    accent: 'blue',
    // §06 image language 03: produce logistics / road / cold chain
  },
  {
    num: '04',
    tab: 'Demand',
    icon: MapPin,
    label: 'The Opportunity',
    variant: 'chips',
    statement: "The farm doesn't have to be far away.",
    chips: ['Airports', 'Islands', 'Hotels & Resorts', 'Foodservice'],
    resolve: 'It can be where the demand is.',
    accent: 'teal',
    // §06 image language 04: airport, resort, island or institutional demand environment
  },
  {
    num: '05',
    tab: 'Zero-Mile',
    icon: Box,
    label: 'The Solution',
    variant: 'journey',
    statement: 'Zero-Mile Production.',
    journey: ['Explore', 'Discuss', 'Pilot', 'Measure', 'Scale'],
    resolve: 'Grow closer. Control more.',
    // §03: "Green may appear as a very subtle terminal accent." This is the
    // only slide that uses it — the last beat of the argument.
    accent: 'field',
    // §06 image language 05: real BioCube / vertical aeroponic facility
  },
];

// Static class strings — Tailwind cannot see dynamically built names.
const ACCENT = {
  blue: { bar: 'bg-brand-blue', rule: 'bg-brand-blue', icon: 'text-brand-blue' },
  teal: { bar: 'bg-brand-teal', rule: 'bg-brand-teal', icon: 'text-brand-teal' },
  field: { bar: 'bg-brand-field', rule: 'bg-brand-field', icon: 'text-brand-field' },
};

const NAV_LINKS = [
  { label: 'Solutions', chevron: true },
  { label: 'Sectors', chevron: true },
  { label: 'Technology', chevron: false },
  { label: 'Evidence', chevron: false },
];

// §10 — the environments the identity has to work across. These are sectors
// BlueZone is built for, NOT a client list. Do not restyle this row to read
// as logos or endorsements unless the client supplies real, permissioned ones.
const SECTORS = [
  'Airports',
  'Islands & Remote',
  'Hotels & Resorts',
  'Foodservice',
  'Government',
  'Commercial Growers',
];

export default function BlueZoneHero() {
  const [active, setActive] = useState(0);

  // setTimeout keyed on `active` rather than a bare setInterval: clicking a
  // tab restarts the dwell instead of being yanked forward a moment later.
  useEffect(() => {
    const t = setTimeout(() => setActive((i) => (i + 1) % SLIDES.length), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [active]);

  const slide = SLIDES[active];
  const accent = ACCENT[slide.accent];

  return (
    <div className="bg-white min-h-screen">
      {/* ============================= NAVIGATION ============================= */}
      <nav
        className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto animate-fade-in-up"
        style={{ opacity: 0, animationDelay: '0.1s' }}
      >
        <div className="flex items-center gap-2.5">
          {/* LOGO PLACEHOLDER.
              Brand kit §11: "Never recreate the logo from a screenshot or type
              it manually." The B/Z symbol is the client's vector asset — this
              is a neutral gradient block holding its position and clear space.
              Drop the master SVG in here. */}
          <div
            className="w-7 h-7 rounded-md bg-gradient-to-br from-brand-navy via-brand-ocean to-brand-blue"
            aria-hidden="true"
          />
          <span className="text-lg font-semibold text-brand-navy">
            BLUEZONE
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              className="flex items-center gap-1 text-sm text-brand-navy/70 hover:text-brand-navy transition-colors"
            >
              {link.label}
              {link.chevron && <ChevronDown className="w-4 h-4" strokeWidth={1.75} />}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <a
            href="#contact"
            className="hidden sm:inline text-sm text-brand-navy/70 hover:text-brand-navy transition-colors"
          >
            Contact
          </a>
          {/* §08 commercial button: Navy / white text.
              rounded-md, not rounded-full — §05 says avoid "app UI" pill shapes. */}
          <button className="bg-brand-navy text-white px-4 sm:px-5 py-2.5 rounded-md text-sm font-medium whitespace-nowrap hover:bg-brand-ocean transition-colors">
            Discuss a Pilot
          </button>
        </div>
      </nav>

      {/* ============================== HERO ============================== */}
      <section className="px-6 pt-24 pb-32 max-w-7xl mx-auto text-center">
        {/* --- Eyebrow (was the Motion-Sites reviews badge) --- */}
        {/* The original slot held "4.9 rating from 18.3K+ users". Inventing a
            rating would break §11 claims governance outright, so the component
            keeps its exact shape and carries the brand descriptor instead. */}
        <div
          className="inline-flex items-center gap-2.5 mb-8 animate-fade-in-up"
          style={{ opacity: 0, animationDelay: '0.2s' }}
        >
          <span className="w-6 h-6 border border-brand-navy/20 rounded flex items-center justify-center">
            <Box className="w-3.5 h-3.5 text-brand-blue" strokeWidth={1.75} />
          </span>
          <span className="text-sm font-medium text-brand-navy">
            {/* Descriptor drops below sm so the eyebrow stays on one line */}
            <span className="hidden sm:inline">Aeroponics Farming · </span>
            Zero-Mile Production
          </span>
        </div>

        {/* --- Main heading --- */}
        {/* Type scale, weight and case are the Motion-Sites prompt's, unchanged.
            Only the gradient is the brand kit's: Midnight Navy → Deep Ocean →
            BlueZone Blue, replacing black → gray-500 → gray-400. */}
        <h1
          className="text-6xl md:text-7xl lg:text-[80px] font-normal leading-[1.1] tracking-tight mb-5 text-brand-navy animate-fade-in-up"
          style={{ opacity: 0, animationDelay: '0.3s' }}
        >
          <span className="block">Grow Closer.</span>
          <span className="block bg-gradient-to-r from-brand-navy via-brand-ocean to-brand-blue bg-clip-text text-transparent">
            Control More.
          </span>
        </h1>

        {/* --- Subheading --- */}
        <p
          className="text-lg md:text-xl text-brand-navy/70 mb-8 max-w-2xl mx-auto animate-fade-in-up"
          style={{ opacity: 0, animationDelay: '0.4s' }}
        >
          BlueZone builds modular aeroponic infrastructure that puts controlled production
          closer to where fresh food is actually needed.
        </p>

        {/* --- CTAs --- */}
        {/* §08 defines a primary and a secondary; the Motion prompt had one
            button. Both are here because the kit pairs them. */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 animate-fade-in-up"
          style={{ opacity: 0, animationDelay: '0.5s' }}
        >
          <button className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-3 rounded-md text-base font-medium hover:bg-brand-ocean transition-colors">
            Explore a Zero-Mile Project
            <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
          </button>
          <button className="inline-flex items-center gap-2 border border-brand-navy/20 text-brand-navy px-8 py-3 rounded-md text-base font-medium hover:border-brand-navy/40 transition-colors">
            See How It Works
            <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
          </button>
        </div>

        {/* --- Tab bar --- */}
        <div
          className="flex justify-center mb-8 animate-fade-in-up"
          style={{ opacity: 0, animationDelay: '0.6s' }}
        >
          <div className="bg-brand-mist rounded-lg p-1 w-full max-w-md md:w-auto md:max-w-none">
            {/* Mobile: 2×2 grid with the solution spanning the full width —
                keeps the Motion layout while giving slide 05 its own weight. */}
            <div className="grid grid-cols-2 gap-1 md:hidden">
              {SLIDES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <button
                    key={s.num}
                    onClick={() => setActive(i)}
                    className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      i === 4 ? 'col-span-2' : ''
                    } ${
                      active === i
                        ? 'bg-white text-brand-navy shadow-sm'
                        : 'text-brand-navy/60 hover:text-brand-navy'
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${active === i ? ACCENT[s.accent].icon : ''}`}
                      strokeWidth={1.75}
                    />
                    {s.tab}
                  </button>
                );
              })}
            </div>

            {/* Desktop: single row with 1px dividers. */}
            <div className="hidden md:flex items-center">
              {SLIDES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.num} className="flex items-center">
                    <button
                      onClick={() => setActive(i)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-colors ${
                        active === i
                          ? 'bg-white text-brand-navy shadow-sm'
                          : 'text-brand-navy/60 hover:text-brand-navy'
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 ${active === i ? ACCENT[s.accent].icon : ''}`}
                        strokeWidth={1.75}
                      />
                      {s.tab}
                    </button>
                    {i < SLIDES.length - 1 && (
                      <span className="w-px h-5 bg-brand-navy/10" aria-hidden="true" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- Video + narrative overlay --- */}
        {/* Gradient sits under the video so a slow or failed load degrades to
            brand navy rather than browser grey. */}
        <div
          className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px] bg-gradient-to-br from-brand-navy via-brand-ocean to-brand-navy animate-fade-in-up"
          style={{ opacity: 0, animationDelay: '0.7s' }}
        >
          <video
            src={HERO_VIDEO_SRC}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* key={active} remounts the overlay so the fade replays per slide */}
          <div
            key={`scrim-${active}`}
            className="absolute inset-0 bg-brand-navy/50 animate-fade-in-overlay"
            style={{ opacity: 0 }}
            aria-hidden="true"
          />

          <div
            key={`card-${active}`}
            className="absolute left-1/2 top-1/2 w-[88%] max-w-md text-left animate-slide-up-overlay"
            style={{ opacity: 0 }}
          >
            <div className="bg-white rounded-2xl overflow-hidden border border-brand-navy/10">
              {/* Accent rule — §07: one accent colour per family */}
              <div className={`h-[3px] w-full ${accent.rule}`} aria-hidden="true" />

              <div className="p-5 sm:p-6">
                {/* Label row */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-navy/50">
                    {slide.num} / {slide.label}
                  </span>
                  {slide.evidence && (
                    <span className="shrink-0 whitespace-nowrap text-[10px] font-semibold uppercase tracking-wide text-brand-navy/60 border border-brand-navy/15 rounded px-1.5 py-0.5">
                      {slide.evidence}
                    </span>
                  )}
                </div>

                {/* Statement */}
                {slide.variant === 'stat' ? (
                  <>
                    {/* Big figure stays Midnight Navy — §03 forbids pale teal
                        or green as text on white. Accent lives in the bar. */}
                    <div className="font-semibold text-5xl leading-none text-brand-navy mb-2">
                      {slide.stat}
                    </div>
                    <p className="text-sm leading-relaxed text-brand-navy/70 mb-4">
                      {slide.statBody}
                    </p>
                    <div
                      className="h-1.5 w-full bg-brand-navy/10 rounded-full overflow-hidden"
                      role="img"
                      aria-label={`${slide.stat} ${slide.statBody}`}
                    >
                      <div
                        className={`h-full rounded-full ${accent.bar}`}
                        style={{ width: `${slide.bar}%` }}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <p className="font-semibold text-2xl leading-[1.2] text-brand-navy mb-5">
                      {slide.statement}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {(slide.chips ?? slide.journey).map((item) => (
                        <span
                          key={item}
                          className="text-[11px] font-semibold uppercase tracking-wide text-brand-navy/70 border border-brand-navy/15 rounded px-2 py-1"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {/* Divider + resolution line */}
                <div className="h-px w-full bg-brand-navy/10 my-5" aria-hidden="true" />
                <p className="text-[15px] font-medium text-brand-navy">
                  {slide.resolve}
                </p>

                {slide.evidence && (
                  <p className="mt-3 text-[10px] uppercase tracking-wide text-brand-navy/40">
                    {SOURCE_TODO}
                  </p>
                )}

                {/* §12: primary CTA points at a qualified commercial conversation */}
                {slide.variant === 'journey' && (
                  <button className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-brand-navy text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-brand-ocean transition-colors">
                    Discuss a Pilot
                    <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* --- Sector row --- */}
        {/* Occupies the Motion-Sites company-logo slot. See SECTORS above:
            these are target environments, not clients. */}
        <div
          className="mt-24 animate-fade-in-up"
          style={{ opacity: 0, animationDelay: '0.8s' }}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-navy/40 mb-6">
            Built around where food is needed
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {SECTORS.map((sector) => (
              <span
                key={sector}
                className="font-semibold text-sm uppercase tracking-wide text-brand-navy/40"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
