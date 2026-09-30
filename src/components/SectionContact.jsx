import { useState } from "react";
import {
  Accent,
  Body,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
} from "./primitives";

const FIELD =
  "w-full rounded-xl border border-bz-navy/20 bg-white px-4 py-3 text-sm text-bz-navy placeholder:text-bz-slate focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-bz-blue";
const EMPTY = {
  name: "",
  email: "",
  organisation: "",
  location: "",
  cropInterests: "",
  quantity: "",
  packs: "",
  delivery: "",
  projectContext: "",
  stage: "",
  systemCrops: "",
  procurement: "",
  operator: "",
  funding: "",
};

export default function SectionContact({ enquiryType, onEnquiryTypeChange }) {
  const [fields, setFields] = useState(EMPTY);
  const produce = enquiryType === "produce";
  const update = (event) =>
    setFields((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  const input = (name, label, placeholder, type = "text", required = false) => (
    <div key={name}>
      <label
        htmlFor={`contact-${name}`}
        className="block text-sm font-medium text-bz-navy mb-2"
      >
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={`contact-${name}`}
        name={name}
        value={fields[name]}
        onChange={update}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={
          name === "name"
            ? "name"
            : name === "email"
              ? "email"
              : name === "organisation"
                ? "organization"
                : "off"
        }
        className={FIELD}
      />
    </div>
  );
  const select = (name, label, options) => (
    <div key={name}>
      <label
        htmlFor={`contact-${name}`}
        className="block text-sm font-medium text-bz-navy mb-2"
      >
        {label}
      </label>
      <select
        id={`contact-${name}`}
        name={name}
        value={fields[name]}
        onChange={update}
        className={FIELD}
      >
        <option value="">Select if relevant</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
  return (
    <Section id="get-in-touch" surface="white">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
        <Reveal>
          <SectionKicker>Get in Touch</SectionKicker>
          <SectionHeading>
            Two ways to <Accent>grow closer.</Accent>
          </SectionHeading>
          <Body className="mt-6">
            Discuss produce supply with BlueZone Microgreens, or explore an
            aeroponic system and a measured pilot for your site.
          </Body>
          <div className="mt-10 space-y-6 border-t border-bz-navy/15 pt-8">
            <div>
              <h3 className="font-instrument-serif text-bz-navy text-2xl">
                For your kitchen and customers
              </h3>
              <Body className="mt-2 text-sm">
                Preferred crops, pack formats, quantities and delivery needs
                help us start a useful supply conversation.
              </Body>
            </div>
            <div>
              <h3 className="font-instrument-serif text-bz-navy text-2xl">
                For your production site
              </h3>
              <Body className="mt-2 text-sm">
                A practical site, operating team, recurring demand and funding
                route help define a viable systems project.
              </Body>
            </div>
          </div>
          <p className="mt-10 text-xs text-bz-slate">Direct enquiries</p>
          <a
            href="mailto:johnny@bluezoneaeroponicfarming.com"
            className="inline-block mt-2 text-bz-blue text-sm font-medium break-all underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bz-blue"
          >
            johnny@bluezoneaeroponicfarming.com
          </a>
        </Reveal>
        <Reveal delay={80}>
          <form
            onSubmit={(event) => event.preventDefault()}
            className="rounded-2xl bg-bz-mist p-6 md:p-9"
            aria-describedby="enquiry-availability"
          >
            <fieldset>
              <legend className="text-sm font-medium text-bz-navy mb-4">
                What would you like to discuss?
              </legend>
              <div className="flex flex-wrap gap-3">
                {[
                  ["produce", "Produce supply"],
                  ["systems", "Systems / pilot"],
                ].map(([value, label]) => (
                  <label key={value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="enquiryType"
                      value={value}
                      checked={enquiryType === value}
                      onChange={() => onEnquiryTypeChange(value)}
                      className="peer sr-only"
                    />
                    <span className="block rounded-full border border-bz-navy/25 px-5 py-3 text-sm text-bz-navy peer-checked:bg-bz-navy peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-bz-blue">
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
            <p className="text-xs text-bz-slate mt-6">
              * Required fields. Commercial details are optional.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mt-5">
              {input("name", "Full name", "Your name", "text", true)}
              {input("email", "Email", "you@company.com", "email", true)}
              {input("organisation", "Organisation", "Company or organisation")}
              {input(
                "location",
                "Country or location",
                "Town, region and country",
              )}
            </div>
            <fieldset className="mt-8">
              <legend className="font-instrument-serif text-bz-navy text-2xl mb-5">
                {produce ? "Your produce requirements" : "Your systems project"}
              </legend>
              <div className="grid sm:grid-cols-2 gap-5">
                {produce ? (
                  <>
                    {input(
                      "cropInterests",
                      "Crop interests",
                      "Microgreens, micro herbs, pea shoots",
                    )}
                    {input(
                      "quantity",
                      "Approximate weekly quantity",
                      "Kilograms or punnets per week",
                    )}
                    {input(
                      "packs",
                      "Pack requirements",
                      "Preferred sizes or specifications",
                    )}
                    {input(
                      "delivery",
                      "Delivery needs",
                      "Destination, frequency and timing",
                    )}
                  </>
                ) : (
                  <>
                    {input(
                      "projectContext",
                      "Project context (optional)",
                      "Tell us about your proposed site and growing project.",
                    )}
                    {select("stage", "Project stage", [
                      "Exploring the idea",
                      "Evaluating a pilot",
                      "Budgeted project",
                      "Planning implementation",
                    ])}
                    {input(
                      "systemCrops",
                      "Crops and specifications",
                      "Selected crops and quality needs",
                    )}
                    {input(
                      "procurement",
                      "Current procurement",
                      "Weekly volume and indicative landed cost",
                    )}
                    {input(
                      "operator",
                      "Site and operating team",
                      "Proposed site, utilities and operator",
                    )}
                    {select("funding", "Funding stage", [
                      "Exploring funding",
                      "Budget under review",
                      "Budget allocated",
                      "Seeking an eligible funding partner",
                    ])}
                  </>
                )}
              </div>
            </fieldset>
            <div className="mt-8 border-t border-bz-navy/15 pt-6">
              <p
                id="enquiry-availability"
                className="text-sm leading-relaxed text-bz-slate"
              >
                Online submission is not yet available. Please email us directly
                to discuss your enquiry. Details entered here are not sent.
              </p>
              <button
                type="submit"
                disabled
                className="mt-5 rounded-full bg-bz-navy/15 text-bz-slate px-6 py-3 text-sm font-medium cursor-not-allowed"
              >
                Send enquiry
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
