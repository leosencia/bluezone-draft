# BlueZone content source record

Reviewed: 29 September 2026. Internal editorial record; never import into the website or publish source PDFs. Selected public wording reflects the user-authorised plan, not independent engineering certification. Decision basis for every row: that plan and the dated [source review](../../BLUEZONE-SOURCE-OF-TRUTH-REVIEW.md).

## Source register

All originals remain in `C:/Users/Lawrence/Downloads/`. PDF pages are counted from 1.

| ID | Exact filename | Pages | Configuration |
| --- | --- | --- | --- |
| CAT | BUEZONE CATALOGUE (3).pdf | 15 | Proposed microgreens container |
| COMP | BlueZone Aeroponics vs Hyrdroponics (1).pdf | 6 | Comparative sales material; separate modular farm |
| PILOT | Bluezone Aeroponics Farming Proposal (2).pdf | 12 | Leafy-greens pilot and validation process |
| FARM | Bluezon Aeroponics Farming - Leafy Greens Indoor Farm Solution (1).pdf | 14 | Five-room facility and private economics |

Supplementary method definitions reviewed in the source review: [OSU Hydroponics](https://extension.okstate.edu/fact-sheets/hydroponics), [UMN Small-scale hydroponics](https://extension.umn.edu/how/small-scale-hydroponics), [Missouri Hydroponic Nutrient Solutions](https://extension.missouri.edu/publications/g6984). These explain methods; they do not verify BlueZone performance.

## Claim ledger

Values in the BioCube rows are displayed as label/value pairs beside the proposed-configuration qualification. Locations are under `src/components/` unless named otherwise.

Dedicated BioCube page added 3 October 2026 at `/biocube/`. `src/content/biocube.js`
and `src/pages/BioCubePage.jsx` reuse BC-001 through BC-013 and BC-SUB-1 through
BC-SUB-5 with the same proposed-configuration and output-validation qualifications.
The project steps shorten the existing generic pilot scope. No new yield,
savings, certification or commercial-performance claims are introduced.
Catalogue equipment and interface images are extracted from CAT pp. 5, 8, 9
and 13 and labelled as illustrations. Actual site footage is supplied by the
user via R2 (`/videos/chamber.mp4`, `/videos/mist.mp4`); it is not evidence of
catalogue specifications or validated production output.

| Claim ID | Configuration | Source/page | Evidence / decision | Selected public wording | Location |
| --- | --- | --- | --- | --- | --- |
| BC-001 | Proposed microgreens container | CAT p.4 | Source-stated design / Use with qualification | Up to 4,500 planting boxes | SectionBioCube.jsx |
| BC-002 | Proposed microgreens container | CAT p.4 | Source-stated design / Use with qualification | 70 m² canopy area | SectionBioCube.jsx |
| BC-003 | Proposed microgreens container | CAT p.4 | Source-stated design / Use with qualification | 35 sections | SectionBioCube.jsx |
| BC-004 | Proposed microgreens container | CAT p.4 | Source-stated design / Use with qualification | 5 vertical tiers | SectionBioCube.jsx |
| BC-005 | Proposed microgreens container | CAT p.5 | Source-stated design / Use with qualification | Mist particle size: 20–60 µm | SectionBioCube.jsx |
| BC-006 | Proposed microgreens container | CAT p.5 | Source-stated design / Use with qualification | Nozzle quantity: 460 | SectionBioCube.jsx |
| BC-007 | Proposed microgreens container | CAT p.8 | Source-stated design / Use with qualification | HVAC electrical power: 16.6 kW | SectionBioCube.jsx |
| BC-008 | Proposed microgreens container | CAT p.8 | Source-stated design / Use with qualification | Cooling capacity: 42 kW | SectionBioCube.jsx |
| BC-009 | Proposed microgreens container | CAT p.8 | Source-stated design / Use with qualification | Catalogue space-temperature range: 5–28°C | SectionBioCube.jsx |
| BC-010 | Proposed microgreens container | CAT p.9 | Source-stated design / Use with qualification | Dosing tanks: 3 fertiliser tanks and 1 acid tank | SectionBioCube.jsx |
| BC-011 | Proposed microgreens container | CAT p.9 | Source-stated design / Use with qualification | Chiller temperature range: 12–25°C | SectionBioCube.jsx |
| BC-012 | Proposed microgreens container | CAT p.11 | Source-stated design / Use with qualification | Total growing-light power: 9.6 kW | SectionBioCube.jsx |
| BC-013 | Proposed microgreens container | CAT p.13 | Source-stated design / Use with qualification | Monitoring and preset planting strategies | SectionBioCube.jsx |
| BC-STATUS | Proposed microgreens container | CAT pp.1,3–4,11; PILOT pp.10–12 | Source-stated design / Use with qualification | Proposed microgreens configuration, based on the supplied catalogue. Final specifications are confirmed for each project. Production output has not been verified. | SectionBioCube.jsx |
| BC-SUB-1 | Proposed microgreens container | CAT pp.4,11 | Source-stated design / Use with qualification | Growing racks: Stacked growing racks organise the growing area around a central access aisle. | SectionBioCube.jsx |
| BC-SUB-2 | Proposed microgreens container | CAT pp.5,9 | Source-stated design / Use with qualification | Nutrient delivery: Automated dosing and irrigation deliver water and nutrients through aeroponic misting. | SectionBioCube.jsx |
| BC-SUB-3 | Proposed microgreens container | CAT pp.6,8 | Source-stated design / Use with qualification | Climate and airflow: Integrated climate equipment and air distribution manage conditions within the growing area. | SectionBioCube.jsx |
| BC-SUB-4 | Proposed microgreens container | CAT pp.10–11 | Source-stated design / Use with qualification | LED lighting: Grow lighting supports a planned crop cycle inside the container. | SectionBioCube.jsx |
| BC-SUB-5 | Proposed microgreens container | CAT p.13 | Source-stated design / Use with qualification | Monitoring: Digital monitoring and preset growing strategies support day-to-day operation. | SectionBioCube.jsx |

| TECH-1 | Proposed microgreens container | CAT p.5 | Source-stated design / Use with qualification | Timed nutrient mist delivered to roots in an enclosed chamber. | SectionTechnology.jsx |
| TECH-2 | Proposed microgreens container | CAT p.9 | Source-stated design / Use with qualification | Automated dosing and irrigation support the crop plan. | SectionTechnology.jsx |
| TECH-3 | Proposed microgreens container | CAT pp.6,8 | Source-stated design / Use with qualification | Climate equipment and airflow manage conditions in the growing area. | SectionTechnology.jsx |
| TECH-4 | Proposed microgreens container | CAT pp.10–11 | Source-stated design / Use with qualification | LED lighting supports planned indoor crop cycles. | SectionTechnology.jsx |
| COMPARE-1 | General method | COMP pp.2–5 topics; OSU/UMN definitions; review §6 | General method / Use as general explanation | Nutrient delivery. Aeroponics: Solution is sprayed onto roots as mist. Other hydroponic systems: Delivery depends on the design: flowing solution, water culture or irrigation through a medium. | comparison.js |
| COMPARE-2 | General method | COMP pp.2–5 topics; OSU/UMN definitions; review §6 | General method / Use as general explanation | Oxygen at the roots. Aeroponics: Roots occupy an air space between misting events. Other hydroponic systems: Oxygen access is managed through the root environment, solution aeration and system design. | comparison.js |
| COMPARE-3 | General method | COMP pp.2–5 topics; OSU/UMN definitions; review §6 | General method / Use as general explanation | Water and nutrients. Aeroponics: Performance depends on delivery settings, recovery arrangements, crop needs and operation. Other hydroponic systems: Performance also depends on the chosen design and whether solution is recovered and reused. | comparison.js |
| COMPARE-4 | General method | COMP pp.2–5 topics; OSU/UMN definitions; review §6 | General method / Use as general explanation | Space and layout. Aeroponics: BlueZone's proposed designs use stacked growing racks. Other hydroponic systems: Hydroponic growing can also use space-efficient layouts; the method alone does not determine the footprint. | comparison.js |
| COMPARE-5 | General method | COMP pp.2–5 topics; OSU/UMN definitions; review §6 | General method / Use as general explanation | Everyday operation. Aeroponics: The growing plan needs dependable mist delivery and equipment care. Other hydroponic systems: The growing plan needs dependable solution delivery and appropriate root-zone management. | comparison.js |
| COMPARE-6 | General method | COMP pp.2–5 topics; OSU/UMN definitions; review §6 | General method / Use as general explanation | Results. Aeroponics: Evaluate usable crop output, quality and resource use for the actual system. Other hydroponic systems: Use the same crop, harvest specification and measurement period for a meaningful comparison. | comparison.js |
| FAQ-1 | General method / proposed container | Review §6; CAT pp.1,3–5,11; PILOT pp.10–12; OSU | General method / Use as general explanation | Does aeroponics use water? Yes. Water carries dissolved nutrients to the roots as a mist. “Roots in air” does not mean water-free growing. | comparison.js |
| FAQ-2 | General method / proposed container | Review §6; CAT pp.1,3–5,11; PILOT pp.10–12; OSU | General method / Use as general explanation | Is aeroponics always better than hydroponics? There is no single result that applies to every crop and configuration. Compare the actual growing systems and operating conditions, including usable yield, quality, resources and the team's requirements. | comparison.js |
| FAQ-3 | General method / proposed container | Review §6; CAT pp.1,3–5,11; PILOT pp.10–12; OSU | General method / Use as general explanation | Does indoor production run itself? Automated delivery and monitoring support operation, but the growing process still includes preparation, seeding, harvesting and handling. A pilot helps establish the operating effort and responsibilities. | comparison.js |
| FAQ-4 | General method / proposed container | Review §6; CAT pp.1,3–5,11; PILOT pp.10–12; OSU | General method / Use as general explanation | Does the BioCube illustration represent every proposed project? The illustrated catalogue configuration is designed for microgreens. Crop selection, layout and equipment are agreed for each project. | comparison.js |
| FAQ-5 | General method / proposed system | CAT pp.3,5–11,13; PILOT pp.6,9–12 | General method / Use with qualification | BlueZone combines aeroponic delivery, stacked racks, lighting, climate management and monitoring. Crop and configuration are agreed per project. | SectionFAQ.jsx |
| FAQ-6 | Crop feasibility | CAT p.12; PILOT pp.10–12 | Editorial qualification / Requires validation | Strawberries and other crops are framed as crop-specific feasibility questions, not confirmed BioCube output. Variety, pollination, climate, labour and buyer requirements require validation. | SectionFAQ.jsx |
| FAQ-7 | Site and operation | CAT pp.3–11; PILOT pp.10–12 | General method / Use with qualification | Site needs and automation depend on the selected system, crop and operation. Automation supports rather than replaces the growing team. | SectionFAQ.jsx |
| FAQ-8 | UAE supply contribution | FOOD-SECURITY-SOURCES.md | Editorial synthesis / Use with qualification | Local controlled production can complement imports for selected crops; no replacement, savings or national-impact claim is made. | SectionFAQ.jsx |
| FAQ-9 | Pilot evaluation | PILOT pp.10–12 | Source-stated evaluation scope / Use as general explanation | Evaluate buyer, crop, site, team, yield, quality, inputs, labour, reliability and workflow before expansion. | SectionFAQ.jsx |
| FAQ-10 | General method | Review §6; OSU/UMN definitions | General method / Use as general explanation | BlueZone aeroponics uses mist-fed suspended roots; other hydroponic designs may use flowing solution, reservoirs or growing media. | comparison.js |
| FAQ-11 | Commercial outcomes | Review §6; PILOT pp.10–12 | Editorial qualification / Requires validation | BlueZone does not guarantee yield, water savings or ROI. Project outcomes require measurement against agreed criteria. | comparison.js |
| PILOT-1 | Generic pilot | PILOT pp.10–11 | Source-stated evaluation scope / Use as general explanation | Usable yield and crop quality | SectionPilot.jsx |
| PILOT-2 | Generic pilot | PILOT pp.10–11 | Source-stated evaluation scope / Use as general explanation | Energy, water and nutrient use | SectionPilot.jsx |
| PILOT-3 | Generic pilot | PILOT pp.10–11 | Source-stated evaluation scope / Use as general explanation | Labour and operating responsibility | SectionPilot.jsx |
| PILOT-4 | Generic pilot | PILOT pp.10–11 | Source-stated evaluation scope / Use as general explanation | Cost per usable kilogram | SectionPilot.jsx |
| PILOT-5 | Generic pilot | PILOT pp.10–11 | Source-stated evaluation scope / Use as general explanation | Procurement volume and cost displaced | SectionPilot.jsx |
| PILOT-6 | Generic pilot | PILOT pp.10–11 | Source-stated evaluation scope / Use as general explanation | Reliability across repeated crop cycles | SectionPilot.jsx |
| PILOT-7 | Generic pilot | PILOT pp.10–11 | Source-stated evaluation scope / Use as general explanation | Food-safety and quality requirements | SectionPilot.jsx |
| PILOT-8 | Generic pilot | PILOT pp.10–11 | Source-stated evaluation scope / Use as general explanation | Fit with receiving, handling and kitchen workflows | SectionPilot.jsx |
| PILOT-EXPAND | Generic pilot | PILOT pp.10–12 | Source-stated evaluation scope / Use as general explanation | Scope, responsibilities, duration and commercial terms are agreed per site. Expansion is conditional on the demonstration meeting the measures agreed at the start. | SectionPilot.jsx |
| IMAGE-HERO | Visual | Existing hero frame sequence; concept provenance | Illustrative / Use with qualification | BioCube concept illustration | HeroSection.jsx |
| IMAGE-AIRPORT | Visual | Existing plane-final.png; concept asset | Illustrative / Use with qualification | Concept illustration of production close to demand. | SectionWhyZeroMile.jsx |
| IMAGE-SITING | Visual | Existing siting.png; concept asset | Illustrative / Use with qualification | Concept illustration. Actual siting and logistics depend on the project. | SectionShift.jsx |
| IMAGE-FOOTER | Visual | Existing footer-image.png; concept asset | Illustrative / Use with qualification | Concept illustration. Final siting and equipment depend on the project. | SectionFooter.jsx |
| IMAGE-BC | Visual | CAT p.4; existing extracted catalogue-cutaway.webp | Illustrative / Use with qualification | Catalogue illustration of the proposed microgreens configuration. Final equipment and layout may change. | SectionBioCube.jsx |
| IMAGE-PRODUCE | Visual | Existing mixed-microgreens-concept.png and pea-shoots-concept.png; generated illustrative assets retained | Illustrative / Use with qualification | Illustrative imagery. | SectionProduce.jsx |
| IMAGE-TECH | Visual | Existing ImagePlaceholder component; no new asset | Illustrative / Use with qualification | Image placeholder. Approved growing-system photography to follow. | SectionTechnology.jsx |
| IMAGE-COMP | Visual | Existing ImagePlaceholder component; no new asset | Illustrative / Use with qualification | Image placeholder. Growing-system photography to follow. | ComparisonPage.jsx |
| HOLD-OUTPUT | Model/business context | CAT p.4 | Unconfirmed or internal commercial / Hold | None | Not published: Annual output not validated |
| HOLD-SAVINGS | Model/business context | CAT p.9; COMP pp.2–5; FARM p.12 | Unconfirmed or internal commercial / Hold | None | Not published: Conflicting or undefined comparative baselines |
| HOLD-MODEL | Model/business context | PILOT p.6 | Unconfirmed or internal commercial / Hold | None | Not published: 40-foot/APU applicability to catalogue container unconfirmed |
| HOLD-CERT | Model/business context | CAT pp.3,7–10,14; FARM p.12 | Unconfirmed or internal commercial / Hold | None | Not published: Certification, sterile-air and performance assertions lack supporting records |
| HOLD-COUNTERPARTY | Model/business context | PILOT pp.1–12 | Unconfirmed or internal commercial / Hold | None | Not published: Named counterparties and proposal location remain internal |
| HOLD-ECONOMICS | Model/business context | FARM pp.8–14; PILOT pp.10–12 | Unconfirmed or internal commercial / Hold | None | Not published: Pricing, returns, financing and project economics remain internal |
| HOLD-SOMERSET | Model/business context | No confirmation in four PDFs | Unconfirmed or internal commercial / Hold | None | Not published: Unsupported location removed |
| HOLD-CONTACT | Model/business context | CAT p.15; existing site | Unconfirmed or internal commercial / Hold | None | Not published: Different named contact/domain; preserve site inbox pending confirmation |

## Indoor vertical farming presentation

The landing page's indoor vertical farming section explains stacked growing tiers as the layout, aeroponic mist as the root-delivery method, and BioCube as BlueZone's proposed containerised system. The large BioCube cutaway and climate/lighting images are labelled catalogue illustrations (CAT pp.4–11); the root-zone image is a concept illustration. The chamber still comes from actual on-site phone footage and shows one installation, not necessarily the proposed catalogue configuration. The BioCube page's Working Together cards separate stacked growing space, nutrient delivery, crop lighting and climate/airflow (BC-SUB-1 through BC-SUB-4); monitoring remains a separate image feature (BC-SUB-5). None of these descriptions establishes yield, water savings, crop availability or turnkey operation.

## Comparison update, 2026-10-03

The user requested an expanded comparison page and authorised choosing
reasonable figures after clarification of conflicting ratios. See
[comparison benchmarks](COMPARISON-PAGE-BENCHMARKS.md) for the model-derived
figures, assumptions and source qualifications now used on that page.
Earlier numerical holds remain applicable to BioCube and other pages;
these estimates must not be recast as verified operating performance.

## Public comparison paragraphs

The paragraphs in source-review §6 are implemented without numerical rankings: the introduction and method definitions use OSU terminology; BlueZone rationale uses CAT pp.3,5–11,13 and PILOT pp.6,9; whole-system comparison is editorial synthesis of conflicting source models; pilot paragraphs use PILOT pp.2,7,10–12. All remain general explanation or design intent. Their exact selected wording follows:

- COMP-P-1: Two approaches to soilless growing. The difference starts at the roots.
- COMP-P-2: Both approaches feed plants with water and dissolved nutrients. Aeroponics delivers that solution as a mist to roots suspended in air. Other hydroponic systems deliver it through a shallow flowing film, an aerated reservoir or irrigation through a growing medium.
- COMP-P-3: The choice affects how a system is designed, monitored and maintained. Crop performance depends on the whole growing environment and operating plan.
- COMP-P-4: Roots hang inside a growing chamber and receive nutrient solution through misting nozzles. BlueZone's proposed systems combine this delivery method with growing racks, lighting, climate management and monitoring.
- COMP-P-5: Hydroponics covers several designs. Nutrient film systems pass a shallow stream along the roots; water-culture systems support roots in an oxygenated solution; other systems irrigate a growing medium. Roots are not necessarily fully submerged.
- COMP-P-6: A misting method alone does not establish faster harvests, lower electricity bills or a particular yield. Lighting, climate equipment, crop selection, harvest stage and operating conditions all affect the result.
- COMP-P-7: {aero}
- COMP-P-8: {hydro}
- COMP-P-9: {aero}
- COMP-P-10: {hydro}
- COMP-P-11: BlueZone's approach brings nutrient mist directly to the root zone within an integrated growing environment. Racks, nutrient delivery, lighting, climate management and monitoring work together around a crop plan.
- COMP-P-12: The aim is to make controlled production practical closer to demand. The system configuration and operating process should be assessed against the crop, site and buyer's requirements.
- COMP-P-13: A useful comparison measures usable harvest, crop quality, water and nutrient inputs, total energy, labour and reliability on a consistent basis. For a commercial project, it also considers food-safety requirements and how the harvest fits the buyer's workflow.
- COMP-P-14: A BlueZone pilot is designed to test the operating case before expansion. Agree the crop and success criteria, run the growing process, measure results and review whether the system suits the site.
- COMP-P-15: {answer}

## Business context and history

Retain existing produce enquiries without guaranteeing availability: “Discuss pea shoots and microgreens, including the pack formats and quantities your kitchen or customers need.” (SectionProduce.jsx; business context unconfirmed in PDFs, authorised enquiry wording.) Microgreens/micro herbs remain enquiry topics, not a current stock list. CAT p.12 supplies crop examples only. Keep `contact@bluezoneaeroponics.com` as the existing public inbox pending client confirmation; do not copy the personal contact or telephone from CAT p.15.

The old `BIOCUBE-CATALOGUE-IMPLEMENTATION-PLAN.md` is preserved unchanged as historical documentation. The source review is preserved as a dated analysis. Existing concept assets are retained and labelled; this implementation creates no graphic assets. Configuration, source page or wording changes require a ledger update.
