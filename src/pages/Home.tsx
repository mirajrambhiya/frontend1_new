import ImageSlider from "../components/imagerSlider";
import ImportantPersonnel from "../components/importantPersonnel";
import QuickLinks from "../components/quicklinks";
import Slogan from "../components/slogan";
import EnvironmentalMonitoring from "../components/monitoring";
import WasteManagement from "../components/wasteManagement-whatsnew-consent";
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
      <WasteManagement />
      <StoriesAccordion />
      <SocialPresence />
      <ComplianceAndReinforcement />
      
    </>
  )
}

export default HomePage;