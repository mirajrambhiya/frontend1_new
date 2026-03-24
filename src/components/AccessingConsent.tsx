import { useState } from 'react';
import { ChevronLeft, ChevronRight, FileText, Search } from 'lucide-react';

const standingorders = "/assets/standingorders.svg";

const sidebarTabs = [
    "Industry",
    "Infrastructure projects (Residential/Commercial)",
    "Consents & Authorization Issued Under BMW Rules (Healthcare Establishments)",
    "Consents & Authorisation Issued Under E-Waste Rules",
    "Authorization Issued Under Hazardous Waste Rules"
];

interface ConsentData {
    srNo: number;
    grantDate: string;
    name: string;
    eicNo: string;
    address: string;
    department: string;
    validityDate: string;
    scanCopyUrl: string; // Placeholder string
}

// Mock Data based on the image
const mockData: ConsentData[] = [
    {
        srNo: 1,
        grantDate: "03-10-2016",
        name: "Koradi Thermal Power Station (KTPS)",
        eicNo: "NG-1855-09",
        address: "Koradi, Distt. Nagpur",
        department: "AS (T) / RO (P&P)",
        validityDate: "2017-08-31",
        scanCopyUrl: "#"
    },
    {
        srNo: 2,
        grantDate: "28-01-2013",
        name: "Menon Pistons Ltd.",
        eicNo: "KP-1876-09",
        address: "182 Shiroli Tal:Hatkanangale Dist:Kolhapur",
        department: "APAE",
        validityDate: "2013-12-31",
        scanCopyUrl: "#"
    },
    {
        srNo: 3,
        grantDate: "01-09-2012",
        name: "West Pioneer Properties (I) Pvt Ltd.,",
        eicNo: "AD-2140-09",
        address: "1 B/2, 1&1A, MIDC Chikalthana, Aurangabad",
        department: "AS (T) / RO (P&P)",
        validityDate: "NULL",
        scanCopyUrl: "#"
    },
    {
        srNo: 4,
        grantDate: "06-05-2013",
        name: "HSBC Software Development India Pvt. Ltd.,",
        eicNo: "PN-3412-09",
        address: "25A, Kalyaninagar, Pune",
        department: "RO (HQ) HSM",
        validityDate: "2014-02-28",
        scanCopyUrl: "#"
    },
    {
        srNo: 5,
        grantDate: "03-05-2013",
        name: "HSBC Software Development India Pvt. Ltd.,",
        eicNo: "PN-3413-09",
        address: "25B, Kalyaninagar, Pune",
        department: "RO (HQ) HSM",
        validityDate: "2014-02-28",
        scanCopyUrl: "#"
    },
    {
        srNo: 6,
        grantDate: "27-06-2014",
        name: "Scigen Bio-Pharma Pvt. Ltd.,",
        eicNo: "PN-3509-09",
        address: "plot no.18, Hinjewadi, Dist-Pune",
        department: "",
        validityDate: "2015-04-30",
        scanCopyUrl: "#"
    },
    {
        srNo: 7,
        grantDate: "17-12-2012",
        name: "Vamona Developers Pvt. Ltd.",
        eicNo: "PN-3575-09",
        address: "S. No.207/1 A, 207/B, 207/C Vimanagar, Pune",
        department: "RO (HQ) HSM",
        validityDate: "2013-03-31",
        scanCopyUrl: "#"
    },
    {
        srNo: 8,
        grantDate: "17-03-2016",
        name: "Fujitsu Consulting (P) Ltd.,",
        eicNo: "PN-4394-09",
        address: "P.No.A-14, A-15, MIDC Tathawade, Dist-Pune",
        department: "AS (T) / RO (P&P)",
        validityDate: "2017-02-28",
        scanCopyUrl: "#"
    },
    {
        srNo: 9,
        grantDate: "21-08-2015",
        name: "Megapolis,",
        eicNo: "PN-4477-09",
        address: "P.No.R-1/1, 2,3 P-III, Hinjewadi, Pune",
        department: "",
        validityDate: "2016-01-31",
        scanCopyUrl: "#"
    },
    {
        srNo: 10,
        grantDate: "04-01-2012",
        name: "Samrudhi Sugars Ltd.",
        eicNo: "AD-3705-09",
        address: "Renuka Nagar, Devidahegaon, Tal. Ghansawangi, Dist Jalna",
        department: "AS (T) / RO (P&P)",
        validityDate: "2012-03-31",
        scanCopyUrl: "#"
    }
];

const ITEMS_PER_PAGE = 10;

function AccessingConsent() {
    const [selectedTab, setSelectedTab] = useState(sidebarTabs[0]);
    const [searchQuery, setSearchQuery] = useState('');
    const [appliedSearch, setAppliedSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // Filter Logic: Only search by Name
    const filteredData = appliedSearch
        ? mockData.filter(item => item.name.toLowerCase().includes(appliedSearch.toLowerCase()))
        : mockData;

    // Pagination Logic
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleApplySearch = () => {
        setAppliedSearch(searchQuery);
        setCurrentPage(1);
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        setAppliedSearch('');
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
        handleClearSearch(); // Reset search on tab change
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
            {/* Top Banner Section - RTI Style (Reused) */}
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
                            <h1 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#000000] tracking-tight leading-tight md:leading-none mb-4 md:mb-8">
                                Accessing Consent Copies Uptill Date: 30th June 2016
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
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
                                            <span className={`text-[14px] font-normal transition-colors duration-200 leading-snug ${isActive ? 'text-[#00A3FF] font-medium' : 'text-gray-800'}`}>
                                                {tab}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1 w-full">
                            <div className="rounded-[24px] p-4 md:p-8 min-h-[400px] bg-white">
                                <h2 className="text-[24px] font-semibold text-gray-800 mb-6">
                                    {selectedTab}
                                </h2>

                                {/* Search Bar */}
                                <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
                                    <div className="w-full flex-1 flex items-center gap-3 h-[48px] px-5 rounded-full border border-gray-300 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                                        <Search className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Search by Name"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="flex-1 bg-transparent text-[15px] text-gray-700 placeholder-gray-400 outline-none"
                                        />
                                    </div>
                                    <div className="flex gap-2 w-full md:w-auto">
                                        <button
                                            onClick={handleApplySearch}
                                            className="flex-1 md:flex-none h-[48px] px-6 bg-[#0085E2] text-white text-[14px] font-medium rounded-full hover:bg-[#0070C0] transition-colors cursor-pointer shadow-[0_2px_8px_rgba(0,133,226,0.3)]"
                                        >
                                            Apply
                                        </button>
                                        <button
                                            onClick={handleClearSearch}
                                            className="flex-1 md:flex-none h-[48px] px-6 bg-[#0085E2] text-white text-[14px] font-medium rounded-full hover:bg-[#0070C0] transition-colors cursor-pointer shadow-[0_2px_8px_rgba(0,133,226,0.3)]"
                                        >
                                            Clear
                                        </button>
                                    </div>
                                </div>

                                {/* Results Info */}
                                <div className="mb-4 text-[14px] text-gray-500">
                                    {filteredData.length > 0 ? (
                                        <>Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredData.length)} of {filteredData.length} record{filteredData.length !== 1 ? 's' : ''}</>
                                    ) : (
                                        "No records found"
                                    )}
                                    {appliedSearch && <span> for "<span className="font-medium text-gray-700">{appliedSearch}</span>"</span>}
                                </div>

                                {/* Data Table */}
                                {filteredData.length > 0 ? (
                                    <div className="border border-gray-200 rounded-[35px] overflow-hidden mb-8">
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse min-w-[900px]">
                                                <thead>
                                                    <tr className="border-b border-gray-100 bg-gray-50/50">
                                                        <th className="py-6 px-4 text-left w-16">
                                                            <div className="text-[13px] font-bold text-gray-700">Sr.No</div>
                                                        </th>
                                                        <th className="py-6 px-4 text-left w-28">
                                                            <div className="text-[13px] font-bold text-gray-700">GrantDate</div>
                                                        </th>
                                                        <th className="py-6 px-4 text-left w-64">
                                                            <div className="text-[13px] font-bold text-gray-700">Name</div>
                                                        </th>
                                                        <th className="py-6 px-4 text-left w-32">
                                                            <div className="text-[13px] font-bold text-gray-700">EICNo</div>
                                                        </th>
                                                        <th className="py-6 px-4 text-left w-64">
                                                            <div className="text-[13px] font-bold text-gray-700">Address</div>
                                                        </th>
                                                        <th className="py-6 px-4 text-left w-32">
                                                            <div className="text-[13px] font-bold text-gray-700">Department</div>
                                                        </th>
                                                        <th className="py-6 px-4 text-left w-28">
                                                            <div className="text-[13px] font-bold text-gray-700">Validaty Date</div>
                                                        </th>
                                                        <th className="py-6 px-4 text-center w-20">
                                                            <div className="text-[13px] font-bold text-gray-700">Scan Copy</div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {paginatedData.map((row) => (
                                                        <tr key={row.srNo} className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.srNo}</td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.grantDate}</td>
                                                            <td className="py-4 px-4 text-[13px] text-[#0085E2] font-medium align-top">{row.name}</td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.eicNo}</td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.address}</td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.department}</td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.validityDate}</td>
                                                            <td className="py-4 px-4 align-top text-center">
                                                                <button className="text-[#E53935] hover:text-[#D32F2F] transition-colors cursor-pointer">
                                                                    <FileText className="w-5 h-5" />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-[24px] border border-gray-100 mb-8">
                                        <Search className="w-12 h-12 text-gray-300 mb-4" />
                                        <p className="text-gray-500 font-medium">No results found matching "{appliedSearch}"</p>
                                        <button
                                            onClick={handleClearSearch}
                                            className="mt-4 text-[#0085E2] text-sm hover:underline cursor-pointer"
                                        >
                                            Clear search to see all records
                                        </button>
                                    </div>
                                )}

                                {/* Pagination */}
                                {filteredData.length > 0 && totalPages > 1 && (
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
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AccessingConsent;
