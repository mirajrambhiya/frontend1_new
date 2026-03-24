import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ChevronDown, ChevronUp, ChevronRight, ChevronLeft } from 'lucide-react';

const standingorders = "/assets/standingorders.svg";

// Sidebar Data
const sidebarData = [
    {
        title: "Environmental Quality",
        items: ["Air Quality", "Water Quality", "Noise Pollution"]
    },
    {
        title: "Waste Management",
        items: ["Hazardous Waste", "Biomedical Waste", "Solid Waste Management", "Construction and Demolition Waste", "Common Effluent Treatment Plant", "Plastic Waste", "Electronic Waste", "Fly Ash", "Batteries", "End-of-Life Vehicles"]
    },
    {
        title: "Public Hearing",
        items: ["Upcoming Public Hearings", "Archived Public Hearings", "Public Consultation"]
    },
    {
        title: "Public Awareness",
        items: ["Campaigns", "Events", "Newsletters", "Press Releases"]
    },
    {
        title: "Other Links",
        items: ["Important Weblinks", "Related Organizations", "Downloads"]
    }
];

type TableRow =
    | { type: 'header'; content: string }
    | { type: 'subheader'; content: string }
    | { type: 'data'; name: string; c1: string; c2: string; c3: string; c4: string; isBestUsage?: boolean };

const fullTableData: TableRow[] = [
    {
        type: 'data',
        name: "Best Usage",
        c1: "Unfiltered Public water supply after approved disinfection",
        c2: "Public water supply with approved treatment equal to coagulation, sedimentation & disinfection.",
        c3: "Not fit for human consumption, Fish & Wildlife Propagation.",
        c4: "Fit for Agriculture, Industrial cooling & process water.",
        isBestUsage: true
    },
    { type: 'header', content: "Chemical Qualities : Maximum allowable concentration" },
    { type: 'subheader', content: "Toxic Substances" },
    { type: 'data', name: "Arsenic (As)", c1: "0.3 mg/l", c2: "0.3 mg/l", c3: "1.0 mg/l", c4: "0.1 mg/l" },
    { type: 'data', name: "Cadmium (Cd)", c1: "0.01 mg/l", c2: "0.01 mg/l", c3: "-", c4: "-" },
    { type: 'data', name: "Chromium ( Cr )", c1: "0.05 mg/l", c2: "0.05 mg/l", c3: "0.05 mg/l", c4: "0.2 mg/l" },
    { type: 'data', name: "Cyanide (CN)", c1: "0.05 mg/l", c2: "0.1 mg/l", c3: "0.05 mg/l", c4: "0.2 mg/l" },
    { type: 'data', name: "Lead (Pb)", c1: "0.1 mg/l", c2: "0.1 mg/l", c3: "-", c4: "0.1 mg/l" },
    { type: 'data', name: "Boron (B)", c1: "-", c2: "-", c3: "-", c4: "2.0 mg/l" },
    { type: 'data', name: "Mercury (Hg)", c1: "0.001 mg/l", c2: "0.001 mg/l", c3: "0.001 mg/l", c4: "-" },
    { type: 'data', name: "Gross alpha activity", c1: "3 PCI/l", c2: "10-9 uc/ml", c3: "3 PCI/l", c4: "3 PCI/l" },
    { type: 'data', name: "Gross Beta activity", c1: "30 PCI/l", c2: "10-8 uc/m", c3: "30 PCI/l", c4: "30 PCI/l" },
    { type: 'subheader', content: "Substances affecting health" },
    { type: 'data', name: "Fluoride (F)", c1: "1.5 mg/l", c2: "1.5 mg/l", c3: "-", c4: "1.0 mg/l" },
    { type: 'data', name: "Nitrates (NO3)", c1: "45 mg/l", c2: "45 mg/l", c3: "-", c4: "-" },
    { type: 'subheader', content: "Substances affecting the potability of water" },
    { type: 'data', name: "pH", c1: "6.5 to 8.5", c2: "6.0 to 8.5", c3: "6.5 to 9.0", c4: "6.5 to 9.0" },
    { type: 'data', name: "T.D.S.", c1: "-", c2: "T.D.S.", c3: "T.D.S.", c4: "-." },
    { type: 'data', name: "Total Solids", c1: "1500 mg/l.", c2: "1500 mg/l.", c3: "-.", c4: "-" },
    { type: 'data', name: "Total Suspended Solids", c1: "25 mg/l", c2: "-", c3: "-", c4: "-" },
    { type: 'data', name: "Total Hardness (Caco3)", c1: "50 mg/l", c2: "-", c3: "-", c4: "-" },
    { type: 'data', name: "Total Residual Chlorine", c1: "-", c2: "-", c3: "-", c4: "-" },
    { type: 'data', name: "Electrical conduct at 25. C", c1: "-", c2: "-", c3: "1000 x 10-6 mhos", c4: "3000 x 10-6 mhos" },
    { type: 'data', name: "Free Carbon Di Oxide", c1: "-", c2: "-", c3: "12 mg/l", c4: "-" },
    { type: 'data', name: "Free Ammonical Nitrogen", c1: "-", c2: "-", c3: "1.2 mg/l", c4: "-" },
    { type: 'data', name: "Oil & Grease", c1: "-", c2: "-", c3: "0.1 mg/l", c4: "-" },
    { type: 'data', name: "Pesticides", c1: "-", c2: "-", c3: "0.02 mg/l", c4: "-" },
    { type: 'data', name: "Biotic Index", c1: "-", c2: "-", c3: "6.0 mg/l", c4: "-" },
    {
        type: 'data',
        name: "Best Usage",
        c1: "Unfiltered Public water supply after approved disinfection",
        c2: "Public water supply with approved treatment equal to coagulation, sedimentation & disinfection.",
        c3: "Not fit for human consumption, Fish & Wildlife Propagation.",
        c4: "Fit for Agriculture, Industrial cooling & process water.",
        isBestUsage: true
    },
    { type: 'data', name: "Total Ammonical Nitrogen", c1: "1.5 mg/l", c2: "1.5 mg/l", c3: "-", c4: "50 mg/l" },
    { type: 'data', name: "Chlorides (Cl)", c1: "600 mg/l", c2: "600 mg/l", c3: "-", c4: "600 mg/l" },
    { type: 'data', name: "Sulphates", c1: "400 mg/l", c2: "400 mg/l", c3: "-", c4: "1000 mg/l" },
    { type: 'data', name: "Copper (Cu)", c1: "1.5 mg/l", c2: "1.5 mg/l", c3: "-", c4: "-" },
    { type: 'data', name: "Manganese (Mn)", c1: "0.5 mg/l", c2: "3.0 mg/l", c3: "-", c4: "-" },
    { type: 'data', name: "Iron (Fe)", c1: "1.0 mg/l", c2: "5.0 mg/l", c3: "-", c4: "-" },
    { type: 'data', name: "Sodium", c1: "-", c2: "-", c3: "-", c4: "-" },
    { type: 'data', name: "Zinc (Zn)", c1: "15.0 mg/l", c2: "1.5 mg/l", c3: "5.0 mg/l", c4: "5.0 mg/l" },
    { type: 'data', name: "Phenolic Compounds", c1: "0.002 mg/l", c2: "0.002 mg/l", c3: "0.05 mg/l", c4: "-" },
    { type: 'data', name: "Alkyl Benzene sulphates", c1: "1.0 mg/l", c2: "1.0 mg/l", c3: "-", c4: "-" },
    { type: 'data', name: "Mineral Oil", c1: "0.3 mg/l", c2: "0.3 mg/l", c3: "-", c4: "-" },
    { type: 'data', name: "Ammonia", c1: "1.5 mg/l", c2: "1.5 mg/l", c3: "-", c4: "-" },
    { type: 'data', name: "B.O.D. (5 days 20°C)", c1: "2.0 mg/l (Monthly average of atleast 10 samples)", c2: "5.0 mg/l (Monthly average of atleast 10 samples)", c3: "10 mg/l", c4: "30 mg/l" },
    { type: 'data', name: "C.O.D.", c1: "-", c2: "-", c3: "-", c4: "150 mg/l" },
    { type: 'data', name: "D.O.", c1: "Not less than 5 mg/l (Monthly average of 100 samples)", c2: "4.0 mg/l", c3: "Not less than 3 mg/l", c4: "Not less than 2 mg/l" },
    { type: 'data', name: "Bacteriological Standards :", c1: "Coliform Bact. 250", c2: "Not greater than 5000", c3: "", c4: "" },
    { type: 'data', name: "(MPN/100)", c1: "", c2: "", c3: "", c4: "" },
];

function QualityStandards() {
    const [expandedCategory, setExpandedCategory] = useState<string | null>("Environmental Quality");
    const [selectedItem, setSelectedItem] = useState<string>("Water Quality");
    const navigate = useNavigate();

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 28;
    const totalPages = Math.ceil(fullTableData.length / ITEMS_PER_PAGE);

    const toggleCategory = (category: string) => {
        if (expandedCategory === category) {
            setExpandedCategory(null);
        } else {
            setExpandedCategory(category);
        }
    };

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
        if (item === "Air Quality") {
            navigate({ to: '/environmental-quality/air-quality' });
        } else if (item === "Water Quality") {
            navigate({ to: '/environmental-quality/water-quality' });
        } else if (item === "Noise Pollution") {
            navigate({ to: '/environmental-quality/noise-pollution' });
        } else if (item === "Hazardous Waste") {
            navigate({ to: '/waste-management/hazardous-waste' });
        } else if (item === "Biomedical Waste") {
            navigate({ to: '/waste-management/biomedical-waste' });
        }
    };

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

    const currentRows = fullTableData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            {/* Top Banner Section */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[280px] rounded-t-[48px] overflow-hidden">
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

                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-6 mt-[-30px]">
                            <h1 className="text-[40px] font-bold text-[#000000] tracking-tight leading-none mb-8">
                                Environmental Quality
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
                                {sidebarData.map((category) => {
                                    const isExpanded = expandedCategory === category.title;
                                    const hasActiveItem = category.items.includes(selectedItem);

                                    return (
                                        <div key={category.title} className="flex flex-col mb-2">
                                            {/* Category Header */}
                                            <div
                                                onClick={() => toggleCategory(category.title)}
                                                className={`flex items-center justify-between px-6 py-4 rounded-xl cursor-pointer transition-all duration-300 z-10 relative group
                                                    ${isExpanded || hasActiveItem
                                                        ? 'bg-linear-to-r from-[#0085E2] to-[#00A3FF] text-white shadow-lg shadow-blue-200 transform scale-[1.02]'
                                                        : 'bg-white hover:bg-gray-50 text-gray-700 hover:text-[#0085E2] border border-gray-100'
                                                    }`}
                                            >
                                                <span className="text-[15px] font-semibold tracking-wide">
                                                    {category.title}
                                                </span>
                                                {isExpanded ? (
                                                    <ChevronUp className={`w-5 h-5 transition-transform duration-300 ${isExpanded || hasActiveItem ? 'text-white' : 'text-gray-400 group-hover:text-[#0085E2]'}`} />
                                                ) : (
                                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded || hasActiveItem ? 'text-white' : 'text-gray-400 group-hover:text-[#0085E2]'}`} />
                                                )}
                                            </div>

                                            {/* Dropdown Items */}
                                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <div className="mx-4 mt-2 mb-4 bg-white border border-gray-100 rounded-xl flex flex-col gap-1 shadow-sm p-2">
                                                    {category.items.map((item) => {
                                                        const isActive = selectedItem === item;
                                                        return (
                                                            <div
                                                                key={item}
                                                                onClick={() => handleItemClick(item)}
                                                                className={`px-4 py-3 rounded-lg cursor-pointer text-[14px] transition-all duration-200 flex items-center justify-between group
                                                                    ${isActive
                                                                        ? 'bg-blue-50 text-[#0085E2] font-semibold translate-x-1'
                                                                        : 'text-gray-600 hover:text-[#0085E2] hover:bg-gray-50 hover:translate-x-1'
                                                                    }`}
                                                            >
                                                                {item}
                                                                {isActive && <ChevronRight className="w-4 h-4 text-[#0085E2]" />}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                <h2 className="text-[24px] font-bold text-gray-900 mb-8 uppercase border-b border-gray-200 pb-4">
                                    WATER QUALITY STANDARDS FOR BEST DESIGNATED USAGES
                                </h2>

                                {/* Table */}
                                <div className="border border-gray-200 rounded-xl overflow-hidden text-[14px] mb-6">
                                    <div className="overflow-x-auto">
                                        <table className="w-full min-w-[800px]">
                                            <thead className="bg-[#f8f9fa] border-b border-gray-200">
                                                <tr>
                                                    <th className="py-4 px-4 text-left font-semibold text-gray-700 w-[20%] border-r border-gray-200">Category of Fresh Water</th>
                                                    <th className="py-4 px-4 text-left font-semibold text-gray-700 w-[20%] border-r border-gray-200">A - I</th>
                                                    <th className="py-4 px-4 text-left font-semibold text-gray-700 w-[20%] border-r border-gray-200">A-II</th>
                                                    <th className="py-4 px-4 text-left font-semibold text-gray-700 w-[20%] border-r border-gray-200">A-III</th>
                                                    <th className="py-4 px-4 text-left font-semibold text-gray-700 w-[20%]">A-IV</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {currentRows.map((row, idx) => {
                                                    if (row.type === 'header') {
                                                        return (
                                                            <tr key={idx} className="bg-gray-50 border-y border-gray-200">
                                                                <td colSpan={5} className="py-3 px-4 font-semibold text-gray-700">{row.content}</td>
                                                            </tr>
                                                        );
                                                    } else if (row.type === 'subheader') {
                                                        return (
                                                            <tr key={idx} className="bg-gray-50/50 border-y border-gray-100">
                                                                <td colSpan={5} className="py-2 px-4 font-bold text-gray-800 text-[13px]">{row.content}</td>
                                                            </tr>
                                                        );
                                                    } else {
                                                        // Data row
                                                        return (
                                                            <tr key={idx} className="hover:bg-gray-50/50">
                                                                <td className={`py-3 px-4 text-gray-700 border-r border-gray-100 ${row.isBestUsage ? 'align-top font-medium' : ''}`}>
                                                                    {row.name}
                                                                </td>
                                                                <td className={`py-3 px-4 text-gray-600 border-r border-gray-100 ${row.isBestUsage ? 'align-top' : ''}`}>
                                                                    {row.c1}
                                                                </td>
                                                                <td className={`py-3 px-4 text-gray-600 border-r border-gray-100 ${row.isBestUsage ? 'align-top' : ''}`}>
                                                                    {row.c2}
                                                                </td>
                                                                <td className={`py-3 px-4 text-gray-600 border-r border-gray-100 ${row.isBestUsage ? 'align-top' : ''}`}>
                                                                    {row.c3}
                                                                </td>
                                                                <td className={`py-3 px-4 text-gray-600 ${row.isBestUsage ? 'align-top' : ''}`}>
                                                                    {row.c4}
                                                                </td>
                                                            </tr>
                                                        );
                                                    }
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Pagination Controls */}
                                {totalPages > 1 && (
                                    <div className="flex items-center justify-center gap-2 mt-8">
                                        <button
                                            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                                            disabled={currentPage === 1}
                                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
                                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
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

export default QualityStandards;
