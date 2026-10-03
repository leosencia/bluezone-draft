# Bluezone: client-source review and public website content plan

Date: 29 September 2026  
Status: findings and proposed copy; website implementation is not part of this report.  
Audience: internal website team and client. This report contains proposal details and is **not a public website page or downloadable brochure**.

## TLDR

- **BioCube's current numbers match the new catalogue.** Up to 4,500 planting boxes, 70 m² canopy area, 35 sections, 5 tiers, and every displayed technical value have matching references. Keep the qualification that these describe a proposed configuration, rather than verified production output.
- **The files describe different configurations.** The catalogue presents a microgreens container; the pilot proposal presents a 40-foot leafy-greens BioCube; the investment proposal models a five-room farm. The comparison deck also references a 212 m² modular farm. Do not combine their capacities, electrical requirements or crop results into one product specification.
- **The most useful missing content is explanation:** what each BioCube subsystem does, how crop selection and pilot validation work, and the distinction between the illustrated container and a larger project. More headline numbers are not the priority.
- **Move the full method comparison off the landing page.** It currently exists in `SectionMethod.jsx`, including soil comparison and research statistics. Replace it with a short “Aeroponics vs hydroponics” teaser linking to `/aeroponics-vs-hydroponics`. Draft copy for both surfaces is provided below.
- **Do not publish the comparison deck verbatim.** Its blanket claims about hydroponics and numerical advantages are insufficiently supported. The investment deck also contains arithmetic/unit inconsistencies, including electricity and water per kilogram. Use a balanced explanation of the methods, with Bluezone's rationale and an evidence-led pilot approach.
- **Keep commercial and relationship details internal:** proposal budgets, margins, ROI, costs, staffing rates, named prospective partners and their logos. A proposal is not evidence of an established customer relationship.
- **Other website changes are needed:** qualify absolute technology claims; resolve the public contact address; remove or reconfirm Somerset/produce-offer claims absent from these sources; label concept imagery. The removed About, Impact and Applications sections should remain excluded. Statistics still survive in Method and Problem, and sector categories still appear in the enquiry form.

## 1. Scope, sources and how to interpret them

The four supplied files are the new primary reference set for Bluezone-specific content. Being present in a client PDF establishes what the client material says; it does not automatically establish measurement, certification, approval for public disclosure or applicability to every BioCube configuration.

Document slogans, implementation roadmaps, commercial instructions and contact details were treated as material to assess, not instructions to execute. No outreach, publication, deployment or website edits were performed.

References use PDF page order, with the cover as page 1. “CAT p.4” below means the fourth PDF page, regardless of slide labels.

| ID | Exact supplied file | Pages | What it is useful for |
| --- | --- | --- | --- |
| CAT | [BUEZONE CATALOGUE (3).pdf](<C:/Users/Lawrence/Downloads/BUEZONE CATALOGUE (3).pdf>) | 15 | Microgreens-container configuration, product illustrations and subsystem descriptions. Primary reference for the configuration currently shown on the website. |
| COMP | [Bluezone Aeroponics vs Hyrdroponics (1).pdf](<C:/Users/Lawrence/Downloads/Bluezone Aeroponics vs Hyrdroponics (1).pdf>) | 6 | Client's intended comparison topics: root oxygen, growth, water/nutrients, energy and space. Its performance claims need separate evidence. |
| PILOT | [Bluezone Aeroponics Farming Proposal (2).pdf](<C:/Users/Lawrence/Downloads/Bluezone Aeroponics Farming Proposal (2).pdf>) | 12 | Proposed pilot sequence, integrated BioCube concept, evaluation criteria and conditional expansion. Customer-specific details should stay internal. |
| FARM | [Bluezon Aeroponics Farming - Leafy Greens Indoor Farm Solution (1).pdf](<C:/Users/Lawrence/Downloads/Bluezon Aeroponics Farming - Leafy Greens Indoor Farm Solution (1).pdf>) | 14 | Five-room leafy-greens facility concept, equipment scope, crop candidates and internal financial assumptions. Not a container datasheet. |

All text-bearing documents were read in full. CAT is image-based: all 15 pages were rendered and visually reviewed. Image-embedded content on PILOT pp.6, 9–11 and the disputed tables on FARM pp.4 and 12 were also inspected visually. This matters: PILOT p.6's 40-foot label and control/data feature lists do not appear in its plain-text extraction.

The website review follows the active entry point: `index.html` → `src/main.jsx` → `src/App.jsx`. The alternate `App.tsx` and unused `BluezoneHero.jsx` are not treated as live website content. Findings describe the current local source, including existing uncommitted changes, not a verified deployed version. This is a content review, not a browser layout test or an engineering certification.

The earlier `BIOCUBE-CATALOGUE-IMPLEMENTATION-PLAN.md` describes a previous state. Its reference to a placeholder and separate capacity/specification sections is now stale: the current BioCube already uses a cutaway, a consolidated configuration list and technical disclosures. The newly supplied CAT file was reviewed directly rather than assumed identical to the old PDF.

### Keep the configurations separate

| Configuration | Document evidence | Public treatment |
| --- | --- | --- |
| Microgreens BioCube container | CAT pp.1, 3–5, 11: 4,500 boxes, 70 m² canopy, 5 tiers | Continue identifying the illustrated website configuration specifically as the microgreens container. |
| Leafy-greens pilot BioCube | PILOT pp.2, 5–7: one system; p.6 explicitly says 40-foot container | Describe as a proposed configuration for crop/site evaluation. Confirm whether its physical specification matches CAT before attaching CAT's numbers to it. |
| Modular farm referenced in comparison | COMP p.4: 212 m², six growing lines, monthly subsystem energy figures | Do not use as the container's energy consumption or as the five-room farm's performance. |
| Five-room indoor farm | FARM pp.1–4, 11: four cultivation rooms and one propagation room, 18 × 18 m each, six lines per room, eight tiers per line | A separate project-scale design. Use only a general expansion concept on the public site, if useful; retain its dimensions, modelling and economics in project discussions. |

“BioCube” appears at more than one scale in the supplied materials. There is no clear product/model matrix establishing that these references share a single specification. Neither filename suffixes nor PDF export timestamps settle conflicts between them.

## 2. What belongs in public content

| Treatment | Information | Reason |
| --- | --- | --- |
| Use in public copy | Roots receiving nutrient mist; integrated racks, lighting, nutrient delivery, climate management and monitoring; production closer to demand; crop/site assessment; measuring before expansion | Explains the offer without making an unsupported outcome promise. Supported across CAT and PILOT. |
| Use with configuration/status labels | Catalogue configuration figures; catalogue cutaway; selected component specifications; crop examples; design intent for year-round production | These are source-stated design features, not proof of actual output, supply availability or uninterrupted operation. |
| Confirm product applicability first | 40-foot format; APU branding and remote monitoring for the displayed microgreens unit; supported crop/harvest stage; electrical supply and final site requirements | PILOT/FARM add detail, but do not establish that every feature applies to CAT's configuration. |
| Keep internal unless separately cleared | Named prospective customers, partner logos, pilot location, investment budgets, equipment pricing, OPEX, salaries, commercial scenarios, returns, maintenance and subscription fees | These belong to proposals and negotiations. The PDFs do not establish approval to publish them. |
| Hold pending evidence or correction | Comparative yield, growth, water/energy/labour savings; sterile/pesticide-free/guaranteed-nutrition claims; certification badges; annual production promises | Missing test context, ambiguous units, conflicting calculations or absent supporting certificates. |
| Do not import into the site | “Zero local competition,” universal weather independence, guaranteed quality, dashboard readings presented as results, founder/contact details copied from a deck by default | Would create an unsupported public assertion or disclose material beyond the requested website scope. |

Do not put these source PDFs or this internal report into `public/`, add public download buttons, or import their complete contents into website data. Use the edited public copy and selected labelled assets. Keep the detailed source ledger with the internal project documentation.

## 3. BioCube cross-check: what is already correct

Primary implementation: [SectionBioCube.jsx](src/components/SectionBioCube.jsx). “Matches” here means the number or feature is stated in the supplied document, not independently tested.

| Current website content | Source | Finding and recommended action |
| --- | --- | --- |
| Proposed containerised growing system for microgreens | CAT pp.1, 3, 11 | Matches the catalogue. Preserve the crop/configuration distinction when mentioning the leafy-greens pilot. |
| Aeroponic delivery, stacked racks, LED lighting, climate control, digital monitoring | CAT pp.3, 5–11, 13 | Supported. Keep and add a short explanation of each subsystem. |
| Up to 4,500 planting boxes | CAT pp.4–5, 11 | Exact match. Preserve “up to” and “planting boxes”; do not convert to plants, trays, retail punnets or harvest output. |
| 70 m² canopy area | CAT p.4 | Exact match. This is canopy area, not the container footprint. Its calculation is not explained. |
| 35 sections | CAT p.4 | Exact match, but “section” is undefined. Keep the source terminology or omit this low-information figure until defined. Do not call these independent growing zones. |
| 5 vertical tiers | CAT p.4 | Matches “5 Tiers.” FARM's eight tiers describe a different design and do not replace this value. |
| Mist particle size: 20–60 µm | CAT p.5 | Exact match. A catalogue specification, not a measured droplet-size distribution. |
| Nozzle quantity: 460 | CAT p.5 | Exact match. Technical detail rather than a customer benefit. |
| HVAC power: 16.6 kW | CAT pp.8, 11 | Exact match. Label as HVAC electrical power to distinguish it from thermal cooling capacity. |
| Cooling capacity: 42 kW | CAT p.8 | Exact match. This is cooling capacity, not electricity use. |
| Catalogue space-temperature range: 5–28°C | CAT p.8 | Exact match. Do not present as an outdoor operating envelope or a recommended crop temperature range. |
| Three fertiliser tanks and one acid tank | CAT p.9 | Exact match. Keep in optional technical details. |
| Chiller temperature range: 12–25°C | CAT p.9 | Exact match. Avoid implying it is a validated root-zone recipe for every crop. |
| Total growing-light power: 9.6 kW | CAT p.11 | Exact match. Installed lighting power does not establish daily/monthly consumption. |
| Monitoring and preset planting strategies | CAT p.13 | Supported by the accompanying text. Dashboard numbers and pictured cameras are not operating evidence or a complete equipment list. |
| Cutaway and proposed-configuration caption | CAT p.4; existing asset record in `src/assets/biocube/README.md` | Visually consistent with the catalogue. Keep the illustration caption. The asset record currently names the earlier PDF; record the new source edition in the internal evidence trail. |
| Slide references 4, 5, 8, 9, 11 and 13 | Respective CAT pages | Correct page mapping. Public visitors cannot access the “supplied catalogue,” so consider one readable specification note with the exact source edition recorded internally. Do not add an unapproved PDF download just to make the references clickable. |
| “Production output has not been verified” / final equipment subject to confirmation | PILOT pp.2, 5, 10–12 support validation before scale | Sensible status qualification. Being designated the new source of truth does not make a proposal an operating-results report. |

**Conclusion:** there is no numerical mismatch in the BioCube specifications currently displayed. The changes needed are product clarity, useful explanations and confirmation of which new features belong to that exact configuration.

### Missing information worth adding

| Missing or under-explained item | Source | Recommended use |
| --- | --- | --- |
| How the five subsystems work together | CAT pp.5–11, 13; PILOT p.6 | Replace the names-only subsystem list with five short descriptions. Draft below. |
| Airflow and filtration | CAT pp.6, 8 | Mention managed airflow through the growing area. Do not turn filtration into a claim of sterile air or disease elimination. |
| Pilot criteria covering food safety and operational integration | PILOT pp.10–11 | Add to the existing generic pilot success measures, alongside crop performance, resources and cost per usable kilogram. |
| Simple crop workflow | PILOT p.7 | Optional compact text: prepare and seed → grow → harvest → pack and transfer. Omit the 7–10-day timing until the crop and harvest stage are specified. |
| 40-foot container format | PILOT p.6, image-embedded label | Useful buyer information after confirming it applies to the website's illustrated unit. Do not infer full installation dimensions, foundation requirements or delivery access from “40-foot.” |
| Remote monitoring and automated operating strategies | PILOT p.6; CAT p.13 | Useful capability copy once model/package inclusion is established. No need to publish internal software fees or promise unlisted integrations. |
| Examples of crops considered | CAT p.12; FARM p.4 | Optional short sentence, explicitly subject to crop planning. Avoid reinstating a categories section or converting modelled crops into an available produce range. |
| Site and commissioning expectations | PILOT p.12; FARM p.13 | Explain that utilities, location, operating team and commissioning are agreed per project. Do not advertise the facility's indicative seven-month schedule as the container's delivery promise. |

### Missing information that should stay missing from the public BioCube section

- CAT p.4's **up to 234,000 boxes annually**: no crop schedule, usable yield, downtime or definition of harvested “box” is supplied. Dividing by 4,500 produces 52 capacity equivalents/year; that arithmetic does not establish weekly harvests or retail pack output.
- FARM's **516,096 kg/year** and **258,048 total plants**: facility modelling, not the microgreens container. The total plant figure combines cultivation and propagation positions and should not be presented as harvest-ready plants.
- Numerical comparative savings, guaranteed crop quality, “365 days” uptime, compliance badges and sterilisation outcomes: not substantiated by the supplied evidence.
- Detailed nozzle settings, undefined mist intervals, wiring/supplier specifications and chemical/air-treatment terminology that add little public value or require clarification.

### Suggested BioCube public copy

**Heading:** Meet BioCube

**Introduction:**

> BioCube brings aeroponic growing, stacked racks, nutrient delivery, LED lighting, climate management and digital monitoring into a container-based system. The configuration shown is designed for microgreens. Crop selection, equipment and site requirements are agreed around each project.

**Image caption:**

> Catalogue illustration of the proposed microgreens configuration. Final equipment and layout may vary.

**Subsystem explanations:**

| Label | Public copy |
| --- | --- |
| Growing racks | Stacked growing racks organise the growing area around a central access aisle. |
| Nutrient delivery | Automated dosing and irrigation deliver water and nutrients through aeroponic misting. |
| Climate and airflow | Integrated climate equipment and air distribution manage conditions within the growing area. |
| LED lighting | Grow lighting supports a planned crop cycle inside the container. |
| Monitoring | Digital monitoring and preset growing strategies support day-to-day operation. |

**Configuration note:**

> Indicative microgreens configuration: up to 4,500 planting boxes, 70 m² canopy area and five growing tiers. Final specifications are confirmed for each project. Harvest output depends on the crop and operating plan.

Retain “35 sections” in technical details only if the terminology is made useful to visitors. Retain the already matched component values in the disclosure, with the clarified labels above. Keep internal source references beside this copy in the content record.

**CTA:** Discuss a BioCube system → systems enquiry.

## 4. Document conflicts and claims to resolve before publication

This section is an internal audit. Recalculations below test consistency within the proposal; they are not new public performance figures or investment advice.

| Finding | Evidence | Consequence |
| --- | --- | --- |
| Electricity per kilogram has a likely unit mix-up | FARM p.12 gives **1.40 kWh/kg**. FARM pp.4, 6 give **516,096 kg/year** as the model's production basis, **6,588,250 kWh/year**, and approximately **$1.40/kg** electricity cost. Energy ÷ production is approximately **12.77 kWh/kg**. | Do not publish 1.40 kWh/kg. It appears to have been carried across from the cost column. Request a corrected model. |
| Water per kilogram does not reconcile | FARM pp.4, 6 give **375 tonnes/month**, or **4,500 tonnes/year**. Using approximately 1,000 litres per tonne of water, this is approximately **8.72 L/kg** at the modelled annual yield. FARM p.12 says **1.27 L/kg**. | Hold both the public water-efficiency number and associated savings claims. |
| Yield per area mixes scales | FARM p.12 says **1,592 kg/m²** and **7×**. That density approximately divides the whole four-room yield by one 324 m² room. Using four cultivation rooms gives approximately **398 kg/m²/year**; all five rooms gives approximately **319 kg/m²/year**, excluding ancillary space. Also, 1,592 ÷ the slide's ~30 kg baseline is approximately 53, not 7. | The area denominator and comparison basis must be corrected. Publish none of these as demonstrated output. |
| Growth-cycle assumptions need a propagation schedule | FARM p.4 multiplies cultivation capacity by **20 harvests/year**, while listing crop cycles of **22–38 days**, including 36-day butterhead lettuce. Twenty turns imply approximately **18.25 days** of cultivation-room occupancy per turn. | A separate propagation phase may explain part of the difference. Obtain the seed-to-harvest and post-transplant schedule, cleaning time and losses; do not call this automatically impossible or verified. |
| Monthly and annual power use different calendars | FARM pp.4, 6: 541,500 kWh/month uses 30 days; 6,588,250 kWh/year uses 365 days. The quoted $59,565 “average monthly” electricity cost × 12 is $714,780, rather than the quoted annual ~$724,708. | Label a 30-day month properly or reconcile the monthly average. This is a modelling consistency issue, not evidence of operating consumption. |
| Software and servicing costs have unresolved treatment | FARM p.6 includes annual SaaS expense while saying year 1 is included in CAPEX. FARM p.9 repeats the same OPEX in every year. FARM p.6 leaves a negotiated servicing charge outside the total; p.13 describes annual support at 2% of CAPEX. | Financial totals may add up but still need commercial reconciliation. Do not publish profit, margin, ROI or payback as product benefits. |
| Water-saving claims have different or missing baselines | CAT p.9: 40% water savings, 35% fertiliser savings. COMP p.3: 75% less water than hydroponics, 95% than soil. FARM p.12: 90% less water. | These are not interchangeable numbers. Different designs/baselines may explain differences, but the documents do not establish comparable tests. |
| Hydroponic lettuce baseline changes | COMP p.2 compares 36-day lettuce with **45–50 days** hydroponically; FARM p.12 gives **35–40 days** hydroponically against 36 days for Bluezone. | No universal “20–30% faster” headline. The baseline, cultivar, harvest weight and trial conditions need to match. |
| Pilot timing is illustrative, not universal | PILOT p.7 shows **7–10 growing days**, with explicit validation wording. FARM p.4 lists much longer leafy-greens crop cycles. | Distinguish microgreens/young harvests from mature leafy greens and propagation from cultivation. Use a timing-free workflow on the website. |
| Energy comparisons do not define equivalent farms | COMP p.4 uses a 212 m² six-line system and gives growing lines 28,800, HVAC 22,800 and FIC 2,880 kWh/month. Its hydroponic pumping comparator has no equivalent output/system specification. | Do not infer container electricity demand or aeroponic whole-farm savings from these values. |
| Hydroponics is described too broadly | COMP pp.2–5 characterises hydroponics as submerged roots, limited oxygen, continuous pumping and restricted vertical potential. | Rewrite by actual system type. Hydroponics includes NFT, aerated water culture, timed irrigation and even passive systems; the blanket comparison is unsuitable. See the independent checks below. |
| Container electrical table uses ambiguous consumption language | CAT p.11 lists 32 kW total and 22.4 kW with lights off, but calls the latter “consumption per hour.” | Do not convert these to monthly bills or kWh without a duty schedule and a confirmed load schedule. The current site correctly leaves them out. |
| Catalogue materials/spectrum need clarification if exposed | CAT p.5 says galvanised racking; p.11 says powder-coated steel. CAT p.10's total spectrum ends at 730 nm while its far-red row extends to 750 nm. | These may involve compatible finishes or imprecise table definitions, but the deck does not explain them. Omit from public technical copy pending clarification. |
| Outcome and certification claims lack supporting records | CAT pp.3, 7–10, 14 and FARM p.12 contain GAP/GMP, air sterilisation, crop-quality and efficiency claims. | A deck assertion is not a certificate, test report or warranty. Request the applicable supporting material before publishing badges or guarantees. |
| Current-market claims are unsupported here | FARM p.10 asserts virtually no local commercial CEA production and no reliable local supplier in the UAE. | Exclude. No dated market evidence is supplied, and this is not necessary to explain Bluezone's offer. No full market study was undertaken for this review. |

COMP p.2's strawberry yields/harvest counts, p.3's nutrient-uptake percentages and p.5's staffing/infrastructure savings also lack a supporting trial or defined commercial baseline. Keep them out of both proposed public pages.

## 5. Website-wide findings: already present, missing and changes needed

| Area | Already on the website | Gap or change recommended |
| --- | --- | --- |
| Hero and Zero-Mile story | Fresh production closer to demand, produce and systems enquiry paths | Broadly consistent with PILOT pp.4–5, 8. Keep proximity as a design/commercial aim, without guaranteed emissions or availability claims. |
| Problem | Supply-chain explanation plus 25.4%, ~70% and 19% statistics from earlier external sources | These numbers are outside the new client set. Recommend retaining the qualitative supply-chain story and removing this statistics panel for the requested simplified scope. They are contextual figures, not Bluezone impact measurements; their presence means the page is not currently free of statistics. This review does not revalidate those older sources. |
| Shift / Why Zero-Mile | Locality, control, year-round design intent, market-led crop planning and additional supply resilience | Useful overlap with PILOT. Keep concise. The airport illustration should be visibly labelled as a concept, and its alt text should not imply a real installed site. Do not turn it into a QACC case study. |
| Produce | Microgreens, micro herbs, pea shoots, supply CTAs and illustrative imagery | CAT p.12 supports crop examples, but the PDFs do not establish a current wholesale supply operation, the “Bluezone Microgreens” sub-brand or planned Somerset production. Reconfirm these existing business facts, or remove unsupported location/availability wording. Absence is not proof they are false; the new source set simply does not establish them. |
| Technology | Aeroponic mechanism, some qualified recirculation language, climate/light descriptions | The “Closed-loop recirculation” and “held to setpoint” tiles are more absolute than the surrounding prose. Rewrite as “Automated water and nutrient delivery” and “Managed growing conditions.” Confirm the return-water path and control tolerances for the actual model before stronger claims. FARM's plumbing description does not establish CAT's exact arrangement. |
| Technology visual | An actual `ImagePlaceholder` with a production hint | Replace with a labelled root-zone schematic or suitable client asset. Do not show internal image-production instructions to public visitors. |
| Method | Full soil/hydroponics/aeroponics comparison, research-stat cards (up to 98%, 45–75%, ~60%), external research footnotes | Does not match the client's new placement request. Replace with the small teaser below. Rework the detailed content for a dedicated two-method page; do not simply move the same percentage cards there. |
| BioCube | Catalogue cutaway, matched configuration figures, expandable technical details, systems CTA | Add explanatory copy and scope labels. Confirm whether 40-foot format and PILOT's remote/APU features apply to this exact unit. No need to replace the matched numbers with farm-scale figures. |
| Pilot | Define, design, operate, measure, decide; conditional expansion; resources, labour and cost metrics | Strong alignment with PILOT pp.2, 10–12. Add food-safety requirements and integration with receiving/handling workflows. Prefer “cost per usable kilogram” over a loosely defined cost per kilogram. Keep the public version generic. |
| Contact | Produce/systems choices; direct email; disabled online form with explicit warning | CAT p.15 gives a different named contact and domain from `contact@bluezoneaeroponics.com` on the site. Confirm the approved public inbox; do not automatically publish the personal address/phone. There is no functional form submission to promise from the new page's CTA. |
| Categories remaining in contact | “Organisation type” select contains airline, resort, distributor, island, institution and grower categories | The Applications section is gone, but these categories remain. Recommend a free-text organisation/project description to follow the earlier request to omit categories. Do not infer that the useful produce-versus-systems enquiry distinction must disappear. |
| About / Impact / Applications | Components remain in source, but are not imported/rendered by the active app; navigation links were removed | Correctly absent from the active page. Do not restore them because similar content appears in the new PDFs. |
| Footer / navigation | Shortened navigation and two footer columns | Add a comparison-page link. If reusing these components on the new page, change landing anchors to `/#biocube`, `/#technology`, etc. so they navigate home correctly. |

Hero/footer/airport concept visuals should be presented consistently as illustrations where they are not verified installation photographs. The existing microgreens and BioCube captions already demonstrate that distinction.

## 6. Dedicated page: proposed public content

Recommended URL: `/aeroponics-vs-hydroponics`  
Page title: `Aeroponics vs Hydroponics | Bluezone Aeroponics`  
Meta description: `Explore how aeroponics and hydroponics deliver water and nutrients, how their root environments differ, and why Bluezone uses aeroponics.`

Use the following as the page draft. The source/editor notes following it are internal and should not be rendered as page copy.

### Aeroponics vs hydroponics

**Two approaches to soilless growing. The difference starts at the roots.**

Both approaches feed plants with water and dissolved nutrients. Aeroponics delivers that solution as a mist to roots suspended in air. Other hydroponic systems deliver it through a shallow flowing film, an aerated reservoir or irrigation through a growing medium.

The choice affects how a system is designed, monitored and maintained. Crop performance depends on the whole growing environment and operating plan.

### How the roots receive what they need

**Aeroponics**

Roots hang inside a growing chamber and receive nutrient solution through misting nozzles. Bluezone's proposed systems combine this delivery method with growing racks, lighting, climate management and monitoring.

**Hydroponics**

Hydroponics covers several designs. Nutrient film systems pass a shallow stream along the roots; water-culture systems support roots in an oxygenated solution; other systems irrigate a growing medium. Roots are not necessarily fully submerged.

**A note on terminology:** Aeroponics is sometimes classified within the wider hydroponics family. Here, the comparison is between mist-fed aeroponics and other common hydroponic designs.

### What changes between the methods?

| Consideration | Aeroponics | Other hydroponic systems |
| --- | --- | --- |
| Nutrient delivery | Solution is sprayed onto roots as mist. | Delivery depends on the design: flowing solution, water culture or irrigation through a medium. |
| Oxygen at the roots | Roots occupy an air space between misting events. | Oxygen access is managed through the root environment, solution aeration and system design. |
| Water and nutrients | Performance depends on delivery settings, recovery arrangements, crop needs and operation. | Performance also depends on the chosen design and whether solution is recovered and reused. |
| Space and layout | Bluezone's proposed designs use stacked growing racks. | Hydroponic growing can also use space-efficient layouts; the method alone does not determine the footprint. |
| Everyday operation | The growing plan needs dependable mist delivery and equipment care. | The growing plan needs dependable solution delivery and appropriate root-zone management. |
| Results | Evaluate usable crop output, quality and resource use for the actual system. | Use the same crop, harvest specification and measurement period for a meaningful comparison. |

### Why Bluezone uses aeroponics

Bluezone's approach brings nutrient mist directly to the root zone within an integrated growing environment. Racks, nutrient delivery, lighting, climate management and monitoring work together around a crop plan.

The aim is to make controlled production practical closer to demand. The system configuration and operating process should be assessed against the crop, site and buyer's requirements.

### Compare the whole growing system

A misting method alone does not establish faster harvests, lower electricity bills or a particular yield. Lighting, climate equipment, crop selection, harvest stage and operating conditions all affect the result.

A useful comparison measures usable harvest, crop quality, water and nutrient inputs, total energy, labour and reliability on a consistent basis. For a commercial project, it also considers food-safety requirements and how the harvest fits the buyer's workflow.

### Start with a measured pilot

A Bluezone pilot is designed to test the operating case before expansion. Agree the crop and success criteria, run the growing process, measure results and review whether the system suits the site.

**Explore BioCube** → `/#biocube`  
**Discuss a growing project** → `/?enquiry=systems#get-in-touch`

### Short answers

**Does aeroponics use water?**

Yes. Water carries dissolved nutrients to the roots as a mist. “Roots in air” does not mean water-free growing.

**Is aeroponics always better than hydroponics?**

There is no single result that applies to every crop and configuration. Compare the actual growing systems and operating conditions, including usable yield, quality, resources and the team's requirements.

**Does indoor production run itself?**

Automated delivery and monitoring support operation, but the growing process still includes preparation, seeding, harvesting and handling. A pilot helps establish the operating effort and responsibilities.

**Does the BioCube illustration represent every proposed project?**

The illustrated catalogue configuration is designed for microgreens. Crop selection, layout and equipment are agreed for each project.

### Internal source notes for the page draft

| Draft content | Basis |
| --- | --- |
| Aeroponic mechanism and integrated equipment | CAT pp.3, 5–11, 13; PILOT pp.6, 9. |
| Topics covered in the comparison | COMP pp.2–5, rewritten without unsupported rankings or numerical claims. |
| Hydroponic distinctions and terminology | Independent corrections from [Oklahoma State University: Hydroponics](https://extension.okstate.edu/fact-sheets/hydroponics). It describes multiple designs, open/closed operation, passive systems and aeroponics within hydroponic systems. These definitions correct the client deck; they do not validate Bluezone performance. |
| Space-efficient hydroponic layouts and indoor/year-round potential | [University of Minnesota: Small-scale hydroponics](https://extension.umn.edu/how/small-scale-hydroponics). This is a method explanation, not evidence of commercial parity or a Bluezone benchmark. |
| Oxygen/water-quality management in submerged-root systems | [University of Missouri: Hydroponic Nutrient Solutions](https://extension.missouri.edu/publications/g6984). It specifically identifies dissolved oxygen and water temperature as monitoring considerations for deep-water culture. |
| Measurement criteria, operating sequence and expansion conditions | PILOT pp.2, 7, 10–12. Public copy deliberately removes customer names, locations and specific facility plans. |
| Whole-system comparison and avoidance of universal rankings | Editorial synthesis of the documents' varying designs, conflicting comparison baselines and pilot-validation requirements. It is not a claim that comparative trials were supplied. |

Optional public “Further reading” links can point to the university explanations above. Do not link the full client proposals as public evidence. Do not import the existing Method statistics into this page without a separate decision to include properly scoped research; the proposed page does not need them.

## 7. How to integrate the landing-page link

**Recommendation:** replace the current full `SectionMethod` at its existing position, after Technology and before BioCube, with one compact teaser. This keeps the technical story connected and lets interested visitors choose the detail.

Proposed reading sequence:

`Technology explanation → comparison teaser → BioCube → pilot → enquiry`

### Exact teaser copy

**Heading:** Aeroponics vs hydroponics

> Both grow plants without soil. Aeroponics delivers water and nutrients as a mist to roots suspended in air. Explore how the methods differ and why Bluezone uses aeroponics.

**Link styled as a button:** Compare the growing methods → `/aeroponics-vs-hydroponics`

Keep it to the heading, paragraph and one action. Retain the existing typography, spacing and colour vocabulary. No comparison matrix, numerical advantage cards, sector categories or large secondary hero on the landing page. On a phone, stack the link below the text; on desktop, it can sit beside it. This uses the existing design system and avoids adding a new visual style solely for navigation.

Use a normal same-tab link, not an automatic redirect, modal or PDF download. The dedicated page should open with its own title and content, without the landing page's long scroll-scrubbed hero.

### Integration details for the later implementation

| Location | Work |
| --- | --- |
| `src/App.jsx` | Replace `<SectionMethod />` with the teaser. Retain `id="method"` on the teaser so existing bookmarked anchors have a meaningful destination. Add a separate render/route for the comparison page. |
| `src/components/SectionMethod.jsx` | Retire the full landing comparison and research-stat cards from the homepage. Reuse only suitable patterns/content in the new page; the draft is a two-method explanation, not the old three-method table moved unchanged. |
| `src/components/SectionTechnology.jsx` | Replace the current “in Method” research footnote with a visitor-facing link to the dedicated comparison page. Its claim that research figures are “set out” on the landing page would otherwise become stale. |
| New comparison page | Use the draft above, a simple header, a semantic comparison table and short closing actions. Use a labelled root-zone schematic if a visual is needed. Avoid treating a deep-water hydroponic drawing as representative of every hydroponic system. |
| Shared footer/header | Add a text link to the comparison page and use home-qualified anchors such as `/#biocube` from secondary pages. A footer link plus the teaser is sufficient; there is no need to expand the already simplified main navigation. |
| Cross-page systems enquiry | Implement `?enquiry=systems` initialisation on the landing page, or an equivalent route-state mechanism. Existing `routeEnquiry` only recognises same-page `a[href='#get-in-touch']` clicks and defaults to produce; merely adding `data-enquiry="systems"` to a cross-page link will not select the systems form. |
| Hosting and metadata | Ensure the new path supports direct navigation and refresh, with a host fallback or a separate HTML entry as appropriate. Set its own title/description. The current app has no implemented comparison route. |
| Contact behaviour | Preserve the explicit message that online submission is unavailable until a real submission flow is implemented. Link to the contact section using neutral wording, not “Submit your project” or “Book a consultation.” |

During implementation, verify direct page load/refresh, browser Back, mobile table readability, keyboard link/focus behaviour, return-to-home anchors, systems selection after a cross-page visit and absence of the full comparison from the landing page.

## 8. Priority actions and remaining client facts

### Recommended implementation order

1. Build the dedicated comparison page using the proposed public copy and replace the homepage Method section with its teaser.
2. Clarify BioCube's microgreens configuration and add concise subsystem explanations. Keep the matched configuration values and provisional status.
3. Qualify the Technology tiles, replace the placeholder visual and update the Method link/footnote.
4. Apply the public-content cleanup: remove residual research/impact-style stat panels from the homepage, simplify enquiry categories, qualify concept imagery and remove unsupported Somerset wording unless reconfirmed.
5. Add food-safety and workflow-integration criteria to the existing generic pilot section. Keep named counterparties and project economics internal.
6. Update the internal content source record and product context to point to these four PDFs, recording each claim's configuration, page, status and approved public wording. Preserve the old plan as historical documentation.

### Facts the documents do not settle

These are specific content decisions for the client, not prerequisites to using the safe draft above.

| Needed confirmation | Why it matters | Safe interim treatment |
| --- | --- | --- |
| Is the illustrated microgreens unit the same 40-foot model as the leafy-greens pilot? | Determines whether the format, crop capability and equipment details can be combined. | Identify the shown microgreens configuration and avoid cross-model specification claims. |
| What are a “planting box,” a “section,” and the basis of 70 m² canopy? | Visitors need intelligible capacity units. | Preserve original units; no conversion to retail packs or output. Omit the sections count from the main summary if unexplained. |
| Which remote/APU features and software package are included in this unit? | PILOT/FARM describe functionality beyond CAT's short feature list. | Publish monitoring and preset strategies; hold package-specific promises and prices. |
| Are the Microgreens sub-brand, wholesale offer and Somerset plan still current? | The website carries them, but these four documents do not establish the business status. | Avoid location and availability assertions; use crop/system enquiry wording. |
| Which inbox is approved for public enquiries? | Website and catalogue use different contact details/domains. | Do not replace one unverified address with another or expose the personal telephone number automatically. |
| Are any customer names/logos approved for public use? | PILOT is a proposal, not a published case study. | Keep the pilot copy anonymous and general. |
| Are there product test reports, corrected resource calculations and applicable certificates? | Required to substantiate the performance and certification claims being withheld. | Publish mechanism, design features and evaluation criteria without numerical superiority or badges. |

The usable public story is already clear: controlled aeroponic growing, a clearly scoped BioCube configuration, production closer to demand, and measured pilots before expansion. The new documents enrich that story, but their private commercial details and conflicting performance tables should not become website copy.
