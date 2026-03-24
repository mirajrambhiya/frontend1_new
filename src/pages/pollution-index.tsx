import { useState } from 'react';
import { ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';
import DocumentCard from '../components/DocumentCard';
import { useNavigate } from '@tanstack/react-router';

const standingorders = "/assets/standingorders.svg";

// Reusable Paginated Section Component (Local definition)
// Reusable Paginated Section Component (Local definition)
const PaginatedSection = ({ documents, itemsPerPage = 10, gridClassName = "grid-cols-1 md:grid-cols-2" }: { documents: any[], itemsPerPage?: number, gridClassName?: string }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isViewAll, setIsViewAll] = useState(false);
    const ITEMS_PER_PAGE = itemsPerPage;

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

            <div className={`grid ${gridClassName} gap-6 mb-8`}>
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

function PollutionIndex() {
    const sidebarTabs = [
        "CEPI REPORTS PRE MONSOON (April To June 2025)",
        "CEPI Post Monsoon December 2024 to February 2025 reports",
        "CEPI post monsoon April to June 2024 reports",
        "CEPI post monsoon December 2023 to Feb 2024 monitoring reports",
        "CEPI AREA PRE MONSOON MONITORING REPORT 2023",
        "Details of Industrial Cluster 2023",
        "ACTION PLAN FOR INDUSTRIAL CLUSTER IN CRITICALLY POLLUTED AREA MONITORING REPORT 2022",
        "ACTION PLAN FOR INDUSTRIAL CLUSTER IN CRITICALLY POLLUTED AREA MONITORING REPORT 2020",
        "ACTION PLAN FOR INDUSTRIAL CLUSTER IN CRITICALLY POLLUTED AREA MONITORING REPORT 2019",
        "Action Plan For Industrial Cluster 2019",
        "Action Plan report of Severly Polluted Area 2019"
    ];

    const [selectedTab, setSelectedTab] = useState(sidebarTabs[0]);
    const [expandedTab, setExpandedTab] = useState<string | null>(null);
    const [actionPlan2022Filter, setActionPlan2022Filter] = useState("Any");
    const [actionPlan2020Filter, setActionPlan2020Filter] = useState("Any");
    const [actionPlan2019Filter, setActionPlan2019Filter] = useState("Any");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2020, setIsDropdownOpen2020] = useState(false);
    const [isDropdownOpen2019, setIsDropdownOpen2019] = useState(false);
    const [actionPlan2018Filter, setActionPlan2018Filter] = useState("Any");
    const [isDropdownOpen2018, setIsDropdownOpen2018] = useState(false);
    const [actionPlan2017Filter, setActionPlan2017Filter] = useState("Any");
    const [isDropdownOpen2017, setIsDropdownOpen2017] = useState(false);
    const [isArchive, setIsArchive] = useState(false);
    const navigate = useNavigate();

    const handleTabClick = (tab: string | any, isDropdown = false) => {
        const tabName = typeof tab === 'string' ? tab : tab.title;

        if (tabName === "Details of Industrial Cluster 2023" || tabName === "Action Plan For Industrial Cluster 2019") {
            navigate({ to: '/cepi/industrial-cluster' });
            return;
        }

        if (isDropdown) {
            setExpandedTab(expandedTab === tabName ? null : tabName);
        } else {
            setSelectedTab(tabName);
            setExpandedTab(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleArchiveToggle = (showArchive: boolean) => {
        setIsArchive(showArchive);
        if (showArchive) {
            setSelectedTab(archiveData[0].title);
        } else {
            setSelectedTab(sidebarTabs[0]);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Data for CEPI REPORTS PRE MONSOON (April To June 2025)
    const cepiPreMonsoon2025Data = [
        { id: 'cepi1', title: "Chandrapur", pdfUrl: "#" },
        { id: 'cepi2', title: "Dombivali", pdfUrl: "#" },
        { id: 'cepi3', title: "Chhatrapati Sambhaji Nagar", pdfUrl: "#" },
        { id: 'cepi4', title: "Navi Mumbai", pdfUrl: "#" },
        { id: 'cepi5', title: "Tarapur", pdfUrl: "#" },
        { id: 'cepi6', title: "Chembur", pdfUrl: "#" },
        { id: 'cepi7', title: "Nashik", pdfUrl: "#" },
        { id: 'cepi8', title: "Pimpri Chinchwad", pdfUrl: "#" },
        { id: 'cepi9', title: "Mahad", pdfUrl: "#" }
    ];

    // Data for CEPI Post Monsoon December 2024 to February 2025 reports
    const cepiPostMonsoon202425Data = [
        { id: 'cepi_pm1', title: "Chandrapur", pdfUrl: "#" },
        { id: 'cepi_pm2', title: "Tarapur", pdfUrl: "#" },
        { id: 'cepi_pm3', title: "Aurangabad", pdfUrl: "#" },
        { id: 'cepi_pm4', title: "Dombivali", pdfUrl: "#" },
        { id: 'cepi_pm5', title: "Navi Mumbai", pdfUrl: "#" },
        { id: 'cepi_pm6', title: "Mahad", pdfUrl: "#" },
        { id: 'cepi_pm7', title: "Nashik", pdfUrl: "#" },
        { id: 'cepi_pm8', title: "Pimpri-Chinchwad", pdfUrl: "#" },
        { id: 'cepi_pm9', title: "Chembur", pdfUrl: "#" }
    ];

    // Data for CEPI post monsoon April to June 2024 reports
    const cepiPostMonsoon2024Data = [
        { id: 'cepi_pm_24_1', title: "Chandrapur", pdfUrl: "#" },
        { id: 'cepi_pm_24_2', title: "Tarapur", pdfUrl: "#" },
        { id: 'cepi_pm_24_3', title: "Aurangabad", pdfUrl: "#" },
        { id: 'cepi_pm_24_4', title: "Dombivali", pdfUrl: "#" },
        { id: 'cepi_pm_24_5', title: "Navi Mumbai", pdfUrl: "#" },
        { id: 'cepi_pm_24_6', title: "Mahad", pdfUrl: "#" },
        { id: 'cepi_pm_24_7', title: "Nashik", pdfUrl: "#" },
        { id: 'cepi_pm_24_8', title: "Pimpri-Chinchwad", pdfUrl: "#" },
        { id: 'cepi_pm_24_9', title: "Chembur", pdfUrl: "#" }
    ];

    // Data for CEPI post monsoon December 2023 to Feb 2024 monitoring reports
    const cepiPostMonsoon202324Data = [
        { id: 'cepi_pm_23_1', title: "Chandrapur", pdfUrl: "#" },
        { id: 'cepi_pm_23_2', title: "Dombivali", pdfUrl: "#" },
        { id: 'cepi_pm_23_3', title: "Aurangabad (Ch. Sambhajinagar)", pdfUrl: "#" },
        { id: 'cepi_pm_23_4', title: "Navi Mumbai", pdfUrl: "#" },
        { id: 'cepi_pm_23_5', title: "Tarapur", pdfUrl: "#" },
        { id: 'cepi_pm_23_6', title: "Chembur", pdfUrl: "#" },
        { id: 'cepi_pm_23_7', title: "Nashik", pdfUrl: "#" },
        { id: 'cepi_pm_23_8', title: "Pimpri Chinchwad", pdfUrl: "#" },
        { id: 'cepi_pm_23_9', title: "Mahad", pdfUrl: "#" }
    ];

    // Data for CEPI AREA PRE MONSOON MONITORING REPORT 2023
    const cepiAreaPreMonsoon2023Data = [
        { id: 'cepi_ap_23_1', title: "Chandrapur", pdfUrl: "#" },
        { id: 'cepi_ap_23_2', title: "Dombivali", pdfUrl: "#" },
        { id: 'cepi_ap_23_3', title: "Aurangabad", pdfUrl: "#" },
        { id: 'cepi_ap_23_4', title: "Navi Mumbai", pdfUrl: "#" },
        { id: 'cepi_ap_23_5', title: "Tarapur", pdfUrl: "#" },
        { id: 'cepi_ap_23_6', title: "Chembur", pdfUrl: "#" },
        { id: 'cepi_ap_23_7', title: "Nashik", pdfUrl: "#" },
        { id: 'cepi_ap_23_8', title: "Pimpri Chinchwad", pdfUrl: "#" },
        { id: 'cepi_ap_23_8', title: "Pimpri Chinchwad", pdfUrl: "#" },
        { id: 'cepi_ap_23_9', title: "Mahad", pdfUrl: "#" }
    ];

    // Data for ACTION PLAN ... 2022
    const actionPlan2022Data = [
        { id: 'ap_22_1', title: "Chandrapur", pdfUrl: "#" },
        { id: 'ap_22_2', title: "Dombivali", pdfUrl: "#" },
        { id: 'ap_22_3', title: "Aurangabad", pdfUrl: "#" },
        { id: 'ap_22_4', title: "Navi Mumbai", pdfUrl: "#" },
        { id: 'ap_22_5', title: "Tarapur", pdfUrl: "#" },
        { id: 'ap_22_6', title: "Chembur", pdfUrl: "#" },
        { id: 'ap_22_7', title: "Nashik", pdfUrl: "#" },
        { id: 'ap_22_8', title: "Pimpri Chinchwad", pdfUrl: "#" },
        { id: 'ap_22_9', title: "Mahad", pdfUrl: "#" }
    ];

    // Data for ACTION PLAN ... 2020
    const actionPlan2020Data = [
        { id: 'ap_20_1', title: "Aurangabad", pdfUrl: "#" },
        { id: 'ap_20_2', title: "Chandrapur", pdfUrl: "#" },
        { id: 'ap_20_3', title: "Chembur", pdfUrl: "#" },
        { id: 'ap_20_4', title: "Dombivali", pdfUrl: "#" },
        { id: 'ap_20_5', title: "Nashik", pdfUrl: "#" },
        { id: 'ap_20_6', title: "Navi Mumbai", pdfUrl: "#" },
        { id: 'ap_20_7', title: "Pimpri Chinchwad", pdfUrl: "#" },
        { id: 'ap_20_8', title: "Tarapur", pdfUrl: "#" },
        { id: 'ap_20_9', title: "Mahad", pdfUrl: "#" }
    ];

    // Data for ACTION PLAN ... 2019
    const actionPlan2019PreMonsoonData = [
        { id: 'ap_19_pre_1', title: "Pimpri Chinchwad", pdfUrl: "#" }
    ];

    const actionPlan2019PostMonsoonData = [
        { id: 'ap_19_post_1', title: "Aurangabad", pdfUrl: "#" },
        { id: 'ap_19_post_2', title: "Chandrapur", pdfUrl: "#" },
        { id: 'ap_19_post_3', title: "Chembur", pdfUrl: "#" },
        { id: 'ap_19_post_4', title: "Dombivali", pdfUrl: "#" },
        { id: 'ap_19_post_5', title: "Nashik", pdfUrl: "#" },
        { id: 'ap_19_post_6', title: "Navi Mumbai", pdfUrl: "#" },
        { id: 'ap_19_post_7', title: "Pimpri Chinchwad", pdfUrl: "#" },
        { id: 'ap_19_post_8', title: "Tarapur", pdfUrl: "#" },
        { id: 'ap_19_post_9', title: "Mahad", pdfUrl: "#" }
    ];

    // Data for Action Plan report of Severly Polluted Area 2019
    const actionPlanSevere2019Data = [
        { id: 'aps_19_1', title: "Chembur", pdfUrl: "#" },
        { id: 'aps_19_2', title: "Nashik", pdfUrl: "#" },
        { id: 'aps_19_3', title: "Pimpri Chinchwad", pdfUrl: "#" }
    ];

    // Data for Archive
    const archiveData = [
        { id: 'arch_1', title: "ACTION PLAN FOR INDUSTRIAL CLUSTER IN CRITICALLY POLLUTED AREA MONITORING REPORT 2018", pdfUrl: "#" },
        { id: 'arch_2', title: "CPCB Letter Dated on 04/05/2017, Finalization of the revised action plan for the Industrial Cluster, Navi Mumbai, regarding OA No. 77/2016(WZ) before Hon'bel NGT, Pune", pdfUrl: "#" },
        { id: 'arch_3', title: "CEPI AREA POST MONSOON MONITORING REPORT 2017", pdfUrl: "#" },
        { id: 'arch_4', title: "ACTION PLAN FOR INDUSTRIAL CLUSTER IN CRITICALLY POLLUTED AREA MONITORING REPORT 2017", pdfUrl: "#" },
        { id: 'arch_5', title: "Letter addressed to CPCB dated 11/02/2011.", pdfUrl: "#" },
        { id: 'arch_6', title: "Letter to CPCB dated 21/04/2011", pdfUrl: "#" },
        { id: 'arch_7', title: "MoEF, Govt. of India dated 13/01/2010 imposing Moratorium in 5 Critically polluted Areas in Maharashtra.", pdfUrl: "#" },
        { id: 'arch_8', title: "MoEF, Govt. of India dated 15/03/2010 clarify the details of CEPI-Crtitically polluted Area in Maharashtra.", pdfUrl: "#" }
    ];

    // Data for ACTION PLAN ... 2018
    // Data for ACTION PLAN ... 2018
    const actionPlan2018PreMonsoonData = [
        { id: 'ap_18_pre_1', title: "Aurangabad", pdfUrl: "#" },
        { id: 'ap_18_pre_2', title: "Chandrapur", pdfUrl: "#" },
        { id: 'ap_18_pre_3', title: "Chembur", pdfUrl: "#" },
        { id: 'ap_18_pre_4', title: "Dombivali", pdfUrl: "#" },
        { id: 'ap_18_pre_5', title: "Navi Mumbai", pdfUrl: "#" },
        { id: 'ap_18_pre_6', title: "Pimpri Chinchwad", pdfUrl: "#" },
        { id: 'ap_18_pre_7', title: "Tarapur", pdfUrl: "#" }
    ];

    const actionPlan2018PostMonsoonData = [
        { id: 'ap_18_post_1', title: "Aurangabad", pdfUrl: "#" },
        { id: 'ap_18_post_2', title: "Chandrapur", pdfUrl: "#" },
        { id: 'ap_18_post_3', title: "Chembur", pdfUrl: "#" },
        { id: 'ap_18_post_4', title: "Dombivali", pdfUrl: "#" },
        { id: 'ap_18_post_5', title: "Navi Mumbai", pdfUrl: "#" },
        { id: 'ap_18_post_6', title: "Pimpri Chinchwad", pdfUrl: "#" },
        { id: 'ap_18_post_7', title: "Tarapur", pdfUrl: "#" }
    ];

    // Data for CEPI AREA POST MONSOON MONITORING REPORT 2017
    const cepiPostMonsoon2017Data = [
        { id: 'cepi_pm_17_1', title: "Navi Mumbai", pdfUrl: "#" },
        { id: 'cepi_pm_17_2', title: "Aurangabad", pdfUrl: "#" },
        { id: 'cepi_pm_17_3', title: "Chandrapur", pdfUrl: "#" },
        { id: 'cepi_pm_17_4', title: "Chembur", pdfUrl: "#" },
        { id: 'cepi_pm_17_5', title: "Nashik", pdfUrl: "#" },
        { id: 'cepi_pm_17_6', title: "Dombivali", pdfUrl: "#" },
        { id: 'cepi_pm_17_7', title: "Pimpri", pdfUrl: "#" },
        { id: 'cepi_pm_17_8', title: "Tarapur", pdfUrl: "#" }
    ];

    // Data for ACTION PLAN ... 2017
    const actionPlan2017PreMonsoonData = [
        { id: 'ap_17_pre_1', title: "Navi Mumbai", pdfUrl: "#" },
        { id: 'ap_17_pre_2', title: "Aurangabad", pdfUrl: "#" },
        { id: 'ap_17_pre_3', title: "Chandrapur", pdfUrl: "#" },
        { id: 'ap_17_pre_4', title: "Chembur", pdfUrl: "#" },
        { id: 'ap_17_pre_5', title: "Nashik", pdfUrl: "#" },
        { id: 'ap_17_pre_6', title: "Dombivali", pdfUrl: "#" },
        { id: 'ap_17_pre_7', title: "Pimpri", pdfUrl: "#" },
        { id: 'ap_17_pre_8', title: "Tarapur", pdfUrl: "#" }
    ];

    const actionPlan2017PostMonsoonData = [
        { id: 'ap_17_post_1', title: "Navi Mumbai", pdfUrl: "#" },
        { id: 'ap_17_post_2', title: "Aurangabad", pdfUrl: "#" },
        { id: 'ap_17_post_3', title: "Chandrapur", pdfUrl: "#" },
        { id: 'ap_17_post_4', title: "Chembur", pdfUrl: "#" },
        { id: 'ap_17_post_5', title: "Nashik", pdfUrl: "#" },
        { id: 'ap_17_post_6', title: "Dombivali", pdfUrl: "#" },
        { id: 'ap_17_post_7', title: "Pimpri", pdfUrl: "#" },
        { id: 'ap_17_post_8', title: "Tarapur", pdfUrl: "#" }
    ];

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
                                Comprehensive Environmental Pollution Index (CEPI)
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
                                {(isArchive ? archiveData.map(d => d.title) : sidebarTabs).map((tab: any) => {
                                    const isDropdown = typeof tab === 'object';
                                    const tabName = isDropdown ? tab.title : tab;
                                    const isActive = selectedTab === tabName || (isDropdown && tab.subItems.includes(selectedTab));
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
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 border-b border-gray-200 pb-4">
                                    <h2 className="text-[24px] font-semibold text-gray-800 uppercase tracking-wide flex-1 mr-4">
                                        {isArchive ? "Archive" : selectedTab}
                                    </h2>

                                    {/* Archive Toggle */}
                                    <div className="flex items-center bg-gray-100 p-1 rounded-full shrink-0 mr-4 w-fit">
                                        <button
                                            onClick={() => handleArchiveToggle(false)}
                                            className={`cursor-pointer px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${!isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Current
                                        </button>
                                        <button
                                            onClick={() => handleArchiveToggle(true)}
                                            className={`cursor-pointer px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Archive
                                        </button>
                                    </div>

                                    {!isArchive && selectedTab === "ACTION PLAN FOR INDUSTRIAL CLUSTER IN CRITICALLY POLLUTED AREA MONITORING REPORT 2022" && (
                                        <div className="relative">
                                            <button
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                className="flex cursor-pointer items-center justify-between min-w-[180px] px-4 py-2 bg-white border border-gray-300 rounded-[8px] text-gray-700 hover:border-[#0085E2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0085E2]/20"
                                            >
                                                <span className="font-medium text-sm">{actionPlan2022Filter}</span>
                                                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                            </button>

                                            {isDropdownOpen && (
                                                <div className="absolute right-0 mt-2 w-full bg-white border border-gray-200 rounded-[8px] shadow-lg z-10 animate-in fade-in zoom-in-95 duration-200 cursor-pointer">
                                                    {["Any", "Pre Monsoon", "Post Monsoon"].map((option) => (
                                                        <div
                                                            key={option}
                                                            onClick={() => {
                                                                setActionPlan2022Filter(option);
                                                                setIsDropdownOpen(false);
                                                            }}
                                                            className={`px-4 py-2 text-sm cursor-pointer transition-colors first:rounded-t-[8px] last:rounded-b-[8px]
                                                                ${actionPlan2022Filter === option
                                                                    ? 'bg-blue-50 text-[#0085E2] font-medium'
                                                                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#0085E2]'
                                                                }`}
                                                        >
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {!isArchive && selectedTab === "ACTION PLAN FOR INDUSTRIAL CLUSTER IN CRITICALLY POLLUTED AREA MONITORING REPORT 2020" && (
                                        <div className="relative">
                                            <button
                                                onClick={() => setIsDropdownOpen2020(!isDropdownOpen2020)}
                                                className="flex cursor-pointer items-center justify-between min-w-[180px] px-4 py-2 bg-white border border-gray-300 rounded-[8px] text-gray-700 hover:border-[#0085E2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0085E2]/20"
                                            >
                                                <span className="font-medium text-sm">{actionPlan2020Filter}</span>
                                                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen2020 ? 'rotate-180' : ''}`} />
                                            </button>

                                            {isDropdownOpen2020 && (
                                                <div className="absolute right-0 mt-2 w-full bg-white border border-gray-200 rounded-[8px] shadow-lg z-10 animate-in fade-in zoom-in-95 duration-200 cursor-pointer">
                                                    {["Any", "Pre Monsoon", "Post Monsoon"].map((option) => (
                                                        <div
                                                            key={option}
                                                            onClick={() => {
                                                                setActionPlan2020Filter(option);
                                                                setIsDropdownOpen2020(false);
                                                            }}
                                                            className={`px-4 py-2 text-sm cursor-pointer transition-colors first:rounded-t-[8px] last:rounded-b-[8px]
                                                                ${actionPlan2020Filter === option
                                                                    ? 'bg-blue-50 text-[#0085E2] font-medium'
                                                                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#0085E2]'
                                                                }`}
                                                        >
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {!isArchive && selectedTab === "ACTION PLAN FOR INDUSTRIAL CLUSTER IN CRITICALLY POLLUTED AREA MONITORING REPORT 2019" && (
                                        <div className="relative">
                                            <button
                                                onClick={() => setIsDropdownOpen2019(!isDropdownOpen2019)}
                                                className="flex cursor-pointer items-center justify-between min-w-[180px] px-4 py-2 bg-white border border-gray-300 rounded-[8px] text-gray-700 hover:border-[#0085E2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0085E2]/20"
                                            >
                                                <span className="font-medium text-sm">{actionPlan2019Filter}</span>
                                                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen2019 ? 'rotate-180' : ''}`} />
                                            </button>

                                            {isDropdownOpen2019 && (
                                                <div className="absolute right-0 mt-2 w-full bg-white border border-gray-200 rounded-[8px] shadow-lg z-10 animate-in fade-in zoom-in-95 duration-200 cursor-pointer">
                                                    {["Any", "Pre Monsoon", "Post Monsoon"].map((option) => (
                                                        <div
                                                            key={option}
                                                            onClick={() => {
                                                                setActionPlan2019Filter(option);
                                                                setIsDropdownOpen2019(false);
                                                            }}
                                                            className={`px-4 py-2 text-sm cursor-pointer transition-colors first:rounded-t-[8px] last:rounded-b-[8px]
                                                                ${actionPlan2019Filter === option
                                                                    ? 'bg-blue-50 text-[#0085E2] font-medium'
                                                                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#0085E2]'
                                                                }`}
                                                        >
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="text-[14px] text-gray-700 leading-relaxed">
                                    {isArchive ? (
                                        selectedTab === "ACTION PLAN FOR INDUSTRIAL CLUSTER IN CRITICALLY POLLUTED AREA MONITORING REPORT 2018" ? (
                                            <div className="flex flex-col">
                                                <div className="flex flex-col md:flex-row md:items-center justify-end mb-6 border-b border-gray-200 pb-4">
                                                    <div className="relative">
                                                        <button
                                                            onClick={() => setIsDropdownOpen2018(!isDropdownOpen2018)}
                                                            className="flex cursor-pointer items-center justify-between min-w-[180px] px-4 py-2 bg-white border border-gray-300 rounded-[8px] text-gray-700 hover:border-[#0085E2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0085E2]/20"
                                                        >
                                                            <span className="font-medium text-sm">{actionPlan2018Filter}</span>
                                                            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen2018 ? 'rotate-180' : ''}`} />
                                                        </button>

                                                        {isDropdownOpen2018 && (
                                                            <div className="absolute right-0 mt-2 w-full bg-white border border-gray-200 rounded-[8px] shadow-lg z-10 animate-in fade-in zoom-in-95 duration-200 cursor-pointer">
                                                                {["Any", "Pre Monsoon", "Post Monsoon"].map((option) => (
                                                                    <div
                                                                        key={option}
                                                                        onClick={() => {
                                                                            setActionPlan2018Filter(option);
                                                                            setIsDropdownOpen2018(false);
                                                                        }}
                                                                        className={`px-4 py-2 text-sm cursor-pointer transition-colors first:rounded-t-[8px] last:rounded-b-[8px]
                                                                            ${actionPlan2018Filter === option
                                                                                ? 'bg-blue-50 text-[#0085E2] font-medium'
                                                                                : 'text-gray-700 hover:bg-gray-50 hover:text-[#0085E2]'
                                                                            }`}
                                                                    >
                                                                        {option}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                {actionPlan2018Filter === "Pre Monsoon" ? (
                                                    <PaginatedSection documents={actionPlan2018PreMonsoonData} />
                                                ) : actionPlan2018Filter === "Post Monsoon" ? (
                                                    <PaginatedSection documents={actionPlan2018PostMonsoonData} />
                                                ) : (
                                                    <PaginatedSection documents={[...actionPlan2018PreMonsoonData, ...actionPlan2018PostMonsoonData]} />
                                                )}
                                            </div>
                                        ) : selectedTab === "CEPI AREA POST MONSOON MONITORING REPORT 2017" ? (
                                            <PaginatedSection documents={cepiPostMonsoon2017Data} itemsPerPage={4} />
                                        ) : selectedTab === "ACTION PLAN FOR INDUSTRIAL CLUSTER IN CRITICALLY POLLUTED AREA MONITORING REPORT 2017" ? (
                                            <div className="flex flex-col">
                                                <div className="flex flex-col md:flex-row md:items-center justify-end mb-6 border-b border-gray-200 pb-4">
                                                    <div className="relative">
                                                        <button
                                                            onClick={() => setIsDropdownOpen2017(!isDropdownOpen2017)}
                                                            className="flex cursor-pointer items-center justify-between min-w-[180px] px-4 py-2 bg-white border border-gray-300 rounded-[8px] text-gray-700 hover:border-[#0085E2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0085E2]/20"
                                                        >
                                                            <span className="font-medium text-sm">{actionPlan2017Filter}</span>
                                                            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen2017 ? 'rotate-180' : ''}`} />
                                                        </button>

                                                        {isDropdownOpen2017 && (
                                                            <div className="absolute right-0 mt-2 w-full bg-white border border-gray-200 rounded-[8px] shadow-lg z-10 animate-in fade-in zoom-in-95 duration-200 cursor-pointer">
                                                                {["Any", "Pre Monsoon", "Post Monsoon"].map((option) => (
                                                                    <div
                                                                        key={option}
                                                                        onClick={() => {
                                                                            setActionPlan2017Filter(option);
                                                                            setIsDropdownOpen2017(false);
                                                                        }}
                                                                        className={`px-4 py-2 text-sm cursor-pointer transition-colors first:rounded-t-[8px] last:rounded-b-[8px]
                                                                            ${actionPlan2017Filter === option
                                                                                ? 'bg-blue-50 text-[#0085E2] font-medium'
                                                                                : 'text-gray-700 hover:bg-gray-50 hover:text-[#0085E2]'
                                                                            }`}
                                                                    >
                                                                        {option}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                {actionPlan2017Filter === "Pre Monsoon" ? (
                                                    <PaginatedSection documents={actionPlan2017PreMonsoonData} />
                                                ) : actionPlan2017Filter === "Post Monsoon" ? (
                                                    <PaginatedSection documents={actionPlan2017PostMonsoonData} />
                                                ) : (
                                                    <PaginatedSection documents={[...actionPlan2017PreMonsoonData, ...actionPlan2017PostMonsoonData]} />
                                                )}
                                            </div>
                                        ) : (
                                            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 flex flex-col items-center justify-center min-h-[200px] text-center">
                                                {/* You can display specific content for the selected archive tab here if needed */}
                                                <PaginatedSection documents={archiveData.filter(d => d.title === selectedTab)} itemsPerPage={1} gridClassName="grid-cols-1" />
                                            </div>
                                        )) : selectedTab === "CEPI REPORTS PRE MONSOON (April To June 2025)" ? (
                                            <PaginatedSection documents={cepiPreMonsoon2025Data} />
                                        ) : selectedTab === "CEPI Post Monsoon December 2024 to February 2025 reports" ? (
                                            <PaginatedSection documents={cepiPostMonsoon202425Data} />
                                        ) : selectedTab === "CEPI post monsoon April to June 2024 reports" ? (
                                            <PaginatedSection documents={cepiPostMonsoon2024Data} />
                                        ) : selectedTab === "CEPI post monsoon December 2023 to Feb 2024 monitoring reports" ? (
                                            <PaginatedSection documents={cepiPostMonsoon202324Data} />
                                        ) : selectedTab === "CEPI AREA PRE MONSOON MONITORING REPORT 2023" ? (
                                            <PaginatedSection documents={cepiAreaPreMonsoon2023Data} />
                                        ) : selectedTab === "ACTION PLAN FOR INDUSTRIAL CLUSTER IN CRITICALLY POLLUTED AREA MONITORING REPORT 2022" ? (
                                            (actionPlan2022Filter === "Any" || actionPlan2022Filter === "Post Monsoon") ? (
                                                <PaginatedSection documents={actionPlan2022Data} itemsPerPage={4} />
                                            ) : (
                                                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 flex flex-col items-center justify-center min-h-[200px] text-center">
                                                    <p className="text-gray-500 italic">No data available for {actionPlan2022Filter}.</p>
                                                </div>
                                            )
                                        ) : selectedTab === "ACTION PLAN FOR INDUSTRIAL CLUSTER IN CRITICALLY POLLUTED AREA MONITORING REPORT 2020" ? (
                                            (actionPlan2020Filter === "Any" || actionPlan2020Filter === "Post Monsoon") ? (
                                                <PaginatedSection documents={actionPlan2020Data} itemsPerPage={4} />
                                            ) : (
                                                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 flex flex-col items-center justify-center min-h-[200px] text-center">
                                                    <p className="text-gray-500 italic">No data available for {actionPlan2020Filter}.</p>
                                                </div>
                                            )
                                        ) : selectedTab === "ACTION PLAN FOR INDUSTRIAL CLUSTER IN CRITICALLY POLLUTED AREA MONITORING REPORT 2019" ? (
                                            actionPlan2019Filter === "Pre Monsoon" ? (
                                                <PaginatedSection documents={actionPlan2019PreMonsoonData} itemsPerPage={4} />
                                            ) : actionPlan2019Filter === "Post Monsoon" ? (
                                                <PaginatedSection documents={actionPlan2019PostMonsoonData} itemsPerPage={4} />
                                            ) : (
                                                <PaginatedSection documents={[...actionPlan2019PreMonsoonData, ...actionPlan2019PostMonsoonData]} itemsPerPage={4} />
                                            )
                                        ) : selectedTab === "Action Plan report of Severly Polluted Area 2019" ? (
                                            <PaginatedSection documents={actionPlanSevere2019Data} itemsPerPage={4} />
                                        ) : (
                                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 flex flex-col items-center justify-center min-h-[200px] text-center">
                                            <p className="text-gray-500 italic">Content for "{selectedTab}" will be displayed here.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PollutionIndex;
