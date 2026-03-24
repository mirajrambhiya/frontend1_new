import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DocumentCard from '../components/DocumentCard';
import { useNavigate } from '@tanstack/react-router';


const bannerImage = "/assets/standingorders.svg"; // Reusing standard banner image

const sidebarTabs = [
    "State Environment Plan and District Environment Plan",
    "River Polluted Stretches in Maharashtra",
    "Action Plan on restoration of water bodies",
    "Coastal District Action Plans",
    "Information About STP In Maharashtra"
];

const archiveSidebarTabs = [
    "Area Based Pollution related Studies",
    "Air Quality / Water Quality Studies",
    "CEPI related Monitoring",
    "Hazardous Waste Related Studies",
    "Online data tranmission Project",
    "CETP Related Studies",
    "Oil Spill Related Studies",
    "Strengthing / Review of Air /Water Monitoring Network",
    "River Related Studies"
];

// Reusable Paginated Section Component (Local definition for 2 columns)
const PaginatedSection = ({ documents }: { documents: any[] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isViewAll, setIsViewAll] = useState(false);
    const ITEMS_PER_PAGE = 6; // 2 columns * 3 rows

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



function ActionPlanReports() {
    const [isArchive, setIsArchive] = useState(false);
    const [selectedTab, setSelectedTab] = useState(sidebarTabs[0]);
    const navigate = useNavigate();

    const currentSidebarItems = isArchive ? archiveSidebarTabs : sidebarTabs;

    const handleTabClick = (tab: string) => {
        if (tab === "River Polluted Stretches in Maharashtra") {
            navigate({ to: '/actionplan-reports/river-polluted-stretches' });
        } else {
            setSelectedTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleToggle = (checked: boolean) => {
        setIsArchive(checked);
        // Reset to first tab of the new list when toggling
        if (checked) {
            setSelectedTab(archiveSidebarTabs[0]);
        } else {
            setSelectedTab(sidebarTabs[0]);
        }
    };

    const environmentPlans = [
        { id: 'ep1', title: "Environment Action Plan for Maharshtra State (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep2', title: "Distict Environment Plan Ahmednagar (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep3', title: "Distict Environment Plan Akola (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep4', title: "Distict Environment Plan Amravati (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep5', title: "Distict Environment Plan Aurangabad (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep6', title: "Distict Environment Plan Beed (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep7', title: "Distict Environment Plan Bhandara (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep8', title: "Distict Environment Plan Buldhana (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep9', title: "Distict Environment Plan Chandrapur (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep10', title: "Distict Environment Plan Dhule (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep11', title: "Distict Environment Plan Gadchiroli (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep12', title: "Distict Environment Plan Gondia (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep13', title: "Distict Environment Plan Hingoli (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep14', title: "Distict Environment Plan Jalgaon (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep15', title: "Distict Environment Plan Jalna (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep16', title: "Distict Environment Plan Kolhapur (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep17', title: "Distict Environment Plan Latur (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep18', title: "Distict Environment Plan Mumbai (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep19', title: "Distict Environment Plan Nagpur (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep20', title: "Distict Environment Plan Nanded (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep21', title: "Distict Environment Plan Nandurbar (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep22', title: "Distict Environment Plan Nashik (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep23', title: "Distict Environment Plan Osmanabad (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep24', title: "Distict Environment Plan Palghar (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep25', title: "Distict Environment Plan Parbhani (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep26', title: "Distict Environment Plan Pune (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep27', title: "Distict Environment Plan Raigad (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep28', title: "Distict Environment Plan Ratnagiri (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep29', title: "Distict Environment Plan Sangli (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep30', title: "Distict Environment Plan Satara (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep31', title: "Distict Environment Plan Sindhudurg (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep32', title: "Distict Environment Plan Solapur (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep33', title: "Distict Environment Plan Thane (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep34', title: "Distict Environment Plan Wardha (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep35', title: "Distict Environment Plan Washim (2018-2019)", date: "", pdfUrl: "#" },
        { id: 'ep36', title: "Distict Environment Plan Yavatmal (2018-2019)", date: "", pdfUrl: "#" }
    ];

    const waterBodiesPlans = [
        { id: 'wb1', title: "Final action plan restoration of water bodies Maharashtra 2020", date: "", pdfUrl: "#" }
    ];

    const coastalPlans = [
        { id: 'cp1', title: "Mumbai 2021", date: "", pdfUrl: "#" },
        { id: 'cp2', title: "Palghar 2021", date: "", pdfUrl: "#" },
        { id: 'cp3', title: "Raigad 2021", date: "", pdfUrl: "#" },
        { id: 'cp4', title: "Ratnagir 2021", date: "", pdfUrl: "#" },
        { id: 'cp5', title: "Sindhudurg 2021", date: "", pdfUrl: "#" },
        { id: 'cp6', title: "Thane 2021", date: "", pdfUrl: "#" }
    ];

    const stpPlans = [
        { id: 'stp1', title: "Information About STP In Maharashtra As On 31/08/2025", date: "", pdfUrl: "#" }
    ];

    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            {/* Top Banner Section */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[280px] rounded-t-[24px] md:rounded-t-[48px] overflow-hidden">
                        <div
                            className="absolute inset-0 z-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${bannerImage})` }}
                        />
                        <div
                            className="absolute inset-0 z-10 bg-cover bg-center blur-sm scale-105"
                            style={{
                                backgroundImage: `url(${bannerImage})`,
                                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
                                maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)'
                            }}
                        />
                        <div className="absolute inset-0 z-20 bg-linear-to-b from-[#00A3FF]/30 via-[#00A3FF]/60 to-white" />

                        <div className="relative z-50 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-30px]">
                            <h1 className="text-[32px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-tight mb-8">
                                Action Plan and Reports
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
                                {currentSidebarItems.map((tab) => {
                                    const isActive = selectedTab === tab;
                                    return (
                                        <div
                                            key={tab}
                                            onClick={() => handleTabClick(tab)}
                                            className={`flex items-center justify-between px-6 py-5 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-200
                                                ${isActive
                                                    ? 'border-2 border-[#00A3FF] bg-[#00A3FF]/5'
                                                    : 'border border-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF]'
                                                }`}
                                        >
                                            <span className={`text-[14px] font-normal transition-colors duration-200 ${isActive ? 'text-[#00A3FF] font-medium' : 'text-gray-800'}`}>
                                                {tab}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1">
                            <div className="rounded-[24px] p-4 md:p-8 min-h-[400px]">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-gray-100 pb-4">
                                    <h2 className="text-[20px] md:text-[24px] font-semibold text-gray-800 uppercase">
                                        {selectedTab}
                                    </h2>

                                    {/* Toggle Switch */}
                                    <div className="flex items-center bg-gray-100 p-1 rounded-full shrink-0 w-fit">
                                        <button
                                            onClick={() => handleToggle(false)}
                                            className={`cursor-pointer px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${!isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Current
                                        </button>
                                        <button
                                            onClick={() => handleToggle(true)}
                                            className={`cursor-pointer px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Archive
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                {selectedTab === "State Environment Plan and District Environment Plan" ? (
                                    <PaginatedSection documents={environmentPlans} />
                                ) : selectedTab === "Action Plan on restoration of water bodies" ? (
                                    <PaginatedSection documents={waterBodiesPlans} />
                                ) : selectedTab === "Coastal District Action Plans" ? (
                                    <PaginatedSection documents={coastalPlans} />
                                ) : selectedTab === "Information About STP In Maharashtra" ? (
                                    <PaginatedSection documents={stpPlans} />
                                ) : selectedTab === "Area Based Pollution related Studies" ? (
                                    <div className="border border-gray-200 rounded-[25px] overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse min-w-[800px]">
                                                <thead>
                                                    <tr className="bg-gray-50 border-b border-gray-200">
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-16">Sr No.</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-[30%]">Subject</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Agency</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Date of Work Order</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Period</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Cost</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">HOD</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {[
                                                        {
                                                            id: 1,
                                                            subject: 'Project on "Emission inventory and air quality model development for industrial city centres in Maharashtra : Framework for air quality management with resources to science based policy and action plant for Chandrapur Area',
                                                            agency: "Jointly by NEERI and IIT Mumbai",
                                                            date: "22.02.2013",
                                                            linkText: "(Click here for Work Order)",
                                                            linkUrl: "#",
                                                            period: "2 Years",
                                                            cost: "Rs 32 Lacs",
                                                            hod: "AS(T)"
                                                        },
                                                        {
                                                            id: 2,
                                                            subject: "Development of Tool for Remote and on the ground Environment Status for Wani Industrial Region (ESFWIR) Dist Yavatmal",
                                                            agency: "Jointly by NEERI and IIT Mumbai",
                                                            date: "01.12.2012",
                                                            linkText: "(Click here for Work Order)",
                                                            linkUrl: "#",
                                                            period: "9 months extendable 3 months",
                                                            cost: "Rs.36 Lacs",
                                                            hod: "JD(APC)"
                                                        }
                                                    ].map((row, idx) => (
                                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top font-medium">{row.id}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top leading-relaxed">{row.subject}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.agency}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">
                                                                <div className="flex flex-col gap-1">
                                                                    <span>{row.date}</span>
                                                                    <a href={row.linkUrl} className="text-[#0085E2] hover:underline font-medium text-[13px]">{row.linkText}</a>
                                                                </div>
                                                            </td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.period}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.cost}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top font-semibold text-gray-800">{row.hod}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : selectedTab === "Air Quality / Water Quality Studies" ? (
                                    <div className="border border-gray-200 rounded-[25px] overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse min-w-[800px]">
                                                <thead>
                                                    <tr className="bg-gray-50 border-b border-gray-200">
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-16">Sr No.</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-[30%]">Subject</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Agency</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Date of Work Order</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Period</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Cost</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">HOD</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {[
                                                        { id: 1, subject: 'Financial Assistance for the research project Air (2008 to 2011) and Water (2010-2011) Quality Status to Maharashtra with recourse to Analytical/Statistical Analysis".', agency: "NEERI", date: "24.01.2012", linkText: "(Click here for Work Order)", linkUrl: "#", period: "6+ 1 month", cost: "Rs.15 Lacs", hod: "AST" },
                                                        { id: 2, subject: "Review of Water Quality Report for MPCB for the period 2011-12", agency: "TERI", date: "25.09.2013", linkText: "(Click here for Work Order)", linkUrl: "#", period: "2 months", cost: "Rs. 0.75 Lacs", hod: "JD(APC)" },
                                                        { id: 3, subject: "Preparation of Water Quality Report for MPCB for the period 2012-13", agency: "TERI", date: "12.05.2014", linkText: "(Click here for Work Order)", linkUrl: "#", period: "2 weeks", cost: "Rs. 6.25 Lacs", hod: "JD(WPC)" },
                                                        { id: 4, subject: "Preparation of Water Quality Report for MPCB for the period 2013-14", agency: "TERI", date: "16.05.2014", linkText: "(Click here for Work Order)", linkUrl: "#", period: "2 weeks", cost: "Rs. 6.25 Lacs", hod: "JD(WPC)" },
                                                        { id: 5, subject: "Preparation of Air Quality Report for MPCB for the period 2011-12", agency: "TERI", date: "16.05.2014", linkText: "(Click here for Work Order)", linkUrl: "#", period: "2 weeks", cost: "Rs. 1.50 Lacs", hod: "JD(WPC)" },
                                                        { id: 6, subject: "Preparation of Air Qualitry Report for the period 2012-13", agency: "TERI", date: "29.01.2014", linkText: "(Click here for Work Order)", linkUrl: "#", period: "6 weeks", cost: "Rs. 2.25 Lacs", hod: "JD(APC)" },
                                                        { id: 7, subject: "Preparation of Air Qualitry Report for the period 2013-14", agency: "TERI", date: "08.05.2014", linkText: "(Click here for Work Order)", linkUrl: "#", period: "10 Days", cost: "Rs. 2.25 Lacs", hod: "JD(APC)" },
                                                        { id: 8, subject: "Water Quality Data Analysis of River Godavari", agency: "Environmental Management Centre LLP", date: "30.05.2014", linkText: "(Click here for Work Order)", linkUrl: "#", period: "6 weeks + 2 weeks", cost: "Rs.9.50 Lacs", hod: "JD(APC)" }
                                                    ].map((row, idx) => (
                                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top font-medium">{row.id}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top leading-relaxed">{row.subject}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.agency}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">
                                                                <div className="flex flex-col gap-1">
                                                                    <span>{row.date}</span>
                                                                    <a href={row.linkUrl} className="text-[#0085E2] hover:underline font-medium text-[13px]">{row.linkText}</a>
                                                                </div>
                                                            </td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.period}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.cost}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top font-semibold text-gray-800">{row.hod}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : selectedTab === "CEPI related Monitoring" ? (
                                    <div className="border border-gray-200 rounded-[25px] overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse min-w-[800px]">
                                                <thead>
                                                    <tr className="bg-gray-50 border-b border-gray-200">
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-16">Sr No.</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-[30%]">Subject</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Agency</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Date of Work Order</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Period</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Cost</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">HOD</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {[
                                                        {
                                                            id: 1,
                                                            subject: "Project on Monitoring, Sampling, Analysis for Stack, Ambient Air Quality, Surface Water Waste Water and Ground Water Quality in Critically polluted area in Maharashtra ie Chandrapur,Dombivli, Aurangabad, Navi Mumbai, Tarapur.",
                                                            agency: "Ashwamedh Engineers & Consultants, Nashik",
                                                            date: "26.02.2013",
                                                            linkText: "(Click here for Work Order)",
                                                            linkUrl: "#",
                                                            period: "10 Days",
                                                            cost: "Sample Basis",
                                                            hod: "JD(APC)"
                                                        },
                                                        {
                                                            id: 2,
                                                            subject: "Project on Monitoring, Sampling, Analysis for Stack, Ambient Air Quality, Surface Water Waste Water and Ground Water Quality in Critically polluted area in Maharashtra ie Chandrapur & Dombivli",
                                                            agency: "Ashwamedh Engineers & Consultants, Nashik",
                                                            date: "01.11.2013",
                                                            linkText: "(Click here for Work Order)",
                                                            linkUrl: "#",
                                                            period: "1 month",
                                                            cost: "Sample Basis",
                                                            hod: "JD(APC)"
                                                        }
                                                    ].map((row, idx) => (
                                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top font-medium">{row.id}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top leading-relaxed">{row.subject}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.agency}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">
                                                                <div className="flex flex-col gap-1">
                                                                    <span>{row.date}</span>
                                                                    <a href={row.linkUrl} className="text-[#0085E2] hover:underline font-medium text-[13px]">{row.linkText}</a>
                                                                </div>
                                                            </td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.period}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.cost}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top font-semibold text-gray-800">{row.hod}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : selectedTab === "Hazardous Waste Related Studies" ? (
                                    <div className="border border-gray-200 rounded-[25px] overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse min-w-[800px]">
                                                <thead>
                                                    <tr className="bg-gray-50 border-b border-gray-200">
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-16">Sr No.</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-[30%]">Subject</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Agency</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Date of Work Order</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Period</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Cost</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">HOD</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {[
                                                        { id: 1, subject: "Performance Audit of CHWTSDF facility M/s. Maharashtra Enviro Power Ltd, Shirur, Pune", agency: "NEERI", date: "06.05.2014", linkText: "(Click here for Work Order)", linkUrl: "#", period: "3 months", cost: "Rs. 8.5 Lacs", hod: "RO(HQ)" },
                                                        { id: 2, subject: "Performance Audit of CHWTSDF facility M/s. Mumbai Waste Management Ltd, Panvel Raigad", agency: "NEERI", date: "06.05.2013", linkText: "(Click here for Work Order)", linkUrl: "#", period: "3 months", cost: "Rs. 11.5 Lacs", hod: "RO(HQ)" },
                                                        { id: 3, subject: "Performance Audit of CHWTSDF facility M/s. Trans Thane Waste Management Association Navi Mumbai", agency: "NEERI", date: "11.03.2014", linkText: "(Click here for Work Order)", linkUrl: "#", period: "2 months", cost: "Rs. 4 Lacs", hod: "RO(HQ)" },
                                                        { id: 4, subject: "Technical evaluation for Acid recovery Plant(ARP) MIDC Butibori, Nagpur", agency: "NEERI", date: "08.07.2014", linkText: "(Click here for Work Order)", linkUrl: "#", period: "6 months", cost: "Rs.17 Lakhs", hod: "JD Air" }
                                                    ].map((row, idx) => (
                                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top font-medium">{row.id}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top leading-relaxed">{row.subject}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.agency}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">
                                                                <div className="flex flex-col gap-1">
                                                                    <span>{row.date}</span>
                                                                    <a href={row.linkUrl} className="text-[#0085E2] hover:underline font-medium text-[13px]">{row.linkText}</a>
                                                                </div>
                                                            </td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.period}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.cost}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top font-semibold text-gray-800">{row.hod}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : selectedTab === "Online data tranmission Project" ? (
                                    <div className="border border-gray-200 rounded-[25px] overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse min-w-[800px]">
                                                <thead>
                                                    <tr className="bg-gray-50 border-b border-gray-200">
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-16">Sr No.</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-[30%]">Subject</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Agency</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Date of Work Order</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Period</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Cost</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">HOD</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {[
                                                        {
                                                            id: 1,
                                                            subject: "Trial demonstration of Real Time Water Quality Monitoring System (RTWQMT) at Thane Belapur Association ,TTC CETP Navi Mumbai for inlet and outlet effluent",
                                                            agency: "M/s.Aaxis Nano Technologies Pvt. Ltd",
                                                            date: "18/09/2014",
                                                            linkText: "(Click here for Work Order)",
                                                            linkUrl: "#",
                                                            period: "30 days",
                                                            cost: "-",
                                                            hod: "JD(WPC)"
                                                        },
                                                        {
                                                            id: 2,
                                                            subject: "Plant Connectivity for online data transmission from Stack/AAQMS at Chandrapur",
                                                            agency: "Ascent Informatics (India) Pvt. Ltd., Kothrud, Pune",
                                                            date: "01.02.2014",
                                                            linkText: "(Click here for Work Order)",
                                                            linkUrl: "#",
                                                            period: "2 months",
                                                            cost: "Rs. 9 Lacs",
                                                            hod: "JD(APC)"
                                                        }
                                                    ].map((row, idx) => (
                                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top font-medium">{row.id}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top leading-relaxed">{row.subject}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.agency}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">
                                                                <div className="flex flex-col gap-1">
                                                                    <span>{row.date}</span>
                                                                    <a href={row.linkUrl} className="text-[#0085E2] hover:underline font-medium text-[13px]">{row.linkText}</a>
                                                                </div>
                                                            </td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.period}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.cost}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top font-semibold text-gray-800">{row.hod}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : selectedTab === "CETP Related Studies" ? (
                                    <div className="border border-gray-200 rounded-[25px] overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse min-w-[800px]">
                                                <thead>
                                                    <tr className="bg-gray-50 border-b border-gray-200">
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-16">Sr No.</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-[30%]">Subject</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Agency</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Date of Work Order</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Period</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Cost</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">HOD</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {[
                                                        { id: 1, subject: "Preparation of Inventory of M/s. Tarapur Environment Protection Society CETP, MIDC Tarapur", agency: "NEERI", date: "15.07.2014", linkText: "(Click here for Work Order)", linkUrl: "#", period: "2 Weeks", cost: "Rs. 75,000/-", hod: "JD(WPC)" },
                                                        { id: 2, subject: "Preparation of Inventory of M/s. Thane- Belapur Association, CETP", agency: "NEERI", date: "15.07.2014", linkText: "(Click here for Work Order)", linkUrl: "#", period: "2 Weeks", cost: "Rs. 75,000/-", hod: "JD(WPC)" },
                                                        { id: 3, subject: "Preparation of Inventory of M/s.Ambernath MIDC CETP", agency: "IIT, Bombay", date: "15.07.2014", linkText: "(Click here for Work Order)", linkUrl: "#", period: "2 Weeks", cost: "Rs. 75,000/-", hod: "JD(WPC)" },
                                                        { id: 4, subject: "Preparation of Inventory of M/s. Dombivli Better Environment System Association (DBESA)", agency: "IIT, Bombay", date: "15.07.2014", linkText: "(Click here for Work Order)", linkUrl: "#", period: "2 Weeks", cost: "Rs. 75,000/-", hod: "JD(WPC)" },
                                                        { id: 5, subject: "Preparation of Inventory of M/s.Taloja CETP", agency: "SES Yadavrao Tasgaonkar college of Engg. & Management, Raigad", date: "15.07.2014", linkText: "(Click here for Work Order)", linkUrl: "#", period: "2 Weeks", cost: "Rs. 75,000/-", hod: "JD(WPC)" },
                                                        { id: 6, subject: "Preparation of Inventory of M/s. Kagal Hatkanangale CETP", agency: "Shivaji University, Kolhapur", date: "15.07.2014", linkText: "(Click here for Work Order)", linkUrl: "#", period: "2 Weeks", cost: "Rs. 75,000/-", hod: "JD(WPC)" },
                                                        { id: 7, subject: "Prepartion of Inventory of M/s. Ichalkaranji Textile Development Cluster Ltd.(12 MLD)", agency: "Shivaji University, Kolhapur", date: "15.07.2014", linkText: "(Click here for Work Order)", linkUrl: "#", period: "2 Weeks", cost: "Rs. 75,000/-", hod: "JD(WPC)" },
                                                        { id: 8, subject: "Preparation of Inventory of M/s.Kurkumbh Environment Protection Co-op soc. Ltd", agency: "College of Engineering, Pune", date: "15.07.2014", linkText: "(Click here for Work Order)", linkUrl: "#", period: "2 Weeks", cost: "Rs. 75,000/-", hod: "JD(WPC)" },
                                                        { id: 9, subject: "Preparation of Inventory of M/s. butibori CETP", agency: "Visvesvaraya National Institute of Technology, Nagpur", date: "15.07.2014", linkText: "(Click here for Work Order)", linkUrl: "#", period: "2 Weeks", cost: "Rs. 75,000/-", hod: "JD(WPC)" },
                                                        { id: 10, subject: "Preparation of Inventory of M/s.SMS Waluj CETP", agency: "Dr.Babasaheb Ambedkar University, Aurangabad", date: "15.07.2014", linkText: "(Click here for Work Order)", linkUrl: "#", period: "2 Weeks", cost: "Rs. 75,000/-", hod: "JD(WPC)" }
                                                    ].map((row, idx) => (
                                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top font-medium">{row.id}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top leading-relaxed">{row.subject}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.agency}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">
                                                                <div className="flex flex-col gap-1">
                                                                    <span>{row.date}</span>
                                                                    <a href={row.linkUrl} className="text-[#0085E2] hover:underline font-medium text-[13px]">{row.linkText}</a>
                                                                </div>
                                                            </td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.period}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.cost}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top font-semibold text-gray-800">{row.hod}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : selectedTab === "Oil Spill Related Studies" ? (
                                    <div className="border border-gray-200 rounded-[25px] overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse min-w-[800px]">
                                                <thead>
                                                    <tr className="bg-gray-50 border-b border-gray-200">
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-16">Sr No.</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-[30%]">Subject</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Agency</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Date of Work Order</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Period</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Cost</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">HOD</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {[
                                                        {
                                                            id: 1,
                                                            subject: "Environmental Impact Assessment (EIA) study on pollution / damage due to Oil Spill",
                                                            agency: "NEERI",
                                                            date: "12.08.2011",
                                                            linkText: "(Click here for Work Order)",
                                                            linkUrl: "#",
                                                            period: "30 Days",
                                                            cost: ("-"),
                                                            hod: "ROHQ"
                                                        },
                                                        {
                                                            id: 2,
                                                            subject: "Amendment in Work Order for Project ofEnvironmental Impact Assessment (EIA) study on pollution / damage due to Oil Spill",
                                                            agency: "NEERI",
                                                            date: "28.02.2012",
                                                            linkText: "(Click here for Work Order)",
                                                            linkUrl: "#",
                                                            period: "3 Months",
                                                            cost: "Rs.37.5 Lacs",
                                                            hod: "ROHQ"
                                                        }
                                                    ].map((row, idx) => (
                                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top font-medium">{row.id}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top leading-relaxed">{row.subject}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.agency}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">
                                                                <div className="flex flex-col gap-1">
                                                                    <span>{row.date}</span>
                                                                    <a href={row.linkUrl} className="text-[#0085E2] hover:underline font-medium text-[13px]">{row.linkText}</a>
                                                                </div>
                                                            </td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.period}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.cost}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top font-semibold text-gray-800">{row.hod}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : selectedTab === "Strengthing / Review of Air /Water Monitoring Network" ? (
                                    <div className="border border-gray-200 rounded-[25px] overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse min-w-[800px]">
                                                <thead>
                                                    <tr className="bg-gray-50 border-b border-gray-200">
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-16">Sr No.</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-[30%]">Subject</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Agency</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Date of Work Order</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Period</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Cost</th>
                                                        <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">HOD</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {[
                                                        {
                                                            id: 1,
                                                            subject: "Strategic Paper on Water Quality Monitoring Network for MPCB",
                                                            agency: "Environmetal Management Center LLP",
                                                            date: ".2014",
                                                            linkText: "(Click here for Work Order)",
                                                            linkUrl: "#",
                                                            period: "6 Weeks",
                                                            cost: "4.50 lacs",
                                                            hod: "JD Water"
                                                        }
                                                    ].map((row, idx) => (
                                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top font-medium">{row.id}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top leading-relaxed">{row.subject}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.agency}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">
                                                                <div className="flex flex-col gap-1">
                                                                    <span>{row.date}</span>
                                                                    <a href={row.linkUrl} className="text-[#0085E2] hover:underline font-medium text-[13px]">{row.linkText}</a>
                                                                </div>
                                                            </td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.period}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.cost}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top font-semibold text-gray-800">{row.hod}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : selectedTab === "River Related Studies" ? (
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-[#0085E2]">TABLE 1</h3>
                                        <div className="border border-gray-200 rounded-[25px] overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
                                            <div className="overflow-x-auto">
                                                <table className="w-full border-collapse min-w-[800px]">
                                                    <thead>
                                                        <tr className="bg-gray-50 border-b border-gray-200">
                                                            <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-16">Sr No.</th>
                                                            <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-[30%]">Subject</th>
                                                            <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Agency</th>
                                                            <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Date of Work Order</th>
                                                            <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Period</th>
                                                            <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Cost</th>
                                                            <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">HOD</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-100">
                                                        {[
                                                            {
                                                                id: 1,
                                                                subject: "Preparation and Generation of Maharashtra Taluka wise River map for rivers notified in RRZ Policy GoM 2009, and performance the necessary tasks",
                                                                agency: "Bhugol GIS Pvt Ltd, Powai Mumbai",
                                                                date: "12.03.2014",
                                                                linkText: "(Click here for Work Order)",
                                                                linkUrl: "#",
                                                                period: "20 Days",
                                                                cost: "Rs. 8 Lacs",
                                                                hod: "AS(T)"
                                                            },
                                                            {
                                                                id: 2,
                                                                subject: "Analysis of Water samples of Mithi River",
                                                                agency: "Goldfinch Engineering Systsm (P) Ltd, Thane",
                                                                date: "29.04.2014",
                                                                linkText: "(Click here for Work Order)",
                                                                linkUrl: "#",
                                                                period: "-",
                                                                cost: "Sample Basis",
                                                                hod: "Ro Mumbai"
                                                            }
                                                        ].map((row, idx) => (
                                                            <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                                <td className="py-4 px-6 text-[14px] text-gray-700 align-top font-medium">{row.id}</td>
                                                                <td className="py-4 px-6 text-[14px] text-gray-700 align-top leading-relaxed">{row.subject}</td>
                                                                <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.agency}</td>
                                                                <td className="py-4 px-6 text-[14px] text-gray-700 align-top">
                                                                    <div className="flex flex-col gap-1">
                                                                        <span>{row.date}</span>
                                                                        <a href={row.linkUrl} className="text-[#0085E2] hover:underline font-medium text-[13px]">{row.linkText}</a>
                                                                    </div>
                                                                </td>
                                                                <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.period}</td>
                                                                <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.cost}</td>
                                                                <td className="py-4 px-6 text-[14px] text-gray-700 align-top font-semibold text-gray-800">{row.hod}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-[#0085E2] pt-8">TABLE-2</h3>
                                        <div className="border border-gray-200 rounded-[25px] overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
                                            <div className="overflow-x-auto">
                                                <table className="w-full border-collapse min-w-[800px]">
                                                    <thead>
                                                        <tr className="bg-gray-50 border-b border-gray-200">
                                                            <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-16">Sr No.</th>
                                                            <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">CPCB Letter</th>
                                                            <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800 w-[30%]">Name of Streach</th>
                                                            <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Region</th>
                                                            <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Date of W.O. issued</th>
                                                            <th className="py-5 px-6 text-left text-[14px] font-bold text-gray-800">Name of Agency</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-100">
                                                        {[
                                                            {
                                                                id: 1,
                                                                cpcbLetter: "18/04/2012",
                                                                stretch: "Bhima-Vithalwadi to Takali (including tirbutaries of Bhima-Mula and Mutha - D/s Pune city, Pawana-Pune- Sangvi Gaon, Indrayani-Aandi to Confluence with Bhima)",
                                                                region: "Pune",
                                                                workOrders: [
                                                                    { date: "28/02/2014", text: "(Click here to view Work Order 1 cancelled)", url: "#" },
                                                                    { date: "18/04/2015", text: "(Click here to view Work Order 2)", url: "#" }
                                                                ],
                                                                agency: ["Kicons Ltd, Pune", "Klean Environmental consultaints LTD, Pune."]
                                                            },
                                                            {
                                                                id: 2,
                                                                cpcbLetter: "18/04/2012",
                                                                stretch: "Koyna at Karad",
                                                                region: "Pune",
                                                                workOrders: [{ date: "19/05/2014", text: "Click here to view Work Order)", url: "#" }],
                                                                agency: ["Mitra, Kolhapur"]
                                                            },
                                                            {
                                                                id: 3,
                                                                cpcbLetter: "25/06/2014",
                                                                stretch: "River Krishna- from Dhom dam to Rethare weir, Satara",
                                                                region: "Kolhapur",
                                                                workOrders: [{ date: "19/05/2014", text: "(Click here to view Work Order)", url: "#" }],
                                                                agency: ["Mitra, Kolhapur"]
                                                            },
                                                            {
                                                                id: 4,
                                                                cpcbLetter: "25/06/2014",
                                                                stretch: "River Krishna- Rethare weir to Rajapur Bandhara, Shirol, Sangli",
                                                                region: "Kolhapur",
                                                                workOrders: [{ date: "19/05/2014", text: "(Click here to view Work Order)", url: "#" }],
                                                                agency: ["Mitra, Kolhapur"]
                                                            },
                                                            {
                                                                id: 5,
                                                                cpcbLetter: "18/04/2012",
                                                                stretch: "Godavari- Nashik D/s to Paithan",
                                                                region: "Aurangabad",
                                                                workOrders: [{ date: "13/03/2014", text: "(Click here to view Work Order)", url: "#" }],
                                                                agency: ["Kicons Ltd, Pune"]
                                                            },
                                                            {
                                                                id: 6,
                                                                cpcbLetter: "25/06/2013",
                                                                stretch: "River Tapi- MP Boarder to Bhusawal",
                                                                region: "Nashik",
                                                                workOrders: [{ date: "31/10/2013", text: "(Click here to view Work Order)", url: "#" }],
                                                                agency: ["Mr. Ujwal G Patil, Dhule"]
                                                            },
                                                            {
                                                                id: 7,
                                                                cpcbLetter: "25/06/2013",
                                                                stretch: "River Girna - from Malegaon to Jalgaon",
                                                                region: "Nashik",
                                                                workOrders: [{ date: "31/10/2013", text: "(click here to view Work Order)", url: "#" }],
                                                                agency: ["Mr. Ujwal G Patil, Dhule"]
                                                            },
                                                            {
                                                                id: 8,
                                                                cpcbLetter: "18/04/2012",
                                                                stretch: "Mithi at Mumbai",
                                                                region: "Mumbai",
                                                                workOrders: [{ date: "24/03/2014", text: "(Click here to view Work Order)", url: "#" }],
                                                                agency: ["Techgreen Environmental Solutions, Pune"]
                                                            },
                                                            {
                                                                id: 9,
                                                                cpcbLetter: "18/04/2012",
                                                                stretch: "Kundalika - Are Khurd",
                                                                region: "Raigad",
                                                                workOrders: [{ date: "19/06/2014", text: "(Click here to view Work Order)", url: "#" }],
                                                                agency: ["M/s.Sky Lab Analytical Laboratory"]
                                                            },
                                                            {
                                                                id: 10,
                                                                cpcbLetter: "25/06/2013",
                                                                stretch: "River Ulhas- D/s of Mohane Village",
                                                                region: "Kalyan",
                                                                workOrders: [{ date: "10/12/2013", text: "(Click here to view Work Order)", url: "#" }],
                                                                agency: ["Sadekar Enviro Engineers Pvt. Ltd, Thane"]
                                                            }
                                                        ].map((row, idx) => (
                                                            <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                                <td className="py-4 px-6 text-[14px] text-gray-700 align-top font-medium">{row.id}</td>
                                                                <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.cpcbLetter}</td>
                                                                <td className="py-4 px-6 text-[14px] text-gray-700 align-top leading-relaxed">{row.stretch}</td>
                                                                <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.region}</td>
                                                                <td className="py-4 px-6 text-[14px] text-gray-700 align-top">
                                                                    <div className="flex flex-col gap-4">
                                                                        {row.workOrders.map((wo, i) => (
                                                                            <div key={i} className="flex flex-col gap-1">
                                                                                <span>{wo.date}</span>
                                                                                <a href={wo.url} className="text-[#0085E2] hover:underline font-medium text-[13px]">{wo.text}</a>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </td>
                                                                <td className="py-4 px-6 text-[14px] text-gray-700 align-top">
                                                                    <div className="flex flex-col gap-2">
                                                                        {row.agency.map((a, i) => (
                                                                            <div key={i}>{a}</div>
                                                                        ))}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-[14px] text-gray-700 leading-relaxed">
                                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 flex flex-col items-center justify-center min-h-[200px] text-center">
                                            <p className="text-gray-500 italic">Content for "{selectedTab}" is currently unavailable.</p>
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

export default ActionPlanReports;
