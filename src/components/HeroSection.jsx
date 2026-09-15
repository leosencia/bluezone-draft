import { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";

import heroJpg from "../assets/hero-biocube.jpg";
import heroWebp from "../assets/hero-biocube.webp";
import logo from "../assets/bluezone.png";

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
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <picture>
        <source srcSet={heroWebp} type="image/webp" />
        <img
          src={heroJpg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[70%_58%] sm:object-center"
        />
      </picture>

      {/* Content layer */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <header className="flex items-center justify-between px-6 md:px-12 lg:px-16 pb-5">
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
    </section>
  );
}
