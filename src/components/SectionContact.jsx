import { useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Accent, Body, Reveal, Section, SectionHeading, SectionKicker } from "./primitives";

const EMAIL = "johnny@bluezoneaeroponicfarming.com";
const TYPES = [
  ["produce", "Produce supply"],
  ["systems", "Growing system"],
  ["pilot", "Pilot / site evaluation"],
];
const FIELD = "w-full rounded-lg border border-bz-navy/20 bg-white px-4 py-3 text-sm text-bz-navy placeholder:text-bz-navy/50";

export default function SectionContact({ enquiryType, onEnquiryTypeChange }) {
  const [fields, setFields] = useState({ name: "", email: "", organisation: "", location: "", message: "" });
  const [draftOpened, setDraftOpened] = useState(false);
  const update = (event) => setFields((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  const submit = (event) => {
    event.preventDefault();
    const topic = TYPES.find(([value]) => value === enquiryType)?.[1] || "Produce supply";
    const body = [
      `Name: ${fields.name}`, `Email: ${fields.email}`,
      `Organisation: ${fields.organisation}`, `Location: ${fields.location}`,
      "", fields.message,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("BlueZone enquiry: " + topic)}&body=${encodeURIComponent(body)}`;
    setDraftOpened(true);
  };

  return (
    <Section id="get-in-touch" surface="white" className="compact-section">
      <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="sequence-reveal">
          <SectionKicker>Get in Touch</SectionKicker>
          <SectionHeading>Let's grow <Accent>closer.</Accent></SectionHeading>
          <Body className="mt-5">
            Tell us what you need, where you are and what you have in mind.
            We will help you explore produce supply, a growing system or a measured pilot.
          </Body>
          <a href={`mailto:${EMAIL}`} className="mt-8 inline-flex max-w-full items-start gap-3 break-all text-sm text-bz-blue underline underline-offset-4">
            <Mail size={18} className="mt-0.5 shrink-0" aria-hidden="true" />{EMAIL}
          </a>
        </Reveal>
        <Reveal delay={80} className="contact-form-reveal">
          <form onSubmit={submit} className="space-y-6" aria-describedby="contact-delivery">
            <fieldset>
              <legend className="mb-3 text-sm font-medium">What are you exploring?</legend>
              <div className="flex flex-wrap gap-2">
                {TYPES.map(([value, label]) => (
                  <label key={value} className="cursor-pointer">
                    <input type="radio" name="enquiryType" value={value} checked={enquiryType === value}
                      onChange={() => { onEnquiryTypeChange(value); setDraftOpened(false); }} className="peer sr-only" />
                    <span className="block rounded-full border border-bz-navy/25 px-4 py-2.5 text-sm peer-checked:border-bz-navy peer-checked:bg-bz-navy peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-bz-blue">{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["name", "Full name", "text", "name", true],
                ["email", "Email", "email", "email", true],
                ["organisation", "Organisation", "text", "organization", false],
                ["location", "Location", "text", "address-level2", false],
              ].map(([name, label, type, autoComplete, required]) => (
                <div key={name}>
                  <label htmlFor={`contact-${name}`} className="mb-2 block text-sm">{label}{required ? " *" : ""}</label>
                  <input id={`contact-${name}`} name={name} type={type} autoComplete={autoComplete} required={required} maxLength={160}
                    value={fields[name]} onChange={update} className={FIELD} />
                </div>
              ))}
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm">About your enquiry *</label>
              <textarea id="contact-message" name="message" rows={4} required maxLength={1500}
                value={fields.message} onChange={update} className={FIELD}
                placeholder={enquiryType === "produce" ? "Crops, quantities and delivery needs" : "Your site, crop interests and project stage"} />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" className="inline-flex min-h-11 items-center gap-4 rounded-full bg-bz-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-bz-ocean">
                Open email draft <ArrowUpRight size={18} aria-hidden="true" />
              </button>
              <p id="contact-delivery" className="max-w-xs text-xs leading-relaxed text-bz-navy/70">Enquiries are sent through your email app.</p>
            </div>
            {draftOpened && <p role="status" className="text-sm leading-relaxed text-bz-navy/80">
              Your email app was requested. Your enquiry is only sent when you send the draft.
              You can also contact us directly at the email address shown.
            </p>}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
