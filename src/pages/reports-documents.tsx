import { useState } from 'react';
import { ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';
import DocumentCard from '../components/DocumentCard';
import { useNavigate } from '@tanstack/react-router';

const standingorders = "/assets/standingorders.svg";
const mpcblogo = "/assets/mpcblogo.png";

// Budget Colors for E-Bulletin Cards
const budgetColors = [
    "bg-green-500",
    "bg-cyan-500",
    "bg-red-400",
    "bg-green-400",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-blue-400",
    "bg-gray-100",
    "bg-lime-500",
];

const EBulletinCard = ({ title, color }: { title: string; color: string }) => {
    const isLight = color === "bg-gray-100";
    const textColor = isLight ? "text-gray-700" : "text-white/90";
    const borderColor = isLight ? "border-green-500" : "border-yellow-400";
    // Extract Month and Year from title "MPCB E-Bulletin for [Month] [Year]"
    const match = title.match(/MPCB E-Bulletin for (.*) (\d{4})/);
    const dateDisplay = match ? (
        <>
            <p className="text-[11px] font-medium uppercase">{match[1]}</p>
            <p className="text-[13px] font-bold">{match[2]}</p>
        </>
    ) : (
        <p className="text-[12px] font-bold break-words px-2">{title}</p>
    );

    return (
        <div className={`${color} ${borderColor} border-4 rounded-2xl p-6 flex flex-col items-center justify-between h-[310px] cursor-pointer hover:shadow-lg transition-shadow duration-200 w-full max-w-[262px] mx-auto`}>
            {/* Header */}
            <p className={`text-[12px] font-semibold ${textColor} text-center tracking-wide`}>
                MAHARASHTRA POLLUTION CONTROL BOARD
            </p>

            {/* Emblem */}
            <div className={`${textColor} w-16 h-16 flex items-center justify-center`}>
                <img src={mpcblogo} alt="MPCB Logo" className="w-full h-full" />
            </div>

            {/* Title / Date */}
            <div className={`text-center ${textColor}`}>
                <p className="text-[10px] font-medium opacity-80 mb-1">E-BULLETIN</p>
                {dateDisplay}
            </div>
        </div>
    );
};

// Reusable Paginated Section Component (Local definition)
const PaginatedSection = ({ documents }: { documents: any[] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isViewAll, setIsViewAll] = useState(false);
    const ITEMS_PER_PAGE = 4; // 2 rows * 2 columns

    const totalPages = Math.ceil(documents.length / ITEMS_PER_PAGE);

    // Determine which documents to show
    const currentDocuments = isViewAll
        ? documents
        : documents.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const toggleViewAll = () => {
        setIsViewAll(!isViewAll);
        setCurrentPage(1); // Reset to first page when toggling
    };

    const getPageNumbers = (curr: number, total: number) => {
        const pages: any[] = [];
        if (total <= 3) {
            for (let i = 1; i <= total; i++) pages.push(i);
        } else {
            if (curr <= 2) pages.push(1, 2, 3, '...', total);
            else if (curr >= total - 1) pages.push(1, '...', total - 2, total - 1, total);
            else pages.push(1, '...', curr - 1, curr, curr + 1, '...', total);
        }
        return pages;
    };

    return (
        <div className="mt-0">
            <div className="flex justify-end mb-4">
                {documents.length > ITEMS_PER_PAGE && (
                    <button
                        onClick={toggleViewAll}
                        className="px-4 py-2 text-sm font-medium text-[#0085E2] bg-blue-50 hover:bg-[#0085E2] hover:text-white cursor-pointer rounded-full transition-all duration-300"
                    >
                        {isViewAll ? "Show Less" : "View All"}
                    </button>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {currentDocuments.map((doc) => (
                    <DocumentCard
                        key={doc.id}
                        document={doc}
                        wide={false}
                    />
                ))}
            </div>

            {/* Pagination Controls - Hide if View All is active */}
            {!isViewAll && totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                    <button
                        onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                        disabled={currentPage === 1}
                        className={`w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 transition-colors cursor-pointer ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2]'}`}
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    {getPageNumbers(currentPage, totalPages).map((page, index) => (
                        page === '...' ? (
                            <span key={`ellipsis-${index}`} className="px-2 text-gray-400 text-sm">...</span>
                        ) : (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page as number)}
                                className={`w-8 h-8 flex items-center justify-center rounded-full text-[13px] font-medium transition-all duration-300 cursor-pointer
                                    ${currentPage === page
                                        ? 'bg-[#0085E2] text-white shadow-md shadow-blue-200 scale-110'
                                        : 'text-gray-600 hover:bg-gray-50'}`}
                            >
                                {page}
                            </button>
                        )
                    ))}

                    <button
                        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 transition-colors cursor-pointer ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2]'}`}
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
};

// Sidebar tabs
// Sidebar tabs
const sidebarTabs = [
    "Success Stories",
    "Annual Reports Of MPCB",
    {
        title: "Environmental Quality/Status Reports",
        subItems: [
            "Air",
            "Water",
            "Specific River",
            "Coastal Ecology",
            "Ground Water",
            "E-Waste",
            "Biomedical",
            "Municipal Solid Waste",
            "State of Environment Report",
            "City Status",
            "Voc Studies"
        ]
    },
    "Comprehensive Study Reports of Polluted River Streches",
    "Workshops/Training",
    "Environmental Improvement and Action Plans",
    "Guidelines",
    "E bulletin"
];

function ReportsDocuments() {
    const [selectedTab, setSelectedTab] = useState("Success Stories");
    // State to track which dropdown is open (by title)
    const [expandedTab, setExpandedTab] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleTabClick = (tab: string | any, isDropdown = false) => {
        const tabName = typeof tab === 'string' ? tab : tab.title;

        if (tabName === "Annual Reports Of MPCB") {
            navigate({ to: '/about/annualreport' });
            return;
        }

        if (isDropdown) {
            setExpandedTab(expandedTab === tabName ? null : tabName);
        } else {
            setSelectedTab(tabName);
            setExpandedTab(null); // Collapse other dropdowns when selecting a main item? Optional.
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Data for Success Stories
    const successStoriesData = [
        {
            id: 'ss1',
            title: "Marine Debris Cleanup Drive at Malvan to restore Sindhudurg’s marine zones.",
            pdfUrl: "#"
        },
        {
            id: 'ss2',
            title: "DOMESTIC WASTE WATER REUSE PROJECT AT NAGPUR By MAHAGENCO- NAGPUR MUNICIPAL CORPORATION TO APPLY WATER FOR (3x660 MW) KORADI THERMAL POWER PLANT",
            pdfUrl: "#"
        },
        {
            id: 'ss3',
            title: "Sewage Treatment Plant at RCF Trombay unit to Treat Sewage of Mumbai City",
            pdfUrl: "#"
        },
        {
            id: 'ss4',
            title: "Fugitive Emissions Control during Coal Handling and Transportation Activities",
            pdfUrl: "#"
        }
    ];

    // Data for Air Reports (Environmental Quality/Status Reports -> Air)
    const airReportsData = [
        { id: 'ar1', title: "Air Quality Report 2019-20", pdfUrl: "#" },
        { id: 'ar2', title: "Air Quality Report 2018-19", pdfUrl: "#" },
        { id: 'ar3', title: "Air Quality Report 2017-18", pdfUrl: "#" },
        { id: 'ar4', title: "Air Quality Report 2016-17", pdfUrl: "#" },
        { id: 'ar5', title: "Air Quality Report 2015-16", pdfUrl: "#" },
        { id: 'ar6', title: "Air Quality Report 2014-15", pdfUrl: "#" },
        { id: 'ar7', title: "Air Quality Report 2013-14", pdfUrl: "#" },
        { id: 'ar8', title: "Air Quality Report 2012-13", pdfUrl: "#" },
        { id: 'ar9', title: "Air Quality Report 2011-12", pdfUrl: "#" },
        { id: 'ar10', title: "Air Quality Assessment,Emissions Inventory and Source Apportionment Studies:Mumbai-report by cpcb 2010", pdfUrl: "#" },
        { id: 'ar11', title: "Air Quality Monitoring and Emission Source Apportionment Study Pune-report by cpcb 2010", pdfUrl: "#" }
    ];

    // Data for Water Reports (Environmental Quality/Status Reports -> Water)
    const waterReportsData = [
        { id: 'wr1', title: "Water Quality Report 2023-24", pdfUrl: "#" },
        { id: 'wr2', title: "Water Quality Report 2022-23", pdfUrl: "#" },
        { id: 'wr3', title: "Water Quality Report 2021-22", pdfUrl: "#" },
        { id: 'wr4', title: "Water Quality Report 2020-21", pdfUrl: "#" },
        { id: 'wr5', title: "Water Quality Report 2019-20", pdfUrl: "#" },
        { id: 'wr6', title: "Water Quality Report 2018-19", pdfUrl: "#" },
        { id: 'wr7', title: "Water Quality Report 2017-18", pdfUrl: "#" },
        { id: 'wr8', title: "Water Quality Report 2016-17", pdfUrl: "#" },
        { id: 'wr9', title: "Water Quality Report 2015-16", pdfUrl: "#" },
        { id: 'wr10', title: "Water Quality Report 2014-15", pdfUrl: "#" },
        { id: 'wr11', title: "Water Quality Report 2013-14", pdfUrl: "#" },
        { id: 'wr12', title: "Water Quality Report 2012-13", pdfUrl: "#" },
        { id: 'wr13', title: "Water Quality Report 2011-12", pdfUrl: "#" },
        { id: 'wr14', title: "Report on River Water Quality in Maharashtra 2005", pdfUrl: "#" },
        { id: 'wr15', title: "Report on River Water Quality in Maharashtra 2007 to 2011", pdfUrl: "#" }
    ];

    // Data for Specific River
    const panchgangaLink = { text: "Monitoring of Panchganga River Water Quality at Kolhapur 2006", link: "/reports-documents/monitoring-panchganga" };
    const specificRiverData = [
        { id: 'sr1', title: "Report On Mithi River Water Pollution And Recommendations For Its Control 2004", pdfUrl: "#" },
        { id: 'sr2', title: "Report on River Water Quality in Maharashtra 2005", pdfUrl: "#" },
        { id: 'sr3', title: "Assessment of Riverine fisheries and linking with water quality restoration programme-River Godavari in Maharashtra 2011", pdfUrl: "#" }
    ];

    // Data for Coastal Ecology
    const coastalEcologyData = [
        { id: 'ce1', title: "Assessment of impact of release of effluents on ecology of inshore and coastal areas of Maharashtra and their management 2018 Part A:(Main Report)", pdfUrl: "#" },
        { id: 'ce2', title: "Assessment of impact of release of effluents on ecology of inshore and coastal areas of Maharashtra and their management 2018 Part B:(Data)", pdfUrl: "#" },
        { id: 'ce3', title: "Monitoring of Marine & Estuarine Ecology of Maharashtra Executive Summery 2008", pdfUrl: "#" }
    ];

    // Data for Ground Water
    const groundWaterData = [
        { id: 'gw1', title: "Ground water pollution around Industrial Clusters in MIDC areas of Dombivali, Navi Mumbai, Chembur, Mumbai, Tarapur, Thane district 2013.", pdfUrl: "#" },
        { id: 'gw2', title: "Ground water pollution around Industrial Clusters in MIDC areas of Aurangabad 2013", pdfUrl: "#" },
        { id: 'gw3', title: "Ground water pollution around Industrial Clusters in MIDC areas of Chandrapur 2010-11", pdfUrl: "#" },
        { id: 'gw4', title: "Ground water pollution around Industrial Clusters in MIDC areas of Nashik 2014", pdfUrl: "#" },
        { id: 'gw5', title: "Ground water pollution around Industrial Clusters in MIDC areas of Pimpari Chinchwad 2014", pdfUrl: "#" }
    ];

    // Data for E-Waste
    const eWasteData = [
        { id: 'ew1', title: "Report on Assessment of Electronic Wastes in Mumbai-Pune Area 2007 (Part - 1)", pdfUrl: "#" },
        { id: 'ew2', title: "Report on Assessment of Electronic Wastes in Mumbai-Pune Area 2007 (Part - 2)", pdfUrl: "#" },
        { id: 'ew3', title: "Indian Scenario: Perspective of E-Waste Management", pdfUrl: "#" }
    ];

    // Data for Biomedical
    const biomedicalData = [
        { id: 'bm1', title: "Report On Status Of Some Common Facilities For Collection, Treatment And Disposal Of Biomedical Waste In Maharashtra 2004", pdfUrl: "#" }
    ];

    // Data for Municipal Solid Waste
    const municipalSolidWasteData = [
        { id: 'msw1', title: "Status Of Muncipal Solid Waste Management in Muncipal Corpoaration (2013-2014) (Part - 1)", pdfUrl: "#" },
        { id: 'msw2', title: "Status Of Muncipal Solid Waste Management in Muncipal Corpoaration (2013-2014) (Part - 2)", pdfUrl: "#" }
    ];

    // Data for State of Environment Report
    const stateOfEnvironmentData = [
        { id: 'soe1', title: "State of Environment Report for Maharashtra 2007", pdfUrl: "#" }
    ];

    // Data for City Status
    const cityStatusData = [
        { id: 'cs1', title: "Report on Environmental Status Report of Pandharpur 2005", pdfUrl: "#" },
        { id: 'cs2', title: "Evaluation of Environmental Status Reports of Cities in Maharashtra 2009", pdfUrl: "#" },
        // Regions
        { id: 'cs_reg1', title: "Report on Environment Status of Region - Amravati", pdfUrl: "#" },
        { id: 'cs_reg2', title: "Report on Environment Status of Region - Aurangabad", pdfUrl: "#" },
        { id: 'cs_reg3', title: "Report on Environment Status of Region - Kalyan", pdfUrl: "#" },
        { id: 'cs_reg4', title: "Report on Environment Status of Region - Kolhapur", pdfUrl: "#" },
        { id: 'cs_reg5', title: "Report on Environment Status of Region - Mumbai", pdfUrl: "#" },
        { id: 'cs_reg6', title: "Report on Environment Status of Region - Nagpur", pdfUrl: "#" },
        { id: 'cs_reg7', title: "Report on Environment Status of Region - Nashik", pdfUrl: "#" },
        { id: 'cs_reg8', title: "Report on Environment Status of Region - NaviMumbai", pdfUrl: "#" },
        { id: 'cs_reg9', title: "Report on Environment Status of Region - Pune", pdfUrl: "#" },
        { id: 'cs_reg10', title: "Report on Environment Status of Region - Raigad", pdfUrl: "#" },
        { id: 'cs_reg11', title: "Report on Environment Status of Region - Thane", pdfUrl: "#" },
        // Model Reports
        { id: 'cs_mod1', title: "Model Report of Environmental Status Report (ESR) - Thane 2010", pdfUrl: "#" },
        { id: 'cs_mod2', title: "Model Report of Environmental Status Report (ESR) - Barshi 2008-09", pdfUrl: "#" }
    ];

    // Data for Voc Studies
    const vocStudiesData = [
        { id: 'voc1', title: "VOC Report of Patalganga by CPCB, 2014", pdfUrl: "#" },
        { id: 'voc2', title: "VOC Report of tarapur,navi mumbai,Dombivli, Chandrapur,aurangabad industrial Areas by CPCB, 2011", pdfUrl: "#" },
        { id: 'voc3', title: "VOC Report of Lote by CPCB, 2010", pdfUrl: "#" },
        { id: 'voc4', title: "VOC Report of Tarapur by CPCB, 2009", pdfUrl: "#" },
        { id: 'voc5', title: "VOC Report of Taloja and Mahad by CPCB", pdfUrl: "#" }
    ];

    // Data for Comprehensive Study Reports of Polluted River Strechess
    const pollutedRiverStretchesData = [
        { id: 'cpr1', title: "Bima river", pdfUrl: "#" },
        { id: 'cpr2', title: "Godavari", pdfUrl: "#" },
        { id: 'cpr3', title: "Girna", pdfUrl: "#" },
        { id: 'cpr4', title: "Tapi", pdfUrl: "#" },
        { id: 'cpr5', title: "Kundalika", pdfUrl: "#" },
        { id: 'cpr6', title: "Krishna", pdfUrl: "#" },
        { id: 'cpr7', title: "Koyna", pdfUrl: "#" },
        { id: 'cpr8', title: "Ulhas", pdfUrl: "#" },
        { id: 'cpr9', title: "Mithi River", pdfUrl: "#" }
    ];

    // Data for Workshops/Training
    const workshopsTrainingData = [
        { id: 'wt1', title: "Workshop for Mass Awareness on implementation of Batteries (Management & Handling) Rules,2001 -Year 2009", pdfUrl: "#" },
        { id: 'wt2', title: "Report on Consent Awareness Camp held on March ,2011 at TTC & Taloja Industrial Area on the concept of \"MPCB Aaplya Dari\":-2011", pdfUrl: "#" },
        { id: 'wt3', title: "Training Workshop for preparation of City Environmental Status Report (ESR) to Urban Local Bodies\" held on 9th & 10th September, 2009", pdfUrl: "#" }
    ];

    // Data for Environmental Improvement and Action Plans
    const envImprovementTopData = [
        { id: 'eia1', title: "Focus Action Plan for VOC pollution control in Mahul, Ambapada and Chembur area, Mumbai", pdfUrl: "#" },
        { id: 'eia2', title: "Comprehensive Action Plan for control of air pollution in Mahul, Ambapada and Chembur areas in compliance of NGT(WZ)’s order dtd. 18/12/2015 in application No. 40/2014(WZ).", pdfUrl: "#" }
    ];

    const envImprovementAirData = [
        { id: 'eia_air1', title: "Control of Air Pollution at Solapur 2004 (Part - 1)", pdfUrl: "#" },
        { id: 'eia_air2', title: "Control of Air Pollution at Solapur 2004 (Part - 2)", pdfUrl: "#" },
        { id: 'eia_air3', title: "Control of Air Pollution at Pune 2004 (Part - 1)", pdfUrl: "#" },
        { id: 'eia_air4', title: "Control of Air Pollution at Pune 2004 (Part - 2)", pdfUrl: "#" },
        { id: 'eia_air5', title: "Control of Air Pollution at Chandrapur District 2006 (Part - 1)", pdfUrl: "#" },
        { id: 'eia_air6', title: "Control of Air Pollution at Chandrapur District 2006 (Part - 2)", pdfUrl: "#" }
    ];

    const envImprovementRiverData = [
        { id: 'eia_riv1', title: "Control of Pollution at Kolhapur 2006", pdfUrl: "#" },
        { id: 'eia_riv2', title: "Bhima River Pollution Control Action Plan 2010", pdfUrl: "#" },
        { id: 'eia_riv3', title: "Nag River Basin Action Plan 2011", pdfUrl: "#" },
        { id: 'eia_riv4', title: "Erai and Zarpat River Action Plan", pdfUrl: "#" }
    ];

    // Data for Religious Places
    const aalndiData = [
        { id: 'al1', title: "Conceptual Plan", pdfUrl: "#" },
        { id: 'al2', title: "Feasibility Report", pdfUrl: "#" },
        { id: 'al3', title: "Presentation (Part - 1)", pdfUrl: "#" },
        { id: 'al4', title: "Presentation (Part - 2)", pdfUrl: "#" },
        { id: 'al5', title: "Presentation (Part - 3)", pdfUrl: "#" },
        { id: 'al6', title: "Presentation (Part - 4)", pdfUrl: "#" },
        { id: 'al7', title: "Presentation (Part - 5)", pdfUrl: "#" },
        { id: 'al8', title: "Presentation (Part - 6)", pdfUrl: "#" }
    ];

    const shirdiData = [
        { id: 'sh1', title: "Conceptual Plan", pdfUrl: "#" },
        { id: 'sh2', title: "Feasibility Report", pdfUrl: "#" },
        { id: 'sh3', title: "Presentation (Part - 1)", pdfUrl: "#" },
        { id: 'sh4', title: "Presentation (Part - 2)", pdfUrl: "#" }
    ];

    const shaniData = [
        { id: 'shan1', title: "Feasibility Report", pdfUrl: "#" },
        { id: 'shan2', title: "Presentation (Part - 1)", pdfUrl: "#" },
        { id: 'shan3', title: "Presentation (Part - 2)", pdfUrl: "#" },
        { id: 'shan4', title: "Presentation (Part - 3)", pdfUrl: "#" }
    ];

    // Data for Guidelines
    const guidelinesData1 = [
        { id: 'gl1', title: "GR of Environment Department GoM Regarding Guidelines for Immersion of Plaster of Paris (POP) Idols dtd 01 Aug 2025", pdfUrl: "#", isNew: true }, // Added isNew flag logic if needed, or just title
        { id: 'gl2', title: "Guidelines on Environmental Management of C&D Waste Management in India -Draft 2017", pdfUrl: "#" },
        { id: 'gl3', title: "CPCB Guidlines for Idol Immersion", pdfUrl: "#" },
        { id: 'gl4', title: "Guidelines for Online continuous monitoring system for effluents", pdfUrl: "#" },
        { id: 'gl5', title: "Paryavaran Kavach(Guidance Manual on Environment Compliances in Maharashtra 2014) - Cover Page", pdfUrl: "#" },
        { id: 'gl6', title: "Paryavaran Kavach(Guidance Manual on Environment Compliances in Maharashtra 2014) - Booklet", pdfUrl: "#" },
        { id: 'gl7', title: "Gudelines for Imersion of Ganesh Idols 2013", pdfUrl: "#" },
        { id: 'gl8', title: "Guidelines for Management & Handling of Spent Mycelium from Bulk Drug Industry", pdfUrl: "#" },
        { id: 'gl9', title: "Guidelines for operation & maintenance of Effluent Treatment Plants", pdfUrl: "#" },
        { id: 'gl10', title: "A Note On Implementation Of Environmentally Sound Technologies For Re-Refining/Recycling Of Used Oil/Waste Oil", pdfUrl: "#" },
        { id: 'gl11', title: "Guidelines for Citizens for Management of Municipal Solid Waste", pdfUrl: "#" },
        { id: 'gl12', title: "Guidelines For Hazardous Wastes Management", pdfUrl: "#" }
    ];

    const guidelinesBMWData = [
        { id: 'gl_bmw1', title: "Suggested Code of Conduct for Environment Friendly Immersion of Idols", pdfUrl: "#" },
        { id: 'gl_bmw2', title: "Environmental Sound Operations for Stone Quarries", pdfUrl: "#" },
        { id: 'gl_bmw3', title: "Draft Guidelines for Regulation of Tyre Retreading Activities in the State of Maharashtra (Notification)", pdfUrl: "#" },
        { id: 'gl_bmw4', title: "Draft Guidlines of CPCB for In-use Generator Sets for Noise and Emissions", pdfUrl: "#" }
    ];

    // Data for E-Bulletin
    const eBulletinMonths = [
        "August 2023", "July 2023", "June 2023", "May 2023",
        "April 2023", "March 2023", "February 2023", "January 2023",
        "December 2022", "November 2022", "October 2022", "September 2022",
        "August 2022", "July 2022", "June 2022", "May 2022",
        "April 2022", "March 2022", "February 2022", "January 2022",
        "December 2021", "November 2021", "October 2021", "September 2021",
        "October 2020", "June 2020", "January 2020", "November 2019", "September 2019"
    ];

    const eBulletinData = eBulletinMonths.map((date, index) => ({
        id: `eb${index}`,
        title: `MPCB E-Bulletin for ${date}`,
        color: budgetColors[index % budgetColors.length]
    }));

    return (
        <div className="font-family-helvetica">
            {/* Top Banner Section */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[280px] rounded-t-[24px] md:rounded-t-[48px] overflow-hidden">
                        <div
                            className="absolute inset-0 z-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${standingorders})` }}
                        />
                        <div
                            className="absolute inset-0 z-10 bg-cover bg-center blur-sm scale-105"
                            style={{
                                backgroundImage: `url(${standingorders})`,
                                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
                                maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)'
                            }}
                        />
                        <div className="absolute inset-0 z-20 bg-linear-to-b from-[#00A3FF]/30 via-[#00A3FF]/60 to-white" />

                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-30px]">
                            <h1 className="text-[28px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-none mb-8">
                                Reports / Documents
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Left Sidebar */}
                        <div className="w-full lg:w-[320px] flex-shrink-0">
                            <div className="flex flex-col gap-4">
                                {sidebarTabs.map((tab: any) => {
                                    const isDropdown = typeof tab === 'object';
                                    const tabName = isDropdown ? tab.title : tab;
                                    // Active if it's the selected leaf tab OR if it's a dropdown and one of its children is selected
                                    const isActive = selectedTab === tabName || (isDropdown && tab.subItems.includes(selectedTab));
                                    // Expanded if explicitly expanded via click
                                    const isExpanded = expandedTab === tabName;

                                    return (
                                        <div key={tabName} className="flex flex-col">
                                            <div
                                                onClick={() => handleTabClick(tab, isDropdown)}
                                                className={`flex items-center justify-between px-6 py-5 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-200
                                                    ${isActive
                                                        ? 'border-2 border-[#00A3FF] bg-[#00A3FF]/5'
                                                        : 'border border-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF]'
                                                    }`}
                                            >
                                                <span className={`text-[14px] font-normal transition-colors duration-200 ${isActive ? 'text-[#00A3FF] font-medium' : 'text-gray-800'}`}>
                                                    {tabName}
                                                </span>
                                                {isDropdown && (
                                                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#00A3FF]' : 'text-gray-400'}`} />
                                                )}
                                            </div>

                                            {/* Dropdown Content */}
                                            {isDropdown && (
                                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                                    <div className="flex flex-col gap-1 pl-4">
                                                        {tab.subItems.map((subItem: string) => (
                                                            <div
                                                                key={subItem}
                                                                onClick={() => {
                                                                    setSelectedTab(subItem);
                                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                                }}
                                                                className={`px-5 py-3 rounded-[15px] cursor-pointer text-[13px] transition-all duration-200 flex items-center gap-2
                                                                    ${selectedTab === subItem
                                                                        ? 'bg-blue-50 text-[#0085E2] font-medium pl-6'
                                                                        : 'text-gray-600 hover:text-[#0085E2] hover:bg-gray-50'
                                                                    }`}
                                                            >
                                                                {selectedTab === subItem && <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2]" />}
                                                                {subItem}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1">
                            <div className="rounded-[24px] p-4 md:p-8 min-h-[400px]">
                                <h2 className="text-[20px] md:text-[24px] font-semibold text-gray-800 mb-6 uppercase border-b border-gray-200 pb-4 tracking-wide">
                                    {selectedTab}
                                </h2>

                                {selectedTab === "Success Stories" ? (
                                    <PaginatedSection documents={successStoriesData} />
                                ) : selectedTab === "Air" ? (
                                    <PaginatedSection documents={airReportsData} />
                                ) : selectedTab === "Water" ? (
                                    <PaginatedSection documents={waterReportsData} />
                                ) : selectedTab === "Specific River" ? (
                                    <div className="flex flex-col gap-8">
                                        {/* External Link Item */}
                                        <a
                                            href={panchgangaLink.link}
                                            className="group flex items-center justify-between p-5 rounded-2xl border border-gray-200 bg-white hover:border-[#0085E2] hover:shadow-md transition-all duration-300 cursor-pointer"
                                        >
                                            <span className="text-[16px] font-medium text-gray-800 group-hover:text-[#0085E2] transition-colors">
                                                {panchgangaLink.text}
                                            </span>
                                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-[#0085E2] transition-colors">
                                                <ChevronRight className="w-5 h-5 text-[#0085E2] group-hover:text-white transition-colors" />
                                            </div>
                                        </a>

                                        <PaginatedSection documents={specificRiverData} />
                                    </div>
                                ) : selectedTab === "Coastal Ecology" ? (
                                    <PaginatedSection documents={coastalEcologyData} />
                                ) : selectedTab === "Ground Water" ? (
                                    <PaginatedSection documents={groundWaterData} />
                                ) : selectedTab === "E-Waste" ? (
                                    <PaginatedSection documents={eWasteData} />
                                ) : selectedTab === "Biomedical" ? (
                                    <PaginatedSection documents={biomedicalData} />
                                ) : selectedTab === "Municipal Solid Waste" ? (
                                    <PaginatedSection documents={municipalSolidWasteData} />
                                ) : selectedTab === "State of Environment Report" ? (
                                    <PaginatedSection documents={stateOfEnvironmentData} />
                                ) : selectedTab === "City Status" ? (
                                    <PaginatedSection documents={cityStatusData} />
                                ) : selectedTab === "Voc Studies" ? (
                                    <PaginatedSection documents={vocStudiesData} />
                                ) : selectedTab === "Comprehensive Study Reports of Polluted River Streches" ? (
                                    <PaginatedSection documents={pollutedRiverStretchesData} />
                                ) : selectedTab === "Workshops/Training" ? (
                                    <PaginatedSection documents={workshopsTrainingData} />
                                ) : selectedTab === "Environmental Improvement and Action Plans" ? (
                                    <div className="flex flex-col gap-8">
                                        <PaginatedSection documents={envImprovementTopData} />

                                        {/* Air Quality Section */}
                                        <div>
                                            <h3 className="text-[18px] font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                                                Air Quality
                                            </h3>
                                            <PaginatedSection documents={envImprovementAirData} />
                                        </div>

                                        {/* River Quality Section */}
                                        <div>
                                            <h3 className="text-[18px] font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                                                River Quality
                                            </h3>
                                            <PaginatedSection documents={envImprovementRiverData} />
                                        </div>

                                        {/* Religious Places Section */}
                                        <div>
                                            <h3 className="text-[20px] font-extrabold text-gray-900 mb-6 uppercase border-b border-gray-200 pb-4">
                                                Religious Places
                                            </h3>

                                            <div className="flex flex-col gap-8">
                                                <div>
                                                    <h4 className="text-[16px] font-bold text-gray-800 mb-4">Aalndi 2005</h4>
                                                    <PaginatedSection documents={aalndiData} />
                                                </div>

                                                <div>
                                                    <h4 className="text-[16px] font-bold text-gray-800 mb-4">Shirdi 2005</h4>
                                                    <PaginatedSection documents={shirdiData} />
                                                </div>

                                                <div>
                                                    <h4 className="text-[16px] font-bold text-gray-800 mb-4">Shani Shinganapur 2005</h4>
                                                    <PaginatedSection documents={shaniData} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : selectedTab === "Guidelines" ? (
                                    <div className="flex flex-col gap-8">
                                        <PaginatedSection documents={guidelinesData1} />

                                        <div>
                                            <h3 className="text-[18px] font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                                                Guidelines for Common BMW Treatments Facility
                                            </h3>
                                            <PaginatedSection documents={guidelinesBMWData} />
                                        </div>
                                    </div>
                                ) : selectedTab === "E bulletin" ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                        {eBulletinData.map((item) => (
                                            <EBulletinCard key={item.id} title={item.title} color={item.color} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-[14px] text-gray-700 leading-relaxed">
                                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 flex flex-col items-center justify-center min-h-[200px] text-center">
                                            <p className="text-gray-500 italic">Content for "{selectedTab}" will be displayed here.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ReportsDocuments;
