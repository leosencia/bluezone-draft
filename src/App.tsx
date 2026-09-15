/**
 * BlueZone — Aeroponics Farming
 * Single-page hero section.
 *
 * Structure, class names, spacing and sizing follow the motion-sites spec.
 * Colour, type, copy and motion follow BlueZone Brand Identity System V1.0.
 */

// ---------------------------------------------------------------------------
// Config — swap these when the real assets land.
// ---------------------------------------------------------------------------

/** Placeholder footage from the motion spec. Replace with BlueZone facility
 *  footage (kit 06: roots + fine mist + controlled lighting, or a real BioCube
 *  / vertical aeroponic facility). One line, nothing else to change. */
const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4';

/** Kit 05 calls for a "protected text zone" and kit 02 forbids placing the mark
 *  over busy imagery "without a controlled contrast area". This draws a soft
 *  mist wash behind the bottom-left copy only — the video stays fully visible
 *  everywhere else. Set to false to run the raw video with no treatment. */
const TEXT_ZONE_SCRIM = true;

const NAV_LINKS = ['Story', 'BioCube', 'Evidence', 'Contact'];

// ---------------------------------------------------------------------------
// Logo
// ---------------------------------------------------------------------------

/**
 * Geometric placeholder mark from the motion spec, recoloured to Midnight Navy.
 *
 * NOTE — kit section 11 / Brand Governance: "Never recreate the logo from a
 * screenshot or type it manually." Replace this path with the master BlueZone
 * B/Z symbol vector before anything ships.
 */
function Logo() {
  return (
    <img src="/blue-zone-logo-negative.png" alt="blue-zone-logo" width={18} height={18} />
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bz-mist">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Protected text zone (kit 05) */}
      {TEXT_ZONE_SCRIM && (
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(to top, rgba(244,247,247,0.94) 0%, rgba(244,247,247,0.72) 22%, rgba(244,247,247,0.18) 46%, rgba(244,247,247,0) 64%)',
          }}
        />
      )}

      {/* Foreground */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar — centred, two separate pills */}
        <nav className="flex items-center justify-center pt-4 sm:pt-6 px-4 sm:px-8 gap-2 sm:gap-3">
          <a
            href="#"
            aria-label="BlueZone home"
            className="flex items-center justify-center rounded-full w-10 h-10 sm:w-11 sm:h-11 shrink-0 transition-opacity duration-200 hover:opacity-80"
            style={{ backgroundColor: '#EDEDED' }}
          >
            <Logo />
          </a>

          <div
            className="flex items-center gap-4 sm:gap-10 rounded-xl px-4 sm:px-8 py-2.5 sm:py-3"
            style={{ backgroundColor: '#EDEDED' }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[12px] sm:text-[14px] font-medium text-bz-graphite hover:text-bz-navy transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero content — bottom-left */}
        <div className="flex-1 flex items-end pb-10 sm:pb-16 lg:pb-20 px-6 sm:px-12 md:px-20 lg:px-28">
          <div className="max-w-xs">
            {/* 1 — Eyebrow / badge (kit 04: 11–13px, uppercase, 0.12–0.18em tracking) */}
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-bz-blue hover:text-bz-ocean transition-colors mb-3 group animate-bz-rise"
            >
              Zero-Mile Production
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>

            {/* 2 — Headline */}
            <h1
              className="font-display text-[1.5rem] sm:text-[1.75rem] leading-[1.15] font-semibold text-bz-navy tracking-tight mb-3 animate-bz-rise"
              style={{ animationDelay: '90ms' }}
            >
              Controlled aeroponic infrastructure, built closer to where food is
              needed.
            </h1>

            {/* 3 — Subtext */}
            <p
              className="text-[13px] text-bz-slate font-normal mb-3 animate-bz-rise"
              style={{ animationDelay: '180ms' }}
            >
              Grow closer. Control more.
            </p>

            {/* 4 — Primary CTA (kit 08: "Explore a Zero-Mile Project →") */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-bz-blue border border-bz-blue/50 rounded-full px-5 py-2.5 hover:bg-bz-blue hover:text-white hover:border-bz-blue transition-all duration-200 group animate-bz-rise"
              style={{ animationDelay: '270ms' }}
            >
              Explore a Zero-Mile Project
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
