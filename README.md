# BlueZone — Header + Hero

React + Vite + Tailwind CSS v3 + lucide-react. Built from the Motion Sites hero
spec, with the background, navigation and copy taken from the BlueZone Final
Website Structure.

## Run

```bash
npm install
npm run dev
```

## What came from where

Motion Sites spec, unchanged: layout (`w-full h-screen overflow-hidden`,
`relative z-10` content layer), navbar padding, hamburger geometry and
animation, overlay timings, hero container/heading/subtext/button classes,
Instrument Serif + Inter, `index.css` reset.

Replaced per the structure document:
- Background: the client's BioCube render (`src/assets/hero-biocube.*`) instead
  of the CloudFront video, `object-cover`, WebP with JPEG fallback.
- Navigation: Why Zero-Mile / Impact / Technology / BioCube / Applications /
  Produce / About (16 / Navigation & Footer), with "Discuss a Project" as the
  persistent CTA in place of "Reach Out" + "Let's Talk".
- Headline: "ZERO *mile* PRODUCE".
- Subheadline: "Fresh greens grown where they're needed most."
- No performance, ROI or capacity claims appear here.

## Deviations worth knowing

- Desktop nav appears at `xl` (1280px), not `md`. Seven links plus the CTA
  overflow a 1024px bar; below `xl` the hamburger menu carries the nav.
- Mobile menu links are `py-3 sm:py-4` rather than `py-4`, so all seven fit a
  375x667 screen without scrolling.
## Notes

- Body scroll locks while the menu is open; Escape closes it.
- Nav `href`s are placeholders matching the sitemap; wire them to your router.
- On tall phone viewports `object-cover` crops to the middle of the BioCube.
  If the full unit should read on phones, a dedicated portrait crop of the
  render is the fix.
