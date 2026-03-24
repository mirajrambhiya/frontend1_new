import { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';

import DocumentCard from '../../components/DocumentCard';

import PageBanner from '../../components/PageBanner.tsx';
import Sidebar from '../../components/Sidebar.tsx';





// Reusable Dropdown Section
const DropdownSection = ({ title, items }: { title: string, items: string[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 transition-all duration-300 hover:shadow-md">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between px-4 md:px-6 py-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors tap-highlight-transparent"
            >
                <h4 className="text-[14px] md:text-[15px] font-semibold text-gray-800 leading-snug pr-4">{title}</h4>
                {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />}
            </div>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 bg-white grid grid-cols-1 md:grid-cols-2 gap-2">
                    {items.map((item, idx) => (
                        <div key={idx} className="px-4 py-3 md:py-2 text-[13px] md:text-sm text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors flex items-center gap-2 active:bg-blue-50">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0"></span>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

function NoisePollution() {
    const [isArchive, setIsArchive] = useState(false);

    const rulesDocs = [
        { id: 1, title: "Noise Pollution (Regulation and Control)Rules,2000 amendment dated 21st April 2009", date: "2009-04-21" },
    ];

    const ganeshFestivalYears = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017"];
    const metroCitiesYears = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017"];

    const diwaliYears = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017"];

    const diwaliDocs = [
        { id: 201, title: "Noise Levels During Diwali-Bhaubij 2020" },
        { id: 202, title: "Noise Levels During Diwali 2020" },
        { id: 203, title: "Noise Levels Before Diwali 2020" }
    ];

    const awarenessLinks = [
        { text: "Penal Action Status Against Honking Horn by mumbai Police", link: "#" }
    ];

    const monitoringDocs = [
        { id: 101, title: "Development of Ambient Noise Monitoring Network in India." },
        { id: 102, title: "Protocol for Ambient Noise Monitoring 2015", date: "2015" },
        { id: 103, title: "Establishment of commitee for Noise Polluion Control" }
    ];

    // Archive Data
    const archiveRulesDocs = [
        { id: 301, title: "Delegation of Power noise Pollution Rules, 2000" },
        { id: 302, title: "Gazette Notification in respect of Standards for Horns,Sirens and /or Multi toned horns for the vehicles" },
        { id: 303, title: "Noise Pollution (Regulation and Control)(Amendment) Rules, 2010 dated 11th January 2010", date: "2010-01-11" }
    ];

    const archiveGaneshYears = ["2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006"];

    const archiveGaneshDocsTop = [
        { id: 401, title: "Noise Monitoring Survey conducted during Ganesh Festival (1st, 2nd, 5th, 7th, 11th Day) 2015 .", date: "2015" }
    ];

    const archiveGaneshDocsBottom = [
        { id: 402, title: "Noise Levels Monitored During Ganesh festival 2013-2014- First two day period." },
        { id: 403, title: "Noise Monitoring Locations during Ganesh Festival 2014" }
    ];

    const archiveMetroCitiesYears = ["2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008"];

    const archiveDiwaliDocs = [
        { id: 501, title: "Noise Monitoring Results of Diwali Festival Nagpur Region 2017" },
        { id: 502, title: "Noise Monitoring Results of Diwali Festival Period 2016." },
        { id: 503, title: "Noise Monitoring Results of Diwali Festival Period 2015." }
    ];

    const archiveFireCrackersYears = ["2014", "2013", "2012", "2010", "2008", "2006"];

    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            {/* Top Banner Section */}
            <PageBanner title="Environmental Quality" />

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left Sidebar */}
                        <Sidebar activeItem="Noise Pollution" />

                        {/* Right Content Area */}
                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="rounded-[20px] md:rounded-[24px] p-5 md:p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 border-b border-gray-200 pb-4 gap-4">
                                    <h2 className="text-[20px] md:text-[24px] font-bold text-gray-900 uppercase tracking-tight">
                                        {isArchive ? "Noise Pollution- Archives" : "Noise Pollution"}
                                    </h2>

                                    {/* Toggle Switch */}
                                    <div className="flex items-center bg-gray-100 p-1 rounded-full shrink-0 self-start md:self-auto">
                                        <button
                                            onClick={() => setIsArchive(false)}
                                            className={`cursor-pointer px-5 md:px-6 py-2 rounded-full text-[13px] md:text-sm font-semibold transition-all duration-300 ${!isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Current
                                        </button>
                                        <button
                                            onClick={() => setIsArchive(true)}
                                            className={`cursor-pointer px-5 md:px-6 py-2 rounded-full text-[13px] md:text-sm font-semibold transition-all duration-300 ${isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Archive
                                        </button>
                                    </div>
                                </div>

                                {/* Content Switch based on Archive Toggle */}
                                {!isArchive ? (
                                    // Current View Content
                                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        {/* Rules/Regulations */}
                                        <div>
                                            <h3 className="text-[18px] md:text-[20px] font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                                                Rules/Regulations
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {rulesDocs.map((doc, idx) => (
                                                    <DocumentCard key={idx} document={doc} />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Reports-Noise Level During Ganesh Festival */}
                                        <div>
                                            <h3 className="text-[18px] md:text-[20px] font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                                                Reports-Noise Level During Ganesh Festival
                                            </h3>
                                            <DropdownSection
                                                title="Monitoring of Noise Pollution during Ganesh Festival"
                                                items={ganeshFestivalYears}
                                            />
                                        </div>

                                        {/* Noise Monitoring */}
                                        <div>
                                            <h3 className="text-[18px] md:text-[20px] font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                                                Noise Monitoring
                                            </h3>
                                            <DropdownSection
                                                title="Noise Monitoring in Metropolitan Cities"
                                                items={metroCitiesYears}
                                            />
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                                {monitoringDocs.map((doc, idx) => (
                                                    <DocumentCard key={idx} document={doc} />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Awareness & Related Information */}
                                        <div>
                                            <h3 className="text-[18px] md:text-[20px] font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                                                Awareness & Related Information
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {awarenessLinks.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        onClick={() => item.link !== '#' && window.open(item.link, '_blank')}
                                                        className={`group relative overflow-hidden bg-white p-5 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-200 cursor-pointer`}
                                                    >
                                                        <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                                                            <ChevronRight className="w-16 h-16 text-[#0085E2]" />
                                                        </div>

                                                        <div className="flex flex-col h-full justify-between gap-4">
                                                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-[#0085E2] transition-colors duration-300">
                                                                <ChevronRight className="w-5 h-5 text-[#0085E2] group-hover:text-white transition-colors" />
                                                            </div>
                                                            <span className="text-[15px] font-semibold text-gray-700 leading-tight group-hover:text-[#0085E2] transition-colors">
                                                                {item.text}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Reports Noise Level-During Diwali festival */}
                                        <div>
                                            <h3 className="text-[18px] md:text-[20px] font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                                                Reports Noise Level-During Diwali festival
                                            </h3>
                                            <DropdownSection
                                                title="Report Noise Pollution during Diwali festival"
                                                items={diwaliYears}
                                            />
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                                {diwaliDocs.map((doc, idx) => (
                                                    <DocumentCard key={idx} document={doc} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    // Archive View Content
                                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        {/* Archive Rules/Regulations */}
                                        <div>
                                            <h3 className="text-[18px] md:text-[20px] font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                                                Rules/Regulations
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {archiveRulesDocs.map((doc, idx) => (
                                                    <DocumentCard key={idx} document={doc} />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Archive Reports-Noise Level During Ganesh Festival */}
                                        <div>
                                            <h3 className="text-[18px] md:text-[20px] font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                                                Reports-Noise Level During Ganesh Festival
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                {archiveGaneshDocsTop.map((doc, idx) => (
                                                    <DocumentCard key={idx} document={doc} />
                                                ))}
                                            </div>
                                            <DropdownSection
                                                title="Monitoring of Noise Pollution during Ganesh Festival"
                                                items={archiveGaneshYears}
                                            />
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                                {archiveGaneshDocsBottom.map((doc, idx) => (
                                                    <DocumentCard key={idx} document={doc} />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Archive Noise Monitoring */}
                                        <div>
                                            <h3 className="text-[18px] md:text-[20px] font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                                                Noise Monitoring
                                            </h3>
                                            <DropdownSection
                                                title="Noise Monitoring in Metro Cities of Maharashtra"
                                                items={archiveMetroCitiesYears}
                                            />
                                        </div>

                                        {/* Archive Reports Noise Level-During Diwali festival */}
                                        <div>
                                            <h3 className="text-[18px] md:text-[20px] font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                                                Reports Noise Level-During Diwali festival
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                {archiveDiwaliDocs.map((doc, idx) => (
                                                    <DocumentCard key={idx} document={doc} />
                                                ))}
                                            </div>
                                            <DropdownSection
                                                title="Testing of fire crackers"
                                                items={archiveFireCrackersYears}
                                            />
                                        </div>
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

export default NoisePollution;
