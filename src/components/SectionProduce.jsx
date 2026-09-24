import { ArrowUpRight } from "lucide-react";
import { Accent, Body, Reveal, Section, SectionHeading, SectionKicker } from "./primitives";
import mixedGreens from "../assets/microgreens/mixed-microgreens-concept.png";
import peaShoots from "../assets/microgreens/pea-shoots-concept.png";

const CROPS = [
  { name: "Microgreens", detail: "Young leaves. A considered finishing touch.", body: "Explore tender greens for salads, sandwiches and plated dishes. Discuss the varieties and quantities that work for your menu or wholesale range." },
  { name: "Micro herbs", detail: "Small leaves. Distinctive flavour.", body: "Bring aroma and detail to the plate. Share your preferred herbs, presentation requirements and supply needs with our team." },
  { name: "Pea shoots", detail: "Delicate tendrils. Fresh possibilities.", body: "A focus of our planned Somerset production, alongside microgreens. Talk to us about pack formats and the volumes your kitchen or customers need." },
];

export default function SectionProduce() {
  return (
    <Section id="produce" surface="white">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <Reveal className="lg:col-span-5">
          <SectionKicker>BlueZone Microgreens</SectionKicker>
          <SectionHeading>Premium microgreens and micro herbs, <Accent>grown with control.</Accent></SectionHeading>
          <Body className="mt-6">Our produce proposition brings together aeroponic growing and a controlled indoor environment, designed for year-round production.</Body>
          <Body className="mt-4">For wholesalers, foodservice distributors, restaurants and hospitality buyers who want to discuss a more local source of fresh greens.</Body>
          <a href="#get-in-touch" data-enquiry="produce" className="group inline-flex items-center gap-4 rounded-full bg-bz-navy text-white px-6 py-3.5 mt-8 text-sm font-medium hover:bg-bz-ocean transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bz-blue">Discuss produce supply <ArrowUpRight size={18} aria-hidden="true" /></a>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-7">
          <figure>
            <img src={mixedGreens} alt="Illustrative mixed microgreens and micro herbs on a blue-grey ceramic dish." width={1536} height={1024} loading="lazy" decoding="async" className="w-full aspect-[6/5] sm:aspect-[3/2] lg:aspect-[6/5] object-cover rounded-2xl" />
            <figcaption className="mt-3 text-xs text-bz-slate">Illustrative imagery.</figcaption>
          </figure>
        </Reveal>
      </div>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mt-16 md:mt-24 items-start">
        <Reveal className="lg:col-span-4 order-2 lg:order-1">
          <figure>
            <img src={peaShoots} alt="Illustrative pea shoots with curled tendrils on cool stone and navy linen." width={1122} height={1402} loading="lazy" decoding="async" className="w-full aspect-[4/3] lg:aspect-[4/5] object-cover rounded-2xl" />
            <figcaption className="mt-3 text-xs text-bz-slate">Illustrative imagery.</figcaption>
          </figure>
        </Reveal>
        <div className="lg:col-span-8 order-1 lg:order-2">
          <Reveal><h3 className="font-instrument-serif text-bz-navy text-3xl md:text-4xl">A small crop. <Accent>A place on your menu.</Accent></h3></Reveal>
          <div className="mt-7 divide-y divide-bz-navy/15 border-y border-bz-navy/15">
            {CROPS.map((crop, i) => (
              <Reveal key={crop.name} delay={i * 50}>
                <article className="grid sm:grid-cols-[0.8fr_1.2fr] gap-3 sm:gap-8 py-7">
                  <h4 className="font-instrument-serif text-bz-navy text-2xl md:text-3xl">{crop.name}</h4>
                  <div><p className="text-sm text-bz-navy font-medium">{crop.detail}</p><Body className="mt-2 text-sm max-w-none">{crop.body}</Body></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <Reveal>
        <div className="mt-14 md:mt-20 bg-bz-mist rounded-2xl p-7 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div><h3 className="font-instrument-serif text-bz-navy text-3xl md:text-4xl">Start with what <Accent>your buyers need.</Accent></h3><Body className="mt-4 max-w-2xl">Tell us your preferred crops, approximate weekly quantities, pack requirements and delivery location. We’ll discuss availability and a possible supply arrangement with you.</Body></div>
          <a href="#get-in-touch" data-enquiry="produce" className="inline-flex items-center justify-center gap-3 rounded-full border border-bz-navy/30 px-6 py-3.5 text-bz-navy text-sm font-medium hover:bg-bz-navy hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bz-blue">Discuss produce supply <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </Reveal>
    </Section>
  );
}
