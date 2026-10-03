# Product

## Register

brand

## Users

Mixed B2B audience: wholesalers, foodservice distributors, restaurants and hospitality buyers considering BlueZone Microgreens; and institutional buyers, resorts, airports, local operators and commercial growers evaluating a growing system or pilot. Investors and media may also use the site to form a first impression.

## Product Purpose

BlueZone Aeroponics' marketing site presents two offers under one Zero-Mile Produce story: BlueZone Microgreens and modular BioCube aeroponic growing systems. It should open useful produce-supply conversations and structured system or pilot enquiries without implying current stock, fixed delivery coverage or proven BioCube performance.

## Brand Personality

Engineered, calm, premium. Voice is confident and unhurried, without hype. BioCube photography and clearly labelled concept imagery carry the visual story; navigation, type and controls remain quiet. No invented statistics, availability promises or urgency tactics.

## Anti-references

Generic SaaS / AI-tool marketing: gradient-text hero headlines, glassmorphism panels, "hero-metric" stat-card templates, stock dashboard-carousel narratives. If it could be mistaken for a generic AI-tool landing page, it has failed. (Note: `src/components/BlueZoneHero.jsx` in this repo is exactly this failure mode — a navy/blue gradient-headline tab-carousel exploration that is not wired into the app and should not be treated as the design reference. `src/components/HeroSection.jsx`, the component actually rendered by `App.jsx`, is the canonical direction.)

## Design Principles

- **Images have an honest role.** BioCube imagery shows the system concept; generated produce assets are labelled as illustrative until commissioned photography is available.
- **Restraint over spectacle.** Calm, engineered confidence beats SaaS-flash animation or gradient tricks. If a choice reads as "trying too hard," cut it.
- **Specific enquiry paths.** Produce CTAs open Produce supply; system and application CTAs open Systems / pilot; navigation-level contact defaults to Produce supply.
- **Full-bleed parity across breakpoints.** The BioCube unit, and specifically its BLUEZONE-branded face, must stay legible whether the background image is being viewed on a wide desktop or a narrow phone crop.
- **Evidence over hype.** No unattributed statistics or invented claims; if a number appears, it needs a real source.
- **Protect the distinction.** Produce supply and production at a customer site are different commercial models. Zero-Mile means strategic proximity, not a guarantee of zero logistics emissions.

## Accessibility & Inclusion

WCAG AA baseline: sufficient color contrast for white text over the hero photo (verify against the darkest and lightest regions the crop can land on), visible focus states on nav links and buttons, Escape-to-close on the mobile menu (already implemented), and keyboard-operable hamburger/menu controls.

## Current content sources

Use [the content ledger](docs/content/BLUEZONE-CONTENT-SOURCES.md) and [source review](BLUEZONE-SOURCE-OF-TRUTH-REVIEW.md) for the four current PDFs: BUEZONE CATALOGUE (3).pdf; BlueZone Aeroponics vs Hyrdroponics (1).pdf; Bluezone Aeroponics Farming Proposal (2).pdf; Bluezon Aeroponics Farming - Leafy Greens Indoor Farm Solution (1).pdf. Keep the microgreens container, leafy-greens pilot, modular comparison farm and five-room facility distinct. Publish provisional configuration and generic pilot criteria; hold unverified savings, annual output, certification, named partners and financial claims. Comparison lives at /aeroponics-vs-hydroponics/; systems enquiries return via /?enquiry=systems#get-in-touch. Existing business status and public inbox await confirmation.
