import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";

import logo from "../assets/bluezone.png";

// Frame sequence for the scroll-scrubbed hero background, in file order.
const FRAME_MODULES = import.meta.glob("../assets/hero-video-frames/*.png", {
  eager: true,
  import: "default",
});
const FRAMES = Object.keys(FRAME_MODULES)
  .sort()
  .map((key) => FRAME_MODULES[key]);
const TOTAL_FRAMES = FRAMES.length;

// Scroll distance spent scrubbing the sequence, then a hold where the last
// frame stays pinned before the section releases to the next one.
const SCRUB_VH = 400;
const HOLD_VH = 100;

// Primary navigation per the Final Website Structure (16 / Navigation & Footer).
const NAV_LINKS = [
  { label: "Why Zero-Mile", href: "#why-zero-mile" },
  { label: "Impact", href: "#impact" },
  { label: "Technology", href: "#technology" },
  { label: "BioCube", href: "#biocube" },
  { label: "Applications", href: "#applications" },
  { label: "Produce", href: "#produce" },
  { label: "About", href: "#about" },
];

// Persistent CTA — specific, never "Contact Us".
const CTA = { label: "Get in Touch", href: "#get-in-touch" };

const EASE = "cubic-bezier(0.76,0,0.24,1)";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Once the staggered entrance has finished, drop the transition delays so
  // hover states on the menu links respond immediately.
  const [hasEntered, setHasEntered] = useState(false);

  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);
  const canvasRef = useRef(null);

  // Sticky positioning does the pinning; this maps scroll progress through
  // the tall wrapper to a frame and paints it. Canvas rather than swapping an
  // <img src>: mobile browsers paint nothing while the next image decodes, so
  // an <img> flashes blank on every step, while a canvas holds the last frame.
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const images = FRAMES.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    let painted = -1;
    let wanted = 0;

    const paint = (index) => {
      const img = images[index];
      if (!img.naturalWidth) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      // Mirrors the old object-position: 70% 58% on phones, centred above sm.
      const focusX = window.innerWidth >= 640 ? 0.5 : 0.7;
      const focusY = window.innerWidth >= 640 ? 0.5 : 0.58;

      ctx.drawImage(img, (cw - w) * focusX, (ch - h) * focusY, w, h);
      painted = index;
    };

    const show = (index) => {
      wanted = index;
      const img = images[index];
      if (img.complete) {
        paint(index);
        return;
      }
      img.addEventListener(
        "load",
        () => {
          if (wanted === index) paint(index);
        },
        { once: true },
      );
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round(stickyRef.current.clientWidth * dpr);
      const h = Math.round(stickyRef.current.clientHeight * dpr);
      // Mobile fires resize every time the browser chrome slides; bail unless
      // the size really changed, since assigning width/height clears the canvas.
      if (canvas.width === w && canvas.height === h) return;

      canvas.width = w;
      canvas.height = h;
      painted = -1;
      show(wanted);
    };

    let ticking = false;

    const update = () => {
      ticking = false;
      const wrapper = wrapperRef.current;
      const sticky = stickyRef.current;
      if (!wrapper || !sticky) return;

      // Sticky pins for exactly (wrapper height - sticky height). Both are
      // measured, because on mobile 100vh and the visible viewport height are
      // different numbers and assuming they match skews the whole range.
      const stickyHeight = sticky.offsetHeight;
      const hold = stickyHeight * (HOLD_VH / 100);
      const scrubbable = wrapper.offsetHeight - stickyHeight - hold;
      const progress =
        scrubbable > 0
          ? Math.min(
              1,
              Math.max(0, -wrapper.getBoundingClientRect().top / scrubbable),
            )
          : 0;

      const index = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(progress * TOTAL_FRAMES),
      );
      if (index !== painted) show(index);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    resize();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      setHasEntered(false);
      return;
    }
    const total = 150 + (NAV_LINKS.length - 1) * 80 + 700;
    const id = setTimeout(() => setHasEntered(true), total);
    return () => clearTimeout(id);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative w-full"
      style={{ height: `${SCRUB_VH + HOLD_VH}vh` }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden bg-bz-navy"
      >
        {/* Background frame */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full"
        />

        {/* Content layer */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Navbar */}
          <header className="flex items-center justify-between px-6 md:px-12 lg:px-16">
            <div className="flex items-center gap-10">
              <a
                href="/"
                className="text-white font-semibold text-lg tracking-tight font-sans"
              >
                <img src={logo} alt="BlueZone Aeroponics" width={200} />
              </a>
              <nav className="hidden xl:flex items-center gap-8">
                {NAV_LINKS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-white/80 hover:text-white text-sm font-light transition-colors duration-200 whitespace-nowrap"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-6">
              <h1 className="text-white/80 hidden md:block hover:text-white text-sm font-light transition-colors duration-200 whitespace-nowrap">
                Sustainable Food. Anywhere
              </h1>
              <a
                href={CTA.href}
                className="hidden md:inline-flex items-center bg-white text-black rounded-full px-5 py-2 text-sm font-medium hover:bg-white/90 transition-colors duration-200 whitespace-nowrap"
              >
                {CTA.label}
              </a>

              {/* Hamburger */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={isMenuOpen}
                className="xl:hidden relative w-6 h-5 flex-shrink-0"
              >
                <span
                  style={{ transitionTimingFunction: EASE }}
                  className={`absolute left-0 top-0 h-[2px] w-6 bg-white rounded-full transition-transform duration-500 ${
                    isMenuOpen ? "translate-y-[9px] rotate-45" : ""
                  }`}
                />
                <span
                  style={{ transitionTimingFunction: EASE }}
                  className={`absolute left-0 top-1/2 -mt-[1px] h-[2px] w-4 bg-white rounded-full transition-opacity duration-500 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  style={{ transitionTimingFunction: EASE }}
                  className={`absolute left-0 bottom-0 h-[2px] w-6 bg-white rounded-full transition-transform duration-500 ${
                    isMenuOpen ? "-translate-y-[9px] -rotate-45" : ""
                  }`}
                />
              </button>
            </div>
          </header>

          {/* Hero content */}
          <div className="flex-1 flex flex-col items-center justify-start px-6 text-center">
            <h1 className="font-instrument-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] max-w-5xl">
              <span className="italic font-instrument-serif">
                Zero Mile Produce.
              </span>
              <br />
              Fresh Greens Grown <br /> Where They're Needed Most
            </h1>

            <p className="mt-4 md:mt-5 text-white/70 text-sm md:text-base font-light max-w-md leading-relaxed">
              BlueZone Aeroponics brings modular, water-efficient vertical farms
              to islands, remote communities, and beyond
            </p>

            <div className="mt-5 md:mt-6 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={CTA.href}
                className="group inline-flex items-center gap-2 bg-white text-black rounded-full px-7 py-3 text-sm font-medium hover:bg-white/90 transition-colors duration-200"
              >
                {CTA.label}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#why-zero-mile"
                className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/40 text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-black/55 hover:border-white/60 transition-colors duration-200"
              >
                <Play size={16} />
                Explore Zero-Mile
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`fixed inset-0 z-50 ${
            isMenuOpen ? "visible" : "invisible delay-700"
          } xl:hidden`}
        >
          <div
            style={{ transitionTimingFunction: EASE }}
            className={`absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity duration-700 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          <div
            style={{ transitionTimingFunction: EASE }}
            className={`relative h-full flex flex-col transition-opacity duration-700 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Overlay header */}
            <div className="flex items-center justify-between px-6 md:px-12 pb-5">
              <span className="text-white font-semibold text-lg tracking-tight font-sans">
                <img src={logo} alt="BlueZone Aeroponics" width={200} />
              </span>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="relative w-6 h-5 flex-shrink-0"
              >
                <span
                  style={{ transitionTimingFunction: EASE }}
                  className={`absolute left-0 top-1/2 -mt-[1px] h-[2px] w-6 bg-white rounded-full transition-transform duration-500 ${
                    isMenuOpen ? "rotate-45" : "rotate-0"
                  }`}
                />
                <span
                  style={{ transitionTimingFunction: EASE }}
                  className={`absolute left-0 top-1/2 -mt-[1px] h-[2px] w-6 bg-white rounded-full transition-transform duration-500 ${
                    isMenuOpen ? "-rotate-45" : "rotate-0"
                  }`}
                />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 flex flex-col justify-center px-6 md:px-12 overflow-y-auto">
              {NAV_LINKS.map(({ label, href }, i) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    transitionTimingFunction: EASE,
                    transitionDelay:
                      isMenuOpen && !hasEntered ? `${150 + i * 80}ms` : "0ms",
                  }}
                  className={`block w-full border-b border-white/10 py-3 sm:py-4 text-white text-4xl sm:text-5xl font-instrument-serif transition-all duration-700 hover:pl-4 ${
                    isMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Footer */}
            <div className="px-6 md:px-12 pt-6 pb-10">
              <a
                href={CTA.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  transitionTimingFunction: EASE,
                  transitionDelay: isMenuOpen && !hasEntered ? "550ms" : "0ms",
                }}
                className={`block w-full text-center bg-white text-black rounded-full py-4 text-sm font-medium transition-all duration-700 ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {CTA.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
