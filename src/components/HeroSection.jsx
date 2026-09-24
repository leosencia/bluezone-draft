import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Accent } from "./primitives";

import logo from "../assets/bluezone.png";
import "./HeroSection.css";

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
// frame stays pinned before the section releases to the next one. HOLD_VH
// must stay >= 100 (one viewport height): App.jsx overlaps the next section
// on top of this hold with a fixed -100vh margin (that's the physical scroll
// distance for a full-height section to rise from off-screen to fully
// covering — it can't be tuned smaller without breaking on the sticky
// release point). Anything past that mandatory 100vh is a pure static pause
// on the last frame before the bury starts — raise/lower it here.
const SCRUB_VH = 400;
const HOLD_VH = 145;

// Primary navigation per the Final Website Structure (16 / Navigation & Footer).
const NAV_LINKS = [
  { label: "Why Zero-Mile", href: "#why-zero-mile" },
  { label: "Impact", href: "#impact" },
  { label: "Technology", href: "#technology" },
  { label: "Microgreens", href: "#produce" },
  { label: "BioCube", href: "#biocube" },
  { label: "Applications", href: "#applications" },
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
    const scene = document.createElement("canvas");
    const sceneCtx = scene.getContext("2d");
    const desktopLayout = window.matchMedia(
      "(min-width: 1024px) and (min-aspect-ratio: 4/3)",
    );
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
      const isDesktop = desktopLayout.matches || cw / ch >= 1.5;
      // One transform for the entire sequence, including the held final frame.
      // Portrait layouts fit the whole unit below the copy instead of using a
      // viewport-height cover crop, which cuts both ends off on phones.
      const scale = isDesktop
        ? Math.max(cw / img.naturalWidth, ch / img.naturalHeight) * 1.08
        : (cw * (window.innerWidth >= 640 ? 1.7 : 1.6)) / img.naturalWidth;
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      // Keep the desktop offset within the original image's coverage. Portrait
      // frames meet the bottom edge naturally; all extra space belongs to sky.
      const x = isDesktop
        ? Math.max(cw - w, Math.min(0, cw * 0.95 - w * 0.77))
        : (cw - w) * 0.52;
      const y = isDesktop ? (ch - h) * 0.5 : ch - h;

      ctx.clearRect(0, 0, cw, ch);
      if (isDesktop) {
        ctx.drawImage(img, x, y, w, h);
      } else {
        // Continue the open sky above the landscape, with a soft join. Keeping
        // this in the renderer gives every animation frame identical framing.
        const sky = ctx.createLinearGradient(0, 0, cw, ch * 0.75);
        sky.addColorStop(0, "#045ba8");
        sky.addColorStop(0.55, "#087ec9");
        sky.addColorStop(1, "#238ed0");
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, cw, ch);

        sceneCtx.clearRect(0, 0, cw, ch);
        sceneCtx.drawImage(img, x, y, w, h);
        sceneCtx.globalCompositeOperation = "destination-in";
        // Blend only the upper sky edge; preserve the original foreground.
        const fade = sceneCtx.createLinearGradient(0, y, 0, y + h * 0.24);
        fade.addColorStop(0, "transparent");
        fade.addColorStop(1, "#fff");
        sceneCtx.fillStyle = fade;
        sceneCtx.fillRect(0, 0, cw, ch);
        sceneCtx.globalCompositeOperation = "source-over";
        ctx.drawImage(scene, 0, 0);
      }

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
      scene.width = w;
      scene.height = h;
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
        className="hero-stage sticky top-0 h-screen w-full overflow-hidden bg-bz-blue"
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
          <header className="hero-header flex items-center justify-between">
            <div className="flex items-center gap-10">
              <a
                href="/"
                className="text-white font-semibold text-lg tracking-tight font-sans"
              >
                <img src={logo} alt="BlueZone Aeroponics" width={200} className="hero-logo" />
              </a>
              <nav className="hidden xl:flex items-center gap-5">
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
              {/* <h1 className="text-white/80 hidden md:block hover:text-white text-sm font-light transition-colors duration-200 whitespace-nowrap">
                Sustainable Food.
                <br /> Anywhere
              </h1> */}
              <a
                href={CTA.href}
                className="hidden xl:inline-flex items-center bg-white text-black rounded-full px-5 py-2 text-sm font-medium hover:bg-white/90 transition-colors duration-200 whitespace-nowrap"
              >
                {CTA.label}
              </a>

              {/* Hamburger */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={isMenuOpen}
                className="hero-menu-toggle xl:hidden relative w-6 h-5 flex-shrink-0"
              >
                <span
                  style={{ transitionTimingFunction: EASE }}
                  className={`absolute left-0 top-0 h-[2px] w-6 bg-white rounded-full transition-transform duration-500 ${
                    isMenuOpen ? "translate-y-[9px] rotate-45" : ""
                  }`}
                />
                <span
                  style={{ transitionTimingFunction: EASE }}
                  className={`absolute left-0 top-1/2 -mt-[1px] h-[2px] w-6 bg-white rounded-full transition-opacity duration-500 ${
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
          <div className="hero-content flex flex-col">
            <h1 className="hero-heading font-instrument-serif text-white">
              <span className="block italic font-instrument-serif">
                <Accent dark>Zero-Mile Produce.</Accent>
              </span>
              <span className="block">Fresh Greens Grown</span>
              <span className="block">Where They’re Needed Most</span>
            </h1>

            <p className="hero-description text-white/90 font-light [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">
              Explore BlueZone Microgreens and modular aeroponic growing systems,
              bringing fresh produce closer to demand.
            </p>

            <div className="hero-actions flex items-center">
              <a
                href="#produce"
                className="group inline-flex justify-center items-center gap-3 bg-white text-black rounded-full px-7 py-3 text-sm font-medium hover:bg-white/90 transition-colors duration-200"
              >
                Explore Microgreens
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#biocube"
                className="inline-flex justify-center items-center gap-3 bg-black/40 backdrop-blur-sm border border-white/70 text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-black/55 hover:border-white/90 transition-colors duration-200"
              >
                Explore BioCube
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
            <div className="hero-header hero-menu-header flex items-center justify-between">
              <span className="text-white font-semibold text-lg tracking-tight font-sans">
                <img src={logo} alt="BlueZone Aeroponics" width={200} className="hero-logo" />
              </span>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="hero-menu-toggle relative w-6 h-5 flex-shrink-0"
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
