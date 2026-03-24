import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DocumentCard from './DocumentCard';

const standingorders = "/assets/standingorders.svg";

// Mock Data for Document Cards
const mockDocuments = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    title: `Amended Consent for Thermal Power Plant Unit ${i + 1}`,
    date: new Date(2025, 0, i + 1).toLocaleDateString('en-GB'), // varying dates
    pdfUrl: "#"
}));

const ITEMS_PER_PAGE = 9; // 3 columns * 3 rows

function AmendedConsents() {
    const [currentPage, setCurrentPage] = useState(1);

    // Pagination Logic
    const totalPages = Math.ceil(mockDocuments.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedDocuments = mockDocuments.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Pagination Renderer (Reused logic)
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
        <div className="font-family-helvetica min-h-screen bg-white">
            {/* Top Banner Section - RTI Style */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[280px] rounded-t-[30px] md:rounded-t-[48px] overflow-hidden">
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
                            <h1 className="text-[24px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-tight mb-4 md:mb-8 drop-shadow-sm">
                                Amended Consents of Coal based Thermal Power Plants
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">

                    {/* Grid Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {paginatedDocuments.map((doc) => (
                            <DocumentCard
                                key={doc.id}
                                document={doc}
                                wide={false}
                            />
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-gray-100">
                            {currentPage > 2 && (
                                <button onClick={() => handlePageChange(1)} className="px-3 py-2 text-[13px] text-gray-600 hover:text-[#0085E2] transition-colors cursor-pointer">
                                    First
                                </button>
                            )}
                            {currentPage > 1 && (
                                <button onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer">
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                            )}
                            {getPageNumbers(currentPage, totalPages).map((page, index) => (
                                page === '...' ? (
                                    <span key={`ellipsis-${index}`} className="px-2 text-gray-400">...</span>
                                ) : (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page as number)}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full text-[14px] font-medium transition-colors cursor-pointer
                                            ${currentPage === page ? 'bg-[#0085E2] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                                    >
                                        {page}
                                    </button>
                                )
                            ))}
                            {currentPage < totalPages && (
                                <button onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer">
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            )}
                            {currentPage < totalPages - 1 && (
                                <button onClick={() => handlePageChange(totalPages)} className="px-3 py-2 text-[13px] text-gray-600 hover:text-[#0085E2] transition-colors cursor-pointer">
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

export default AmendedConsents;
