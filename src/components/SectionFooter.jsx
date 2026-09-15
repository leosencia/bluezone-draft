import logo from "../assets/bluezone.png";
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

export default function SectionFooter() {
  return (
    <Section id="footer" surface="white" containerClassName="py-10 md:py-14">
      <Reveal>
        <BentoTile dark noise innerClassName="p-8 md:p-12">
          <div className="grid lg:grid-cols-[minmax(0,320px)_1fr] gap-10 lg:gap-16">
            <div>
              <img
                src={logo}
                alt="BlueZone Aeroponics"
                width={180}
                className="h-auto"
              />
              <Body dark className="mt-6 max-w-sm">
                Modular aeroponic infrastructure that puts controlled production
                next to the people eating the food.
              </Body>

              <a
                href="mailto:contact@bluezoneaeroponics.com"
                className="group inline-flex items-center gap-4 mt-8 text-white text-sm font-medium hover:text-bz-lime transition-colors duration-200"
              >
                contact@bluezoneaeroponics.com
                <IconBadge dark />
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
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
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-12 pt-8 border-t border-white/10">
            <p className="text-white/40 text-xs font-light">
              &copy; {new Date().getFullYear()} BlueZone Aeroponics. All rights
              reserved.
            </p>
            <p className="text-white/40 text-xs font-light">
              Sustainable food. Anywhere.
            </p>
          </div>
        </BentoTile>
      </Reveal>
    </Section>
  );
}
