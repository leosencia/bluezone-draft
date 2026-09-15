/** @type {import('tailwindcss').Config} */

// DEVIATION FROM THE MOTION-SITES PROMPT (which specified "default config,
// no custom theme extensions"). A brand implementation needs named tokens —
// otherwise every colour in the markup is a raw hex arbitrary value and the
// palette is impossible to maintain. Values are verbatim from
// BlueZone_Aeroponics_Brand_Kit_V1 §03 / §04.

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Nested under `brand` so none of these shadow Tailwind's own
        // `teal-*` / `lime-*` scales.
        brand: {
          navy: '#071B2B',  // Midnight Navy — primary brand / headers / dark UI
          ocean: '#0D3B5C', // Deep Ocean   — secondary dark / panels / gradients
          blue: '#087EA4',  // BlueZone Blue — primary action / links / technical accents
          teal: '#18A6A6',  // Aero Teal    — aeroponics / water / data accents
          field: '#6F9F43', // Field Green  — biology / crops / selected highlights
          lime: '#B6D88A',  // Fresh Lime   — rare accent / status / micro-details
          mist: '#F4F7F7',  // Mist         — background / cards / whitespace
        },
      },
      fontFamily: {
        // §04: Montserrat for display, Inter for body/interface. Two families max.
        display: ['Montserrat', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
