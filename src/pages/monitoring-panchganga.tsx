import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const standingorders = "/assets/standingorders.svg";

const sidebarTabs = [
    "Sep'05",
    "Oct'05",
    "Nov'05",
    "Dec'05",
    "Jan'06",
    "Feb'06",
    "Mar'06",
    "Apr'06"
];

function MonitoringPanchganga() {
    const [selectedTab, setSelectedTab] = useState("Sep'05");

    return (
        <div className="font-family-helvetica">
            {/* Top Banner Section */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[280px] rounded-t-[24px] md:rounded-t-[48px] overflow-hidden">
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

                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-30px]">
                            <h1 className="text-[28px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-none mb-8">
                                Reports / Documents
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
                                            onClick={() => setSelectedTab(tab)}
                                            className={`flex items-center justify-between px-6 py-5 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-200
                                                ${isActive
                                                    ? 'border-2 border-[#00A3FF] bg-[#00A3FF]/5'
                                                    : 'border border-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF]'
                                                }`}
                                        >
                                            <span className={`text-[14px] font-normal transition-colors duration-200 ${isActive ? 'text-[#00A3FF] font-medium' : 'text-gray-800'}`}>
                                                {tab}
                                            </span>
                                            {isActive && <ChevronRight className="w-5 h-5 text-[#00A3FF]" />}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1">
                            <div className="rounded-[24px] p-4 md:p-8 min-h-[400px]">
                                <h2 className="text-[20px] md:text-[24px] font-semibold text-gray-800 mb-6 uppercase border-b border-gray-200 pb-4 tracking-wide">
                                    Panchganga River Water Quality
                                </h2>

                                <div className="mt-6">
                                    <h3 className="text-xl font-medium text-gray-700 mb-4">{selectedTab}</h3>

                                    {selectedTab === "Sep'05" ? (
                                        <div className="flex flex-col gap-8">
                                            {/* Table 1 */}
                                            <div className="flex flex-col gap-4">
                                                <div className="text-center mb-2">
                                                    <h4 className="font-bold text-gray-800">Monitoring of of Panchganga River Water Quality during the month September</h4>
                                                    <h5 className="font-bold text-gray-800">Department of Environmental Science, Shivaji University, Kolhapur.</h5>
                                                    <div className="mt-2 text-sm font-semibold text-gray-700">
                                                        <p>Date of Analysis :- 13/09/2005</p>
                                                        <p>Weather condition :- Rainy</p>
                                                    </div>
                                                </div>

                                                <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto shadow-sm">
                                                    <div className="min-w-[800px]">
                                                        <table className="w-full border-collapse">
                                                            <thead>
                                                                <tr className="border-b border-gray-200 bg-gray-50">
                                                                    <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Parameters</th>
                                                                    <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Balinga</th>
                                                                    <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Rajaram Bandhara</th>
                                                                    <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Shiroli Bridge</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-gray-100">
                                                                {[
                                                                    { param: "D O (mg/ lit)", v1: "5.4", v2: "7.5", v3: "6.2" },
                                                                    { param: "BOD(mg/ lit)", v1: "8.5", v2: "9.5", v3: "7.2" },
                                                                    { param: "COD (mg/ lit)", v1: "48.1", v2: "74.3", v3: "35.5" },
                                                                    { param: "TSS (mg/ lit)", v1: "53.2", v2: "60.0", v3: "62.36" },
                                                                    { param: "Hardness (mg/ lit)", v1: "61.8", v2: "24.6", v3: "56.4" },
                                                                    { param: "Free CO 2 mg/l", v1: "26.4", v2: "46.9", v3: "32.0" },
                                                                    { param: "MPN /100ml", v1: ">=2400", v2: ">=2400", v3: ">=2400" },
                                                                ].map((row, idx) => (
                                                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                                        <td className="py-4 px-6 text-[13px] text-gray-700 font-medium bg-gray-100">{row.param}</td>
                                                                        <td className="py-4 px-6 text-[13px] text-gray-600">{row.v1}</td>
                                                                        <td className="py-4 px-6 text-[13px] text-gray-600">{row.v2}</td>
                                                                        <td className="py-4 px-6 text-[13px] text-gray-600">{row.v3}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Table 2 */}
                                            <div className="flex flex-col gap-4">
                                                <div className="text-center mb-2">
                                                    <div className="text-sm font-semibold text-gray-700">
                                                        <p>Date of Analysis :- 20/09/2005</p>
                                                        <p>Weather condition :- Rainy</p>
                                                    </div>
                                                </div>

                                                <div className="border border-gray-200 rounded-[25px] overflow-hidden">
                                                    <table className="w-full border-collapse">
                                                        <thead>
                                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Parameters</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Balinga</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Rajaram Bandhara</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Shiroli Bridge</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100">
                                                            {[
                                                                { param: "D O (mg/ lit)", v1: "7.2", v2: "6.9", v3: "5.4" },
                                                                { param: "BOD(mg/ lit)", v1: "10.5", v2: "8.5", v3: "7.5" },
                                                                { param: "COD (mg/ lit)", v1: "66.0", v2: "114.0", v3: "65.0" },
                                                                { param: "TSS (mg/ lit)", v1: "62.0", v2: "80.0", v3: "102.0" },
                                                                { param: "Hardness (mg/ lit)", v1: "30.2", v2: "52.2", v3: "39.0" },
                                                                { param: "Free CO 2 mg/l", v1: "72.0", v2: "44.0", v3: "64.0" },
                                                                { param: "MPN /100ml", v1: ">=2400", v2: ">=2400", v3: ">=2400" },
                                                            ].map((row, idx) => (
                                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium bg-gray-100">{row.param}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v1}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v2}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v3}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    ) : selectedTab === "Oct'05" ? (
                                        <div className="flex flex-col gap-8">
                                            {/* Table 1 */}
                                            <div className="flex flex-col gap-4">
                                                <div className="text-center mb-2">
                                                    <h4 className="font-bold text-gray-800">Monitoring of of Panchganga River Water Quality during the month October</h4>
                                                    <h5 className="font-bold text-gray-800">Department of Environmental Science, Shivaji University, Kolhapur.</h5>
                                                    <div className="mt-2 text-sm font-semibold text-gray-700">
                                                        <p>Date of Analysis :- 10/10/2005</p>
                                                        <p>Weather condition :- Clear</p>
                                                    </div>
                                                </div>

                                                <div className="border border-gray-200 rounded-[25px] overflow-hidden">
                                                    <table className="w-full border-collapse">
                                                        <thead>
                                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Parameters</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Balinga</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Rajaram Bandhara</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Shiroli Bridge</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100">
                                                            {[
                                                                { param: "D O (mg/ lit)", v1: "6.3", v2: "5.8", v3: "5.3" },
                                                                { param: "BOD(mg/ lit)", v1: "2.4", v2: "2.8", v3: "1.7" },
                                                                { param: "COD (mg/ lit)", v1: "48.3", v2: "88.0", v3: "96.7" },
                                                                { param: "TSS (mg/ lit)", v1: "80.2", v2: "85.8", v3: "180.5" },
                                                                { param: "Hardness (mg/ lit)", v1: "58.5", v2: "84.0", v3: "94.0" },
                                                                { param: "Free CO 2 mg/l", v1: "2.2", v2: "4.4", v3: "4.4" },
                                                                { param: "MPN /100ml", v1: ">=2400", v2: ">=2400", v3: ">=2400" },
                                                            ].map((row, idx) => (
                                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium bg-gray-100">{row.param}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v1}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v2}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v3}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            {/* Table 2 */}
                                            <div className="flex flex-col gap-4">
                                                <div className="text-center mb-2">
                                                    <div className="text-sm font-semibold text-gray-700">
                                                        <p>Date of Analysis :- 24/10/2005</p>
                                                        <p>Weather condition :- Clear</p>
                                                    </div>
                                                </div>

                                                <div className="border border-gray-200 rounded-[25px] overflow-hidden">
                                                    <table className="w-full border-collapse">
                                                        <thead>
                                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Parameters</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Balinga</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Rajaram Bandhara</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Shiroli Bridge</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100">
                                                            {[
                                                                { param: "D O (mg/ lit)", v1: "6.4", v2: "5.9", v3: "4.7" },
                                                                { param: "BOD(mg/ lit)", v1: "1.4", v2: "2.2", v3: "2.9" },
                                                                { param: "COD (mg/ lit)", v1: "51.1", v2: "89.2", v3: "102.1" },
                                                                { param: "TSS (mg/ lit)", v1: "82.4", v2: "89.9", v3: "197.9" },
                                                                { param: "Hardness (mg/ lit)", v1: "64.2", v2: "86.3", v3: "110.2" },
                                                                { param: "Free CO 2 mg/l", v1: "2.2", v2: "4.4", v3: "6.6" },
                                                                { param: "MPN /100ml", v1: ">=2400", v2: ">=2400", v3: ">=2400" },
                                                            ].map((row, idx) => (
                                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium bg-gray-100">{row.param}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v1}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v2}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v3}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    ) : selectedTab === "Nov'05" ? (
                                        <div className="flex flex-col gap-8">
                                            {/* Table 1 */}
                                            <div className="flex flex-col gap-4">
                                                <div className="text-center mb-2">
                                                    <h4 className="font-bold text-gray-800">Monitoring of of Panchganga River Water Quality during the month November</h4>
                                                    <h5 className="font-bold text-gray-800">Department of Environmental Science, Shivaji University, Kolhapur.</h5>
                                                    <div className="mt-2 text-sm font-semibold text-gray-700">
                                                        <p>Date of Analysis :- 10/11/2005</p>
                                                        <p>Weather condition :- Clear</p>
                                                    </div>
                                                </div>

                                                <div className="border border-gray-200 rounded-[25px] overflow-hidden">
                                                    <table className="w-full border-collapse">
                                                        <thead>
                                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Parameters</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Balinga</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Rajaram Bandhara</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Shiroli Bridge</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100">
                                                            {[
                                                                { param: "D O (mg/ lit)", v1: "6.5", v2: "4.7", v3: "3.9" },
                                                                { param: "BOD(mg/ lit)", v1: "24.6", v2: "42.2", v3: "62.4" },
                                                                { param: "COD (mg/ lit)", v1: "56.8", v2: "96.7", v3: "112.3" },
                                                                { param: "TSS (mg/ lit)", v1: "88.8", v2: "97.5", v3: "201.3" },
                                                                { param: "Hardness (mg/ lit)", v1: "68.9", v2: "91.7", v3: "114.7" },
                                                                { param: "Free CO 2 mg/l", v1: "4.4", v2: "6.6", v3: "6.6" },
                                                                { param: "MPN /100ml", v1: ">=2400", v2: ">=2400", v3: ">=2400" },
                                                            ].map((row, idx) => (
                                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium bg-gray-100">{row.param}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v1}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v2}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v3}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            {/* Table 2 */}
                                            <div className="flex flex-col gap-4">
                                                <div className="text-center mb-2">
                                                    <div className="text-sm font-semibold text-gray-700">
                                                        <p>Date of Analysis :- 26/11/2005</p>
                                                        <p>Weather condition :- Clear</p>
                                                    </div>
                                                </div>

                                                <div className="border border-gray-200 rounded-[25px] overflow-hidden">
                                                    <table className="w-full border-collapse">
                                                        <thead>
                                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Parameters</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Balinga</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Rajaram Bandhara</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Shiroli Bridge</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100">
                                                            {[
                                                                { param: "D O (mg/ lit)", v1: "9.3", v2: "7.7", v3: "5.5" },
                                                                { param: "BOD(mg/ lit)", v1: "20.0", v2: "60.0", v3: "72.0" },
                                                                { param: "COD (mg/ lit)", v1: "60.0", v2: "72.0", v3: "89.9" },
                                                                { param: "TSS (mg/ lit)", v1: "50.0", v2: "95.1", v3: "174.3" },
                                                                { param: "Hardness (mg/ lit)", v1: "62.0", v2: "83.0", v3: "110.8" },
                                                                { param: "Free CO 2 mg/l", v1: "2.2", v2: "4.4", v3: "4.4" },
                                                                { param: "MPN /100ml", v1: ">=2400", v2: ">=2400", v3: ">=2400" },
                                                            ].map((row, idx) => (
                                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium bg-gray-100">{row.param}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v1}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v2}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v3}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    ) : selectedTab === "Dec'05" ? (
                                        <div className="flex flex-col gap-8">
                                            {/* Table 1 */}
                                            <div className="flex flex-col gap-4">
                                                <div className="text-center mb-2">
                                                    <h4 className="font-bold text-gray-800">Monitoring of of Panchganga River Water Quality during the month December</h4>
                                                    <h5 className="font-bold text-gray-800">Department of Environmental Science, Shivaji University, Kolhapur.</h5>
                                                    <div className="mt-2 text-sm font-semibold text-gray-700">
                                                        <p>Date of Analysis :- 10/12/2005</p>
                                                        <p>Weather condition :- Clear</p>
                                                    </div>
                                                </div>

                                                <div className="border border-gray-200 rounded-[25px] overflow-hidden">
                                                    <table className="w-full border-collapse">
                                                        <thead>
                                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Parameters</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Balinga</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Rajaram Bandhara</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Shiroli Bridge</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100">
                                                            {[
                                                                { param: "D O (mg/ lit)", v1: "8.3", v2: "6.4", v3: "5.9" },
                                                                { param: "BOD(mg/ lit)", v1: "55.2", v2: "65.4", v3: "67.4" },
                                                                { param: "COD (mg/ lit)", v1: "78.2", v2: "92.2", v3: "102.9" },
                                                                { param: "TSS (mg/ lit)", v1: "55.4", v2: "105.3", v3: "111.9" },
                                                                { param: "Hardness (mg/ lit)", v1: "55.8", v2: "65.7", v3: "92.1" },
                                                                { param: "Free CO 2 mg/l", v1: "2.2", v2: "2.2", v3: "2.2" },
                                                                { param: "MPN /100ml", v1: ">=2400", v2: ">=2400", v3: ">=2400" },
                                                            ].map((row, idx) => (
                                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium bg-gray-100">{row.param}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v1}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v2}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v3}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            {/* Table 2 */}
                                            <div className="flex flex-col gap-4">
                                                <div className="text-center mb-2">
                                                    <div className="text-sm font-semibold text-gray-700">
                                                        <p>Date of Analysis :- 24/12/2005</p>
                                                        <p>Weather condition :- Clear</p>
                                                    </div>
                                                </div>

                                                <div className="border border-gray-200 rounded-[25px] overflow-hidden">
                                                    <table className="w-full border-collapse">
                                                        <thead>
                                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Parameters</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Balinga</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Rajaram Bandhara</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Shiroli Bridge</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100">
                                                            {[
                                                                { param: "D O (mg/ lit)", v1: "7.2", v2: "6.2", v3: "5.8" },
                                                                { param: "BOD(mg/ lit)", v1: "30.0", v2: "62.4", v3: "86.7" },
                                                                { param: "COD (mg/ lit)", v1: "60.0", v2: "82.9", v3: "105.3" },
                                                                { param: "TSS (mg/ lit)", v1: "67.1", v2: "102.2", v3: "115.2" },
                                                                { param: "Hardness (mg/ lit)", v1: "51.2", v2: "62.4", v3: "81.2" },
                                                                { param: "Free CO 2 mg/l", v1: "2.2", v2: "4.4", v3: "4.4" },
                                                                { param: "MPN /100ml", v1: ">=2400", v2: ">=2400", v3: ">=2400" },
                                                            ].map((row, idx) => (
                                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium bg-gray-100">{row.param}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v1}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v2}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v3}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    ) : selectedTab === "Jan'06" ? (
                                        <div className="flex flex-col gap-8">
                                            {/* Table 1 */}
                                            <div className="flex flex-col gap-4">
                                                <div className="text-center mb-2">
                                                    <h4 className="font-bold text-gray-800">Monitoring of of Panchganga River Water Quality during the month January</h4>
                                                    <h5 className="font-bold text-gray-800">Department of Environmental Science, Shivaji University, Kolhapur.</h5>
                                                    <div className="mt-2 text-sm font-semibold text-gray-700">
                                                        <p>Date of Analysis :- 14/01/2006</p>
                                                        <p>Weather condition :- Clear</p>
                                                    </div>
                                                </div>

                                                <div className="border border-gray-200 rounded-[25px] overflow-hidden">
                                                    <table className="w-full border-collapse">
                                                        <thead>
                                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Parameters</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Balinga</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Rajaram Bandhara</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Shiroli Bridge</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100">
                                                            {[
                                                                { param: "D O (mg/ lit)", v1: "7.3", v2: "5.9", v3: "5.8" },
                                                                { param: "BOD(mg/ lit)", v1: "2.6", v2: "3.6", v3: "3.9" },
                                                                { param: "COD (mg/ lit)", v1: "80.3", v2: "95.8", v3: "110.2" },
                                                                { param: "TSS (mg/ lit)", v1: "52.2", v2: "107.2", v3: "113.7" },
                                                                { param: "Hardness (mg/ lit)", v1: "55.1", v2: "67.8", v3: "86.3" },
                                                                { param: "Free CO 2 mg/l", v1: "1.1", v2: "2.2", v3: "2.2" },
                                                                { param: "MPN /100ml", v1: ">=2400", v2: ">=2400", v3: ">=2400" },
                                                            ].map((row, idx) => (
                                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium bg-gray-100">{row.param}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v1}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v2}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v3}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            {/* Table 2 */}
                                            <div className="flex flex-col gap-4">
                                                <div className="text-center mb-2">
                                                    <div className="text-sm font-semibold text-gray-700">
                                                        <p>Date of Analysis :- 28/01/2006</p>
                                                        <p>Weather condition :- Clear</p>
                                                    </div>
                                                </div>

                                                <div className="border border-gray-200 rounded-[25px] overflow-hidden">
                                                    <table className="w-full border-collapse">
                                                        <thead>
                                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Parameters</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Balinga</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Rajaram Bandhara</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Shiroli Bridge</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100">
                                                            {[
                                                                { param: "D O (mg/ lit)", v1: "8.0", v2: "6.0", v3: "5.8" },
                                                                { param: "BOD(mg/ lit)", v1: "2.4", v2: "3.4", v3: "3.7" },
                                                                { param: "COD (mg/ lit)", v1: "76.5", v2: "80.6", v3: "108.2" },
                                                                { param: "TSS (mg/ lit)", v1: "49.9", v2: "98.3", v3: "106.1" },
                                                                { param: "Hardness (mg/ lit)", v1: "60.4", v2: "61.4", v3: "85.4" },
                                                                { param: "Free CO 2 mg/l", v1: "2.2", v2: "2.2", v3: "4.4" },
                                                                { param: "MPN /100ml", v1: ">=2400", v2: ">=2400", v3: ">=2400" },
                                                            ].map((row, idx) => (
                                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium bg-gray-100">{row.param}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v1}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v2}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v3}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    ) : selectedTab === "Feb'06" ? (
                                        <div className="flex flex-col gap-8">
                                            {/* Table 1 */}
                                            <div className="flex flex-col gap-4">
                                                <div className="text-center mb-2">
                                                    <h4 className="font-bold text-gray-800">Monitoring of of Panchganga River Water Quality during the month February</h4>
                                                    <h5 className="font-bold text-gray-800">Department of Environmental Science, Shivaji University, Kolhapur.</h5>
                                                    <div className="mt-2 text-sm font-semibold text-gray-700">
                                                        <p>Date of Analysis :- 11/02/2006</p>
                                                        <p>Weather condition :- Clear</p>
                                                    </div>
                                                </div>

                                                <div className="border border-gray-200 rounded-[25px] overflow-hidden">
                                                    <table className="w-full border-collapse">
                                                        <thead>
                                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Parameters</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Balinga</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Rajaram Bandhara</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Shiroli Bridge</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100">
                                                            {[
                                                                { param: "D O (mg/ lit)", v1: "6.9", v2: "5.9", v3: "5.3" },
                                                                { param: "BOD(mg/ lit)", v1: "3.2", v2: "4.8", v3: "5.2" },
                                                                { param: "COD (mg/ lit)", v1: "77.3", v2: "95.4", v3: "102.3" },
                                                                { param: "TSS (mg/ lit)", v1: "52.5", v2: "93.7", v3: "101.8" },
                                                                { param: "Hardness (mg/ lit)", v1: "35.7", v2: "62.7", v3: "97.1" },
                                                                { param: "Free CO 2 mg/l", v1: "2.2", v2: "4.4", v3: "4.4" },
                                                                { param: "MPN /100ml", v1: ">=2400", v2: ">=2400", v3: ">=2400" },
                                                            ].map((row, idx) => (
                                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium bg-gray-100">{row.param}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v1}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v2}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v3}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            {/* Table 2 */}
                                            <div className="flex flex-col gap-4">
                                                <div className="text-center mb-2">
                                                    <div className="text-sm font-semibold text-gray-700">
                                                        <p>Date of Analysis :- 25/02/2006</p>
                                                        <p>Weather condition :- Clear</p>
                                                    </div>
                                                </div>

                                                <div className="border border-gray-200 rounded-[25px] overflow-hidden">
                                                    <table className="w-full border-collapse">
                                                        <thead>
                                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Parameters</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Balinga</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Rajaram Bandhara</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Shiroli Bridge</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100">
                                                            {[
                                                                { param: "D O (mg/ lit)", v1: "7.1", v2: "5.6", v3: "5.1" },
                                                                { param: "BOD(mg/ lit)", v1: "2.4", v2: "4.4", v3: "5.6" },
                                                                { param: "COD (mg/ lit)", v1: "79.9", v2: "91.7", v3: "98.3" },
                                                                { param: "TSS (mg/ lit)", v1: "51.3", v2: "92.8", v3: "107.8" },
                                                                { param: "Hardness (mg/ lit)", v1: "60.4", v2: "98.2", v3: "128.8" },
                                                                { param: "Free CO 2 mg/l", v1: "2.2", v2: "2.2", v3: "6.6" },
                                                                { param: "MPN /100ml", v1: ">=2400", v2: ">=2400", v3: ">=2400" },
                                                            ].map((row, idx) => (
                                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium bg-gray-100">{row.param}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v1}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v2}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v3}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    ) : selectedTab === "Mar'06" ? (
                                        <div className="flex flex-col gap-8">
                                            {/* Table 1 */}
                                            <div className="flex flex-col gap-4">
                                                <div className="text-center mb-2">
                                                    <h4 className="font-bold text-gray-800">Monitoring of of Panchganga River Water Quality during the month March</h4>
                                                    <h5 className="font-bold text-gray-800">Department of Environmental Science, Shivaji University, Kolhapur.</h5>
                                                    <div className="mt-2 text-sm font-semibold text-gray-700">
                                                        <p>Date of Analysis :- 11/03/2006</p>
                                                        <p>Weather condition :- Clear</p>
                                                    </div>
                                                </div>

                                                <div className="border border-gray-200 rounded-[25px] overflow-hidden">
                                                    <table className="w-full border-collapse">
                                                        <thead>
                                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Parameters</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Balinga</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Rajaram Bandhara</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Shiroli Bridge</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100">
                                                            {[
                                                                { param: "D O (mg/ lit)", v1: "7.3", v2: "6.8", v3: "5.4" },
                                                                { param: "BOD(mg/ lit)", v1: "7.5", v2: "4.5", v3: "7.7" },
                                                                { param: "COD (mg/ lit)", v1: "62.1", v2: "79.9", v3: "91.4" },
                                                                { param: "TSS (mg/ lit)", v1: "65.2", v2: "82.3", v3: "97.9" },
                                                                { param: "Hardness (mg/ lit)", v1: "41.4", v2: "69.1", v3: "101.3" },
                                                                { param: "Free CO 2 mg/l", v1: "2.2", v2: "4.4", v3: "6.6" },
                                                                { param: "MPN /100ml", v1: ">=2400", v2: ">=2400", v3: ">=2400" },
                                                            ].map((row, idx) => (
                                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium bg-gray-100">{row.param}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v1}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v2}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v3}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            {/* Table 2 */}
                                            <div className="flex flex-col gap-4">
                                                <div className="text-center mb-2">
                                                    <div className="text-sm font-semibold text-gray-700">
                                                        <p>Date of Analysis :- 25/03/2006</p>
                                                        <p>Weather condition :- Clear</p>
                                                    </div>
                                                </div>

                                                <div className="border border-gray-200 rounded-[25px] overflow-hidden">
                                                    <table className="w-full border-collapse">
                                                        <thead>
                                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Parameters</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Balinga</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Rajaram Bandhara</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Shiroli Bridge</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100">
                                                            {[
                                                                { param: "D O (mg/ lit)", v1: "6.9", v2: "7.1", v3: "5.1" },
                                                                { param: "BOD(mg/ lit)", v1: "5.2", v2: "3.4", v3: "7.3" },
                                                                { param: "COD (mg/ lit)", v1: "58.2", v2: "72.7", v3: "98.4" },
                                                                { param: "TSS (mg/ lit)", v1: "62.1", v2: "81.0", v3: "94.7" },
                                                                { param: "Hardness (mg/ lit)", v1: "68.0", v2: "73.1", v3: "93.6" },
                                                                { param: "Free CO 2 mg/l", v1: "2.2", v2: "2.2", v3: "4.4" },
                                                                { param: "MPN /100ml", v1: ">=2400", v2: ">=2400", v3: ">=2400" },
                                                            ].map((row, idx) => (
                                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium bg-gray-100">{row.param}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v1}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v2}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v3}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    ) : selectedTab === "Apr'06" ? (
                                        <div className="flex flex-col gap-8">
                                            {/* Table 1 */}
                                            <div className="flex flex-col gap-4">
                                                <div className="text-center mb-2">
                                                    <h4 className="font-bold text-gray-800">Monitoring of of Panchganga River Water Quality during April-2006</h4>
                                                    <h5 className="font-bold text-gray-800">Department of Environmental Science, Shivaji University, Kolhapur.</h5>
                                                    <div className="mt-2 text-sm font-semibold text-gray-700">
                                                        <p>Date of Analysis :- 04/04/2006</p>
                                                        <p>Weather condition :- Clear</p>
                                                    </div>
                                                </div>

                                                <div className="border border-gray-200 rounded-[25px] overflow-hidden">
                                                    <table className="w-full border-collapse">
                                                        <thead>
                                                            <tr className="border-b border-gray-200 bg-gray-50">
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Parameters</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Balinga</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Rajaram Bandhara</th>
                                                                <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 bg-gray-200">Shiroli Bridge</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100">
                                                            {[
                                                                { param: "D O (mg/ lit)", v1: "6.5", v2: "4.7", v3: "3.9" },
                                                                { param: "BOD(mg/ lit)", v1: "24.6", v2: "42.2", v3: "62.4" },
                                                                { param: "COD (mg/ lit)", v1: "56.8", v2: "96.7", v3: "112.3" },
                                                                { param: "TSS (mg/ lit)", v1: "88.9", v2: "97.5", v3: "201.3" },
                                                                { param: "Hardness (mg/ lit)", v1: "68.9", v2: "91.7", v3: "114.7" },
                                                                { param: "Free CO 2 mg/l", v1: "4.4", v2: "6.6", v3: "6.6" },
                                                                { param: "MPN /100ml", v1: ">=2400", v2: ">=2400", v3: ">=2400" },
                                                            ].map((row, idx) => (
                                                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                                    <td className="py-4 px-6 text-[13px] text-gray-700 font-medium bg-gray-100">{row.param}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v1}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v2}</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-600">{row.v3}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 flex flex-col items-center justify-center min-h-[200px] text-center">
                                            <p className="text-gray-500 italic">Content for {selectedTab} will be displayed here.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MonitoringPanchganga;
