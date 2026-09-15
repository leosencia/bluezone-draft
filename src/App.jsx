import HeroSection from "./components/HeroSection";
import SectionProblem from "./components/SectionProblem";
import SectionShift from "./components/SectionShift";
import SectionImpact from "./components/SectionImpact";
import SectionWhyZeroMile from "./components/SectionWhyZeroMile";
import SectionTechnology from "./components/SectionTechnology";
import SectionBioCube from "./components/SectionBioCube";
import SectionCapacity from "./components/SectionCapacity";
import SectionSpecifications from "./components/SectionSpecifications";
import SectionProduce from "./components/SectionProduce";
import SectionApplications from "./components/SectionApplications";
import SectionProof from "./components/SectionProof";
import SectionPilot from "./components/SectionPilot";
import SectionAbout from "./components/SectionAbout";
import SectionContact from "./components/SectionContact";
import SectionFooter from "./components/SectionFooter";

export default function App() {
  return (
    <>
      <HeroSection />
      {/* Homepage sections 02-14 of the Final Website Structure, in order. */}
      <main className="bg-white">
        <SectionProblem />
        <SectionShift />
        <SectionImpact />
        <SectionWhyZeroMile />
        <SectionTechnology />
        <SectionBioCube />
        <SectionCapacity />
        <SectionSpecifications />
        <SectionProduce />
        <SectionApplications />
        <SectionProof />
        <SectionPilot />
        <SectionAbout />
        <SectionContact />
        <SectionFooter />
      </main>
    </>
  );
}
