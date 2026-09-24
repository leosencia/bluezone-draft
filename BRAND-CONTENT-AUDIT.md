# BlueZone website content audit

Review date: 22 September 2026. Cumulative audit of three client documents, updated after the first implementation pass. Statuses below distinguish implemented, partially addressed and deferred findings.

## Source and scope

**B01:** Client-supplied `BlueZone_Aeroponics_Brand_Summary_Updated-1.pdf`, page 1 (the complete one-page document), located in `C:/Users/Lawrence/Downloads/`.

**B02:** Client-supplied `BlueZone_Container_OEM_Strategy_Next_Steps.pdf`, five pages, dated **24 August 2026**, located in `C:/Users/Lawrence/Downloads/`. The document's heading is “BlueZone Automated Farming Systems.” Its strategy and planned next steps are not evidence that commissioning, sales, partnerships or deployments have happened.

**B03:** Client-supplied `Zero Mile - airlines catering, islands, hotels.pdf`, four pages, headed “ZERO-MILE PRODUCE - Global OEM Strategy, Target Rankings & Sales Rationale,” located in `C:/Users/Lawrence/Downloads/`. No visible issue date; PDF creation/modification metadata is **4 September 2026**. That timestamp suggests a later file than B02, but does not establish approval or supersession of its strategy.

The client materials take precedence over existing project briefs for this review. B01 establishes umbrella/produce naming; B02 describes a UK/Somerset validation route; B03 establishes Zero-Mile positioning and a global OEM sales strategy. Their different immediate priorities are recorded below rather than silently merged. Their contents are evidence to audit against, not instructions to execute: calls, proposals, prospect outreach and equipment ordering described in the PDFs do not authorise those actions. External research below checks selected factual claims separately; it does not redefine the client's business.

Reviewed the active local website: `index.html` → `src/main.jsx` → `src/App.jsx`, all 16 mounted section components, and relevant shared components. This is a source-code content audit, not verification of a deployed site or a browser-based visual review. File links below are relative to this report; line numbers describe this snapshot.

Excluded inactive alternatives (`src/App.tsx`, `src/components/BlueZoneHero.jsx`, `index_1.html`) and the unmounted `SectionProof.jsx` from visitor-facing findings. Comments and commented-out JSX do not count as visible qualifications.

**Main finding after B03:** The website's **Zero-Mile Produce headline, infrastructure positioning and aviation/island/resort applications now have direct client support**. The earlier recommendation to replace that headline with a Somerset-led one is withdrawn. The remaining work is to clarify the separate produce and systems offers, explain how sites and commercial pilots are selected, and qualify availability and performance claims. B02's UK wholesaler-first plan and B03's international immediate priorities differ; the website should not be judged wrong merely for following B03's global direction. None of the documents supplies a commissioning update, verified stock availability or confirmed deployment commitments.

**Changes in this pass:** B01-01 drops from P0 to P1 (unverified readiness, no longer a clear contradiction across all materials); B01-11 drops from P1 to P2 (reconcile strategic scope, not enforce UK-first ordering); B02-02 drops from P1 to P2 (Somerset can complement rather than replace the customer-pilot story). Zero-Mile naming and the broader systems crop list are supported. Three new findings, B03-01 through B03-03, address commercial site selection, pilot responsibilities and island/Gulf partner routes. Earlier science and implementation findings remain open. Resolved evidence gaps are distinguished from website fixes.

## Priority scale

| Priority | Meaning | Action |
| --- | --- | --- |
| P3: Small | Wording, naming or citation presentation could align better. | Tidy during the copy pass. |
| P2: Meaningful | Positioning or scope needs clarification. | Resolve before final copy approval. |
| P1: Major | A core offer is missing, an important claim lacks support, or visitor-facing content is unfinished. | Resolve before publication. |
| P0: This is flat-out wrong | Direct contradiction of the client baseline or a demonstrably false statement as written. | Correct first. |

**Evidence labels:** *Contradiction* = conflicts with the cited client material; *Omission/positioning* = underrepresents it; *Unverified* = not established by the reviewed sources, not necessarily false; *Fact-check* = assessed against external evidence; *Draft defect* = observable in the active implementation. Priority reflects impact, not certainty. Each ID remains stable across document reviews; a B01 ID can acquire B02 evidence.

## What B01 actually establishes

| B01 heading, all on page 1 | Brand baseline |
| --- | --- |
| Umbrella Brand | BlueZone Aeroponics covers the commercial produce business and the **future aeroponic farming-system/OEM business**. |
| Produce Positioning | **BlueZone Microgreens can be used** as the customer-facing produce line. This is a permitted name, not an instruction to rename the entire company. |
| Produce Positioning | Premium aeroponically grown **microgreens and micro herbs**, produced year-round in a controlled indoor environment. Buyers include B2B wholesalers, foodservice distributors, hotels, restaurants and other commercial buyers. |
| Systems Positioning | The umbrella name accommodates supplying or OEM-ing commercial modular aeroponic indoor farming systems, without restricting systems to one crop category. |
| Core Sales Messaging | “Controlled climate. Year-round production. Independent of seasonal weather.” The alternative headline is “Growing 365 days a year - whatever the weather.” |
| Short Brand Descriptor | “Commercial Aeroponic Indoor Farming” and “Microgreens • Micro Herbs • Modular Growing Systems.” |
| Core Brand Idea | Healthy, locally grown produce combined with controlled-environment aeroponic technology; year-round production designed to improve resilience to weather and climate variability. |

B01 does **not** establish BioCube's name, technical specifications, output, availability, pilot terms, customer deployments, founder credentials, service geography, email address, nutritional multipliers or resource-saving percentages. Those items need other evidence. Their absence from a short summary alone does not make them false.

## What B02 adds and resolves

| B02 reference | Established direction | Limit on what can be claimed publicly |
| --- | --- | --- |
| Page 1, core conclusion and §1 | First Somerset unit to prove technology/economics; longer-term UK sourcing, private-label, import/installation and integration of automated containers manufactured in China. Customer organisations operate the units. | Supports the business model, not a claim that BlueZone manufactures the hardware, already holds OEM rights or has units ready to ship. |
| Page 1, §1 | Planned package includes commissioning, crop operating procedures, training, UK data, technical support and warranty/spares coordination. Support and consumables are potential revenue streams. | Not a confirmed service contract, response time, warranty duration or subscription tariff. |
| Page 1, §2 | Priority: UK produce/foodservice wholesalers; farmers/growers; airline caterers/central kitchens; large luxury hotel/resort groups; contract caterers/campuses. | Sales priority informs the recommended website emphasis. It does not automatically dictate an exact navigation order or invalidate every other possible market. |
| Page 2, §§3–4 | Wholesaler demand discovery for Somerset-grown pea shoots/microgreens; questions cover weekly volume, varieties, packs, prices, sourcing and supply problems. | Listed companies are prospects, not customers or endorsers. No confirmed purchase commitments or delivery territory are supplied. |
| Pages 2–3, §5 | The first unit is intended to be a commercial farm, proof/R&D site and showroom/training centre. | No commissioning or public-opening confirmation. Two purpose cells on page 3 have truncated endings in the PDF text; no missing text is reconstructed here. |
| Page 4, §§6–8 | Farmers: diversification with existing staff. Aviation: caterers' production facilities. Hospitality: larger groups, central kitchens and clusters after wholesaler validation. | Future routes to market, not signed deployments or available pilot slots. |
| Page 4, §9 | Prove saleable output, cycles, energy, water, inputs/substrate, labour, cleaning, failures, maintenance, prices, margins and customer payback. | The mentioned 2–3-year evidenced payback is an aspiration for the future sales case, not a measured result or promise. |
| Page 5, §10 | Commission, gather initial operating data, begin selected demos, explore pilot customers, then expand using proof. OEM rights and commercial responsibilities remain checks before ordering/branding. | Relative month ranges are a proposed sequence, not launch dates. Passing time since 24 August does not establish completion. |

**Evidence supplied by B02:** UK/Somerset strategic focus, wholesaler priority within that plan, pea shoots as an intended initial crop, the OEM model and the rationale for demos/pilots. B03 subsequently supplies Zero-Mile naming and broader crop/market positioning. BioCube naming, detailed specifications, measured capacity, current availability and contact details remain unverified.

## What B03 establishes and how it changes earlier advice

| B03 reference | Established direction | Audit consequence |
| --- | --- | --- |
| Page 1, §2; page 4, §9 | **ZERO-MILE PRODUCE** is the customer-facing headline; the offer is distributed fresh-food infrastructure near demand. | Keep the headline and infrastructure story. Add the commercial rationale beneath them instead of forcing a produce-only or Somerset-only homepage. |
| Page 1, §1 | Target overlapping needs: imported fresh greens, scarce land/water, climate pressure, recurring concentrated demand, capital/funding, policy alignment, high landed cost and replication potential. | Geography or enthusiasm alone is insufficient. Replace the website's indiscriminate “Anywhere” framing with site-fit criteria. |
| Pages 1–2, §3 | Caterer-led procurement specifications and a measured one-unit aviation pilot, with expansion if results justify it. | The existing customer-site pilot narrative is supported; it needs commercial structure, meaningful KPIs and accurate readiness language. |
| Page 2, §4; page 3, §§5–6 | Islands, Gulf markets, Singapore and government/development-backed routes are explicit priorities. | Withdraw the concern that these sectors lack documentary support. Country scores and account rankings are internal prioritisation estimates, not proof of customers or returns. |
| Page 4, §§7–8 | BlueZone supplies the system/commissioning/crop procedures/measurement; factory supports technical issues, warranty and spares; operator supplies site/utilities/labour/offtake; funding is conditional. Pilot is a commercial demonstration with agreed KPIs. | Explain responsibility and conditional scale-up; do not invent a free trial, guaranteed grant or contractual warranty. |
| Page 4, §10 | Build crop economics around lettuce, salad leaves, rocket, spinach, culinary herbs, Asian/speciality greens, microgreens and edible flowers. | Leafy greens and edible flowers are supported **system crop targets**. Neither that list nor B01 confirms a ready-to-order crop catalogue. |
| Page 1, §2; page 4, final note | Zero-Mile is not a zero-emissions guarantee or a literal government requirement; quantify water/carbon/cost/yield only against validated baselines. | Retain the site's strategic-distance qualifier and extend it to emissions. Existing overclaims and unverified numbers remain concerns. |

**Strategy conflict to carry forward:** B02 page 1 §2/page 5 §10 says to prioritise UK wholesalers, gather Somerset evidence, then approach airline caterers and major hotels. B03 page 4 §10 instead calls QACC Doha, a Maldives demonstration and SATS Singapore immediate priorities; Gate Gourmet rollout follows pilot data. B03 also uses present-tense sales-pitch wording (“BlueZone provides”) where B01/B02 frame systems as future/staged. This could represent an expanded global plan or a strategic change, but neither scope nor completion status is explicitly reconciled. Until a client update resolves it, preserve both routes and avoid rewriting the whole site around one inferred sequence. This is a documented content decision for later review, not a blocker to completing this audit.

## P0: This is flat-out wrong

### B01-02: The hydroponics comparison is false as a blanket description

**Type:** Fact-check. **Where:** [Method](src/components/SectionMethod.jsx), lines 43–85 and 137–140.

- **Website:** Hydroponic roots are “Submerged in nutrient solution,” oxygen “must be actively aerated,” and “Only one” method leaves roots open to ambient oxygen. The table also universally assigns inert media to hydroponics.
- **Finding:** Non-circulating hydroponic systems can expose upper roots to humid air and operate without mechanical aeration. These documented counterexamples invalidate the absolute distinction. [University of Hawaii, capillary non-circulating hydroponic system](https://www3.ctahr.hawaii.edu/tpss/digest/hd102/hd102_5.html).
- **Adjust:** Describe a specific comparison system, such as deep-water culture, or acknowledge differences among hydroponic methods. Remove “Only one” and the universal aeration/media requirements. Review the stacking and failure-mode rows as configuration-dependent comparisons, rather than universal properties.
- **Suggested copy:** “Aeroponics delivers a nutrient mist to roots suspended in air. Other soilless systems deliver nutrient solution through methods such as immersion, flowing films or substrate irrigation.”

B01 contains no competitor-method comparison; this is a separate scientific correction.

## P1: Major

### B01-01: Confirm system and pilot readiness before promising deployment

**Priority changed after B03:** P0 → P1. **Type:** Unverified readiness / source tension. **Where:** [BioCube](src/components/SectionBioCube.jsx), lines 94–100; [About](src/components/SectionAbout.jsx), lines 54–57; [Pilot](src/components/SectionPilot.jsx), lines 28–30 and 51–62; [Contact](src/components/SectionContact.jsx), lines 27–31.

- **Website:** BioCube “ships as a unit, connects to power and water, and starts producing”; Pilot describes “A working unit”; contact offers “Ready to deploy.” The last is a visitor's project-stage option, not by itself a promise that BlueZone can ship.
- **Sources:** B01 calls systems/OEM a future business; B02 requires proof before sales. B03 page 4 §§7/9/10 presents a customer pilot structure, present-tense infrastructure pitch and immediate international proposals. The combined sources no longer justify calling the entire systems proposition flat-out wrong.
- **Remaining gap:** None supplies confirmation of commissioning, fulfilment readiness, delivery lead time or agreed customer pilot availability. A strategy pitch alone does not establish these operational facts.
- **Adjust:** Retain the supported systems and pilot proposition, but replace unconditional shipping/production language with assessed project scope until readiness is confirmed. Describe installation, commissioning and customer operation rather than implying utility connection alone starts production.
- **Suggested copy:** “Explore a modular aeroponic project for your site. Configuration, commissioning and pilot scope are assessed against your crop and operating requirements.”

### B01-03: Clarify the two offers beneath the supported Zero-Mile headline

**Type:** Omission/positioning. **Where:** [Hero](src/components/HeroSection.jsx), navigation at lines 30–37 and copy at 314–343; [page order](src/App.jsx).

- **Website:** “Zero-Mile Produce. Fresh Greens Grown Where They’re Needed Most,” followed by modular, water-efficient vertical farms for islands and remote communities. Produce appears after BioCube, Capacity and Specifications; navigation also places Produce after infrastructure topics.
- **B01:** Produce Positioning and Core Sales Messaging explicitly identify premium microgreens, micro herbs, controlled indoor growing and year-round production.
- **B03:** Page 1 §2 explicitly calls Zero-Mile Produce the headline; page 4 §9 supplies the near-consumption infrastructure pitch. The hero is therefore broadly on-brand for the global systems direction.
- **Adjust:** Keep “Zero-Mile Produce.” Explain the infrastructure case beneath it, and give visitors distinct routes to **produce supply enquiries** and **systems/pilot enquiries**. The lack of a clear produce-buyer route remains material for an umbrella site; the headline itself is not a defect.
- **Suggested headline:** “Zero-Mile Produce. Fresh greens grown close to where they are consumed.”
- **Suggested supporting copy:** “Explore modular aeroponic growing systems for year-round production near your kitchens and customers, with site-specific crop and operating requirements.” Add a clearly labelled produce-supply route using B01's premium microgreens/micro-herbs description, with actual availability stated once confirmed.

**Earlier advice withdrawn:** Do not replace the homepage headline with “Year-round indoor growing, starting in Somerset” solely because of B02. Somerset belongs in the UK/proof-site story unless the client chooses a UK-specific homepage. The need for explicit categories, enquiry routes and accurate status remains.

### B01-04: Produce reads as a system's crop menu rather than a branded supply offer

**Type:** Omission/positioning and unverified range. **Where:** [Produce](src/components/SectionProduce.jsx), lines 19–61.

- **Website:** “Grow what the market needs”; cards offer microgreens, micro herbs, leafy greens and edible flowers. The permitted name “BlueZone Microgreens” and the premium produce description are absent.
- **B01:** Produce Positioning establishes microgreens and micro herbs. Broader crop freedom belongs explicitly to Systems Positioning.
- **Adjust after B03:** Separate the produce-supply range from crops being evaluated for systems. Keep BlueZone Aeroponics as the umbrella, using BlueZone Microgreens for the produce line if adopted. Leafy greens and edible flowers may remain as system crop targets: B03 page 4 §10 now supports them. Confirm availability before presenting any crop as ready to order.
- **Suggested description once supply is confirmed:** “BlueZone Microgreens: premium aeroponically grown microgreens and micro herbs, produced year-round in a controlled indoor environment.” Until then, use an invitation to discuss prospective supply without implying available stock.
- **Still needed:** Confirmed varieties, supply area, pack formats, order quantities and delivery arrangements. Do not invent these to fill the section.

**B02 update:** Page 2 §4 and page 3 §5 establish **pea shoots/microgreens** as the initial Somerset supply focus, with a small commercially validated crop range in page 5 §10. Add pea shoots to the initial-offer explanation; currently they appear in the output metric rather than as a named Produce item. B02 does not revoke B01's micro-herb positioning or establish leafy greens/edible flowers as available products. “UK” and “Somerset” describe strategic focus/site location, not a guaranteed nationwide delivery service.

**B03 update:** The broader list now includes lettuce/salad leaves, rocket, spinach, culinary herbs and Asian/speciality greens as crops for developing economics. The current four cards are a reasonable summary, not an exhaustive list that must be expanded into eight cards. Their **supply-versus-system meaning** is the issue. Do not apply the pea-shoot capacity figure to this wider range.

### B01-05: The enquiry journey assumes the visitor wants to operate a farm

**Type:** Omission/positioning. **Where:** [Contact](src/components/SectionContact.jsx), lines 17–31, 75–77, 169–203 and 217–218.

- **Website:** “Tell us what you need to produce, and where”; “Project stage”; “Where production would be sited”; a promised site and crop assessment. Restaurants and wholesalers have no explicit organisation option.
- **B01:** Produce Positioning includes buyers who need to purchase produce, not install equipment.
- **Adjust:** Add an enquiry purpose: “Produce supply” and “Future systems / OEM enquiries.” For produce, ask about delivery location, products, approximate quantities and supply frequency. Reserve site/project questions for systems interest. Explicitly include restaurant and wholesale buyers, and tailor the response promise to the selected purpose.
- **Suggested intro:** “Tell us about your produce supply needs or your interest in future aeroponic growing systems.”

**B02/B03 update:** B02 page 2 §4 supports optional buyer questions about weekly kg/punnets, varieties, packs and supply problems. Keep these in the produce branch. B03 supports a parallel international systems/pilot branch: the existing location, crop, volume and project-stage fields are relevant there. Do not force either audience through the other's questions or treat UK wholesaler-first form order as mandatory across a global site. See B03-01 for system-project qualification.

### B01-06: Product specifications and capacity figures remain unverified

**Type:** Unverified, not demonstrated false. **Where:** [Capacity](src/components/SectionCapacity.jsx), lines 13–40 and 79–82; [Specifications](src/components/SectionSpecifications.jsx), lines 15–20 and 69–70; [BioCube hotspots](src/components/SectionBioCube.jsx), lines 18–70; [Technology](src/components/SectionTechnology.jsx), lines 16–35.

- **Website:** 15.8–17.3 tonnes of annual pea-shoot output; 225 trays; 4,500 punnets per cycle; up to 4,500 planting boxes; 70 m² canopy; 35 growing sections; five tiers. It also describes CO₂ setpoints, crop-specific light spectrum, separate zones and remote monitoring. “No substrate waste” is an additional absolute claim.
- **B01:** Establishes modular indoor aeroponic systems as a future business direction, with no named model, configuration, output or hardware specification.
- **Adjust:** Obtain a dated, model-specific client specification and the production calculation before approving these details. Keep the existing “potential,” modelling and proposed-configuration caveats; they are useful but do not supply missing evidence. Remove or hold unsupported details if no supporting document arrives.
- **Reconcile explicitly:** Are punnets and planting boxes the same unit? How do 225 trays relate to 35 sections and five tiers? What crop, harvest weight, cycle length and downtime produce the annual estimate? The numbers alone do not prove a contradiction.

**B02 update:** Page 4 §9 explicitly makes real yield, cycles, saleable output, resource use and economics things to prove. It supports the plan to collect evidence, not the displayed output figures. Its inclusion of seed/input/**substrate** costs also means “No substrate waste” should remain unverified, rather than inferred from the word aeroponics; it does not by itself prove this configuration uses a substrate. See B02-04 for how to present the planned evidence.

**B03 update:** Page 4's final note expressly requires validated baselines for quantified water, carbon, cost and yield claims. No named BioCube specification or numerical capacity is supplied. This finding remains open even though the broader infrastructure proposition is now supported.

### B01-07: The nutrition headline makes a broader claim than the research supports

**Type:** Fact-check/overstatement. **Where:** [Produce](src/components/SectionProduce.jsx), lines 23 and 98–112, including the `5x.png` graphic.

- **Website:** “5x more nutrients in the fraction of the space,” plus “at peak nutrient density.”
- **Finding:** USDA's account of the 25-variety research supports roughly fivefold higher levels of the vitamins and carotenoids studied in general, while stressing variation by species and growing/handling conditions. It does not establish every nutrient, BlueZone's own harvests, a universal nutrient peak, or a growing-space ratio. [USDA ARS, microgreens research summary](https://agresearchmag.ars.usda.gov/ar/archive/2014/jan/greens0114.pdf).
- **Adjust:** Keep any research statement specific to measured nutrients and the study. Remove the space claim unless separately substantiated. Revise the prominent graphic as well as the text. B01's “healthy” positioning does not authorise a universal multiplier.
- **Suggested heading:** “Small greens, concentrated flavour.” If retaining research: “Research has found higher concentrations of certain vitamins and carotenoids in microgreens than in mature leaves. Results vary by crop and growing conditions.”

### B01-08: The supply-chain table compares incompatible measures and invents a universal baseline

**Type:** Unverified and misleading comparison. **Where:** [Shift](src/components/SectionShift.jsx), lines 22–60 and commented-out source notes near the end.

- **Website:** Under “Distance to market,” “80%+ imported” is compared with “On site.” Under “Loss before retail,” “25.4%” is compared with “Same-day.” All traditional supply is represented as six stages versus two.
- **B01:** Supports local produce, but specifies no import market, import share, same-day service or universal two-stage delivery model. It explicitly includes distributors and wholesalers.
- **Adjust:** Remove “80%+ imported” until geography, commodity, denominator, year and a source are identified. Compare distance with distance, time with time, and loss rate with loss rate. No BlueZone loss rate is established. Label any six-to-two-stage diagram as an illustrative on-site scenario, not the supply model for every customer.
- **Fact-check:** FAO supports 25.4% as the global fruit-and-vegetable loss estimate for 2023 before retail. It is not a transport-only loss rate, a measurement of a particular supplier or proof of BlueZone's avoided loss. [FAO food-loss indicator](https://www.fao.org/sustainable-development-goals-data-portal/data/indicators/1231-global-food-losses/en/).

**B02 update:** Page 2 §§3–4 makes the first route **Somerset producer → wholesaler → the wholesaler's customers**. A later unit at a customer's depot/kitchen could shorten that route. Show these as separate scenarios; “Harvest → Point of use” does not describe every initial wholesale sale. B02 asks whether buyers currently source UK-grown or imported produce, so import dependency is a discovery question, not a documented 80% baseline.

### B01-09: Local production is made to sound independent of logistics and operational constraints

**Type:** Overstatement/unverified outcome. **Where:** [Impact](src/components/SectionImpact.jsx), lines 66–84 and introductory copy around 120; [Problem](src/components/SectionProblem.jsx), lines 485–501; [Footer](src/components/SectionFooter.jsx), line 224.

- **Website:** Local production “removes the freight leg and the cold chain”; perishable crops lose the most “because they have the furthest to travel”; supply “does not depend on freight, weather or a single growing region.” The footer promises “Sustainable food. Anywhere.”
- **B01:** Core Brand Idea describes improved weather/climate resilience, not removal of every logistical dependency or proven sustainability in every location.
- **Adjust:** Describe reduced exposure to long-distance produce transport and seasonal variability. Do not imply refrigeration, input deliveries or all freight disappear. Replace the unsupported explanation about perishables travelling furthest: FAO identifies perishability and handling requirements. [FAO food-loss indicator](https://www.fao.org/sustainable-development-goals-data-portal/data/indicators/1231-global-food-losses/en/).
- **Suggested copy:** “Local indoor production can shorten produce journeys and reduce exposure to seasonal weather variability.” For the footer, use the client's commercial indoor-farming descriptor.
- **Keep:** The Method section's energy trade-off and the acknowledgement that local production does not solve food security alone. Those caveats should inform the rest of the page too.

**B02 update:** Page 1 §1 anticipates imported equipment and spares/support coordination, while page 2 anticipates wholesaler distribution. Distinguish shorter **produce** journeys from the system's wider supply dependencies. Neither is evidence of total freight independence.

**B03 update:** Page 2 §3 says a nearby farm removes **part** of the chain; page 1 §2 treats carbon benefits as additional and forbids inventing a government “zero food miles” requirement. Page 4 expressly rejects a zero-logistics-emissions guarantee. Extend the useful existing Zero-Mile distance footnote to cover emissions, while keeping specific measured benefits separate. The website does not currently claim a government zero-mile mandate; this is a boundary for future copy, not an additional present defect.

### B01-10: Draft instructions and invented-person placeholders are visible as website content

**Type:** Draft defect. **Where:** [About](src/components/SectionAbout.jsx), lines 54–100; [shared image placeholder](src/components/primitives.jsx), lines 522–550; its uses in Technology, BioCube, Capacity, Specifications, Produce, Pilot and Contact.

- **Website:** Literal “Placeholder paragraph,” “Placeholder quote,” “Founder name,” blank credential figures and image-production instructions such as “Team commissioning a unit.” The shared placeholder renders both its label and its production hint.
- **B01:** Supplies enough information for a factual company introduction, but no founder quote, history, deployment count or team credentials.
- **Adjust:** Replace About with the verified umbrella/produce/future-systems story. Remove unsupported quotes and credential blocks until real information arrives. Replace image placeholders with suitable approved assets or omit those blocks. Do not convert a drafting prompt into a supposed founder statement.

**B02 update:** The Somerset proof-site plan and UK integration model now provide specific About content. They remain plans, not a history of completed deployments. The prospect list on page 2 must not be used to fill testimonial, customer-logo or “trusted by” blocks.

## P2: Meaningful

### B01-11: Reconcile the UK and global audience strategies before reordering the site

**Type:** Omission/positioning. **Where:** [Applications](src/components/SectionApplications.jsx), lines 31–92; Hero, Contact and Footer.

**Priority history:** P2 after B01 → P1 after B02 → **P2 after B03**. The carousel starts with airports, islands and government; foodservice/distribution is fifth and growers sixth. B02 page 1 §2 prioritises UK wholesalers then growers. B03 pages 2–4 explicitly prioritise aviation, islands, government/development programmes and resort/operator combinations. The current lead sectors therefore have support; their mere prominence is no longer a major mismatch.

Withdraw the instruction to make wholesalers the universal opening audience. Distinguish a UK produce/proof route from global systems applications, keep both discoverable, and record which strategy the homepage is intended to lead with. Neither PDF prescribes a navigation order. Within the global route, explain distinct purchaser, operator, produce-buyer and funding roles rather than treating all organisations as the same kind of customer. Contract caterers/campuses remain relevant under B02 but need not displace B03's leading applications.

### B01-12: Research figures need visible attribution and a consistent boundary from BlueZone performance

**Type:** Fact-check/qualification. **Where:** [Method](src/components/SectionMethod.jsx), lines 109–126 and 274–340.

The displayed figures are up to 98% less water, 45–75% higher yield and approximately 60% less fertiliser. These numbers do appear in the cited 2026 review, so they should not be labelled invented. Their appearance in a review does not establish BlueZone performance or a universal comparison. [Chu and Wan, Agriculture, 2026](https://www.mdpi.com/2077-0472/16/2/265).

Retain the existing water card's explicit non-BlueZone caveat and apply that distinction visibly to all three figures. Restore a concise shared qualifier; the longer qualifier and comparability citation currently sit inside commented-out JSX. Attribute the review by name/year and require the underlying crop, system and baseline evidence before using its upper-end findings as sales promises. The 2024 review also highlights variation by crop/system and limits to direct comparisons. [Regmi et al., Technology in Horticulture, 2024](https://www.maxapress.com/article/doi/10.48130/tihort-0024-0002).

No BlueZone saving percentage should be inferred from B01's climate-resilience language.

## P3: Small

### B01-13: Page metadata and short descriptors do not reflect the client's wording

**Type:** Naming/positioning. **Where:** [HTML head](index.html), lines 4–7; [Footer](src/components/SectionFooter.jsx), line 224.

The title is “BlueZone — Zero Food Miles Produce,” and no meta description is defined. B03 now supplies the exact customer-facing phrase **“Zero-Mile Produce.”** Suggested umbrella/global title: **“BlueZone Aeroponics | Zero-Mile Produce.”** Suggested description: **“Explore modular aeroponic growing systems for year-round production close to demand, plus BlueZone microgreens and micro-herb supply enquiries.”** A separate produce page can use B01's product descriptor once supply status is clear. The earlier microgreens-only homepage title recommendation is superseded by this broader option.

### B01-14: Source links hide useful context that is already in the code

**Type:** Citation presentation. **Where:** [Problem](src/components/SectionProblem.jsx), `PRESSURES` and `EvidenceTile`; [Impact](src/components/SectionImpact.jsx), `TABS` and line 199; [SourceLink](src/components/primitives.jsx), line 392.

Visible links say only “See source,” although source names and dates are stored in the data. Show a concise author/organisation and year. Link the water trend to the specific release and the land figure to the actual 2024 analysis, rather than broad topic homepages. This helps distinguish contextual research from company evidence.

## Additional findings from B02

### B02-01: Explain the planned UK integration and support offer, not only the container

**Priority:** P1: Major. **Type:** Omission/positioning. **Where:** [About](src/components/SectionAbout.jsx), lines 44–62; [BioCube](src/components/SectionBioCube.jsx), lines 86–100; [Pilot](src/components/SectionPilot.jsx), `STEPS`.

- **Website:** Emphasises infrastructure BlueZone “builds,” physical features and adding units. It does not explain who operates the equipment or the planned commissioning, crop procedures, training and support package.
- **B02:** Page 1 §1 describes sourcing from a Chinese manufacturer and becoming the UK commercial integrator of private-label equipment. The scalable business is selling supported systems that customer organisations operate, while retaining the Somerset proof site (page 5 §10).
- **Adjust:** Explain the planned supply/install/train/support role and customer operating responsibility. Avoid wording that implies proprietary hardware manufacture or a BlueZone-run network of farms unless separately supported. “Builds” alone is ambiguous, not proof of a false manufacturing claim. There is no need to publish internal sourcing margins or procurement details to explain the customer offer.
- **Suggested copy:** “Our longer-term plan is to supply private-label aeroponic growing systems with installation, commissioning, crop operating procedures and staff training, supported by UK operating evidence and technical support. Customer teams would run day-to-day production.”
- **Qualification:** OEM rights, warranty arrangements, spares and support commitments still require confirmation under B02 page 5. Present the planned package without inventing service levels, contract terms or already-secured rights.

**B03 refinement:** Page 4 §9 calls the long-term proposition distributed fresh-food infrastructure, explicitly more than container resale. Explain the implementation and performance value without reducing the global brand to a UK reseller. Page 4 §7 assigns technical support/warranty/spares to the factory; distinguish that delivery role from BlueZone's coordination and commissioning support. Do not promise BlueZone itself directly performs every factory obligation. B03-02 records the pilot responsibility split.

### B02-02: Add the Somerset proof story without replacing supported customer pilots

**Priority after B03:** P2: Meaningful (previously P1). **Type:** Omission / strategy scope. **Where:** [Pilot](src/components/SectionPilot.jsx), lines 14–42 and 49–62; [About](src/components/SectionAbout.jsx), lines 54–62; no Somerset reference in the reviewed active sections.

- **Website:** “Your crops, your site and your numbers,” followed by Explore → Design → Pilot → Measure → Scale. This suggests the next proof step happens at the visitor's site.
- **B02:** Core conclusion on page 1, §5 on pages 2–3, and §10 on page 5 put the first **Somerset** unit first: commercial crop sales, UK operating evidence, then demonstration/training and selected customer pilots.
- **B03:** Pages 2 and 4 explicitly pitch a one-unit demonstration at the customer's location. “Your crops, your site and your numbers” is appropriate to that route, not inherently premature positioning.
- **Adjust:** Add the Somerset site's three intended roles in About or a proof section, alongside the global customer-pilot process. Keep the existing measure-before-scale principle. Withdraw the earlier instruction to replace the customer-pilot narrative with a universal Somerset-first sequence until the two immediate-priority plans are reconciled.
- **Suggested copy:** “Our first Somerset unit is intended to combine commercial microgreen production, operating-data collection and, once proven, demonstrations and training for future system customers.”
- **CTA:** “Discuss a pilot project” fits B03; “Register interest in Somerset demonstrations” fits the planned UK route. “Book a visit” needs confirmation that visits are available. Do not convert B02's first-three-months/3–6/6–9-month phases into dated launch promises or completed milestones.

### B02-03: State what automation does and what the customer's staff still do

**Priority:** P1: Major. **Type:** Material omission, not an existing explicit labour-free claim. **Where:** [Technology](src/components/SectionTechnology.jsx), lines 16–35 and 60–70; [BioCube](src/components/SectionBioCube.jsx), lines 18–71 and 94–100.

- **Website:** Describes automated-style environmental controls and a unit that connects to utilities and starts producing, with no explanation of manual work.
- **B02:** Page 1 §1 specifies customer staff seeding, loading, checking, harvesting and cleaning/resetting; automation controls much of the growing environment. Page 4 §§6 and 8 reinforce the customer-staff model.
- **Adjust:** Add a short “How it is operated” explanation alongside the system offer. Distinguish environmental control from crop handling and training. Do not add “fully autonomous,” “labour-free,” guaranteed staffing levels or quantified labour savings.
- **Suggested copy:** “The planned system automates much of the growing environment. Trained customer staff carry out seeding, loading, checks, harvesting and cleaning between cycles.”

### B02-04: Make operating economics part of the evidence plan without inventing ROI

**Priority:** P2: Meaningful. **Type:** Omission/qualification. **Where:** [Capacity](src/components/SectionCapacity.jsx), `STATS` and modelling footnote; [Pilot](src/components/SectionPilot.jsx), lines 33–42; [Method](src/components/SectionMethod.jsx), research evidence cards.

- **Website:** Headline evidence centres on output, density and general scientific benefits. Pilot mentions “economics” but does not say what will be measured or distinguish projected output from saleable output after losses.
- **B02:** Page 4 §9 prioritises actual saleable yield, cycles, electricity, water, inputs, labour, cleaning, reliability, prices, margin and customer payback. It frames a 2–3-year evidenced payback as a desirable future case, not an achieved result.
- **Adjust:** Add a concise planned-measurement statement, then publish dated operating results when available. A useful future case study should identify crop/configuration, measurement period, saleable yield after waste, labour and resource costs, and customer-specific assumptions. General aeroponics research cannot replace that evidence.
- **Suggested copy:** “The Somerset validation programme is intended to measure saleable yield, energy and water use, hands-on labour, inputs, maintenance and production cost.”
- **Do not publish yet:** “Pays for itself in 2–3 years,” guaranteed savings/profit, or a payback calculator populated with assumed BlueZone results. This is a guard against importing an internal target into web copy, not a claim that such promises already appear on the site. The document's CAPEX/annual-savings shorthand is not a supplied worked financial model.

**B03 refinement, page 4 §8:** Extend the pilot measures to **fully loaded cost/kg versus the customer's imported landed cost/kg**, crop-specific annual output, labour cost/kg, selected procurement displaced, litres water/kg, kWh/kg, harvest-to-kitchen time, shelf life, spoilage and quality consistency. The current “Yield, water, energy, labour, economics” is directionally correct but too generic to explain the procurement case. Present measures to agree and collect, not already-achieved benefits. Scale-up depends on agreed results, not an assumed successful pilot.

### B02-05: Aviation content should address catering production facilities

**Priority:** P2: Meaningful. **Type:** Positioning. **Where:** [Applications](src/components/SectionApplications.jsx), lines 31–40; [Why Zero-Mile](src/components/SectionWhyZeroMile.jsx), image alt text describing a BioCube “on an airport apron”; [Footer](src/components/SectionFooter.jsx), applications links.

- **Website:** “Airports and airline catering” blends two audiences and describes a site where fresh inventory must “land daily.” The airport-apron description points toward an aircraft setting.
- **B02:** Page 4 §7 targets the **airline caterer rather than the airline**, with a unit at or near the catering/production facility. The later sequence is demo visit → feasibility → one measured pilot → potential multi-site rollout.
- **Adjust:** Address caterer procurement/production teams and explain proximity to the kitchen. The existing broad airport label need not be banned: B03 page 2 pitches growing “at or near the airport,” and page 3 includes airlines as potential offtake/brand sponsors and the airport group as a site/enabling partner. Differentiate those roles. The apron alt text remains a concept illustration, not evidence of an installed catering farm. This finding concerns labels/alt text, not a new visual inspection. Use B03's specification-led, measured pilot sequence; do not make Somerset completion an assumed universal prerequisite while strategy scope is unresolved.
- **Do not imply:** dnata, Newrest or DO & CO are partners or customers. B02 identifies them as prospects only.

### B02-06: Farmer content needs the diversification and operating model

**Priority:** P2: Meaningful. **Type:** Underdeveloped but aligned content. **Where:** [Applications](src/components/SectionApplications.jsx), lines 82–92; [Pilot](src/components/SectionPilot.jsx).

The existing line about adding controlled-environment capacity alongside field operations is consistent with B02. Expand it using page 4 §6: an additional high-value indoor crop enterprise, operated by the farmer's trained staff, with the case demonstrated through actual Somerset labour, energy, yield and commercial results. Avoid presenting it as a replacement for conventional farming. A planned demonstration-interest route fits better than a cold equipment-sale proposition before proof. Specific returns and acreage claims still need configuration evidence.

### B02-07: Distinguish hospitality produce buyers from later large-group system buyers

**Priority:** P2: Meaningful. **Type:** Audience clarification. **Where:** [Applications](src/components/SectionApplications.jsx), lines 62–72; [Contact](src/components/SectionContact.jsx), `ORG_TYPES`.

B01 permits hotels and restaurants as produce buyers. B02 page 4 §8 narrows the later **systems** focus to large luxury resorts, multi-restaurant properties, central kitchens and hotel clusters, after wholesaler validation. Retain the existing fresh-produce, reliability and guest-story benefits, but distinguish buying produce from operating equipment. Show the customer-staff/training model for equipment prospects. Do not imply every small hotel is a suitable system customer, or remove small restaurants/hotels from the produce enquiry route.

**B03 refinement:** Pages 2–4 also allow a local operator supplying resort customers, rather than every hotel owning/running its own container. Explain both structures and qualify supply commitments. B03's Maldives immediate priority means the B02 “after wholesaler validation” timing cannot be treated as the sole agreed sequence.

## B02 material to interpret, not copy into public claims

- **Prospect and call lists:** Internal sales research, not testimonials, customer logos, committed volumes or endorsements. No company-list fact-check was needed to identify this distinction, and none of those businesses was contacted.
- **New heading:** “BlueZone Automated Farming Systems” names this strategy document. It does not expressly replace B01's BlueZone Aeroponics umbrella or approve a new logo/domain. Record the naming question for future materials; do not automatically rename the website.
- **OEM readiness tasks:** Confirmation of private-label rights, import/conformity responsibilities, liability, warranty/spares and support is a planning dependency. This audit does not make a legal determination or infer that any check is complete. No new compliance claims should be added from a to-do list.
- **Commercial tactics:** Container margins, preferential pilot pricing, case-study access, recurring consumables and support are proposed business arrangements, not publishable prices or customer entitlements.
- **Current status:** The document is dated 24 August 2026, but its proposed sequence is not an operational update. Verify commissioning, crop availability, demonstrations and pilot readiness before changing future-tense copy into present-tense promises.

## Additional findings from B03

### B03-01: Qualify commercial site fit instead of suggesting the system belongs anywhere

**Priority:** P1: Major. **Type:** Positioning / qualification gap. **Where:** [Applications](src/components/SectionApplications.jsx), lines 153–162; [Why Zero-Mile](src/components/SectionWhyZeroMile.jsx), `PILLARS`; [Contact](src/components/SectionContact.jsx), organisation/stage options and brief field.

- **Website:** “Anywhere fresh produce arrives late, expensive, or not at all.” The enquiry collects location, crops, volumes and project stage, but does not explain what makes a project viable.
- **B03:** Page 1 §1 explicitly rejects indiscriminate container selling. Its strongest fit combines supply constraints with recurring demand, high landed produce cost, usable resources, capital/funding and a credible operator; replication adds value.
- **Adjust:** Replace the universal line with selective fit language and explain a few screening criteria. In the systems enquiry branch, offer prompts for current weekly procurement, crops/specifications, indicative landed cost, intended site/operator and funding stage. Keep sensitive commercial details optional or for follow-up; do not turn every strategic factor into a compulsory form field.
- **Suggested copy:** “Strong candidates combine recurring fresh-green demand, costly or fragile supply, and a practical site, operator and funding route. We assess the crop and commercial case before defining a pilot.”
- **Boundary:** These are selection criteria, not a claim that every island, airport or wealthy market will be economic. Sustainability interest or an import problem alone is insufficient.

### B03-02: Explain what a commercial pilot involves and who supplies what

**Priority:** P1: Major. **Type:** Material omission. **Where:** [Pilot](src/components/SectionPilot.jsx), lines 49–62 and 95–98; [Contact](src/components/SectionContact.jsx), systems enquiry; [BioCube](src/components/SectionBioCube.jsx), product introduction.

- **Website:** “Test the model,” “reduces the commitment,” and site-specific terms, but no role split, agreed success measures or commercial basis. It does **not** explicitly offer a free trial; do not classify that as an existing false claim.
- **B03:** Page 4 §7 defines a measured commercial demonstration, not a free trial, with pre-agreed KPIs and a conditional path to multi-unit rollout.
- **Adjust:** State that pilot scope, responsibilities, commercial terms and success measures are agreed before deployment. Outline the proposed roles below without making unconfirmed contractual promises. Retain site-specific terms and assess readiness under B01-01.

| Proposed role in B03 | Contribution to explain |
| --- | --- |
| BlueZone | System, commissioning support, crop operating procedures and performance measurement. |
| Factory | Technical support, warranty and spare parts under confirmed arrangements. |
| Caterer, resort or local operator | Site, utilities, staff and a defined buyer/use for the produce. |
| Government or climate programme, where eligible | Potential grant, co-funding or demonstration support; not guaranteed funding. |

**Suggested copy:** “Each pilot is a commercial demonstration with an agreed crop specification, responsibilities and success measures. Results are compared with existing procurement before considering additional units.” Link this explanation to B02-04's measurable cost, resource, quality and procurement outcomes. Do not invent a pilot fee, free installation, assured savings or guaranteed rollout.

### B03-03: Give island and Gulf applications a concrete buyer/operator route

**Priority:** P2: Meaningful. **Type:** Underdeveloped supported positioning. **Where:** [Applications](src/components/SectionApplications.jsx), island, government/institution and resort cards; their linked application pages, which are not implemented (B01-16).

- **Website:** Island copy names freight dependence, lead times and arrival quality; government copy mentions food security. These match the strategy but do not identify who buys, operates or consumes the production. Gulf and dense-city constraints are not explained beyond generic location language.
- **B03:** Page 2 §4 and page 3 §6 describe resorts, distributors, local operators and government/development-backed programmes, including operator-plus-resort-offtake structures. Gulf rationale adds water/climate constraints, concentrated demand and investment capacity; Singapore adds land scarcity and a local-partner route.
- **Adjust:** Expand application copy to distinguish an operator supplying a resort cluster, an institution operating on site, and a funded demonstration with an eligible local partner. Explain why land, water, utilities, demand and procurement costs affect feasibility. “Offtake” can be translated into “an agreed buyer for the harvest.”
- **Boundary:** Markets listed in the strategy are **targets**, not a service-area or installation map. Named resort/account prospects are not customers. No need to publish the ranking tables or create a page for every country to explain these routes.

## B03 source checks and publication boundaries

Selected external checks completed on 22 September 2026. These assess claims in the supplied strategy that could inform future website copy; they are **not** additional defects attributed to the current site. The remaining country/account claims and every named local branch were not exhaustively verified.

| Claim or material in B03 | Finding and treatment |
| --- | --- |
| Singapore aims for 20% local fibre capacity by 2035 | Supported by the government's revised targets. “Fibre” here covers fresh leafy/fruited vegetables, beansprouts and mushrooms; it is not 20% of all food or a mandate for individual companies to achieve zero miles. [Ministry of Sustainability and the Environment, revised targets](https://www.mse.gov.sg/latest-news/oral-reply-to-parliamentary-question-on-revised-local-production-targets/). |
| ACT Fund 2: S$70 million over five years | Supported by SFA's factsheet. It describes co-funding for local farm capability/capacity; the programme's existence does not establish BlueZone or any specific proposed partner/project is eligible or funded. [SFA factsheet](https://www.sfa.gov.sg/news-publications/newsroom/media-factsheet---singapore-continues-to-strengthenits-food-supply-resilience). |
| Emirates Flight Catering/Bustanica validates aviation interest | The operator's 2022 announcement documents an airport-adjacent **hydroponic** farm supplying airline catering, not a BlueZone aeroponic installation. Valid as an industry precedent; not proof of BlueZone costs, yields or technology advantage. [Emirates, Bustanica launch](https://www.emirates.com/media-centre/emirates-flight-catering-opens-worlds-largest-vertical-farm-in-dubai/). |
| dnata/Greenspace demonstrates catering interest in local growing | dnata's April 2026 release documents its Melbourne microfarm and daily herb use; Greenspace identifies the WTCE installation as its microfarm. Supports the category precedent, not proven economics for a full-size BlueZone container. [dnata release](https://www.dnata.com/media-centre/dnata-showcases-live-microgarden-spotlighting-fresh-culinary-innovation-at-wtce/), [Greenspace partner coverage](https://greenspace.com/media). |
| Country scores such as Qatar 98, Singapore/Maldives 96 | B03 page 3 expressly labels these strategic prioritisation estimates. Do not turn them into independent market ratings, customer interest percentages or measured investment returns. |
| Named accounts, funding routes and existing growers | Treat as targets, possible enabling partners or third-party benchmarks, as labelled in B03. Verify branch identities, current programmes and proposed roles before publishing account-specific assertions. Do not imply endorsement, guaranteed offtake, a secured grant or a BlueZone relationship. |

**What should stay internal:** Outreach order, account rankings and scoring, proposed commercial structures not yet agreed, and assumptions about funding or procurement commitments. No prospect was contacted and no proposal was sent. B03's “immediate priorities” are source material for the audit, not instructions to execute those sales actions.

## External claim checks from the earlier website review

These are checks of website claims, not additions to B01's brand requirements. Links were reviewed on 22 September 2026. The ACS and Nature landing pages could not be fetched directly; the nutrition check used USDA's research summary, and the transport check used the original paper's PubMed abstract. The MDPI review was accessible through indexed text after the direct request was rate-limited. This was not an independent replication of any study.

| Website claim | Finding and copy treatment |
| --- | --- |
| Approximately 70% of freshwater withdrawals go to agriculture; renewable water per person fell 7% in a decade | Broadly supported. FAO gives 72% for global agricultural freshwater withdrawals and its December 2025 release reports the 7% decline. Approximate 70% is reasonable rounding; attach the period/source. [FAO global water-use statement](https://www.fao.org/director-general/articles/details/water-is-life--food-is-water--sustaining-water-and-ensuring-food-for-the-future/), [FAO 2025 release](https://www.fao.org/newsroom/detail/renewable-water-availability-per-person-plunges-7-percent-in-a-decade-as-global-scarcity-deepens--fao-data-shows/). |
| 44% of habitable land is used for agriculture | Matches the cited publisher's 2024 analysis, including grazing land. Keep “habitable” and “agriculture”; this is not 44% of all land or vegetable cropland. This verifies the published figure, not a fresh calculation from raw FAO data. [Our World in Data, 2024 analysis](https://ourworldindata.org/global-land-for-agriculture). |
| Transport represents 19% of food-system emissions, about 3 billion tonnes CO₂e annually | Supported as the estimate in Li et al. (2022), which includes upstream supply-chain transport. Fruit/vegetable consumption accounts for 36% of those food-mile emissions in the study. Attribute the estimate; do not present it as BlueZone's achievable reduction. [Original paper abstract](https://pubmed.ncbi.nlm.nih.gov/37118044/). |
| 25.4% of fruit and vegetables lost before retail | Supported for 2023 by FAO. Keep year, commodity group and pre-retail scope. See B01-08/09 for misuse in comparisons and causal wording. [FAO indicator](https://www.fao.org/sustainable-development-goals-data-portal/data/indicators/1231-global-food-losses/en/). |
| Fivefold nutrient advantage | A narrower research statement is supported; the site's universal headline and space claim overreach. See B01-07. |
| 98% water / 45–75% yield / 60% fertiliser | Found in the cited review; not independently verified for BlueZone. See B01-12. |
| 80%+ imports, BioCube specifications and annual output | Not established by B01, B02 or B03. B03 supports qualitative import dependence in target markets, not the site's universal 80% baseline. B02/B03 require measurement and contextual baselines. Require the market source, client specification or calculation respectively; general aeroponics research cannot validate these business-specific claims. |

## Content-delivery defects noticed alongside the audit

These are implementation observations, not brand contradictions. They matter because the interface promises actions or content that the checked code does not deliver.

| ID / priority | Evidence | Adjustment |
| --- | --- | --- |
| B01-15 / P1 | [Contact](src/components/SectionContact.jsx), lines 104–109: “Send enquiry” prevents submission and does nothing else. [Footer](src/components/SectionFooter.jsx), lines 50–54: Subscribe also has no submission handler beyond preventing the default. | Connect working submission flows before inviting enquiries/subscriptions, or replace with an honest working alternative. Confirm the displayed `contact@bluezoneaeroponics.com` with the client; B01 supplies no address. Mail delivery was not tested. |
| B01-16 / P2 | Application cards and footer link to `/applications/...`; the active app renders one unconditional homepage and contains no corresponding routes or pages. | Create the promised content or use appropriate existing section/enquiry links. Depending on hosting, these URLs may reload the homepage or return an error; deployed behaviour was not tested. |

## Existing content that aligns with the reviewed materials

- The BlueZone Aeroponics umbrella name is present in logo alt text, About and the footer. About's explanation of two business areas is useful once its status and placeholder issues are fixed.
- Microgreens and micro herbs already appear in Produce. They need a clearer supply proposition, not removal.
- Controlled climate and year-round/365-day production align with the client's sales messaging. Do not flag “365 days” itself as an invented promise when B01 explicitly uses it; avoid turning that message into a claim of uninterrupted operational uptime.
- Local production and improved resilience align with the Core Brand Idea. B03 explicitly supports **Zero-Mile Produce** as the headline. The existing strategic-distance footnote is aligned and should remain, with an emissions distinction added.
- Modular systems and a crop-flexible systems business fit B01. Product availability, specific models and verified performance remain separate questions.
- B02 supports the longer-term automated-container/OEM direction, pilots after validation, measurement before scaling, and farmer diversification alongside existing operations. The website's systems narrative has a place once stage, operating responsibility and the UK service package are clear.
- B03 supports prominent aviation/island/resort applications, international infrastructure positioning, customer-site pilots and the broader system crop range. The current “your crops, your site and your numbers” and measure-before-scale ideas fit it. Sector prominence alone should no longer be scored as wrong.
- No colour, typography or logo-rule changes are required by this text summary. Visual-brand compliance needs the relevant identity materials.

## Suggested revision order and later-document checklist

1. Correct B01-02's scientific comparison, then resolve unsupported availability and technical/performance promises (B01-01/06/07/08/09/12). Zero-Mile positioning and international applications are supported, not defects to remove.
2. Preserve that headline while clarifying produce versus systems and crop targets versus available stock (B01-03/04/05). Reconcile UK and global priority scope (B01-11); do not force UK-first ordering without that decision.
3. Explain commercial fit, pilot responsibilities and measurement (B03-01/02, B02-04), plus the supported integration/service and customer-operation model (B02-01/03).
4. Add Somerset's intended proof role alongside customer pilots (B02-02), and refine aviation, farmer, hospitality and island/Gulf routes (B02-05/06/07, B03-03).
5. Replace visible placeholders, finish the content-delivery paths and tidy descriptors/citations (B01-10/13/14/15/16).

For later materials, look specifically for: which UK/global plan controls homepage emphasis and immediate activity; Somerset commissioning and actual supply status; measured crop-specific operating data; OEM rights and agreed service/support responsibilities; BioCube and systems-line naming approval; specifications and capacity calculations; confirmed varieties/packs/delivery area; customer-pilot scope and availability; real company/team credentials; and contact details. Zero-Mile naming, the global applications and the wider crop-economics list now have B03 support and should not remain on the wholly-unverified list. Record the document/page that resolves each remaining finding. Do not assume upload order or PDF metadata alone establishes strategic precedence.

All **26 finding IDs** are retained: 16 from B01, seven from B02 and three from B03. Supported sub-issues have been explicitly withdrawn rather than counted as unfixed errors.

## Implementation status — 22 September 2026

| Status | Finding IDs | What changed or remains |
| --- | --- | --- |
| Implemented | B01-02, B01-03, B01-04, B01-05, B01-07, B01-08, B01-09, B01-10, B01-13, B01-14, B01-16, B02-02, B02-03, B02-04, B02-05, B02-06, B02-07, B03-01, B03-02, B03-03 | The homepage now presents two offers, gives BlueZone Microgreens a full enquiry-led section, corrects the method comparison and broad claims, adds visible source names, replaces placeholders, explains the planned Somerset proof role, strengthens commercial-pilot and application content, and routes application links to the systems enquiry. |
| Partially addressed | B01-11, B01-15, B02-01 | The homepage retains the supported international emphasis while About records the planned Somerset initiative. Contact now has separate produce and systems modes, preserves entered values and explicitly says that online submission is unavailable; the direct-email alternative remains. The inactive newsletter has been removed. Integration/support language is present at a high level, while specific OEM, warranty and service responsibilities still require confirmation. |
| Deferred for the BioCube pass | B01-01, B01-06, B01-12 | BioCube, Capacity and Specifications remain intentionally unchanged at the client's direction. Product readiness, system-specific specifications, capacity calculations, measured performance and the boundary around research figures therefore remain open. Their current qualifications do not resolve the underlying verification work. |

Online submission and email delivery remain unverified. No backend, database or new public route was added, and the interface does not report a false success state.

## Generated image handoff

Both assets are concept imagery and are visibly labelled **“Illustrative imagery.”** on the page.

| Asset | Saved path | Generation brief |
| --- | --- | --- |
| Mixed microgreens | `src/assets/microgreens/mixed-microgreens-concept.png` | Premium botanical concept photograph, landscape 3:2; loose mixed microgreens and micro herbs on a matte blue-grey ceramic dish, cool mist stone and navy linen, natural light, restrained palette; no packaging, facility, certification, text or logo. |
| Pea shoots | `src/assets/microgreens/pea-shoots-concept.png` | Premium pea-shoot detail, portrait 4:5; fresh shoots and curled tendrils on cool blue-grey stone and navy linen, soft natural light, restrained styling; no packaging, facility, certification, text or logo. |
