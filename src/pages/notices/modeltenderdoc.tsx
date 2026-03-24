import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DocumentCard from '../../components/DocumentCard';

const standingorders = "/assets/standingorders.svg";

// Sidebar tabs
const sidebarTabs = [
    "Sewage Management",
    "Solid waste Management"
];

// Document data for Sewage Management
const sewageManagementDocuments = [
    { id: 1, title: "Model Tender Document - Sewage Treatment Plant" },
    { id: 2, title: "Guidelines for Sewage Management Systems" },
    { id: 3, title: "Technical Specifications - STP" },
    { id: 4, title: "Sewage Network Design Standards" },
    { id: 5, title: "Operation & Maintenance Manual - STP" },
    { id: 6, title: "Quality Standards for Treated Sewage" },
    { id: 7, title: "Sewage Pumping Station Guidelines" },
    { id: 8, title: "Environmental Clearance Requirements - Sewage" },
];

// Document data for Solid waste Management
const solidWasteManagementDocuments = [
    { id: 1, title: "Model Tender Document - Solid Waste Processing" },
    { id: 2, title: "Guidelines for Solid Waste Management" },
    { id: 3, title: "Technical Specifications - Waste Processing Plant" },
    { id: 4, title: "Waste Segregation Standards" },
    { id: 5, title: "Landfill Design Guidelines" },
    { id: 6, title: "Composting Facility Standards" },
    { id: 7, title: "Waste Collection System Guidelines" },
    { id: 8, title: "Environmental Clearance Requirements - Solid Waste" },
    { id: 9, title: "Bio-medical Waste Management Guidelines" },
];

const ITEMS_PER_PAGE = 6; // 2 columns x 3 rows

function ModelTenderDoc() {
    const [selectedTab, setSelectedTab] = useState(sidebarTabs[0]);
    const [currentPage, setCurrentPage] = useState(1);

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
        setCurrentPage(1); // Reset pagination when switching tabs
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Get current documents based on selected tab
    const getCurrentDocuments = () => {
        switch (selectedTab) {
            case "Sewage Management":
                return sewageManagementDocuments;
            case "Solid waste Management":
                return solidWasteManagementDocuments;
            default:
                return [];
        }
    };

    const currentDocuments = getCurrentDocuments();

    // Pagination calculations
    const totalPages = Math.ceil(currentDocuments.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedData = currentDocuments.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Generate page numbers with ellipsis logic - show max 3 pages
    const getPageNumbers = (currentPage: number, totalPages: number) => {
        const pages: (number | string)[] = [];

        if (totalPages <= 3) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 2) {
                pages.push(1, 2, 3, '...', totalPages);
            } else if (currentPage >= totalPages - 1) {
                pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }

        return pages;
    };

    // Handle page change with scroll to top
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="font-family-helvetica">
            {/* Top Banner Section */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[250px] lg:h-[280px] rounded-t-[30px] md:rounded-t-[40px] lg:rounded-t-[48px] overflow-hidden">
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

                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-20px] md:mt-[-30px]">
                            <h1 className="text-[20px] md:text-[30px] lg:text-[40px] font-bold text-[#000000] tracking-tight leading-tight md:leading-none mb-4 md:mb-8">
                                Model Tender Documents for Local Bodies
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
                                {sidebarTabs.map((tab) => {
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
                        <div className="flex-1 w-full">
                            <div className="rounded-[24px] p-0 md:p-8 min-h-[400px]">
                                <h2 className="text-[24px] font-semibold text-gray-800 mb-4">
                                    {selectedTab}
                                </h2>

                                {/* Document Cards Content */}
                                <div>
                                    {/* Results count */}
                                    <div className="mb-6 text-[14px] text-gray-500">
                                        Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, currentDocuments.length)} of {currentDocuments.length} document{currentDocuments.length !== 1 ? 's' : ''}
                                    </div>

                                    {/* Document Cards Grid - 2 columns x 3 rows */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
                                        {paginatedData.map((doc) => (
                                            <DocumentCard
                                                key={doc.id}
                                                document={{
                                                    id: doc.id,
                                                    title: doc.title
                                                }}
                                                wide={true}
                                            />
                                        ))}
                                    </div>

                                    {/* Pagination */}
                                    {totalPages > 1 && (
                                        <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-gray-100">
                                            {/* First Button */}
                                            {currentPage > 2 && (
                                                <button
                                                    onClick={() => handlePageChange(1)}
                                                    className="px-3 py-2 text-[13px] text-gray-600 hover:text-[#0085E2] transition-colors cursor-pointer"
                                                >
                                                    First
                                                </button>
                                            )}

                                            {/* Previous Button */}
                                            {currentPage > 1 && (
                                                <button
                                                    onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer"
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                </button>
                                            )}

                                            {/* Page Numbers with Ellipsis */}
                                            {getPageNumbers(currentPage, totalPages).map((page, index) => (
                                                page === '...' ? (
                                                    <span key={`ellipsis-${index}`} className="px-2 text-gray-400">...</span>
                                                ) : (
                                                    <button
                                                        key={page}
                                                        onClick={() => handlePageChange(page as number)}
                                                        className={`w-10 h-10 flex items-center justify-center rounded-full text-[14px] font-medium transition-colors cursor-pointer
                                                            ${currentPage === page
                                                                ? 'bg-[#0085E2] text-white'
                                                                : 'text-gray-600 hover:bg-gray-100'
                                                            }`}
                                                    >
                                                        {page}
                                                    </button>
                                                )
                                            ))}

                                            {/* Next Button */}
                                            {currentPage < totalPages && (
                                                <button
                                                    onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer"
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                            )}

                                            {/* Last Button */}
                                            {currentPage < totalPages - 1 && (
                                                <button
                                                    onClick={() => handlePageChange(totalPages)}
                                                    className="px-3 py-2 text-[13px] text-gray-600 hover:text-[#0085E2] transition-colors cursor-pointer"
                                                >
                                                    Last
                                                </button>
                                            )}
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

export default ModelTenderDoc;
