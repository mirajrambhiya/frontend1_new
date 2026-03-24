import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DocumentCard from '../../components/DocumentCard';

const standingorders = "/assets/standingorders.svg";

// Sidebar tabs from the reference image
const sidebarTabs = [
    "Other Notices",
    "MPCB Recruitment 2024 - Final Select/Wait List For Grade B & C Post",
    "MPCB Recruitment 2024 - Final Mark List of Regional Officer, Senior Scientific Officer, Scientific Officer",
    "MPCB Recruitment 2024 - Revised Temporary Select/Wait List Of Junior Scientific Assistant, Grade-C",
    "MPCB Recruitment 2024 - Instructions for Candidates Regarding Document Verification for Grade B & C Post",
    "MPCB Recruitment 2024 - Personal Interview For Grade A Post",
    "MPCB Recruitment 2024 - Temporary Select/Wait List For Grade B & C Post",
    "Result Of MPCB Recruitment Exam - 2024"
];

// Document data for tab 1 (Other Notices)
const otherNoticesDocuments = [
    { id: 1, title: "Notice: Regarding conducting Proficiency Test for the candidates who qualified in the written examination" },
    { id: 2, title: "Instructions for the Junior Stenographer Recruitment Process" },
    { id: 3, title: "Advertisement for the post of Assistant Technical Advisor (Contract Basis)" },
    { id: 4, title: "MPCB Recruitment 2025 - Select List Grade A Of Regional Officer, Senior Scientific Officer, Scientific Officer" },
    { id: 5, title: "Application for Contractual Service for the Post of Senior Personal Assistant" },
    { id: 6, title: "Apply online for the Environment and Climate Change Internship Programme 2024-25" },
    { id: 7, title: "Extension: Apply online for the Environment and Climate Change Internship Programme 2024-25" },
    { id: 8, title: "Notice regarding recruitment process updates" },
    { id: 9, title: "Important announcement for all candidates" },
];

// Document data for tab 2 (Final Select/Wait List For Grade B & C Post)
const gradeBCPostDocuments = [
    { id: 1, title: "Final Select List - Grade B Post" },
    { id: 2, title: "Final Wait List - Grade B Post" },
    { id: 3, title: "Final Select List - Grade C Post" },
    { id: 4, title: "Final Wait List - Grade C Post" },
    { id: 5, title: "Grade B Post - Category Wise Selection" },
    { id: 6, title: "Grade C Post - Category Wise Selection" },
    { id: 7, title: "Revised Final Select List - Grade B" },
    { id: 8, title: "Revised Final Wait List - Grade B" },
    { id: 9, title: "Revised Final Select List - Grade C" },
    { id: 10, title: "Revised Final Wait List - Grade C" },
    { id: 11, title: "Additional Select List - Grade B Post" },
    { id: 12, title: "Additional Wait List - Grade B Post" },
    { id: 13, title: "Additional Select List - Grade C Post" },
    { id: 14, title: "Additional Wait List - Grade C Post" },
    { id: 15, title: "Additional Wait List - Grade C Post" },
    { id: 16, title: "Additional Wait List - Grade C Post" },
    { id: 17, title: "Additional Wait List - Grade C Post" },
];

// Document data for tab 3 (Final Mark List of Regional Officer, Senior Scientific Officer, Scientific Officer)
const markListDocuments = [
    { id: 1, title: "Final Mark List - Regional Officer" },
    { id: 2, title: "Final Mark List - Senior Scientific Officer" },
    { id: 3, title: "Final Mark List - Scientific Officer" },
    { id: 4, title: "Category Wise Mark List - Regional Officer" },
    { id: 5, title: "Category Wise Mark List - Senior Scientific Officer" },
    { id: 6, title: "Category Wise Mark List - Scientific Officer" },
    { id: 7, title: "Merit List - Regional Officer" },
    { id: 8, title: "Merit List - Senior Scientific Officer" },
    { id: 9, title: "Merit List - Scientific Officer" },
    { id: 10, title: "Revised Mark List - Regional Officer" },
    { id: 11, title: "Revised Mark List - Senior Scientific Officer" },
    { id: 12, title: "Revised Mark List - Scientific Officer" },
    { id: 13, title: "Revised Mark List - Scientific Officer" },
    { id: 14, title: "Revised Mark List - Scientific Officer" },
    { id: 15, title: "Revised Mark List - Scientific Officer" },
];

// Document data for tab 4 (Revised Temporary Select/Wait List Of Junior Scientific Assistant, Grade-C)
const jsaGradeCDocuments = [
    { id: 1, title: "Revised Temporary Select List - JSA Grade-C" },
    { id: 2, title: "Revised Temporary Wait List - JSA Grade-C" },
    { id: 3, title: "Category Wise Selection - JSA Grade-C" },
    { id: 4, title: "Merit List - Junior Scientific Assistant" },
    { id: 5, title: "Additional Select List - JSA Grade-C" },
    { id: 6, title: "Additional Wait List - JSA Grade-C" },
    { id: 7, title: "Final Revised List - JSA Grade-C" },
];

// Document data for tab 5 (Instructions for Candidates Regarding Document Verification for Grade B & C Post)
const docVerificationDocuments = [
    { id: 1, title: "Instructions for Document Verification - Grade B Post" },
    { id: 2, title: "Instructions for Document Verification - Grade C Post" },
    { id: 3, title: "List of Required Documents - Grade B" },
    { id: 4, title: "List of Required Documents - Grade C" },
    { id: 5, title: "Document Verification Schedule - Grade B Post" },
    { id: 6, title: "Document Verification Schedule - Grade C Post" },
    { id: 7, title: "Venue Details for Document Verification" },
    { id: 8, title: "Important Guidelines for Candidates" },
];

// Document data for tab 6 (Personal Interview For Grade A Post)
const gradeAInterviewDocuments = [
    { id: 1, title: "Personal Interview Schedule - Grade A Post" },
    { id: 2, title: "Interview Call Letter - Regional Officer" },
    { id: 3, title: "Interview Call Letter - Senior Scientific Officer" },
    { id: 4, title: "Interview Call Letter - Scientific Officer" },
    { id: 5, title: "Interview Panel Details - Grade A Post" },
    { id: 6, title: "Instructions for Interview - Grade A Post" },
    { id: 7, title: "Venue Details for Personal Interview" },
];

// Document data for tab 7 (Temporary Select/Wait List For Grade B & C Post)
const tempListBCDocuments = [
    { id: 1, title: "Temporary Select List - Grade B Post" },
    { id: 2, title: "Temporary Wait List - Grade B Post" },
    { id: 3, title: "Temporary Select List - Grade C Post" },
    { id: 4, title: "Temporary Wait List - Grade C Post" },
    { id: 5, title: "Category Wise Temporary Selection - Grade B" },
    { id: 6, title: "Category Wise Temporary Selection - Grade C" },
    { id: 7, title: "Additional Temporary List - Grade B Post" },
    { id: 8, title: "Additional Temporary List - Grade C Post" },
];

// Document data for tab 8 (Result Of MPCB Recruitment Exam - 2024)
const examResultDocuments = [
    { id: 1, title: "Result - Regional Officer Exam 2024" },
    { id: 2, title: "Result - Senior Scientific Officer Exam 2024" },
    { id: 3, title: "Result - Scientific Officer Exam 2024" },
    { id: 4, title: "Result - Grade B Post Exam 2024" },
    { id: 5, title: "Result - Grade C Post Exam 2024" },
    { id: 6, title: "Merit List - All Posts 2024" },
    { id: 7, title: "Cut-off Marks - MPCB Recruitment 2024" },
    { id: 8, title: "Answer Key - MPCB Recruitment Exam 2024" },
    { id: 9, title: "Category Wise Result - All Posts" },
];

const ITEMS_PER_PAGE = 6; // 2 columns x 3 rows

function Recruitment() {
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
            case "Other Notices":
                return otherNoticesDocuments;
            case "MPCB Recruitment 2024 - Final Select/Wait List For Grade B & C Post":
                return gradeBCPostDocuments;
            case "MPCB Recruitment 2024 - Final Mark List of Regional Officer, Senior Scientific Officer, Scientific Officer":
                return markListDocuments;
            case "MPCB Recruitment 2024 - Revised Temporary Select/Wait List Of Junior Scientific Assistant, Grade-C":
                return jsaGradeCDocuments;
            case "MPCB Recruitment 2024 - Instructions for Candidates Regarding Document Verification for Grade B & C Post":
                return docVerificationDocuments;
            case "MPCB Recruitment 2024 - Personal Interview For Grade A Post":
                return gradeAInterviewDocuments;
            case "MPCB Recruitment 2024 - Temporary Select/Wait List For Grade B & C Post":
                return tempListBCDocuments;
            case "Result Of MPCB Recruitment Exam - 2024":
                return examResultDocuments;
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
                            <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-[#000000] tracking-tight leading-tight md:leading-none mb-4 md:mb-8">
                                Recruitment
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
                                <h2 className="text-[20px] md:text-[24px] font-semibold text-gray-800 mb-4 leading-snug">
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

export default Recruitment;
