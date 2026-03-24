import { useState } from 'react';
import DocumentCard from '../../components/DocumentCard';

const standingorders = "/assets/standingorders.svg";

// Sidebar tabs for Water and Air consent
const sidebarTabs = [
    "Fees",
    "Document to be submitted",
    "Schedule",
    "Circulars",
    "Procedures",
    "Delegation of power"
];

// Delegation of powers data
const delegationData = [
    {
        srNo: "1",
        authority: "Sub Regional Officer",
        redCategory: "-",
        orangeCategory: "-",
        greenCategory: "Upto Rs.100 crores",
        urbanLocal: "'C' Class Municipal Council.",
        infrastructure: "-"
    },
    {
        srNo: "2",
        authority: "Regional Officer",
        redCategory: "Up to Rs. 10 Crores Excluding industries listed in annexure A",
        orangeCategory: "Upto Rs.150 Crores",
        greenCategory: "Above Rs.100 crores upto Rs.500 crores",
        urbanLocal: "'B' Class Municipal Councils and Cantonment Boards",
        infrastructure: "Upto Rs.25 crores"
    },
    {
        srNo: "3",
        authority: "Head Of Departments",
        redCategory: "Above Rs.10 crores upto Rs.50 crores",
        orangeCategory: "Above Rs. 150 crores upto Rs.500 crores",
        greenCategory: "Above Rs. 500 Crs upto Rs.1000 Crores",
        urbanLocal: "A- Class Municipal Councils and Cantonment Boards",
        infrastructure: "Above Rs. 25 crores upto Rs.100 crores"
    },
    {
        srNo: "4",
        authority: "Consent Committee",
        redCategory: "Above Rs.50 crores upto Rs.150 crores",
        orangeCategory: "Above Rs.500 crores upto Rs.1500 crores",
        greenCategory: "Above Rs.1000 crores upto Rs.4000 crores",
        urbanLocal: "All Municipal Corporation",
        infrastructure: "Above Rs.100 crores upto Rs.750 crores"
    },
    {
        srNo: "5",
        authority: "Consent Appraisal Committee",
        redCategory: "More than Rs.150 crores",
        orangeCategory: "More than Rs.1500 crores",
        greenCategory: "More than Rs.4000 crores",
        urbanLocal: "-",
        infrastructure: "More than Rs.750 crores"
    },
];

function WaterAndAir() {
    const [selectedTab, setSelectedTab] = useState(sidebarTabs[0]);

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="font-family-helvetica">
            {/* Top Banner Section */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-0 md:px-4">
                    <div className="relative w-full h-[200px] md:h-[280px] md:rounded-t-[48px] overflow-hidden">
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

                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-6 mt-[-20px] md:mt-[-30px]">
                            <h1 className="text-[24px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-tight mb-4 md:mb-8 text-center">
                                Water & Air Consent Fees / Delegation of Power
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-8 md:py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
                        {/* Left Sidebar */}
                        <div className="w-full lg:w-[280px] flex-shrink-0">
                            <div className="flex flex-col gap-3 md:gap-4">
                                {sidebarTabs.map((tab) => {
                                    const isActive = selectedTab === tab;
                                    return (
                                        <div
                                            key={tab}
                                            onClick={() => handleTabClick(tab)}
                                            className={`flex items-center justify-between px-4 md:px-6 py-4 md:py-5 rounded-[15px] md:rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-200
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
                        <div className="flex-1">
                            <div className="rounded-[24px] p-0 md:p-8 min-h-[400px]">
                                {selectedTab === "Fees" ? (
                                    <div className="text-[14px] text-gray-700 leading-relaxed">
                                        <h2 className="text-[20px] font-semibold text-gray-800 mb-6 underline">Revision of Consent Fee w.e.f. 25/08/2011 Govt.of Mah. G.R. dated 25/08/2011</h2>

                                        <h3 className="text-[16px] font-semibold text-gray-800 mb-4">Fees for combined consent for one term under Water and Air Acts</h3>
                                        <p className="mb-6">
                                            The entrepreneurs need to pay the consent fees to the Board as per the statement given below. These fees are payable in form of Demand Draft at any Nationalised bank at respective Sub-Regional office or Regional office or at head quarter along with the completed prescribed form. The term of consent for Red, Orange and Green category of Industry is one, two and three years respectively. The industries can also obtain the consent for extended period up to 5 terms by paying proportionate fees.
                                        </p>

                                        <h3 className="text-[14px] font-semibold text-gray-800 mb-4 uppercase italic">Fees For Consent To Establish (Rs.)</h3>
                                        <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden mb-12 overflow-x-auto">
                                            <table className="w-full border-collapse min-w-[600px]">
                                                <thead>
                                                    <tr className="border-b border-gray-100 bg-gray-50/50">
                                                        <th className="py-4 px-6 text-left text-[13px] font-semibold text-gray-600">Capital Investment</th>
                                                        <th className="py-4 px-6 text-left text-[13px] font-semibold text-gray-600">Amount (Rs.)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr><td className="py-4 px-6">More than 100 Crs.</td><td className="py-4 px-6 text-[#0085E2]">0.02% of Capt. Invest.</td></tr>
                                                    <tr><td className="py-4 px-6">75 Crs. to 100 Crs.</td><td className="py-4 px-6 text-[#0085E2]">1,25,000/-</td></tr>
                                                    <tr><td className="py-4 px-6">50 Crs. to 75 Crs.</td><td className="py-4 px-6 text-[#0085E2]">1,00,000/-</td></tr>
                                                    <tr><td className="py-4 px-6">25 Crs. to 50 Crs.</td><td className="py-4 px-6 text-[#0085E2]">75,000/-</td></tr>
                                                    <tr><td className="py-4 px-6">10 Crs. to 25 Crs.</td><td className="py-4 px-6 text-[#0085E2]">50,000/-</td></tr>
                                                    <tr><td className="py-4 px-6">5 Crs. to 10 Crs.</td><td className="py-4 px-6 text-[#0085E2]">25,000/-</td></tr>
                                                    <tr><td className="py-4 px-6">1 Cr. to 5 Crs.</td><td className="py-4 px-6 text-[#0085E2]">15,000/-</td></tr>
                                                    <tr><td className="py-4 px-6">60 Lakhs to 1 Cr.</td><td className="py-4 px-6 text-[#0085E2]">5,000/-</td></tr>
                                                    <tr><td className="py-4 px-6">10 Lakhs to 60 Lakhs</td><td className="py-4 px-6 text-[#0085E2]">1,500/-</td></tr>
                                                    <tr><td className="py-4 px-6">Below 10 Lakhs</td><td className="py-4 px-6 text-[#0085E2]">500/-</td></tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <h3 className="text-[14px] font-semibold text-gray-800 mb-4 uppercase italic">B) Urban Local Bodies (Under water Act)</h3>
                                        <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden mb-12 overflow-x-auto">
                                            <table className="w-full border-collapse min-w-[500px]">
                                                <thead>
                                                    <tr className="border-b border-gray-100 bg-gray-50/50">
                                                        <th className="py-4 px-6 text-left text-[13px] font-semibold text-gray-600">Authority</th>
                                                        <th className="py-4 px-6 text-left text-[13px] font-semibold text-gray-600">Amount (Rs.)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    <tr><td className="py-4 px-6">Municipal Corporation</td><td className="py-4 px-6 text-[#0085E2]">1,00,000/-</td></tr>
                                                    <tr><td className="py-4 px-6">Municipal Council Class-A</td><td className="py-4 px-6 text-[#0085E2]">50,000/-</td></tr>
                                                    <tr><td className="py-4 px-6">Municipal Council Class-B</td><td className="py-4 px-6 text-[#0085E2]">5,000/-</td></tr>
                                                    <tr><td className="py-4 px-6">Municipal Council Class-C</td><td className="py-4 px-6 text-[#0085E2]">2,000/-</td></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : selectedTab === "Document to be submitted" ? (
                                    <div className="text-[14px] text-gray-700 leading-relaxed">
                                        <h2 className="text-[18px] font-semibold text-gray-800 mb-6 underline">Information to be submitted with the Application</h2>
                                        <p className="mb-6">The following information shall be submitted along with the consent application form for the speedy processing.</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <h3 className="font-bold mb-4">For Consent to establish:</h3>
                                                <ul className="list-disc pl-5 space-y-2">
                                                    <li>CA Certificate | Balance Sheet | Capital Investment</li>
                                                    <li>Manufacturing Process</li>
                                                    <li>Industry Registration</li>
                                                    <li>Land Ownership Certificate</li>
                                                    <li>Detailed proposal of pollution control system</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-bold mb-4">Optional Documents:</h3>
                                                <ul className="list-disc pl-5 space-y-2">
                                                    <li>Local Body (Planning Authority) NOC</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <DocumentCard document={{ id: 1, title: "Application Form" }} wide={false} />
                                            <DocumentCard document={{ id: 2, title: "Bank Guarantee format" }} wide={false} />
                                            <DocumentCard document={{ id: 3, title: "Format for Resolution to be obtained from Board of Directors/Authorized Signatories" }} wide={true} />
                                        </div>
                                    </div>
                                ) : selectedTab === "Delegation of power" ? (
                                    <div className="text-[14px] text-gray-700 leading-relaxed">
                                        <h2 className="text-[18px] font-semibold text-gray-800 mb-6">Delegations of Powers to Grant Consent</h2>
                                        <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden mb-8 overflow-x-auto">
                                            <table className="w-full border-collapse min-w-[800px]">
                                                <thead>
                                                    <tr className="border-b border-gray-100 bg-gray-50/50">
                                                        <th className="py-4 px-4 text-left font-semibold text-[13px]">Authority</th>
                                                        <th className="py-4 px-4 text-left font-semibold text-[13px]">Red Category</th>
                                                        <th className="py-4 px-4 text-left font-semibold text-[13px]">Orange Category</th>
                                                        <th className="py-4 px-4 text-left font-semibold text-[13px]">Green Category</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {delegationData.map((row, idx) => (
                                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="py-4 px-4 font-medium text-gray-900">{row.authority}</td>
                                                            <td className="py-4 px-4">{row.redCategory}</td>
                                                            <td className="py-4 px-4">{row.orangeCategory}</td>
                                                            <td className="py-4 px-4">{row.greenCategory}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-[14px] text-gray-700 leading-relaxed min-h-[400px] flex items-center justify-center border-2 border-dashed border-gray-100 rounded-[35px]">
                                        <div className="text-center">
                                            <h2 className="text-[20px] font-semibold text-gray-400 mb-2">{selectedTab}</h2>
                                            <p className="text-gray-400 italic">This section is currently under development.</p>
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

export default WaterAndAir;
