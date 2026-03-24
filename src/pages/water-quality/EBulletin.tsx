import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';

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

interface BulletinData {
    [key: string]: { month: string; pdfUrl: string }[];
}

const bulletinData: BulletinData = {
    "2026": [
        { month: "October 2026", pdfUrl: "#" },
        { month: "May 2026", pdfUrl: "#" }
    ],
    "2025": [
        { month: "December 2025", pdfUrl: "#" },
        { month: "November 2025", pdfUrl: "#" },
        { month: "October 2025", pdfUrl: "#" },
        { month: "September 2025", pdfUrl: "#" },
        { month: "August 2025", pdfUrl: "#" },
        { month: "July 2025", pdfUrl: "#" },
        { month: "June 2025", pdfUrl: "#" }
    ]
};

const bulletinYears = [
    "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"
].reverse();

function EBulletin() {
    const [expandedCategory, setExpandedCategory] = useState<string | null>("Environmental Quality");
    const [selectedItem, setSelectedItem] = useState<string>("Water Quality");
    const [expandedYear, setExpandedYear] = useState<string | null>(null);
    const navigate = useNavigate();

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

    const toggleYear = (year: string) => {
        if (expandedYear === year) {
            setExpandedYear(null);
        } else {
            setExpandedYear(year);
        }
    };

    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            {/* Top Banner Section */}
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
                            <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-[#000000] tracking-tight leading-tight md:leading-none mb-4 md:mb-8">
                                Environmental Quality
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1400px] px-4">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
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
                        <div className="flex-1 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="rounded-[24px] p-4 md:p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                {/* Year Accordions */}
                                <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden">
                                    {bulletinYears.map((year) => {
                                        const isOpen = expandedYear === year;
                                        return (
                                            <div key={year} className={`border-b border-gray-200 last:border-b-0`}>
                                                <button
                                                    onClick={() => toggleYear(year)}
                                                    className="w-full flex items-center justify-between px-6 py-4 bg-gray-50/50 hover:bg-gray-100 transition-colors cursor-pointer text-left group"
                                                >
                                                    <span className="text-[15px] font-bold text-gray-700 group-hover:text-[#0085E2] transition-colors">
                                                        E Bulletin of Water Quality {year}.
                                                    </span>
                                                    {isOpen ? (
                                                        <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-[#0085E2]" />
                                                    ) : (
                                                        <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-[#0085E2]" />
                                                    )}
                                                </button>

                                                <div
                                                    className={`overflow-hidden transition-all duration-300 ease-in-out bg-white
                                                        ${isOpen ? 'max-h-[500px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'}`}
                                                >
                                                    <div className="p-6 text-gray-600 text-[14px]">
                                                        {bulletinData[year] ? (
                                                            <div className="flex flex-col gap-3">
                                                                {bulletinData[year].map((bulletin, idx) => (
                                                                    <div key={idx} className="flex items-center gap-2">
                                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#0085E2] shrink-0"></span>
                                                                        <a
                                                                            href={bulletin.pdfUrl}
                                                                            target="_blank"
                                                                            rel="noreferrer"
                                                                            className="text-gray-700 hover:text-[#0085E2] hover:underline transition-colors"
                                                                        >
                                                                            {bulletin.month}
                                                                        </a>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <div className="text-gray-400 italic">No bulletins available for this year.</div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EBulletin;
