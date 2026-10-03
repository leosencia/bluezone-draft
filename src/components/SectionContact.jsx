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
  const [submission, setSubmission] = useState({ state: "idle", message: "" });
  const update = (event) => {
    setFields((previous) => ({ ...previous, [event.target.name]: event.target.value }));
    if (submission.state === "error") setSubmission({ state: "idle", message: "" });
  };
  const submit = async (event) => {
    event.preventDefault();
    setSubmission({ state: "submitting", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, enquiryType }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "We could not send your enquiry. Please try again.");

      setFields({ name: "", email: "", organisation: "", location: "", message: "" });
      setSubmission({ state: "success", message: "Thank you. Your enquiry has been received and our team will be in touch." });
    } catch (error) {
      setSubmission({
        state: "error",
        message: error instanceof Error ? error.message : "We could not send your enquiry. Please try again or email us directly.",
      });
    }
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
                      onChange={() => { onEnquiryTypeChange(value); setSubmission({ state: "idle", message: "" }); }} className="peer sr-only" />
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
            <div className="absolute h-px w-px overflow-hidden whitespace-nowrap" aria-hidden="true">
              <label htmlFor="contact-website">Website</label>
              <input id="contact-website" name="website" type="text" tabIndex="-1" autoComplete="off" value={fields.website || ""} onChange={update} />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" disabled={submission.state === "submitting"} className="inline-flex min-h-11 items-center gap-4 rounded-full bg-bz-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-bz-ocean disabled:cursor-wait disabled:opacity-70">
                {submission.state === "submitting" ? "Sending enquiry..." : "Send enquiry"} <ArrowUpRight size={18} aria-hidden="true" />
              </button>
              <p id="contact-delivery" className="max-w-xs text-xs leading-relaxed text-bz-navy/70">Your details are sent securely to the BlueZone team.</p>
            </div>
            {submission.state !== "idle" && submission.state !== "submitting" && <p role="status" className={`text-sm leading-relaxed ${submission.state === "error" ? "text-red-700" : "text-bz-navy/80"}`}>
              {submission.message}
            </p>}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
