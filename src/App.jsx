import HeroSection from "./components/HeroSection";
import SectionProblem from "./components/SectionProblem";
import SectionShift from "./components/SectionShift";
import SectionImpact from "./components/SectionImpact";
import SectionWhyZeroMile from "./components/SectionWhyZeroMile";
import SectionTechnology from "./components/SectionTechnology";
import SectionMethod from "./components/SectionMethod";
import SectionBioCube from "./components/SectionBioCube";
import SectionCapacity from "./components/SectionCapacity";
import SectionSpecifications from "./components/SectionSpecifications";
import SectionProduce from "./components/SectionProduce";
import SectionApplications from "./components/SectionApplications";
// import SectionProof from "./components/SectionProof"; // temporarily removed, see App.jsx render
import SectionPilot from "./components/SectionPilot";
import SectionAbout from "./components/SectionAbout";
import SectionContact from "./components/SectionContact";
import SectionFooter from "./components/SectionFooter";

export default function App() {
  return (
    <>
      <HeroSection />
      {/* Homepage sections 02-14 of the Final Website Structure, in order.
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
      <main className="relative z-10 -mt-[100vh] bg-white">
        <SectionProblem />
        <SectionShift />
        <SectionImpact />
        <SectionWhyZeroMile />
        <SectionTechnology />
        <SectionMethod />
        <SectionBioCube />
        <SectionCapacity />
        <SectionSpecifications />
        <SectionProduce />
        <SectionApplications />
        {/* <SectionProof /> — temporarily removed, no nav path / mobile
            discoverability for the A–D scale yet. EvidenceLabel pills swapped
            for a plain "See source" link at each call site meanwhile. */}
        <SectionPilot />
        <SectionAbout />
        <SectionContact />
        <SectionFooter />
      </main>
    </>
  );
}
