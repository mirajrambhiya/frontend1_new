import { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import PageBanner from '../../../components/PageBanner';
import Sidebar from '../../../components/Sidebar';

const standingorders = "/assets/standingorders.svg";

// Reusable Dropdown/Accordion Section
const DropdownSection = ({ title, items }: { title: string, items: (string | { text: string; link: string })[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-8 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between px-6 py-4 bg-gray-50/50 cursor-pointer hover:bg-gray-100/80 transition-colors"
            >
                <h4 className="text-[16px] font-bold text-gray-800">{title}</h4>
                {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
            </div>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 bg-white flex flex-col gap-2">
                    {items.length > 0 ? items.map((item, idx) => {
                        if (typeof item === 'string') {
                            return (
                                <div key={idx} className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group">
                                    <span className="flex-1 font-medium">{item}</span>
                                </div>
                            );
                        } else {
                            return (
                                <a
                                    key={idx}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group block"
                                >
                                    <span className="flex-1 font-medium">{item.text}</span>
                                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0085E2]" />
                                </a>
                            );
                        }
                    }) : (
                        <div className="px-4 py-3 text-[14px] text-gray-500 italic">No items available</div>
                    )}
                </div>
            </div>
        </div>
    );
};

const ConstructionDemolition = () => {
    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            <PageBanner title="Waste Management" image={standingorders} />

            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <Sidebar activeItem="Construction and Demolition Waste" />

                        {/* Content */}
                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                <h1 className="text-[24px] font-bold text-gray-900 uppercase mb-8 border-b border-gray-200 pb-4">
                                    CONSTRUCTION AND DEMOLITION WASTE
                                </h1>

                                <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <h3 className="text-[16px] font-medium text-gray-800">
                                        Procedure for Authorization under Construction and Demolition waste management Rules,2016
                                    </h3>
                                </div>

                                <DropdownSection
                                    title="Rules/ notification"
                                    items={[
                                        { text: "Construction and demolition waste Rules 2016.", link: "#" }
                                    ]}
                                />

                                <DropdownSection
                                    title="Guidelines/Manuals"
                                    items={[
                                        { text: "CPCB", link: "https://cpcb.nic.in/technical-guidelines-5/" }
                                    ]}
                                />

                                <DropdownSection
                                    title="Annual Report"
                                    items={[
                                        { text: "(2018-2019)", link: "#" },
                                        { text: "(2019-2022)", link: "#" },
                                        { text: "(2020-2021)", link: "#" },
                                        { text: "(2021-2022)", link: "#" },
                                        { text: "(2022-2023)", link: "#" }
                                    ]}
                                />

                                <DropdownSection
                                    title="Construction and demolition waste management in the Maharashtra"
                                    items={[{ text: "Abstract Year Wise- Financial Year", link: "#" }]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConstructionDemolition;
