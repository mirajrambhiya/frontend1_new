import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PageBanner from '../../../components/PageBanner.tsx';
import Sidebar from '../../../components/Sidebar.tsx';

// Reusable Dropdown/Accordion Section for Minutes
const MinutesDropdown = ({ title, items }: { title: string, items: string[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between px-6 py-4 bg-gray-50/50 cursor-pointer hover:bg-gray-100/80 transition-colors"
            >
                <h4 className="text-[16px] font-semibold text-gray-800">{title}</h4>
                {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
            </div>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 bg-white flex flex-col gap-3">
                    {items.map((item, idx) => (
                        <div key={idx} className="px-4 py-2 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

function Registration() {
    // Minutes Data
    const minutes2022_23 = ["4th Minutes", "5th Minutes", "6th Minutes"];
    const minutes2023_24 = [
        "1st Minutes", "2nd Minutes", "3rd Minutes", "4th Minutes",
        "5th Minutes", "6th Minutes (1st Sitting)", "6th Minutes (2nd Sitting)",
        "6th Minutes (3rd Sitting)", "7th Minutes", "8th Minutes"
    ];
    const minutes2024_25 = [
        "1st Minutes", "2nd Minutes (1st Sitting)", "2nd Minutes (2nd Sitting)",
        "2nd Minutes (3rd Sitting)", "3rd Minutes", "4th Minutes", "5th Minutes"
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
                                <h2 className="text-[20px] font-bold text-gray-900 mb-2 uppercase leading-snug">
                                    REGISTRATION OF RECYCLERS/REPROCESSORS OF HAZARDOUS WASTE AND E-WASTE
                                </h2>
                                <p className="text-[14px] text-gray-600 mb-8 pb-4 border-b border-gray-100">
                                    Constitution of MPCB Registration Committee for Environmental Sound Management of Hazardous Waste
                                </p>

                                <div className="flex flex-col gap-2">
                                    <MinutesDropdown title="Minutes of committee meeting 2022-23" items={minutes2022_23} />
                                    <MinutesDropdown title="Minutes of committee meeting 2023-24" items={minutes2023_24} />
                                    <MinutesDropdown title="Minutes of committee meeting 2024-25" items={minutes2024_25} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Registration;
