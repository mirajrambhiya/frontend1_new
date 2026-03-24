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

            {/* Show pagination always as requested for styling, or conditional check */}
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
        </div>
    );
};

function TechnicalCommitteeByProducts() {
    const [selectedTab, setSelectedTab] = useState(sidebarTabs[0]);

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const circulars = [
        { id: 'c1', title: "Revised Constitution of committee for verification of by-products and hazardous waste mentioned in the consent issued earlier", date: "2022-05-06", pdfUrl: "#" },
        { id: 'c2', title: "Guidelines for identification of materials generated from industrial processes as wastes or by-products", date: "2019-03-12", pdfUrl: "#" }, // corrected "indentification" typo
        { id: 'c3', title: "Constitution of committee for verification of by-products and hazardous waste mentioned in the consent issued earlier", date: "2019-03-12", pdfUrl: "#" }
    ];

    const agendaData = [
        { srNo: "1", date: "27/01/2025", agenda: "Agenda of 3rd Committee Meeting (2024-2025)", minutes: "Minutes of 3rd Committee Meeting (2024-2025)" },
        { srNo: "2", date: "23/08/2024", agenda: "Agenda of 2nd Committee Meeting (2024-2025)", minutes: "Minutes of 2nd Committee Meeting (2024-2025)" },
        { srNo: "3", date: "20/06/2024", agenda: ["Agenda 1 for 1st Committee Meeting (2024-2025)", "Agenda 2 for 1st Committee Meeting (2024-2025)"], minutes: "Minutes for 1st Committee Meeting (2024-2025)" },
        { srNo: "4", date: "30/01/2024", agenda: "Agenda for 2nd Committee Meeting (2023-24)", minutes: "Minutes for 2nd Committee Meeting (2023-24)" },
        { srNo: "5", date: "18/10/2023", agenda: "Agenda for 1st Committee Meeting (2023-24)", minutes: "Minutes for 1st Committee Meeting (2023-24)" },
        { srNo: "6", date: "15/12/2022", agenda: "Agenda for 2nd Committee Meeting of 2022-23,for By-Products and Hazardous waste categorization", minutes: "Minutes for 2nd Committee Meeting of 2022-23,for By-Products and Hazardous waste categorization" },
        { srNo: "7", date: "12/08/2022", agenda: "Agenda for 1st Committee Meeting of 2022-23,for By-Products and Hazardous waste categorization", minutes: "Minutes for 1st Committee Meeting of 2022-23,for By-Products and Hazardous waste categorization" },
        { srNo: "8", date: "02/09/2021", agenda: "Agenda for 4th Committee Meeting,for By-Products and Hazardous waste categorization", minutes: "Minutes for 4th Committee Meeting,for By-Products and Hazardous waste categorization" },
        { srNo: "9", date: "25/05/2021 & 29/05/2021", agenda: "Agenda for 3rd Committee Meeting,for By-Products and Hazardous waste categorization", minutes: "Minutes for 3rd Committee Meeting,for By-Products and Hazardous waste categorization" },
        { srNo: "10", date: "16/12/2020", agenda: "Agenda for 2nd Committee Meeting,for By-Products and Hazardous waste categorization", minutes: "Minutes for 2nd Committee Meeting,for By-Products and Hazardous waste categorization" },
        { srNo: "11", date: "22/06/2020", agenda: "Agenda for 1st Committee Meeting,for By-Products and Hazardous waste categorization", minutes: "Minutes for 1st Committee Meeting,for By-Products and Hazardous waste categorization" },
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
                                Technical Committee for By-Products and Hazardous Waste Categorization
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
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-gray-700 w-16">Sr.No.</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-gray-700 w-32">Date</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-gray-700">Agenda</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-gray-700">Minutes</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {agendaData.map((row, idx) => (
                                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.srNo}</td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-700 align-top font-medium">{row.date}</td>
                                                            <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top">
                                                                {Array.isArray(row.agenda) ? (
                                                                    <div className="flex flex-col gap-1">
                                                                        {row.agenda.map((item, i) => (
                                                                            <a key={i} href="#" className="hover:underline block">{item}</a>
                                                                        ))}
                                                                    </div>
                                                                ) : (
                                                                    <a href="#" className="hover:underline">{row.agenda}</a>
                                                                )}
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

export default TechnicalCommitteeByProducts;
