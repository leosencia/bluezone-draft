---
name: BlueZone Hero
description: Full-bleed BioCube photography carrying a calm, engineered, achromatic UI overlay.
colors:
  white-100: "#FFFFFF"
  white-90: "#FFFFFFE6"
  white-80: "#FFFFFFCC"
  white-70: "#FFFFFFB3"
  white-60: "#FFFFFF99"
  white-40: "#FFFFFF66"
  white-10: "#FFFFFF1A"
  black-100: "#000000"
  black-90: "#000000E6"
typography:
  display:
    fontFamily: "'Instrument Serif', serif"
    fontSize: "clamp(1.875rem, 1.1rem + 3.2vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "'Instrument Serif', serif"
    fontSize: "clamp(2.25rem, 1.6rem + 2.6vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(0.875rem, 0.82rem + 0.2vw, 1rem)"
    fontWeight: 300
    lineHeight: 1.625
    letterSpacing: "normal"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 300
    lineHeight: "normal"
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: "normal"
    letterSpacing: "normal"
rounded:
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "48px"
  2xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.white-100}"
    textColor: "{colors.black-100}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.white-90}"
    textColor: "{colors.black-100}"
    rounded: "{rounded.full}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.white-100}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "12px 28px"
  button-secondary-hover:
    backgroundColor: "{colors.white-10}"
    textColor: "{colors.white-100}"
    rounded: "{rounded.full}"
  nav-link:
    textColor: "{colors.white-80}"
    typography: "{typography.title}"
  nav-link-hover:
    textColor: "{colors.white-100}"
  hamburger-bar:
    backgroundColor: "{colors.white-100}"
    rounded: "{rounded.full}"
    height: "2px"
    width: "24px"
---

# Design System: BlueZone Hero

## 1. Overview

**Creative North Star: "Signal in the Dark"**

The BioCube's interior grow-light is the one bright, warm thing in an otherwise still, dark frame: open ocean, open sky, one engineered object. Every UI element on top of that photograph is a signal, not a surface: white text, a white pill, a thin white line, nothing more. Signals don't compete with what they're pointing at.

This system carries zero brand color of its own. Every hue in the frame belongs to the photograph. The chrome (navbar, hamburger, CTAs, mobile-menu overlay) exists only in white and black, at varying opacity, so it reads as instrument-panel signal rather than decoration. This is a deliberate gap in the system today, not a named prohibition: a future brand accent could be introduced without contradicting this spec, but nothing here currently earns that color.

The system explicitly rejects generic SaaS/AI-tool marketing tells: gradient-text headlines, glassmorphism panels, hero-metric stat cards, dashboard-carousel narratives. `src/components/BlueZoneHero.jsx`, sitting unused in this repo, is a live example of that failure mode (navy/blue gradient headline, tab-carousel hero) and should not be mined for tokens or patterns.

**Key Characteristics:**
- Full-bleed photography is the only color source; UI chrome is pure white/black at varying opacity.
- Pill shape (`rounded-full`) is the only corner treatment in the system — no other radius exists.
- Depth comes from opacity and `backdrop-blur`, never from box-shadow.
- Motion is precise and unhurried: a single custom cubic-bezier, deliberate 500–700ms durations, no bounce.

## 2. Colors

Achromatic by design: every token is white or black at a specific opacity, used semantically against the hero photograph.

### Primary
- **Signal White** (`#FFFFFF`): the one solid fill in the system. Primary CTA background, hamburger bars, hero headline, mobile-menu link text.

### Neutral
- **Ink** (`#000000`): text color inside white-filled buttons only.
- **Scrim Black** (`#000000E6`, 90%): full-bleed backdrop behind the mobile menu overlay, paired with `backdrop-blur-xl`.
- **Signal 90** (`#FFFFFFE6`): hover fill for the primary CTA.
- **Signal 80** (`#FFFFFFCC`): default nav-link color.
- **Signal 70** (`#FFFFFFB3`): hero subheading paragraph.
- **Signal 60** (`#FFFFFF99`): secondary-button border on hover.
- **Signal 40** (`#FFFFFF66`): secondary-button border at rest.
- **Signal 10** (`#FFFFFF1A`): secondary-button fill on hover; hairline divider under mobile-menu links.

## 3. Typography

**Display Font:** Instrument Serif (with serif fallback)
**Body Font:** Inter (with system-ui, sans-serif fallback)

**Character:** A single serif voice carries every large, declarative moment (hero headline, mobile-menu links); Inter at font-light carries every small, quiet moment (nav, body copy). The pairing is intentionally narrow — two families, no more.

### Hierarchy
- **Display** (400, `clamp(1.875rem, …, 4.5rem)`, 1.1 line-height): the hero H1. Scales `text-3xl → sm:4xl → md:5xl → lg:6xl → xl:7xl`. The opening line is italic for emphasis; the rest is upright.
- **Headline** (400, `clamp(2.25rem, …, 3rem)`, 1.1 line-height): mobile full-screen menu links (`text-4xl sm:text-5xl`), staggered in on open.
- **Body** (300, `clamp(0.875rem, …, 1rem)`, 1.625 line-height): the hero subheading paragraph, capped at `max-w-md` (~28ch) so it never runs wide.
- **Title** (300, 0.875rem): navbar links and the navbar tagline — quiet, wayfinding text at `white-80`, brightening to full white on hover.
- **Label** (500, 0.875rem): button and pill text — the only place medium weight appears.

### Named Rules
**The One Voice Rule.** Instrument Serif is reserved for the two largest moments (hero H1, mobile-menu links) and never appears at body or label size. Inter never appears above headline size. The two fonts don't blend at the same scale.

## 4. Elevation

Flat by default: no `box-shadow` anywhere in the system. Depth is conveyed two other ways — opacity layering (white/black at fractional alpha against the photograph) and `backdrop-blur-xl` on the mobile-menu scrim, which separates the overlay from the page beneath it without a shadow.

### Named Rules
**The No-Shadow Rule.** If a component needs to look "above" the photo, reach for opacity or blur, never `box-shadow`. A shadow on this surface would read as a UI-kit default, not an engineered instrument.

## 5. Components

Buttons, nav links and the hamburger are the entire component vocabulary. Every one of them should feel **precise and unhurried**: state changes run on a single custom ease, never a default browser transition.

### Buttons
- **Shape:** pill (`rounded-full`, 9999px) — the only radius in the system.
- **Primary:** white fill, black text, `padding: 12px 28px`, `label` typography. Hover drops the fill to `white-90` — a near-imperceptible dim, not a color change.
- **Secondary / Ghost:** transparent fill, white text, 1px `white-40` border, same pill shape and padding as primary. Hover brightens the border to `white-60` and fills to `white-10` — still legible as "secondary," never mistaken for primary.
- **Transitions:** `color`/`background-color`/`border-color` only, 200ms, default ease. (Faster than the hamburger/menu motion below — buttons respond to touch immediately; navigation chrome moves deliberately.)

### Navigation
- **Style:** `title` typography (Inter, 300, 0.875rem) at `white-80`, brightening to full white on hover, 200ms transition. No underline, no background change.
- **Desktop breakpoint:** the full nav row only appears at `xl` (1280px) — seven links plus a CTA don't fit at `lg`, so everything below `xl` collapses to the hamburger.
- **Hamburger → close morph:** three `2px`-tall, `white-100`, `rounded-full` bars. Open state: top bar translates down 9px and rotates 45°, middle bar fades to 0 opacity, bottom bar translates up 9px and rotates -45° — together they read as a single X, not three separate marks. Runs on `cubic-bezier(0.76, 0, 0.24, 1)`, 500ms.
- **Mobile overlay:** full-screen, `black-90` background plus `backdrop-blur-xl`, fading in over 700ms on the same custom ease. Links stagger in individually (150ms base delay + 80ms per item), each translating up from `translate-y-8`/`opacity-0` to rest. Once the stagger finishes once, delays drop to 0 so hover response stays instant on repeat opens — deliberate entrance, instant thereafter.

## 6. Do's and Don'ts

### Do:
- **Do** keep every UI color at pure white or pure black, at a deliberate opacity — no third hue, no tint, unless a real brand-accent decision is made and documented here first.
- **Do** use `rounded-full` for every interactive shape (buttons, pills, hamburger bars). No other radius exists in this system.
- **Do** reserve Instrument Serif for the two largest type roles (display, headline) only.
- **Do** run chrome transitions on `cubic-bezier(0.76, 0, 0.24, 1)` at 500–700ms for anything that opens/closes (menu, hamburger); keep hover/press feedback at ~200ms so touch still feels immediate.
- **Do** keep the BioCube's branded face in frame at every breakpoint — the background photo's crop point is a design decision, not an afterthought (`object-position`, not bare `object-center`, once the viewport gets narrow enough to crop the unit out).

### Don't:
- **Don't** use gradient-text hero headlines, glassmorphism panels, hero-metric stat-card templates, or dashboard-carousel narratives — the generic SaaS/AI-tool tells this system explicitly rejects. `src/components/BlueZoneHero.jsx` is the anti-pattern already sitting in this repo; don't extend it or pull tokens from it.
- **Don't** add `box-shadow` anywhere. Depth comes from opacity and blur only.
- **Don't** introduce a second accent color casually. The achromatic palette is a current gap, not a locked rule — but any color addition needs a deliberate decision recorded here, not a one-off utility class.
- **Don't** let Instrument Serif appear at body or label size, or Inter appear above headline size — the two-voice pairing breaks if they blend.
