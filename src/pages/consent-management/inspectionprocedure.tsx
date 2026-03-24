import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DocumentCard from '../../components/DocumentCard';

const standingorders = "/assets/standingorders.svg";

// Inspection Procedure documents data
const inspectionProcedureData = [
    {
        id: 1,
        title: "Standard Operating Procedure for Industrial Inspection",
        department: "Compliance Division",
        date: "15/01/2025"
    },
    {
        id: 2,
        title: "Guidelines for Environmental Audit Inspection",
        department: "Environmental Division",
        date: "10/01/2025"
    },
    {
        id: 3,
        title: "Protocol for Hazardous Waste Inspection",
        department: "Hazardous Waste Division",
        date: "05/01/2025"
    },
    {
        id: 4,
        title: "Water Quality Inspection Procedure Manual",
        department: "Water Quality Division",
        date: "28/12/2024"
    },
    {
        id: 5,
        title: "Air Quality Monitoring Inspection Guidelines",
        department: "Air Quality Division",
        date: "20/12/2024"
    },
    {
        id: 6,
        title: "Consent Verification Inspection Process",
        department: "Consent Division",
        date: "15/12/2024"
    },
    {
        id: 7,
        title: "Industrial Effluent Discharge Inspection Checklist",
        department: "Compliance Division",
        date: "10/12/2024"
    },
    {
        id: 8,
        title: "Construction Project Site Inspection Procedure",
        department: "Environmental Division",
        date: "05/12/2024"
    },
    {
        id: 9,
        title: "Mining Operations Inspection Guidelines",
        department: "Mining Division",
        date: "01/12/2024"
    },
    {
        id: 10,
        title: "Bio-Medical Waste Management Inspection Protocol",
        department: "Hazardous Waste Division",
        date: "25/11/2024"
    },
    {
        id: 11,
        title: "E-Waste Handling Facility Inspection Procedure",
        department: "Waste Management Division",
        date: "20/11/2024"
    },
    {
        id: 12,
        title: "Noise Pollution Control Inspection Guidelines",
        department: "Noise Control Division",
        date: "15/11/2024"
    },
    {
        id: 13,
        title: "Common Effluent Treatment Plant Inspection Manual",
        department: "Water Quality Division",
        date: "10/11/2024"
    },
    {
        id: 14,
        title: "Sugar Industry Inspection Procedure",
        department: "Industry Specific Division",
        date: "05/11/2024"
    },
    {
        id: 15,
        title: "Thermal Power Plant Inspection Guidelines",
        department: "Power Sector Division",
        date: "01/11/2024"
    }
];

const ITEMS_PER_PAGE = 6; // 3 columns x 2 rows

function InspectionProcedure() {
    const [currentPage, setCurrentPage] = useState(1);

    // Pagination calculations
    const totalPages = Math.ceil(inspectionProcedureData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedData = inspectionProcedureData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
                <div className="w-full max-w-[1282px] px-0 md:px-4">
                    <div className="relative w-full h-[200px] md:h-[280px] md:rounded-t-[48px] overflow-hidden">
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

                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-6 mt-[-20px] md:mt-[-30px]">
                            <h1 className="text-[28px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-tight mb-4 md:mb-8">
                                Inspection Procedure
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full flex justify-center bg-white py-8 md:py-12">
                <div className="w-full max-w-[1282px] px-4">
                    {/* Results count */}
                    <div className="mb-6 text-[14px] text-gray-500">
                        Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, inspectionProcedureData.length)} of {inspectionProcedureData.length} document{inspectionProcedureData.length !== 1 ? 's' : ''}
                    </div>

                    {/* Document Cards Grid - Responsive columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {paginatedData.map((doc) => (
                            <DocumentCard
                                key={doc.id}
                                document={{
                                    id: doc.id,
                                    title: doc.title,
                                    department: doc.department,
                                    date: doc.date
                                }}
                                wide={false}
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
            </section>
        </div>
    );
}

export default InspectionProcedure;
