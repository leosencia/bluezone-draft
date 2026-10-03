export const COMPARISON_ROWS = [
  [
    "Nutrient delivery",
    "Solution is sprayed onto roots as mist.",
    "Delivery depends on the design: flowing solution, water culture or irrigation through a medium.",
  ],
  [
    "Oxygen at the roots",
    "Roots occupy an air space between misting events.",
    "Oxygen access is managed through the root environment, solution aeration and system design.",
  ],
  [
    "Water and nutrients",
    "Performance depends on delivery settings, recovery arrangements, crop needs and operation.",
    "Performance also depends on the chosen design and whether solution is recovered and reused.",
  ],
  [
    "Space and layout",
    "Bluezone's proposed designs use stacked growing racks.",
    "Hydroponic growing can also use space-efficient layouts; the method alone does not determine the footprint.",
  ],
  [
    "Everyday operation",
    "The growing plan needs dependable mist delivery and equipment care.",
    "The growing plan needs dependable solution delivery and appropriate root-zone management.",
  ],
  [
    "Results",
    "Evaluate usable crop output, quality and resource use for the actual system.",
    "Use the same crop, harvest specification and measurement period for a meaningful comparison.",
  ],
];

// Reconciled from the facility proposal totals, not measured BioCube output.
const annualYield = 516096;
const cultivationArea = 4 * 18 * 18;
const waterPerKg = ((375 * 1000 * 12) / annualYield).toFixed(2);
const energyPerKg = (6588250 / annualYield).toFixed(2);

export const PERFORMANCE_METRICS = [
  {
    value: Math.round(annualYield / cultivationArea).toString(),
    label: "kg / m² / year",
    detail:
      "Modelled yield across four cultivation rooms, excluding propagation and ancillary space.",
  },
  {
    value: waterPerKg,
    label: "litres of water / kg",
    detail:
      "Calculated from the facility's annual water input and modelled harvest.",
  },
  {
    value: "Zero",
    label: "pesticides planned",
    detail:
      "A production design aim, supported by a controlled growing environment.",
  },
  {
    value: "Year-round",
    label: "controlled production",
    detail:
      "Planned crop cycles throughout the year, subject to staffing, maintenance and crop readiness.",
  },
];

export const FACILITY_COMPARISON = [
  [
    "Room / facility size",
    "18 × 18 m per room (324 m²)",
    "Varies by facility",
    "Field-based",
  ],
  [
    "Total plants",
    "258,048 positions across 5 rooms, including propagation",
    "Varies",
    "Not specified",
  ],
  [
    "Annual yield",
    "516,096 kg across 4 cultivation rooms (modelled)",
    "~8,000–10,000 kg¹",
    "~3,000–5,000 kg¹",
  ],
  ["Water per kg", `~${waterPerKg} litres²`, "~5–8 litres¹", "~50–100 litres¹"],
  [
    "Electricity per kg",
    `~${energyPerKg} kWh²`,
    "~15–20 kWh¹",
    "Site-dependent; excludes grow lighting",
  ],
  [
    "Pesticide use",
    "None planned",
    "Can operate without pesticides",
    "Varies by crop and practice",
  ],
  [
    "Year-round production",
    "Designed for fully controlled production",
    "Possible with environmental control",
    "Climate- and crop-dependent",
  ],
  [
    "Grow cycle: lettuce",
    "36 days in the proposal³",
    "~35–40 days¹",
    "~60–90 days¹",
  ],
  [
    "Certification",
    "GMP + GAP stated; scope unverified",
    "Varies by operator",
    "Varies by operator",
  ],
  [
    "Digital monitoring",
    "Full APU platform specified",
    "Varies by system",
    "Manual or sensor-based",
  ],
  [
    "Scalability",
    "Modular rooms with shared site services",
    "Facility- and system-dependent",
    "Depends on land and infrastructure",
  ],
];

export const FAQS = [
  [
    "Does aeroponics use water?",
    "Yes. Water carries dissolved nutrients to the roots as a mist. “Roots in air” does not mean water-free growing.",
  ],
  [
    "Is aeroponics always better than hydroponics?",
    "There is no single result that applies to every crop and configuration. Compare the actual growing systems and operating conditions, including usable yield, quality, resources and the team's requirements.",
  ],
  [
    "Does indoor production run itself?",
    "Automated delivery and monitoring support operation, but the growing process still includes preparation, seeding, harvesting and handling. A pilot helps establish the operating effort and responsibilities.",
  ],
  [
    "Does the BioCube illustration represent every proposed project?",
    "The illustrated catalogue configuration is designed for microgreens. Crop selection, layout and equipment are agreed for each project.",
  ],
  [
    "How is Bluezone different from hydroponics?",
    "Both are soilless approaches. Bluezone aeroponics delivers nutrient solution as a mist to roots suspended in air, while other hydroponic systems may use flowing solution, reservoirs or growing media. The appropriate method depends on the crop, system and operating plan.",
  ],
  [
    "Does Bluezone guarantee yield, water savings or ROI?",
    "No. Those outcomes depend on the crop, design, operating conditions, energy use, labour and site. They should be measured against agreed criteria for the actual project.",
  ],
];
