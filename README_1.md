# BlueZone — Hero Section

Motion-Sites "Stellar.ai" hero structure, re-skinned to the BlueZone Aeroponics
Brand Kit V1. The Motion prompt drives the layout; the brand kit drives colour,
type, copy and claims.

## Run it

```bash
npm install
npm run dev
```

React 18 + Vite + Tailwind 3 + lucide-react. Drop `src/components/BlueZoneHero.jsx`,
`src/index.css` and `tailwind.config.js` into an existing project if you already
have one.

---

## Kept from the Motion-Sites prompt

Structure is unchanged: nav → eyebrow badge → two-line heading with a gradient
second line → subhead → CTA → auto-cycling tab bar → full-bleed video with a
centred overlay card → bottom wordmark row.

`fadeInUp` / `fadeInOverlay` / `fadeInDialog` keyframes are verbatim. Every major
block carries `.animate-fade-in-up` with the same staggered `animationDelay`
(0.1s → 0.8s) and inline `opacity: 0`. Tab bar is the same `bg` container with
`bg-white text-navy shadow-sm` active state, 2×2 grid on mobile, row with 1px
dividers on desktop. `max-w-7xl mx-auto`, white background, Lucide icons.

## Changed, and why

| # | Change | Reason |
|---|--------|--------|
| 1 | **4 tabs → 5** (Import, Water, Distance, Demand, Zero-Mile) | §05 defines a five-part hero narrative; §12 makes it a release checklist item. Mobile keeps the 2×2 grid with slide 05 spanning full width. |
| 2 | **Auto-cycle 4s → 7s** | §12: "does not autoplay too quickly." |
| 3 | **Black → Midnight Navy `#071B2B`** | Pure black is not in the palette. |
| 4 | **Gradient → `from-brand-navy via-brand-ocean to-brand-blue`** | §03 specifies exactly this digital gradient. Replaces `from-black via-gray-500 to-gray-400`. |
| 5 | **Inter → Montserrat + Inter** | §04: Montserrat display, Inter body/UI, two families max. Motion asked for Inter only. |
| 6 | **Heading uppercase, bold, 40px→80px** | §04: Montserrat Bold, uppercase, tight tracking, 36–52 mobile / 52–88 desktop. Motion's `text-6xl` mobile (60px) was over the mobile ceiling. |
| 7 | **`rounded-full` → `rounded-md`; `rounded-3xl` → `rounded-2xl`** | §05: "Cards: 8–16px corner radius; avoid excessive 'app UI' pill shapes." One-line revert if you disagree. |
| 8 | **Reviews badge → brand eyebrow** | The original slot held "4.9 rating from 18.3K+ users". See *Claims* below. |
| 9 | **Company logos → sector row** | See *Claims* below. |
| 10 | **CTA copy** | §08 / §12: primary CTA points at a qualified commercial conversation. "Begin Free Trial" and "Get started free" don't describe anything BlueZone sells. |
| 11 | **Second CTA added** | §08 defines a primary *and* secondary button. Motion had one. |
| 12 | **Overlay cards are data-driven** | Motion specified four hand-written overlays (wizard, training metrics, test results, deploy checklist) — those are AI-SaaS product UI. Replaced with one card rendering from `SLIDES`, in three variants (stat / chips / journey), so the card has the same visual weight without inventing a product. |
| 13 | **Tailwind theme extended** | Motion said "no custom theme extensions." Without named tokens every colour is a raw hex arbitrary value. Tokens are nested under `brand.*` so they don't shadow Tailwind's own `teal-*` / `lime-*` scales. |

## Claims — read this before publishing

§11 of the kit governs statistics, and two parts of the Motion layout could not
be carried over without breaking it.

**The reviews badge.** "4.9 rating from 18.3K+ users" is a fabricated
endorsement. It now reads "Zero-Mile Production" (with the descriptor shown from
`sm` up). If the client wants social proof there, it needs a real, attributable
number.

**The company logo row.** Motion listed INTERSCOPE, SPOTIFY, Nexera, M3, LAURA
COLE and vertex. Presenting those — or invented equivalents — as BlueZone clients
is a false endorsement. The row now carries the six target environments from §10
under the label "Built around where food is needed," which claims fit, not
custom. Swap in real logos only when the client confirms permission.

**The three statistics** (80%+ imported, 72% of freshwater withdrawals, 25.4%
pre-retail loss) come from the kit's own §05 table with no attribution. I have
not verified any of them. Each card shows a `D · Industry data` evidence chip and
a visible `Source pending — add publisher + year` line. Fill in `SOURCE_TODO` in
the component, or per-slide, before this ships — a sourceless stat on a live site
is exactly what §11 exists to prevent.

## Placeholders to replace

**Logo** — `BlueZoneHero.jsx`, in the nav. §11: "Never recreate the logo from a
screenshot or type it manually." The B/Z symbol is the client's vector asset, so
the slot holds a neutral gradient block at the right size and clear space. Drop
the master SVG in.

**Video** — `HERO_VIDEO_SRC` points at the Motion demo's CloudFront asset. Not
yours, and it will break when that bucket rotates. §06 wants documented CEA
footage: real facility, roots and fine mist, controlled lighting, composition
left spacious for the overlay. Per-slide art direction from §06 is commented on
each entry in `SLIDES`. A navy gradient sits behind the video so a slow or failed
load degrades to brand colour instead of browser grey.

**Nav labels** — Solutions / Sectors / Technology / Evidence are my guesses at
BlueZone's IA, matching Motion's shape (two with chevrons, two without).

## Colour and contrast notes

Accent colours appear on progress bars, the card's top rule and active tab icons
— never as small text on white. Aero Teal hits ~2.8:1 and Field Green ~3.2:1
against white, both under the 4.5:1 body-text threshold, and §03 rules them out
directly: "Never use pale green or teal as small text on white." Large figures in
the overlay cards stay Midnight Navy for that reason.

Body and nav text is Midnight Navy at 60–70% opacity rather than Tailwind grey,
which keeps everything inside the palette and clears AA comfortably.

Field Green appears on exactly one slide — 05, the solution — per §03: "Green may
appear as a very subtle terminal accent." Slides 01–03 are BlueZone Blue, 04 is
Aero Teal. That progression is deliberate: problem → opportunity → solution.

## Accessibility

Because every animated block carries inline `opacity: 0`, a viewer with reduced
motion enabled would otherwise get a blank page. `index.css` has a
`prefers-reduced-motion` block that forces everything visible and disables the
animations.
