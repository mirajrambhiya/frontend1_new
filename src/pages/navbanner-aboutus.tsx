import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { motion } from 'framer-motion';

interface BannerProps {
    bannerSection: string;
}

const tabs = [
    "Introduction",
    "Establishment",
    "Present Board",
    "Organizational Structure",
    "Office In-charge",
    "Offices",
    "Laboratories",
    "Annual Report",
    "Training",
    "Budget",
    "MPCB Employees"
];

function Banner({ bannerSection }: BannerProps) {
    const [activeTab, setActiveTab] = useState(bannerSection);
    const navigate = useNavigate();

    function navigationToPage(tabKey: string) {
        return () => {
            setActiveTab(tabKey);
            navigate({ to: `/about/${tabKey}` });
        };
    }

    return (
        <div className="w-full flex justify-center py-6 md:py-10 font-family-helvetica mt-[-20px] md:mt-[-40px] relative z-20">
            {/* Added style for hiding scrollbar if not globally available, though 'scrollbar-hide' class is standard in some setups */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            <nav className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 p-2 bg-gray-100 border border-gray-100 rounded-2xl shadow-sm w-[95%] md:w-auto max-w-7xl mx-auto">
                {tabs.map((tab) => {
                    const tabKey = tab.toLowerCase().replaceAll(" ", "");
                    const isActive = activeTab === tabKey;

                    return (
                        <button
                            key={tabKey}
                            onClick={navigationToPage(tabKey)}
                            // Mobile: auto width, wrap. Desktop: fixed width (133px), nowrap, shrink if needed.
                           className="relative w-auto md:w-[133px] h-auto min-h-[40px] md:h-[60px] px-4 py-2 md:px-4 md:py-0 text-[11px] md:text-[12px] font-medium focus:outline-none bg-white rounded-xl md:rounded-2xl group cursor-pointer border border-transparent flex items-center justify-center text-center leading-tight whitespace-normal"
                        >
                            {/* Active Background (Framer Motion) */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    initial={false}
                                    className="absolute inset-0 rounded-2xl bg-[#00A3FF]"
                                    transition={{ type: "spring", bounce: 0, duration: 0.005 }}
                                />
                            )}

                            {/* Tab Label */}
                            <span
                                className={`relative z-10 transition-colors duration-300 ${isActive
                                    ? 'text-white font-medium'
                                    // Uses group-hover so the text turns blue when the button area is hovered
                                    : 'text-black group-hover:text-[#00A3FF]'
                                    }`}
                            >
                                {tab}
                            </span>

                            {/* Inactive Border */}
                            {!isActive && (
                                <div className="absolute inset-0 border border-gray-200 rounded-2xl pointer-events-none transition-colors duration-300 group-hover:border-[#00A3FF]/30" />
                            )}
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}

export default Banner;