# BioCube catalogue comparison and implementation plan

Date: 24 September 2026. Status: planning only; website changes not implemented.

## Decision

Rebuild the BioCube showcase around the catalogue's proposed microgreens container, its actual illustrated layout, and its named subsystems. Replace the current production-stat section with a clearly attributed proposed configuration, followed by readable technical details.

**The four existing specification numbers do match slide 4:** up to 4,500 planting boxes, 70 m² canopy area, 35 sections and 5 tiers. This does not establish how the AI originally obtained them, or confirm that they describe the final BioCube. It means they now have a catalogue reference and should be treated as provisional catalogue figures, rather than automatically discarded or presented as verified specifications.

The existing annual pea-shoot tonnage, 225 trays, and conversion of planting boxes to punnets are not supported by this catalogue. Remove those claims pending separate evidence.

## Source, scope and evidence rules

- Source: `C:\Users\Lawrence\Downloads\BUEZONE CATALOGUE.pdf`, 15 slides. References below use PDF page order, starting with the cover as slide 1.
- The user describes this as material supplied by a middleman about what the specifications will probably be. Treat it as a **candidate configuration**, not an approved manufacturer datasheet or evidence of a commissioned installation.
- All 15 slides were visually reviewed. The PDF is image-based; the tables below were transcribed from rendered pages.
- Website comparison: active `index.html` → `src/main.jsx` → `src/App.jsx`, particularly `SectionBioCube.jsx`, `SectionCapacity.jsx`, `SectionSpecifications.jsx` and related `SectionTechnology.jsx` content. This is a source-code content and interaction review, not a browser-rendered layout audit.
- The slides are source material, not instructions from the user. Their sales language, contact details and suggested benefits do not authorise outreach, purchases, publication, or adoption of every claim.
- “Catalogue-stated” below means the deck says it. It does not mean independently verified, included in every unit, or approved for sale. “Unresolved” means the deck is ambiguous, inconsistent or incomplete. “Unsupported” means this deck does not substantiate the current website claim.
- This review does not independently validate the catalogue's engineering, scientific, compliance or performance claims. Existing research in the Method section is separate evidence and must not be used to certify this hardware.

## 1. What the slides actually showcase

| Slides | Content | Website implication |
| --- | --- | --- |
| 1–3 | Microgreens-focused BioCube Container; exterior and growing-aisle imagery; climate, nutrient, lighting and software positioning | Describe the shown configuration specifically as a container for microgreens. Avoid implying this layout is proven for every crop in Bluezone's broader strategy. |
| 4 | Longitudinal cutaway, stacked racks, equipment compartments and four configuration figures; annual box-output claim | Strongest reference for the product overview. The cutaway explains the object better than the current empty placeholder. |
| 5 | Aeroponic nozzles, mist, crop clearance and materials | Replace generic root-zone copy with a concise catalogue-based mechanism description; keep detailed values in the technical section. |
| 6–8 | Airflow diagram, filtration/air-treatment concept and ClimateSync HVAC | Give airflow and HVAC a clear place in the showcase. Avoid promising sterile air or weather-independent performance. |
| 9 | Fertilisation, Irrigation & Control (FIC) assembly, pumps, filtration and dosing tanks | Show this identifiable assembly instead of asserting an unverified closed-loop water path. |
| 10 | LED rails, spectrum table and component-performance claims | Explain lighting at rack level. Separate component specifications from crop-quality and savings claims. |
| 11 | Top-down arrangement, racks, growing area, electrical table and tray illustration | Best source for explaining spatial layout and distinguishing installed power from operating consumption. The slide itself says the drawing is illustrative and omits some equipment. |
| 12 | Arugula, red cabbage sprout, basil, Siberian kale, pea sprout and cilantro | Optional crop examples, explicitly catalogue examples rather than tested recipes, guaranteed yields or currently available produce. Its note describes optimal outcomes, trained operation, a fully planted farm and experimental reference data. |
| 13 | SaaS/IoT dashboards and device imagery; presets and monitoring | Supports a monitoring/software concept. Displayed readings, dates, water totals and camera views are illustrative, not pilot results or hardware guarantees. |
| 14–15 | Turnkey/plug-and-play positioning and contact slide | Do not convert marketing language into immediate commissioning promises, quality guarantees or new website contact details. |

### Visual interpretation

The useful story is a container with two rack runs around a central access aisle, an HVAC compartment at one end and a FIC assembly at the other, supported by lighting and software. That arrangement is visible in slide 11; slides 4 and 8–10 provide supporting views. Equipment left/right changes with viewpoint, so labels must follow each specific image.

Use the exterior to establish the object, the cutaway to explain its organisation, and subsystem details to explain operation. The deck's polished imagery is not proof of a manufactured unit. Caption it as catalogue imagery of a proposed configuration until its provenance is established. Do not infer missing pipe routes, exact component positions or dimensions from perspective artwork.

## 2. Current placeholder versus catalogue

### BioCube showcase: `src/components/SectionBioCube.jsx`

| Current element | Assessment against slides | Change |
| --- | --- | --- |
| Generic “modular, controlled-environment growing system” | Broadly supported by slides 3 and 11, but misses the microgreens configuration | Introduce a proposed containerised microgreens system and name its integrated subsystems. |
| Ships, connects to power/water, then starts producing on a fixed cycle | Slide 14 uses plug-and-play language, but gives no commissioning conditions or universal crop cycle | Replace with site requirements and commissioning to be agreed. Remove immediate-production implication. |
| Climate hotspot: temperature, humidity and CO₂ held to setpoint, independent of outside weather | Slides 6 and 8 describe environmental control, but no external operating envelope or control tolerances | Describe HVAC and airflow as proposed features; remove absolute weather independence. |
| Aeroponic root-zone hotspot | Slide 5 supports nozzle-delivered nutrient mist | Retain mechanism with catalogue attribution. Do not invent timing settings from the vague interval statement. |
| LED hotspot: spectrum/photoperiod tuned per crop | Slides 3, 10 and 13 support tailored lighting and planting strategies | Retain qualified lighting concept; do not imply independently adjustable spectral channels or validated recipes without confirmation. |
| Irrigation hotspot: unused water captured and recirculated | Slide 9 describes FIC, filtration and delivery; the full return/reuse path is not specified | Rename to “Nutrient delivery” or “Fertilisation and irrigation.” Hold closed-loop claim for a plumbing diagram. |
| Growing zones: different crops/stages run simultaneously | Racks/sections are shown, but independent environmental zones are not established | Replace with “Growing racks.” Distinguish physical rack sections from independently controlled crop zones. |
| Controls: setpoints, cycle state, alarms, on-site/remote access | Slide 13 supports monitoring and presets, and shows multiple devices; alarm behaviour and remote-control permissions are not documented | Describe monitoring/presets. Confirm alerts, remote control, offline operation and subscription scope before promising them. |
| Modularity and scalability hotspots | Slides 3 and 11 describe scalability; these are commercial concepts, not accurately located parts | Move to brief supporting copy, subject to site/service capacity. Remove their arbitrary image pins. |
| Eight percentage-positioned pins over an empty image | Coordinates have no relationship to supplied equipment | Replace the placeholder with sourced imagery and rebuild annotations only after the image/crop is chosen. |
| “System specifications” anchor | Useful navigation | Retain `#specifications`; change visible label to “Proposed specifications.” |

### Configuration and capacity

| Current value/copy | Catalogue evidence | Recommended treatment |
| --- | --- | --- |
| Up to 4,500 planting boxes | Slides 4, 5 and 11 | Retain as proposed planting-box capacity, with slide reference and model status. Do not rename as plants, trays or retail packs. |
| 70 m² canopy area | Slide 4 | Retain as catalogue-stated canopy area. It is not container footprint or usable floor area; ask how it is calculated. |
| 35 growing sections | Slide 4 says “35 Sections” | Retain as “Rack sections” only after terminology is confirmed; until then use “Sections (catalogue terminology).” Do not infer their arrangement from 35 and 5. |
| 5 vertical tiers | Slide 4 | Retain as proposed tier count. Do not calculate output by multiplying tiers. |
| 15.8–17.3 tonnes/year; footnote 15,840–17,280 kg/year | No such mass yield in deck | Remove from `SectionCapacity.jsx`, including the “current modelling” attribution. Reintroduce only with an actual crop model and its inputs. |
| 225 growing trays | Not stated in deck | Remove. A pictured tray does not establish the total number per unit. |
| 4,500 punnets per full cycle | Deck says planting boxes, not retail punnets, and does not define a full cycle | Remove retail-pack/cycle interpretation. Keep only the sourced planting-box capacity. |
| 365 days controlled production | Year-round production is a design claim on slide 11, not measured availability | Replace metric with a qualified year-round-growing design statement; no uptime or uninterrupted-output guarantee. |
| “Engineered for density”; output per floor area treated as a function of tiers | Stacking is shown, but output also needs a substantiated crop model | Use “Proposed configuration.” Explain rack arrangement without claiming yield from geometry. |
| Cutaway placeholder asking for dimensions | Slides 4 and 11 provide illustrations, but no dependable external container dimensions | Use a labelled catalogue cutaway. Do not add standard-container dimensions from assumption. |

The existing generic qualification beneath the spec cards is insufficient: a reader should see the source and provisional status before reading the numbers.

## 3. Technical extraction for implementation

This is an internal content inventory, not a direction to publish every row. Publish clear configuration/component information under a visible proposed-specifications label; hold ambiguous values and performance claims for clarification.

### Growing hardware: slides 4, 5 and 11

| Field | Catalogue value | Handling |
| --- | --- | --- |
| Planting boxes | Up to 4,500 per container (slide 4); 4,500 in slides 5/11 | Candidate overview row; preserve “up to.” |
| Canopy / sections / tiers | 70 m² / 35 / 5 (slide 4) | Candidate overview rows; request section and canopy definitions. |
| Mist particle size | 20–60 µm (slide 5) | Candidate aeroponics detail; stated specification, not measured droplet distribution. |
| Nozzle quantity | 460 pcs (slide 5) | Candidate detail. |
| Crop grow height | 311 mm (slide 5) | Preserve field meaning; confirm whether usable clearance or another dimension. |
| Pump pressure | 30–43.5 PSI (2–3 BAR), slide 5 | Preserve paired figures as catalogue-stated; do not silently improve precision. |
| Misting interval | Less than 5 seconds (slide 5) | Hold: on-time, off-time or interval between starts is unspecified. |
| Pots / pipes | Food Grade Polycarbonate / Food Grade Polyvinyl Chloride (slide 5) | Attribute material descriptions; do not imply certified food-contact compliance without documentation. |
| Rack material | “Galvanized Material” (slide 5); “Powder Coated Steel” (slide 11) | Hold a definitive material claim; ask if these refer to different components or a combined treatment. |
| Growing-area space allocated | Printed “9,629 x 2,232mm” (slide 11) | Likely millimetres for both dimensions, but confirm. Never label this external container size. |
| Growing rack 1 | 9,250 × 813 × 2,550 mm (slide 11) | Candidate detail after dimension-order/layout confirmation. |
| Growing rack 2 | 7,500 × 813 × 2,550 mm (slide 11) | Candidate detail after dimension-order/layout confirmation. |
| Illustrated tray dimensions | 730 mm, 400 mm and 23 mm (slide 11) | Identify as dimensions marked on the illustration, pending exact tray/part definition. Do not derive planting-box counts by counting artwork. |

### Electrical and HVAC: slides 8 and 11

| Field | Catalogue value | Handling |
| --- | --- | --- |
| Container total power | 32 kW (slide 11) | Can appear as “Catalogue-listed total power: 32 kW,” provisional. Confirm whether installed/connected/rated load. This is not measured energy use. |
| LED-off value | “Total Power Consumption Per Hour (with LED off)” = 22.4 kW (slide 11) | Hold public consumption claim: the time wording and unit require clarification, and no duty cycle is supplied. Do not convert to operating cost or daily kWh. |
| Growing-light power | 9.6 kW; 220 V, 50 Hz (slide 11) | Candidate component row. 32 − 9.6 = 22.4 is arithmetically consistent, but does not validate consumption. |
| Working lights | 20 W × 3 pcs (slide 11) | Optional detail; confirm inclusion in total load. |
| HVAC total power | 16.6 kW (slides 8/11) | Component power, not the whole container. |
| HVAC supply | 380 V; 25 A; 50 Hz (slide 8) | Attribute to HVAC only. Phase, protection, supply tolerances and regional configurations are unspecified. |
| HVAC cooling capacity | 42 kW (slide 8) | Cooling capacity, not electrical input or energy consumption. |
| Outlet air volume | 5,200 CMH (slide 8) | Preserve supplier unit until clarified for public wording. |
| Fresh air | 2,000 CMH @ 100% on (slide 8) | Hold operating interpretation until “100% on” is defined. |
| Space temperature range | 5–28°C (slide 8) | Catalogue range; not proven crop optimum, control accuracy or outside-air operating range. |

### Nutrient system, lighting and software: slides 9, 10 and 13

| Field | Catalogue value | Handling |
| --- | --- | --- |
| Irrigation pump | “2.2KW Shift Work” (slide 9) | Record 2.2 kW as stated; clarify “Shift Work,” pump count and duty cycle before publishing an operating specification. |
| Sterilizing channel | “80W UV Full Spectrum” (slide 9) | Hold efficacy and spectrum interpretation. Component wording alone does not establish treatment performance. |
| Fertilising channel | 3 fertiliser tanks, 1 acid tank (slide 9) | Candidate detail. Tank volumes and dosing precision are absent. |
| Chiller temperature range | 12–25°C (slide 9) | Attribute to the chiller; do not confuse with room temperature range. |
| Oxygen enrichment | “Venture HAFOE” (slide 9) | Unresolved term. Do not silently change it to “Venturi” or invent an acronym expansion. |
| Total LED spectrum | 380–730 nm (slide 10) | Hold exact overall range until reconciled with far-red row. |
| LED band rows | UV 380–390; blue 420–480; red 620–670; far red 710–750 nm (slide 10) | Internal reference. The 750 nm endpoint exceeds the stated 730 nm total. |
| LED performance | PE 2.81 µmol/J; WPE 65.9% (slide 10) | Component claims needing a fixture datasheet and test basis; not whole-system efficiency. |
| SaaS and IoT | Connected devices/sensors, preset planting strategies, real-time monitoring (slide 13) | Proposed capabilities. No confirmed licence, fees, alert specification, data retention, integrations or offline mode. |

### Catalogue claims to keep out of the public specifications for now

- **234,000 boxes annual yield** (slide 4): source exists, but crop, box definition, cycle length, rejects and downtime are missing. 234,000 ÷ 4,500 = 52 full-capacity equivalents per year is an inference only, not evidence of weekly harvests. Do not turn it into kilograms, retail sales or revenue.
- **30% more annual yield** (slide 5), **35% fertiliser savings / 40% water savings** (slide 9): no baseline or test protocol supplied. Keep out of headline statistics and the existing method-level evidence strip.
- **30% higher terpene content / 30% LED energy savings / 50,000 hours guaranteed use** (slide 10): no comparison, test report or contractual warranty terms supplied. Do not publish as Bluezone results or warranty.
- **GAP/GMP compliance** (slide 3): deck assertion without certificates, applicable scope or audit records. Do not add compliance badges.
- **Air sterilisation / elimination of bacteria and viruses / contaminant-free air** (slides 6–8): hold performance and safety claims pending equipment documentation and test evidence.
- **Photo-hydroxylation / photon hydroxylation / photohydrogen** terminology, the claimed 100–300 nm range, density of 10^11/m³ and “40 times/hr” (slides 7–8): terminology and measurement definitions require supplier clarification. Do not recast “40 times/hr” as a verified air-change rate.
- **Better flavour/nutrition, energy efficiency outperforming natural sunlight, and guaranteed consistent crop quality** (slides 10/14): omit comparative or guaranteed outcomes without evidence.

## 4. Proposed showcase and specifications structure

### A. BioCube introduction and product views

Keep `#biocube`, the existing site typography and the established visual identity. This is a content and product-explanation correction, not a whole-site rebrand.

Suggested copy:

> **Meet BioCube**
>
> A proposed containerised growing system for microgreens. The supplied catalogue brings together aeroponic nutrient delivery, stacked growing racks, LED lighting, climate control and digital monitoring. Final equipment and site requirements are to be confirmed.

Use one large product view with three explicit choices: **Exterior** (slide 2), **Inside the container** (slide 4), and **Layout** (slide 11). Default to the cutaway because it explains the system. Use clean source exports where available; request original images rather than publishing tiny embedded tables, slide slogans or screenshot text. Any diagram redrawn from the deck must be labelled schematic and must not invent hidden equipment.

Place a visible caption next to the image: “Catalogue illustration of the proposed configuration. Final equipment and layout may change.” Carry forward slide 11's omitted-equipment qualification on that view.

### B. Replace eight arbitrary hotspots with five clear explanations

1. **Growing racks**: the catalogue shows stacked growing positions around an access aisle (slides 4/11).
2. **Aeroponic nutrient delivery**: the proposed FIC system combines nutrient dosing, filtration and mist delivery (slides 5/9).
3. **Climate and airflow**: the proposed HVAC assembly serves the growing area through the illustrated air-distribution arrangement (slides 6/8).
4. **LED lighting**: grow lights run along the racks; detailed lighting configuration remains subject to confirmation (slide 10).
5. **Monitoring and crop settings**: the catalogue describes connected monitoring and preset planting strategies (slide 13).

Only the first four may receive physical annotations, and only on a view where their location is identifiable. Monitoring should use the software image or a text explanation, not a pretend physical location on the container. Air-treatment details can sit under climate as an unresolved proposed feature rather than receiving a performance-led headline.

Keep explanations readable without interacting with an image. On mobile, use stacked labelled rows or accessible disclosure controls. If selectable views or hotspots remain, provide visible keyboard focus, selected-state semantics, sufficiently large touch targets, and an equivalent text control list. Cropping must not move pins away from their equipment. Avoid automatic image rotation.

### C. Replace Capacity with one proposed-configuration overview

Remove the current `SectionCapacity` production-stat presentation. Bring the four catalogue-backed geometry/capacity values into `#specifications` once, avoiding duplication across two sections.

Suggested heading: **Proposed BioCube specifications**.

Visible introduction before any values:

> Based on the supplied BioCube catalogue. These figures describe a proposed configuration and remain subject to supplier confirmation. Production output has not been verified.

Use a compact definition list/table for planting boxes, canopy area, sections and tiers. Follow with grouped technical details: **Growing hardware**, **Climate**, **Nutrient delivery**, **Lighting and electrical**, and **Monitoring**. Group only publishable rows from the inventory above; unresolved rows stay in this plan until clarified. A plain table supports scanning better than repeating large decorative number cards.

Place source references beside each group, including slide numbers and provisional status. Retain an internal source record even if a public PDF download is not provided. Do not add a dead download button or publicly ship the entire provisional catalogue by default.

End with **Discuss a BioCube system** linking to `#get-in-touch` with `data-enquiry="systems"`, matching the existing enquiry-routing logic. Nearby copy can explain that site utilities and final configuration are discussed during a systems enquiry. Avoid suggesting a final datasheet is already available.

## 5. Implementation checklist by file

| Priority | File | Work |
| --- | --- | --- |
| P0 | `src/components/SectionCapacity.jsx` | Remove unsupported tonnage, modelling attribution, 225 trays, punnet/cycle conversion and 365-day metric. Retire the section once supported configuration values are consolidated. |
| P0 | `src/components/SectionBioCube.jsx` | Qualify proposed status; rewrite feature data using slide evidence; remove plug-in-and-produce, independent zones and unsupported recirculation/alarms claims. |
| P0 | `src/components/SectionSpecifications.jsx` | Preserve the four sourced numbers with prominent provisional attribution; replace density/output assertion; prevent power/yield reinterpretations. |
| P1 | `src/components/SectionBioCube.jsx` and `src/assets/` | Implement exterior/cutaway/layout views using traceable assets, captions and meaningful controls. Replace arbitrary coordinates only after asset selection. |
| P1 | `src/components/SectionSpecifications.jsx` | Add grouped specifications and source references; suppress unresolved rows. Add systems enquiry CTA. |
| P1 | `src/App.jsx` | Remove the retired Capacity import/render; keep BioCube directly followed by Specifications. Preserve both section anchors. Check for `#capacity` links before retiring the anchor. |
| P1 | New shared data module, e.g. `src/data/biocube.js` | Store each field's label, value, unit, scope, source slide, status and public-visibility decision. Keep catalogue claims distinct from validated measurements. Both sections should read the same values. |
| P1 | `src/components/SectionTechnology.jsx` | Reconcile definitive closed-loop and exact-control claims with the unresolved hardware evidence. General explanations should remain conditional and distinct from BioCube capabilities. Preserve exclusion of supplier efficiency claims. |
| P2 | `src/components/SectionMethod.jsx`, related BioCube mentions, `PRODUCT.md`, `BRAND-CONTENT-AUDIT.md` | Check consistency without expanding into a research rewrite. Record this catalogue as a provisional source; do not overwrite prior strategy documents or present method research as BioCube validation. |

Do not change the microgreens produce catalogue to match slide 12 automatically: system crop examples and produce currently offered for supply are different things. Do not change contact information solely because slide 15 lists it.

## 6. Questions to resolve before final specifications

These questions are a handoff list for the middleman/supplier, not blockers to removing unsupported website claims or drafting the revised showcase.

1. Which manufacturer, exact model and revision does this deck describe? Which features are standard, optional or still conceptual? Is it the configuration Bluezone intends to offer?
2. Can they provide an approved datasheet, equipment schedule, external dimensions, shipping/operating mass, service clearances and installation/commissioning requirements?
3. What do planting box, tray and section mean? How do 4,500 boxes, 35 sections, 5 tiers and 70 m² relate? What usable crop clearance does 311 mm represent?
4. What is the whole-container electrical requirement, including phase and peak demand? What do 32 kW and 22.4 kW represent? What measured kWh/day applies under a stated crop and climate schedule?
5. What are water quality/flow/pressure requirements, drain requirements, tank capacities, return-water treatment, consumable requirements and CO₂ supply needs?
6. Which rack material/finish is correct? Are the dimensional labels and illustrated tray dimensions accurate for the quoted unit?
7. What does the mist interval mean? What is “Venture HAFOE”? What air-treatment technology is actually supplied, with what verified performance and maintenance requirements?
8. Which LED fixture/datasheet applies, what is its correct spectral range, and which controls and warranty terms are included?
9. Is there a crop-specific production model or trial report supporting annual output, including cycle length, box yield, saleable fraction, downtime and labour? Is there any evidence for the website's pea-shoot tonnage or 225 trays?
10. What software, sensors, cameras, alerts, remote controls, subscription costs and offline functions are included? Are the slide 13 screens actual software or mockups?
11. Can they supply original imagery and identify renders versus installation photographs? Which schematic elements are omitted? Is reuse on the website permitted?
12. Are the compliance and food-contact assertions supported by current, applicable documentation?

## 7. Acceptance criteria for the later implementation

- Every public numerical BioCube claim has a slide/datasheet reference and an explicit evidence status. Provisional status is visible before the values, not buried in a footnote.
- No unsupported annual tonnes, 225-tray total, retail-punnet conversion or assumed crop cycle remains in active components.
- The four slide-4 figures retain their original scope and terminology; canopy area is never presented as footprint.
- Power input, cooling capacity and energy consumption remain distinct. No invented electricity cost, kWh/day, phase requirement or external dimensions.
- Supplier savings, sterilisation, compliance and crop-quality claims are not presented as established Bluezone results.
- Product imagery is labelled accurately, has useful alt text, and contains no misleading equipment annotations or invented dimensions.
- Desktop and mobile users can access the same explanations with keyboard/touch controls; important text is not embedded only in images.
- `#biocube` and `#specifications` navigation works; the systems CTA opens the correct enquiry mode; any retired Capacity links are handled.
- Run the existing build and lint checks after code changes, then inspect the two sections at desktop and phone sizes. No application build was needed for this Markdown-only deliverable.

## Recommended sequence

First remove unsupported output claims and add provisional source labels. Next replace the empty showcase with the catalogue-based product story and consolidate the specifications. Finally add only those detailed technical rows whose meaning and applicability have been confirmed. Confirmation should increase specificity, not retroactively justify guessed values.
