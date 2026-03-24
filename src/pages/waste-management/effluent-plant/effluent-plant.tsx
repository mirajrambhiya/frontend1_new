import { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import effluentmah from "/assets/effluentmah.png"
import DocumentCard from '../../../components/DocumentCard.tsx';
import PageBanner from '../../../components/PageBanner.tsx';
import Sidebar from '../../../components/Sidebar.tsx';

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
                    {items.map((item, idx) => {
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
                    })}
                </div>
            </div>
        </div>
    );
};

const EffluentPlant = () => {
    // Documents for General Section
    const generalDocuments = [
        { id: 'gen1', title: "Concept of CETP", date: "2024-01-01", pdfUrl: "#" },
        { id: 'gen2', title: "Advantages of CETP", date: "2024-01-01", pdfUrl: "#" }
    ];

    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            {/* Top Banner Section */}
            <PageBanner title="Waste Management" image={standingorders} />

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left Sidebar */}
                        <Sidebar activeItem="Common Effluent Treatment Plant" />

                        {/* Right Content Area */}
                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                {/* Header */}
                                <h2 className="text-[24px] font-bold text-gray-900 uppercase mb-8 border-b border-gray-200 pb-4">
                                    COMMON EFFLUENT TREATMENT PLANT
                                </h2>

                                {/* Map Image */}
                                <div className="w-full bg-blue-50 rounded-xl overflow-hidden border border-blue-100 flex items-center justify-center min-h-[400px] mb-6">
                                    <div className="text-center p-8 w-full h-full">
                                        <img
                                            src={effluentmah}
                                            alt="Maharashtra Common Effluent Treatment Plant Map"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="text-center mb-10 text-[#0085E2] font-medium text-[15px]">
                                    Latest Common Effluent Treatment Plant reports at a glance (as available on 22-01-2026 17:18:13)
                                </div>

                                {/* General Section */}
                                <div>
                                    <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3 mb-6">
                                        01 General
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                        {generalDocuments.map((doc) => (
                                            <DocumentCard
                                                key={doc.id}
                                                document={doc}
                                                wide={false}
                                            />
                                        ))}
                                    </div>

                                    <div className="flex flex-col gap-3 mt-4 px-2">
                                        <a href="/waste-management/common-effluent-treatment-plant/high-court-orders" className="text-gray-600 hover:text-[#0085E2] font-medium flex items-center gap-2 group transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] group-hover:scale-125 transition-transform" />
                                            High Court orders in PIL No.17/2011
                                        </a>
                                        <a
                                            href="/waste-management/common-effluent-treatment-plant/affidavit-mpcb"
                                            className="text-gray-600 hover:text-[#0085E2] font-medium flex items-center gap-2 group transition-colors"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] group-hover:scale-125 transition-transform" />
                                            Affidavit filed by M.P.C.Board in PIL No.17/2011
                                        </a>
                                    </div>
                                </div>

                                {/* Guidelines Section */}
                                <div className="mt-10">
                                    <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3 mb-6">
                                        Guidelines
                                    </h3>

                                    <div className="mb-4 font-medium text-gray-700">Financial Assistance Pattern</div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                        <DocumentCard document={{ id: 'gd1', title: "MOEF", date: "2024-01-01", pdfUrl: "#" }} wide={false} />
                                        <DocumentCard document={{ id: 'gd2', title: "ASIDE", date: "2024-01-01", pdfUrl: "#" }} wide={false} />
                                        <DocumentCard document={{ id: 'gd3', title: "DIPP", date: "2024-01-01", pdfUrl: "#" }} wide={false} />
                                        <DocumentCard document={{ id: 'gd4', title: "CETP Standards", date: "2024-01-01", pdfUrl: "#" }} wide={false} />
                                    </div>
                                </div>

                                {/* State Level Co-ordinate Committee Section */}
                                <div className="mt-10">
                                    <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3 mb-6">
                                        State Level Co-ordinate Commitee
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                        <DocumentCard document={{ id: 'sl1', title: "State Govt. GR for State Level Co-ordination Committee for CETPs", date: "2024-01-01", pdfUrl: "#" }} wide={false} />
                                        <DocumentCard document={{ id: 'sl2', title: "Office Order for State Level Co-ordination Committee for CETPs by M.P.C.Board", date: "2024-01-01", pdfUrl: "#" }} wide={false} />
                                    </div>

                                    <DropdownSection
                                        title="Minutes of committee meeting"
                                        items={[
                                            "1st Minutes", "2nd Minutes", "3rd Minutes", "4th Minutes",
                                            "5th Minutes", "6th Minutes", "7th Minutes", "8th Minutes"
                                        ]}
                                    />
                                </div>

                                {/* Success Story Section */}
                                <div className="mt-10">
                                    <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3 mb-6">
                                        Success story
                                    </h3>

                                    <div className="flex flex-col gap-3 px-2">
                                        <a href="/waste-management/common-effluent-treatment-plant/thane-belapur" className="text-gray-600 hover:text-[#0085E2] font-medium flex items-center gap-2 group transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] group-hover:scale-125 transition-transform" />
                                            Thane-Belapur CETP,Navi Mumbai
                                        </a>
                                        <a href="#" className="text-gray-600 hover:text-[#0085E2] font-medium flex items-center gap-2 group transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] group-hover:scale-125 transition-transform" />
                                            PRIA CETP,Patalganga
                                        </a>
                                    </div>
                                </div>

                                {/* Local Area Commitee */}
                                <div className="mt-10">
                                    <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3 mb-6">
                                        Local Area Commitee
                                    </h3>

                                    {/* First Block */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                        <DocumentCard document={{ id: 'lac1', title: "Mahad Region Local Area Committee Office Order.", date: "2024-01-01", pdfUrl: "#" }} wide={false} />
                                    </div>
                                    <DropdownSection
                                        title="Minutes of committee meeting"
                                        items={[
                                            "1/10/2013", "07/01/2014", "27/05/2014", "21/07/2014"
                                        ]}
                                    />

                                    {/* Second Block */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 mt-8">
                                        <DocumentCard document={{ id: 'lac2', title: "Mahad Region Local Area Committee Office Order.", date: "2024-01-01", pdfUrl: "#" }} wide={false} />
                                    </div>
                                    <DropdownSection
                                        title="Minutes of committee meeting"
                                        items={[
                                            "25/06/2014", "11/09/2014"
                                        ]}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default EffluentPlant;
