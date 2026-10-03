// Configuration figures from BUEZONE CATALOGUE (3).pdf, not measured output.
export const CONFIGURATION = [
  { value: "70", unit: "m\u00b2", label: "Canopy area" },
  { value: "5", label: "Vertical tiers" },
  { value: "35", label: "Growing sections" },
  { value: "4,500", prefix: "Up to", label: "Planting boxes" },
];

export const TECHNICAL_DETAILS = [
  {
    title: "Growing area & racks",
    page: 4,
    rows: [
      ["Canopy area", "70 m\u00b2"],
      ["Growing sections / tiers", "35 / 5"],
      ["Planting boxes", "Up to 4,500"],
    ],
  },
  {
    title: "Aeroponic delivery",
    page: 5,
    rows: [
      ["Mist particle size", "20\u201360 \u00b5m"],
      ["Nozzles", "460"],
    ],
  },
  {
    title: "Climate & airflow",
    page: 8,
    rows: [
      ["HVAC electrical power", "16.6 kW"],
      ["Cooling capacity", "42 kW"],
      ["Catalogue space-temperature range", "5\u201328\u00b0C"],
    ],
  },
  {
    title: "Nutrient dosing & irrigation",
    page: 9,
    rows: [
      ["Dosing tanks", "3 fertiliser tanks and 1 acid tank"],
      ["Chiller temperature range", "12\u201325\u00b0C"],
    ],
  },
  {
    title: "Lighting & monitoring",
    page: 11,
    rows: [
      ["Total growing-light power", "9.6 kW"],
      ["Monitoring (catalogue p. 13)", "Digital monitoring and preset planting strategies"],
    ],
  },
];

const MEDIA_BASE = "https://pub-34b621e3b14a4751bd3e11015c4214e0.r2.dev/videos";

export const BIOCUBE_CLIPS = [
  { id: "chamber", title: "Inside the chamber", detail: "The growing area and rack layout.", src: `${MEDIA_BASE}/chamber.mp4` },
  { id: "mist", title: "Misting at the racks", detail: "A closer look at nutrient delivery.", src: `${MEDIA_BASE}/mist.mp4` },
];
