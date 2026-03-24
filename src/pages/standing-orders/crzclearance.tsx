import { useState } from 'react';
const standingorders = "/assets/standingorders.svg";

// CRZ Clearance table data - can be dynamically populated
interface CRZClearanceRow {
    sNo: number;
    date: string;
    description: string;
}

const crzClearanceData: CRZClearanceRow[] = [
    {
        sNo: 1,
        date: "28/08/2017",
        description: "Malad Sewage Treatment Plant at Malad (W), adjacent to Malad Greek, Survey No.2841(Pt), Mumbai; (II) Construction of Sewer Tunnel Phase-I from Don Bosco School Junction, Borivali (W) to Malad Waste Water Treatment Facilities at Malad and (III) Construction of Sewer Tunnel Phase-II from Goregaon Pumping Station to Malad Waste Water Treatment Facilities at Mumbai, Maharashtra - reg."
    },
    {
        sNo: 2,
        date: "22/11/2021",
        description: "CRZ clearance for laying of natural gas transportation pipeline with associated facilities from boisar to palghar, district palghar by M/s Gujrat Gas Limited- Regarding"
    },
    {
        sNo: 3,
        date: "22/11/2021",
        description: "CRZ clearance for laying of natural gas transportation pipeline with associated facilities from Umargan to gholvad, District Palghar by M/s Gujarat Gas Limited- regarding"
    },
];

const CRZClearance = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [appliedSearch, setAppliedSearch] = useState('');

    // Filter data based on applied search
    const filteredData = appliedSearch
        ? crzClearanceData.filter(row =>
            row.description.toLowerCase().includes(appliedSearch.toLowerCase()) ||
            row.date.includes(appliedSearch)
        )
        : crzClearanceData;

    const handleApplySearch = () => {
        setAppliedSearch(searchQuery);
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        setAppliedSearch('');
    };

    return (
        <div className="font-family-helvetica">
            <section className="w-full flex justify-center bg-white px-4 md:px-0">
                <div className="w-full max-w-[1282px]">
                    <div className="relative w-full h-[200px] md:h-[280px] rounded-b-[32px] md:rounded-b-[48px] overflow-hidden">
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

                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-10px] md:mt-[-30px]">
                            <h1 className="text-[24px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-tight md:leading-none mb-4 md:mb-8">
                                CRZ Clearance by MOEF, Forest and Climate Change
                            </h1>

                            <div className="flex flex-col md:flex-row items-center gap-3 w-full max-w-[550px]">
                                <div className="w-full md:w-[400px] h-[44px] md:h-[48px] bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.08)] flex items-center px-4 md:px-5 gap-3">
                                    <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <circle cx="11" cy="11" r="8" strokeWidth="2" />
                                        <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Search Document"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="flex-1 bg-transparent text-[14px] md:text-[15px] text-gray-700 placeholder-gray-400 outline-none"
                                    />
                                </div>
                                <div className="flex items-center gap-2 w-full md:w-auto">
                                    <button
                                        onClick={handleApplySearch}
                                        className="flex-1 md:flex-none h-[40px] md:h-[48px] px-6 bg-[#0085E2] text-white text-[13px] md:text-[14px] font-medium rounded-full hover:bg-[#0070C0] transition-colors cursor-pointer shadow-[0_2px_8px_rgba(0,133,226,0.3)] whitespace-nowrap"
                                    >
                                        Apply
                                    </button>
                                    <button
                                        onClick={handleClearSearch}
                                        className="flex-1 md:flex-none h-[40px] md:h-[48px] px-6 bg-[#0085E2] text-white text-[13px] md:text-[14px] font-medium rounded-full hover:bg-[#0070C0] transition-colors cursor-pointer shadow-[0_2px_8px_rgba(0,133,226,0.3)] whitespace-nowrap"
                                    >
                                        Clear
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Table Section */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1000px] px-4">
                    {/* Results count */}
                    <div className="mb-6 text-[14px] text-gray-500">
                        Showing {filteredData.length} document{filteredData.length !== 1 ? 's' : ''}
                        {appliedSearch && <span> for "<span className="font-medium text-gray-700">{appliedSearch}</span>"</span>}
                    </div>

                    {/* No Results Message */}
                    {filteredData.length === 0 && appliedSearch && (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                                <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <h3 className="text-[20px] font-semibold text-gray-700 mb-2">No Documents Found</h3>
                            <p className="text-[14px] text-gray-500 max-w-[400px]">
                                No documents match your search for "<span className="font-medium text-gray-700">{appliedSearch}</span>".
                            </p>
                            <button
                                onClick={handleClearSearch}
                                className="mt-6 px-6 py-2 bg-[#0085E2] text-white text-[14px] font-medium rounded-full hover:bg-[#0070C0] transition-colors cursor-pointer"
                            >
                                Clear Search
                            </button>
                        </div>
                    )}

                    {/* Table Container: Scrollable on mobile */}
                    {filteredData.length > 0 && (
                        <div className="border border-gray-200 rounded-[24px] overflow-hidden w-full overflow-x-auto">
                            <table className="w-full border-collapse min-w-[700px]">
                                <thead>
                                    <tr className="border-b border-gray-200 bg-gray-50/50">
                                        <th className="py-4 px-6 text-left text-[13px] font-bold text-gray-700 w-12">Sr.</th>
                                        <th className="py-4 px-6 text-left text-[13px] font-bold text-gray-700 w-28">Date</th>
                                        <th className="py-4 px-6 text-left text-[13px] font-bold text-gray-700">CRZ Clearance Description</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredData.map((row) => (
                                        <tr key={row.sNo} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-4 px-6 text-[13px] text-gray-600 align-top">{row.sNo}</td>
                                            <td className="py-4 px-6 text-[13px] text-gray-700 align-top whitespace-nowrap">{row.date}</td>
                                            <td className="py-4 px-6 text-[13px] leading-relaxed text-[#00A3FF] align-top cursor-pointer hover:underline">{row.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default CRZClearance;
