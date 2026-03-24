import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

interface StandingOrdersSidebarProps {
    activeSection: string;
}

const tabs = [
    "All Standing Orders",
    "Enforcement Policy",
    "Establishment Branch",
    "Finance Matter",
    "Consent Management",
    "Consent Fees JVS Fees",
    "Auto Renewal",
    "Technical Administration",
    "Cess",
    "EC Public Hearing CRZ",
    "RRZ",
    "Waste Management",
    "CETP",
    "Legal",
    "Miscellaneous"
];

function StandingOrdersSidebar({ activeSection }: StandingOrdersSidebarProps) {
    const [selectedTab, setSelectedTab] = useState<string>(activeSection);
    const navigate = useNavigate();

    function handleTabClick(tab: string) {
        const tabKey = tab.toLowerCase().replaceAll(" ", "");
        setSelectedTab(tabKey);
        navigate({ to: `/standing-orders/${tabKey}` });
    }

    return (
        <div className="w-full flex flex-row lg:flex-col gap-3 lg:gap-4 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {tabs.map((tab) => {
                const tabKey = tab.toLowerCase().replaceAll(" ", "");
                const isActive = selectedTab === tabKey;
                return (
                    <div
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`flex items-center justify-between px-4 lg:px-6 py-3 lg:py-5 rounded-xl lg:rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-200 whitespace-nowrap lg:whitespace-normal shrink-0 lg:shrink
                            ${isActive
                                ? 'border-2 border-[#00A3FF] bg-[#00A3FF]/5'
                                : 'border border-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF]'
                            }`}
                    >
                        <span className={`text-[13px] lg:text-[14px] font-normal transition-colors duration-200 ${isActive ? 'text-[#00A3FF] font-medium' : 'text-gray-800'}`}>
                            {tab}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export default StandingOrdersSidebar;