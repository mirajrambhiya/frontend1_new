import { useState } from 'react';
import { ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';

import DocumentCard from '../../../components/DocumentCard';

import PageBanner from '../../../components/PageBanner.tsx';
import Sidebar from '../../../components/Sidebar.tsx';



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
        <div className="mt-8">
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

function Inventory() {
    // Years from 2021 to 2010 descending
    const years = Array.from({ length: 2021 - 2010 + 1 }, (_, i) => (2021 - i).toString());
    const [selectedYear, setSelectedYear] = useState<string>(years[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const data2021 = [
        { id: 'amravati', title: "Amravati", pdfUrl: "#" },
        { id: 'aurangabad', title: "Aurangabad", pdfUrl: "#" },
        { id: 'chandrapur', title: "Chandrapur", pdfUrl: "#" },
        { id: 'kalyan', title: "Kalyan", pdfUrl: "#" },
        { id: 'kolhapur', title: "Kolhapur", pdfUrl: "#" },
        { id: 'mumbai', title: "Mumbai", pdfUrl: "#" },
        { id: 'nagpur', title: "Nagpur", pdfUrl: "#" },
        { id: 'nashik', title: "Nashik", pdfUrl: "#" },
        { id: 'navimumbai', title: "Navi Mumbai", pdfUrl: "#" },
        { id: 'pune', title: "Pune", pdfUrl: "#" },
        { id: 'raigad', title: "Raigad", pdfUrl: "#" },
        { id: 'thane', title: "Thane", pdfUrl: "#" }
    ];

    const data2020 = [
        { id: 'amravati', title: "Amravati", pdfUrl: "#" },
        { id: 'aurangabad', title: "Aurangabad", pdfUrl: "#" },
        { id: 'chandrapur', title: "Chandrapur", pdfUrl: "#" },
        { id: 'kalyan', title: "Kalyan", pdfUrl: "#" },
        { id: 'kolhapur', title: "Kolhapur", pdfUrl: "#" },
        { id: 'mumbai', title: "Mumbai", pdfUrl: "#" },
        { id: 'nagpur', title: "Nagpur", pdfUrl: "#" },
        { id: 'nashik', title: "Nashik", pdfUrl: "#" },
        { id: 'navimumbai', title: "Navi Mumbai", pdfUrl: "#" },
        { id: 'pune', title: "Pune", pdfUrl: "#" },
        { id: 'raigad', title: "Raigad", pdfUrl: "#" },
        { id: 'thane', title: "Thane", pdfUrl: "#" }
    ];

    const data2019 = [
        { id: 'amravati', title: "Amravati", pdfUrl: "#" },
        { id: 'aurangabad', title: "Aurangabad", pdfUrl: "#" },
        { id: 'chandrapur', title: "Chandrapur", pdfUrl: "#" },
        { id: 'kalyan', title: "Kalyan", pdfUrl: "#" },
        { id: 'kolhapur', title: "Kolhapur", pdfUrl: "#" },
        { id: 'mumbai', title: "Mumbai", pdfUrl: "#" },
        { id: 'nagpur', title: "Nagpur", pdfUrl: "#" },
        { id: 'nashik', title: "Nashik", pdfUrl: "#" },
        { id: 'navimumbai', title: "Navi Mumbai", pdfUrl: "#" },
        { id: 'pune', title: "Pune", pdfUrl: "#" },
        { id: 'raigad', title: "Raigad", pdfUrl: "#" },
        { id: 'thane', title: "Thane", pdfUrl: "#" }
    ];

    const data2018 = [
        { id: 'exec_summary', title: "Executive Summary", pdfUrl: "#" },
        { id: 'navimumbai_2018', title: "Navi Mumbai - Inventory of Hazardous Waste Generation in Navi Mumbai Region, as on 31st March 2018", pdfUrl: "#" },
        { id: 'pune_2018', title: "Pune - Inventory of Hazardous Waste Generation in Pune Region, as on 31st March 2018", pdfUrl: "#" },
        { id: 'nagpur_2018', title: "Nagpur - Inventory of Hazardous Waste Generation in Nagpur Region, as on 31st March 2018", pdfUrl: "#" },
        { id: 'thane_2018', title: "Thane - Inventory of Hazardous Waste Generation in Thane Region, as on 31st March 2018", pdfUrl: "#" },
        { id: 'aurangabad_2018', title: "Aurangabad - Inventory of Hazardous Waste Generation in Aurangabad Region, as on 31st March 2018", pdfUrl: "#" },
        { id: 'raigad_2018', title: "Raigad - Inventory of Hazardous Waste Generation in Raigad Region, as on 31st March 2018", pdfUrl: "#" },
        { id: 'kalyan_2018', title: "Kalyan - Inventory of Hazardous Waste Generation in Kalyan Region, as on 31st March 2018", pdfUrl: "#" },
        { id: 'nasik_2018', title: "Nasik - Inventory of Hazardous Waste Generation in Nasik Region, as on 31st March 2018", pdfUrl: "#" },
        { id: 'amaravati_2018', title: "Amaravat - Inventory of Hazardous Waste Generation in Amaravati Region, as on 31st March 2018", pdfUrl: "#" },
        { id: 'kolhapur_2018', title: "Kolhapur - Inventory of Hazardous Waste Generation in Kolhapur Region, as on 31st March 2018", pdfUrl: "#" },
        { id: 'mumbai_2018', title: "Mumbai - Inventory of Hazardous Waste Generation in Mumbai Region, as on 31st March 2018", pdfUrl: "#" },
        { id: 'chandrapur_2018', title: "Chandrapur - Inventory of Hazardous Waste Generation in Chandrapur, as on 31st March 2018", pdfUrl: "#" }
    ];

    const data2017 = [
        { id: 'exec_summary_2017', title: "Executive Summary", pdfUrl: "#" },
        { id: 'navimumbai_2017', title: "Navi Mumbai - Inventory of Hazardous Waste Generation in Navi Mumbai Region, as on 31st March 2017", pdfUrl: "#" },
        { id: 'pune_2017', title: "Pune - Inventory of Hazardous Waste Generation in Pune Region, as on 31st March 2017", pdfUrl: "#" },
        { id: 'nagpur_2017', title: "Nagpur - Inventory of Hazardous Waste Generation in Nagpur Region, as on 31st March 2017", pdfUrl: "#" },
        { id: 'thane_2017', title: "Thane - Inventory of Hazardous Waste Generation in Thane Region, as on 31st March 2017", pdfUrl: "#" },
        { id: 'aurangabad_2017', title: "Aurangabad - Inventory of Hazardous Waste Generation in Aurangabad Region, as on 31st March 2017", pdfUrl: "#" },
        { id: 'raigad_2017', title: "Raigad - Inventory of Hazardous Waste Generation in Raigad Region, as on 31st March 2017", pdfUrl: "#" },
        { id: 'kalyan_2017', title: "Kalyan - Inventory of Hazardous Waste Generation in Kalyan Region, as on 31st March 2017", pdfUrl: "#" },
        { id: 'nasik_2017', title: "Nasik - Inventory of Hazardous Waste Generation in Nasik Region, as on 31st March 2017", pdfUrl: "#" },
        { id: 'amaravati_2017', title: "Amaravat - Inventory of Hazardous Waste Generation in Amaravati Region, as on 31st March 2017", pdfUrl: "#" },
        { id: 'kolhapur_2017', title: "Kolhapur - Inventory of Hazardous Waste Generation in Kolhapur Region, as on 31st March 2017", pdfUrl: "#" },
        { id: 'mumbai_2017', title: "Mumbai - Inventory of Hazardous Waste Generation in Mumbai Region, as on 31st March 2017", pdfUrl: "#" },
        { id: 'chandrapur_2017', title: "Chandrapur - Inventory of Hazardous Waste Generation in Chandrapur, as on 31st March 2017", pdfUrl: "#" }
    ];

    const data2016 = [
        { id: 'exec_summary_2016', title: "Executive Summary", pdfUrl: "#" },
        { id: 'navimumbai_2016', title: "Navi Mumbai - Inventory of Hazardous Waste Generation in Navi Mumbai Region, as on 31st March 2016", pdfUrl: "#" },
        { id: 'pune_2016', title: "Pune - Inventory of Hazardous Waste Generation in Pune Region, as on 31st March 2016", pdfUrl: "#" },
        { id: 'nagpur_2016', title: "Nagpur - Inventory of Hazardous Waste Generation in Nagpur Region, as on 31st March 2016", pdfUrl: "#" },
        { id: 'thane_2016', title: "Thane - Inventory of Hazardous Waste Generation in Thane Region, as on 31st March 2016", pdfUrl: "#" },
        { id: 'aurangabad_2016', title: "Aurangabad - Inventory of Hazardous Waste Generation in Aurangabad Region, as on 31st March 2016", pdfUrl: "#" },
        { id: 'raigad_2016', title: "Raigad - Inventory of Hazardous Waste Generation in Raigad Region, as on 31st March 2016", pdfUrl: "#" },
        { id: 'kalyan_2016', title: "Kalyan - Inventory of Hazardous Waste Generation in Kalyan Region, as on 31st March 2016", pdfUrl: "#" },
        { id: 'nasik_2016', title: "Nasik - Inventory of Hazardous Waste Generation in Nasik Region, as on 31st March 2016", pdfUrl: "#" },
        { id: 'amaravati_2016', title: "Amaravati - Inventory of Hazardous Waste Generation in Amaravati Region, as on 31st March 2016", pdfUrl: "#" },
        { id: 'kolhapur_2016', title: "Kolhapur - Inventory of Hazardous Waste Generation in Kolhapur Region, as on 31st March 2016", pdfUrl: "#" },
        { id: 'mumbai_2016', title: "Mumbai - Inventory of Hazardous Waste Generation in Mumbai Region, as on 31st March 2016", pdfUrl: "#" },
        { id: 'chandrapur_2016', title: "Chandrapur - Inventory of Hazardous Waste Generation in Chandrapur, as on 31st March 2016", pdfUrl: "#" }
    ];

    const data2015 = [
        { id: 'exec_summary_2015', title: "Executive Summary", pdfUrl: "#" },
        { id: 'navimumbai_2015', title: "Navi Mumbai - Inventory of Hazardous Waste Generation in Navi Mumbai Region, as on 31st March 2015", pdfUrl: "#" },
        { id: 'pune_2015', title: "Pune - Inventory of Hazardous Waste Generation in Pune Region, as on 31st March 2015", pdfUrl: "#" },
        { id: 'nagpur_2015', title: "Nagpur - Inventory of Hazardous Waste Generation in Nagpur Region, as on 31st March 2015", pdfUrl: "#" },
        { id: 'thane_2015', title: "Thane - Inventory of Hazardous Waste Generation in Thane Region, as on 31st March 2015", pdfUrl: "#" },
        { id: 'aurangabad_2015', title: "Aurangabad - Inventory of Hazardous Waste Generation in Aurangabad Region, as on 31st March 2015", pdfUrl: "#" },
        { id: 'raigad_2015', title: "Raigad - Inventory of Hazardous Waste Generation in Raigad Region, as on 31st March 2015", pdfUrl: "#" },
        { id: 'kalyan_2015', title: "Kalyan - Inventory of Hazardous Waste Generation in Kalyan Region, as on 31st March 2015", pdfUrl: "#" },
        { id: 'nasik_2015', title: "Nasik - Inventory of Hazardous Waste Generation in Nasik Region, as on 31st March 2015", pdfUrl: "#" },
        { id: 'amaravati_2015', title: "Amaravat - Inventory of Hazardous Waste Generation in Amaravati Region, as on 31st March 2015", pdfUrl: "#" },
        { id: 'kolhapur_2015', title: "Kolhapur - Inventory of Hazardous Waste Generation in Kolhapur Region, as on 31st March 2015", pdfUrl: "#" },
        { id: 'mumbai_2015', title: "Mumbai - Inventory of Hazardous Waste Generation in Mumbai Region, as on 31st March 2015", pdfUrl: "#" },
        { id: 'chandrapur_2015', title: "Chandrapur - Inventory of Hazardous Waste Generation in Chandrapur, as on 31st March 2015", pdfUrl: "#" }
    ];

    const data2014 = [
        { id: 'exec_summary_2014', title: "Executive Summary", pdfUrl: "#" },
        { id: 'navimumbai_2014', title: "Navi Mumbai - Inventory of Hazardous Waste Generation in Navi Mumbai Region, as on 31st March 2014", pdfUrl: "#" },
        { id: 'pune_2014', title: "Pune - Inventory of Hazardous Waste Generation in Pune Region, as on 31st March 2014", pdfUrl: "#" },
        { id: 'nagpur_2014', title: "Nagpur - Inventory of Hazardous Waste Generation in Nagpur Region, as on 31st March 2014", pdfUrl: "#" },
        { id: 'thane_2014', title: "Thane - Inventory of Hazardous Waste Generation in Thane Region, as on 31st March 2014", pdfUrl: "#" },
        { id: 'aurangabad_2014', title: "Aurangabad - Inventory of Hazardous Waste Generation in Aurangabad Region, as on 31st March 2014", pdfUrl: "#" },
        { id: 'raigad_2014', title: "Raigad - Inventory of Hazardous Waste Generation in Raigad Region, as on 31st March 2014", pdfUrl: "#" },
        { id: 'kalyan_2014', title: "Kalyan - Inventory of Hazardous Waste Generation in Kalyan Region, as on 31st March 2014", pdfUrl: "#" },
        { id: 'nasik_2014', title: "Nasik - Inventory of Hazardous Waste Generation in Nasik Region, as on 31st March 2014", pdfUrl: "#" },
        { id: 'amaravati_2014', title: "Amaravati - Inventory of Hazardous Waste Generation in Amaravati Region, as on 31st March 2014", pdfUrl: "#" },
        { id: 'kolhapur_2014', title: "Kolhapur - Inventory of Hazardous Waste Generation in Kolhapur Region, as on 31st March 2014", pdfUrl: "#" },
        { id: 'mumbai_2014', title: "Mumbai - Inventory of Hazardous Waste Generation in Mumbai Region, as on 31st March 2014", pdfUrl: "#" },
        { id: 'chandrapur_2014', title: "Chandrapur - Inventory of Hazardous Waste Generation in Chandrapur, as on 31st March 2014", pdfUrl: "#" }
    ];

    const data2012 = [
        { id: 'exec_summary_2012', title: "Executive Summary", pdfUrl: "#" },
        { id: 'navimumbai_2012', title: "Navi Mumbai - Inventory of Hazardous Waste Generation in Navi Mumbai Region, as on 31st March 2012", pdfUrl: "#" },
        { id: 'pune_2012', title: "Pune - Inventory of Hazardous Waste Generation in Pune Region, as on 31st March 2012", pdfUrl: "#" },
        { id: 'nagpur_2012', title: "Nagpur - Inventory of Hazardous Waste Generation in Nagpur Region, as on 31st March 2012", pdfUrl: "#" },
        { id: 'thane_2012', title: "Thane - Inventory of Hazardous Waste Generation in Thane Region, as on 31st March 2012", pdfUrl: "#" },
        { id: 'aurangabad_2012', title: "Aurangabad - Inventory of Hazardous Waste Generation in Aurangabad Region, as on 31st March 2012", pdfUrl: "#" },
        { id: 'raigad_2012', title: "Raigad - Inventory of Hazardous Waste Generation in Raigad Region, as on 31st March 2012", pdfUrl: "#" },
        { id: 'kalyan_2012', title: "Kalyan - Inventory of Hazardous Waste Generation in Kalyan Region, as on 31st March 2012", pdfUrl: "#" },
        { id: 'nasik_2012', title: "Nasik - Inventory of Hazardous Waste Generation in Nasik Region, as on 31st March 2012", pdfUrl: "#" },
        { id: 'amaravati_2012', title: "Amaravat - Inventory of Hazardous Waste Generation in Amaravati Region, as on 31st March 2012", pdfUrl: "#" },
        { id: 'kolhapur_2012', title: "Kolhapur - Inventory of Hazardous Waste Generation in Kolhapur Region, as on 31st March 2012", pdfUrl: "#" },
        { id: 'mumbai_2012', title: "Mumbai - Inventory of Hazardous Waste Generation in Mumbai Region, as on 31st March 2012", pdfUrl: "#" },
        { id: 'chandrapur_2012', title: "Chandrapur - Inventory of Hazardous Waste Generation in Chandrapur, as on 31st March 2012", pdfUrl: "#" }
    ];

    const data2011 = [
        { id: 'index_2011', title: "Index", pdfUrl: "#" },
        { id: 'inventory_team_2011', title: "Inventory Team", pdfUrl: "#" },
        { id: 'foreword_2011', title: "Foreword", pdfUrl: "#" },
        { id: 'exec_summary_2011', title: "Executive Summary", pdfUrl: "#" },
        { id: 'salient_findings_2011', title: "Salient findings", pdfUrl: "#" },
        { id: 'navimumbai_2011', title: "Navi Mumbai - Inventory of Hazardous Waste Generation in Navi Mumbai Region, as on 31st March 2011", pdfUrl: "#" },
        { id: 'pune_2011', title: "Pune - Inventory of Hazardous Waste Generation in Pune Region, as on 31st March 2011", pdfUrl: "#" },
        { id: 'nagpur_2011', title: "Nagpur - Inventory of Hazardous Waste Generation in Nagpur Region, as on 31st March 2011", pdfUrl: "#" },
        { id: 'thane_2011', title: "Thane - Inventory of Hazardous Waste Generation in Thane Region, as on 31st March 2011", pdfUrl: "#" },
        { id: 'aurangabad_2011', title: "Aurangabad - Inventory of Hazardous Waste Generation in Aurangabad Region, as on 31st March 2011", pdfUrl: "#" },
        { id: 'raigad_2011', title: "Raigad - Inventory of Hazardous Waste Generation in Raigad Region, as on 31st March 2011", pdfUrl: "#" },
        { id: 'kalyan_2011', title: "Kalyan - Inventory of Hazardous Waste Generation in Kalyan Region, as on 31st March 2011", pdfUrl: "#" },
        { id: 'nasik_2011', title: "Nasik - Inventory of Hazardous Waste Generation in Nasik Region, as on 31st March 2011", pdfUrl: "#" },
        { id: 'amaravati_2011', title: "Amaravat - Inventory of Hazardous Waste Generation in Amaravati Region, as on 31st March 2011", pdfUrl: "#" },
        { id: 'kolhapur_2011', title: "Kolhapur - Inventory of Hazardous Waste Generation in Kolhapur Region, as on 31st March 2011", pdfUrl: "#" },
        { id: 'mumbai_2011', title: "Mumbai - Inventory of Hazardous Waste Generation in Mumbai Region, as on 31st March 2011", pdfUrl: "#" },
        { id: 'chandrapur_2011', title: "Chandrapur - Inventory of Hazardous Waste Generation in Chandrapur, as on 31st March 2011", pdfUrl: "#" }
    ];

    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            {/* Top Banner Section */}
            <PageBanner title="Waste Management" />

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <Sidebar activeItem="Hazardous Waste" />

                        {/* Right Content */}
                        <div className="flex-1">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">

                                <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 pb-4 border-b border-gray-100 gap-4">
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-[20px] font-bold text-gray-900 leading-snug">
                                            Inventory
                                        </h2>
                                        <p className="text-[14px] text-gray-600">
                                            Regionwise Inventory HW Genration in Maharashtra.
                                        </p>
                                    </div>

                                    {/* Year Dropdown */}
                                    <div className="relative min-w-[200px]">
                                        <div
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between cursor-pointer hover:border-[#0085E2] hover:bg-blue-50/50 transition-all duration-300"
                                        >
                                            <span className="text-[14px] font-medium text-gray-700">
                                                Year: <span className="text-[#0085E2] font-bold ml-1">{selectedYear}</span>
                                            </span>
                                            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                        </div>

                                        <div className={`absolute top-full right-0 left-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden transition-all duration-300 origin-top z-50
                                            ${isDropdownOpen ? 'max-h-[300px] opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`}
                                        >
                                            <div className="overflow-y-auto max-h-[280px] custom-scrollbar">
                                                {years.map((year) => (
                                                    <div
                                                        key={year}
                                                        onClick={() => {
                                                            setSelectedYear(year);
                                                            setIsDropdownOpen(false);
                                                        }}
                                                        className={`px-4 py-2 text-[14px] cursor-pointer transition-colors flex items-center justify-between
                                                            ${selectedYear === year
                                                                ? 'bg-blue-50 text-[#0085E2] font-semibold'
                                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                                                    >
                                                        {year}
                                                        {selectedYear === year && <span className="w-1.5 h-1.5 rounded-full bg-[#0085E2]" />}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Area */}
                                {selectedYear === "2021" ? (
                                    <PaginatedSection title="2021 Inventory Data" documents={data2021} />
                                ) : selectedYear === "2020" ? (
                                    <PaginatedSection title="2020 Inventory Data" documents={data2020} />
                                ) : selectedYear === "2019" ? (
                                    <PaginatedSection title="2019 Inventory Data" documents={data2019} />
                                ) : selectedYear === "2018" ? (
                                    <PaginatedSection title="2018 Inventory Data" documents={data2018} />
                                ) : selectedYear === "2017" ? (
                                    <PaginatedSection title="2017 Inventory Data" documents={data2017} />
                                ) : selectedYear === "2016" ? (
                                    <PaginatedSection title="2016 Inventory Data" documents={data2016} />
                                ) : selectedYear === "2015" ? (
                                    <PaginatedSection title="2015 Inventory Data" documents={data2015} />
                                ) : selectedYear === "2014" ? (
                                    <PaginatedSection title="2014 Inventory Data" documents={data2014} />
                                ) : selectedYear === "2012" ? (
                                    <PaginatedSection title="2012 Inventory Data" documents={data2012} />
                                ) : selectedYear === "2011" ? (
                                    <PaginatedSection title="2011 Inventory Data" documents={data2011} />
                                ) : selectedYear === "2010" ? (
                                    <div className="border border-gray-200 rounded-[35px] overflow-hidden">
                                        <table className="w-full border-collapse">
                                            <thead>
                                                <tr className="bg-gray-50 border-b border-gray-100">
                                                    <th colSpan={4} className="py-4 px-6 text-center text-[16px] font-bold text-gray-800">
                                                        Final Report - Regionwise Inventory of Hazardous Waste Generation
                                                    </th>
                                                </tr>
                                                <tr className="bg-white border-b border-gray-100">
                                                    <th colSpan={4} className="py-3 px-6 text-center text-[14px] font-medium text-gray-600">
                                                        Please click on the below links to view report and enlarged image of the Map
                                                    </th>
                                                </tr>
                                                <tr className="bg-gray-50 border-b border-gray-100">
                                                    <th colSpan={2} className="py-4 px-6 text-left border-r border-gray-100 w-1/2">
                                                        <div className="border border-gray-200 rounded-full py-2 px-4 text-center text-[14px] font-semibold bg-white">
                                                            Final Report with Annexure
                                                        </div>
                                                    </th>
                                                    <th colSpan={2} className="py-4 px-6 text-left w-1/2">
                                                        <div className="border border-gray-200 rounded-full py-2 px-4 text-center text-[14px] font-semibold bg-white">
                                                            Region wise Inventory with Annexure
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50">
                                                {[
                                                    {
                                                        lText: "Index", lLink: "#", lImg: null,
                                                        rText: "Navi Mumbai - Inventory of Hazardous Waste Generation in Navi Mumbai Region, as on 31st March 2010", rLink: "#", rImg: "https://placehold.co/100x100"
                                                    },
                                                    {
                                                        lText: "Inventory Team", lLink: "#", lImg: null,
                                                        rText: "Pune - Inventory of Hazardous Waste Generation in Pune Region, as on 31st March 2010", rLink: "#", rImg: "https://placehold.co/100x100"
                                                    },
                                                    {
                                                        lText: "Chapter - I\nIntroduction", lLink: "#", lImg: "https://placehold.co/100x100",
                                                        rText: "Nagpur - Inventory of Hazardous Waste Generation in Nagpur Region, as on 31st March 2010", rLink: "#", rImg: "https://placehold.co/100x100"
                                                    },
                                                    {
                                                        lText: "Chapter - II\nState - Background", lLink: "#", lImg: "https://placehold.co/100x100",
                                                        rText: "Thane - Inventory of Hazardous Waste Generation in Thane Region, as on 31st March 2010", rLink: "#", rImg: "https://placehold.co/100x100"
                                                    },
                                                    {
                                                        lText: "Chapter - III\nFindings", lLink: "#", lImg: null,
                                                        rText: "Aurangabad - Inventory of Hazardous Waste Generation in Aurangabad Region, as on 31st March 2010", rLink: "#", rImg: "https://placehold.co/100x100"
                                                    },
                                                    {
                                                        lText: "Chapter - IV\nComments on Hazardous Waste Management & Handling Rules,1989 (as amended 2003)", lLink: "#", lImg: null,
                                                        rText: "Raigad - Inventory of Hazardous Waste Generation in Raigad Region, as on 31st March 2010", rLink: "#", rImg: "https://placehold.co/100x100"
                                                    },
                                                    {
                                                        lText: "Chapter - V\nAchievements on Hazardous Waste Management in Maharashtra", lLink: "#", lImg: null,
                                                        rText: "Kalyan - Inventory of Hazardous Waste Generation in Kalyan Region, as on 31st March 2010", rLink: "#", rImg: "https://placehold.co/100x100"
                                                    },
                                                    {
                                                        lText: "Chapter - VI\nAction Plan", lLink: "#", lImg: null,
                                                        rText: "Nasik - Inventory of Hazardous Waste Generation in Nasik Region, as on 31st March 2010", rLink: "#", rImg: "https://placehold.co/100x100"
                                                    },
                                                    {
                                                        lText: "Annexure - I\nTreatment / Disposal Options for Schedule - 1 waste", lLink: "#", lImg: null,
                                                        rText: "Amaravat - Inventory of Hazardous Waste Generation in Amaravati Region, as on 31st March 2010", rLink: "#", rImg: "https://placehold.co/100x100"
                                                    },
                                                    {
                                                        lText: "Annexure II\nTreatment / Disposal Options for Schedule - 2 wastes", lLink: "#", lImg: null,
                                                        rText: "Kolhapur - Inventory of Hazardous Waste Generation in Kolhapur Region, as on 31st March 2010", rLink: "#", rImg: "https://placehold.co/100x100"
                                                    },
                                                    {
                                                        lText: "Annexure III\nHazardous Waste Inventory Form", lLink: "#", lImg: null,
                                                        rText: "Mumbai - Inventory of Hazardous Waste Generation in Mumbai Region, as on 31st March 2010", rLink: "#", rImg: "https://placehold.co/100x100"
                                                    },
                                                    {
                                                        lText: "", lLink: null, lImg: null,
                                                        rText: "Chandrapur - Inventory of Hazardous Waste Generation in Chandrapur, as on 31st March 2010", rLink: "#", rImg: null // Note: Image missing in screenshot for Chandrapur row, but usually regions have maps. Screenshot cuts off right side? No, it looks empty in previous screenshot it had one. Wait, in the new screenshot the Chandrapur row doesn't show a map thumbnail on the right. I'll stick to the screenshot.
                                                    },
                                                    {
                                                        lText: "Annexure - IV\nFormat For Inventorization of service station provided by Fleet owners/ State Transport Corporation", lLink: "#", lImg: null,
                                                        rText: "Non Industrial Sources of Hazardous Waste", rLink: "#", rImg: null
                                                    },
                                                    {
                                                        lText: "Annexure - V\nFormat For Inventorization of Service Station -- Automobile Manufacturers", lLink: "#", lImg: null,
                                                        rText: "Annexure - I\nSummary Of Consumables/Waste Generation Data Submitted By BEST Corporation, Mumbai (Year 2004-2005)", rLink: "#", rImg: null
                                                    },
                                                    {
                                                        lText: "Annexure - VI\nFormat For Inventorization of service stations attached to Petroleum Companies", lLink: "#", lImg: null,
                                                        rText: "Annexure - II-A\nPrivate Motor Vehicle Population - Maharashtra State", rLink: "#", rImg: null
                                                    },
                                                    {
                                                        lText: "Annexure - VII\nFormat for Data Collection from Power Transmission/ Distribution Companies", lLink: "#", lImg: null,
                                                        rText: "Annexure II-B-Automobile\nDistrict wise Distribution of Service Stations Authorized By Automobile Companies", rLink: "#", rImg: null
                                                    },
                                                    {
                                                        lText: "Annexure - VIII\nFormat For Preparation of Hazardous Waste Generation from Ports/Docks", lLink: "#", lImg: null,
                                                        rText: "Annexure II-B-Petroleum\nDistrict Wise Distribution of Service Stations Authorized By Petroleum Companies", rLink: "#", rImg: null
                                                    },
                                                    {
                                                        lText: "Annexure - IX\nFormat For Preparation of Inventory of Facilities of Aircraft Companies", lLink: "#", lImg: null,
                                                        rText: "Annexure II-C\nEmission Factors for Oil/Grease use ,change over frequency and disposal method", rLink: "#", rImg: null
                                                    },
                                                    {
                                                        lText: "Map of Maharashtra Showing Final Hazardous Waste Generation Figures", lLink: "#", lImg: "https://placehold.co/100x100",
                                                        rText: "Annexure II-D\nEmission waste Oil/Grease generation from privately owned vehicles", rLink: "#", rImg: null
                                                    },
                                                ].map((row, idx) => (
                                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-5 px-6 text-[13px] text-gray-700 border-r border-gray-100 align-top w-1/4">
                                                            {row.lText && (
                                                                <a href={row.lLink || undefined} className="text-[#0085E2] font-semibold hover:underline block mb-2 whitespace-pre-line">
                                                                    {row.lText}
                                                                </a>
                                                            )}
                                                        </td>
                                                        <td className="py-5 px-6 text-[13px] border-r border-gray-100 align-top w-1/4">
                                                            {row.lImg && (
                                                                <div className="w-[100px] h-[100px] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                                                                    <img src={row.lImg} alt="Map" className="w-full h-full object-cover" />
                                                                </div>
                                                            )}
                                                        </td>
                                                        <td className="py-5 px-6 text-[13px] text-gray-700 border-r border-gray-100 align-top w-1/4">
                                                            {row.rText && (
                                                                <a href={row.rLink || undefined} className="text-[#0085E2] font-semibold hover:underline block mb-2 whitespace-pre-line">
                                                                    {row.rText}
                                                                </a>
                                                            )}
                                                        </td>
                                                        <td className="py-5 px-6 text-[13px] align-top w-1/4">
                                                            {row.rImg && (
                                                                <div className="w-[100px] h-[100px] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                                                                    <img src={row.rImg} alt="Map" className="w-full h-full object-cover" />
                                                                </div>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center min-h-[300px] bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                                        <p className="text-gray-500 text-sm">No data available for {selectedYear}</p>
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

export default Inventory;
