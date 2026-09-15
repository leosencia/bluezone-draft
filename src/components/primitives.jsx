import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, ImageIcon } from "lucide-react";

// The one easing curve in the system, carried over from the hero's chrome.
export const EASE = "cubic-bezier(0.76,0,0.24,1)";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

// Reveals its children once, when they scroll into view.
export function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <div
      ref={ref}
      style={
        reduced
          ? undefined
          : { transitionTimingFunction: EASE, transitionDelay: `${delay}ms` }
      }
      className={`${
        reduced
          ? ""
          : `transition-all duration-700 ${
              shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`
      } ${className}`}
    >
      {children}
    </div>
  );
}

const SURFACES = {
  white: "bg-white",
  mist: "bg-bz-mist",
  navy: "bg-bz-navy",
  ocean: "bg-bz-ocean",
};

// Colour each surface fades to, for the soft bottom edge.
const FADE_TO = {
  white: ["rgba(255,255,255,0)", "rgba(255,255,255,0.7)", "#FFFFFF"],
  mist: ["rgba(244,247,247,0)", "rgba(244,247,247,0.7)", "#F4F7F7"],
  navy: ["rgba(7,27,43,0)", "rgba(7,27,43,0.7)", "#071B2B"],
  ocean: ["rgba(13,59,92,0)", "rgba(13,59,92,0.7)", "#0D3B5C"],
};

export function Section({
  id,
  children,
  surface = "white",
  fade = false,
  className = "",
  containerClassName = "",
}) {
  const [from, mid, to] = FADE_TO[surface];
  return (
    <section
      id={id}
      className={`relative w-full scroll-mt-4 px-6 md:px-12 lg:px-16 ${SURFACES[surface]} ${className}`}
    >
      <div
        className={`max-w-7xl mx-auto py-20 md:py-28 lg:py-32 ${containerClassName}`}
      >
        {children}
      </div>

      {fade ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-40 z-10"
          style={{
            background: `linear-gradient(to bottom, ${from} 0%, ${mid} 60%, ${to} 100%)`,
          }}
        />
      ) : null}
    </section>
  );
}

/**
 * Bento tile.
 *
 * The rim and fill come from the liquid-glass CSS rather than a border, so
 * `span` is left to the caller: pass the grid span classes for that tile
 * (e.g. "md:col-span-2 lg:row-span-2"). Tailwind only sees class names it
 * can read in source, so spans are written out literally at each call site.
 */
export function BentoTile({
  children,
  dark = false,
  noise = false,
  fill,
  span = "",
  className = "",
  innerClassName = "p-6 md:p-7",
}) {
  const surface = fill ?? (dark ? "bg-bz-navy" : "bg-white/70");
  return (
    <div
      className={`rounded-2xl h-full ${surface} ${
        dark ? "liquid-glass" : "liquid-glass-light"
      } ${noise ? "noise-overlay" : ""} ${span} ${className}`}
    >
      <div className={`relative z-10 h-full flex flex-col ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}

/**
 * Edge-faded marquee.
 *
 * The track is two identical halves and the animation travels exactly -50%,
 * so the second half lands where the first began. `repeat` sets how many
 * times the children are laid out inside each half: a short list has to be
 * repeated enough to overflow the container, otherwise the track is narrower
 * than the viewport and the loop reads as a gap rather than a cycle.
 */
export function Marquee({
  children,
  direction = "left",
  repeat = 3,
  className = "",
}) {
  const half = (
    <div className="flex shrink-0 items-center gap-3 pr-3">
      {Array.from({ length: repeat }, (_, i) => (
        <div key={i} className="flex shrink-0 items-center gap-3 pr-3">
          {children}
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] ${className}`}
    >
      <div
        className={`flex w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {half}
        <div aria-hidden="true" className="flex shrink-0">
          {half}
        </div>
      </div>
    </div>
  );
}

// Eyebrow label sitting above a SectionHeading — a dark, hard-cornered chip
// carrying the same liquid-glass + noise texture as the footer card.
export function SectionKicker({ children, onNavy = false, className = "" }) {
  return (
    <span
      className={`liquid-glass noise-overlay relative inline-block ${
        onNavy ? "bg-white/10" : "bg-bz-navy"
      } text-white text-xs font-medium uppercase tracking-[0.18em] px-4 py-1.5 mb-4 md:mb-5 ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </span>
  );
}

export function SectionHeading({ children, dark = false, className = "" }) {
  return (
    <h2
      className={`font-instrument-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] max-w-4xl ${
        dark ? "text-white" : "text-bz-navy"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

// The lowercase italic accent from the hero H1, now carrying BlueZone Blue.
export function Accent({ children, dark = false }) {
  return (
    <span
      className={`italic font-instrument-serif ${
        dark ? "text-bz-lime" : "text-bz-blue"
      }`}
    >
      {children}
    </span>
  );
}

export function Body({ children, dark = false, className = "" }) {
  return (
    <p
      className={`text-sm md:text-base font-light leading-relaxed max-w-xl ${
        dark ? "text-white/70" : "text-bz-navy/70"
      } ${className}`}
    >
      {children}
    </p>
  );
}

export function Footnote({ children, dark = false, className = "" }) {
  return (
    <p
      className={`text-xs font-light leading-relaxed ${
        dark ? "text-white/50" : "text-bz-navy/45"
      } ${className}`}
    >
      {children}
    </p>
  );
}

// Pill button with the small circular icon badge from the reference layout.
export function PrimaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 bg-bz-navy text-white rounded-full pl-6 pr-2 py-2 text-sm font-medium hover:bg-bz-ocean transition-colors duration-200 ${className}`}
    >
      {children}
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-bz-blue text-white">
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </span>
    </a>
  );
}

export function SecondaryButton({ href, children, dark = false, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 ${
        dark
          ? "border border-white/40 text-white hover:bg-white/10 hover:border-white/60"
          : "border border-bz-navy/20 text-bz-navy hover:bg-bz-navy/5 hover:border-bz-navy/40"
      } ${className}`}
    >
      {children}
    </a>
  );
}

// Circular arrow badge — the link affordance from the reference layout,
// lifted on hover by its parent `group`.
export function IconBadge({ dark = false, icon: Icon = ArrowUpRight }) {
  return (
    <span
      className={`flex items-center justify-center w-8 h-8 rounded-full border transition-transform duration-200 group-hover:-translate-y-0.5 ${
        dark ? "border-white/40 text-white" : "border-bz-navy/25 text-bz-navy"
      }`}
    >
      <Icon className="w-3.5 h-3.5" strokeWidth={2} />
    </span>
  );
}

export function Chip({
  children,
  selected = false,
  as = "span",
  className = "",
  ...rest
}) {
  const Tag = as;
  return (
    <Tag
      className={`rounded-full px-4 py-2 text-xs tracking-wide transition-colors duration-200 ${
        selected
          ? "bg-bz-navy text-white font-medium"
          : "border border-bz-navy/15 bg-white text-bz-navy/70 font-light hover:border-bz-blue/50 hover:text-bz-navy"
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Large figure in Instrument Serif, filled with the Blue → Teal gradient.
 * Plain colour is kept for anything under ~2rem, where a gradient fill
 * thins the serif strokes too far to stay legible.
 */
export function Stat({ children, dark = false, className = "" }) {
  return (
    <span
      className={`font-instrument-serif leading-none ${
        dark ? "stat-gradient-dark" : "stat-gradient"
      } ${className}`}
    >
      {children}
    </span>
  );
}

/**
 * Image-backed stat card: figure and caption sitting over a photo, in a
 * rounded frame. `offset` staggers the card down on large screens.
 * With no `image`, the fill degrades to the mist placeholder treatment.
 */
export function StatCard({
  figure,
  caption,
  image,
  imageLabel,
  offset = false,
  placement = "left-6 right-6 bottom-6",
  delay = 0,
  className = "",
}) {
  return (
    <Reveal delay={delay} className={offset ? "lg:mt-24" : ""}>
      <BentoTile
        className={`w-full h-[280px] sm:h-[340px] ${className}`}
        innerClassName="relative overflow-hidden p-0"
      >
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={image ? { backgroundImage: `url(${image})` } : undefined}
          aria-hidden="true"
        />
        {image ? (
          <div
            className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/10"
            aria-hidden="true"
          />
        ) : (
          <div className="absolute top-6 left-6 flex items-center gap-2 text-bz-navy/35">
            <ImageIcon size={18} aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.18em] font-medium">
              {imageLabel}
            </span>
          </div>
        )}

        <div className={`absolute ${placement} max-w-[66%]`}>
          <Stat className="text-[36px] sm:text-[52px]">{figure}</Stat>
          <p className="mt-3 text-bz-navy/70 text-sm font-light leading-snug">
            {caption}
          </p>
        </div>
      </BentoTile>
    </Reveal>
  );
}

/**
 * Image slot.
 *
 * To drop a real image in: put the file in src/assets, import it at the top of
 * the section file, and replace the placeholder with
 *   <img src={photo} alt="" className="w-full h-full object-cover rounded-2xl" />
 * keeping the same aspect class on the wrapper.
 */
export function ImagePlaceholder({
  label,
  hint,
  ratio = "aspect-[4/3]",
  dark = false,
  flat = false,
  className = "",
}) {
  return (
    <div
      className={`${ratio} w-full flex flex-col items-center justify-center text-center gap-2 px-6 border border-dashed ${
        // `flat` drops the rounding for placeholders nested inside a card.
        flat ? "" : "rounded-2xl"
      } ${
        dark
          ? "bg-white/[0.04] border-white/25 text-white/45"
          : "bg-bz-mist border-bz-navy/20 text-bz-navy/40"
      } ${className}`}
    >
      <ImageIcon size={22} aria-hidden="true" />
      <span className="text-xs uppercase tracking-[0.18em] font-medium">
        {label}
      </span>
      {hint ? (
        <span className="text-xs font-light max-w-[26ch] leading-relaxed">
          {hint}
        </span>
      ) : null}
    </div>
  );
}

