import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';

// Reusing assets
const standingorders = "/assets/standingorders.svg";

// Sidebar Data (Same as WaterQuality)
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

function ClosureDirections() {
    const navigate = useNavigate();
    const [expandedCategory, setExpandedCategory] = useState<string | null>("Environmental Quality");
    const [selectedItem, setSelectedItem] = useState<string>("Water Quality");

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

    const items = [
        { name: "M/s.Manpasand Textile Processors Pvt.Ltd.,", address: "30-33, Parvati Co-Op.Industrial Estate, Yadrav, Tal: Shirol, Dist: Kolhapur." },
        { name: "M/s.Ramgopal Birla Textile Pvt.Ltd.,", address: "228, Parvati Co-Op.Industrial Estate,Yadrav, Tal: Shirol, Dist: Kolhapur." },
        { name: "M/s.Radha Kanhaiya Textile Processors,", address: "Plot No.1, 2 & 3, Gat No.829, Ganganagar, Ichalkaranji, Kolhapur." },
        { name: "M/s.Raghunandan Processors Ltd.,", address: "Plot No.21, H.No.1637, Jawhar Nagar, Station Road, Ichalkaranji, Kolhapur." },
        { name: "M/s.Sawant Processors,", address: "W.No.22, H.No.625, Ganesh Nagar, Ichalkaranji, Kolhapur." },
        { name: "M/s.Shantinath Synthetics (P) Ltd.,", address: "Gat No.7, S.No.586-A, Ichalkaranji, Kolhapur." },
        { name: "M/s.Yashwant Co-Op.Processors Ltd.,", address: "Plot No.19, Indl.Area, Ichalkaranji, Kolhapur." },
        { name: "M/s.Swadeshi Dyeing & Bleaching Mills Ltd.,", address: "Plot No.26, Inchalkaranji Indl.Estate, Ichalkaranji, Kolhapur" },
        { name: "M/s.Marda Processors,", address: "4/431, Shripadnagar, Ichalkaranji, Kolhapur." },
        { name: "M/s.Laxmi Co-Op.Processors Ltd.,", address: "Ichalkaranji Indl.Estate, Ichalkaranji, Kolhapur." },
        { name: "M/s.Amit Weaving Mills Pvt.Ltd.,", address: "H.No.23/302, W.No.9, Ganganagar, Ichalkaranji, Tal: Hatkanangale, Kolhapur." },
        { name: "M/s.Arvind Processors,", address: "Plot No.13, Ichalkaranji Indl.Estate, Kolhapur" },
        { name: "M/s.Pareek Processors,", address: "Plot No.201, 202, Khanjire, Industrial Estate, Ichalkaranji, Kolhapur." },
        { name: "M/s.Ichalkaranji Textiles Pvt.Ltd.,", address: "147-149, Parvati Co-Op.Indl.Estate Yadrav, Tal: Shirol, Dist: Kolhapur." },
        { name: "M/s.Jubilee Fabrics Pvt.Ltd.,", address: "Parvati Co-Op.Industrial Estate, Yadrav, Tal: Shirol, Dist: Kolhapur." },
        { name: "M/s.Mahesh Textile Processors,", address: "37 to 39 Laxmi Co-Op.Industrial Estate, Hatkangale, Kolhapur." },
        { name: "M/s.Mahalaxmi Co-Op.Yarn Process Ltd.,", address: "27 to 35, Laxmi Co-Op.Industrial Estate, Hatkanagale, Kolhapur." },
        { name: "M/s.Shri Amit Processors,", address: "Plot No.59, Bldg. No.91, Industrial Estate, Ichalkaranji, Kolhapur." },
        { name: "M/s.Deccan Co-Op.Textile Ltd.,", address: "Plot No.470, R.S. No.60, Khanjire Indl. Estate, Ichalkaranji, Kolhapur." },
        { name: "M/s.Hanuman Bleaching Work,", address: "Plot No.65, Gat No.788, Khanjire Industrial Estate, Ichalkaranji, Dist: Kolhapur" },
        { name: "M/s Lokmitra Co Op Yarn Proceesors Ltd", address: "W No 23,114, 117 (1), Gat No 788, Plot No 26,26, 12 and 3 & 9, Behind Khanjire Industrial Estate, Ichalkaranji, Dist- Kolhapur" },
        { name: "M/s Meena Bleaching", address: "Shatkon Chowk, Kudache Mala, Chandur Road, Ichalkaranji,Dist: Kolhapur." }
    ];

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
                        {/* Sidebar */}
                        <div className="w-full lg:w-[320px] flex-shrink-0">
                            <div className="flex flex-col gap-4">
                                {sidebarData.map((category) => {
                                    const isExpanded = expandedCategory === category.title;
                                    const hasActiveItem = category.items.includes(selectedItem);
                                    return (
                                        <div key={category.title} className="flex flex-col mb-2">
                                            <div
                                                onClick={() => toggleCategory(category.title)}
                                                className={`flex items-center justify-between px-6 py-4 rounded-xl cursor-pointer transition-all duration-300 z-10 relative group
                                                    ${isExpanded || hasActiveItem
                                                        ? 'bg-linear-to-r from-[#0085E2] to-[#00A3FF] text-white shadow-lg shadow-blue-200 transform scale-[1.02]'
                                                        : 'bg-white hover:bg-gray-50 text-gray-700 hover:text-[#0085E2] border border-gray-100'
                                                    }`}
                                            >
                                                <span className="text-[15px] font-semibold tracking-wide">{category.title}</span>
                                                {isExpanded ? (
                                                    <ChevronUp className={`w-5 h-5 transition-transform duration-300 ${isExpanded || hasActiveItem ? 'text-white' : 'text-gray-400 group-hover:text-[#0085E2]'}`} />
                                                ) : (
                                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded || hasActiveItem ? 'text-white' : 'text-gray-400 group-hover:text-[#0085E2]'}`} />
                                                )}
                                            </div>
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
                        <div className="flex-1">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white">
                                <h2 className="text-[24px] font-bold text-gray-900 mb-6 uppercase border-b border-gray-200 pb-4">
                                    PANCHGANGA RIVER
                                </h2>

                                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="space-y-4">
                                        {items.map((item, idx) => (
                                            <div key={idx} className="flex flex-col gap-1 border-b border-gray-50 pb-4 last:border-b-0">
                                                <h4 className="text-[15px] font-bold text-gray-800">
                                                    {item.name}
                                                </h4>
                                                <p className="text-[14px] text-gray-600 leading-relaxed">
                                                    {item.address}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ClosureDirections;
