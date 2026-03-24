import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const standingorders = "/assets/standingorders.svg";
import DocumentCard from '../../components/DocumentCard'

// Left sidebar tabs for categorisation
const sidebarTabs = [
    "Revised Categorisation of Industries (R/O/G/W/B)",
    "Minutes of Industry Categorisation Committee Meeting for M.P.C.Board.",
    "Archive",
    "Archive - Further Categorisation"
];

// Sample categorisation data - can be dynamically populated per tab
const categorisationDataByTab: Record<string, { id: number; title: string; }[]> = {
    "Revised Categorisation of Industries (R/O/G/W/B)": [
        { id: 1, title: "Orange Category Industries (O) - Medium Pollution Potential" },
        { id: 2, title: "Orange Category Industries (O) - Medium Pollution Potential" },
        { id: 3, title: "Green Category Industries (G) - Low Pollution Potential" },
        { id: 4, title: "White Category Industries (W) - Practically Non-Polluting" },
        { id: 5, title: "Blue Category Industries (B) - Special Projects" },
        { id: 6, title: "Updated Classification Guidelines for Industries" },
        { id: 7, title: "Categorisation Criteria for New Industries" },
        { id: 8, title: "Re-categorisation Process and Guidelines" },
        { id: 9, title: "Environmental Compliance for Red Category" },
        { id: 10, title: "Consent Requirements Based on Category" },
    ],
    "Minutes of Industry Categorisation Committee Meeting for M.P.C.Board.": [
        { id: 1, title: "Minutes of 45th ICC Meeting - January 2024" },
        { id: 2, title: "Minutes of 44th ICC Meeting - December 2023" },
        { id: 3, title: "Minutes of 43rd ICC Meeting - November 2023" },
        { id: 4, title: "Minutes of 42nd ICC Meeting - October 2023" },
        { id: 5, title: "Minutes of 42nd ICC Meeting - October 2023" },
        { id: 6, title: "Minutes of 42nd ICC Meeting - October 2023" },
        { id: 7, title: "Minutes of 42nd ICC Meeting - October 2023" },
        { id: 8, title: "Minutes of 42nd ICC Meeting - October 2023" },
    ],
    "Archive": [
        { id: 1, title: "Archived Categorisation Guidelines 2020" },
        { id: 2, title: "Archived Classification Standards 2019" },
        { id: 3, title: "Historical Industry Categories 2018" },
    ],
    "Archive - Further Categorisation": [
        { id: 1, title: "Legacy Sub-Categorisation Rules" },
        { id: 2, title: "Extended Classification Guidelines" },
    ],
};

// Data for Archive - Further Categorisation (MPCB ROG)
const furtherCategorisationData = {
    red: {
        sectionA: [
            "Distillery including Fermentation industry.",
            "Sugar (excluding Khandsari)",
            "Fertilizer (Basic) (excluding formulation)",
            "Pulp and Paper (Paper manufacturing with or without pulping).",
            "Basic Drugs.",
            "Pharmaceuticals (excluding formulation).",
            "Dyes and Dye-intermediates.",
            "Pesticides (Technical) (excluding formulation).",
            "Oil refinery (Mineral oil or Petro refineries).",
            "Tanneries.",
            "Petrochemicals (Manufacture of and not merely use of as raw material)",
            "Cement",
            "Thermal Power Plants",
            "Iron and Steel (Involving processing from ore/scrap/Integrated steel plants.)",
            "Zinc smelter",
            "Copper smelter.",
            "Aluminium smelter",
            "Lead processing and battery reconditioning and manufacturing (including lead smelting)."
        ],
        sectionB: [
            "Tyres and tubes (excluding Vulcanisation/Retreating/moulding).",
            "Synthetic rubber",
            "Glass and fiberglass production and processing.",
            "Industrial carbon including electrodes and graphite blocks, activated carbon, carbon black etc.",
            "Paints and varnishes (excluding blending/mixing)",
            "Pigments and intermediates.",
            "Synthetic resins.",
            "Petroleum products involving storage, transfer or processing.",
            "Lubricating oils, greases or petroleum-based products",
            "Synthetic fibers including rayon, tyre cord, polyester filament yarn.",
            "Surgical and medical products involving prophylactics and latex.",
            "Synthetic detergent and soap.",
            "Photographic films and chemicals.",
            "Chemical, petrochemical and electrochemical including manufacture of acids (Sulphuric, Nitric, Phosphoric etc.)",
            "Industrial or inorganic gases.",
            "Chlorates, perchlorates and peroxides.",
            "Glue and gelatin",
            "Yarn and textile processing involving scouring, bleaching, dyeing, printing etc.",
            "Vegetable oils including solvent extracted oils, hydrogenated oils.",
            "Metal treatment processes (pickling, surface coating, paint baking, heat treatment, etc.)",
            "Electroplating operations.",
            "Asbestos and asbestos-based industries.",
            "Slaughter houses and meat processing units.",
            "Fermentation industry including manufacture of yeast, beer etc.",
            "Steel and steel products (coke plants, blast furnaces, induction furnace, arc furnace, etc.)",
            "Incineration plant",
            "Power generating plants (excluding D.G. Sets)",
            "Lime manufacturing",
            "Tobacco products including cigarettes and tobacco processing.",
            "Dry coal processing/Mineral processing industries (ore sintering, palletization, etc.)",
            "Phosphate rock processing plants",
            "Coke making, coal liquefaction, coaltar distillation or fuel gas making",
            "Phosphorous rock processing plants.",
            "Explosive including detonators, etc.",
            "Fire crackers.",
            "Processes involving chlorinated hydrocarbon.",
            "Chlorine, fluorine, bromine, iodine and their compounds.",
            "Hydrocyanic acid and its derivatives.",
            "Milk processing and dairy products (Integrated project)",
            "Industry or process involving foundry operations.",
            "Potable alcohol (IMFL) by blending or distillation of alcohol."
        ]
    },
    orange: [
        "Manufacture of mirror from sheet glass and photoframing",
        "Cotton spinning and weaving",
        "Automobile servicing and repairs stations.",
        "Hotels and restaurants",
        "Flour mills (excluding Domestic Aatta Chakki)",
        "Malted food",
        "Food including fruits and vegetable processing",
        "Pulping and fermenting of coffee beans.",
        "Instant tea/coffee, coffee processing.",
        "Non-alcoholic beverages (soft drinks)",
        "Fragrances and industrial perfumes",
        "Food additives, nutrients and flavours.",
        "Fish processing",
        "Organic nutrients",
        "Surgical and medical products not involving effluent/emission generating processes",
        "Laboratory-wares",
        "Wire drawing (cold process) and bailing straps.",
        "Stone crushers",
        "Laboratory chemicals involving distillation, purification process",
        "Tyres and tubes vulcanisation, retreading moulding.",
        "Pesticides/Insecticides/Fungicides/Herbicides/Agrochemical formulation",
        "NPK Fertilizers/Granulation",
        "Pharmaceuticals formulations.",
        "Khandsari sugar"
    ],
    green: [
        "Wasting of used sand by hydraulic discharge",
        "Aatta-chakkies",
        "Rice mullors",
        "Steeping and processing of grains",
        "Mineralised water",
        "Dal mills",
        "Bakery products, biscuits, confectionery",
        "Groundnut decorticating (dry)",
        "Supari (Betelnut) and masala grinding",
        "Chilling plants and cold storages",
        "Ice cream or Ice-making",
        "Tailoring and garment making",
        "Cotton and woolen hosiery",
        "Apparel making",
        "Handloom weaving",
        "Shoelace manufacturing",
        "Gold and silver thread zari work",
        "Gold and silver smithy",
        "Leather footwear and products (excluding tanning)",
        "Musical instruments manufacturing",
        "Sports goods.",
        "Bamboo and cane products (dry operations)",
        "Cardboard or corrugated box and paper products (no pulping)",
        "Insulation and other coated papers (no pulping)",
        "Scientific and mathematical instruments.",
        "Furniture (wooden and steel)",
        "Assembly of domestic electrical appliances",
        "Radio assembling",
        "Fountain pens.",
        "Polythene, plastic and P.V.C. goods (extrusion/moulding)",
        "Rope (cotton and plastic)",
        "Carpet weaving",
        "Assembly of air coolers, conditioners.",
        "Assembly of bicycles, baby carriages, etc.",
        "Electronics equipment (Assembly)",
        "Toys",
        "Water softening and demineralised plants",
        "Paint (mixing process only)",
        "Candles",
        "Carpentry (excluding saw mill)",
        "Oil ginning/expelling (no hydrogenation/refining)",
        "Jobbing and machining",
        "Manufacture of steel trunks and suitcases",
        "Paper pins and U-clips",
        "Block making for printing.",
        "Optical frames",
        "Powerlooms/handlooms (without dyeing & bleaching)",
        "Printing press",
        "Garments stitching, tailoring",
        "Thermometer making",
        "Footwear (rubber)",
        "Plastic processed goods.",
        "Medical and surgical instruments",
        "Electronic and electrical goods.",
        "Rubber goods industry."
    ]
};

const DOCUMENTS_PER_PAGE = 6; // 2 columns x 3 rows

const Categorisation = () => {
    const [selectedTab, setSelectedTab] = useState(sidebarTabs[0]);
    const [currentPage, setCurrentPage] = useState(1);

    const currentData = categorisationDataByTab[selectedTab] || [];

    // Pagination logic - always 2 columns x 3 rows = 6 documents per page
    const totalPages = Math.ceil(currentData.length / DOCUMENTS_PER_PAGE);
    const startIndex = (currentPage - 1) * DOCUMENTS_PER_PAGE;
    const paginatedDocuments = currentData.slice(startIndex, startIndex + DOCUMENTS_PER_PAGE);

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="font-family-helvetica">
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
                                Categorisation of Industries (R/O/G/W & B)
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
                            {/* Special content for Archive tab */}
                            {selectedTab === "Archive" ? (
                                <div className="text-[14px] text-gray-700 leading-relaxed">
                                    {/* Header Links */}
                                    <p className="mb-4">
                                        Directions u/s 18(1)(b) of Water (P & CP) Act, 1974 regarding Classification of Industries into Red, Green and Orange Category by Cpcb letter vide no.B-29012/1/2012/ESS/1540 dtd.04.06.2012.
                                        <a href="#" className="text-[#00A3FF] hover:underline ml-1">(Click here for CPCB Letter dated 04/06/2012)</a>
                                    </p>

                                    <p className="mb-6">
                                        <a href="#" className="text-[#00A3FF] hover:underline">CPCB letted dated 02/06/2014</a>
                                        {" "}- Clarificatory amendment in the Categorisation of Industries as Red, Orange and Green for Grant of Consent.
                                    </p>

                                    {/* Table */}
                                    <div className="border border-gray-200 rounded-[15px] overflow-hidden mb-6 overflow-x-auto">
                                        <table className="w-full border-collapse min-w-[500px]">
                                            <thead>
                                                <tr className="bg-gray-50 border-b border-gray-200">
                                                    <th className="py-3 px-4 text-left text-[13px] font-semibold text-gray-700">Industry Type (As per CPCB)</th>
                                                    <th className="py-3 px-4 text-left text-[13px] font-semibold text-gray-700">Additional Categorization by M.P.C.Board</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                <tr className="hover:bg-gray-50/50">
                                                    <td className="py-3 px-4 text-[#00A3FF] text-[13px] cursor-pointer hover:underline">List of Red Category Industry</td>
                                                    <td className="py-3 px-4 text-[13px] text-[#00A3FF] cursor-pointer hover:underline">List of Red Category Industry</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50/50">
                                                    <td className="py-3 px-4 text-[#00A3FF] text-[13px] cursor-pointer hover:underline">List of Orange Category Industry</td>
                                                    <td className="py-3 px-4 text-[13px] text-[#00A3FF] cursor-pointer hover:underline">List of Orange Category Industry</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50/50">
                                                    <td className="py-3 px-4 text-[#00A3FF] text-[13px] cursor-pointer hover:underline">List of Green Category Industry</td>
                                                    <td className="py-3 px-4 text-[13px] text-[#00A3FF] cursor-pointer hover:underline">List of Green Category Industry</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50/50">
                                                    <td className="py-3 px-4 text-[#00A3FF] text-[13px] cursor-pointer hover:underline">List of White Category Industry</td>
                                                    <td className="py-3 px-4 text-[13px] text-[#00A3FF] cursor-pointer hover:underline">List of White Category Industry</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Note Section */}
                                    <div className="mb-6">
                                        <p className="font-semibold text-gray-800 mb-3">Note:-</p>
                                        <ul className="list-none space-y-3 text-[13px]">
                                            <li>
                                                An indicative list of orange category of industries are prepared considering the industrial activities which are not included under the list of red category and green category of industries in <a href="#" className="text-[#00A3FF] hover:underline">Annexure I</a>.
                                            </li>
                                            <li>
                                                The industry which do not fall in any of the above mentioned Three categories (i.e Red/Orange/Green), decision with regard to their categorization will be taken by a committee constituted by respective SPCBs / PCCs.
                                            </li>
                                            <li>
                                                In case of reduction of pollution load due to adoption of cleaner technology or change in production process by any industry decision on re-categorization of such activity will be taken by a committee constituted by respective SPCBs/PCCs.
                                            </li>
                                            <li>
                                                Industrial siting policy of setting up of industries may be decided by the respective SPCBs in consultation with the concerned State Governments.
                                            </li>
                                            <li>
                                                Grossly water polluting industries having BOD load 100 kg/day or more before treatment may be monitored Four times in a year. Considering the change scenario of water availability and exhausted carrying capacity of most of the rivers and lakes in the country, some more industries having BOD load more than 50 kg/day but less than 100 kg/day (before treatment) may be brought under the purview of grossly polluting industry. However these industries may be monitored twice in a year.
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Bottom Link */}
                                    <p>
                                        <a href="#" className="text-[#00A3FF] hover:underline">Constitution of Industry Categorisation Committee for M.P.C.Board</a>
                                    </p>
                                </div>
                            ) : selectedTab === "Archive - Further Categorisation" ? (
                                <div className="space-y-8">
                                    {/* Red Category */}
                                    <div className="space-y-4">
                                        <h2 className="text-[18px] font-bold text-red-600">I. List of Industries under 'RED' Category</h2>

                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="text-[15px] font-semibold text-gray-800 mb-2">Section A: Industries identified by MoEF, Government of India (Central Action Plan)</h3>
                                                <div className="border border-gray-200 rounded-[20px] md:rounded-[25px] overflow-hidden overflow-x-auto">
                                                    <table className="w-full border-collapse min-w-[400px]">
                                                        <tbody className="divide-y divide-gray-100">
                                                            {furtherCategorisationData.red.sectionA.map((item, index) => (
                                                                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                                                    <td className="py-4 px-6 text-[13px] text-gray-700 w-16 align-top font-medium">{index + 1}.</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-700 align-top">{item}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-[15px] font-semibold text-gray-800 mb-2">Section B: Industries manufacturing specific products or activities</h3>
                                                <div className="border border-gray-200 rounded-[20px] md:rounded-[25px] overflow-hidden overflow-x-auto">
                                                    <table className="w-full border-collapse min-w-[400px]">
                                                        <tbody className="divide-y divide-gray-100">
                                                            {furtherCategorisationData.red.sectionB.map((item, index) => (
                                                                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                                                    <td className="py-4 px-6 text-[13px] text-gray-700 w-16 align-top font-medium">{index + 1}.</td>
                                                                    <td className="py-4 px-6 text-[13px] text-gray-700 align-top">{item}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Orange Category */}
                                    <div className="space-y-4">
                                        <h2 className="text-[18px] font-bold text-orange-500">II. List of Industries under 'ORANGE' Category</h2>

                                        <div>
                                            <h3 className="text-[15px] font-semibold text-gray-800 mb-2">Section A: Industries identified by MoEF, Government of India (Orange Category)</h3>
                                            <div className="border border-gray-200 rounded-[20px] md:rounded-[25px] overflow-hidden overflow-x-auto">
                                                <table className="w-full border-collapse min-w-[400px]">
                                                    <tbody className="divide-y divide-gray-100">
                                                        {furtherCategorisationData.orange.map((item, index) => (
                                                            <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                                                <td className="py-4 px-6 text-[13px] text-gray-700 w-16 align-top font-medium">{index + 1}.</td>
                                                                <td className="py-4 px-6 text-[13px] text-gray-700 align-top">{item}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Green Category */}
                                    <div className="space-y-4">
                                        <h2 className="text-[18px] font-bold text-green-600">III. List of Industries under 'GREEN' Category</h2>

                                        <div>
                                            <h3 className="text-[15px] font-semibold text-gray-800 mb-2">Section A: Industries in Small Scale, Cottage/Village category suggested under Annexure to Environment Department, Government of Maharashtra, G.R. No.ENV/1088/672/CR-185 Desk-1 dated 18.3 1992 for issuance simplified NOC/Consent from Maharashtra Pollution Control Board.</h3>
                                            <h3 className="text-[15px] font-semibold text-gray-800 mb-2">Section B: Illustrative list of entries not generating process effluents or emissions</h3>
                                            <div className="border border-gray-200 rounded-[20px] md:rounded-[25px] overflow-hidden overflow-x-auto">
                                                <table className="w-full border-collapse min-w-[400px]">
                                                    <tbody className="divide-y divide-gray-100">
                                                        {furtherCategorisationData.green.map((item, index) => (
                                                            <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                                                <td className="py-4 px-6 text-[13px] text-gray-700 w-16 align-top font-medium">{index + 1}.</td>
                                                                <td className="py-4 px-6 text-[13px] text-gray-700 align-top">{item}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <p className="text-[15px] font-semibold text-gray-800 mb-2">Note:

                                                The industries which do not fall in any of the above mentioned 3 categories, decision with regard to their classification will be taken by a committee at Head Office level comprising of APAE/WPAE/PSO.
                                                In respect of the industries falling under A & B under 'GREEN' category, in the event of any   duplication/repeatation, the industry shall be treated to be falling under category 'A' which is entitled for the benefit of simplified perpetual consent without charging of any consent fee.</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {/* Results count */}
                                    <div className="mb-6 text-[14px] text-gray-500">
                                        Showing {currentData.length > 0 ? startIndex + 1 : 0}-{Math.min(startIndex + DOCUMENTS_PER_PAGE, currentData.length)} of {currentData.length} document{currentData.length !== 1 ? 's' : ''}
                                    </div>

                                    {/* 2 Column x 3 Row Grid */}
                                    {paginatedDocuments.length > 0 && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                                            {paginatedDocuments.map((doc) => (
                                                <DocumentCard key={doc.id} document={doc} wide={true} />
                                            ))}
                                        </div>
                                    )}

                                    {/* Empty State */}
                                    {currentData.length === 0 && (
                                        <div className="flex flex-col items-center justify-center py-20 text-center">
                                            <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <h3 className="text-[20px] font-semibold text-gray-700 mb-2">No Documents Available</h3>
                                            <p className="text-[14px] text-gray-500">
                                                No documents found in this category.
                                            </p>
                                        </div>
                                    )}
                                </>
                            )}

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-gray-100">
                                    <button
                                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
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
                                            onClick={() => handlePageChange(page)}
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
                                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
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
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Categorisation;
