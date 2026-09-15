import { useState } from "react";

import {
  Accent,
  BentoTile,
  Body,
  Chip,
  Footnote,
  ImagePlaceholder,
  Reveal,
  Section,
  SectionHeading,
} from "./primitives";

const ORG_TYPES = [
  "Airport / airline catering",
  "Island / remote community",
  "Hotel / resort",
  "Foodservice / distribution",
  "Government / institution",
  "Commercial grower",
  "Other",
];

const STAGES = [
  "Exploring the idea",
  "Evaluating a pilot",
  "Budgeted project",
  "Ready to deploy",
];

const FIELD =
  "w-full rounded-full border border-bz-navy/15 bg-white px-5 py-3 text-sm text-bz-navy font-light placeholder:text-bz-navy/40 focus:outline-none focus:border-bz-blue focus:ring-1 focus:ring-bz-blue transition-colors duration-200";

const LABEL = "block text-bz-navy/60 text-xs uppercase tracking-[0.15em] mb-2";

function ChipGroup({ name, options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const selected = value === option;
        return (
          <Chip
            key={option}
            as="button"
            type="button"
            aria-pressed={selected}
            selected={selected}
            onClick={() => onChange(selected ? "" : option)}
          >
            {option}
          </Chip>
        );
      })}
      <input type="hidden" name={name} value={value} />
    </div>
  );
}

export default function SectionContact() {
  const [orgType, setOrgType] = useState("");
  const [stage, setStage] = useState("");

  return (
    <Section id="get-in-touch" surface="white">
      <div className="grid lg:grid-cols-[minmax(0,420px)_1fr] gap-12 lg:gap-16 items-start">
        <div>
          <Reveal>
            <SectionHeading>
              Grow <Accent>where it&rsquo;s needed</Accent>
            </SectionHeading>
            <Body className="mt-6">
              Tell us what you need to produce, and where. We&rsquo;ll tell you
              whether Zero-Mile production makes commercial sense for it.
            </Body>
          </Reveal>

          <Reveal delay={100}>
            <ImagePlaceholder
              ratio="aspect-[4/3]"
              label="Site or unit photo"
              hint="Installed unit in its setting, or the team on site."
              className="mt-10"
            />
            <div className="mt-6">
              <p className="text-bz-navy/60 text-xs uppercase tracking-[0.15em]">
                Direct enquiries
              </p>
              <a
                href="mailto:contact@bluezoneaeroponics.com"
                className="text-bz-blue text-sm font-medium hover:text-bz-navy transition-colors duration-200"
              >
                contact@bluezoneaeroponics.com
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <BentoTile innerClassName="p-6 md:p-10">
            <form
              onSubmit={(e) => {
                // No backend wired yet — connect this to your form handler.
                e.preventDefault();
              }}
            >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={LABEL} htmlFor="contact-name">
                  Full name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className={FIELD}
                />
              </div>
              <div>
                <label className={LABEL} htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className={FIELD}
                />
              </div>
              <div>
                <label className={LABEL} htmlFor="contact-org">
                  Organisation
                </label>
                <input
                  id="contact-org"
                  name="organisation"
                  type="text"
                  placeholder="Company or institution"
                  className={FIELD}
                />
              </div>
              <div>
                <label className={LABEL} htmlFor="contact-title">
                  Job title
                </label>
                <input
                  id="contact-title"
                  name="jobTitle"
                  type="text"
                  placeholder="Your role"
                  className={FIELD}
                />
              </div>
              <div className="sm:col-span-2">
                <label className={LABEL} htmlFor="contact-location">
                  Country or location
                </label>
                <input
                  id="contact-location"
                  name="location"
                  type="text"
                  placeholder="Where production would be sited"
                  className={FIELD}
                />
              </div>
            </div>

            <div className="mt-8">
              <span className={LABEL}>Organisation type</span>
              <ChipGroup
                name="organisationType"
                options={ORG_TYPES}
                value={orgType}
                onChange={setOrgType}
              />
            </div>

            <div className="mt-8">
              <span className={LABEL}>Project stage</span>
              <ChipGroup
                name="projectStage"
                options={STAGES}
                value={stage}
                onChange={setStage}
              />
            </div>

            <div className="mt-8">
              <label className={LABEL} htmlFor="contact-brief">
                What are you looking to produce or solve?
              </label>
              <textarea
                id="contact-brief"
                name="brief"
                rows={4}
                placeholder="Crops, volumes, current supply problem, timeline"
                className="w-full rounded-2xl border border-bz-navy/15 bg-white px-5 py-4 text-sm text-bz-navy font-light placeholder:text-bz-navy/40 focus:outline-none focus:border-bz-blue focus:ring-1 focus:ring-bz-blue transition-colors duration-200 resize-y"
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5">
              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-bz-navy text-white rounded-full pl-6 pr-2 py-2 text-sm font-medium hover:bg-bz-ocean transition-colors duration-200"
              >
                Send enquiry
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-bz-blue text-white text-xs">
                  &rarr;
                </span>
              </button>
              <Footnote className="flex-1">
                We reply to qualified enquiries with a site and crop
                assessment.
              </Footnote>
            </div>
            </form>
          </BentoTile>
        </Reveal>
      </div>
    </Section>
  );
}
