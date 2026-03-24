import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ChevronDown, ChevronUp, ChevronRight, ChevronLeft } from 'lucide-react';
import DocumentCard from '../../components/DocumentCard';
import waterquality from "/assets/waterquality.png";
import PageBanner from '../../components/PageBanner.tsx';
import Sidebar from '../../components/Sidebar.tsx';



// Reusable Paginated Section Component
const PaginatedSection = ({ title, documents, children }: { title: string, documents: any[], children?: React.ReactNode }) => {
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
        <div className="mt-12">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                    {title}
                </h3>
                {documents.length > ITEMS_PER_PAGE && (
                    <button
                        onClick={toggleViewAll}
                        className="px-4 py-2 text-sm font-medium text-[#0085E2] bg-blue-50 hover:bg-[#0085E2] hover:text-white cursor-pointer rounded-full transition-all duration-300"
                    >
                        {isViewAll ? "Show Less" : "View All"}
                    </button>
                )}
            </div>

            {children && <div className="mb-6">{children}</div>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {currentDocuments.map((doc) => (
                    <DocumentCard
                        key={doc.id}
                        document={doc}
                        wide={false}
                    />
                ))}
            </div>

            {/* Show pagination only if NOT in View All mode and total pages > 1 */}
            {!isViewAll && totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                    {currentPage > 1 && (
                        <button onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                    )}
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
                    {currentPage < totalPages && (
                        <button onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

function WaterQuality() {
    const navigate = useNavigate();
    // No archive logic requested for water quality yet, but keeping structure clean



    // Monitoring Network documents (from image)
    const monitoringNetworkDocs = [
        { id: 'mn1', title: "MPCB circular dtd 26 Aug 2025 regarding immersion of less than 6 feet height Eco-friendly Idols (such as shadu mati etc.)", pdfUrl: "#", isNew: true },
        { id: 'mn2', title: "Standard Operating Procedure (SOP) for Idol immersion for year 2025 issued by MPCB.", pdfUrl: "#", isNew: true },
        { id: 'mn3', title: "GR of Environment Department GoM Regarding Guidelines for Immersion of Plaster of Paris (POP) Idols dtd 01 Aug 2025", pdfUrl: "#", isNew: true },
        { id: 'mn4', title: "Guidelines for Environmental Management of Dairy Farms and Gaushalas", pdfUrl: "#" },
        { id: 'mn5', title: "Mechanism/Guidelines for Control of Pollution and Enforcement of Environment Norms Area/Cluster of Restaurants/Hotels/Motels/Banquetsat", pdfUrl: "#" },
        { id: 'mn6', title: "NWMP Locations in Maharashtra", pdfUrl: "#" },
        { id: 'mn9', title: "Marine Debris Cleanup Drive at Malvan to restore Sindhudurg's marine zones.", pdfUrl: "#" },
        { id: 'mn10', title: "Information About STP In Maharashtra", pdfUrl: "#" }
    ];

    const monitoringNetworkLinks = [
        { title: "Maps showing Environmental Monitoring Network of Maharashtra", url: "/environmental-quality/water-quality/maps" },
        { title: "E bulletin of Water Quality", url: "/environmental-quality/water-quality/e-bulletin" }
    ];

    // Standards & Protocols documents (from image)
    // Standards & Protocols documents (from image)
    const standardsProtocolsDocs = [
        { id: 'sp1', title: "GoI GR - Guidelines to regulate and control ground water extraction in India", pdfUrl: "#" },
        { id: 'sp2', title: "Water Quality Criteria", pdfUrl: "#" },
        { id: 'sp4', title: "Water Quality Standards for Coastal Waters", pdfUrl: "#" },
        { id: 'sp5', title: "Uniform Monitoring Protocol for Water Quality Monitoring", pdfUrl: "#" },
        { id: 'sp6', title: "Monitoring Protocol - Ground water (Tubewells, Hand pumps, Dugwell)", pdfUrl: "#" },
        { id: 'sp7', title: "Guidelines for Water Quality Monitoring", pdfUrl: "#" },
        { id: 'sp8', title: "format for details of monitoring Stations.", pdfUrl: "#" },
        { id: 'sp9', title: "CPCB's Guidelines on Water Quality Monitoring, 2017", pdfUrl: "#" }
    ];

    // Reports documents
    const reportsDocs = [
        { id: 'rp3', title: "JALTARANG-2014\"-Informative trial to Wetlands of Navi Mumbai, prepared by TERI (WZ), Navi Mumbai", pdfUrl: "#" }
    ];

    // Water Quality Status - GEMS MINARS Project years
    const gemsMinarsYears = ["2002-2003", "2003-2004", "2004-2005", "2005-2006", "2006-2007"];

    // Water Quality Status - Ganesh Festival years
    const ganeshFestivalYears = ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"];

    // Dropdown states
    const [gemsMinarsOpen, setGemsMinarsOpen] = useState(false);
    const [ganeshFestivalOpen, setGaneshFestivalOpen] = useState(false);

    // River Action Plans documents
    const riverActionPlansDocs = [
        { id: 'rap1', title: "Report on Status of Pollution of Panchganga River and its tributries 2009 prepared by committee under Chairmanship of SDM ichallkaranji.", pdfUrl: "#" },
        { id: 'rap2', title: "Letter issued By Sub Division Engineer, Panchganga Irrigation Department", pdfUrl: "#" },
        { id: 'rap3', title: "Note on Panchganga River", pdfUrl: "#" },
        { id: 'rap4', title: "Letter to Commissioner of Sugar", pdfUrl: "#" },
        { id: 'rap5', title: "Letter to Secretary Environment Department, GoM dtd. 07/02/2011", pdfUrl: "#" },
        { id: 'rap6', title: "Notice u/s 133 (1)(k) (CRPC)", pdfUrl: "#" },
        { id: 'rap8', title: "Minutes of the meeting of pollution of Panchganga River held on 15th June 2011 Bhima River Polluton Control Action Plan.", pdfUrl: "#" },
        { id: 'rap9', title: "Bhima River Polluton Control Action Plan", pdfUrl: "#" }
    ];

    // Water Quality Review Committee documents
    // Water Quality Review Committee documents
    const wqrcDocs = [
        { id: 'wqrc1', title: "Water Quality Review Committee- Maharashtra State", pdfUrl: "#" },
        { id: 'wqrc2', title: "Minutes of 8th meeting of Water quality Review Committee held on 15/04/2011 at Mantralaya", pdfUrl: "#" },
        { id: 'wqrc3', title: "Status Report On Water Quality of Water Bodies and Ground Water in Maharashtra for the year 2004-2005", pdfUrl: "#" },
        { id: 'wqrc4', title: "Reconstitution of Water Quality Review Committee (WQRC)", pdfUrl: "#" },
        { id: 'wqrc5', title: "Minutes of the 6th Meeting of the Water Quality Review Committee", pdfUrl: "#" },
        { id: 'wqrc6', title: "Minutes of the 7th Meeting of the Water Quality Review Committee", pdfUrl: "#" },
        { id: 'wqrc7', title: "Record of discussions of the meeting of the Sub- group of Water Quality Review Committee (WQRC) held on 23.03.2010 at MPC Board, Sion Mumbai", pdfUrl: "#" },
        { id: 'wqrc8', title: "Record of discussions of the meeting of the Sub- group of Water Quality Review Committee (WQRC) held on 15.01.2011 at MPC Board, Sion Mumbai", pdfUrl: "#" },
        { id: 'wqrc9', title: "Record of discussions of the meeting of the Sub-group of Water Quality Review Committee (WQRC) held on 31/10/2013 at M.P.c.Board, Sion Mumbai.", pdfUrl: "#" }
    ];

    // CPCB Guidelines documents
    const cpcbGuidelinesDocs = [
        { id: 'cpcb1', title: "Guidelines for Environmental Management of Dairy Farms and Gaushalas", pdfUrl: "#" },
        { id: 'cpcb2', title: "Mechanism/Guidelines for Control of Pollution and Enforcement of Environment Norms Area/Cluster of Restaurants/Hotels/Motels/Banquetsat", pdfUrl: "#" }
    ];

    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            {/* Top Banner Section - RTI Style (Reused) */}
            <PageBanner title="Environmental Quality" />

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Left Sidebar - Dropdown/Accordion Style */}
                        <Sidebar activeItem="Water Quality" />

                        {/* Right Content Area */}
                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="rounded-[20px] md:rounded-[24px] p-5 md:p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                <h2 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-6 uppercase border-b border-gray-200 pb-4">
                                    WATER QUALITY MONITORING NETWORK IN MAHARASHTRA
                                </h2>

                                <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    {/* Map Image Placeholder */}
                                    <div className="w-full bg-blue-50 rounded-xl overflow-hidden border border-blue-100 flex items-center justify-center min-h-[250px] md:min-h-[400px]">
                                        <div className="text-center p-8">
                                            <img src={waterquality} alt="Maharashtra Water Quality Network" />
                                        </div>
                                    </div>

                                    {/* Monitoring Network Section */}
                                    <PaginatedSection title="Monitoring Network" documents={monitoringNetworkDocs}>
                                        <div className="flex flex-col gap-3">
                                            {monitoringNetworkLinks.map((link, idx) => (
                                                <div
                                                    key={idx}
                                                    onClick={() => window.open(link.url, '_blank')}
                                                    className="text-[#0085E2] hover:underline cursor-pointer text-[15px] font-medium w-fit"
                                                >
                                                    {link.title}
                                                </div>
                                            ))}
                                        </div>
                                    </PaginatedSection>

                                    {/* Standards & Protocols Section */}
                                    <PaginatedSection title="Standards & Protocols" documents={standardsProtocolsDocs}>
                                        <div className="flex flex-col gap-3">
                                            <div
                                                onClick={() => navigate({ to: '/environmental-quality/water-quality/quality-standards' })}
                                                className="text-[#0085E2] hover:underline cursor-pointer text-[15px] font-medium w-fit"
                                            >
                                                Water Quality standards for best designated usages
                                            </div>
                                        </div>
                                    </PaginatedSection>

                                    {/* Reports Section */}
                                    <PaginatedSection title="Reports" documents={reportsDocs}>
                                        <div className="flex flex-col gap-3">
                                            <div
                                                onClick={() => navigate({ to: '/environmental-quality/water-quality/vnit-nagpur' })}
                                                className="text-[#0085E2] hover:underline cursor-pointer text-[15px] font-medium w-fit"
                                            >
                                                Training program on QA/QC in Water Quality Monitoring and Analysis conducted by VNIT, Nagpur on 21st & 22nd October, 2010
                                            </div>
                                            <div
                                                onClick={() => navigate({ to: '/environmental-quality/water-quality/emc-training' })}
                                                className="text-[#0085E2] hover:underline cursor-pointer text-[15px] font-medium w-fit"
                                            >
                                                EMC Training on Water Quality data analysis and interpretation on 25th August, 2010
                                            </div>
                                            <div
                                                onClick={() => navigate({ to: '/water-quality/nrcd-status' })}
                                                className="text-[#D97B1C] hover:underline cursor-pointer text-[15px] font-bold w-fit"
                                            >
                                                NRCD STP Projects Status - Dashboard
                                            </div>
                                        </div>
                                    </PaginatedSection>

                                    {/* Water Quality Status Section */}
                                    <div className="mt-12">
                                        <h2 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-6 uppercase border-b border-gray-200 pb-4">
                                            Water Quality Status
                                        </h2>

                                        {/* Annual Water Quality Status Under GEMS MINARS Project */}
                                        <div className="mb-6">
                                            <h4 className="text-[16px] font-bold text-gray-800 mb-4">
                                                Annual Water Quality Status Under GEMS MINARS Project
                                            </h4>
                                            <div className="border border-gray-200 rounded-xl overflow-hidden">
                                                <button
                                                    onClick={() => setGemsMinarsOpen(!gemsMinarsOpen)}
                                                    className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                                                >
                                                    <span className="text-[15px] text-gray-700 font-medium">Select Year</span>
                                                    {gemsMinarsOpen ? (
                                                        <ChevronUp className="w-5 h-5 text-gray-500" />
                                                    ) : (
                                                        <ChevronDown className="w-5 h-5 text-gray-500" />
                                                    )}
                                                </button>
                                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${gemsMinarsOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    <div className="border-t border-gray-100 bg-gray-50">
                                                        {gemsMinarsYears.map((year) => (
                                                            <div
                                                                key={year}
                                                                onClick={() => {
                                                                    if (year === "2002-2003") {
                                                                        navigate({ to: '/environmental-quality/water-quality/annual-water-quality-2002' });
                                                                    } else if (year === "2003-2004") {
                                                                        navigate({ to: '/environmental-quality/water-quality/annual-water-quality-2003' });
                                                                    } else if (year === "2004-2005") {
                                                                        navigate({ to: '/environmental-quality/water-quality/annual-water-quality-2004' });
                                                                    } else if (year === "2005-2006") {
                                                                        navigate({ to: '/environmental-quality/water-quality/annual-water-quality-2005' });
                                                                    } else if (year === "2006-2007") {
                                                                        navigate({ to: '/environmental-quality/water-quality/annual-water-quality-2006' });
                                                                    } else {
                                                                        window.open('#', '_blank');
                                                                    }
                                                                }}
                                                                className="px-5 py-3 hover:bg-blue-50 hover:text-[#0085E2] cursor-pointer transition-colors text-[14px] text-gray-600 border-b border-gray-100 last:border-b-0"
                                                            >
                                                                {year}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Water Quality Status during Ganesh Festival */}
                                        <div className="mb-6">
                                            <h4 className="text-[16px] font-bold text-gray-800 mb-4">
                                                Water Quality Status during Ganesh Festival
                                            </h4>
                                            <div className="border border-gray-200 rounded-xl overflow-hidden">
                                                <button
                                                    onClick={() => setGaneshFestivalOpen(!ganeshFestivalOpen)}
                                                    className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                                                >
                                                    <span className="text-[15px] text-gray-700 font-medium">Select Year</span>
                                                    {ganeshFestivalOpen ? (
                                                        <ChevronUp className="w-5 h-5 text-gray-500" />
                                                    ) : (
                                                        <ChevronDown className="w-5 h-5 text-gray-500" />
                                                    )}
                                                </button>
                                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${ganeshFestivalOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    <div className="border-t border-gray-100 bg-gray-50">
                                                        {ganeshFestivalYears.map((year) => (
                                                            <div
                                                                key={year}
                                                                onClick={() => window.open('#', '_blank')}
                                                                className="px-5 py-3 hover:bg-blue-50 hover:text-[#0085E2] cursor-pointer transition-colors text-[14px] text-gray-600 border-b border-gray-100 last:border-b-0"
                                                            >
                                                                {year}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Graph Representation Link */}
                                        <div
                                            className="mt-6 text-[15px] font-medium"
                                        >
                                            Graph Representation of Water Quality Monitoring Stations
                                        </div>
                                    </div>

                                    {/* River Action Plans Section */}
                                    <div className="mt-12">
                                        <h2 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-2 uppercase border-b border-gray-200 pb-4">
                                            River Action Plans
                                        </h2>
                                        <p className="text-[15px] font-bold text-gray-800 mb-4 mt-4">
                                            Panchganga River Pollution Related documents.
                                        </p>
                                    </div>
                                    <PaginatedSection title="Panchganga River & Bhima River Documents" documents={riverActionPlansDocs}>
                                        <div className="flex flex-col gap-3 mb-4">
                                            <div
                                                onClick={() => navigate({ to: '/environmental-quality/water-quality/closure' })}
                                                className="text-[#0085E2] hover:underline cursor-pointer text-[15px] font-medium w-fit"
                                            >
                                                Closure direction issued to Textile processing units located at ichalkarnji and nearby area causing pollution of Panchganga River
                                            </div>
                                        </div>
                                    </PaginatedSection>

                                    {/* Water Quality Review Committee Section */}
                                    <PaginatedSection title="Water Quality Review Committee- Maharashtra State" documents={wqrcDocs} />

                                    {/* CPCB Guidelines Section */}
                                    <PaginatedSection title="CPCB Guidelines" documents={cpcbGuidelinesDocs} />

                                    {/* Other Documents Section */}
                                    <div className="mt-12">
                                        <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3 mb-6 pb-4 border-b border-gray-100">
                                            Other Documents
                                        </h3>
                                        <div
                                            onClick={() => navigate({ to: '/environmental-quality/water-quality/list-of-industries' })}
                                            className="text-[#0085E2] hover:underline cursor-pointer text-[15px] font-medium"
                                        >
                                            List of industries to whom Central Ground Water Board (CGWB) NOC is required
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WaterQuality;
