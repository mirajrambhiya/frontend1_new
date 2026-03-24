import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, FileText, Eye, Download } from 'lucide-react';

// --- Assets ---
const standingorders = "/assets/standingorders.svg";

// --- Types ---
interface Document {
    id: number | string;
    title: string;
    department?: string;
    date?: string;
    pdfUrl?: string;
}

interface Section {
    id: number;
    title: string;
    documents: Document[];
}

// --- Mock Data ---
const sectionsData: Section[] = [
    {
        id: 1,
        title: "Enforcement Policy",
        documents: [
            { id: 1, title: "To ensure compliance of the Closure directions issued by CPCB to 17 category of highly polluting industries for not complying with the proposed directions for installation of online continuous monitoring systems and uploading online data on CPCB/MPCB server", department: "ATS Department", date: "1 March, 2016" },
            { id: 2, title: "Gazette notification regarding Enforcement Policy of MPCB 2015", department: "ATS Department", date: "1 March, 2016" },
            { id: 3, title: "Gazette notification regarding Enforcement Policy of MPCB 2015", department: "ATS Department", date: "1 March, 2016" },
            { id: 4, title: "Gazette notification regarding Enforcement Policy of MPCB 2016", department: "ATS Department", date: "15 April, 2016" },
            { id: 5, title: "Gazette notification regarding Enforcement Policy of MPCB 2017", department: "ATS Department", date: "20 May, 2017" },
        ]
    },
    {
        id: 2,
        title: "Establishment Branch",
        documents: [
            { id: 1, title: "Gazette notification regarding Enforcement Policy of MPCB 2015", department: "ATS Department", date: "1 March, 2016" },
            { id: 2, title: "Gazette notification regarding Enforcement Policy of MPCB 2015", department: "ATS Department", date: "1 March, 2016" },
            { id: 3, title: "Gazette notification regarding Enforcement Policy of MPCB 2015", department: "ATS Department", date: "1 March, 2016" },
        ]
    },
    {
        id: 3,
        title: "Finance Matter",
        documents: [
            { id: 1, title: "Gazette notification regarding Enforcement Policy of MPCB 2015", department: "ATS Department", date: "1 March, 2016" },
            { id: 2, title: "Gazette notification regarding Enforcement Policy of MPCB 2015", department: "ATS Department", date: "1 March, 2016" },
            { id: 3, title: "Gazette notification regarding Enforcement Policy of MPCB 2015", department: "ATS Department", date: "1 March, 2016" },
        ]
    },
    {
        id: 4,
        title: "Consent Management",
        documents: [
            { id: 1, title: "Consent Management Guidelines 2020", department: "Legal Department", date: "10 Jan, 2020" },
            { id: 2, title: "Consent Management Updated Policy", department: "Legal Department", date: "15 Feb, 2021" },
        ]
    },
    {
        id: 5,
        title: "Technical Administration",
        documents: [
            { id: 1, title: "Technical Guidelines for Industries", department: "Technical Department", date: "5 June, 2019" },
            { id: 2, title: "Administrative Procedures Manual", department: "Admin Department", date: "12 Aug, 2020" },
        ]
    },
    {
        id: 6,
        title: "Consent Fees JVS Fees",
        documents: [
            { id: 1, title: "Revised Consent Fees Structure 2024", department: "Finance Department", date: "1 Jan, 2024" },
            { id: 2, title: "JVS Sampling Charges Notification", department: "Technical Department", date: "15 Mar, 2023" },
            { id: 3, title: "Circular regarding payment of consent fees", department: "Finance Department", date: "10 Dec, 2022" },
        ]
    },
    {
        id: 7,
        title: "Auto Renewal",
        documents: [
            { id: 1, title: "Auto Renewal Scheme for Green Category Industries", department: "Consent Department", date: "1 Apr, 2023" },
            { id: 2, title: "Guidelines for Auto Renewal of Consent to Operate", department: "Consent Department", date: "20 May, 2022" },
        ]
    },
    {
        id: 8,
        title: "Cess",
        documents: [
            { id: 1, title: "Water Cess Assessment Order 2023", department: "Cess Department", date: "12 Jul, 2023" },
            { id: 2, title: "Instructions for filing Cess Returns", department: "Cess Department", date: "5 Sep, 2022" },
        ]
    },
    {
        id: 9,
        title: "EC Public Hearing CRZ",
        documents: [
            { id: 1, title: "Minutes of Public Hearing for Project X", department: "Public Hearing", date: "22 Aug, 2023" },
            { id: 2, title: "CRZ Clearance Procedure Guidelines", department: "Environment Dept", date: "14 Feb, 2023" },
            { id: 3, title: "Environmental Clearance Conditions Compliance", department: "Environment Dept", date: "30 Nov, 2022" },
        ]
    },
    {
        id: 10,
        title: "RRZ",
        documents: [
            { id: 1, title: "River Regulation Zone Policy 2022", department: "Legal Department", date: "18 Jun, 2022" },
            { id: 2, title: "Clarification on RRZ setback distances", department: "Technical Department", date: "25 Oct, 2021" },
        ]
    },
    {
        id: 11,
        title: "Waste Management",
        documents: [
            { id: 1, title: "Solid Waste Management Rules Implementation", department: "SWM Department", date: "10 Mar, 2023" },
            { id: 2, title: "Hazardous Waste Annual Return Filing", department: "HWM Department", date: "15 Apr, 2023" },
            { id: 3, title: "E-Waste Management Guidelines for Recyclers", department: "E-Waste Department", date: "20 Jan, 2022" },
        ]
    },
    {
        id: 12,
        title: "CETP",
        documents: [
            { id: 1, title: "Performance Standards for CETPs", department: "Technical Department", date: "11 Nov, 2023" },
            { id: 2, title: "Guidelines for CETP Operation and Maintenance", department: "Technical Department", date: "05 Aug, 2022" },
        ]
    },
    {
        id: 13,
        title: "Legal",
        documents: [
            { id: 1, title: "Legal Cell Circular on Litigation Handling", department: "Legal Department", date: "01 Feb, 2023" },
            { id: 2, title: "Supreme Court Order Implementation Instructions", department: "Legal Department", date: "15 Dec, 2022" },
            { id: 3, title: "Panel Advocate Fees Revision", department: "Legal Department", date: "20 Sep, 2021" },
        ]
    },
    {
        id: 14,
        title: "Miscellaneous",
        documents: [
            { id: 1, title: "General Administrative Order 123", department: "Admin Department", date: "05 May, 2024" },
            { id: 2, title: "Office Timing and Attendance Policy", department: "HR Department", date: "01 Jan, 2024" },
        ]
    }
];

const sidebarTabs = [
    "All Standing Orders",
    "Enforcement Policy",
    "Establishment Branch",
    "Finance Matter",
    "Consent Management",
    "Consent Fees JVS Fees",
    "Auto Renewal",
    "Technical Administration",
    "Cess",
    "EC Public Hearing CRZ",
    "RRZ",
    "Waste Management",
    "CETP",
    "Legal",
    "Miscellaneous"
];

// --- Components ---

// 1. Document Card (Inline)
function DocumentCard({ document }: { document: Document }) {
    return (
        <div className="w-full md:min-w-[400px] md:max-w-[400px] bg-white border border-gray-200 rounded-[20px] md:rounded-[32px] p-4 md:p-5 flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.04)] h-full">
            {/* Header with icon and title */}
            <div className="flex gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0085E2]/10 rounded-[16px] md:rounded-[20px] flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#0085E2]" />
                </div>
                <h4 className="text-[12px] md:text-[14px] font-semibold text-gray-800 leading-tight line-clamp-2">
                    {document.title}
                </h4>
            </div>

            {/* Meta info */}
            {(document.department || document.date) && (
                <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-[12px] text-gray-500 mt-2 md:mt-3">
                    {document.department && (
                        <span className="font-medium">{document.department}</span>
                    )}
                    {document.date && (
                        <div className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                                <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                                <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                                <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                            </svg>
                            {document.date}
                        </div>
                    )}
                </div>
            )}

            {/* Spacer */}
            <div className="flex-grow min-h-[16px]" />

            {/* Action buttons */}
            <div className="flex gap-2 md:gap-3 mt-auto">
                <button className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 text-[11px] md:text-[13px] text-gray-600 border border-gray-200 rounded-[16px] md:rounded-[21px] hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer">
                    <Eye className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    View
                </button>
                <button className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 text-[11px] md:text-[13px] text-white bg-[#0085E2] rounded-[16px] md:rounded-[21px] hover:bg-[#0070C0] transition-colors cursor-pointer">
                    <Download className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    Download PDF
                </button>
            </div>
        </div>
    );
}

// 2. Banner Component
interface BannerProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
    onApply: () => void;
    onClear: () => void;
}

const Banner: React.FC<BannerProps> = ({ searchQuery, onSearchChange, onApply, onClear }) => {
    return (
        <section className="w-full flex justify-center bg-white font-family-helvetica">
            <div className="w-full max-w-[1282px] px-4">
                <div className="relative w-full h-[200px] md:h-[280px] rounded-[24px] md:rounded-t-[48px] overflow-hidden">
                    {/* Background layers */}
                    <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${standingorders})` }} />
                    <div className="absolute inset-0 z-10 bg-cover bg-center blur-sm scale-105" style={{ backgroundImage: `url(${standingorders})`, WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)', maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)' }} />
                    <div className="absolute inset-0 z-20 bg-linear-to-b from-[#00A3FF]/30 via-[#00A3FF]/60 to-white" />

                    {/* Content */}
                    <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-10px]">
                        <h1 className="text-[28px] md:text-[48px] font-bold text-[#000000] tracking-tight leading-tight md:leading-none mb-2 md:mb-4">
                            Important Standing Orders
                        </h1>
                        <p className="text-[14px] md:text-[18px] font-medium text-black opacity-90 mb-4 md:mb-6">
                            MPCB Standing Orders and Policy Documents
                        </p>

                        {/* Search */}
                        <div className="flex flex-col md:flex-row items-center gap-3 w-full max-w-[550px]">
                            <div className="w-full md:w-[400px] h-[44px] md:h-[48px] bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.08)] flex items-center px-4 md:px-5 gap-3">
                                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" strokeWidth="2" /><path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" /></svg>
                                <input type="text" placeholder="Search Document" value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} className="flex-1 bg-transparent text-[14px] md:text-[15px] text-gray-700 placeholder-gray-400 outline-none" />
                            </div>
                            <div className="flex items-center gap-2 w-full md:w-auto">
                                <button onClick={onApply} className="flex-1 md:flex-none h-[40px] md:h-[48px] px-6 bg-[#0085E2] text-white text-[13px] md:text-[14px] font-medium rounded-full hover:bg-[#0070C0] transition-colors cursor-pointer shadow-[0_2px_8px_rgba(0,133,226,0.3)] whitespace-nowrap">Apply</button>
                                <button onClick={onClear} className="flex-1 md:flex-none h-[40px] md:h-[48px] px-6 bg-[#0085E2] text-white text-[13px] md:text-[14px] font-medium rounded-full hover:bg-[#0070C0] transition-colors cursor-pointer shadow-[0_2px_8px_rgba(0,133,226,0.3)] whitespace-nowrap">Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 3. Sidebar Component
interface SidebarProps {
    activeTab: string;
    onTabClick: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabClick }) => {
    return (
        <div className="w-full flex flex-row lg:flex-col gap-3 lg:gap-4 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {sidebarTabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                    <div
                        key={tab}
                        onClick={() => onTabClick(tab)}
                        className={`flex items-center justify-between px-4 lg:px-6 py-3 lg:py-5 rounded-xl lg:rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-200 whitespace-nowrap lg:whitespace-normal shrink-0 lg:shrink
                            ${isActive
                                ? 'border-2 border-[#00A3FF] bg-[#00A3FF]/5'
                                : 'border border-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF]'
                            }`}
                    >
                        <span className={`text-[13px] lg:text-[14px] font-normal transition-colors duration-200 ${isActive ? 'text-[#00A3FF] font-medium' : 'text-gray-800'}`}>
                            {tab}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

// 4. Document Section Component
function DocumentSection({ section, scrollIndex, onScrollLeft, onScrollRight, isExpanded, onToggleExpand }: {
    section: Section;
    scrollIndex: number;
    onScrollLeft: () => void;
    onScrollRight: () => void;
    isExpanded: boolean;
    onToggleExpand: () => void;
}) {
    const itemsPerPage = 4; // 2x2 grid
    const totalPages = Math.ceil(section.documents.length / itemsPerPage);

    // Slice documents for the current individual section page
    const displayedDocuments = isExpanded
        ? section.documents
        : section.documents.slice(scrollIndex * itemsPerPage, (scrollIndex + 1) * itemsPerPage);

    return (
        <div className="mb-12">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4 lg:gap-0">
                <div className="flex items-center gap-3 lg:gap-4">
                    <h2 className="text-[20px] lg:text-[28px] font-bold text-gray-900">{section.title}</h2>
                    <span className="px-2 lg:px-3 py-1 text-[11px] lg:text-[13px] text-gray-500 bg-gray-100 rounded-full whitespace-nowrap">
                        {section.documents.length.toString().padStart(2, '0')} Documents
                    </span>
                </div>
                <div className="flex items-center justify-between lg:justify-end gap-4 w-full lg:w-auto">
                    <button
                        onClick={onToggleExpand}
                        className="text-[14px] text-[#0085E2] hover:underline cursor-pointer"
                    >
                        {isExpanded ? 'Show Less' : 'View All'}
                    </button>
                    {/* Navigation Arrows for the individual section grid - only show when not expanded and needed */}
                    {!isExpanded && totalPages > 1 && (
                        <div className="flex gap-2">
                            <button
                                onClick={onScrollLeft}
                                disabled={scrollIndex === 0}
                                className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors cursor-pointer
                                    ${scrollIndex === 0
                                        ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                        : 'border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2]'
                                    }`}
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={onScrollRight}
                                disabled={scrollIndex >= totalPages - 1}
                                className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors cursor-pointer
                                    ${scrollIndex >= totalPages - 1
                                        ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                        : 'border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2]'
                                    }`}
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Cards Container - 2 columns for both views as requested */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full lg:w-[850px]">
                {displayedDocuments.map((doc) => (
                    <DocumentCard key={doc.id} document={doc} />
                ))}
            </div>
        </div>
    );
}


// --- Main Page Component ---
function StandingOrders() {
    const sectionsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [activeTab, setActiveTab] = useState("All Standing Orders");
    const [scrollIndices, setScrollIndices] = useState<Record<number, number>>({});
    const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({});
    const [searchQuery, setSearchQuery] = useState('');
    const [appliedSearch, setAppliedSearch] = useState('');
    const contentRef = useRef<HTMLDivElement>(null);

    // Filter sections logic
    const filteredSections = sectionsData.filter(section => {
        // 1. Sidebar Filter
        if (activeTab !== "All Standing Orders" && section.title !== activeTab) {
            return false;
        }

        // 2. Search Filter
        if (appliedSearch) {
            const searchLower = appliedSearch.toLowerCase();
            const hasMatchingDocs = section.documents.some(doc =>
                doc.title.toLowerCase().includes(searchLower) ||
                (doc.department && doc.department.toLowerCase().includes(searchLower))
            );
            return hasMatchingDocs;
        }

        return true;
    }).map(section => {
        // Return section with filtered documents if search is active
        if (appliedSearch) {
            const searchLower = appliedSearch.toLowerCase();
            return {
                ...section,
                documents: section.documents.filter(doc =>
                    doc.title.toLowerCase().includes(searchLower) ||
                    (doc.department && doc.department.toLowerCase().includes(searchLower))
                )
            };
        }
        return section;
    });


    // Pagination logic (for sections list)
    const totalPages = Math.ceil(filteredSections.length / sectionsPerPage);
    const startIndex = (currentPage - 1) * sectionsPerPage;
    const visibleSections = filteredSections.slice(startIndex, startIndex + sectionsPerPage);

    // Handlers
    const handleScrollLeft = (sectionId: number) => {
        setScrollIndices(prev => ({
            ...prev,
            [sectionId]: Math.max(0, (prev[sectionId] || 0) - 1)
        }));
    };

    const handleScrollRight = (sectionId: number, totalSectionPages: number) => {
        setScrollIndices(prev => ({
            ...prev,
            [sectionId]: Math.min(totalSectionPages - 1, (prev[sectionId] || 0) + 1)
        }));
    };

    const handleToggleExpand = (sectionId: number) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleApplySearch = () => {
        setAppliedSearch(searchQuery);
        setCurrentPage(1);
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        setAppliedSearch('');
        setCurrentPage(1);
    };

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        setCurrentPage(1);
        setAppliedSearch('');
        setSearchQuery('');
        setScrollIndices({}); // Reset section paginations
        setExpandedSections({});
    };

    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            <Banner
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onApply={handleApplySearch}
                onClear={handleClearSearch}
            />

            <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8 lg:py-12" ref={contentRef}>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                    {/* Left Sidebar */}
                    <div className="w-full lg:w-[250px] shrink-0">
                        <h3 className="text-[18px] font-bold text-gray-800 mb-4 px-2 hidden lg:block">Categories</h3>
                        <Sidebar activeTab={activeTab} onTabClick={handleTabClick} />
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:flex-1">
                        {/* No Results Message */}
                        {filteredSections.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="11" cy="11" r="8" strokeWidth="2" />
                                    <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                <h3 className="text-[20px] font-semibold text-gray-700 mb-2">No Documents Found</h3>
                                <p className="text-[14px] text-gray-500 max-w-[400px]">
                                    {appliedSearch
                                        ? `No documents match your search for "${appliedSearch}".`
                                        : "No documents found in this category."}
                                </p>
                                {appliedSearch && (
                                    <button
                                        onClick={handleClearSearch}
                                        className="mt-6 px-6 py-2 bg-[#0085E2] text-white text-[14px] font-medium rounded-full hover:bg-[#0070C0] transition-colors cursor-pointer"
                                    >
                                        Clear Search
                                    </button>
                                )}
                            </div>
                        )}

                        {/* Sections */}
                        {visibleSections.map((section) => {
                            const totalSectionPages = Math.ceil(section.documents.length / 4);
                            return (
                                <DocumentSection
                                    key={section.id}
                                    section={section}
                                    scrollIndex={scrollIndices[section.id] || 0}
                                    onScrollLeft={() => handleScrollLeft(section.id)}
                                    onScrollRight={() => handleScrollRight(section.id, totalSectionPages)}
                                    isExpanded={activeTab !== "All Standing Orders" ? true : (expandedSections[section.id] || false)}
                                    onToggleExpand={() => handleToggleExpand(section.id)}
                                />
                            );
                        })}

                        {/* Pagination (Page-level for sections) */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-2 mt-8 pt-8 border-t border-gray-100">
                                <button
                                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors cursor-pointer
                                    ${currentPage === 1
                                            ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                            : 'border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2]'
                                        }`}
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full text-[14px] font-medium transition-colors cursor-pointer
                                        ${currentPage === page
                                                ? 'bg-[#0085E2] text-white'
                                                : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors cursor-pointer
                                    ${currentPage === totalPages
                                            ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                            : 'border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2]'
                                        }`}
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StandingOrders;
