import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';

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
        items: ["Public Hearing Upcoming", "Public Hearing Conducted"]
    },
    {
        title: "Public Awareness",
        items: ["Events", "Awareness", "Photo Gallery"]
    },
    {
        title: "Other Links",
        items: ["Common Effluent Treatment Plant", "Comprehensive Envt Pollution Index", "Miscellaneous topics & Information", "Oil Spills", "cess Act"]
    }
];

interface SidebarProps {
    activeItem: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem }) => {
    const navigate = useNavigate();

    // Find the category of the active item to expand it by default
    const defaultExpanded = sidebarData.find(cat => cat.items.includes(activeItem))?.title || "Environmental Quality";

    const [expandedCategory, setExpandedCategory] = useState<string | null>(defaultExpanded);

    const toggleCategory = (category: string) => {
        if (expandedCategory === category) {
            setExpandedCategory(null);
        } else {
            setExpandedCategory(category);
        }
    };

    const handleItemClick = (item: string) => {
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
        } else if (item === "End-of-Life Vehicles") {
            navigate({ to: '/waste-management/end-of-life-vehicles' });
        } else if (item === "Batteries") {
            navigate({ to: '/waste-management/batteries' });
        } else if (item === "Fly Ash") {
            navigate({ to: '/waste-management/fly-ash' });
        } else if (item === "Electronic Waste") {
            navigate({ to: '/waste-management/electronic-waste' });
        } else if (item === "Plastic Waste") {
            navigate({ to: '/waste-management/plastic-waste' });
        } else if (item === "Common Effluent Treatment Plant") {
            navigate({ to: '/waste-management/common-effluent-treatment-plant' });
        } else if (item === "Construction and Demolition Waste") {
            navigate({ to: '/waste-management/construction-demolition-waste' });
        } else if (item === "Solid Waste Management") {
            navigate({ to: '/waste-management/solid-waste' });
        } else if (item === "Photo Gallery") {
            navigate({ to: '/photo-gallery' });
        } else if (item === "Public Hearing Upcoming") {
            navigate({ to: '/notices/publichearings/upcoming' });
        } else if (item === "Public Hearing Conducted") {
            navigate({ to: '/notices/publichearings/conducted' });
        } else if (item === "Common Effluent Treatment Plant") {
            navigate({ to: '/waste-management/common-effluent-treatment-plant' });
        } else if (item === "Comprehensive Envt Pollution Index") {
            navigate({ to: '/cepi' });
        } else if (item === "Miscellaneous topics & Information") {
            navigate({ to: '/other-links/miscellaneous' });
        } else if (item === "Oil Spills") {
            navigate({ to: '/other-links/oil-spills' });
        } else if (item === "cess Act") {
            navigate({ to: '/other-links/cess' });
        }
    };

    return (
        <div className="w-full lg:w-[320px] flex-shrink-0">
            <div className="flex flex-col gap-4">
                {sidebarData.map((category) => {
                    const isExpanded = expandedCategory === category.title;
                    const hasActiveItem = category.items.includes(activeItem);

                    return (
                        <div key={category.title} className="flex flex-col mb-2">
                            {/* Category Header */}
                            <div
                                onClick={() => toggleCategory(category.title)}
                                className={`flex items-center justify-between px-6 py-4 rounded-xl cursor-pointer transition-all duration-300 z-10 relative group touch-manipulation
                                    ${isExpanded || hasActiveItem
                                        ? 'bg-linear-to-r from-[#0085E2] to-[#00A3FF] text-white shadow-lg shadow-blue-200 transform scale-[1.02]'
                                        : 'bg-white hover:bg-gray-50 text-gray-700 hover:text-[#0085E2] border border-gray-100 active:scale-[0.98]'
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
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="mx-4 mt-2 mb-4 bg-white border border-gray-100 rounded-xl flex flex-col gap-1 shadow-sm p-2">
                                    {category.items.map((item) => {
                                        const isActive = activeItem === item;
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
    );
};

export default Sidebar;
