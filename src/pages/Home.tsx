import ImageSlider from "../components/imagerSlider";
import ImportantPersonnel from "../components/importantPersonnel";
import QuickLinks from "../components/quicklinks";
import Slogan from "../components/slogan";
import EnvironmentalMonitoring from "../components/monitoring";
import WasteManagement from "../components/wasteManagement-whatsnew-consent";
import MpcbJurisdictionMap from "../components/MpcbJurisdictionMap";
import StoriesAccordion from "../components/stories";
import SocialPresence from "../components/social";
import ComplianceAndReinforcement from "../components/ComplianceAndReinforcement";


function HomePage() {
  return (
    <>
      <div className="relative">
        <ImageSlider />
        <ImportantPersonnel />
      </div>
      <div className="w-full h-px bg-black/10"></div>
      <QuickLinks />
      <Slogan />
      <EnvironmentalMonitoring />
      <section className="w-full bg-white py-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-[28px] md:text-[34px] font-bold text-black tracking-tight">
              Maharashtra RO &amp; SRO Jurisdiction Map
            </h2>
            <p className="text-gray-500 mt-2 text-[15px]">
              Click on any district to view Regional and Sub-Regional Office jurisdiction details.
            </p>
          </div>
          <MpcbJurisdictionMap />
        </div>
      </section>
      <WasteManagement />
      <StoriesAccordion />
      <SocialPresence />
      <ComplianceAndReinforcement />
      
    </>
  )
}

export default HomePage;