import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import waterqualitymah from "/assets/Water Quality Network-mah.jpg";
import waterqualitymumbai from "/assets/waterqualitymum.jpg";
import surfacenationalprogram from "/assets/surfacenationalprogram.jpg";
import groundnationalprogram from "/assets/groundnationalprogram.jpg";
import surfacestateprogram from "/assets/surfacestateprogram.jpg";


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

interface MapData {
    id: number;
    title: string;
    previewImage: string;
    fullImage: string;
}

const mapList: MapData[] = [
    {
        id: 1,
        title: "Water Quality Monitoring Network in Maharashtra",
        previewImage: waterqualitymah,
        fullImage: waterqualitymah,
    },
    {
        id: 2,
        title: "Water Quality Monitoring Network in & around Mumbai",
        previewImage: waterqualitymumbai,
        fullImage: waterqualitymumbai,
    },
    {
        id: 3,
        title: "National Water Quality Monitoring Program (Surface Water Locations)",
        previewImage: surfacenationalprogram,
        fullImage: surfacenationalprogram,
    },
    {
        id: 4,
        title: "National Water Quality Monitoring Program (Ground Water Locations)",
        previewImage: groundnationalprogram,
        fullImage: groundnationalprogram,
    },
    {
        id: 5,
        title: "State Water Quality Monitoring Program (Surface Water Locations)",
        previewImage: surfacestateprogram,
        fullImage: surfacestateprogram,
    },
    {
        id: 6,
        title: "State Water Quality Monitoring Program (Ground Water Locations)",
        previewImage: groundnationalprogram,
        fullImage: groundnationalprogram,
    }
];

const MapCard = ({ title, map, onOpen }: { title: string, map: MapData; onOpen: (img: string) => void }) => {
    return (
        <div className="relative bg-white border border-gray-100 rounded-lg shadow-sm w-full flex flex-col pt-12 pb-6 px-8 hover:shadow-md transition-shadow duration-300">
            {/* Floating Image Preview on top left */}
            <div
                className="absolute -top-8 left-6 w-[100px] h-[100px] bg-white rounded-md shadow-lg border border-gray-200 p-1 cursor-pointer hover:scale-105 transition-transform overflow-hidden"
                onClick={() => onOpen(map.fullImage)}
            >
                <img src={map.previewImage} alt="Map Preview" className="w-full h-full object-cover" />
            </div>

            {/* Card Content */}
            <div className="flex flex-col items-start justify-center min-h-[80px] ml-24 pl-4">
                <h3 className="text-[#333333] font-bold text-[15px] leading-tight text-left">
                    {title}
                </h3>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gray-100 my-6" />

            {/* Action Buttons */}
            <div className="flex justify-end">
                <button
                    onClick={() => onOpen(map.fullImage)}
                    className="border border-[#0085E2] text-[#0085E2] font-semibold py-1.5 px-8 rounded-full hover:bg-[#0085E2] hover:text-white transition-colors text-[14px] cursor-pointer"
                >
                    View
                </button>
            </div>
        </div>
    );
};

function Maps() {
    const [expandedCategory, setExpandedCategory] = useState<string | null>("Environmental Quality");
    const [selectedItem, setSelectedItem] = useState<string>("Water Quality");
    const [selectedImg, setSelectedImg] = useState<string | null>(null);
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
                        <div className="flex-1">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                <h2 className="text-[24px] font-bold text-gray-900 mb-12 uppercase border-b border-gray-200 pb-4">
                                    WATER QUALITY- MAPS OF ENVIRONMENTAL MONITORING NETWORK OF MAHARASHTRA
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500 pt-4">
                                    {mapList.map((map) => (
                                        <MapCard key={map.id} title={map.title} map={map} onOpen={setSelectedImg} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Modal / Lightbox Section --- */}
            {selectedImg && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="relative bg-white rounded-lg p-6 max-w-[95vw] max-h-[95vh] shadow-2xl overflow-auto">
                        {/* The Full Image */}
                        <img
                            src={selectedImg}
                            alt="Full Map View"
                            className="max-w-[800px] h-auto block rounded-sm"
                        />

                        {/* Exit Button */}
                        <button
                            onClick={() => setSelectedImg(null)}
                            className="fixed bottom-6 right-15 bg-white rounded-full shadow-lg border border-gray-300 p-1 hover:bg-gray-100 transition-colors cursor-pointer"
                            aria-label="Close modal"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 text-gray-500 hover:cursor-pointer"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Maps;
