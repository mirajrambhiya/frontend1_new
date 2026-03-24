import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
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

const FlyAsh: React.FC = () => {
    // Main Fly Ash Documents (first section)
    const flyAshDocuments = [
        { id: 'fa1', title: "Hosting the information of fly ash generation & utilization by MAHAGENCO, Nagpur for the Month of June-2015", date: "2015-06-30", pdfUrl: "#" },
        { id: 'fa2', title: "fly ash annual 2018-2019 report", date: "2019-03-31", pdfUrl: "#" },
        { id: 'fa3', title: "Office order reg constitution of state level dispute settlement committee under fly ash notification published by MoEF & CC", date: "2020-01-01", pdfUrl: "#" },
        { id: 'fa4', title: "MoEF-Environment (Protection) Amendment Rules, 2021", date: "2021-01-01", pdfUrl: "#" }
    ];

    // Nashik TPS Documents
    const nashikDocuments = [
        { id: 'nashik1', title: "April 2013 - March 2014", date: "2014-03-31", pdfUrl: "#" },
        { id: 'nashik2', title: "April 2014 to November 2014", date: "2014-11-30", pdfUrl: "#" }
    ];

    // Nagpur Documents (individual months)
    const nagpurDocuments = [
        { id: 'nagpur1', title: "Jun2014", date: "2014-06-30", pdfUrl: "#" },
        { id: 'nagpur2', title: "July2014", date: "2014-07-31", pdfUrl: "#" },
        { id: 'nagpur3', title: "Sep2014", date: "2014-09-30", pdfUrl: "#" },
        { id: 'nagpur4', title: "Oct2014", date: "2014-10-31", pdfUrl: "#" },
        { id: 'nagpur5', title: "Nov2014", date: "2014-11-30", pdfUrl: "#" },
        { id: 'nagpur6', title: "Dec2014", date: "2014-12-31", pdfUrl: "#" },
        { id: 'nagpur7', title: "Jan2015", date: "2015-01-31", pdfUrl: "#" },
        { id: 'nagpur8', title: "Feb2015", date: "2015-02-28", pdfUrl: "#" },
        { id: 'nagpur9', title: "March2015", date: "2015-03-31", pdfUrl: "#" }
    ];

    // Guidelines Document (shown below Nagpur section)
    const guidelinesDocument = { id: 'guide1', title: "Guidelines for use of fly ash, bottom ash or pond ash in the manufacture of bricks and other construction activities for utilization of flyash by the Thermal Power Plants.", date: "2020-01-01", pdfUrl: "#" };

    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="Waste Management"
            />

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <Sidebar activeItem="Fly Ash" />

                        {/* Right Content Area */}
                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 pb-4 gap-4">
                                    <h1 className="text-[24px] font-bold text-gray-900">
                                        Fly Ash
                                    </h1>
                                </div>

                                <div className="flex flex-col gap-8">
                                    {/* Main Fly Ash Documents Section */}
                                    <PaginatedSection title="Fly Ash Documents" documents={flyAshDocuments} />

                                    {/* Monthly Record of Ash Utilization Section */}
                                    <div className="mt-12">
                                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                                            <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                                                Monthly Record of Ash Utilization
                                            </h3>
                                        </div>

                                        {/* Nashik TPS Sub-section */}
                                        <PaginatedSection title="Nashik TPS" documents={nashikDocuments} />

                                        {/* Nagpur Sub-section with Guidelines below */}
                                        <PaginatedSection title="Nagpur" documents={nagpurDocuments} />

                                        {/* Guidelines Document Card - below Nagpur pagination */}
                                        <div className="mt-6">
                                            <DocumentCard
                                                document={guidelinesDocument}
                                                wide={false}
                                            />
                                        </div>

                                        {/* Fly Ash Links - inside Nagpur section */}
                                        <div className="flex flex-col gap-4 px-2 mt-6">
                                            <a
                                                href="/waste-management/fly-ash/notification"
                                                className="text-[15px] text-gray-600 hover:text-[#0085E2] font-medium flex items-center gap-2 group transition-colors"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] group-hover:scale-125 transition-transform" />
                                                <a href="http://envfor.nic.in/mef/flyash.html/" >Fly Ash Notification</a>
                                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                            <a
                                                href="/waste-management/fly-ash/notification-implementation"
                                                className="text-[15px] text-gray-600 hover:text-[#0085E2] font-medium flex items-center gap-2 group transition-colors"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] group-hover:scale-125 transition-transform" />
                                                Fly Ash Notification Implementation
                                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Fly Ash Utilization Status Section */}
                                    <div className="mt-12">
                                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                                            <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                                                Fly Ash Utilization Status for the Year 2003 - 2004
                                            </h3>
                                        </div>
                                        <div className="flex flex-col gap-4 px-2">
                                            <a
                                                href="/waste-management/fly-ash/utilization-status-2005-2006"
                                                className="text-[15px] text-gray-600 hover:text-[#0085E2] font-medium flex items-center gap-2 group transition-colors"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] group-hover:scale-125 transition-transform" />
                                                2005-2006
                                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                            <a
                                                href="/waste-management/fly-ash/utilization-status-2004-2005"
                                                className="text-[15px] text-gray-600 hover:text-[#0085E2] font-medium flex items-center gap-2 group transition-colors"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] group-hover:scale-125 transition-transform" />
                                                2004-2005
                                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                            <a
                                                href="/waste-management/fly-ash/utilization-status-2003-2004"
                                                className="text-[15px] text-gray-600 hover:text-[#0085E2] font-medium flex items-center gap-2 group transition-colors"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] group-hover:scale-125 transition-transform" />
                                                2003-2004
                                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                            <a
                                                href="/waste-management/fly-ash/action-plan"
                                                className="text-[15px] text-gray-600 hover:text-[#0085E2] font-medium flex items-center gap-2 group transition-colors"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] group-hover:scale-125 transition-transform" />
                                                Action Plan for Utilization of Fly Ash by Coal Based Thermal Power Plants in Maharashtra
                                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                            <a
                                                href="/waste-management/fly-ash/compliance"
                                                className="text-[15px] text-gray-600 hover:text-[#0085E2] font-medium flex items-center gap-2 group transition-colors"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] group-hover:scale-125 transition-transform" />
                                                Compliance of Order passed by Hon'ble High Court of Judicature at Delhi, dated 25th August, 1999
                                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                            <a
                                                href="/waste-management/fly-ash/utilisation"
                                                className="text-[15px] text-gray-600 hover:text-[#0085E2] font-medium flex items-center gap-2 group transition-colors"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] group-hover:scale-125 transition-transform" />
                                                Affidavit filed on 24th September, 2004 regarding Utilisation of Fly Ash
                                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                            <a
                                                href="http://envfor.nic.in/legis/hsm/flyash.html"
                                                className="text-[15px] text-gray-600 hover:text-[#0085E2] font-medium flex items-center gap-2 group transition-colors"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] group-hover:scale-125 transition-transform" />
                                                Notification in respect of Fly Ash Utilization, dated 14th Sept, 1999
                                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                            <a
                                                href="http://envfor.nic.in/legis/hsm/so979(e).htm"
                                                className="text-[15px] text-gray-600 hover:text-[#0085E2] font-medium flex items-center gap-2 group transition-colors"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] group-hover:scale-125 transition-transform" />
                                                Amendments, dtd 27th Aug, 2003 to notification in respect of Fly Ash Utilization, dated 14th Sept, 1999
                                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FlyAsh;
