import { Minus, Plus } from "lucide-react";
import SiteNavigation from "../components/SiteNavigation";
import {
  Accent,
  Body,
  Footnote,
  ImagePlaceholder,
  PrimaryButton,
  Reveal,
  SecondaryButton,
  Section,
  SectionHeading,
  SectionKicker,
} from "../components/primitives";
import SectionFooter from "../components/SectionFooter";
import { COMPARISON_ROWS, FAQS } from "../content/comparison";
import container from "../assets/container.png";
import aero from "../assets/aero.png";
import hydro from "../assets/hydro.png";

const ENQUIRY = "/?enquiry=systems#get-in-touch";
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "BioCube", href: "/#biocube" },
];
const NAV_CTA = { label: "Get in touch", href: ENQUIRY };

export default function ComparisonPage() {
  return (
    <>
      <div className="noise-overlay bg-bz-navy">
        <SiteNavigation
          links={NAV_LINKS}
          cta={NAV_CTA}
          floatingCtaLabel="Get in touch"
          floatingAfterHeader
          headerClassName="!relative z-10"
        />
      </div>
      <main id="comparison-main">
        <Section surface="mist">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <Reveal className="lg:col-span-5">
              <SectionKicker>Growing methods</SectionKicker>
              <SectionHeading
                as="h1"
                className="!text-5xl md:!text-6xl lg:!text-7xl"
              >
                Aeroponics <Accent>vs hydroponics</Accent>
              </SectionHeading>
              <Body className="mt-6 !text-lg">
                Two approaches to soilless growing. The difference starts at the
                roots.
              </Body>
              <Body className="mt-4">
                Both approaches feed plants with water and dissolved nutrients.
                Aeroponics delivers that solution as a mist to roots suspended
                in air. Other hydroponic systems deliver it through a shallow
                flowing film, an aerated reservoir or irrigation through a
                growing medium.
              </Body>
              <div className="mt-8">
                <PrimaryButton href="#methods">
                  Explore the methods
                </PrimaryButton>
              </div>
            </Reveal>
            <Reveal delay={80} className="lg:col-span-7">
              <figure>
                <img
                  src={container}
                  alt="Illustrative pea shoots with curled tendrils on cool stone and navy linen."
                  width={1122}
                  height={1402}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl"
                />
              </figure>
            </Reveal>
          </div>
        </Section>

        <Section id="methods">
          <Reveal className="grid lg:grid-cols-12 gap-6 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionKicker>At the roots</SectionKicker>
            </div>
            <div className="lg:col-span-8">
              <SectionHeading>
                How the roots receive <Accent>what they need.</Accent>
              </SectionHeading>
              <Body className="mt-6">
                The choice affects how a system is designed, monitored and
                maintained. Crop performance depends on the whole growing
                environment and operating plan.
              </Body>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mt-12">
            <Reveal>
              <figure>
                <img
                  src={aero}
                  alt="Illustrative pea shoots with curled tendrils on cool stone and navy linen."
                  width={1122}
                  height={1402}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] lg:aspect-[4/5] object-cover rounded-2xl"
                />
                {/* <figcaption className="mt-3 text-xs text-bz-slate">
                  Illustrative imagery.
                </figcaption> */}
              </figure>
              <h3 className="font-instrument-serif text-bz-navy text-3xl mt-6">
                Aeroponics
              </h3>
              <Body className="mt-3">
                Roots hang inside a growing chamber and receive nutrient
                solution through misting nozzles. BlueZone's proposed systems
                combine this delivery method with growing racks, lighting,
                climate management and monitoring.
              </Body>
            </Reveal>
            <Reveal delay={80} className="md:pt-16">
              <figure>
                <img
                  src={hydro}
                  alt="Illustrative pea shoots with curled tendrils on cool stone and navy linen."
                  width={1122}
                  height={1402}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] lg:aspect-[4/5] object-cover rounded-2xl"
                />
                {/* <figcaption className="mt-3 text-xs text-bz-slate">
                  Illustrative imagery.
                </figcaption> */}
              </figure>
              <h3 className="font-instrument-serif text-bz-navy text-3xl mt-6">
                Hydroponics
              </h3>
              <Body className="mt-3">
                Hydroponics covers several designs. Nutrient film systems pass a
                shallow stream along the roots; water-culture systems support
                roots in an oxygenated solution; other systems irrigate a
                growing medium. Roots are not necessarily fully submerged.
              </Body>
            </Reveal>
          </div>
          {/* <Footnote className="mt-10 max-w-3xl">
            Visuals are image placeholders. Aeroponics is sometimes classified
            within the wider hydroponics family. Here, the comparison is between
            mist-fed aeroponics and other common hydroponic designs.
          </Footnote> */}
        </Section>

        <Section surface="mist" id="comparison">
          <Reveal>
            <SectionKicker>The difference in practice</SectionKicker>
            <SectionHeading>
              Compare the <Accent>whole growing system.</Accent>
            </SectionHeading>
            <Body className="mt-6 !max-w-2xl">
              A misting method alone does not establish faster harvests, lower
              electricity bills or a particular yield. Lighting, climate
              equipment, crop selection, harvest stage and operating conditions
              all affect the result.
            </Body>
          </Reveal>
          <div className="mt-12">
            <table className="hidden md:table w-full text-left text-sm">
              <caption className="sr-only">
                Aeroponics compared with other hydroponic designs
              </caption>
              <thead className="bg-bz-navy text-white">
                <tr>
                  {[
                    "Consideration",
                    "Aeroponics",
                    "Other hydroponic systems",
                  ].map((label) => (
                    <th
                      key={label}
                      scope="col"
                      className="noise-overlay overflow-hidden p-6 font-medium"
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map(([label, aero, hydro]) => (
                  <tr key={label} className="border-b border-bz-navy/15">
                    <th
                      scope="row"
                      className="p-6 align-top font-medium text-bz-navy w-1/5"
                    >
                      {label}
                    </th>
                    <td className="p-6 align-top w-2/5">
                      <Body className="!text-sm">{aero}</Body>
                    </td>
                    <td className="p-6 align-top w-2/5">
                      <Body className="!text-sm">{hydro}</Body>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="md:hidden space-y-8">
              {COMPARISON_ROWS.map(([label, aero, hydro]) => (
                <article
                  key={label}
                  className="border-t border-bz-navy/20 pt-5"
                >
                  <h3 className="font-medium text-bz-navy">{label}</h3>
                  <dl className="mt-4 space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-bz-blue">
                        Aeroponics
                      </dt>
                      <dd>
                        <Body className="mt-1">{aero}</Body>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-bz-blue">
                        Other hydroponic systems
                      </dt>
                      <dd>
                        <Body className="mt-1">{hydro}</Body>
                      </dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <Reveal className="noise-overlay overflow-hidden bg-bz-navy rounded-2xl p-7 md:p-12 lg:p-16 grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionKicker onNavy>BlueZone's approach</SectionKicker>
              <SectionHeading dark>
                Why we use <Accent dark>aeroponics.</Accent>
              </SectionHeading>
            </div>
            <div className="lg:col-span-7">
              <Body dark>
                BlueZone's approach brings nutrient mist directly to the root
                zone within an integrated growing environment. Racks, nutrient
                delivery, lighting, climate management and monitoring work
                together around a crop plan.
              </Body>
              <Body dark className="mt-5">
                The aim is to make controlled production practical closer to
                demand. The system configuration and operating process should be
                assessed against the crop, site and buyer's requirements.
              </Body>
              <div className="mt-8">
                <SecondaryButton href="/#biocube" dark>
                  Explore BioCube
                </SecondaryButton>
              </div>
            </div>
          </Reveal>
          <Reveal className="grid lg:grid-cols-12 gap-8 lg:gap-16 mt-16 md:mt-24">
            <div className="lg:col-span-4">
              <SectionKicker>Evidence before scale</SectionKicker>
            </div>
            <div className="lg:col-span-8">
              <SectionHeading>
                Start with <Accent>a measured pilot.</Accent>
              </SectionHeading>
              <Body className="mt-6">
                A useful comparison measures usable harvest, crop quality, water
                and nutrient inputs, total energy, labour and reliability on a
                consistent basis. For a commercial project, it also considers
                food-safety requirements and how the harvest fits the buyer's
                workflow.
              </Body>
              <Body className="mt-4">
                A BlueZone pilot is designed to test the operating case before
                expansion. Agree the crop and success criteria, run the growing
                process, measure results and review whether the system suits the
                site.
              </Body>
              <div className="mt-8">
                <PrimaryButton href={ENQUIRY}>
                  Discuss a growing project
                </PrimaryButton>
              </div>
            </div>
          </Reveal>
        </Section>

        <Section surface="mist">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <SectionKicker>Short answers</SectionKicker>
              <SectionHeading>
                Before <Accent>you grow.</Accent>
              </SectionHeading>
            </Reveal>
            <div className="lg:col-span-8 border-t border-bz-navy/15">
              {FAQS.map(([question, answer]) => (
                <details
                  key={question}
                  className="group border-b border-bz-navy/15"
                >
                  <summary className="flex min-h-16 items-center justify-between gap-5 py-6 list-none cursor-pointer font-medium text-bz-navy text-sm [&::-webkit-details-marker]:hidden">
                    {question}
                    <span aria-hidden="true" className="shrink-0">
                      <Plus size={18} className="group-open:hidden" />
                      <Minus size={18} className="hidden group-open:block" />
                    </span>
                  </summary>
                  <Body className="pb-6">{answer}</Body>
                </details>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <SectionFooter homePrefix="/" comparisonPage />
    </>
  );
}
