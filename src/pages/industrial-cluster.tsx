import { useState } from 'react';
import { ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';
import DocumentCard from '../components/DocumentCard';

const standingorders = "/assets/standingorders.svg";

// Reusable Paginated Section Component (Local definition)
const PaginatedSection = ({ documents }: { documents: any[] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isViewAll, setIsViewAll] = useState(false);
    const ITEMS_PER_PAGE = 10;

    const totalPages = Math.ceil(documents.length / ITEMS_PER_PAGE);

    const currentDocuments = isViewAll
        ? documents
        : documents.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const toggleViewAll = () => {
        setIsViewAll(!isViewAll);
        setCurrentPage(1);
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
            <div className="flex justify-end mb-4">
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

            {!isViewAll && totalPages > 1 && (
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

function IndustrialCluster() {
    const sidebarTabs = [
        "Pimpri Chinchwad",
        "Nashik",
        "Chembur",
        "Mahad",
        "Chandrapur",
        "Dombivali",
        "Aurangabad",
        "Navi-Mumbai",
        "Tarapur"
    ];

    const [selectedTab, setSelectedTab] = useState(sidebarTabs[0]);
    const [expandedTab, setExpandedTab] = useState<string | null>(null);

    const handleTabClick = (tab: string | any, isDropdown = false) => {
        const tabName = typeof tab === 'string' ? tab : tab.title;

        if (isDropdown) {
            setExpandedTab(expandedTab === tabName ? null : tabName);
        } else {
            setSelectedTab(tabName);
            setExpandedTab(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="font-family-helvetica">
            {/* Top Banner Section */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[280px] rounded-t-[24px] md:rounded-t-[48px] overflow-hidden">
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

                        <div className="relative z-50 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-30px]">
                            <h1 className="text-[28px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-tight mb-8">
                                Details of Industrial Cluster 2023
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
                                {sidebarTabs.map((tab: any) => {
                                    const isDropdown = typeof tab === 'object';
                                    const tabName = isDropdown ? tab.title : tab;
                                    const isActive = selectedTab === tabName || (isDropdown && tab.subItems.includes(selectedTab));
                                    const isExpanded = expandedTab === tabName;

                                    return (
                                        <div key={tabName} className="flex flex-col">
                                            <div
                                                onClick={() => handleTabClick(tab, isDropdown)}
                                                className={`flex items-center justify-between px-6 py-5 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-200
                                                    ${isActive
                                                        ? 'border-2 border-[#00A3FF] bg-[#00A3FF]/5'
                                                        : 'border border-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF]'
                                                    }`}
                                            >
                                                <span className={`text-[14px] font-normal transition-colors duration-200 ${isActive ? 'text-[#00A3FF] font-medium' : 'text-gray-800'}`}>
                                                    {tabName}
                                                </span>
                                                {isDropdown && (
                                                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#00A3FF]' : 'text-gray-400'}`} />
                                                )}
                                            </div>

                                            {isDropdown && (
                                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                                    <div className="flex flex-col gap-1 pl-4">
                                                        {tab.subItems.map((subItem: string) => (
                                                            <div
                                                                key={subItem}
                                                                onClick={() => {
                                                                    setSelectedTab(subItem);
                                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                                }}
                                                                className={`px-5 py-3 rounded-[15px] cursor-pointer text-[13px] transition-all duration-200 flex items-center gap-2
                                                                    ${selectedTab === subItem
                                                                        ? 'bg-blue-50 text-[#0085E2] font-medium pl-6'
                                                                        : 'text-gray-600 hover:text-[#0085E2] hover:bg-gray-50'
                                                                    }`}
                                                            >
                                                                {selectedTab === subItem && <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2]" />}
                                                                {subItem}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1">
                            <div className="rounded-[24px] p-4 md:p-8 min-h-[400px]">
                                <h2 className="text-[20px] md:text-[24px] font-semibold text-gray-800 mb-6 uppercase border-b border-gray-200 pb-4 tracking-wide">
                                    {selectedTab}
                                </h2>

                                {selectedTab === "Pimpri Chinchwad" ? (
                                    <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto shadow-sm">
                                        <div className="min-w-[800px]">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200 bg-gray-50">
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black border-r border-gray-200 w-1/3">Region</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black border-r border-gray-200 w-1/3">Office Memorandum issued by MoEF , Govt. of India</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black w-1/3">Regions Present status Report of CEPI</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                                        <td rowSpan={2} className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <a href="#" className="hover:underline">Pimpri Chinchwad- Action Plan for industrial Cluster</a>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top border-r border-gray-200"></td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top"></td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <div className="mb-1 text-gray-700">CEPI Action Plan Meeting Minutes</div>
                                                            <a href="#" className="hover:underline block">select minutes 10/12/2019</a>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : selectedTab === "Nashik" ? (
                                    <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto shadow-sm">
                                        <div className="min-w-[800px]">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200 bg-gray-50">
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black border-r border-gray-200 w-1/3">Region</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black border-r border-gray-200 w-1/3">Office Memorandum issued by MoEF , Govt. of India</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black w-1/3">Regions Present status Report of CEPI</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                                        <td rowSpan={2} className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <div className="flex flex-col gap-2">
                                                                <a href="#" className="hover:underline">Nashik- Action Plan for industrial Cluster</a>
                                                                <a href="#" className="hover:underline">Nashik-Revised Action Plan for industrial Cluster</a>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top border-r border-gray-200"></td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top"></td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <div className="mb-1 text-black font-semibold">CEPI Action Plan Meeting Minutes</div>
                                                            <div className="mb-1 text-gray-700">select minutes</div>
                                                            <div className="flex flex-col gap-1">
                                                                <a href="#" className="hover:underline">17/10/2023</a>
                                                                <a href="#" className="hover:underline">12/02/2020</a>
                                                                <a href="#" className="hover:underline">10/12/2019</a>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : selectedTab === "Chembur" ? (
                                    <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto shadow-sm">
                                        <div className="min-w-[800px]">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200 bg-gray-50">
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black border-r border-gray-200 w-1/3">Region</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black border-r border-gray-200 w-1/3">Office Memorandum issued by MoEF , Govt. of India</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black w-1/3">Regions Present status Report of CEPI</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                                        <td rowSpan={2} className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <a href="#" className="hover:underline">Chembur- Action Plan for industrial Cluster</a>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top border-r border-gray-200"></td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top"></td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <div className="mb-1 text-black font-semibold">CEPI Action Plan Meeting Minutes</div>
                                                            <div className="mb-1 text-gray-700">select minutes</div>
                                                            <div className="flex flex-col gap-1">
                                                                <a href="#" className="hover:underline">11/12/2019</a>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : selectedTab === "Mahad" ? (
                                    <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto shadow-sm">
                                        <div className="min-w-[800px]">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200 bg-gray-50">
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black border-r border-gray-200 w-1/3">Region</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black border-r border-gray-200 w-1/3">Office Memorandum issued by MoEF , Govt. of India</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black w-1/3">Regions Present status Report of CEPI</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                                        <td rowSpan={2} className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            {/* Region column is empty in the reference image */}
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top border-r border-gray-200"></td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top"></td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <div className="mb-1 text-gray-700">CEPI Action Plan Meeting Minutes</div>
                                                            <div className="mb-1 text-gray-700">Select Minutes</div>
                                                            <a href="#" className="hover:underline block">25/11/2019</a>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : selectedTab === "Chandrapur" ? (
                                    <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto shadow-sm">
                                        <div className="min-w-[800px]">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200 bg-gray-50">
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black border-r border-gray-200 w-1/3">Region</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black border-r border-gray-200 w-1/3">Office Memorandum issued by MoEF , Govt. of India</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black w-1/3">Regions Present status Report of CEPI</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                                        <td rowSpan={3} className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <div className="flex flex-col gap-2">
                                                                <a href="#" className="hover:underline">Chandrapur-Action Plan for industrial Cluster</a>
                                                                <a href="#" className="hover:underline">Chandrapur-Revised Action Plan for industrial Cluster</a>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <div className="flex flex-col gap-2">
                                                                <a href="#" className="hover:underline">MoEF, GoI OM dated 30.03.2012 has extended Moratorium of extended till further orders for the Chandrapur CEPI area in Maharshtra.</a>
                                                                <a href="#" className="hover:underline">MoEF, GoI OM dated 17.09.2013 has extended Moratorium of extended till further orders for the Chandrapur CEPI area in Maharshtra.</a>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top">
                                                            <a href="#" className="hover:underline">Present Status Report of Chandrapur CEPI Action Plan</a>
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <div className="flex flex-col gap-1">
                                                                <a href="#" className="hover:underline block">Constituted Local CEPI are Monitoring Committee- 15.07.2011</a>
                                                                <div className="text-gray-700 mt-2">Minutes of Meeting of Local CEPI Monitoring Committee</div>
                                                                <div className="text-gray-700">Select Minutes</div>
                                                                <a href="#" className="hover:underline">19.09.2013</a>
                                                                <a href="#" className="hover:underline">03.07.2013</a>
                                                                <a href="#" className="hover:underline">22.02.2013</a>
                                                                <a href="#" className="hover:underline">30.10.2012</a>
                                                                <a href="#" className="hover:underline">12.08.2011</a>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top">
                                                            Study by IIT Mumbai & NEERI on Chandrapur Action Plan is in Progress.
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <div className="mb-1 text-black font-semibold">CEPI Action Plan Meeting Minutes</div>
                                                            <div className="mb-1 text-gray-700">Select CEPI Minutes</div>
                                                            <div className="flex flex-col gap-1">
                                                                <a href="#" className="hover:underline">17.10.2023</a>
                                                                <a href="#" className="hover:underline">12.02.2020</a>
                                                                <a href="#" className="hover:underline">26.11.2019</a>
                                                                <a href="#" className="hover:underline">17.10.2013</a>
                                                                <a href="#" className="hover:underline">14.06.2013</a>
                                                                <a href="#" className="hover:underline">21.06.2012</a>
                                                                <a href="#" className="hover:underline">20.12.2011</a>
                                                                <a href="#" className="hover:underline">14.10.2011</a>
                                                                <a href="#" className="hover:underline">08.04.2011</a>
                                                                <a href="#" className="hover:underline">28.02.2011</a>
                                                                <a href="#" className="hover:underline">09.12.2010</a>
                                                                <a href="#" className="hover:underline">04.05.2010</a>
                                                                <a href="#" className="hover:underline">22.02.2010</a>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-gray-700 align-top"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : selectedTab === "Dombivali" ? (
                                    <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto shadow-sm">
                                        <div className="min-w-[800px]">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200 bg-gray-50">
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black border-r border-gray-200 w-1/3">Region</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black border-r border-gray-200 w-1/3">Office Memorandum issued by MoEF , Govt. of India</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black w-1/3">Regions Present status Report of CEPI</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                                        <td rowSpan={2} className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <div className="flex flex-col gap-2">
                                                                <a href="#" className="hover:underline">Action Plan for industrial Cluster-Dombivali</a>
                                                                <a href="#" className="hover:underline">Revised Action Plan for industrial Cluster-Dombivali</a>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <a href="#" className="hover:underline">MoEF, GoI vide letter dated 15.02.2011 has lifted Moratorium of Aurangabad, Dombivali & Navi Mumbai area in Maharashtra</a>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top">
                                                            <a href="#" className="hover:underline">Present Status Report of Dombivali CEPI Action Plan</a>
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <div className="mb-1 text-black font-semibold">CEPI Action Plan Meeting Minutes</div>
                                                            <div className="mb-1 text-gray-700">Select Minutes</div>
                                                            <div className="flex flex-col gap-1">
                                                                <a href="#" className="hover:underline">11/02/2020</a>
                                                                <a href="#" className="hover:underline">21/11/2019</a>
                                                                <a href="#" className="hover:underline">03/07/2015</a>
                                                                <a href="#" className="hover:underline">30/09/2015</a>
                                                                <a href="#" className="hover:underline">09/02/2016</a>
                                                                <a href="#" className="hover:underline">14/06/2017</a>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top">
                                                            <div className="flex flex-col gap-2">
                                                                <a href="#" className="hover:underline">CEPI presentation on Action Plan for Dombivali...</a>
                                                                <a href="#" className="hover:underline">CEPI presentation on Action Plan for Dombivali as on 30/09/2015.</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : selectedTab === "Aurangabad" ? (
                                    <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto shadow-sm">
                                        <div className="min-w-[800px]">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200 bg-gray-50">
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black border-r border-gray-200 w-1/3">Region</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black border-r border-gray-200 w-1/3">Office Memorandum issued by MoEF , Govt. of India</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black w-1/3">Regions Present status Report of CEPI</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                                        <td rowSpan={2} className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <div className="flex flex-col gap-2">
                                                                <a href="#" className="hover:underline">Aurangabad-Action Plan for industrial Cluster</a>
                                                                <a href="#" className="hover:underline">Revised Action Plan for industrial Cluster</a>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <a href="#" className="hover:underline">MoEF, GoI vide letter dated 15.02.2011 has lifted Moratorium of Aurangabad, Dombivali & Navi Mumbai area in Maharashtra</a>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top">
                                                            <a href="#" className="hover:underline">Present Status Report of Aurangabad CEPI Action Plan</a>
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <div className="mb-1 text-black font-semibold">CEPI Action Plan Meeting Minutes</div>
                                                            <div className="mb-1 text-gray-700">Select Minutes</div>
                                                            <div className="flex flex-col gap-1">
                                                                <a href="#" className="hover:underline">10/12/2019</a>
                                                                <a href="#" className="hover:underline">15/05/2015</a>
                                                                <a href="#" className="hover:underline">14/06/2017</a>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top">
                                                            <a href="#" className="hover:underline">CEPI presentation on Action Plan for Aurangabad.</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : selectedTab === "Navi-Mumbai" ? (
                                    <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto shadow-sm">
                                        <div className="min-w-[800px]">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200 bg-gray-50">
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black border-r border-gray-200 w-1/3">Region</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black border-r border-gray-200 w-1/3">Office Memorandum issued by MoEF , Govt. of India</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black w-1/3">Regions Present status Report of CEPI</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <a href="#" className="hover:underline">Navi Mumbai-Revised Action Plan for industrial Cluster 2017</a>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <a href="#" className="hover:underline">MoEF, GoI vide dated 15.02.2011 has lifted Moratorium of Aurangabad, Dombivali & Navi Mumbai area in Maharashtra</a>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top">
                                                            <a href="#" className="hover:underline">Present Status Report of Navi Mumbai CEPI Action Plan</a>
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <div className="flex flex-col gap-2">
                                                                <a href="#" className="hover:underline">Navi Mumbai--Action Plan for industrial Cluster</a>
                                                                <a href="#" className="hover:underline">Navi Mumbai-Revised Action Plan for industrial Cluster</a>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <div className="mb-1 text-black font-semibold">CEPI Action Plan Meeting Minutes</div>
                                                            <div className="mb-1 text-gray-700">Select Minutes</div>
                                                            <div className="flex flex-col gap-1">
                                                                <a href="#" className="hover:underline">11/02/2020</a>
                                                                <a href="#" className="hover:underline">25/11/2019</a>
                                                                <a href="#" className="hover:underline">15/05/2015</a>
                                                                <a href="#" className="hover:underline">30/09/2015</a>
                                                                <a href="#" className="hover:underline">09/02/2016</a>
                                                                <a href="#" className="hover:underline">14/06/2017</a>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top">
                                                            <div className="flex flex-col gap-2">
                                                                <a href="#" className="hover:underline">CEPI presentation on Action Plan for Navi Mumbai.</a>
                                                                <a href="#" className="hover:underline">CEPI presentation on Action Plan for Navi Mumbai as on 30/09/2015.</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : selectedTab === "Tarapur" ? (
                                    <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto shadow-sm">
                                        <div className="min-w-[800px]">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200 bg-gray-50">
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black border-r border-gray-200 w-1/3">Region</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black border-r border-gray-200 w-1/3">Office Memorandum issued by MoEF , Govt. of India</th>
                                                        <th className="py-4 px-4 text-left text-[14px] font-bold text-black w-1/3">Regions Present status Report of CEPI</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                                        <td rowSpan={2} className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <div className="flex flex-col gap-2">
                                                                <a href="#" className="hover:underline">Tarapur-Action Plan for industrial Cluster</a>
                                                                <a href="#" className="hover:underline">Tarapur-Revised Action Plan for industrial Cluster</a>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <a href="#" className="hover:underline">MoEF, GoI OM dated 26.10.2010 has lifted Moratorium of Tarapur area in Maharashtra</a>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top">
                                                            <a href="#" className="hover:underline">Present Status Report of Tarapur CEPI Action Plan</a>
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top border-r border-gray-200">
                                                            <div className="mb-1 text-black font-semibold">CEPI Action Plan Meeting Minutes</div>
                                                            <div className="mb-1 text-gray-700">select minutes</div>
                                                            <div className="flex flex-col gap-1">
                                                                <a href="#" className="hover:underline">17/10/2023</a>
                                                                <a href="#" className="hover:underline">25/11/2019</a>
                                                                <a href="#" className="hover:underline">03/07/2015</a>
                                                                <a href="#" className="hover:underline">30/09/2015</a>
                                                                <a href="#" className="hover:underline">09/02/2016</a>
                                                                <a href="#" className="hover:underline">14/06/2017</a>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-4 text-[13px] text-[#00A3FF] font-medium align-top">
                                                            <div className="flex flex-col gap-2">
                                                                <a href="#" className="hover:underline">CEPI presentation on Action Plan for Tarapur..</a>
                                                                <a href="#" className="hover:underline">CEPI presentation on Action Plan for Tarapur as 30/09/2015</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-[14px] text-gray-700 leading-relaxed">
                                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 flex flex-col items-center justify-center min-h-[200px] text-center">
                                            <p className="text-gray-500 italic">Content for "{selectedTab}" will be displayed here.</p>
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

export default IndustrialCluster;
