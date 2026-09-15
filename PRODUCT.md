# Product

## Register

brand

## Users

Mixed B2B and investor/press audience: institutional buyers (resorts/hotels, airports, government, commercial growers) evaluating BlueZone as a vertical-farm infrastructure vendor, alongside investors and media forming a first impression. They arrive skeptical of "gadget" framing and are looking for evidence this is engineered, deployable infrastructure, not a lifestyle product.

## Product Purpose

BlueZone Aeroponics' marketing site introduces modular, water-efficient vertical farms (the BioCube) for islands, remote communities, and other zero-mile-produce contexts. The hero is the first, and often only, impression: it must read as credible industrial infrastructure and convert into a "Get in Touch" contact, not just admiration.

## Brand Personality

Engineered, calm, premium. Voice is confident and unhurried, not hype-driven. Visuals let the BioCube photography carry the proof; interface chrome (navigation, type, buttons) stays quiet and gets out of the way. No hedging copy, no invented stats, no urgency tactics.

## Anti-references

Generic SaaS / AI-tool marketing: gradient-text hero headlines, glassmorphism panels, "hero-metric" stat-card templates, stock dashboard-carousel narratives. If it could be mistaken for a generic AI-tool landing page, it has failed. (Note: `src/components/BlueZoneHero.jsx` in this repo is exactly this failure mode — a navy/blue gradient-headline tab-carousel exploration that is not wired into the app and should not be treated as the design reference. `src/components/HeroSection.jsx`, the component actually rendered by `App.jsx`, is the canonical direction.)

## Design Principles

- **Photograph as proof, not decoration.** The BioCube render is the argument; UI chrome (nav, type, buttons) stays minimal and never competes with it.
- **Restraint over spectacle.** Calm, engineered confidence beats SaaS-flash animation or gradient tricks. If a choice reads as "trying too hard," cut it.
- **One CTA voice.** Always "Get in Touch" (or an equally specific, non-generic label) — never "Contact Us."
- **Full-bleed parity across breakpoints.** The BioCube unit, and specifically its BLUEZONE-branded face, must stay legible whether the background image is being viewed on a wide desktop or a narrow phone crop.
- **Evidence over hype.** No unattributed statistics or invented claims; if a number appears, it needs a real source.

## Accessibility & Inclusion

WCAG AA baseline: sufficient color contrast for white text over the hero photo (verify against the darkest and lightest regions the crop can land on), visible focus states on nav links and buttons, Escape-to-close on the mobile menu (already implemented), and keyboard-operable hamburger/menu controls.
