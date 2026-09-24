import { useEffect, useRef } from "react";

import {
  Accent,
  Body,
  Footnote,
  PrimaryButton,
  Reveal,
  Section,
  SectionHeading,
  SectionKicker,
  usePrefersReducedMotion,
} from "./primitives";
import "./SectionPilot.css";

const STEPS = [
  {
    n: "01",
    title: "Define",
    body: "Agree the buyer, crop specification, site, operator and baseline procurement.",
  },
  {
    n: "02",
    title: "Design",
    body: "Set the pilot configuration, responsibilities, schedule and measurement plan.",
  },
  {
    n: "03",
    title: "Operate",
    body: "Run agreed crop cycles with named people responsible for production and supply.",
  },
  {
    n: "04",
    title: "Measure",
    body: "Record yield, quality, resources, labour, reliability and full cost per kilogram.",
  },
  {
    n: "05",
    title: "Decide",
    body: "Compare results with the procurement displaced, then expand only if the case holds.",
  },
];

const MEASURES = [
  "Saleable yield and crop quality",
  "Energy, water and nutrient use",
  "Labour and operating responsibility",
  "Cost per kilogram at agreed output",
  "Procurement volume and cost displaced",
  "Reliability across repeated crop cycles",
];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function smoothStep(value) {
  return value * value * (3 - 2 * value);
}

const CONTEXT_COMPACT_AT = 0.14;
const CONTEXT_MAIN_AT = 0.09;

function ScrollStepLedger({ reducedMotion }) {
  const sceneRef = useRef(null);
  const ledgerRef = useRef(null);
  const contextRef = useRef(null);
  const stepViewportRef = useRef(null);
  const rowRefs = useRef([]);
  const activeRef = useRef(-1);
  const contextModeRef = useRef("full");
  const contextResetRef = useRef(0);

  useEffect(() => {
    if (reducedMotion) {
      return undefined;
    }

    const scene = sceneRef.current;
    const ledger = ledgerRef.current;
    const context = contextRef.current;
    const stepViewport = stepViewportRef.current;
    const rows = rowRefs.current.filter(Boolean);
    if (
      !scene ||
      !ledger ||
      !context ||
      !stepViewport ||
      rows.length !== STEPS.length
    ) {
      return undefined;
    }

    let frame = 0;
    let reduced = false;

    const setContextMode = (nextMode) => {
      if (nextMode === contextModeRef.current) return;

      window.clearTimeout(contextResetRef.current);
      const movingParts = Array.from(
        context.querySelectorAll("[data-context-motion]"),
      );

      movingParts.forEach((part) => {
        part.style.transition = "";
        part.style.transform = "";
      });

      const before = new Map(
        movingParts.map((part) => [part, part.getBoundingClientRect()]),
      );

      contextModeRef.current = nextMode;
      scene.dataset.contextMode = nextMode;
      void context.offsetHeight;

      movingParts.forEach((part) => {
        const first = before.get(part);
        const last = part.getBoundingClientRect();
        const deltaX = first.left - last.left;
        const deltaY = first.top - last.top;

        part.style.transition = "none";
        part.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
      });

      requestAnimationFrame(() => {
        movingParts.forEach((part) => {
          part.style.transition =
            "transform 560ms cubic-bezier(0.16, 1, 0.3, 1)";
          part.style.transform = "translate3d(0, 0, 0)";
        });
      });

      contextResetRef.current = window.setTimeout(() => {
        movingParts.forEach((part) => {
          part.style.transition = "";
          part.style.transform = "";
        });
      }, 620);
    };

    const update = () => {
      frame = 0;
      if (reduced) return;

      const viewportHeight = window.innerHeight;
      const scrollSpan = Math.max(1, scene.offsetHeight - viewportHeight);
      const progress = clamp(
        -scene.getBoundingClientRect().top / scrollSpan,
        0,
        1,
      );
      if (
        contextModeRef.current === "full" &&
        progress >= CONTEXT_COMPACT_AT
      ) {
        setContextMode("compact");
      } else if (
        contextModeRef.current === "compact" &&
        progress <= CONTEXT_MAIN_AT
      ) {
        setContextMode("full");
      }
      const stepProgress = clamp(
        (progress - CONTEXT_COMPACT_AT) / (1 - CONTEXT_COMPACT_AT),
        0,
        1,
      );
      const stagePosition = stepProgress * (STEPS.length - 1);
      const compactHeight = window.innerWidth < 768 ? 54 : 76;
      const stepViewportHeight = stepViewport.clientHeight;
      const expandedHeight = Math.max(
        compactHeight + 180,
        stepViewportHeight - compactHeight * (STEPS.length - 1),
      );

      let y = 0;
      rows.forEach((row, index) => {
        const distance = Math.abs(stagePosition - index);
        const open = smoothStep(clamp(1 - distance, 0, 1));
        const visibleHeight =
          compactHeight + (expandedHeight - compactHeight) * open;

        row.style.setProperty("--step-y", `${y}px`);
        row.style.setProperty(
          "--step-clip",
          `${Math.max(0, expandedHeight - visibleHeight)}px`,
        );
        row.style.setProperty("--step-open", `${open}`);
        row.style.setProperty("--step-title-size", `${1.05 + open * 1.15}rem`);
        const numberSize =
          window.innerWidth < 768 ? 1.8 + open * 1.8 : 1.8 + open * 3.2;
        row.style.setProperty("--step-number-size", `${numberSize}rem`);
        const isActive = index === Math.round(stagePosition);
        row.toggleAttribute("data-active", isActive);
        if (isActive) row.setAttribute("aria-current", "step");
        else row.removeAttribute("aria-current");
        y += visibleHeight;
      });

      const active = clamp(Math.round(stagePosition), 0, STEPS.length - 1);
      if (active !== activeRef.current) {
        activeRef.current = active;
        ledger.dataset.activeStep = String(active);
      }

    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const resizeObserver = new ResizeObserver(requestUpdate);
    resizeObserver.observe(scene);
    resizeObserver.observe(ledger);
    resizeObserver.observe(stepViewport);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();

    return () => {
      reduced = true;
      if (frame) cancelAnimationFrame(frame);
      window.clearTimeout(contextResetRef.current);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [reducedMotion]);

  return (
    <div
      ref={sceneRef}
      data-context-mode="full"
      className={`pilot-sequence-scene ${reducedMotion ? "is-reduced" : ""}`}
    >
      <div ref={ledgerRef} className="pilot-sequence-ledger">
        <div ref={contextRef} className="pilot-context">
          <div className="pilot-context-copy" data-context-motion>
            <SectionKicker>Commercial Demonstration</SectionKicker>
            <SectionHeading>
              Prove the operating case <Accent>before expanding</Accent>
            </SectionHeading>
            <Body className="mt-6">
              A BlueZone pilot is a commercial demonstration built around an
              agreed buyer, crop plan and operating team. Its purpose is to
              establish what the site can produce, what it takes to run and how
              that compares with the produce it is intended to replace.
            </Body>
          </div>
          <div className="pilot-context-actions" data-context-motion>
            <PrimaryButton href="#get-in-touch" data-enquiry="systems">
              Discuss a systems pilot
            </PrimaryButton>
          </div>
          <div className="pilot-context-measures" aria-label="Success measures">
            <p>Success measures</p>
            <div>
              {MEASURES.map((measure) => (
                <span key={measure}>{measure}</span>
              ))}
            </div>
          </div>
        </div>
        <div ref={stepViewportRef} className="pilot-step-viewport">
          <ol aria-label="Commercial demonstration steps">
            {STEPS.map(({ n, title, body }, index) => (
              <li
                key={n}
                ref={(element) => {
                  rowRefs.current[index] = element;
                }}
                className="pilot-sequence-step"
              >
                <div className="pilot-sequence-step-inner">
                  <span className="pilot-sequence-number">{n}</span>
                  <div className="pilot-sequence-copy">
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default function SectionPilot() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Section id="pilot" surface="white">
      <Reveal>
        <ScrollStepLedger reducedMotion={reducedMotion} />
      </Reveal>

      <Reveal>
        <Footnote className="mt-8 max-w-3xl">
          Scope, responsibilities, duration and commercial terms are agreed per
          site. Expansion is conditional on the demonstration meeting the
          measures agreed at the start.
        </Footnote>
      </Reveal>
    </Section>
  );
}
