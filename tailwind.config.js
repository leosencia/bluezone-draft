/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'instrument-serif': ['"Instrument Serif"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        bz: {
          navy: '#071B2B', // Midnight Navy — primary brand, headers, dark UI
          ocean: '#0D3B5C', // Deep Ocean — secondary dark, panels, gradients
          blue: '#087EA4', // BlueZone Blue — primary action, links, technical
          teal: '#18A6A6', // Aero Teal — aeroponics, water, data accents
          field: '#6F9F43', // Field Green — biology, crops, highlights
          lime: '#B6D88A', // Fresh Lime — rare accent, status, micro-details
          mist: '#F4F7F7', // Mist — background, cards, whitespace
        },
      },
    },
  },
  plugins: [],
};
