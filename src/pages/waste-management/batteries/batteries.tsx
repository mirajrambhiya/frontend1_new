import { useState } from 'react';
import { ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';
import PageBanner from "../../../components/PageBanner";
import Sidebar from "../../../components/Sidebar";
import DocumentCard from '../../../components/DocumentCard';

// Reusable Paginated Section Component
const PaginatedSection = ({ title, documents }: { title: string, documents: any[] }) => {
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
        <div className="mt-12">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                    {title}
                </h3>
                {documents.length > ITEMS_PER_PAGE && (
                    <button
                        onClick={toggleViewAll}
                        className="px-4 py-2 text-sm font-medium text-[#0085E2] bg-blue-50 hover:bg-[#0085E2] hover:text-white cursor-pointer rounded-full transition-all duration-300"
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

const Batteries: React.FC = () => {
    const [isArchive, setIsArchive] = useState(false);

    // Rules / Procedures Documents
    const rulesDocuments = [
        { id: 'rp1', title: "Circular regarding power of batter dealer registration to Sub-Regional Officers of MPCB under Batteries (Management & Handling) Rules, 2001", date: "2001-01-01", pdfUrl: "#" },
        { id: 'rp2', title: "Procedure for Registration for Battery Dealers under Batteries (Management and Handling) Rules, 2001 and amendment thereto", date: "2001-01-01", pdfUrl: "#" },
        { id: 'rp3', title: "Battery Waste Management Rules 2022", date: "2022-01-01", pdfUrl: "#" },
        { id: 'rp4', title: "Battery Waste Management (Amendment) Rules, 2023", date: "2023-01-01", pdfUrl: "#" },
        { id: 'rp5', title: "Battery Waste Management (Amendment) Rules, 2024", date: "2024-01-01", pdfUrl: "#" },
        { id: 'rp6', title: "Battery Waste Management (Amendment) Rules, 2025", date: "2025-01-01", pdfUrl: "#" },
        { id: 'rp7', title: "SOP for EPR Certificate Generation & EPR Targets", date: "2022-01-01", pdfUrl: "#" },
        { id: 'rp8', title: "SOP for Registration of Producers under BWMR 2022", date: "2022-01-01", pdfUrl: "#" },
        { id: 'rp9', title: "SOP for Registration of Recyclers under BWMR 2022", date: "2022-01-01", pdfUrl: "#" },
        { id: 'rp10', title: "SOP for submission of Application for Registration of Producer", date: "2022-01-01", pdfUrl: "#" },
        { id: 'rp11', title: "FAQs for BWMR 2022", date: "2022-01-01", pdfUrl: "#" }
    ];

    // Guidelines Documents
    const guidelinesDocuments = [
        { id: 'gl1', title: "Environmental Compensation (EC) guidelines under BWMR 2022", date: "2022-01-01", pdfUrl: "#" }
    ];

    // Annual Reports Documents
    const annualReportsDocuments = [
        { id: 'ar1', title: "Annual Report 2022-23", date: "2023-03-31", pdfUrl: "#" },
        { id: 'ar2', title: "Annual Report 2021-22", date: "2022-03-31", pdfUrl: "#" },
        { id: 'ar3', title: "Annual Report 2020-21", date: "2021-03-31", pdfUrl: "#" },
        { id: 'ar4', title: "Annual Report 2019-20", date: "2020-03-31", pdfUrl: "#" },
        { id: 'ar5', title: "Annual Report 2018-19", date: "2019-03-31", pdfUrl: "#" }
    ];

    // Archive Documents
    const archiveDocuments = [
        { id: 'arch1', title: "Submission of annual compliance status report for financial year 2022-23 for batteries (Management and handling) amendment rules, 2010 for Maharashtra", date: "2023-03-31", pdfUrl: "#" },
        { id: 'arch2', title: "Submission of annual compliance status report for financial year 2021-22 for batteries (Management and handling) amendment rules, 2010 for Maharashtra", date: "2022-03-31", pdfUrl: "#" },
        { id: 'arch3', title: "Submission of annual compliance status report for financial year 2020-21 for batteries (Management and handling) amendment rules, 2010 for Maharashtra", date: "2021-03-31", pdfUrl: "#" },
        { id: 'arch4', title: "Submission of annual compliance status report for financial year 2019-20 for batteries (Management and handling) amendment rules, 2010 for Maharashtra", date: "2020-03-31", pdfUrl: "#" },
        { id: 'arch5', title: "Submission of annual compliance status report for financial year 2018-19 for batteries (Management and handling) amendment rules, 2010 for Maharashtra", date: "2019-03-31", pdfUrl: "#" },
        { id: 'arch6', title: "Batteries (Management and Handling) Rules, 2001, as amended on 04.05.2010", date: "2010-05-04", pdfUrl: "#" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="Waste Management"
            />

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <Sidebar activeItem="Batteries" />

                        {/* Right Content Area */}
                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                {/* Header & Toggle */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 pb-4 gap-4">
                                    <h1 className="text-[24px] font-bold text-gray-900">
                                        {isArchive ? "Archive: Batteries" : "Batteries"}
                                    </h1>

                                    {/* Toggle Switch */}
                                    <div className="flex items-center bg-gray-100 p-1 rounded-full shrink-0">
                                        <button
                                            onClick={() => setIsArchive(false)}
                                            className={`cursor-pointer px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${!isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Current
                                        </button>
                                        <button
                                            onClick={() => setIsArchive(true)}
                                            className={`cursor-pointer px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Archive
                                        </button>
                                    </div>
                                </div>

                                {!isArchive ? (
                                    <div className="flex flex-col gap-8">
                                        {/* Rules / Procedures Section */}
                                        <PaginatedSection title="Rules / Procedures" documents={rulesDocuments} />

                                        {/* Guidelines Section */}
                                        <PaginatedSection title="Guidelines" documents={guidelinesDocuments} />

                                        {/* Annual Reports Section */}
                                        <PaginatedSection title="Annual Reports" documents={annualReportsDocuments} />

                                        {/* Web Portal Link Section */}
                                        <div className="mt-12">
                                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                                                <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                                                    Web Portal Link
                                                </h3>
                                            </div>
                                            <div className="flex flex-col gap-4 px-2">
                                                <a
                                                    href="https://eprbattery.cpcb.gov.in/login"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[15px] text-gray-600 hover:text-[#0085E2] font-medium flex items-center gap-2 group transition-colors"
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] group-hover:scale-125 transition-transform" />
                                                    Applications for EPR Registrations under Battery Waste Management Rules, 2022 shall be made online on the portal
                                                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        {/* Archive Documents */}
                                        <PaginatedSection title="Archived Documents" documents={archiveDocuments} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Batteries;
