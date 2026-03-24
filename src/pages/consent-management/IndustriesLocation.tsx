import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DocumentCard from '../../components/DocumentCard';

const standingorders = "/assets/standingorders.svg";

// Left sidebar tabs for industries location restrictions
const sidebarTabs = [
    "Mumbai Metropolitan Region",
    "Bapukutir Area",
    "Dahanu Area",
    "Bhatsa Area",
    "Costal Regulation Zone",
    "Location Criteria For Stone Crushers",
    "Matheran Eco Sensitive Zone",
    "Mahableshwar Eco Sensitive Zone",
    "Murud Zanjira Area (Raigad)",
    "Antop Hill (Mumbai)",
    "Western Ghat Notification",
    "Guidelines for Tabela and Gotha",
    "Guidelines for Poultry Farms",
    "Location Criteria for Brickkilnes",
    "Office order for Re-Constitution of Committee for Clarification / interpretation in respect of applicability of the Environmental Clearance.",
    "Minutes of committee meeting"
];


// Sample data for Minutes of committee meeting documents
const committeeMeetingDocuments = [
    { id: 1, title: "Minutes of 45th Committee Meeting - January 2024" },
    { id: 2, title: "Minutes of 44th Committee Meeting - December 2023" },
    { id: 3, title: "Minutes of 43rd Committee Meeting - November 2023" },
    { id: 4, title: "Minutes of 42nd Committee Meeting - October 2023" },
    { id: 5, title: "Minutes of 41st Committee Meeting - September 2023" },
    { id: 6, title: "Minutes of 40th Committee Meeting - August 2023" },
    { id: 7, title: "Minutes of 39th Committee Meeting - July 2023" },
    { id: 8, title: "Minutes of 38th Committee Meeting - June 2023" },
    { id: 9, title: "Minutes of 37th Committee Meeting - May 2023" },
    { id: 10, title: "Minutes of 36th Committee Meeting - April 2023" },
    { id: 11, title: "Minutes of 35th Committee Meeting - March 2023" },
    { id: 12, title: "Minutes of 34th Committee Meeting - February 2023" },
];

const ITEMS_PER_PAGE = 6; // 3 columns x 2 rows

function IndustriesLocation() {
    const [selectedTab, setSelectedTab] = useState(sidebarTabs[0]);
    const [currentPage, setCurrentPage] = useState(1);

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
        setCurrentPage(1); // Reset pagination when changing tabs
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Pagination calculations for committee meeting documents
    const totalPages = Math.ceil(committeeMeetingDocuments.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentDocuments = committeeMeetingDocuments.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
                            <h1 className="text-[24px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-tight mb-4 md:mb-8">
                                Restrictions for Locating Industries
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
                        <div className="w-full lg:w-[320px] flex-shrink-0">
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
                                <h2 className="text-[24px] font-semibold text-gray-800 mb-4">
                                    {selectedTab}
                                </h2>

                                {selectedTab === "Mumbai Metropolitan Region" ? (
                                    <div className="text-[14px] text-gray-700 leading-relaxed space-y-6">
                                        <div>
                                            <h3 className="text-[16px] font-semibold text-gray-800 mb-3">A) Restriction For Locating Industries</h3>
                                            <p className="mb-4">
                                                Mumbai Metropolitan Region, Government of Maharashtra, Industries, Energy and Labour Department, vide Government Resolution No. ILP/1098/4789/IND-2 dated 7/11/1998 have notified the modification of Industrial Location Policy in Mumbai Metropolitan Region. Accordingly for the purpose of the revised industrial location policy, the Mumbai Metropolitan Region has been divided into the following zones: -
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <p>
                                                <span className="font-semibold">Zone I:-</span> consisting of Greater Mumbai and areas of Thane Municipal Corporation and Mira-Bhayander Municipal Council.
                                            </p>
                                            <p>
                                                <span className="font-semibold">Zone II:-</span> consisting area of Kalyan and Navi Mumbai Municipal corporations; Ulhasnagar, Ambernath, Kulgaon-Badlpar Municspal councils; Bhivandi and Uran sub-regions as described in Schedule III and Vasai-Virar sub-region as per Notification No. TPS 1287/2753/CR-228-81/UD-12, dated 14th May, 1990. (Schedule IV)
                                            </p>
                                            <p>
                                                <span className="font-semibold">Zone III:-</span> consisting of the remaining areas of the Mumbai Metropolitan Region, excluding the areas covered under Zones I and II above.
                                            </p>
                                        </div>

                                        <div>
                                            <p className="font-semibold mb-4">The Locational Restriction in the Mumbai Metropolitan Region are as under:</p>

                                            <div className="border border-gray-500 rounded-[20px] md:rounded-[25px] overflow-hidden overflow-x-auto">
                                                <table className="w-full border-collapse min-w-[600px]">
                                                    <thead>
                                                        <tr className="bg-gray-100 border-b border-gray-500">
                                                            <th colSpan={3} className="py-3 px-4 text-center text-[13px] font-semibold text-gray-700">NAME OF REGION :- KALYAN</th>
                                                        </tr>
                                                        <tr className="bg-gray-50 border-b border-gray-500">
                                                            <th colSpan={3} className="py-3 px-4 text-center text-[13px] font-semibold text-gray-700">Industries Established on of before December 31, 1991</th>
                                                        </tr>
                                                        <tr className="border-b border-gray-500 bg-gray-50">
                                                            <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-[200px]">Item</th>
                                                            <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Zone I</th>
                                                            <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700">Zone II</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-500">
                                                        {/* Row 1 */}
                                                        <tr className="hover:bg-gray-50/50 transition-colors align-top">
                                                            <td rowSpan={3} className="py-4 px-4 text-[13px] text-gray-700 border-r border-gray-500">
                                                                1. New unit, substitute unit for one that has closed down or relocation of unit from elsewhere.
                                                            </td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-700 border-r border-gray-500">
                                                                (a) will be allowed freely for schedule I industry.
                                                            </td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-700">
                                                                (a) Other than units of Schedule II industries will be freely allowed.
                                                            </td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50 transition-colors align-top">
                                                            <td className="py-4 px-4 text-[13px] text-gray-700 border-r border-gray-500">
                                                                (b) Will be allowed for Schedule I-A Industries in Thane Municipal Corporation area and Mira-Bhayander Municipal Council area subject to conditions mentioned in Para 7 of this GR.
                                                            </td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-700">
                                                                (b) Schedule II industries will be allowed only in MIDC area. In other areas, they may be allowed only after approval of Committee mentioned under para 9 of this GR.
                                                            </td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50 transition-colors align-top">
                                                            <td className="py-4 px-4 text-[13px] text-gray-700 border-r border-gray-500">
                                                                (c) will not be allowed for others.
                                                            </td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-700">
                                                                (c) In Uran sub-region a defined in Schedule III no new/substitute unit will be allowed.
                                                            </td>
                                                        </tr>

                                                        {/* Row 2 */}
                                                        <tr className="hover:bg-gray-50/50 transition-colors align-top">
                                                            <td rowSpan={4} className="py-4 px-4 text-[13px] text-gray-700 border-r border-gray-500">
                                                                2.Expansion, modernisation or diversification of an existing unit.
                                                            </td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-700 border-r border-gray-500">
                                                                (a) will be allowed for Schedule I industries.
                                                            </td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-700">
                                                                (a) Expansion etc. Other than Schedule II industries will be allowed.
                                                            </td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50 transition-colors align-top">
                                                            <td className="py-4 px-4 text-[13px] text-gray-700 border-r border-gray-500">
                                                                (b) will be allowed for Schedule IA industries in Thane Municipal Corporation Area and Mira-Bhayander Municipal Council Area, subject to the conditions in para 7 of this GR.
                                                            </td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-700">
                                                                (b) Expansion etc. of schedule II industrial will be allowed only in MIDC areas. In other areas, it may be allowed only after approval of committee mentioned under Para 9 of this G.R.
                                                            </td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50 transition-colors align-top">
                                                            <td className="py-4 px-4 text-[13px] text-gray-700 border-r border-gray-500">
                                                                (c) Will be allowed for Schedule II industries provided the overall source pollution decreases and does not require additional power and additional built up area for manufacturing purpose.
                                                            </td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-700"></td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50 transition-colors align-top">
                                                            <td className="py-4 px-4 text-[13px] text-gray-700 border-r border-gray-500">
                                                                (d) Not covered under Schedule I, IA and II will be allowed upto permissible FSI, provided additional power is limited to 25 percent of authorised connected load on 4.5.93.
                                                            </td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-700"></td>
                                                        </tr>

                                                        {/* Row 3 */}
                                                        <tr className="hover:bg-gray-50/50 transition-colors align-top">
                                                            <td rowSpan={3} className="py-4 px-4 text-[13px] text-gray-700 border-r border-gray-500">
                                                                3.Proposed industrial estate construction on an open plot.
                                                            </td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-700 border-r border-gray-500">
                                                                (a) will be allowed for housing schedule I industries only.
                                                            </td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-700">
                                                                (a) Construction will be allowed for housing other than Schedule II industry.
                                                            </td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50 transition-colors align-top">
                                                            <td className="py-4 px-4 text-[13px] text-gray-700 border-r border-gray-500">
                                                                (b) Will be allowed for schedule IA industries in Thane Municipal Corporation Area and Mira Bhayander Municipal Council Area subject to condition in Para 7 of this GR.
                                                            </td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-700">
                                                                (b) In MIDC areas, construction will be allowed even for housing schedule II industry.
                                                            </td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50 transition-colors align-top">
                                                            <td className="py-4 px-4 text-[13px] text-gray-700 border-r border-gray-500">
                                                                (c) Will not be allowed for housing other than (a) and (b) above.
                                                            </td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-700"></td>
                                                        </tr>

                                                        {/* Row 4 */}
                                                        <tr className="hover:bg-gray-50/50 transition-colors align-top">
                                                            <td rowSpan={2} className="py-4 px-4 text-[13px] text-gray-700 border-r border-gray-500">
                                                                4. Expansion of approved industrial estates (having final NOC)/division of gala of structure.
                                                            </td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-700 border-r border-gray-500">
                                                                (a) Will be allowed to house only Schedule I industries and Schedule IA industries in Thane Municipal Corporation Area and Mira-Bhayander Municipal Council Area subject to condition in Para 7 of this G.R.
                                                            </td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-700">
                                                                (a) will be allowed for housing other than Schedule II industry.
                                                            </td>
                                                        </tr>
                                                        <tr className="hover:bg-gray-50/50 transition-colors align-top">
                                                            <td className="py-4 px-4 text-[13px] text-gray-700 border-r border-gray-500"></td>
                                                            <td className="py-4 px-4 text-[13px] text-gray-700">
                                                                (b) In MIDC areas, expansion/division will be allowed even for housing Schedule II industry.
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                ) : selectedTab === "Bapukutir Area" ? (
                                    <div className="text-[14px] text-gray-700 leading-relaxed space-y-6">
                                        <p>
                                            Restrictions have been placed on establishment of industries etc within a radius of 10 km from the Bapu Kutir vide Ministry of Environment and Forest, Government of India letter No. J-11011/21/93-IA.II(I) dated 23rd Feb.1994.
                                        </p>

                                        <p>
                                            In the Bapu Kutir Area establishment or expansion of only non-obnoxious, no-hazardous and non polluting industries at an approved site such as an industrial estate, falling under the green categories is permitted subject to following conditions.
                                        </p>

                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Effluents and emissions should comply with the standards prescribed by the State Pollution Control Board.</li>
                                            <li>The processes as detailed in Annexure-I are not involved.</li>
                                            <li>Use of fuel in the manufacturing or any subsidiary process should not be allowed.</li>
                                            <li>Fugitive emissions should not exist.</li>
                                        </ul>
                                    </div>
                                ) : selectedTab === "Dahanu Area" ? (
                                    <div className="text-[14px] text-gray-700 leading-relaxed space-y-6">
                                        <p>
                                            Ministry of Environment and Forests, Government of India, vide notification dated 20/6/91 declared Dahanu Taluka as an ecologically fragile area and have imposed restrictions on setting up of industries.
                                        </p>

                                        <p>
                                            Industries have been classified under three categories i.e. Green, Orange, Red for the purpose of permitting/restricting such industrial activities in Dahanu Taluka. Only industries in the Green Category are allowed to establish in approved industrial areas subject to following.
                                        </p>

                                        <ul className="space-y-4 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="w-2 h-2 bg-[#00A3FF] rounded-full mt-2 flex-shrink-0"></span>
                                                <span>Only those industries that are non-obnoxious and non-hazardous will be permitted. (Obnoxious and hazardous industries include those using inflammable, explosive, corrosive or toxic substances.)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-2 h-2 bg-[#00A3FF] rounded-full mt-2 flex-shrink-0"></span>
                                                <span>Only those industries that do not discharge industrial effluents of a polluting nature will be permitted.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-2 h-2 bg-[#00A3FF] rounded-full mt-2 flex-shrink-0"></span>
                                                <span>Only those industries that do not use coal in their manufacturing process will be permitted.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-2 h-2 bg-[#00A3FF] rounded-full mt-2 flex-shrink-0"></span>
                                                <span>Only those industries that do not emit fugitive emissions of a diffused nature will be permitted.</span>
                                            </li>
                                        </ul>

                                        <div className="mt-8">
                                            <DocumentCard document={{ id: 1, title: "Dahanu Taluka Notification" }} wide={false} />
                                        </div>
                                    </div>
                                ) : selectedTab === "Bhatsa Area" ? (
                                    <div className="text-[14px] text-gray-700 leading-relaxed">
                                        <p>
                                            Government of Maharashtra, Industries Department, vide Govt. Resolution ILP/1087/2477/Industries-2 dated 4th Dec. 1987 have notified restriction on siting of industries in Bhatsa Catchment Area.
                                        </p>
                                    </div>
                                ) : selectedTab === "Costal Regulation Zone" ? (
                                    <div className="text-[14px] text-gray-700 leading-relaxed space-y-4">
                                        <p>
                                            Ministry of Environment and forest vide its notification No. S.O. 114(E) has notified the declaration of coastal stretches as Coastal Regulation Zone (CRZ) and imposed restrictions in industries, operations and processes in the CRZ under the provisions of Environmental Protection Act, 1986. Hence, all new industries operation or expansion thereof needs to obtain permission of Govt. of India and/or Govt. of Maharashtra, as the case may be, before applying to MPCB.
                                        </p>

                                        <p>
                                            For more information visit <a href="http://envfor.nic.in" target="_blank" rel="noopener noreferrer" className="text-[#00A3FF] hover:underline">http://envfor.nic.in</a>
                                        </p>
                                    </div>
                                ) : selectedTab === "Location Criteria For Stone Crushers" ? (
                                    <div className="text-[14px] text-gray-700 leading-relaxed space-y-4">
                                        <p>
                                            M.P.C. Board in its 123rd meeting of the Board held on 30/3/99 has laid down the criteria for siting of stone crusher which is as under:-
                                        </p>

                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="w-2 h-2 bg-[#00A3FF] rounded-full mt-2 flex-shrink-0"></span>
                                                <span>The stone crusher will be located at minimum 500 meters from the nearest human habitation (Minimum 1000 souls).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="w-2 h-2 bg-[#00A3FF] rounded-full mt-2 flex-shrink-0"></span>
                                                <span>The minimum distance of the stone crusher from State Highway/National Highway shall be 500 meters.</span>
                                            </li>
                                        </ul>
                                    </div>
                                ) : selectedTab === "Matheran Eco Sensitive Zone" ? (
                                    <div>
                                        <DocumentCard document={{ id: 1, title: "Matheran Eco Sensitive Zone" }} wide={false} />
                                    </div>
                                ) : selectedTab === "Mahableshwar Eco Sensitive Zone" ? (
                                    <div>
                                        <DocumentCard document={{ id: 1, title: "Mahableshwar Eco Sensitive Zone" }} wide={false} />
                                    </div>
                                ) : selectedTab === "Murud Zanjira Area (Raigad)" ? (
                                    <div>
                                        <DocumentCard document={{ id: 1, title: "Murud Zanjira Area (Raigad)" }} wide={false} />
                                    </div>
                                ) : selectedTab === "Antop Hill (Mumbai)" ? (
                                    <div>
                                        <DocumentCard document={{ id: 1, title: "Antop Hill (Mumbai)" }} wide={false} />
                                    </div>
                                ) : selectedTab === "Western Ghat Notification" ? (
                                    <div>
                                        <DocumentCard document={{ id: 1, title: "Western Ghat Notification" }} wide={false} />
                                    </div>
                                ) : selectedTab === "Guidelines for Tabela and Gotha" ? (
                                    <div>
                                        <DocumentCard document={{ id: 1, title: "Guidelines for Tabela and Gotha" }} wide={false} />
                                    </div>
                                ) : selectedTab === "Guidelines for Poultry Farms" ? (
                                    <div>
                                        <DocumentCard document={{ id: 1, title: "Guidelines for Poultry Farms" }} wide={false} />
                                    </div>
                                ) : selectedTab === "Location Criteria for Brickkilnes" ? (
                                    <div>
                                        <DocumentCard document={{ id: 1, title: "Location Criteria for Brickkilnes" }} wide={false} />
                                    </div>
                                ) : selectedTab === "Office order for Re-Constitution of Committee for Clarification / interpretation in respect of applicability of the Environmental Clearance." ? (
                                    <div>
                                        <DocumentCard document={{ id: 1, title: "Office order for Re-Constitution of Committee for Clarification / interpretation in respect of applicability of the Environmental Clearance." }} wide={false} />
                                    </div>
                                ) : selectedTab === "Minutes of committee meeting" ? (
                                    <div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {currentDocuments.map((doc) => (
                                                <DocumentCard key={doc.id} document={doc} wide={false} />
                                            ))}
                                        </div>

                                        {/* Pagination Controls */}
                                        {totalPages > 1 && (
                                            <div className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-gray-100">
                                                <button
                                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                                    disabled={currentPage === 1}
                                                    className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors cursor-pointer
                                                        ${currentPage === 1
                                                            ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                                            : 'border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2]'
                                                        }`}
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                </button>

                                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                                    <button
                                                        key={page}
                                                        onClick={() => setCurrentPage(page)}
                                                        className={`w-10 h-10 flex items-center justify-center rounded-full text-[14px] font-medium transition-colors cursor-pointer
                                                            ${currentPage === page
                                                                ? 'bg-[#0085E2] text-white'
                                                                : 'text-gray-600 hover:bg-gray-100'
                                                            }`}
                                                    >
                                                        {page}
                                                    </button>
                                                ))}

                                                <button
                                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                                    disabled={currentPage === totalPages}
                                                    className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors cursor-pointer
                                                        ${currentPage === totalPages
                                                            ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                                            : 'border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2]'
                                                        }`}
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <p className="text-[14px] text-gray-600">
                                        Content for {selectedTab} will be displayed here.
                                        This section will contain the relevant guidelines, restrictions,
                                        and documentation for the selected location criteria.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default IndustriesLocation;