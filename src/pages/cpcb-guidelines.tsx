import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DocumentCard from '../components/DocumentCard';
const bannerImage = "/assets/standingorders.svg";

// Reusable Paginated Section Component (Local definition for 3 columns)
const PaginatedSection = ({ documents }: { documents: any[] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6; // 3 columns * 2 rows

    const totalPages = Math.ceil(documents.length / ITEMS_PER_PAGE);

    // Determine which documents to show
    const currentDocuments = documents.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {currentDocuments.map((doc) => (
                    <DocumentCard
                        key={doc.id}
                        document={doc}
                        wide={false}
                    />
                ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
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

const CPCBGuidelines = () => {
    const guidelines = [
        { id: 'g1', title: "Environmental Guidelines for poultry farms in light of Hon'ble NGT order dated 10.12.2021 in the matter of O.A. No. 320/2021 of Gauri Maulekhi Vs. Union of India &Ors", date: "", pdfUrl: "#" },
        { id: 'g2', title: "Guidelines for Environmental Management of Dairy Farms and Gaushalas", date: "", pdfUrl: "#" },
        { id: 'g3', title: "Mecahnism/Guidelines for Control of Pollution and Enforcement of Environment Norms Area/Cluster of Restaurants/Hotels/Motels/Banquetsat", date: "", pdfUrl: "#" },
        { id: 'g4', title: "\"Environmental Guidelines for Poultry Farms\" as per order passed by Hon'ble NGT on 16.09.2020 in the matter of O.A. No. 681 of 2017 – reg", date: "", pdfUrl: "#" },
        { id: 'g5', title: "\" Environmental Guidelines for Poultry Farms\"", date: "", pdfUrl: "#" },
        { id: 'g6', title: "Implementation of revised guidelines for immersion of idols", date: "", pdfUrl: "#" },
        { id: 'g7', title: "Idol Immersion CPCB", date: "", pdfUrl: "#" },
        { id: 'g8', title: "Revised  Guidelines For Idol Immersion By CPCB", date: "", pdfUrl: "#" },
        { id: 'g9', title: "Regarding the effective implementation of the order by the nagpur high court for Idol Immersion", date: "", pdfUrl: "#" }
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
                                CPCB Guidelines
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="rounded-[24px] p-4 md:p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                <h2 className="text-[20px] md:text-[24px] font-bold text-gray-900 border-b border-gray-200 pb-4 mb-6 uppercase">
                                    Guidelines
                                </h2>
                                <PaginatedSection documents={guidelines} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CPCBGuidelines;
