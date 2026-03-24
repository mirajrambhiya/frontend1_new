import { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import DocumentCard from '../../components/DocumentCard';

const standingorders = "/assets/standingorders.svg";

// Sidebar Data
const sidebarData = [
    {
        title: "Environmental Quality",
        items: ["Air Quality", "Water Quality", "Noise Pollution"]
    },
    {
        title: "Waste Management",
        items: ["Hazardous Waste", "Biomedical Waste", "Solid Waste Management", "Construction and Demolition Waste", "Common Effluent Treatment Plant", "Plastic Waste", "Electronic Waste", "Fly Ash", "Batteries", "End-of-Life Vehicles"]
    },
    {
        title: "Public Hearing",
        items: ["Upcoming Public Hearings", "Archived Public Hearings", "Public Consultation"]
    },
    {
        title: "Public Awareness",
        items: ["Campaigns", "Events", "Newsletters", "Press Releases"]
    },
    {
        title: "Other Links",
        items: ["Important Weblinks", "Related Organizations", "Downloads"]
    }
];

// Reusable Paginated Section Component (Copied from VNITNagpur.tsx)
const PaginatedSection = ({ title, documents }: { title?: string, documents: any[] }) => {
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
        <div className="mt-8">
            <div className={`flex items-center justify-between mb-8 pb-4 ${title ? 'border-b border-gray-100' : ''}`}>
                {title && (
                    <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                        {title}
                    </h3>
                )}
                {documents.length > ITEMS_PER_PAGE && (
                    <button
                        onClick={toggleViewAll}
                        className="px-4 py-2 text-sm font-medium text-[#0085E2] bg-blue-50 hover:bg-[#0085E2] hover:text-white cursor-pointer rounded-full transition-all duration-300 ml-auto"
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

function EMCTraining() {
    const navigate = useNavigate();
    const [expandedCategory, setExpandedCategory] = useState<string | null>("Environmental Quality");
    const [selectedItem, setSelectedItem] = useState<string>("Water Quality");

    const toggleCategory = (category: string) => {
        if (expandedCategory === category) {
            setExpandedCategory(null);
        } else {
            setExpandedCategory(category);
        }
    };

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
        if (item === "Air Quality") {
            navigate({ to: '/environmental-quality/air-quality' });
        } else if (item === "Water Quality") {
            navigate({ to: '/environmental-quality/water-quality' });
        } else if (item === "Noise Pollution") {
            navigate({ to: '/environmental-quality/noise-pollution' });
        } else if (item === "Hazardous Waste") {
            navigate({ to: '/waste-management/hazardous-waste' });
        } else if (item === "Biomedical Waste") {
            navigate({ to: '/waste-management/biomedical-waste' });
        }
    };
    const documents = [
        { id: 'emc1', title: "Water Quality Monitoring – An Introduction.", pdfUrl: "#" },
        { id: 'emc2', title: "Filling Data Gaps, Data validation & Descriptive Statistics.", pdfUrl: "#" },
        { id: 'emc3', title: "Graphs & Plots.", pdfUrl: "#" },
        { id: 'emc4', title: "Data smoothing, Trend analysis and Harmonic analysis of data.", pdfUrl: "#" },
        { id: 'emc5', title: "Bivariate_analysis-correlation regression.", pdfUrl: "#" }
    ];

    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            {/* Top Banner Section */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[280px] rounded-t-[48px] overflow-hidden">
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

                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-6 mt-[-30px]">
                            <h1 className="text-[40px] font-bold text-[#000000] tracking-tight leading-none mb-8">
                                Environmental Quality
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left Sidebar */}
                        <div className="w-full lg:w-[320px] flex-shrink-0">
                            <div className="flex flex-col gap-4">
                                {sidebarData.map((category) => {
                                    const isExpanded = expandedCategory === category.title;
                                    const hasActiveItem = category.items.includes(selectedItem);

                                    return (
                                        <div key={category.title} className="flex flex-col mb-2">
                                            {/* Category Header */}
                                            <div
                                                onClick={() => toggleCategory(category.title)}
                                                className={`flex items-center justify-between px-6 py-4 rounded-xl cursor-pointer transition-all duration-300 z-10 relative group
                                                    ${isExpanded || hasActiveItem
                                                        ? 'bg-linear-to-r from-[#0085E2] to-[#00A3FF] text-white shadow-lg shadow-blue-200 transform scale-[1.02]'
                                                        : 'bg-white hover:bg-gray-50 text-gray-700 hover:text-[#0085E2] border border-gray-100'
                                                    }`}
                                            >
                                                <span className="text-[15px] font-semibold tracking-wide">
                                                    {category.title}
                                                </span>
                                                {isExpanded ? (
                                                    <ChevronUp className={`w-5 h-5 transition-transform duration-300 ${isExpanded || hasActiveItem ? 'text-white' : 'text-gray-400 group-hover:text-[#0085E2]'}`} />
                                                ) : (
                                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded || hasActiveItem ? 'text-white' : 'text-gray-400 group-hover:text-[#0085E2]'}`} />
                                                )}
                                            </div>

                                            {/* Dropdown Items */}
                                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <div className="mx-4 mt-2 mb-4 bg-white border border-gray-100 rounded-xl flex flex-col gap-1 shadow-sm p-2">
                                                    {category.items.map((item) => {
                                                        const isActive = selectedItem === item;
                                                        return (
                                                            <div
                                                                key={item}
                                                                onClick={() => handleItemClick(item)}
                                                                className={`px-4 py-3 rounded-lg cursor-pointer text-[14px] transition-all duration-200 flex items-center justify-between group
                                                                    ${isActive
                                                                        ? 'bg-blue-50 text-[#0085E2] font-semibold translate-x-1'
                                                                        : 'text-gray-600 hover:text-[#0085E2] hover:bg-gray-50 hover:translate-x-1'
                                                                    }`}
                                                            >
                                                                {item}
                                                                {isActive && <ChevronRight className="w-4 h-4 text-[#0085E2]" />}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                <h2 className="text-[20px] font-bold text-gray-900 mb-6 uppercase border-b border-gray-200 pb-4 leading-relaxed">
                                    EMC TRAINING ON WATER QUALITY DATA ANALYSIS AND INTERPRETATION ON 25TH AUGUST, 2010
                                </h2>

                                <PaginatedSection documents={documents} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EMCTraining;
