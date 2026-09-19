# Implementation brief: footer redesign

Redesign `src/components/SectionFooter.jsx`. A reference mockup is attached to the conversation.
Match its **layout**, not its copy or its brand name (the mockup says "BIOZONE" and carries
placeholder links — ignore both).

---

## Read first

1. `src/components/SectionFooter.jsx` — the current footer
2. `src/components/primitives.jsx` — specifically `BentoTile`, `Section`, `Body`, `IconBadge`
3. `src/index.css` — the `liquid-glass` and `noise-overlay` classes `BentoTile` applies
4. `DESIGN.md` and `PRODUCT.md` — constraints below are drawn from these
5. `src/components/HeroSection.jsx` — the `NAV_LINKS` and `CTA` constants, for href consistency

---

## What changes

The footer keeps its current shape: a dark `BentoTile` card inside a white `Section`. Three
things are added, and the interior is relaid out.

### 1. Photo banner across the top of the card

`src/assets/footer-image.png` already exists. Import it and render it as a full-bleed band
across the **top of the card**, flush to the card's edges, with the card's top corners rounding
the image.

**Image is 2172 × 724, exactly 3:1.** That drives the responsive behaviour:

- Desktop: let it sit at its natural `aspect-[3/1]`. At ≥1280px the whole frame is visible and
  nothing crops.
- Mobile: 3:1 at 390px is a 130px sliver. Set a floor (`min-h-[200px]` or a taller aspect below
  `sm`) with `object-cover`.
- **Crop point matters.** The BioCube sits at roughly 48–75% of the image width. When the
  container crops the sides on narrow screens, default centring pushes the unit toward the
  edge. Use `object-position: 62% center` below `sm`, centred at `sm` and up. `PRODUCT.md`
  makes this an explicit design principle: the BLUEZONE-branded face stays legible at every
  breakpoint.

**Blend the seam.** The bottom of the photo is bright sunlit grass and the card below it is
`bz-navy`. Butted together that is a hard, ugly line. Overlay a gradient scrim on the lower
~35% of the image, transparent at the top to solid `bz-navy` at the bottom, so the photo melts
into the panel. The reference mockup gets this effect for free because its source image is dark
at the bottom; yours is not.

**`BentoTile` padding will fight you.** It renders an outer `rounded-2xl` div and an inner div
carrying `innerClassName`, which currently defaults the footer to `p-8 md:p-12`. The image must
escape that padding. Do it without editing `BentoTile`: pass `className="overflow-hidden"` to
the outer div (needed for the image to clip to the rounded corners) and `innerClassName="p-0"`,
then apply the padding to a content wrapper *below* the image instead. Verify the
`noise-overlay` texture is not washing over the photograph once it renders.

### 2. Four-region content row, below the photo

Replace the current two-column layout with the reference's four regions, separated by thin
vertical rules (`border-white/10`, hairline, desktop only):

```
[ brand ]  |  [ 3 link columns ]  |  [ newsletter ]
```

- **Brand region:** the existing `bluezone.png` logo, the existing blurb, then a row of social
  icon buttons (see below). Keep the existing `contact@bluezoneaeroponics.com` mailto link —
  the reference has no email and dropping it would remove a real conversion path.
- **Link columns:** keep the existing `NAV` array exactly as it is — `Explore`, `Applications`,
  `Company`. Do **not** adopt the reference's Company/Products/Resources headings or its links
  (Blog, News, FAQs, Careers, Case Studies, Downloads, Request a Quote). None of those pages
  exist and the reference would add fifteen dead links. Column headings stay `bz-lime` as they
  are now.
- **Newsletter region:** see below.

Collapse order on mobile: brand → link columns (stacked or 2-up) → newsletter. Vertical rules
become horizontal borders or disappear entirely.

### 3. Newsletter block

```
STAY IN THE LOOP            ← eyebrow, uppercase, tracked ~0.18em, bz-teal
Get the latest updates      ← font-instrument-serif, ~text-3xl
Subscribe to our newsletter for product news, insights and closer food.
[ email input ] [ Subscribe → ]
```

- Input: transparent fill, `border-white/20`, white text, `placeholder:text-white/40`,
  `rounded-xl`, visible focus ring (`PRODUCT.md` requires visible focus states).
- Button: `bg-bz-teal` with `bz-navy` text, `rounded-xl`, arrow glyph or the existing
  `IconBadge`. Check contrast of navy on `#18A6A6` and darken the text rather than the fill if
  it fails AA.
- `type="email"`, `required`, a real `<label>` (visually hidden is fine), and `<form>` semantics
  so Enter submits.

**There is no backend.** Do not fabricate one and do not render a fake "Thanks for
subscribing!" success state. Wire `onSubmit` to a single stub with
`// TODO(backend): no subscribe endpoint yet` and report it back. If you think a `mailto:`
fallback is better than a dead handler, say so rather than deciding silently.

**Flag, don't resolve:** `PRODUCT.md` states "One CTA voice. Always 'Get in Touch'." A Subscribe
button is a second CTA competing with that. Build it as specified, but note in your report that
this is a deliberate departure from the stated principle so it can be signed off.

### 4. Bottom bar

Keep the existing copyright line. The reference adds Privacy Policy / Terms of Service /
Cookie Settings on the right — **only add those if the pages exist.** Check the repo first. If
they do not, keep the current "Sustainable food. Anywhere." tagline and mention it.

### Social icons

Reference shows LinkedIn, Instagram, YouTube. Use `lucide-react` (`Linkedin`, `Instagram`,
`Youtube`), each in an `<a>` with a real `aria-label`. Search the repo for existing social URLs
first — check `SectionContact.jsx` and `SectionAbout.jsx`. **If you cannot find real URLs, do
not link them to `#`.** Either omit the row or render it with a
`// TODO(links): awaiting real social URLs` and report it.

---

## Hard constraints

- **No new colors.** `bz-navy`, `bz-ocean`, `bz-blue`, `bz-teal`, `bz-field`, `bz-lime`,
  `bz-mist`, white/black at opacity. Do not touch `tailwind.config.js`. The reference's bright
  cyan maps to `bz-teal`.
- **No `box-shadow`.** `DESIGN.md` forbids it outright. The reference's Subscribe button appears
  to carry one — drop it.
- **`DESIGN.md` is hero-scoped in two places.** Its "`rounded-full` is the only corner
  treatment" and "zero brand color" rules describe the hero overlay only. Body sections use
  `rounded-2xl` / `rounded-xl` and the `bz-*` palette. Follow the body idiom, which the current
  footer already does.
- **Instrument Serif** only at the newsletter heading scale. Inter everywhere else.
- Keep `Reveal` wrapping so the footer animates in consistently with the rest of the page.
- Reuse primitives. Do not hand-roll a card, a button or a body paragraph.

---

## Verify before reporting done

1. `npm run build` passes clean.
2. Screenshot at **1440px, 768px and 390px**. Confirm at each: no horizontal overflow, the
   BioCube is still legible in the photo band, and the photo-to-panel seam reads as a blend
   rather than a line.
3. Tab through the footer. Every link, the input and the button take focus with a visible
   indicator.
4. Check contrast: `bz-lime` headings and `white/60` links on `bz-navy`, and the Subscribe
   button's text on `bz-teal`. AA is the baseline.
5. Confirm `tailwind.config.js` and `primitives.jsx` are both unchanged.
6. Confirm no link points at `#` as a placeholder.

## Report back with

- Files changed.
- The subscribe-handler decision and whether you added a `mailto:` fallback.
- Whether you found real social URLs or left the TODO.
- Whether legal pages exist, and what you did with the bottom bar.
- The one-CTA tension from `PRODUCT.md`, restated so it can be signed off.
- Anything in the reference you could not reproduce without breaking a constraint above.
