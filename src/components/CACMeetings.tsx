import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const standingorders = "/assets/standingorders.svg";

// CAC Meeting data
const cacMeetingsData = [
    { srNo: 1, date: "14/08/2025", agenda: "6th CAC Meeting Agenda of 2025-26", minutes: "6th CAC Meeting Minutes of 2025-26", actionReport: "Action Taken Report" },
    { srNo: 2, date: "29/07/2025", agenda: "5th CAC Meeting Agenda of 2025-26", minutes: "5th CAC Meeting Minutes of 2025-26", actionReport: "Action Taken Report" },
    { srNo: 3, date: "01/07/2025", agenda: "4th CAC Meeting Agenda of 2025-26", minutes: "4th CAC Meeting Minutes of 2025-26", actionReport: "Action Taken Report" },
    { srNo: 4, date: "10/06/2025", agenda: "3rd CAC Meeting Agenda of 2025-26", minutes: "3rd CAC Meeting Minutes of 2025-26", actionReport: "Action Taken Report" },
    { srNo: 5, date: "20/05/2025", agenda: "2nd CAC Meeting Agenda of 2025-26", minutes: "2nd CAC Meeting Minutes of 2025-26", actionReport: "Action Taken Report" },
    { srNo: 6, date: "17/04/2025", agenda: "1st CAC Meeting Agenda of 2025-26 (Part II)", minutes: "1st CAC Meeting Minutes of 2025-26 (Part II)", actionReport: "Action Taken Report (Part II)" },
    { srNo: 7, date: "16/04/2025", agenda: "1st CAC Meeting Agenda of 2025-26 (Part I)", minutes: "1st CAC Meeting Minutes of 2025-26 (Part I)", actionReport: "Action Taken Report (Part I)" },
    { srNo: 8, date: "13/03/2025", agenda: "17th CAC Meeting Agenda of 2024-25", minutes: "17th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 9, date: "11/02/2025", agenda: "16th CAC Meeting Agenda of 2024-25", minutes: "16th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 10, date: "24/01/2025", agenda: "15th CAC Meeting Agenda of 2024-25", minutes: "15th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 11, date: "12/12/2024", agenda: "14th CAC Meeting Agenda of 2024-25", minutes: "14th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 12, date: "15/11/2024", agenda: "13th CAC Meeting Agenda of 2024-25", minutes: "13th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 13, date: "18/10/2024", agenda: "12th CAC Meeting Agenda of 2024-25", minutes: "12th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 14, date: "20/09/2024", agenda: "11th CAC Meeting Agenda of 2024-25", minutes: "11th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 15, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 16, date: "25/07/2024", agenda: "9th CAC Meeting Agenda of 2024-25", minutes: "9th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 17, date: "14/06/2024", agenda: "8th CAC Meeting Agenda of 2024-25", minutes: "8th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 18, date: "28/05/2024", agenda: "7th CAC Meeting Agenda of 2024-25", minutes: "7th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 19, date: "15/04/2024", agenda: "6th CAC Meeting Agenda of 2024-25", minutes: "6th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 20, date: "28/03/2024", agenda: "5th CAC Meeting Agenda of 2024-25", minutes: "5th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 21, date: "15/02/2024", agenda: "4th CAC Meeting Agenda of 2023-24", minutes: "4th CAC Meeting Minutes of 2023-24", actionReport: "Action Taken Report" },
    { srNo: 22, date: "25/01/2024", agenda: "3rd CAC Meeting Agenda of 2023-24", minutes: "3rd CAC Meeting Minutes of 2023-24", actionReport: "Action Taken Report" },
    { srNo: 23, date: "12/12/2023", agenda: "2nd CAC Meeting Agenda of 2023-24", minutes: "2nd CAC Meeting Minutes of 2023-24", actionReport: "Action Taken Report" },
    { srNo: 24, date: "18/11/2023", agenda: "1st CAC Meeting Agenda of 2023-24", minutes: "1st CAC Meeting Minutes of 2023-24", actionReport: "Action Taken Report" },
];

const ITEMS_PER_PAGE = 10;

function CACMeetings() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchYear, setSearchYear] = useState('');
    const [appliedSearch, setAppliedSearch] = useState('');

    // Filter data based on applied search
    const filteredData = appliedSearch
        ? cacMeetingsData.filter(item =>
            item.date.includes(appliedSearch) ||
            item.agenda.toLowerCase().includes(appliedSearch.toLowerCase()) ||
            item.minutes.toLowerCase().includes(appliedSearch.toLowerCase())
        )
        : cacMeetingsData;

    // Pagination logic
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleApplySearch = () => {
        setAppliedSearch(searchYear);
        setCurrentPage(1);
    };

    const handleClearSearch = () => {
        setSearchYear('');
        setAppliedSearch('');
        setCurrentPage(1);
    };

    // Generate page numbers with ellipsis
    const getPageNumbers = (current: number, total: number): (number | string)[] => {
        const pages: (number | string)[] = [];

        if (total <= 5) {
            for (let i = 1; i <= total; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);

            if (current > 3) {
                pages.push('...');
            }

            const start = Math.max(2, current - 1);
            const end = Math.min(total - 1, current + 1);

            for (let i = start; i <= end; i++) {
                if (!pages.includes(i)) {
                    pages.push(i);
                }
            }

            if (current < total - 2) {
                pages.push('...');
            }

            if (!pages.includes(total)) {
                pages.push(total);
            }
        }

        return pages;
    };

    return (
        <div className="font-family-helvetica">
            {/* Top Banner Section - RTI Style */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[280px] rounded-t-[30px] md:rounded-t-[48px] overflow-hidden">
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
                            <h1 className="text-[24px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-tight mb-4 md:mb-8">
                                Consent Appraisal Committee (CAC) Meeting
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1100px] px-4">
                    {/* Search Bar */}
                    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 mb-6 md:mb-8">
                        <div className="flex-1 flex items-center gap-3 h-[48px] px-5 rounded-full border border-gray-300 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                            <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                                <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search by Date..."
                                value={searchYear}
                                onChange={(e) => setSearchYear(e.target.value)}
                                className="flex-1 bg-transparent text-[15px] text-gray-700 placeholder-gray-400 outline-none w-full min-w-0"
                            />
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={handleApplySearch}
                                className="h-[48px] px-8 bg-white text-[#00A3FF] border-[#00A3FF] border-[1px] text-[14px] font-semibold rounded-xl hover:bg-[#00A3FF] hover:text-white transition-colors cursor-pointer shadow-sm flex-1 md:flex-none"
                            >
                                Apply
                            </button>
                            {appliedSearch && (
                                <button
                                    onClick={handleClearSearch}
                                    className="h-[48px] px-6 bg-white text-[#00A3FF] border-[#00A3FF] border-[1px] text-[14px] font-medium rounded-xl hover:bg-[#00A3FF] hover:text-white transition-colors cursor-pointer flex-1 md:flex-none"
                                >
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Results count */}
                    <div className="mb-4 text-[14px] text-gray-500">
                        Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredData.length)} of {filteredData.length} record{filteredData.length !== 1 ? 's' : ''}
                        {appliedSearch && <span> for "<span className="font-medium text-gray-700">{appliedSearch}</span>"</span>}
                    </div>

                    {/* Table */}
                    <div className="border border-gray-300 rounded-lg overflow-x-auto mb-8">
                        <table className="w-full border-collapse min-w-[800px]">
                            <thead>
                                <tr className="bg-[#EAEAEA] text-[#333333]">
                                    <th className="py-3 px-4 text-left font-bold border-r border-gray-300 w-32">
                                        Date
                                    </th>
                                    <th className="py-3 px-4 text-left font-bold border-r border-gray-300">
                                        Agenda
                                    </th>
                                    <th className="py-3 px-4 text-left font-bold border-r border-gray-300">
                                        Minute
                                    </th>
                                    <th className="py-3 px-4 text-left font-bold">
                                        ATR
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-300">
                                {paginatedData.map((row) => (
                                    <tr key={row.srNo} className="bg-white">
                                        <td className="py-4 px-4 text-[14px] text-gray-700 border-r border-gray-300 align-top">{row.date}</td>
                                        <td className="py-4 px-4 text-[14px] text-[#0085E2] hover:underline cursor-pointer border-r border-gray-300 align-top">{row.agenda}</td>
                                        <td className="py-4 px-4 text-[14px] text-[#0085E2] hover:underline cursor-pointer border-r border-gray-300 align-top">{row.minutes}</td>
                                        <td className="py-4 px-4 text-[14px] text-[#0085E2] hover:underline cursor-pointer align-top">
                                            {row.actionReport === "Action Taken Report" ? "Action Taken Report" : row.actionReport}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-gray-100">
                            {/* First Button */}
                            {currentPage > 2 && (
                                <button
                                    onClick={() => handlePageChange(1)}
                                    className="px-3 py-2 text-[13px] text-gray-600 hover:text-[#0085E2] transition-colors cursor-pointer"
                                >
                                    First
                                </button>
                            )}

                            {/* Previous Button */}
                            {currentPage > 1 && (
                                <button
                                    onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                            )}

                            {/* Page Numbers with Ellipsis */}
                            {getPageNumbers(currentPage, totalPages).map((page, index) => (
                                page === '...' ? (
                                    <span key={`ellipsis-${index}`} className="px-2 text-gray-400">...</span>
                                ) : (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page as number)}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full text-[14px] font-medium transition-colors cursor-pointer
                                            ${currentPage === page
                                                ? 'bg-[#0085E2] text-white'
                                                : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                )
                            ))}

                            {/* Next Button */}
                            {currentPage < totalPages && (
                                <button
                                    onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            )}

                            {/* Last Button */}
                            {currentPage < totalPages - 1 && (
                                <button
                                    onClick={() => handlePageChange(totalPages)}
                                    className="px-3 py-2 text-[13px] text-gray-600 hover:text-[#0085E2] transition-colors cursor-pointer"
                                >
                                    Last
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default CACMeetings;
