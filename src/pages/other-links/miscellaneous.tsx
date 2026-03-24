import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ChevronDown, ChevronUp } from 'lucide-react';
import DocumentCard from '../../components/DocumentCard';

const standingorders = "/assets/standingorders.svg";

const sidebarTabs = [
    "Clean Technology & Climate change",
    "Environmental Planning",
    "Cess"
];

function Miscellaneous() {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState(sidebarTabs[0]);
    // State to track expanded accordion items. Using an array to allow multiple open or object for named sections
    // Simple approach: Keep track of open section ID. If openSection === id, it's open.
    // User requested "MPCB Initiatives" open by default? The image shows it open.
    const [openSection, setOpenSection] = useState<string | null>("MPCB Initiatives");

    const handleTabClick = (tab: string) => {
        if (tab === "Environmental Planning") {
            navigate({ to: '/other-links/environment-planning' });
            return;
        }
        if (tab === "Cess") {
            navigate({ to: '/other-links/cess-rules' });
            return;
        }
        setSelectedTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleSection = (section: string) => {
        if (openSection === section) {
            setOpenSection(null);
        } else {
            setOpenSection(section);
        }
    };

    const initiativesDocuments = [
        { title: "Office Order for Clean Technology and Climate Change.", link: "#" },
        { title: "Minutes of the meeting of Cell for Clean Technology and Climate Change.", link: "#" }
    ];

    const literatureDocuments = [
        { title: "The Great Climate Change Debate.", link: "#" },
        { title: "Calculate Your Carbon FootPrint.", link: "#" },
        { title: "Go Green", link: "#" },
        { title: "Towards an Equitable Solution", link: "#" }
    ];

    const successStoryDocuments = [
        { title: "HCL's initiatives in creating a Green IT Enterprise", link: "#" }
    ];

    const techDisseminationDoc = {
        id: 1,
        title: "Technology for Dissemination"
    };

    return (
        <div className="font-family-helvetica">
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
                                Related Topics & Information - Miscellaneous
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Left Sidebar */}
                        <div className="w-full lg:w-[320px] flex-shrink-0">
                            <div className="flex flex-col gap-4">
                                {sidebarTabs.map((tab) => {
                                    const isActive = selectedTab === tab;
                                    return (
                                        <div
                                            key={tab}
                                            onClick={() => handleTabClick(tab)}
                                            className={`flex items-center justify-between px-6 py-5 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-200
                                                ${isActive
                                                    ? 'border-2 border-[#00A3FF] bg-[#00A3FF]/5'
                                                    : 'border border-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF]'
                                                }`}
                                        >
                                            <span className={`text-[14px] font-normal transition-colors duration-200 ${isActive ? 'text-[#00A3FF] font-medium' : 'text-gray-800'}`}>
                                                {tab}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1 w-full">
                            <div className="rounded-[24px] p-0 md:p-8 min-h-[400px]">
                                <h2 className="text-[20px] md:text-[24px] font-semibold text-gray-800 mb-6">
                                    {selectedTab}
                                </h2>

                                {/* Content based on selected tab */}
                                {selectedTab === "Clean Technology & Climate change" ? (
                                    <div className="space-y-8">
                                        {/* Dropdowns */}
                                        <div className="space-y-4">
                                            {/* MPCB Initiatives */}
                                            <div className="border border-gray-200 rounded-xl overflow-hidden">
                                                <button
                                                    onClick={() => toggleSection("MPCB Initiatives")}
                                                    className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                                                >
                                                    <span className="text-[15px] text-gray-700 font-medium">MPCB Initiatives</span>
                                                    {openSection === "MPCB Initiatives" ? (
                                                        <ChevronUp className="w-5 h-5 text-gray-500" />
                                                    ) : (
                                                        <ChevronDown className="w-5 h-5 text-gray-500" />
                                                    )}
                                                </button>
                                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === "MPCB Initiatives" ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    <div className="border-t border-gray-100 bg-gray-50 p-4 space-y-2">
                                                        {initiativesDocuments.map((doc, idx) => (
                                                            <a key={idx} href={doc.link} className="block text-[#0085E2] hover:underline cursor-pointer text-sm font-medium">
                                                                {doc.title}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Literature */}
                                            <div className="border border-gray-200 rounded-xl overflow-hidden">
                                                <button
                                                    onClick={() => toggleSection("Literature")}
                                                    className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                                                >
                                                    <span className="text-[15px] text-gray-700 font-medium">Literature</span>
                                                    {openSection === "Literature" ? (
                                                        <ChevronUp className="w-5 h-5 text-gray-500" />
                                                    ) : (
                                                        <ChevronDown className="w-5 h-5 text-gray-500" />
                                                    )}
                                                </button>
                                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === "Literature" ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    {openSection === "Literature" && (
                                                        <div className="border-t border-gray-100 bg-gray-50 p-4 space-y-2">
                                                            {literatureDocuments.map((doc, idx) => (
                                                                <a key={idx} href={doc.link} className="block text-[#0085E2] hover:underline cursor-pointer text-sm font-medium">
                                                                    {doc.title}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Success Story */}
                                            <div className="border border-gray-200 rounded-xl overflow-hidden">
                                                <button
                                                    onClick={() => toggleSection("Success Story")}
                                                    className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                                                >
                                                    <span className="text-[15px] text-gray-700 font-medium">Success Story</span>
                                                    {openSection === "Success Story" ? (
                                                        <ChevronUp className="w-5 h-5 text-gray-500" />
                                                    ) : (
                                                        <ChevronDown className="w-5 h-5 text-gray-500" />
                                                    )}
                                                </button>
                                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === "Success Story" ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    {openSection === "Success Story" && (
                                                        <div className="border-t border-gray-100 bg-gray-50 p-4 space-y-2">
                                                            {successStoryDocuments.map((doc, idx) => (
                                                                <a key={idx} href={doc.link} className="block text-[#0085E2] hover:underline cursor-pointer text-sm font-medium">
                                                                    {doc.title}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Event & Tech Dissemination */}
                                        <div className="space-y-4">
                                            <DocumentCard document={techDisseminationDoc} />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-[14px] text-gray-700 leading-relaxed">
                                        <p>
                                            Content for "{selectedTab}" will be displayed here.
                                        </p>
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

export default Miscellaneous;
