import { Minus, Plus } from "lucide-react";
import {
  Accent,
  Body,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
} from "./primitives";

const FAQS = [
  {
    question: "What is Bluezone Aeroponics?",
    answer:
      "Bluezone combines aeroponic nutrient delivery with stacked growing racks, lighting, climate management and digital monitoring to support controlled indoor production closer to demand.",
  },
  {
    question: "What can a BioCube grow?",
    answer:
      "The current illustrated configuration is designed around microgreens. Suitable crops, layout and equipment are agreed around each project's buyer, site and operating plan.",
  },
  {
    question: "Can Bluezone grow strawberries?",
    answer:
      "Strawberries may be possible in a controlled growing system, but they should be assessed as a crop-specific project. Variety, yield target, pollination, climate settings, labour and buyer requirements all need to be validated before committing to a configuration.",
  },
  {
    question: "Is Bluezone only for microgreens?",
    answer:
      "No. Microgreens are the current illustrated use case, while the wider approach can be assessed for other suitable high-value crops through a defined pilot or project scope.",
  },
  {
    question: "How much space does a BioCube need?",
    answer:
      "The answer depends on the selected system, access, power, water, drainage, climate conditions, handling area and intended crop. A site review defines the practical footprint and support requirements.",
  },
  {
    question: "Does a controlled growing system run automatically?",
    answer:
      "Automation and monitoring support consistent operation, but people are still needed for crop planning, seeding, crop care, harvesting, cleaning and handling.",
  },
  {
    question: "Can Bluezone reduce reliance on imported fresh produce?",
    answer:
      "Local controlled production can complement imports by growing selected crops closer to UAE buyers. Its real contribution depends on crop suitability, operating reliability, costs, energy and the supply model.",
  },
  {
    question: "How do we evaluate whether Bluezone is right for our site?",
    answer:
      "Start with the buyer, crop, site and operating team. A pilot can measure usable yield, quality, water and energy use, labour, reliability and fit with the receiving or kitchen workflow before expansion.",
  },
];

export default function SectionFAQ() {
  return (
    <Section
      id="faq"
      surface="white"
      className="compact-section landing-faq-section"
    >
      <div className="landing-faq-layout">
        <Reveal className="landing-faq-intro">
          <SectionKicker>FAQs</SectionKicker>
          <SectionHeading>
            Before you <Accent>grow.</Accent>
          </SectionHeading>
          <Body className="mt-5">
            The useful questions come before the equipment. Start with the crop,
            buyer, site and people who will operate it.
          </Body>
        </Reveal>

        <div className="landing-faq-list">
          {FAQS.map(({ question, answer }, index) => (
            <Reveal key={question} delay={index * 45}>
              <details>
                <summary>
                  <span>{question}</span>
                  <Plus className="faq-plus" size={19} aria-hidden="true" />
                  <Minus className="faq-minus" size={19} aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
