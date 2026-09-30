import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import logo from "../assets/bluezone.png";
import brandMark from "../assets/blue-zone-logo-light.png";
import "./HeroSection.css";

// Primary navigation per the Final Website Structure (16 / Navigation & Footer).
const NAV_LINKS = [
  { label: "Why Zero-Mile", href: "#why-zero-mile" },
  { label: "Technology", href: "#technology" },
  { label: "Microgreens", href: "#produce" },
  { label: "BioCube", href: "#biocube" },
];

// Persistent CTA — specific, never "Contact Us".
const CTA = { label: "Get in Touch", href: "#get-in-touch" };


const EASE = "cubic-bezier(0.76,0,0.24,1)";

export default function SiteNavigation({
  links = NAV_LINKS,
  cta = CTA,
  floatingCtaLabel = "Contact",
  floatingBoundaryId = "premise",
  floatingAfterHeader = false,
  headerClassName = "",
}) {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isFloatingNavVisible, setIsFloatingNavVisible] = useState(false);
  // Once the staggered entrance has finished, drop the transition delays so
  // hover states on the menu links respond immediately.
  const [hasEntered, setHasEntered] = useState(false);

  // The premise section rises over the sticky hero. Its top reaching the top
  // of the viewport is the exact moment the hero has been fully covered.
  // From there, the compact navigation follows scroll intent: it exits upward
  // while the visitor continues down and returns as soon as they scroll up.
  useEffect(() => {
    let ticking = false;
    let lastY = window.scrollY;
    let coverY = Number.POSITIVE_INFINITY;
    let wasPastHero = false;

    const update = () => {
      ticking = false;

      const boundary = floatingAfterHeader
        ? headerRef.current
        : document.getElementById(floatingBoundaryId);
      if (!boundary) return;

      const currentY = window.scrollY;
      const bounds = boundary.getBoundingClientRect();
      const pastHero = floatingAfterHeader ? bounds.bottom <= 0 : bounds.top <= 1;
      const delta = currentY - lastY;

      if (!pastHero) {
        coverY = Number.POSITIVE_INFINITY;
        setIsPastHero(false);
        setIsFloatingNavVisible(false);
      } else if (!wasPastHero) {
        // Let the visitor see the hero navigation resolve into its compact
        // state before normal direction-based hiding takes over.
        coverY = currentY;
        setIsPastHero(true);
        setIsFloatingNavVisible(true);
      } else {
        setIsPastHero(true);
        if (delta < -1) {
          setIsFloatingNavVisible(true);
        } else if (delta > 1 && currentY > coverY + 72) {
          setIsFloatingNavVisible(false);
        }
      }

      wasPastHero = pastHero;
      lastY = currentY;
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [floatingBoundaryId, floatingAfterHeader]);

  useEffect(() => {
    if (!isMenuOpen) {
      setHasEntered(false);
      return;
    }
    const total = 150 + (links.length - 1) * 80 + 700;
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
    <>
<header ref={headerRef} className={`hero-header flex items-center justify-between ${headerClassName}`}>
            <div className="flex items-center gap-10">
              <a
                href="/"
                className="text-white font-semibold text-lg tracking-tight font-sans"
              >
                <img
                  src={logo}
                  alt="BlueZone Aeroponics"
                  width={200}
                  className="hero-logo"
                />
              </a>
              <nav className="hidden xl:flex items-center gap-5">
                {links.map(({ label, href }) => (
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
                href={cta.href}
                className="hidden xl:inline-flex items-center bg-white text-black rounded-full px-5 py-2 text-sm font-medium hover:bg-white/90 transition-colors duration-200 whitespace-nowrap"
              >
                {cta.label}
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
{createPortal(
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
                  <img
                    src={logo}
                    alt="BlueZone Aeroponics"
                    width={200}
                    className="hero-logo"
                  />
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
                {links.map(({ label, href }, i) => (
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
                  href={cta.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    transitionTimingFunction: EASE,
                    transitionDelay:
                      isMenuOpen && !hasEntered ? "550ms" : "0ms",
                  }}
                  className={`block w-full text-center bg-white text-black rounded-full py-4 text-sm font-medium transition-all duration-700 ${
                    isMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {cta.label}
                </a>
              </div>
            </div>
          </div>,
          document.body,
        )}
      {createPortal(
<div
        aria-hidden={!isPastHero || !isFloatingNavVisible}
        style={{
          transitionTimingFunction: EASE,
          top: "calc(clamp(88px, 12vh, 128px) / 2 - 24px)",
          paddingInline: "max(12px, calc(clamp(24px, 5.7vw, 112px) - 12px))",
        }}
        className={`floating-nav fixed inset-x-0 z-40 flex justify-end transition-[transform,opacity] duration-500 motion-reduce:transition-none xl:justify-center ${
          isPastHero && isFloatingNavVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-[calc(100%+2rem)] opacity-0"
        }`}
      >
        <div className="hidden items-center gap-2 xl:flex">
          <a
            href="/"
            aria-label="BlueZone home"
            tabIndex={isPastHero && isFloatingNavVisible ? undefined : -1}
            className="flex size-12 items-center justify-center rounded-full border border-bz-navy/5 bg-bz-mist/95 backdrop-blur-md transition-colors duration-200 hover:bg-white"
          >
            <img
              src={brandMark}
              alt=""
              aria-hidden="true"
              className="size-6 object-contain"
            />
          </a>

          <nav
            aria-label="Floating navigation"
            className="flex items-center rounded-2xl border border-bz-navy/5 bg-bz-mist/95 p-1.5 backdrop-blur-md"
          >
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                tabIndex={isPastHero && isFloatingNavVisible ? undefined : -1}
                className="rounded-xl px-4 py-2.5 text-sm font-light text-bz-navy/75 transition-colors duration-200 hover:text-bz-teal"
              >
                {label}
              </a>
            ))}
            <a
              href={cta.href}
              tabIndex={isPastHero && isFloatingNavVisible ? undefined : -1}
              className="rounded-xl px-4 py-2.5 text-sm font-light text-bz-mist transition-colors duration-200 bg-bz-teal hover:bg-bz-navy hover:text-bz-mist"
            >
              {floatingCtaLabel}
            </a>
          </nav>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          tabIndex={isPastHero && isFloatingNavVisible ? undefined : -1}
          className="floating-menu-toggle relative flex size-12 items-center justify-center rounded-full border border-bz-navy/5 bg-bz-mist/95 backdrop-blur-md xl:hidden"
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span className="absolute left-0 top-0 h-[2px] w-5 rounded-full bg-bz-navy" />
            <span className="absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-bz-navy" />
            <span className="absolute bottom-0 left-0 h-[2px] w-5 rounded-full bg-bz-navy" />
          </span>
        </button>
      </div>,
        document.body,
      )}
    </>
  );
}
