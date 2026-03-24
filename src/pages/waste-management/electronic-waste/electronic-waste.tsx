
import { useState } from 'react';
import PageBanner from '../../../components/PageBanner';
import Sidebar from '../../../components/Sidebar';
import DocumentCard from '../../../components/DocumentCard';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Reusable Paginated Section Component
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
        <div className="mb-12">
            {(title || documents.length > ITEMS_PER_PAGE) && (
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                    {title ? (
                        <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                            {title}
                        </h3>
                    ) : <div />}
                    {documents.length > ITEMS_PER_PAGE && (
                        <button
                            onClick={toggleViewAll}
                            className="px-4 py-2 text-sm font-medium text-[#0085E2] bg-blue-50 hover:bg-[#0085E2] hover:text-white cursor-pointer rounded-full transition-all duration-300"
                        >
                            {isViewAll ? "Show Less" : "View All"}
                        </button>
                    )}
                </div>
            )}

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

const ElectronicWaste = () => {
    const [isArchive, setIsArchive] = useState(false);

    // Links to be shown above the cards
    const quickLinks = [
        { title: "National Hackathon on E-Waste Reduction", link: "https://mpcb.ecmpcb.in/eWaste/" },
        { title: "Registration of Recyclers/Reprocessors of Hazardous Waste and E-waste", link: "/waste-management/hazardous-waste/registration" },
        { title: "Circulars on E-Waste Management", link: "/waste-management/electronic-waste/circulars" }
    ];

    const authorizedLinks = [
        { title: "Granted Authorization for E-Waste Manufacturer / Refurbisher / Dismantler / Recycler", link: "https://www.ecmpcb.in/ewasteOutwardRegistry" }
    ];

    const relatedLinks = [
        { title: "EPR Authorization and EPR Plans for E-Waste Producers", link: "https://eprewaste.cpcb.gov.in/#/login" }
    ];

    // Remaining Rules/Procedures documents - dates removed
    const rulesProcedures = [
        { id: 'rp2', title: "SOP for grant of Registration to Manufacturer under E-waste Rules 2022", pdfUrl: "#" },
        { id: 'rp3', title: "SOP for grant of Registration to Producer under E-waste Rules 2022", pdfUrl: "#" },
        { id: 'rp4', title: "SOP for grant of Registration to Recycler under E-waste Rules 2022", pdfUrl: "#" },
        { id: 'rp5', title: "SOP for grant of Registration to Re-furbisher under E-waste Rules 2022", pdfUrl: "#" },
        { id: 'rp6', title: "E-Waste Management Rules, 2022 dated 02/11/2022", pdfUrl: "#" },
        { id: 'rp7', title: "E-Waste First Amendment Rules, 2023 dated 30/01/2023", pdfUrl: "#" },
        { id: 'rp8', title: "E-Waste Second Amendment Rules, 2023 dated 25/07/2023", pdfUrl: "#" },
        { id: 'rp9', title: "E-Waste Third Amendment Rules, 2024 dated 08/03/2024", pdfUrl: "#" },
        { id: 'rp10', title: "E-Waste Management Rules 2016", pdfUrl: "#" },
        { id: 'rp11', title: "E-Waste amendment notification 2018", pdfUrl: "#" },
        { id: 'rp14', title: "FAQs for E-Waste Management Rules 2022", pdfUrl: "#" },
    ];

    const authorizedFacilities = [
        { id: 'af1', title: "Updated list of E-waste recyclers / dismantlers/refurbishers", pdfUrl: "#" },
    ];

    const relatedDocuments = [
        { id: 'rd2', title: "Guidelines for implementation of EWASTE RULES 2016", pdfUrl: "#" },
    ];

    const annualReports = [
        { id: 'ar1', title: "Annual Report for 2022-23", pdfUrl: "#" },
        { id: 'ar2', title: "Annual Report for 2021-22", pdfUrl: "#" },
        { id: 'ar3', title: "Annual Report for 2020-21", pdfUrl: "#" },
        { id: 'ar4', title: "Annual Report for 2019-20", pdfUrl: "#" },
        { id: 'ar5', title: "Annual Report for 2018-19", pdfUrl: "#" },
    ];

    // Archive Data
    const archiveQuickLinks = [
        { title: "Minutes of meeting to discuss Management of Electronic Wastes held on 09/05/05 in the chamber of Member Secretary, MPCB, Mumbai.", link: "/waste-management/electronic-waste/minutes-meeting-09-05-05" },
        { title: "Minutes of E-waste Meeting held at MPCB on 22/09/2005", link: "/waste-management/electronic-waste/minutes-meeting-22-09-05" },
        { title: "Office Order for Formation of Expert Group on E-Waste management", link: "/waste-management/electronic-waste/office-order-formation-expert-group" },
        { title: "Indo-German-Swiss Partnership on e-Waste", link: "#" }
    ];

    const archiveRulesProcedures = [
        { id: 'arp1', title: "A National Workshop on Electronic Waste Management", pdfUrl: "#" },
        { id: 'arp2', title: "Presentation on e-Waste", pdfUrl: "#" }
    ];

    const archiveAssessmentReport = [
        { id: 'aar1', title: "Report on Assessment of Electronic Wastes - Part 1", pdfUrl: "#" },
        { id: 'aar2', title: "Report on Assessment of Electronic Wastes - Part 2", pdfUrl: "#" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="Waste Management"
            />

            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <Sidebar activeItem="Waste Management" />

                        {/* Content */}
                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 pb-4 gap-4">
                                    <h1 className="text-[24px] font-bold text-gray-900 uppercase">
                                        {isArchive ? "Archive: " : ""} ELECTRONIC WASTE
                                    </h1>
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

                                <div className="space-y-8">
                                    {/* Custom Rules/Procedures Section */}
                                    <div className="mb-12">
                                        <div className="flex items-center gap-3 mb-6">
                                            <h2 className="text-[20px] font-bold text-gray-800 border-l-4 border-[#0085E2] pl-3">Rules/Procedures</h2>
                                        </div>

                                        {/* Quick Links (Current or Archive) */}
                                        <div className="mb-2 flex flex-col gap-3">
                                            {(isArchive ? archiveQuickLinks : quickLinks).map((item, index) => (
                                                <a
                                                    key={index}
                                                    href={item.link}
                                                    className="flex items-center gap-3 p-4 rounded-xl bg-blue-50/50 hover:bg-blue-50 border border-blue-100/50 hover:border-blue-200 transition-all duration-300 group"
                                                >
                                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#0085E2] group-hover:scale-110 transition-transform flex-shrink-0">
                                                        <ChevronRight className="w-5 h-5" />
                                                    </div>
                                                    <span className="text-[15px] font-medium text-gray-700 group-hover:text-[#0085E2] transition-colors leading-relaxed">
                                                        {item.title}
                                                    </span>
                                                </a>
                                            ))}
                                        </div>

                                        {/* Document Cards with Pagination */}
                                        <PaginatedSection documents={isArchive ? archiveRulesProcedures : rulesProcedures} />
                                    </div>

                                    {/* Authorized Facilities Section - Show only if NOT archive */}
                                    {!isArchive && (
                                        <div className="mb-12">
                                            <div className="flex items-center gap-3 mb-6">
                                                <h2 className="text-[20px] font-bold text-gray-800 border-l-4 border-[#0085E2] pl-3">Authorized E-Waste Facilities in State</h2>
                                            </div>

                                            <div className="mb-2 flex flex-col gap-3">
                                                {authorizedLinks.map((item, index) => (
                                                    <a
                                                        key={index}
                                                        href={item.link}
                                                        className="flex items-center gap-3 p-4 rounded-xl bg-blue-50/50 hover:bg-blue-50 border border-blue-100/50 hover:border-blue-200 transition-all duration-300 group"
                                                    >
                                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#0085E2] group-hover:scale-110 transition-transform">
                                                            <ChevronRight className="w-5 h-5" />
                                                        </div>
                                                        <span className="text-[15px] font-medium text-gray-700 group-hover:text-[#0085E2] transition-colors">
                                                            {item.title}
                                                        </span>
                                                    </a>
                                                ))}
                                            </div>

                                            <PaginatedSection documents={authorizedFacilities} />
                                        </div>
                                    )}

                                    {/* Related Documents Section - Show only if NOT archive */}
                                    {!isArchive && (
                                        <div className="mb-12">
                                            <div className="flex items-center gap-3 mb-6">
                                                <h2 className="text-[20px] font-bold text-gray-800 border-l-4 border-[#0085E2] pl-3">Related Documents</h2>
                                            </div>

                                            <div className="mb-2 flex flex-col gap-3">
                                                {relatedLinks.map((item, index) => (
                                                    <a
                                                        key={index}
                                                        href={item.link}
                                                        className="flex items-center gap-3 p-4 rounded-xl bg-blue-50/50 hover:bg-blue-50 border border-blue-100/50 hover:border-blue-200 transition-all duration-300 group"
                                                    >
                                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#0085E2] group-hover:scale-110 transition-transform">
                                                            <ChevronRight className="w-5 h-5" />
                                                        </div>
                                                        <span className="text-[15px] font-medium text-gray-700 group-hover:text-[#0085E2] transition-colors">
                                                            {item.title}
                                                        </span>
                                                    </a>
                                                ))}
                                            </div>

                                            <PaginatedSection documents={relatedDocuments} />
                                        </div>
                                    )}

                                    {/* Report on Assessment of Electronic Wastes Section - Show only if IS archive */}
                                    {isArchive && (
                                        <div className="mb-12">
                                            <div className="flex items-center gap-3 mb-6">
                                                <h2 className="text-[20px] font-bold text-gray-800 border-l-4 border-[#0085E2] pl-3">Report on Assessment of Electronic Wastes in Mumbai-Pune Area</h2>
                                            </div>
                                            <PaginatedSection documents={archiveAssessmentReport} />
                                        </div>
                                    )}

                                    {/* Web Portal Link Section - Only show in current view */}
                                    {!isArchive && (
                                        <div className="mb-12">
                                            <div className="flex items-center gap-3 mb-6">
                                                <h2 className="text-[20px] font-bold text-gray-800 border-l-4 border-[#0085E2] pl-3">Web Portal Link</h2>
                                            </div>
                                            <a
                                                href="https://eprewastecpcb.in/#"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#0085E2] hover:underline hover:text-blue-700 transition-colors text-[15px] font-medium block"
                                            >
                                                Applications for EPR Registrations under E-Waste Management Rules, 2022 shall be made online on the EPR portal
                                            </a>
                                        </div>
                                    )}

                                    {!isArchive && <PaginatedSection title="E-waste Annual Report" documents={annualReports} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ElectronicWaste;
