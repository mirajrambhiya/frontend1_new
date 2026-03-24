import { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, X } from 'lucide-react';
import TenderCard from '../../components/TenderCard';
import DocumentCard from '../../components/DocumentCard';

const standingorders = "/assets/standingorders.svg";

// Sample tenders data
const tendersData = [
    {
        id: 1,
        title: "Appointment of Agency for Facility Management and Housekeeping Services at MPCBs Offices and Laboratories across Maharashtra (Tender ID: 2025_MPCB_1260139_1) (Tender Ref. No.: MPCB/EE/04/25)",
        isNew: true,
        documents: [
            { text: "Tender Notice" },
            { text: "Tender Document" },
            { text: "MoM of Pre-bid including Bid Extension" },
            { text: "Pre-Bid Meeting Link (Date : 23/12/2025 at 03:00 PM)" }
        ]
    },
    {
        id: 2,
        title: "Selection of Agency for Ambient Noise Level Monitoring during Ganesh, Diwali Festivals and Other Occasions (Tender Ref. No.: MPCB/JD(APC)/Noise/2025-26) (Tender ID: 2025_MPCB_1205200_1)",
        isNew: true,
        documents: [
            { text: "Tender Notice" },
            { text: "Tender Document" },
            { text: "Corrigendum I" },
            { text: "Minutes of Meeting of Pre-Bid Meeting" },
            { text: "Pre-Bid Meeting Link" }
        ]
    },
    {
        id: 3,
        title: "Appointment of CERT-In Empanelled Agency for Security Audit of IT Infrastructure at MPCB (Tender Ref. No.: 250725-FTS-0043) (Tender ID: 2025_MPCB_1204227_1)",
        isNew: true,
        documents: [
            { text: "Tender Document" },
            { text: "Corrigendum I" },
            { text: "Corrigendum II" },
            { text: "Minutes Of Meeting Of Pre-Bid Meeting" },
            { text: "Technical Bid Opening Meeting Link" }
        ]
    },
    {
        id: 4,
        title: "Supply, Testing, Commissioning and Maintenance of Real-Time Water Quality Monitoring Stations (RTWQMS) in Maharashtra (Tender Reference Number: MPCB/JD(WPC)/RTWQMS/2025-26)",
        isNew: true,
        documents: [
            { text: "Tender Document" },
            { text: "Retender Corrigendum" },
            { text: "Date Extension Corrigendum" },
            { text: "Date Extension Corrigendum 1" },
            { text: "Minutes of Meeting of Pre-Bid" }
        ]
    },
    {
        id: 5,
        title: "Tender for Supply of Laboratory Instruments for Regional Laboratories (Tender Ref No: MPCB/LAB/2025/01)",
        isNew: false,
        documents: [
            { text: "Tender Document" },
            { text: "Clarification on Technical Specs" },
            { text: "Financial Bid Format" }
        ]
    },
    {
        id: 6,
        title: "Empanelment of Consultants for Environmental Impact Assessment (EIA) Studies (Tender Ref: MPCB/EIA/2025/05)",
        isNew: false,
        documents: [
            { text: "EOI Document" },
            { text: "List of Empanelled Agencies" }
        ]
    },
    {
        id: 7,
        title: "Procurement of Air Quality Monitoring Stations (CAAQMS) for 5 Cities (Tender ID: 2025_MPCB_998877_1)",
        isNew: false,
        documents: [
            { text: "Tender Notice" },
            { text: "Technical Specifications" },
            { text: "Pre-bid Meeting Minutes" }
        ]
    },
    {
        id: 8,
        title: "Annual Maintenance Contract for IT Hardware and Networking Equipment (Tender Ref: MPCB/IT/AMC/2025)",
        isNew: false,
        documents: [
            { text: "Tender Document" },
            { text: "Asset List" },
            { text: "Financial Bid" }
        ]
    },
    {
        id: 9,
        title: "Supply of Manpower for Data Entry and Multi-Tasking Staff (Tender Ref: MPCB/HR/2025/12)",
        isNew: false,
        documents: [
            { text: "Tender Document" },
            { text: "Corrigendum I" },
            { text: "Corrigendum II" }
        ]
    },
    {
        id: 10,
        title: "Construction of New Regional Office Building at Nashik (Tender ID: 2025_MPCB_554433_2)",
        isNew: false,
        documents: [
            { text: "Tender Notice" },
            { text: "Civil Drawings" },
            { text: "BOQ" }
        ]
    }
];



// Note: Upcoming page had 10 items per page for a list/table, but for Cards 3x2 (6) or 3x3 (9) is better.
// User said "grid of tender cards of 3 columns pers page".
// I'll stick to 6 items per page (2 rows) to keep it clean, or 9 (3 rows). Let's do 9 to show more content.
// Wait, prompt said "add pagination like in upcoming.tsx". Upcoming.tsx used 10.
// But 10 isn't divisible by 3 (columns). 9 or 12 would be better for a grid.
// I'll use 9 (3x3).

function Tenders() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [appliedQuery, setAppliedQuery] = useState('');
    const itemsPerPage = 9;

    // Filter logic
    const filteredData = tendersData.filter(item =>
        item.title.toLowerCase().includes(appliedQuery.toLowerCase())
    );

    // Pagination calculations
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    const handleApplySearch = () => {
        setAppliedQuery(searchQuery);
        setCurrentPage(1);
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        setAppliedQuery('');
        setCurrentPage(1);
    };

    // Generate page numbers with ellipsis logic
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
                                Tenders
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">

                    {/* Special Document Card */}


                    {/* Heading */}
                    <div className="mb-8 pl-2 border-l-4 border-[#00A3FF]">
                        <h2 className="text-[24px] font-bold text-gray-800">
                            E-Tender submission guidelines for bidders
                        </h2>
                    </div>

                    {/* Search Section */}
                    <div className="flex flex-col md:flex-row md:justify-end mb-8 gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search by title..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full md:w-[300px] pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0085E2] focus:ring-1 focus:ring-[#0085E2] transition-all"
                                onKeyDown={(e) => e.key === 'Enter' && handleApplySearch()}
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                        <button
                            onClick={handleApplySearch}
                            className="px-6 py-2.5 bg-[#0085E2] text-white font-medium rounded-xl hover:bg-[#0070C0] transition-colors shadow-sm cursor-pointer"
                        >
                            Apply
                        </button>
                        <button
                            onClick={handleClearSearch}
                            className="px-6 py-2.5 bg-white text-gray-600 font-medium rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
                        >
                            Clear
                        </button>
                    </div>

                    {/* Tender Cards Grid - 3 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {paginatedData.map((tender) => (
                            <TenderCard
                                key={tender.id}
                                title={tender.title}
                                isNew={tender.isNew}
                                documents={tender.documents}
                            />
                        ))}
                    </div>

                    {/* No Results Message */}
                    {filteredData.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            No tenders found matching your search.
                        </div>
                    )}

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

                    <div className="mb-8 w-full">
                        <DocumentCard
                            document={{
                                id: 999,
                                title: "Letter to DIT , GOM , about Black listing vendor"
                            }}
                            wide={true}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Tenders;
