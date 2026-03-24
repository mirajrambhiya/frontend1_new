import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AboutUsBanner from '../AboutUs';
import Banner from '../navbanner-aboutus';
import DocumentCard from '../../components/DocumentCard';
// Placeholder or reuse existing image for consistency

const MPCBEmployees = () => {
    const documents = [
        { id: '1', title: "Certificate of experience for emergency medical treatment", date: "", pdfUrl: "#" },
        { id: '2', title: "Nomination for death-cum-retirement gratuity", date: "", pdfUrl: "#" },
        { id: '3', title: "Affidavit of women for medical reimbursment", date: "", pdfUrl: "#" },
        { id: '4', title: "Proforma for acknowledging the receipt of the Nomination Form by the Head of Office/ Audit Officer", date: "", pdfUrl: "#" },
        { id: '5', title: "Group Insurance Scheme Nomination", date: "", pdfUrl: "#" },
        { id: '6', title: "Details of Family", date: "", pdfUrl: "#" },
        { id: '7', title: "Home Town Declaration", date: "", pdfUrl: "#" },
        { id: '8', title: "CPF Withdrawal Advance FORM", date: "", pdfUrl: "#" },
        { id: '9', title: "CPF Admission Nomination FORM", date: "", pdfUrl: "#" },
        { id: '10', title: "MPCB CPF Rule-1979", date: "", pdfUrl: "#" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6; // 3 columns * 2 rows

    const totalPages = Math.ceil(documents.length / ITEMS_PER_PAGE);

    const currentDocuments = documents.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

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
        <>
            <AboutUsBanner />
            <Banner bannerSection="mpcbemployees" />

            <section className="w-full flex justify-center py-16 bg-white font-family-helvetica">
                <div className="w-full max-w-[1282px] px-4 flex gap-12">

                    {/* --- RIGHT MAIN CONTENT --- */}
                    <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-white rounded-[24px] border border-gray-100 p-4 md:p-8 shadow-sm min-h-[400px]">
                            <h2 className="text-[20px] md:text-[24px] font-bold text-gray-800 mb-8 border-b border-gray-100 pb-4 uppercase tracking-wide">
                                MPCB EMPLOYEES
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {currentDocuments.map((doc) => (
                                    <DocumentCard
                                        key={doc.id}
                                        document={doc}
                                        wide={false}
                                    />
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default MPCBEmployees;
