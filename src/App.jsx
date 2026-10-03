import { useState } from "react";
import HeroSection from "./components/HeroSection";
import SectionPremise from "./components/SectionPremise";
import SectionProblem from "./components/SectionProblem";
import SectionShift from "./components/SectionShift";
import SectionAeroponics from "./components/SectionAeroponics";
import SectionFoodSecurity from "./components/SectionFoodSecurity";
import SectionOfferings from "./components/SectionOfferings";
import SectionContact from "./components/SectionContact";
import SectionFAQ from "./components/SectionFAQ";
import SectionFooter from "./components/SectionFooter";
import "./components/LandingSections.css";

export default function App() {
  const [enquiryType, setEnquiryType] = useState(() => {
    const type = new URLSearchParams(window.location.search).get("enquiry");
    return ["systems", "pilot"].includes(type) ? type : "produce";
  });
  // Keep native anchors and centralise enquiry routing, including footer links.
  const routeEnquiry = (event) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    const link = event.target.closest?.("a[href='#get-in-touch']");
    if (link) setEnquiryType(["systems", "pilot"].includes(link.dataset.enquiry) ? link.dataset.enquiry : "produce");
  };
  return (
    <div onClickCapture={routeEnquiry}>
      <HeroSection />
      {/* Homepage sections, in order.
          The hero stays position:sticky through its own hold zone (HOLD_VH
          in HeroSection.jsx); pulling main up by exactly one viewport height
          (-100vh) makes it start rising over the hero — still pinned
          underneath — instead of only appearing once the hero has fully
          scrolled away. z-10 (vs. the hero's un-indexed stacking context) is
          what lets it paint on top and bury the hero, not just abut it.

          This -100vh must stay exactly one viewport height: that's the fixed
          physical distance for a full-height section to rise from
          off-screen to fully covering. Shrinking it moves main's
          fully-covered point past the sticky release point — sticky lets go
          mid-bury, and the rest turns into a normal, unpinned scroll (main
          only "covers half" before the page just scrolls on). To add a pause
          on the last frame before the bury starts, raise HOLD_VH in
          HeroSection.jsx above 100 instead — the excess is a pure static
          hold; -100vh here doesn't change. */}
      <main className="landing-content relative z-10 -mt-[100vh] bg-white">
        <SectionPremise />
        <SectionProblem />
        <SectionShift />
        <SectionAeroponics />
        <SectionFoodSecurity />
        <SectionOfferings />
        <SectionContact
          enquiryType={enquiryType}
          onEnquiryTypeChange={setEnquiryType}
        />
        <SectionFAQ />
        <SectionFooter />
      </main>
    </div>
  );
}
