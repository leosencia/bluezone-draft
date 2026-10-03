import { Mail, Phone } from "lucide-react";
import logo from "../assets/bluezone-light.png";
import footerImage from "../assets/footer-image.png";
import { BentoTile, Body, IconBadge, Reveal, Section } from "./primitives";

const NAV = [
  {
    heading: "Explore",
    links: [
      { label: "Zero-Mile", href: "#premise" },
      { label: "Aeroponics", href: "#technology" },
      { label: "Food security", href: "#food-security" },
      {
        label: "Aeroponics vs hydroponics",
        href: "/aeroponics-vs-hydroponics/",
      },
      { label: "Microgreens", href: "#produce" },
      { label: "BioCube", href: "/biocube/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Pilot programme", href: "#pilot" },
      { label: "FAQs", href: "#faq" },
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

export default function SectionFooter({
  homePrefix = "",
  comparisonPage = false,
}) {
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
        <BentoTile
          dark
          noise={false}
          className="!rounded-none overflow-hidden !bg-none !shadow-none before:!hidden"
          innerClassName="p-0"
        >
          <div className="relative">
            <img
              src={footerImage}
              alt="Concept illustration of a BlueZone BioCube sited in open grassland at sunrise."
              className="w-full aspect-[3/1] min-h-[200px] object-cover object-[62%_center] sm:object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[55%] bg-[linear-gradient(to_bottom,rgba(7,27,43,0)_0%,rgba(7,27,43,0.10)_30%,rgba(7,27,43,0.38)_55%,rgba(7,27,43,0.72)_75%,rgba(7,27,43,0.92)_89%,#071B2B_100%)]"
            />
          </div>

          <div className="mx-auto max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] px-6 md:px-12 lg:px-16 py-10 md:py-14">
            <div className="grid lg:grid-cols-[minmax(440px,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-0">
              {/* Brand */}
              <div className="lg:pr-16">
                <img
                  src={logo}
                  alt="BlueZone Aeroponics"
                  width={180}
                  className="h-auto"
                />
                <Body dark className="mt-6 max-w-sm">
                  BlueZone Microgreens and modular aeroponic growing systems,
                  united by the Zero-Mile Produce idea.
                </Body>

                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:johnny@bluezoneaeroponicfarming.com"
                    className="group inline-flex max-w-full items-center gap-3 mt-8 text-white text-xs sm:text-sm font-medium break-all lg:w-max lg:max-w-none lg:whitespace-nowrap lg:break-normal hover:text-bz-lime transition-colors duration-200"
                  >
                    <Mail size={16} />
                    johnny@bluezoneaeroponicfarming.com
                    <IconBadge dark />
                  </a>

                  <a
                    href="mailto:johnny@bluezoneaeroponicfarming.com"
                    className="group inline-flex max-w-full items-center gap-3 text-white text-xs sm:text-sm font-medium break-all hover:text-bz-lime transition-colors duration-200"
                  >
                    <Phone size={16} />
                    +447792839406
                    <IconBadge dark />
                  </a>
                </div>

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
              <div className="grid sm:grid-cols-2 gap-8 lg:flex lg:justify-between lg:px-16 xl:px-20 lg:border-l lg:border-white/10">
                {NAV.map(({ heading, links }) => (
                  <div key={heading} className="lg:shrink-0">
                    <p className="text-bz-lime text-xs uppercase tracking-[0.18em]">
                      {heading}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {links.map(({ label, href, enquiry }) => (
                        <li key={label}>
                          <a
                            href={
                              href.startsWith("#")
                                ? `${homePrefix}${href}`
                                : href
                            }
                            aria-current={
                              comparisonPage &&
                              href === "/aeroponics-vs-hydroponics/"
                                ? "page"
                                : undefined
                            }
                            data-enquiry={enquiry}
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
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-12 pt-8 border-t border-white/10">
              <p className="text-white/40 text-xs font-light">
                &copy; {new Date().getFullYear()} BlueZone Aeroponics. All
                rights reserved.
              </p>
              {/* No privacy / terms / cookie pages exist in this repo, so the
                  reference's legal links would all be dead. Tagline stays. */}
              <p className="text-white/40 text-xs font-light">
                Zero-Mile Produce. Grown closer to demand.
              </p>
            </div>
          </div>
        </BentoTile>
      </Reveal>
    </Section>
  );
}
