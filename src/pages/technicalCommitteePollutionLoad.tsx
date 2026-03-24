import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DocumentCard from '../components/DocumentCard';

const bannerImage = "/assets/standingorders.svg"; // Reusing RTS banner image as requested style

const sidebarTabs = [
    "Important Circular",
    "Agenda and Minutes"
];

// Reusable Paginated Section Component (Local definition for this page)
const PaginatedSection = ({ documents }: { documents: any[] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 4; // 2 rows * 2 columns

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

function TechnicalCommitteePollutionLoad() {
    const [selectedTab, setSelectedTab] = useState(sidebarTabs[0]);

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const circulars = [
        { id: 'c1', title: "Standard Operating process for obtaining permission for changes in product-mix under the EIA notification dated 02nd march 2021", date: "2021-07-14", pdfUrl: "#" },
        { id: 'c2', title: "Constitution of expert TECHNICAL COMMITEE , for certification about \"No INCREASE IN POLLUTION LOAD\" for getting exemption from going through the entire EIA process", date: "2019-08-20", pdfUrl: "#" },
        { id: 'c3', title: "Office memorandum for Procedure for obtaining permission for change in product-mix under the EIA Notification dated 23rd November, 2016", date: "2017-07-11", pdfUrl: "#" },
        { id: 'c4', title: "Office Memorandum for Empanelment of Environmental Auditors as per the Amendment to EIA Notification of MoEF & CC dated 23.11.2016", date: "2017-07-11", pdfUrl: "#" },
        { id: 'c5', title: "Modified OM for Constitution of expert TECHNICAL COMMITTEE, for certification about \"NO INCREASE IN POLLUTION LOAD\" for getting exemption from going through the entire EIA process", date: "2017-07-10", pdfUrl: "#" },
        { id: 'c6', title: "Office memorandum for constitution of expert TECHNICAL COMMITTEE, for certification about \"NO INCREASE IN POLLUTION LOAD\" for getting exemption from going through the entire EIA process", date: "2017-06-16", pdfUrl: "#" },
        { id: 'c7', title: "MoEF & CC Notification for change in product-mix\" dated 23.11.2016", date: "2016-11-23", pdfUrl: "#" }
    ];

    const agendaData = [
        { date: "24/04/2025", agenda: "1st Technical Committee meeting (2025-26)", minutes: "1st Technical Committee meeting (2025-26)" },
        { date: "18/02/2025", agenda: "6th Technical Committee meeting (2024-25)", minutes: "6th Technical Committee meeting (2024-25)" },
        { date: "30/12/2024", agenda: "5th Technical Committee meeting (2024-25)", minutes: "5th Technical Committee meeting (2024-25)" },
        { date: "25/10/2024", agenda: "4thTechnical Committee meeting (2024-25)", minutes: "4th Technical Committee meeting (2024-25)" },
        { date: "16/08/2024", agenda: "3rd Technical Committee meeting (2024-25)", minutes: "3rd Technical Committee meeting (2024-25)" },
        { date: "19/06/2024", agenda: "2nd meeting of Technical Committee (2024-25)", minutes: "2nd meeting of Technical Committee (2024-25)" },
        { date: "03/05/2024", agenda: "1st meeting of Technical Committee (2024-25)", minutes: "1st meeting of Technical Committee (2024-25)" },
        { date: "06/03/2024", agenda: "6th Technical Committee Meeting 2023-2024", minutes: "6th Technical Committee Meeting 2023-2024" },
        { date: "31/01/2024", agenda: "5th Technical Committee Meeting 2023-2024", minutes: "5th Technical Committee Meeting 2023-2024" },
        { date: "28/11/2023", agenda: "4th Technical Committee Meeting 2023-2024", minutes: "4th Technical Committee Meeting 2023-2024" },
        { date: "06/09/2023", agenda: "3rd Technical Committee Meeting 2023-2024", minutes: "3rd Technical Committee Meeting 2023-2024" },
        { date: "09/06/2023", agenda: "2nd Technical Committee meeting 2023-2024", minutes: "2nd Technical Committee meeting 2023-2024" },
        { date: "09/06/2023", agenda: "1st Technical Committee meeting 2023-2024 (2nd Sitting)", minutes: "1st Technical Committee meeting 2023-2024 (2nd Sitting)" },
        { date: "26/04/2023", agenda: "1st Technical Committee meeting 2023-2024", minutes: "1st Technical Committee meeting 2023-2024" },
        { date: "26/04/2023", agenda: "4th Technical Committee meeting 2022-2023 - 2nd Sitting", minutes: "4th Technical Committee meeting 2022-2023 - 2nd Sitting" },
        { date: "10/03/2023", agenda: "4th Technical Committee meeting 2022-2023", minutes: "4th Technical Committee meeting 2022-2023" },
        { date: "12/12/2022", agenda: "3rd Technical Committee meeting 2022-2023", minutes: "3rd Technical Committee meeting 2022-2023" },
        { date: "25/08/2022", agenda: "2nd Technical Committee meeting 2022-2023 (2nd Sitting)", minutes: "2nd Technical Committee meeting 2022-2023 (2nd Sitting)" },
        { date: "18/08/2022", agenda: "2nd Technical Committee meeting 2022-2023 (1st Sitting)", minutes: "2nd Technical Committee meeting 2022-2023 (1st Sitting)" },
        { date: "31/07/2021", agenda: "1st Technical Committee Meeting Agenda 2021-22", minutes: "1st Technical Committee Meeting Minutes 2021-22" },
        { date: "31/10/2020", agenda: "6th Technical Committee Meeting 2020-21", minutes: "6th Technical Committee Meeting 2020-21" },
        { date: "25/07/2020", agenda: "5th Technical Committee Meeting 2020-21", minutes: "5th Technical Committee Meeting 2020-21" },
        { date: "27/11/2019", agenda: "3rd Technical Committee Meeting 2019-20", minutes: "3rd Technical Committee Meeting 2019-20" },
        { date: "20/06/2019", agenda: "1st Technical Committee Meeting 2019-20", minutes: "1st Technical Committee Meeting 2019-20" },
        { date: "27/03/2019", agenda: "6th Technical Committee Meeting Agenda", minutes: "6th Technical Committee Meeting Minutes" },
        { date: "17/01/2019", agenda: "5th Technical Committee Meeting Agenda", minutes: "5th Technical Committee Meeting Minutes" },
        { date: "06/10/2018", agenda: "4th Technical Committee Meeting Agenda", minutes: "4th Technical Committee Meeting Minutes" },
        { date: "17/02/2018", agenda: "4th Technical Committee Meeting Agenda", minutes: "4th Technical Committee Meeting Minutes" },
        { date: "30/06/2018", agenda: "3rd Technical Committee Meeting Agenda", minutes: "3rd Technical Committee Meeting Minutes" },
        { date: "19/05/2018", agenda: "2nd Technical Committee Meeting Agenda", minutes: "2nd Technical Committee Meeting Minutes" },
        { date: "21/04/2018", agenda: "1st Technical Committee Meeting Agenda", minutes: "1st Technical Committee Meeting Minutes" }
    ];

    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            {/* Top Banner Section - RTS Style */}
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

                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-30px]">
                            <h1 className="text-[28px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-none mb-8 max-w-[900px]">
                                Technical Committee for certification of no increase in pollution load
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Left Sidebar */}
                        <div className="w-full lg:w-[320px] flex-shrink-0">
                            <div className="flex flex-col gap-4">
                                {sidebarTabs.map((tab) => {
                                    const isActive = selectedTab === tab;
                                    return (
                                        <div
                                            key={tab}
                                            onClick={() => handleTabClick(tab)}
                                            className={`flex items-center justify-between px-6 py-5 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-200
                                                ${isActive
                                                    ? 'border-2 border-[#00A3FF] bg-[#00A3FF]/5'
                                                    : 'border border-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF]'
                                                }`}
                                        >
                                            <span className={`text-[14px] font-normal transition-colors duration-200 ${isActive ? 'text-[#00A3FF] font-medium' : 'text-gray-800'}`}>
                                                {tab}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1">
                            <div className="rounded-[24px] p-4 md:p-8 min-h-[400px]">
                                <h2 className="text-[24px] font-semibold text-gray-800 mb-6 border-b border-gray-100 pb-4 uppercase">
                                    {selectedTab}
                                </h2>

                                {/* Content */}
                                {selectedTab === "Important Circular" ? (
                                    <PaginatedSection documents={circulars} />
                                ) : selectedTab === "Agenda and Minutes" ? (
                                    <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto shadow-sm">
                                        <div className="min-w-[800px]">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200 bg-gray-50">
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-gray-900 w-32">Date</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-gray-900">Agenda</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-gray-900">Minutes</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {agendaData.map((row, idx) => (
                                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="py-4 px-4 text-[13px] text-gray-700 align-top font-medium whitespace-nowrap">{row.date}</td>
                                                            <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top">
                                                                <a href="#" className="hover:underline">{row.agenda}</a>
                                                            </td>
                                                            <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top">
                                                                <a href="#" className="hover:underline">{row.minutes}</a>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-[14px] text-gray-700 leading-relaxed">
                                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 flex flex-col items-center justify-center min-h-[200px] text-center">
                                            <p className="text-gray-500 italic">Content for "{selectedTab}" is currently unavailable.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TechnicalCommitteePollutionLoad;
