import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const standingorders = "/assets/standingorders.svg";
import DocumentCard from '../../components/DocumentCard'

// Sample State Govt. directions data - can be dynamically populated
const directionsData = [
    { id: 1, title: "State Government Direction on Environmental Policy 2024", date: "15 Jan, 2024" },
    { id: 2, title: "Direction on Industrial Development Guidelines", date: "10 Feb, 2024" },
    { id: 3, title: "Updated Guidelines for Urban Planning and Environment", date: "5 Mar, 2024" },
    { id: 4, title: "Direction on Water Resource Management", date: "20 Mar, 2024" },
    { id: 5, title: "State Direction regarding Pollution Control Measures", date: "1 Apr, 2024" },
    { id: 6, title: "Guidelines for Municipal Waste Management", date: "15 Apr, 2024" },
    { id: 7, title: "Direction on Green Energy Initiatives", date: "1 May, 2024" },
    { id: 8, title: "Updated State Environmental Action Plan", date: "20 May, 2024" },
    { id: 9, title: "Direction on River Cleaning Projects", date: "1 Jun, 2024" },
    { id: 10, title: "Guidelines for Air Quality Improvement", date: "15 Jun, 2024" },
    { id: 11, title: "State Direction regarding Forest Protection", date: "1 Jul, 2024" },
    { id: 12, title: "Updated Guidelines for Sustainable Development", date: "15 Jul, 2024" },
];

const DOCUMENTS_PER_PAGE = 6;

const StateGovtDirections = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [appliedSearch, setAppliedSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // Filter documents based on applied search
    const filteredDocuments = appliedSearch
        ? directionsData.filter(doc =>
            doc.title.toLowerCase().includes(appliedSearch.toLowerCase())
        )
        : directionsData;

    // Pagination logic
    const totalPages = Math.ceil(filteredDocuments.length / DOCUMENTS_PER_PAGE);
    const startIndex = (currentPage - 1) * DOCUMENTS_PER_PAGE;
    const paginatedDocuments = filteredDocuments.slice(startIndex, startIndex + DOCUMENTS_PER_PAGE);

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
                            <h1 className="text-[32px] md:text-[48px] font-bold text-[#000000] tracking-tight leading-tight md:leading-none mb-4 md:mb-8">
                                State Govt. Directions
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

            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="mb-6 text-[14px] text-gray-500">
                        Showing {filteredDocuments.length > 0 ? startIndex + 1 : 0}-{Math.min(startIndex + DOCUMENTS_PER_PAGE, filteredDocuments.length)} of {filteredDocuments.length} document{filteredDocuments.length !== 1 ? 's' : ''}
                        {appliedSearch && <span> for "<span className="font-medium text-gray-700">{appliedSearch}</span>"</span>}
                    </div>

                    {filteredDocuments.length === 0 && appliedSearch && (
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

                    {/* Grid Layout: Responsive columns */}
                    {paginatedDocuments.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                            {paginatedDocuments.map((doc) => (
                                <div key={doc.id} className="w-full max-w-[400px]">
                                    <DocumentCard document={doc} />
                                </div>
                            ))}
                        </div>
                    )}

                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-gray-100">
                            <button
                                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors cursor-pointer
                                    ${currentPage === 1 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2]'}`}
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full text-[14px] font-medium transition-colors cursor-pointer
                                        ${currentPage === page ? 'bg-[#0085E2] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors cursor-pointer
                                    ${currentPage === totalPages ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2]'}`}
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default StateGovtDirections;
