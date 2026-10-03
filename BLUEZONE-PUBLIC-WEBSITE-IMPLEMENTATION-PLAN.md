# BlueZone public website implementation plan

Date: 29 September 2026  
Status: implemented locally under the component-reuse and placeholder-image rules. Retained as the implementation record; active claim provenance is in `docs/content/BLUEZONE-CONTENT-SOURCES.md`.  
Basis: the six requested workstreams, [the source review](BLUEZONE-SOURCE-OF-TRUTH-REVIEW.md), the supplied design-reference image and the current React/Vite website.

## TLDR

Build a dedicated comparison page, shorten the homepage Method section into a teaser, clarify the existing BioCube configuration, and remove unsupported or overly promotional content. Record every retained product claim against the four client PDFs.

The visual direction borrows the reference's generous spacing, asymmetric image/text compositions, rounded image frames and occasional dark feature panels. Translate these into BlueZone's navy, mist, blue and lime palette, Instrument Serif headings, Inter body copy and existing pill buttons. Preserve the current homepage hero and its scroll behaviour.

Implementation produces:

1. A directly accessible comparison page with its own metadata and a working route back to systems enquiries.
2. A concise homepage comparison teaser between Technology and BioCube.
3. A clearer microgreens BioCube showcase with all four matched configuration values, explanatory subsystem copy and provisional technical details.
4. A useful Technology placeholder visual, qualified capability copy and consistent concept-image captions.
5. A homepage without the residual research/impact statistics, sector-category enquiry dropdown or unsupported Somerset wording.
6. Updated pilot criteria and an internal, page-referenced content ledger.

## 1. Decisions that define the implementation

| Topic | Decision |
| --- | --- |
| Existing website | Work on the active `src/main.jsx` → `src/App.jsx` implementation. Preserve the existing uncommitted BioCube work and previously removed sections. |
| Comparison content | Use section 6 of the source review as the copy baseline, with short edits for readability. Keep its six comparison criteria, balanced method descriptions, BlueZone rationale, pilot approach and four short answers. |
| Page architecture | Use a second Vite HTML entry with its own React entry point. The website has two public documents and does not need a routing dependency for this change. |
| New URL | Canonical internal-link path: `/aeroponics-vs-hydroponics/`. The trailing slash represents a real output directory; verify the slashless variant resolves or redirects on the eventual host. |
| Homepage placement | Replace the existing full Method section in place, after Technology and before BioCube. Preserve `#method` on the teaser for existing incoming links. |
| BioCube numbers | Keep up to 4,500 planting boxes, 70 m² canopy, 35 sections and 5 tiers. Identify them as catalogue configuration values. Preserve the existing matched component specifications. |
| Unconfirmed model additions | Do not attach the pilot's 40-foot label, APU package or farm-scale performance to the catalogue unit until applicability is confirmed. This does not block the requested work. |
| Technology visual | Use an existing site placeholder image with a clear illustrative caption. Explain the root-zone mechanism in copy; do not create a new SVG, canvas illustration or AI-generated graphic. |
| Research/impact statistics | Remove the Problem evidence strip and full Method statistics from the homepage. The new comparison page also uses qualitative explanations instead of numerical superiority claims. |
| Enquiry categories | Retain Produce supply / Systems & pilot choices. Replace the sector dropdown with one optional free-text project description. Keep useful crop, site and stage fields. |
| Somerset | Remove the unsupported location statement now. It can return only if separately reconfirmed. |
| Existing produce offer | Retain the established enquiry path and current sub-brand, using enquiry-oriented wording that does not promise stock, delivery coverage or an operating Somerset farm. Record business-status confirmation as open. |
| Public contact | Preserve the current site address during this scoped implementation and record the discrepancy for client confirmation. Do not copy the named PDF contact or telephone number into the site. |
| Publication | Deliver code and local verification. Deployment, customer announcements and publishing the source PDFs are outside this plan. |

## 1A. Non-negotiable implementation rules

These rules apply to every new page, section and visual treatment in this plan:

1. **Reuse existing components and patterns.** All existing reusable components MUST be used wherever the pattern already exists. For example, comparison-page section labels must use the same section kicker component and styling used on the landing page; headings, body copy, buttons, footnotes, reveal behaviour, containers, spacing tokens, colours and focus states should come from the existing primitives and design system. Do not recreate equivalent one-off markup or introduce a parallel component vocabulary without a documented gap.
2. **No AI-generated graphics.** Do not generate, commission or add AI-created graphics, illustrations or decorative images. AI-generated graphics are explicitly out of scope because they do not meet the required quality bar. Use the same placeholder-image treatment already used by the website for any missing photography or visual asset, and label it clearly as placeholder, illustrative or concept imagery as appropriate.
3. **No invented replacement visuals.** Do not replace a missing image with a new SVG, canvas illustration or fabricated engineering graphic. If an explanatory visual is required but no approved asset exists, use an existing placeholder image and explain the mechanism in copy. Any client-supplied or existing diagram must retain its source/provisional qualification.
4. **Keep new page styling subordinate to the landing page.** The dedicated comparison page may use a separate layout stylesheet for its document structure, but it must reuse the landing page’s typography, colour tokens, section kicker, buttons, captions, borders, radii and responsive conventions rather than inventing a new visual language.

## 2. Design direction from the supplied image

The intended visitor is a prospective buyer or project partner scanning product information on a work laptop or phone. Use light reading surfaces and clear text, with dark panels marking a few important transitions.

### Translate the reference into the existing identity

| Reference feature | BlueZone implementation |
| --- | --- |
| Large visual alongside relatively short copy | Keep the BioCube cutaway prominent; pair the Technology explanation with an existing placeholder image; use a compact text/image introduction on the comparison page. |
| Asymmetric columns | Use the site's existing 12-column layout: typically five columns of copy beside seven of imagery, or four beside eight for product details. |
| Generous white space | Retain the existing `max-w-7xl` container and `px-6 / md:px-12 / lg:px-16` gutters. Give major sections more breathing room than small navigation teasers. |
| Rounded image frames | Use the existing 16px image/panel radius. Keep the homepage hero full-bleed with its current crop and framing. |
| Dark green feature blocks | Translate to `bz-navy` or `bz-ocean`. Use `bz-lime` sparingly for small accents, with readable light text. |
| Varied card sizes and proportions | Use a large product visual and concise adjacent information; reserve separate cards for genuine interactive destinations. Subsystems work better as labelled rows than five identical tiles. |
| Quiet labels, strong headlines | Keep Instrument Serif for headings and Inter for body/control text. Retain the current heading hierarchy and selective section kickers; do not introduce the reference's numbering throughout the site. |
| Compact pill actions and arrow cues | Reuse the existing button/link patterns and Lucide arrows. Links should have descriptive text and visible focus states. |

The reference's testimonials, satisfied-client count, service categories, personal portraits, agricultural stock imagery and glass overlays are not content requirements. The requested design influence is composition, hierarchy and pacing. BlueZone's source-supported imagery and copy determine what occupies those layouts.

### Concrete layout choices

- **Comparison introduction:** simple navy navigation bar; split title/copy and an existing, captioned crop image. Keep it compact enough that the explanation begins near the first screenful. No scroll-scrubbed hero on this page.
- **Method explanations:** use existing placeholder images beside short explanations. Label the methods in copy, explain the root-zone distinction, and note that hydroponics includes several designs. Do not create new diagrams or graphics.
- **Comparison table:** light surface with quiet separators and equal visual weight for both methods. On phones, render each criterion as a stacked pair from the same data, without requiring sideways page scrolling.
- **BlueZone rationale:** one flat navy feature panel, echoing the reference's dark systems section. Use a heading and short supporting paragraphs, not a new benefits-stat grid.
- **Homepage teaser:** low-height mist band, left-aligned heading and paragraph, with one button aligned alongside on larger screens and below on phones.
- **BioCube:** retain the large cutaway/specification split; follow it with five concise subsystem rows and the existing technical disclosure.
- **Technology:** existing placeholder image beside the explanation, followed by compact labelled capability rows. Use normal surfaces rather than adding another decorative card grid.

Reuse the current site typography and colour tokens. Do not apply a global palette or component rewrite. Existing `BentoTile` adds glass treatments automatically, so use a plain semantic panel for the new flat navy feature section.

### Target page structures

```text
Homepage
  Existing hero and navigation
  Problem: supply-chain explanation and carousel
  Shift
  Why Zero-Mile
  Produce enquiries
  Technology: explanation, placeholder visual, qualified capabilities
  Method teaser → dedicated comparison page
  BioCube: microgreens scope, configuration, subsystems, technical details
  Pilot: process and expanded success criteria
  Contact: simplified enquiry fields
  Footer: includes comparison-page link

Comparison page
  Compact site navigation
  Title, short introduction and captioned crop image
  How the roots receive nutrients: placeholder image and explanations
  Six-criterion comparison
  Why BlueZone uses aeroponics: navy feature panel
  Compare the whole system / measured pilot
  Four short answers
  BioCube and systems-enquiry actions; optional further reading
  Shared footer
```

## 3. Workstream 1: comparison page, navigation and homepage teaser

### Architecture and files

Create:

- `aeroponics-vs-hydroponics/index.html`: dedicated title, description, font loading, root element and module entry.
- `src/comparison-main.jsx`: mount the comparison page and shared CSS; do not import `App.jsx` or the homepage hero.
- `src/pages/ComparisonPage.jsx`: page composition using the public-copy baseline.
- `src/content/comparison.js`: only the public descriptions, six comparison rows and four FAQ entries. Keep internal source commentary out of this module.
- `src/components/ComparisonHeader.jsx`: compact navigation matching the site's logo, type and buttons, with links home, to BioCube and to enquiries. Use a wrapping layout that fits phones without introducing a second complicated menu.
- `src/components/SectionMethodTeaser.jsx`: homepage replacement.

Update `vite.config.js` to build both HTML entries. Verify that the output contains `dist/index.html` and `dist/aeroponics-vs-hydroponics/index.html`. This avoids requiring an SPA fallback for the comparison route. Confirm directory-index behaviour when hosting is known; do not invent a host-specific configuration during local work.

Use real anchors for navigation so open-in-new-tab, browser Back and direct visits behave normally. Add the comparison link to the footer, with a current-page indication where appropriate. Give shared footer section links a configurable home prefix: local `#...` links on the homepage, `/#...` links on the comparison page.

### Homepage teaser copy

**Heading:** Aeroponics vs hydroponics

> Both grow plants without soil. Aeroponics delivers water and nutrients as a mist to roots suspended in air. Explore how the methods differ and why BlueZone uses aeroponics.

**Action:** Compare the growing methods → `/aeroponics-vs-hydroponics/`

Keep `id="method"` here. Remove the full `SectionMethod` import/render from `App.jsx`. The detailed table and statistics should not remain mounted but merely hidden by CSS.

### Dedicated page copy and actions

Use the public draft in the review, excluding its internal source-notes table. Preserve:

- The distinction between nutrient mist and other hydroponic delivery methods.
- The note that aeroponics can be classified within the wider hydroponics family.
- All six criteria: nutrient delivery, root oxygen, water/nutrients, space/layout, everyday operation and results.
- BlueZone's integrated-system rationale and the requirement to compare whole systems.
- A generic measured-pilot explanation and the four FAQs.

Place optional university “Further reading” links in a quiet page-end section. They support general method descriptions; they must not be presented as validation of BlueZone performance. No client PDF downloads.

Use `/#biocube` for “Explore BioCube” and `/?enquiry=systems#get-in-touch` for “Discuss a growing project.” These navigation buttons do not imply that a functioning online submission service exists.

### Enquiry routing

Initialise homepage `enquiryType` from the exact query value `enquiry=systems`, defaulting to produce for absent or unknown values. Maintain the current same-page `data-enquiry` behaviour so subsequent Produce and Systems CTAs can override the initial selection.

The homepage's existing click handler only matches `a[href='#get-in-touch']`. It cannot carry state across a separate page load. Query-based initialisation must therefore ship with the new cross-page CTA, not as a later improvement.

### Completion checks

- Directly opening or refreshing the comparison URL loads the correct document, title and content.
- Comparison page imports do not include the homepage frame sequence or hero scroll effects.
- Teaser, footer links, home anchors and browser Back work.
- Systems CTA selects the systems enquiry fields; a later produce CTA switches back to produce.
- No full method table or research-stat cards remain on the homepage.

## 4. Workstream 2: clarify BioCube and explain its subsystems

Update `SectionBioCube.jsx` without replacing the catalogue artwork or duplicating capacity/specification sections.

### Introductory copy

> BioCube brings aeroponic growing, stacked racks, nutrient delivery, LED lighting, climate management and digital monitoring into a container-based system. The configuration shown is designed for microgreens. Crop selection, equipment and site requirements are agreed around each project.

Retain the heading “Meet BioCube” and the systems enquiry CTA.

### Configuration and source status

Keep all four current values together in a compact definition list:

| Public label | Value | Qualification |
| --- | --- | --- |
| Planting boxes | Up to 4,500 | Capacity stated in CAT p.4; not plants, retail packs or annual output. |
| Canopy area | 70 m² | CAT p.4; not container floor area. |
| Sections | 35 | CAT p.4 terminology. Do not rename as independently controlled zones. |
| Growing tiers | 5 | CAT p.4; do not substitute FARM's eight tiers. |

Visible note before the values:

> Proposed microgreens configuration, based on the supplied catalogue. Final specifications are confirmed for each project. Production output has not been verified.

Use one concise catalogue attribution and the internal ledger for exact file/page provenance. Keep units and context near component specifications. Rename “HVAC power” to “HVAC electrical power”; retain “Cooling capacity” separately. Keep the technical disclosure and its keyboard behaviour.

Preserve `#biocube`, `#specifications` and the existing `#capacity` compatibility anchor. Keep the configuration values visually subordinate to the product image; removing impact statistics does not mean removing legitimate hardware specifications.

### Replace the subsystem name list

| Subsystem | Public explanation | Source |
| --- | --- | --- |
| Growing racks | Stacked growing racks organise the growing area around a central access aisle. | CAT pp.4, 11 |
| Nutrient delivery | Automated dosing and irrigation deliver water and nutrients through aeroponic misting. | CAT pp.5, 9 |
| Climate and airflow | Integrated climate equipment and air distribution manage conditions within the growing area. | CAT pp.6, 8 |
| LED lighting | Grow lighting supports a planned crop cycle inside the container. | CAT pp.10–11 |
| Monitoring | Digital monitoring and preset growing strategies support day-to-day operation. | CAT p.13 |

Use labelled rows with restrained dividers. Keep all descriptions readable without hovering, clicking image hotspots or opening technical details.

Caption: “Catalogue illustration of the proposed microgreens configuration. Final equipment and layout may vary.”

Completion: every existing matched number is retained with its correct unit and configuration; five subsystem explanations are visible; no annual-output, 40-foot, certification or farm-scale claims have been added.

## 5. Workstream 3: Technology copy and root-zone visual

Update `SectionTechnology.jsx` and reuse the site's existing placeholder-image treatment on the comparison page.

### Capability wording

| Label | Replacement copy |
| --- | --- |
| Root zone | Nutrient mist is delivered to roots within a growing chamber. |
| Water and nutrients | Automated dosing and irrigation support the crop plan. |
| Climate | Climate equipment and airflow manage conditions in the growing area. |
| Light | LED lighting supports planned indoor crop cycles. |

Keep the mechanism explanation and practical statement that people seed, inspect, harvest, clean and maintain the system. Replace unconditional closed-loop recirculation and held-to-setpoint claims. Describe recirculation only as a possible configuration, not a verified feature of the pictured unit.

### Visual specification

Use an existing site placeholder image in the Technology section and on the comparison page where a visual is helpful. Label it as placeholder or illustrative imagery. Explain the aeroponics and hydroponics root-zone distinction in accessible text; do not create a new SVG, canvas illustration, AI-generated graphic or fabricated engineering visual.

The existing client crop imagery and BioCube cutaway continue to carry the site's product imagery. No new graphic asset is required for the technical explanation.

### Replace the Method footnote

> Crop performance and resource use depend on the configuration and operating conditions. Explore how aeroponics and hydroponics differ.

Link the second sentence to the new comparison page. Remove the old editorial explanation about supplier claims being excluded and research figures being displayed “in Method.”

Completion: the existing placeholder treatment is rendered with an honest caption; no AI-generated or fabricated graphic is added; no unsupported capability promises remain; the link opens the dedicated page.

## 6. Workstream 4: public-content cleanup

### Problem section

Remove `PRESSURES`, `EvidenceTile`, their evidence-strip markup and state/imports used only by that feature from `SectionProblem.jsx`. Keep the explanatory introduction and supply-chain carousel intact. Some hooks are shared with the carousel, so remove them only after checking remaining usage.

The removed panels contain 25.4%, ~70%, 19% and supporting claims such as the 7% change in freshwater availability. Do not replace them with different numbers. Close up the now-unused spacing beneath the carousel.

### Method section

Retire the existing full section after the teaser and comparison page work is complete. If `SectionMethod.jsx` becomes entirely unused, remove that file as an obsolete implementation; the source review already records its former content. Do not delete shared primitives such as `Stat` that other sections still use.

### Enquiry form

Replace the “Organisation type” sector select with:

- Label: “Project context (optional)”
- Control: short textarea
- Placeholder: “Tell us about your proposed site and growing project.”

Update the form state accordingly. Preserve Produce supply / Systems & pilot, project stage, crops, procurement, site/operator and funding fields. Preserve the explicit statement that entered details are not sent and the disabled submission button; this work does not create a backend.

### Somerset and produce copy

Replace the pea-shoot paragraph with:

> Discuss pea shoots and microgreens, including the pack formats and quantities your kitchen or customers need.

Remove Somerset mentions from active public copy. Keep produce descriptions framed as enquiry topics; avoid guaranteed availability or coverage. The unrendered historical About component does not require restoration or a new founder section.

### Concept-image treatment

| Location | Treatment |
| --- | --- |
| Hero image sequence | Add a discreet but readable “BioCube concept illustration” note outside the main headline. Keep the existing frame sequence, crop and scroll geometry. |
| Why Zero-Mile airport scene | Wrap the image in a figure with “Concept illustration of production close to demand.” Update alt text to identify the illustrative airport setting. |
| Shift siting image | Add a visible concept caption; retain the existing illustration-aware alt text. |
| Produce images | Retain the current illustrative-image captions. |
| BioCube cutaway | Use the microgreens/proposed-configuration caption specified above. |
| Footer landscape image | Add a readable concept caption in the footer content area rather than over the bright grass. Update alt text accordingly. |
| New comparison imagery | Reuse captioned existing placeholder/crop imagery; do not create new diagrams or graphics. |

A public caption must not imply a manufactured, commissioned or customer-installed system when the source only establishes an illustration. Keep captions visually quiet but large and contrasted enough to read; avoid tiny text over uncontrolled image regions.

Completion: no residual research/impact panels are visible; no active Somerset wording remains; the sector dropdown is gone; all relevant concept scenes are qualified. About, Impact and Applications remain unrendered.

## 7. Workstream 5: expand generic pilot criteria

Update `SectionPilot.jsx` using PILOT pp.10–11. Retain the existing Define → Design → Operate → Measure → Decide process and conditional-expansion wording.

Use eight short success measures:

1. Usable yield and crop quality.
2. Energy, water and nutrient use.
3. Labour and operating responsibility.
4. Cost per usable kilogram.
5. Procurement volume and cost displaced.
6. Reliability across repeated crop cycles.
7. Food-safety and quality requirements.
8. Fit with receiving, handling and kitchen workflows.

Update the Measure step to mention food-safety requirements and workflow fit, and use “usable kilogram” consistently. These are evaluation criteria, not statements of achieved compliance.

Check `SectionPilot.css` carefully: the sticky scene has fixed/minimum heights and hidden overflow. Adding two measures must not clip content or hide the final rows on short laptop screens. Keep the current interaction where it fits; use the already established static layout at viewports where the expanded content cannot fit comfortably. Reduced-motion visitors must retain access to every criterion and step.

Use no prospective partner names, logos, pilot location, facility expansion counts or commercial terms in the public pilot copy.

Completion: all eight criteria remain readable at every supported layout, including a short-height viewport and the reduced-motion variant; no certification or customer-relationship claim has been introduced.

## 8. Workstream 6: internal source record and product context

Create `docs/content/BLUEZONE-CONTENT-SOURCES.md`. This is an internal editorial record, excluded from frontend imports and public assets. Update `PRODUCT.md` to point to it and to the source review.

### Source register

Record the exact filenames, document IDs and PDF page counts:

| ID | File | Pages | Configuration/context |
| --- | --- | --- | --- |
| CAT | `BUEZONE CATALOGUE (3).pdf` | 15 | Proposed microgreens container |
| COMP | `BlueZone Aeroponics vs Hyrdroponics (1).pdf` | 6 | Comparative sales material; includes a different modular-farm reference |
| PILOT | `Bluezone Aeroponics Farming Proposal (2).pdf` | 12 | Proposed leafy-greens pilot and generic validation process |
| FARM | `Bluezon Aeroponics Farming - Leafy Greens Indoor Farm Solution (1).pdf` | 14 | Five-room facility design and private modelling |

Record the local source location and review date. Use PDF page order starting at 1. Keep the files in their supplied location; do not copy them into the build. Record the supplementary university references separately as method-definition sources, not BlueZone product evidence.

### Claim ledger schema

Each independently checkable claim gets:

| Field | Meaning |
| --- | --- |
| Claim ID | Stable ID such as `BC-CONFIG-001` or `PILOT-008`. |
| Configuration | Microgreens container, generic method, generic pilot, different model or business context. |
| Source and page | Exact document ID and PDF page, or named external definition reference. |
| Evidence status | `Source-stated design`, `Illustrative`, `General method`, `Unconfirmed`, `Conflicting`, or `Internal commercial`. |
| Publication decision | `Use with qualification`, `Use as general explanation`, `Hold`, `Internal only`, or `Remove from active copy`. |
| Approved public wording | Exact implemented text, including units and qualification. Use “None” for held/internal items. |
| Website location | Component/section/asset caption containing the wording, or “Not published.” |
| Decision basis | Reference to this user-authorised scope, any outstanding confirmation and date of review. |

“Approved public wording” means selected for this authorised website implementation; it does not imply a separate engineering, legal or client certification that has not occurred. Document any later client approval explicitly when it is actually received.

Minimum coverage:

- Each of the four BioCube configuration values and all eight numeric/count technical entries currently displayed, plus the monitoring description.
- Microgreens scope, five subsystem explanations and proposed-status caveat.
- Four Technology capabilities and the placeholder visual's limitations.
- Six comparison criteria, terminology clarification and public explanatory paragraphs/FAQs, grouped only where their source and meaning are shared.
- Each pilot success measure and the conditional-expansion statement.
- Crop/produce wording and the unresolved business-status/contact facts.
- Every concept-image caption and the actual asset provenance.
- Explicit hold/internal rows for annual output, comparative savings, 40-foot model applicability, certification, prospective counterparties and financial claims.

Example ledger entries:

| Claim ID | Configuration | Source | Evidence / decision | Approved public wording | Location |
| --- | --- | --- | --- | --- | --- |
| BC-CONFIG-001 | Microgreens container | CAT p.4 | Source-stated design / use with qualification | “Up to 4,500 planting boxes,” beside the proposed-configuration note | `SectionBioCube.jsx` |
| BC-MODEL-001 | Leafy-greens pilot; applicability to catalogue unit unknown | PILOT p.6 | Unconfirmed / hold | None; no 40-foot specification attached to the displayed microgreens model | Not published |
| PILOT-007 | Generic pilot | PILOT pp.10–11 | Source-stated evaluation scope / use as general explanation | “Food-safety and quality requirements” | `SectionPilot.jsx` |
| BUSINESS-001 | Produce operations | No confirmation in the four PDFs | Unconfirmed / remove from active copy | None; Somerset location claim removed | `SectionProduce.jsx` |

### Context and history updates

- `PRODUCT.md`: identify the four PDFs as the primary BlueZone-specific source set; distinguish container, pilot and facility models; record public-content boundaries, the comparison-page location and native cross-page enquiry behaviour. Keep the existing tone, audience and accessibility direction.
- `DESIGN.md`: append a scoped content-page/section supplement. The existing document describes the hero's achromatic overlay; distinguish that from the site's existing navy/mist/blue content palette. Record how the reference informs layout, image frames and the new flat feature panel without rewriting the hero specification.
- `src/assets/biocube/README.md`: preserve the actual original extraction provenance, then add the new catalogue edition/page against which the asset was checked. Do not falsely describe the old asset as newly extracted from the latest PDF.
- `BIOCUBE-CATALOGUE-IMPLEMENTATION-PLAN.md`: leave unchanged as historical documentation. The new ledger and product context identify it as superseded for current implementation decisions.
- `BLUEZONE-SOURCE-OF-TRUTH-REVIEW.md`: preserve as the dated review. Link from the ledger rather than rewriting its observations to pretend they describe the completed implementation.

## 9. Execution sequence and file map

Implement as a small set of reviewable stages. A stage is complete when its relevant behaviour and source wording have been checked.

| Stage | Files/work | Exit condition |
| --- | --- | --- |
| 1. Establish content record | New `docs/content/BLUEZONE-CONTENT-SOURCES.md`; identify approved wording and held claims | Every planned addition has a configuration and source reference; no unresolved model claim is required to proceed. |
| 2. Create second page | New HTML entry, comparison entry/component/data/header; `vite.config.js`; shared footer link context | Both public documents build and open directly with correct metadata and navigation. |
| 3. Connect the journey | New Method teaser; `App.jsx` query-based enquiry initialisation; footer comparison link | Homepage → comparison → systems enquiry works; old full Method section is removed from active rendering. |
| 4. Explain the product | `SectionTechnology.jsx`, `SectionBioCube.jsx` | Existing placeholder visual is captioned; capabilities are qualified; subsystem explanations and matched specifications are present. |
| 5. Clean public content | `SectionProblem.jsx`, `SectionProduce.jsx`, `SectionContact.jsx`, `HeroSection.jsx`, `SectionShift.jsx`, `SectionWhyZeroMile.jsx`, `SectionFooter.jsx` | Residual stat panels/categories/Somerset wording removed; relevant imagery captioned. |
| 6. Complete pilot and context | `SectionPilot.jsx`, targeted `SectionPilot.css` adjustments, `PRODUCT.md`, `DESIGN.md`, asset README, final ledger wording | Expanded criteria fit; context and provenance match what is actually shipped. |
| 7. Verify and hand off | Production build, lint, focused browser checks, final diff/content review | Both pages pass the checks below; report any host-dependent URL behaviour that cannot be verified locally. |

Use existing styling utilities and small local components. Add scoped CSS only where needed for the comparison presentation or pilot fit. No dependency additions or new image/graphic assets are expected. Avoid general refactors of the hero animation, shared primitives or unused alternate app files.

## 10. Verification and definition of done

### Content and source fidelity

- Cross-check each retained BioCube value against the ledger and source-review table, including units and qualifiers.
- Confirm that technical configuration numbers remain while outcome/impact statistic panels are removed.
- Confirm that the comparison page contains the public copy only: no editorial notes, internal calculations, customer names/logos, investment economics or supplier guarantees.
- Search active public components and built page content for Somerset, retired section links, removed percentages and placeholder instructions. Treat unused historical files separately from shipped content.
- Check that docs/PDFs/internal source records are not included in frontend imports or copied to `dist`.

### Behaviour

- Open both routes directly, refresh, navigate forward/back and use footer links from each page.
- Check systems enquiry from the comparison page, default produce enquiries, and switching type after arrival.
- Check `#method`, `#biocube`, `#specifications` and `#capacity` anchors.
- Check technical disclosures and FAQs by keyboard, visible focus, and meaningful link labels.
- Confirm the disabled form continues to disclose that data is not sent.

### Visual and accessibility checks

- Review at 375, 768, 1024 and 1440px widths, plus a short laptop viewport such as 1366 × 768.
- Check 200% zoom, no document-wide horizontal overflow, readable placeholder captions and comparison rows.
- Check normal and reduced motion, including the existing homepage hero and expanded pilot measures.
- Check text/background contrast and minimum 44px touch targets for principal buttons/disclosures.
- Compare the new layouts against both the supplied reference and the existing site: image/text proportions, whitespace, typography, colour and caption treatment should form one coherent website.

### Build and handoff

Run `npm run lint` and `npm run build`. Smoke-test both generated HTML entries with the production preview. Use focused browser verification for this change; no new test framework or implementation-mirroring content tests are needed.

The completed handoff should identify the two page URLs, summarise the content cleanup, link the updated internal ledger and list any facts still withheld pending confirmation. The remaining contact/model/business questions do not prevent implementation using the safe choices in this plan.
