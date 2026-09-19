import { ArrowRight } from "lucide-react";

import logo from "../assets/bluezone.png";
import footerImage from "../assets/footer-image.png";
import { BentoTile, Body, IconBadge, Reveal, Section } from "./primitives";

const NAV = [
  {
    heading: "Explore",
    links: [
      { label: "Why Zero-Mile", href: "#why-zero-mile" },
      { label: "Impact", href: "#impact" },
      { label: "Technology", href: "#technology" },
      { label: "BioCube", href: "#biocube" },
    ],
  },
  {
    heading: "Applications",
    links: [
      { label: "Airports and catering", href: "/applications/airline-catering" },
      { label: "Islands and remote", href: "/applications/islands" },
      { label: "Hotels and resorts", href: "/applications/hotels-resorts" },
      { label: "Foodservice", href: "/applications/foodservice" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Produce", href: "#produce" },
      { label: "Pilot programme", href: "#pilot" },
      { label: "Get in touch", href: "#get-in-touch" },
    ],
  },
];

// TODO(links): awaiting real social URLs from the client. Entries render only
// once they have an href — a social row pointing at "#" is a dead link, so the
// row stays hidden until the URLs land rather than shipping placeholders.
//
// Rendered as text pills, not brand glyphs: lucide-react v1 dropped its brand
// icons (no Linkedin/Instagram/Youtube exports), and pulling in a second icon
// library for a row that currently renders nothing is not worth the dependency.
const SOCIAL = [
  { name: "LinkedIn", href: null },
  { name: "Instagram", href: null },
  { name: "YouTube", href: null },
];

export default function SectionFooter() {
  const handleSubscribe = (event) => {
    event.preventDefault();
    // TODO(backend): no subscribe endpoint yet. Deliberately does nothing
    // rather than faking a success state — see the brief.
  };

  const social = SOCIAL.filter(({ href }) => href);

  // Full-bleed: the Section's own gutters and max-width are overridden with
  // `!` so the footer band runs edge to edge. The content inside is put back
  // on the site's normal gutter + max-w-7xl rhythm by the wrapper below the
  // photo, so only the band is full width, not the text.
  return (
    <Section
      id="footer"
      surface="white"
      className="!px-0"
      containerClassName="!max-w-none !py-0"
    >
      <Reveal>
        {/* The photo has to reach the card's edges, so the tile's own padding
            is dropped (innerClassName="p-0") and re-applied to the content
            wrapper below the image. Corners are squared off (!rounded-none)
            because the band is full-bleed — rounded corners at the viewport
            edge would read as a floating card, not a footer.

            The panel is stripped back to flat bz-navy: `noise` is off, and
            liquid-glass (hardcoded on every dark BentoTile) has its white
            sheen, inset highlight and rim pseudo-element neutralised. Those
            three together lifted #071B2B to a slate that read teal-ish, and
            they also left the panel a shade off the #071B2B the photo scrim
            fades into — so killing them makes that seam exact. */}
        <BentoTile
          dark
          className="!rounded-none overflow-hidden !bg-none !shadow-none before:!hidden"
          innerClassName="p-0"
        >
          <div className="relative">
            <img
              src={footerImage}
              alt="A BlueZone BioCube sited in open grassland at sunrise."
              className="w-full aspect-[3/1] min-h-[200px] object-cover object-[62%_center] sm:object-center"
            />
            {/* Bottom scrim: the foot of the photo is bright sunlit grass and
                the panel below is bz-navy. Multi-stop rather than a two-stop
                gradient — a straight linear fade over this much contrast
                bands visibly and still leaves a seam near the bottom. Stops
                are weighted late so the scrim stays near-clear over the top
                third and the photo does not go muddy. */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[55%] bg-[linear-gradient(to_bottom,rgba(7,27,43,0)_0%,rgba(7,27,43,0.10)_30%,rgba(7,27,43,0.38)_55%,rgba(7,27,43,0.72)_75%,rgba(7,27,43,0.92)_89%,#071B2B_100%)]"
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-10 md:py-14">
            <div className="grid lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)_minmax(0,360px)] gap-10 lg:gap-0">
              {/* Brand */}
              <div className="lg:pr-12">
                <img
                  src={logo}
                  alt="BlueZone Aeroponics"
                  width={180}
                  className="h-auto"
                />
                <Body dark className="mt-6 max-w-sm">
                  Modular aeroponic infrastructure that puts controlled
                  production next to the people eating the food.
                </Body>

                <a
                  href="mailto:contact@bluezoneaeroponics.com"
                  className="group inline-flex items-center gap-4 mt-8 text-white text-sm font-medium hover:text-bz-lime transition-colors duration-200"
                >
                  contact@bluezoneaeroponics.com
                  <IconBadge dark />
                </a>

                {social.length > 0 ? (
                  <div className="flex flex-wrap items-center gap-2 mt-8">
                    {social.map(({ name, href }) => (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`BlueZone Aeroponics on ${name}`}
                        className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-light text-white/70 hover:border-white/40 hover:text-white transition-colors duration-200"
                      >
                        {name}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* Link columns */}
              <div className="grid sm:grid-cols-3 gap-8 lg:px-12 lg:border-l lg:border-white/10">
                {NAV.map(({ heading, links }) => (
                  <div key={heading}>
                    <p className="text-bz-lime text-xs uppercase tracking-[0.18em]">
                      {heading}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {links.map(({ label, href }) => (
                        <li key={label}>
                          <a
                            href={href}
                            className="text-white/60 hover:text-white text-sm font-light transition-colors duration-200"
                          >
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Newsletter */}
              <div className="lg:pl-12 lg:border-l lg:border-white/10">
                <p className="text-bz-teal text-xs uppercase tracking-[0.18em]">
                  Stay in the loop
                </p>
                <h2 className="font-instrument-serif text-white text-2xl md:text-3xl mt-3 leading-tight">
                  Get the latest updates
                </h2>
                <Body dark className="mt-3">
                  Subscribe to our newsletter for product news, insights and
                  closer food.
                </Body>

                <form onSubmit={handleSubscribe} className="mt-6">
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      id="footer-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="Enter your email"
                      // Focus indicator is an outline, not a ring: Tailwind's
                      // ring-* utilities compile to box-shadow, which
                      // DESIGN.md forbids outright.
                      className="flex-1 min-w-0 rounded-xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 transition-colors duration-200 focus:border-bz-teal focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-bz-teal"
                    />
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2 rounded-xl bg-bz-teal px-5 py-3 text-sm font-medium text-bz-navy transition-colors duration-200 hover:bg-bz-teal/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Subscribe
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-12 pt-8 border-t border-white/10">
              <p className="text-white/40 text-xs font-light">
                &copy; {new Date().getFullYear()} BlueZone Aeroponics. All
                rights reserved.
              </p>
              {/* No privacy / terms / cookie pages exist in this repo, so the
                  reference's legal links would all be dead. Tagline stays. */}
              <p className="text-white/40 text-xs font-light">
                Sustainable food. Anywhere.
              </p>
            </div>
          </div>
        </BentoTile>
      </Reveal>
    </Section>
  );
}
