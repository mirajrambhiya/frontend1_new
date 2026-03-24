import { createRootRoute, createRoute, createRouter, Outlet, useLocation } from '@tanstack/react-router'
import { useEffect } from 'react'

// Persistent Components
import NavBar from './components/navigation'
import Footer from './components/footer'

// Page Components
import HomePage from './pages/Home'
import Introduction from './pages/navbanner-aboutus/Introduction'
import Establishment from './pages/navbanner-aboutus/Establishment'
import Presentboard from './pages/navbanner-aboutus/Presentboard'
import OrganizationalStructure from './pages/navbanner-aboutus/OrganizationalStructure'
import OfficeInCharge from './pages/navbanner-aboutus/officein-charge'
import Offices from './pages/navbanner-aboutus/Offices'
import Budget from './pages/navbanner-aboutus/Budget'
import AnnualReport from './pages/navbanner-aboutus/AnnualReport'
import Laboratories from './pages/navbanner-aboutus/Laboratory'
import MissionLife from './pages/MissionLife'
import Training from './pages/navbanner-aboutus/Training'
import MPCBEmployees from './pages/navbanner-aboutus/MPCBEmployees'
import HealthEnvironment from './pages/HealthEnvironment'
import TechnicalCommitteeByProducts from './pages/technicalCommitteeByProducts'
import TechnicalCommitteePollutionLoad from './pages/technicalCommitteePollutionLoad'
import ActionPlanReports from './pages/actionplan-reports'
import RiverPollutedStretches from './pages/river-polluted-stretches'
import CPCBGuidelines from './pages/cpcb-guidelines'
import ContactUs from './pages/ContactUs'
import Circulars from './pages/standing-orders/circulars'
import CPCBDirections from './pages/standing-orders/cpcbdirection'
import MOEFDirections from './pages/standing-orders/moefdirection'
import MPCBDirections from './pages/standing-orders/mpcbdirection'
import StateGovtDirections from './pages/standing-orders/stategovtdirection'
import CRZClearance from './pages/standing-orders/crzclearance'
import Categorisation from './pages/consent-management/Categorisation'
import IndustriesLocation from './pages/consent-management/IndustriesLocation'
import AuthUnderBMW from './pages/consent-management/authunderbmw'
import AuthUnderHW from './pages/consent-management/authunderhw'
import IndustrialStatistics from './pages/consent-management/industrialstatistics'
import ProcedureDocuments from './pages/consent-management/proceduredocuments'
import Committees from './pages/consent-management/committees'
import InspectionProcedure from './pages/consent-management/inspectionprocedure'
import Recruitment from './pages/recruitment/recruitment'
import RTS from './pages/rts/rts'
import ModelTenderDoc from './pages/notices/modeltenderdoc'
import PublicNotices from './pages/notices/publicnotices'
import Conducted from './pages/notices/conducted'
import Upcoming from './pages/notices/upcoming'
import NoticeCirculars from './pages/notices/circulars'
import GemPurchase from './pages/notices/gempurchase'
import Tenders from './pages/notices/tenders';
import Gallery from './pages/gallery/gallery';
import Workshop from './pages/workshop/workshop'
import InfoOfficers from './pages/rti/informationofficers'
import WaterAndAir from './pages/consent-management/waterandair'
import CACMeetings from './components/CACMeetings'
import CCMeetings from './components/CCMeetings'
import OnlineCEMS from './components/OnlineCEMS'
import ComplianceReport from './components/ComplianceReport'
import AccessingConsent from './components/AccessingConsent'
import AmendedConsents from './components/AmendedConsents'
import AmendedConsentsMines from './components/AmendedConsentsMines'
import AirQuality from './pages/air-quality/AirQuality'
import Strengthening from './pages/air-quality/Strengthening';
import Compliance from './pages/air-quality/Compliance';
import WaterQuality from './pages/water-quality/WaterQuality'
import Maps from './pages/water-quality/Maps'
import EBulletin from './pages/water-quality/EBulletin'
import QualityStandards from './pages/water-quality/QualityStandards'
import VNITNagpur from './pages/water-quality/VNITNagpur'
import EMCTraining from './pages/water-quality/EMCTraining'
import WaterQuality2002 from './pages/water-quality/2002'
import WaterQuality2003 from './pages/water-quality/2003'
import WaterQuality2004 from './pages/water-quality/2004'
import WaterQuality2005 from './pages/water-quality/2005'
import WaterQuality2006 from './pages/water-quality/2006'
import ListOfIndustries from './pages/water-quality/ListOfIndustries'
import ClosureDirections from './pages/water-quality/closure'
import NoisePollution from './pages/noise-pollution/noise-pollution'
import HazardousWaste from './pages/waste-management/hazardous-waste/hazardous-waste'
import Registration from './pages/waste-management/hazardous-waste/registration'
import Inventory from './pages/waste-management/hazardous-waste/inventory'
import BiomedicalWaste from './pages/waste-management/biomedical-waste/biomedical-waste'
import EndOfLifeVehicles from './pages/waste-management/end-of-life/end-of-life-vehicles'
import Batteries from './pages/waste-management/batteries/batteries'
import FlyAsh from './pages/waste-management/fly-ash/flyash'
import FlyAshNotificationImplementation from './pages/waste-management/fly-ash/notification-implementation'
import FlyAshUtilization20042005 from './pages/waste-management/fly-ash/utilization-status-2004-2005'
import FlyAshUtilization20032004 from './pages/waste-management/fly-ash/utilization-status-2003-2004'
import FlyAshActionPlan from './pages/waste-management/fly-ash/action-plan'
import FlyAshCompliance from './pages/waste-management/fly-ash/compliance'
import FlyAshUtilisation from './pages/waste-management/fly-ash/utilisation'
import ElectronicWaste from './pages/waste-management/electronic-waste/electronic-waste'
import CircularsEWaste from './pages/waste-management/electronic-waste/circulars-ewaste'
import MinutesManagement from './pages/waste-management/electronic-waste/minutes-management'
import Minutes2005 from './pages/waste-management/electronic-waste/minutes-2005'
import OfficeOrder from './pages/waste-management/electronic-waste/office-order'
import PlasticWaste from './pages/waste-management/plastic-waste/plastic-waste'
import StatusOfRegistration from './pages/waste-management/plastic-waste/status-of-registration'
import VisitorsDashboard from './pages/visitors-dashboard'
import EffluentPlant from './pages/waste-management/effluent-plant/effluent-plant';
import HighCourtOrders from './pages/waste-management/effluent-plant/highcourtorders';
import AffidavitMPCB from './pages/waste-management/effluent-plant/affidavit-mpcb';
import ThaneBelapur from './pages/waste-management/effluent-plant/thane-belapur';
import ConstructionDemolition from './pages/waste-management/construction-demolition/construction-demolition';
import SolidWaste from './pages/waste-management/solid-waste/solid-waste';
import ClosureDirectionStatus from './pages/compliance-enforcement/closure-direction-status'
import ServiceMatters from './pages/compliance-enforcement/legal-matters/service-matters'
import MumbaiBenchWater from './pages/compliance-enforcement/legal-matters/mumbaibench-water'
import MumbaiBenchAir from './pages/compliance-enforcement/legal-matters/mumbaibench-air'
import MumbaiBenchEnvironmentImpact from './pages/compliance-enforcement/legal-matters/mumbaibench-environment-impact'
import MumbaiBenchBiomedical from './pages/compliance-enforcement/legal-matters/mumbaibench-biomedical'
import MumbaiBenchNoise from './pages/compliance-enforcement/legal-matters/mumbaibench-noise'
import MumbaiBenchSand from './pages/compliance-enforcement/legal-matters/mumbaibench-sand'
import NationalGreenTribunal from './pages/compliance-enforcement/legal-matters/nationalgreentribunal'
import RegulatingMiningActivities from './pages/compliance-enforcement/legal-matters/regulating-mining-activities'
import ImportantCirculars from './pages/compliance-enforcement/legal-matters/important-circulars'
import AppellateWaterAct from './pages/compliance-enforcement/legal-matters/appellate-water-act'
import OldStatisticalDetails from './pages/compliance-enforcement/legal-matters/old-statistical-details'
import StatisticalDetails2024 from './pages/compliance-enforcement/legal-matters/statistical-details-2024'
import EnvironmentalLawsArchive from './pages/compliance-enforcement/legal-matters/environmental-laws-archive'
import MumbaiBenchWaterArchive from './pages/compliance-enforcement/legal-matters/mumbaibench-water-archive'
import MumbaiBenchAdministrativeMatters from './pages/compliance-enforcement/legal-matters/mumbaibench-administrative-matters'
import CoastalRegulation from './pages/compliance-enforcement/legal-matters/coastal-regulation'
import BiomedicalArchive from './pages/compliance-enforcement/legal-matters/biomedical-archive'
import SolidWaste2000 from './pages/compliance-enforcement/legal-matters/solidwaste-2000'
import NoisePollutionArchive from './pages/compliance-enforcement/legal-matters/mumbaibench-noise-pollution-archive'
import AurangabadBenchWaterArchive from './pages/compliance-enforcement/legal-matters/aurangabadbench-water-archive'
import AurangabadBenchAdministrationMatters from './pages/compliance-enforcement/legal-matters/aurangabadbench-administration-matters'
import AurangabadBenchEnvironmentPRules from './pages/compliance-enforcement/legal-matters/aurangabadbench-environment-p-rules'
import AurangabadBenchNoisePollution from './pages/compliance-enforcement/legal-matters/aurangabadbench-noise-pollution'
import NagpurBenchWaterAct from './pages/compliance-enforcement/legal-matters/nagpurbench-water-act'
import NagpurBenchAirAct from './pages/compliance-enforcement/legal-matters/nagpurbench-air-act'
import NagpurBenchEnvironmentRules from './pages/compliance-enforcement/legal-matters/nagpurbench-environment-rules'
import NagpurBenchHazardousWaste from './pages/compliance-enforcement/legal-matters/nagpurbench-hazardous-waste'
import NagpurBenchNoisePollution from './pages/compliance-enforcement/legal-matters/nagpurbench-noise-pollution'
import MetropolitanMagistrate from './pages/compliance-enforcement/legal-matters/metropolitan-magistrate'
import ChiefJudicialMagistrate from './pages/compliance-enforcement/legal-matters/chief-judicial-magistrate'
import ChiefJudicialMagistrateFirstClass from './pages/compliance-enforcement/legal-matters/chief-judicial-magistrate-first-class'
import CivilJudge from './pages/compliance-enforcement/legal-matters/chief-civil-judge'
import EnvironmentAppellate from './pages/compliance-enforcement/legal-matters/environment-appellate'
import NationalGreenTribunalArchive from './pages/compliance-enforcement/legal-matters/nationalgreentribunal-archive'
import NationalConsumerForum from './pages/compliance-enforcement/legal-matters/nationalconsumerforum'
import IndustrialCourt from './pages/compliance-enforcement/legal-matters/industrial-court'
import AntiCorruption from './pages/compliance-enforcement/legal-matters/anticorruption'
import NgtOrder from './pages/compliance-enforcement/legal-matters/ngt-order'
import AppellateWaterActArchive from './pages/compliance-enforcement/legal-matters/appellate-water-act-archive'
import FirstAppellateAuthority from './pages/compliance-enforcement/legal-matters/first-appellate-authority'
import SecondAppellateAuthority from './pages/compliance-enforcement/legal-matters/second-appellate-authority'
import MumbaiEnvironmentPRules from './pages/compliance-enforcement/legal-matters/mumbaibench-environment-p-rules'
import ReportsDocuments from './pages/reports-documents'
import MonitoringPanchganga from './pages/monitoring-panchganga'
import PollutionIndex from './pages/pollution-index'
import IndustrialCluster from './pages/industrial-cluster'
import FAQ from './pages/FAQ';
import Feedback from './pages/feedback';
import HoliFestivalPhotos from './pages/waste-management/solid-waste/holi-festival-photos';
import HoliFestivalVideos from './pages/waste-management/solid-waste/holi-festival-videos';
import GaneshFestivalPhotos from './pages/waste-management/solid-waste/ganesh-festival-photos';
import GaneshFestivalVideos from './pages/waste-management/solid-waste/ganesh-festival-videos';
import DiwaliFestivalPhotos from './pages/waste-management/solid-waste/diwali-festival-photos';
import DiwaliFestivalVideos from './pages/waste-management/solid-waste/diwali-festival-videos';
import WorldEnvironmentDayPhotos from './pages/waste-management/solid-waste/world-environment-day-photos';
import WorldEnvironmentDayVideos from './pages/waste-management/solid-waste/world-environment-day-videos';
import WariFestivalPhotos from './pages/waste-management/solid-waste/wari-festival-photos';
import WariFestivalVideos from './pages/waste-management/solid-waste/wari-festival-videos';
import DahiHandiPhotos from './pages/waste-management/solid-waste/dahi-handi-photos';
import DahiHandiVideos from './pages/waste-management/solid-waste/dahi-handi-videos';
import MiscellaneousPhotos from './pages/waste-management/solid-waste/miscellaneous-photos';
import GreenTheatreFestivalPhotos from './pages/waste-management/solid-waste/green-theatre-festival-photos';
import GreenTheatreFestivalVideos from './pages/waste-management/solid-waste/green-theatre-festival-videos';
import Archive2004 from './pages/waste-management/solid-waste/archive-2004';
import Archive2005 from './pages/waste-management/solid-waste/archive-2005';
import Archive2006 from './pages/waste-management/solid-waste/archive-2006';
import Archive2008 from './pages/waste-management/solid-waste/archive-2008';
import Archive2009 from './pages/waste-management/solid-waste/archive-2009';
import Archive2011 from './pages/waste-management/solid-waste/archive-2011';
import Archive2018 from './pages/waste-management/solid-waste/archive-2018';
import Archive2019 from './pages/waste-management/solid-waste/archive-2019';
import Archive2020 from './pages/waste-management/solid-waste/archive-2020';
import Archive2021 from './pages/waste-management/solid-waste/archive-2021';
import Archive2022 from './pages/waste-management/solid-waste/archive-2022';
import Archive2023 from './pages/waste-management/solid-waste/archive-2023';
import Archive2024 from './pages/waste-management/solid-waste/archive-2024';

const statusOfRegistrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/plastic-waste/status-of-registration',
  component: StatusOfRegistration,
})


// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Root Layout
const RootComponent = () => (
  <>
    <ScrollToTop />
    <NavBar />
    <main className="min-h-screen">
      <Outlet />
    </main>
    <Footer />
  </>
)

// Root Route
const rootRoute = createRootRoute({
  component: RootComponent,
})

// Home Route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const closureDirectionStatusRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/closure-direction-status',
  component: ClosureDirectionStatus,
})

const serviceMattersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/service-matters',
  component: ServiceMatters,
})

const mumbaiBenchWaterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/mumbaibench-water',
  component: MumbaiBenchWater,
})

const mumbaiBenchAirRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/mumbaibench-air',
  component: MumbaiBenchAir,
})

const mumbaiBenchEnvironmentImpactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/mumbaibench-environment-impact',
  component: MumbaiBenchEnvironmentImpact,
})

const mumbaiBenchBiomedicalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/mumbaibench-biomedical-waste',
  component: MumbaiBenchBiomedical,
})

const mumbaiBenchNoiseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/mumbaibench-noise-pollution',
  component: MumbaiBenchNoise,
})

const mumbaiBenchSandRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/mumbaibench-sand-dredging',
  component: MumbaiBenchSand,
})

const nationalGreenTribunalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/national-green-tribunal',
  component: NationalGreenTribunal,
})

const regulatingMiningActivitiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/regulating-mining-activities',
  component: RegulatingMiningActivities,
})

const importantCircularsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/important-circulars',
  component: ImportantCirculars,
})

const appellateWaterActRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/appellate-water-act',
  component: AppellateWaterAct,
})

const oldStatisticalDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/old-statistical-details',
  component: OldStatisticalDetails,
})

const statisticalDetails2024Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/statistical-details-2024',
  component: StatisticalDetails2024,
})

const environmentalLawsArchiveRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/environmental-laws-archive',
  component: EnvironmentalLawsArchive,
})

const mumbaiBenchWaterArchiveRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/mumbaibench-water-archive',
  component: MumbaiBenchWaterArchive,
})

const mumbaiBenchAdministrativeMattersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/mumbaibench-administrative-matters',
  component: MumbaiBenchAdministrativeMatters,
})

const environmentPRulesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/mumbaibench-environment-p-rules',
  component: MumbaiEnvironmentPRules,
})

const coastalRegulationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/coastal-regulation',
  component: CoastalRegulation,
})

const biomedicalArchiveRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/biomedical-archive',
  component: BiomedicalArchive,
})

const solidWaste2000Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/solidwaste-2000',
  component: SolidWaste2000,
})

const noisePollutionArchiveRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/mumbaibench-noise-pollution-archive',
  component: NoisePollutionArchive,
})

const aurangabadBenchWaterArchiveRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/aurangabadbench-water-archive',
  component: AurangabadBenchWaterArchive,
})

const aurangabadBenchAdministrationMattersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/aurangabadbench-administration-matters',
  component: AurangabadBenchAdministrationMatters,
})

const aurangabadBenchEnvironmentPRulesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/aurangabadbench-environment-p-rules',
  component: AurangabadBenchEnvironmentPRules,
})

const aurangabadBenchNoisePollutionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/aurangabadbench-noise-pollution',
  component: AurangabadBenchNoisePollution,
})

const nagpurBenchWaterActRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/nagpurbench-water-act',
  component: NagpurBenchWaterAct,
})

const nagpurBenchAirActRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/nagpurbench-air-act',
  component: NagpurBenchAirAct,
})

const nagpurBenchEnvironmentRulesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/nagpurbench-environment-rules',
  component: NagpurBenchEnvironmentRules,
})

const nagpurBenchHazardousWasteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/nagpurbench-hazardous-waste',
  component: NagpurBenchHazardousWaste,
})

const nagpurBenchNoisePollutionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/nagpurbench-noise-pollution',
  component: NagpurBenchNoisePollution,
})

const metropolitanMagistrateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/metropolitan-magistrate',
  component: MetropolitanMagistrate,
})

const chiefJudicialMagistrateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/chief-judicial-magistrate',
  component: ChiefJudicialMagistrate,
})

const chiefJudicialMagistrateFirstClassRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/judicial-magistrate-first-class',
  component: ChiefJudicialMagistrateFirstClass,
})

const civilJudgeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/civil-judge',
  component: CivilJudge,
})

const environmentAppellateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/environment-appellate',
  component: EnvironmentAppellate,
})

const nationalGreenTribunalArchiveRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/nationalgreentribunal-archive',
  component: NationalGreenTribunalArchive,
})

const nationalConsumerForumRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/nationalconsumerforum',
  component: NationalConsumerForum,
})

const industrialCourtRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/industrial-court',
  component: IndustrialCourt,
})

const antiCorruptionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/anticorruption',
  component: AntiCorruption,
})

const ngtOrderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/ngt-order',
  component: NgtOrder,
})

const appellateWaterActArchiveRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/appellate-water-act-archive',
  component: AppellateWaterActArchive,
})

const firstAppellateAuthorityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/first-appellate-authority',
  component: FirstAppellateAuthority,
})

const secondAppellateAuthorityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-enforcement/legal-matters/second-appellate-authority',
  component: SecondAppellateAuthority,
})

const missionlifeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/missionlife',
  component: MissionLife,
})

const standingordersAllRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/standing-orders/importantstandingorders',
  component: StandingOrders,
})

const categorisationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/consent-management/categorisation',
  component: Categorisation,
})

const industriesLocationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/consent-management/industrieslocation',
  component: IndustriesLocation,
})

const authUnderBMWRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/consent-management/authunderbmw',
  component: AuthUnderBMW,
})

const authUnderHWRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/consent-management/authunderhw',
  component: AuthUnderHW,
})

const industrialStatisticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/consent-management/industrialstatistics',
  component: IndustrialStatistics,
})

const procedureDocumentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/consent-management/proceduredocuments',
  component: ProcedureDocuments,
})

const committeesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/consent-management/committees',
  component: Committees,
})

const inspectionProcedureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/consent-management/inspection-procedure/procedure',
  component: InspectionProcedure,
})

const recruitmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/recruitment',
  component: Recruitment,
})

const rtsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rts',
  component: RTS,
})

const workshopRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/workshop',
  component: Workshop,
})

const contactusRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact-us',
  component: ContactUs,
})

const modelTenderDocRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/notices/modeltenderdoc',
  component: ModelTenderDoc,
})

const publicnoticesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/notices/publicnotices',
  component: PublicNotices,
})

const conductedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/notices/publichearings/conducted',
  component: Conducted,
})

const upcomingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/notices/publichearings/upcoming',
  component: Upcoming,
})

const publicHearingsCircularsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/notices/publichearings/circulars',
  component: NoticeCirculars,
})

const gemPurchaseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/notices/gempurchase',
  component: GemPurchase,
})

const tendersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/notices/tenders',
  component: Tenders,
});

const GalleryRoute = createRoute({
  path: '/photo-gallery',
  getParentRoute: () => rootRoute,
  validateSearch: (search: Record<string, unknown>): { view?: string } => {
    return {
      view: (search.view as string) || undefined,
    }
  },
  component: Gallery,
});

const holiFestivalPhotosRoute = createRoute({
  path: '/waste-management/solid-waste/holi-festival-photos',
  getParentRoute: () => rootRoute,
  component: HoliFestivalPhotos,
});

const holiFestivalVideosRoute = createRoute({
  path: '/waste-management/solid-waste/holi-festival-videos',
  getParentRoute: () => rootRoute,
  component: HoliFestivalVideos,
});

const ganeshFestivalPhotosRoute = createRoute({
  path: '/waste-management/solid-waste/ganesh-festival-photos',
  getParentRoute: () => rootRoute,
  component: GaneshFestivalPhotos,
});

const ganeshFestivalVideosRoute = createRoute({
  path: '/waste-management/solid-waste/ganesh-festival-videos',
  getParentRoute: () => rootRoute,
  component: GaneshFestivalVideos,
});

const diwaliFestivalPhotosRoute = createRoute({
  path: '/waste-management/solid-waste/diwali-festival-photos',
  getParentRoute: () => rootRoute,
  component: DiwaliFestivalPhotos,
});

const diwaliFestivalVideosRoute = createRoute({
  path: '/waste-management/solid-waste/diwali-festival-videos',
  getParentRoute: () => rootRoute,
  component: DiwaliFestivalVideos,
});

const worldEnvironmentDayPhotosRoute = createRoute({
  path: '/waste-management/solid-waste/world-environment-day-photos',
  getParentRoute: () => rootRoute,
  component: WorldEnvironmentDayPhotos,
});

const worldEnvironmentDayVideosRoute = createRoute({
  path: '/waste-management/solid-waste/world-environment-day-videos',
  getParentRoute: () => rootRoute,
  component: WorldEnvironmentDayVideos,
});

const wariFestivalPhotosRoute = createRoute({
  path: '/waste-management/solid-waste/wari-festival-photos',
  getParentRoute: () => rootRoute,
  component: WariFestivalPhotos,
});

const wariFestivalVideosRoute = createRoute({
  path: '/waste-management/solid-waste/wari-festival-videos',
  getParentRoute: () => rootRoute,
  component: WariFestivalVideos,
});

const dahiHandiPhotosRoute = createRoute({
  path: '/waste-management/solid-waste/dahi-handi-photos',
  getParentRoute: () => rootRoute,
  component: DahiHandiPhotos,
});

const dahiHandiVideosRoute = createRoute({
  path: '/waste-management/solid-waste/dahi-handi-videos',
  getParentRoute: () => rootRoute,
  component: DahiHandiVideos,
});

const miscellaneousPhotosRoute = createRoute({
  path: '/waste-management/solid-waste/miscellaneous-photos',
  getParentRoute: () => rootRoute,
  component: MiscellaneousPhotos,
});

const greenTheatreFestivalPhotosRoute = createRoute({
  path: '/waste-management/solid-waste/green-theatre-festival-photos',
  getParentRoute: () => rootRoute,
  component: GreenTheatreFestivalPhotos,
});

const greenTheatreFestivalVideosRoute = createRoute({
  path: '/waste-management/solid-waste/green-theatre-festival-videos',
  getParentRoute: () => rootRoute,
  component: GreenTheatreFestivalVideos,
});

const archive2004Route = createRoute({
  path: '/waste-management/solid-waste/archive/2004',
  getParentRoute: () => rootRoute,
  component: Archive2004,
});

const archive2005Route = createRoute({
  path: '/waste-management/solid-waste/archive/2005',
  getParentRoute: () => rootRoute,
  component: Archive2005,
});

const archive2006Route = createRoute({
  path: '/waste-management/solid-waste/archive/2006',
  getParentRoute: () => rootRoute,
  component: Archive2006,
});

const archive2008Route = createRoute({
  path: '/waste-management/solid-waste/archive/2008',
  getParentRoute: () => rootRoute,
  component: Archive2008,
});

const archive2009Route = createRoute({
  path: '/waste-management/solid-waste/archive/2009',
  getParentRoute: () => rootRoute,
  component: Archive2009,
});

const archive2011Route = createRoute({
  path: '/waste-management/solid-waste/archive/2011',
  getParentRoute: () => rootRoute,
  component: Archive2011,
});

const archive2018Route = createRoute({
  path: '/waste-management/solid-waste/archive/2018',
  getParentRoute: () => rootRoute,
  component: Archive2018,
});

const archive2019Route = createRoute({
  path: '/waste-management/solid-waste/archive/2019',
  getParentRoute: () => rootRoute,
  component: Archive2019,
});

const archive2020Route = createRoute({
  path: '/waste-management/solid-waste/archive/2020',
  getParentRoute: () => rootRoute,
  component: Archive2020,
});

const archive2021Route = createRoute({
  path: '/waste-management/solid-waste/archive/2021',
  getParentRoute: () => rootRoute,
  component: Archive2021,
});

const archive2022Route = createRoute({
  path: '/waste-management/solid-waste/archive/2022',
  getParentRoute: () => rootRoute,
  component: Archive2022,
});

const archive2023Route = createRoute({
  path: '/waste-management/solid-waste/archive/2023',
  getParentRoute: () => rootRoute,
  component: Archive2023,
});

const archive2024Route = createRoute({
  path: '/waste-management/solid-waste/archive/2024',
  getParentRoute: () => rootRoute,
  component: Archive2024,
});

const healthEnvironmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/health-environment',
  component: HealthEnvironment,
})

import PressGallery from './pages/press-gallery';

const pressGalleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/press-gallery',
  component: PressGallery,
})

const technicalCommitteeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/technical-committee',
  component: TechnicalCommitteeByProducts,
})

const cpcbGuidelinesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cpcb-guidelines',
  component: CPCBGuidelines,
})

const reportsDocumentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reports-documents',
  component: ReportsDocuments,
})

const monitoringPanchgangaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reports-documents/monitoring-panchganga',
  component: MonitoringPanchganga,
})

const pollutionIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cepi',
  component: PollutionIndex,
})

const industrialClusterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cepi/industrial-cluster',
  component: IndustrialCluster,
})

const technicalCommitteePollutionLoadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/technical-committee-pollution-load',
  component: TechnicalCommitteePollutionLoad,
})

const actionPlanReportsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/actionplan-reports',
  component: ActionPlanReports,
})

const riverPollutedStretchesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/actionplan-reports/river-polluted-stretches',
  component: RiverPollutedStretches,
})

// About Routes
const introductionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/introduction',
  component: Introduction,
})

const establishmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/establishment',
  component: Establishment,
})

const presentboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/presentboard',
  component: Presentboard,
})

const organizationalStructureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/organizationalstructure',

  component: OrganizationalStructure,
})

const mpcbEmployeesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/mpcbemployees',
  component: MPCBEmployees,
})


const officeInChargeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/officein-charge',
  component: OfficeInCharge,
})

const officesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/offices',
  component: Offices,
})

const budgetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/budget',
  component: Budget,
})

const annualReportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/annualreport',
  component: AnnualReport,
})

const trainingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/training',
  component: Training,
})

const laboratoriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/laboratories',
  component: Laboratories,
})

const cpcbdirectionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/standing-orders/cpcbdirection',
  component: CPCBDirections,
})


const circularsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/standing-orders/circulars',
  component: Circulars,
})

const moefdirectionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/standing-orders/moefdirection',
  component: MOEFDirections,
})



const mpcbdirectionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/standing-orders/mpcbdirection',
  component: MPCBDirections,
})

const stategovtdirectionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/standing-orders/stategovtdirection',
  component: StateGovtDirections,
})

const crzclearanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/standing-orders/crzclearance',
  component: CRZClearance,
})

const infoOfficersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rti/information-officers',
  component: InfoOfficers,
})

const waterAndAirRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/consent-management/water-air-act',
  component: WaterAndAir,
})

import NRCDStatus from './pages/water-quality/nrcd-status';
import Awareness from './pages/awareness';
import VideoGallery from './pages/video-gallery';

import CessAct from './pages/other-links/cess';

import Miscellaneous from './pages/other-links/miscellaneous';

const miscellaneousRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/other-links/miscellaneous',
  component: Miscellaneous,
})

import EnvironmentPlanning from './pages/other-links/environment-planning';

const environmentPlanningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/other-links/environment-planning',
  component: EnvironmentPlanning,
})

import OilSpills from './pages/other-links/oil-spills';
import CessRules from './pages/other-links/cess-rules'
import StandingOrders from './pages/standing-orders/importantstandingorders'

const oilSpillsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/other-links/oil-spills',
  component: OilSpills,
})

const cessActRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/other-links/cess',
  component: CessAct,
})

const cessRulesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/other-links/cess-rules',
  component: CessRules,
})

const cacMeetingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cac-meetings',
  component: CACMeetings,
})

const ccMeetingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cc-meetings',
  component: CCMeetings,
})

const onlineCemsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/online-cems',
  component: OnlineCEMS,
})

const complianceReportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compliance-report',
  component: ComplianceReport,
})

const accessingConsentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/consent-status/accessing-consent',
  component: AccessingConsent,
})

const amendedConsentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/consent-status/amended-consents-thermal',
  component: AmendedConsents,
})

const amendedConsentsMinesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/consent-status/coal-mines',
  component: AmendedConsentsMines,
})

const airQualityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/environmental-quality/air-quality',
  component: AirQuality,
})

const strengtheningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/environmental-quality/air-quality/strengthening',
  component: Strengthening,
});

const complianceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/environmental-quality/air-quality/compliance',
  component: Compliance,
});

const waterQualityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/environmental-quality/water-quality',
  component: WaterQuality,
})

const mapsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/environmental-quality/water-quality/maps',
  component: Maps,
})

const eBulletinRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/environmental-quality/water-quality/e-bulletin',
  component: EBulletin,
})

const qualityStandardsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/environmental-quality/water-quality/quality-standards',
  component: QualityStandards,
})

const vnitNagpurRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/environmental-quality/water-quality/vnit-nagpur',
  component: VNITNagpur,
})

const emcTrainingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/environmental-quality/water-quality/emc-training',
  component: EMCTraining,
})

const annualWaterQuality2002Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/environmental-quality/water-quality/annual-water-quality-2002',
  component: WaterQuality2002,
})

const annualWaterQuality2003Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/environmental-quality/water-quality/annual-water-quality-2003',
  component: WaterQuality2003,
})

const annualWaterQuality2004Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/environmental-quality/water-quality/annual-water-quality-2004',
  component: WaterQuality2004,
})

const annualWaterQuality2005Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/environmental-quality/water-quality/annual-water-quality-2005',
  component: WaterQuality2005,
})

const annualWaterQuality2006Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/environmental-quality/water-quality/annual-water-quality-2006',
  component: WaterQuality2006,
})

const listOfIndustriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/environmental-quality/water-quality/list-of-industries',
  component: ListOfIndustries,
})

const closureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/environmental-quality/water-quality/closure',
  component: ClosureDirections,
})

const noisePollutionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/environmental-quality/noise-pollution',
  component: NoisePollution,
})

const hazardousWasteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/hazardous-waste',
  component: HazardousWaste,
})

const registrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/hazardous-waste/registration',
  component: Registration,
})

const hazardousWasteInventoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/hazardous-waste/inventory',
  component: Inventory,
})

const biomedicalWasteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/biomedical-waste',
  component: BiomedicalWaste,
})

const endOfLifeVehiclesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/end-of-life-vehicles',
  component: EndOfLifeVehicles,
})

const batteriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/batteries',
  component: Batteries,
})

const flyAshRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/fly-ash',
  component: FlyAsh,
})

const flyAshNotificationImplementationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/fly-ash/notification-implementation',
  component: FlyAshNotificationImplementation,
})

const flyAshUtilization20042005Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/fly-ash/utilization-status-2004-2005',
  component: FlyAshUtilization20042005,
})

const flyAshUtilization20032004Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/fly-ash/utilization-status-2003-2004',
  component: FlyAshUtilization20032004,
})

const flyAshActionPlanRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/fly-ash/action-plan',
  component: FlyAshActionPlan,
})

const flyAshComplianceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/fly-ash/compliance',
  component: FlyAshCompliance,
})

const flyAshUtilisationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/fly-ash/utilisation',
  component: FlyAshUtilisation,
})

const electronicWasteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/electronic-waste',
  component: ElectronicWaste,
})

const circularsEWasteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/electronic-waste/circulars',
  component: CircularsEWaste,
})

const minutesManagementRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/electronic-waste/minutes-meeting-09-05-05',
  component: MinutesManagement,
})

const minutes2005Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/electronic-waste/minutes-meeting-22-09-05',
  component: Minutes2005,
})

const officeOrderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/electronic-waste/office-order-formation-expert-group',
  component: OfficeOrder,
})

const plasticWasteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/plastic-waste',
  component: PlasticWaste,
})

const effluentPlantRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/common-effluent-treatment-plant',
  component: EffluentPlant,
})

const highCourtOrdersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/common-effluent-treatment-plant/high-court-orders',
  component: HighCourtOrders,
})

const affidavitMPCBRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/common-effluent-treatment-plant/affidavit-mpcb',
  component: AffidavitMPCB,
})

const thaneBelapurRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/common-effluent-treatment-plant/thane-belapur',
  component: ThaneBelapur,
})

const constructionDemolitionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/construction-demolition-waste',
  component: ConstructionDemolition,
})

const solidWasteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/waste-management/solid-waste',
  component: SolidWaste,
})

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/faq',
  component: FAQ,
})

const feedbackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/feedback',
  component: Feedback,
})

const visitorsDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/visitors-dashboard',
  component: VisitorsDashboard,
})

// 404 Not Found Route
const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: () => <div className="py-20 text-center">404 - Page Not Found</div>,
})

const awarenessCampaignRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/public-awareness/awareness-campaign',
  component: Awareness,
})

const nrcdStatusRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/water-quality/nrcd-status',
  component: NRCDStatus,
})

const videoGalleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/video-gallery',
  component: VideoGallery,
})

// Route Tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  reportsDocumentsRoute,
  monitoringPanchgangaRoute,
  cessRulesRoute,
  cessActRoute,
  oilSpillsRoute,
  miscellaneousRoute,
  environmentPlanningRoute,
  pollutionIndexRoute,
  industrialClusterRoute,
  modelTenderDocRoute,
  upcomingRoute,
  waterAndAirRoute,
  nrcdStatusRoute,
  awarenessCampaignRoute,
  publicHearingsCircularsRoute,
  gemPurchaseRoute,
  tendersRoute,
  GalleryRoute,
  standingordersAllRoute,
  publicnoticesRoute,
  contactusRoute,
  healthEnvironmentRoute,
  technicalCommitteeRoute,
  technicalCommitteePollutionLoadRoute,
  actionPlanReportsRoute,
  riverPollutedStretchesRoute,
  cpcbGuidelinesRoute,
  categorisationRoute,
  missionlifeRoute,
  introductionRoute,
  establishmentRoute,
  presentboardRoute,
  organizationalStructureRoute,
  mpcbEmployeesRoute,
  officeInChargeRoute,
  officesRoute,
  budgetRoute,
  conductedRoute,
  annualReportRoute,
  laboratoriesRoute,
  trainingRoute,
  circularsRoute,
  cpcbdirectionRoute,
  moefdirectionRoute,
  mpcbdirectionRoute,
  stategovtdirectionRoute,
  industriesLocationRoute,
  authUnderBMWRoute,
  authUnderHWRoute,
  industrialStatisticsRoute,
  procedureDocumentsRoute,
  committeesRoute,
  workshopRoute,
  inspectionProcedureRoute,
  recruitmentRoute,
  rtsRoute,
  crzclearanceRoute,
  infoOfficersRoute,
  cacMeetingsRoute,
  ccMeetingsRoute,
  onlineCemsRoute,
  complianceReportRoute,
  accessingConsentRoute,
  amendedConsentsRoute,
  amendedConsentsMinesRoute,
  airQualityRoute,
  strengtheningRoute,
  complianceRoute,
  waterQualityRoute,
  mapsRoute,
  eBulletinRoute,
  qualityStandardsRoute,
  vnitNagpurRoute,
  emcTrainingRoute,
  annualWaterQuality2002Route,
  annualWaterQuality2003Route,
  annualWaterQuality2004Route,
  annualWaterQuality2005Route,
  annualWaterQuality2006Route,
  listOfIndustriesRoute,
  closureRoute,
  noisePollutionRoute,
  hazardousWasteRoute,
  registrationRoute,
  hazardousWasteInventoryRoute,
  biomedicalWasteRoute,
  endOfLifeVehiclesRoute,
  batteriesRoute,
  flyAshRoute,
  flyAshNotificationImplementationRoute,
  flyAshUtilization20042005Route,
  flyAshUtilization20032004Route,
  flyAshActionPlanRoute,
  flyAshComplianceRoute,
  flyAshUtilisationRoute,
  electronicWasteRoute,
  circularsEWasteRoute,
  minutesManagementRoute,
  minutes2005Route,
  officeOrderRoute,
  plasticWasteRoute,
  effluentPlantRoute,
  highCourtOrdersRoute,
  affidavitMPCBRoute,
  thaneBelapurRoute,
  constructionDemolitionRoute,
  solidWasteRoute,
  faqRoute,
  feedbackRoute,
  visitorsDashboardRoute,
  statusOfRegistrationRoute,
  closureDirectionStatusRoute,
  serviceMattersRoute,
  mumbaiBenchWaterRoute,
  mumbaiBenchAirRoute,
  mumbaiBenchEnvironmentImpactRoute,
  mumbaiBenchBiomedicalRoute,
  mumbaiBenchNoiseRoute,
  mumbaiBenchSandRoute,
  nationalGreenTribunalRoute,
  regulatingMiningActivitiesRoute,
  importantCircularsRoute,
  appellateWaterActRoute,
  environmentalLawsArchiveRoute,
  mumbaiBenchWaterArchiveRoute,
  mumbaiBenchAdministrativeMattersRoute,
  environmentPRulesRoute,
  coastalRegulationRoute,
  biomedicalArchiveRoute,
  solidWaste2000Route,
  noisePollutionArchiveRoute,
  aurangabadBenchWaterArchiveRoute,
  aurangabadBenchAdministrationMattersRoute,
  aurangabadBenchEnvironmentPRulesRoute,
  aurangabadBenchNoisePollutionRoute,
  nagpurBenchWaterActRoute,
  nagpurBenchAirActRoute,
  nagpurBenchEnvironmentRulesRoute,
  nagpurBenchHazardousWasteRoute,
  nagpurBenchNoisePollutionRoute,
  metropolitanMagistrateRoute,
  chiefJudicialMagistrateRoute,
  chiefJudicialMagistrateFirstClassRoute,
  civilJudgeRoute,
  environmentAppellateRoute,
  nationalGreenTribunalArchiveRoute,
  nationalConsumerForumRoute,
  industrialCourtRoute,
  antiCorruptionRoute,
  ngtOrderRoute,
  appellateWaterActArchiveRoute,
  firstAppellateAuthorityRoute,
  secondAppellateAuthorityRoute,
  oldStatisticalDetailsRoute,
  statisticalDetails2024Route,
  pressGalleryRoute,
  videoGalleryRoute,
  holiFestivalPhotosRoute,
  holiFestivalVideosRoute,
  ganeshFestivalPhotosRoute,
  ganeshFestivalVideosRoute,
  diwaliFestivalPhotosRoute,
  diwaliFestivalVideosRoute,
  worldEnvironmentDayPhotosRoute,
  worldEnvironmentDayVideosRoute,
  wariFestivalPhotosRoute,
  wariFestivalVideosRoute,
  dahiHandiPhotosRoute,
  dahiHandiVideosRoute,
  miscellaneousPhotosRoute,
  greenTheatreFestivalPhotosRoute,
  greenTheatreFestivalVideosRoute,
  archive2004Route,
  archive2005Route,
  archive2006Route,
  archive2008Route,
  archive2009Route,
  archive2011Route,
  archive2018Route,
  archive2019Route,
  archive2020Route,
  archive2021Route,
  archive2022Route,
  archive2023Route,
  archive2024Route,
  notFoundRoute,
])

// Router
export const router = createRouter({ routeTree })

// Type registration for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
