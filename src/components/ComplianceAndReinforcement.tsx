import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Gavel, FileText, Scale, TriangleAlert, ChevronDown, ChevronUp, ChevronRight, ChevronLeft } from 'lucide-react';
import DocumentCard from './DocumentCard';

// Reusable Paginated Section Component (Matches AirQuality.tsx)
const PaginatedSection = ({ title, documents }: { title: string, documents: any[] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isViewAll, setIsViewAll] = useState(false);
    const ITEMS_PER_PAGE = 4; // 2 rows * 2 columns

    const totalPages = Math.ceil(documents.length / ITEMS_PER_PAGE);

    // Determine which documents to show
    const currentDocuments = isViewAll
        ? documents
        : documents.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const toggleViewAll = () => {
        setIsViewAll(!isViewAll);
        setCurrentPage(1); // Reset to first page when toggling
    };

    const getPageNumbers = (curr: number, total: number) => {
        const pages: any[] = [];
        if (total <= 3) {
            for (let i = 1; i <= total; i++) pages.push(i);
        } else {
            if (curr <= 2) pages.push(1, 2, 3, '...', total);
            else if (curr >= total - 1) pages.push(1, '...', total - 2, total - 1, total);
            else pages.push(1, '...', curr - 1, curr, curr + 1, '...', total);
        }
        return pages;
    };

    return (
        <div className="bg-white rounded-[20px] border border-gray-200 p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <div className="flex items-center justify-between mb-6 md:mb-8 pb-4 border-b border-gray-100">
                <h3 className="text-[16px] md:text-[18px] font-bold text-gray-800 flex items-center gap-3 leading-snug max-w-[80%]">
                    {title}
                </h3>
                {documents.length > ITEMS_PER_PAGE && (
                    <button
                        onClick={toggleViewAll}
                        className="px-4 py-2 text-sm font-medium text-[#0085E2] bg-blue-50 hover:bg-[#0085E2] hover:text-white cursor-pointer rounded-full transition-all duration-300 shrink-0"
                    >
                        {isViewAll ? "Show Less" : "View All"}
                    </button>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {currentDocuments.map((doc) => (
                    <DocumentCard
                        key={doc.id}
                        document={doc}
                        wide={false}
                    />
                ))}
            </div>

            {/* Show pagination only if NOT in View All mode and total pages > 1 */}
            {!isViewAll && totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                    {currentPage > 1 && (
                        <button onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                    )}
                    {getPageNumbers(currentPage, totalPages).map((page, index) => (
                        page === '...' ? (
                            <span key={`ellipsis-${index}`} className="px-2 text-gray-400 text-sm">...</span>
                        ) : (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page as number)}
                                className={`w-8 h-8 flex items-center justify-center rounded-full text-[13px] font-medium transition-all duration-300 cursor-pointer
                                    ${currentPage === page
                                        ? 'bg-[#0085E2] text-white shadow-md shadow-blue-200 scale-110'
                                        : 'text-gray-600 hover:bg-gray-50'}`}
                            >
                                {page}
                            </button>
                        )
                    ))}
                    {currentPage < totalPages && (
                        <button onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

function ComplianceAndReinforcement() {
    const navigate = useNavigate();
    const [openAccordion, setOpenAccordion] = useState<string | null>("Court Matters");
    const [activeTab, setActiveTab] = useState<number>(0);
    const [showArchive, setShowArchive] = useState(false);

    const tabs = [
        { name: "Legal Matters", icon: Gavel },
        { name: "Closure Direction Status", icon: FileText },
        { name: "ATR with respect to complaints", icon: TriangleAlert },
        { name: "Compliance of NGT Order dated 17/08/2018 in OA No. 125 of 2018 filled by Arvind Mhatre V/s MoEF and CC and Other", icon: Scale },
        { name: "TOP 10 DEFAULTER- COMPLIANCE OF HON'BLE SUPREME COURT OF INDIA(SCI) ORDER IN IA NO. 53816 OF 2020 IN CIVIL APPEAL NO. 10582 OF 2017", icon: Scale },
    ];



    // Reusable Dropdown/Accordion Section (Matches solid-waste.tsx)
    interface DropdownItem {
        text: string;
        link?: string;
        date?: string;
        subItems?: DropdownItem[];
    }

    const DropdownSection = ({ title, items }: { title: string, items: (string | DropdownItem)[] }) => {
        const [isOpen, setIsOpen] = useState(false);

        const renderItem = (item: string | DropdownItem, idx: number) => {
            if (typeof item === 'string') {
                return (
                    <div key={idx} className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group">
                        <span className="flex-1 font-medium">{item}</span>
                    </div>
                );
            } else if (item.subItems) {
                // Nested Dropdown Item
                return (
                    <DropdownSection key={idx} title={item.text} items={item.subItems} />
                );
            } else if (item.link) {
                // Link Item
                return (
                    <a
                        key={idx}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group block"
                    >
                        <div className="flex flex-col flex-1">
                            <span className="font-medium">{item.text}</span>
                            {item.date && <span className="text-xs text-gray-400 mt-0.5">{item.date}</span>}
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0085E2]" />
                    </a>
                );
            } else {
                // Plain Text Item (Description)
                return (
                    <div key={idx} className="px-4 py-3 text-[14px] text-gray-600 border-b border-gray-50 last:border-0">
                        <span className="flex-1 leading-relaxed">{item.text}</span>
                    </div>
                );
            }
        };

        return (
            <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-between px-6 py-4 bg-gray-50/50 cursor-pointer hover:bg-gray-100/80 transition-colors"
                >
                    <h4 className="text-[14px] font-bold text-gray-800">{title}</h4>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </div>
                <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4 bg-white flex flex-col gap-2">
                        {items.map((item, idx) => renderItem(item, idx))}
                    </div>
                </div>
            </div>
        );
    };

    const legalData = [
        { text: "Report of Committee -OA No,101 of 2020 (WZ) (Madhukar Dahule Vs State of Maharashtra & Ors)-regarding Koradi Nala diversion by WCL", isPdf: true },
        { text: "Maharashtra Air (Prevention and Control of Pollution) Rules,1983", isPdf: true },
        { text: "Maharashtra Water (Prevention and control of Pollution) Rules, 1983", isPdf: true },
        { text: "Legislations / Notifications", isPdf: false },
        { text: "Treaties / Conventions / Declarations", isPdf: false },
        { text: "Gazette issued by Urban Development and Public Health Department, Government of Maharashtra regarding Reconstitution of Board", isPdf: true },
        { text: "Gazzette notification regarding Enforcement Policy of MPCB 2015", isPdf: true },
        { text: "Important Circulars /Office Orders / Standing Orders / Standing Orders Issued By Policy & Law Division", isPdf: false, link: "/compliance-enforcement/legal-matters/important-circulars" },
        { text: "Achievements", isPdf: false }
    ];

    const judicialFormsData = [
        {
            text: "Orders Passed By Various Appellate Authorities",
            subItems: [
                { text: "Under provisions of the Water Act, 1974 & Air Act, 1981", link: "/compliance-enforcement/legal-matters/appellate-water-act" },
                { text: "Under provisions of the Hazardous Waste (M.H. & T.M.) Rules, 2008,", link: "#" },
                { text: "Under provisions of the Bio Medical Waste (M & H) Rules, 1989", link: "#" },
                { text: "Under provisions of the Water (P & CP) Cess Act, 1977", link: "#" }
            ]
        },
        { text: "Orders Passed Under Right to Information Act , 2005", subItems: [{ text: "Important Circulars", link: "#" }] },
        {
            text: "Statistical Information Of Trial Court Cases",
            subItems: [
                { text: "Old Statistical Details", link: "/compliance-enforcement/legal-matters/old-statistical-details" },
                { text: "Statistical Details As on 31st Oct 2024", link: "/compliance-enforcement/legal-matters/statistical-details-2024" }
            ]
        }
    ];

    // Archive Data
    const archiveLegalData = [
        { text: "Report of Committee -OA No,101 of 2020 (wz) (Madhukar Dahule Vs State of Maharashtra & Ors)-regarding Koradi Nala diversion by WCL", link: "#" },
        { text: "Report of Committee- OA No. 130 of 2021 related to fatal fire accident at M/s SVS Aqua Technologies Ltd Urawade", link: "#" },
        { text: "Maharashtra Air (Prevention and Control of Pollution) Rules,1983", link: "#" },
        { text: "Maharashtra Water (Prevention and control of Pollution) Rules, 1983", link: "#" },
        { text: "Legislations / Notifications", link: "#" },
        { text: "Treaties / Conventions / Declarations", link: "#" },
        { text: "Gazette issued by Urban Development and Public Health Department, Government of Maharashtra regarding Reconstitution of Board", link: "#" },
        { text: "Gazzette notification regarding Enforcement Policy of MPCB 2015", link: "#" },
        { text: "Compliance of the National Green Tribunal (NGT) order.", link: "/compliance-enforcement/legal-matters/ngt-order" },
        { text: "Important Circulars /Office Orders / Standing Orders / Standing Orders Issued By Policy & Law Division", link: "/compliance-enforcement/legal-matters/important-circulars" },
        { text: "Joint Committee Report of MPCB in compliance with Hon'ble NGT order dated 23.03.2021 in the matter of OA No. 270 of 2020", link: "#" },
        { text: "Achievements", link: "#" }
    ];

    const archiveJudicialFormsData = [
        {
            text: "Orders Passed By Various Appellate Authorities",
            subItems: [
                { text: "Under provisions of the Water Act, 1974 & Air Act, 1981", link: "/compliance-enforcement/legal-matters/appellate-water-act-archive" },
                { text: "Under provisions of the Hazardous Waste (M.H. & T.M.) Rules, 2008,", link: "#" },
                { text: "Under provisions of the Bio Medical Waste (M & H) Rules, 1989", link: "#" },
                { text: "Under provisions of the Water (P & CP) Cess Act, 1977", link: "#" }
            ]
        },
        {
            text: "Orders Passed Under Right to Information Act , 2005",
            subItems: [
                { text: "Template u/s 4 of the RTI, Act, 2005", link: "#" },
                { text: "First Appellate Authority", link: "/compliance-enforcement/legal-matters/first-appellate-authority" },
                { text: "Second Appellate Authority", link: "/compliance-enforcement/legal-matters/second-appellate-authority" },
                { text: "Important Circulars", link: "#" }
            ]
        },
        {
            text: "Statistical Information Of Trial Court Cases",
            subItems: [
                { text: "Old Statistical Details", link: "/compliance-enforcement/legal-matters/old-statistical-details" },
                { text: "Statistical Details As on 31st Oct 2024", link: "/compliance-enforcement/legal-matters/statistical-details-2024" }
            ]
        }
    ];

    const archiveCourtMattersData = [
        {
            text: "Orders Passed By Hon'Ble Supreme Court Of India.",
            subItems: [
                { text: "Environmental Laws", link: "/compliance-enforcement/legal-matters/environmental-laws-archive" },
                { text: "Service Matters", link: "/compliance-enforcement/legal-matters/service-matters" }
            ]
        },
        {
            text: "Orders Passed By The High Court",
            subItems: [
                {
                    text: "Mumbai Bench",
                    subItems: [
                        { text: "Water (P & CP) Act, 1974", link: "/compliance-enforcement/legal-matters/mumbaibench-water-archive" },
                        { text: "Air (P & CP) Act, 1981", link: "/compliance-enforcement/legal-matters/mumbaibench-air" },
                        { text: "Water (P & CP) Cess Act, 1977", link: "#" },
                        {
                            text: "Environment (P) Act, 1986 and Rules made there under",
                            subItems: [
                                { text: "Environment (P) Rules, 1986", link: "/compliance-enforcement/legal-matters/mumbaibench-environment-p-rules" },
                                { text: "Coastal Regulation Zone Notification 2011", link: "/compliance-enforcement/legal-matters/coastal-regulation" },
                                { text: "Environment Impact Assessment Notification, 2006", link: "#" },
                                { text: "The Manufacture, Use, Import, Export and Storage of Hazardous Micro-Organisms Genetically Engineered Organisms or Cells Rules, 1989", link: "#" },
                                { text: "The Hazardous Waste (M. H and T. M) Rules, 2008", link: "#" },
                                { text: "The Manufacture, Storage and Import of Hazardous Chemical Rules, 1989", link: "#" },
                                { text: "The Bio-Medical Waste (M & H) Rules, 1998", link: "/compliance-enforcement/legal-matters/biomedical-archive" },
                                { text: "The Plastics (Manufacture & Handling) Rules, 2011", link: "#" },
                                { text: "The Maharashtra Plastic Carry Bags (M & Usage) Rules, (Amended in 2007)", link: "#" },
                                { text: "The Municipal Solid Wastes (M & H), Rules, 2000", link: "/compliance-enforcement/legal-matters/solidwaste-2000" },
                                { text: "The Noise Pollution (Regulation and Control) Rules, 2000", link: "/compliance-enforcement/legal-matters/mumbaibench-noise-pollution-archive" },
                                { text: "The Ozone Depleting Substances (Regulation and Control) Rules, 2000", link: "#" },
                                { text: "The Batteries (M & H) Rules, 2001", link: "#" },
                                { text: "Violation of sand dredging activities", link: "/compliance-enforcement/legal-matters/mumbaibench-sand-dredging" }
                            ]
                        },
                        { text: "Administration matters", link: "/compliance-enforcement/legal-matters/mumbaibench-administrative-matters" }
                    ]
                },
                {
                    text: "Aurangabad Bench",
                    subItems: [
                        { text: "Water (P & CP) Act, 1974", link: "/compliance-enforcement/legal-matters/aurangabadbench-water-archive" },
                        { text: "Air (P & CP) Act, 1981", link: "#" },
                        { text: "Water (P & CP) Cess Act, 1977", link: "#" },
                        {
                            text: "Environment (P) Act, 1986 and Rules made there under",
                            subItems: [
                                { text: "Environment (P) Rules, 1986", link: "/compliance-enforcement/legal-matters/aurangabadbench-environment-p-rules" },
                                { text: "Coastal Regulation Zone Notification 2011", link: "#" },
                                { text: "Environment Impact Assessment Notification, 2006", link: "#" },
                                { text: "The Manufacture, Use, Import, Export and Storage of Hazardous Micro-Organisms Genetically Engineered Organisms or Cells Rules, 1989", link: "#" },
                                { text: "The Hazardous Waste (M. H and T. M) Rules, 2008", link: "#" },
                                { text: "The Manufacture, Storage and Import of Hazardous Chemical Rules, 1989", link: "#" },
                                { text: "The Bio-Medical Waste (M & H) Rules, 1998", link: "#" },
                                { text: "The Plastics (Manufacture & Handling) Rules, 2011", link: "#" },
                                { text: "The Maharashtra Plastic Carry Bags (M & Usage) Rules, (Amended in 2007)", link: "#" },
                                { text: "The Municipal Solid Wastes (M & H), Rules, 2000", link: "#" },
                                { text: "The Noise Pollution (Regulation and Control) Rules, 2000", link: "/compliance-enforcement/legal-matters/aurangabadbench-noise-pollution" },
                                { text: "The Ozone Depleting Substances (Regulation and Control) Rules, 2000", link: "#" },
                                { text: "The Batteries (M & H) Rules, 2001", link: "#" },
                                { text: "Violation of sand dredging activities", link: "#" }
                            ]
                        },
                        { text: "Administration matters", link: "/compliance-enforcement/legal-matters/aurangabadbench-administration-matters" }
                    ]
                },
                {
                    text: "Nagpur Bench",
                    subItems: [
                        { text: "Water (P & CP) Act, 1974", link: "/compliance-enforcement/legal-matters/nagpurbench-water-act" },
                        { text: "Air (P & CP) Act, 1981", link: "/compliance-enforcement/legal-matters/nagpurbench-air-act" },
                        { text: "Water (P & CP) Cess Act, 1977", link: "#" },
                        {
                            text: "Environment (P) Act, 1986 and Rules made there under",
                            subItems: [
                                { text: "Environment (P) Rules, 1986", link: "/compliance-enforcement/legal-matters/nagpurbench-environment-rules" },
                                { text: "Coastal Regulation Zone Notification 2011", link: "#" },
                                { text: "Environment Impact Assessment Notification, 2006", link: "#" },
                                { text: "The Manufacture, Use, Import, Export and Storage of Hazardous Micro-Organisms Genetically Engineered Organisms or Cells Rules, 1989", link: "#" },
                                { text: "The Hazardous Waste (M. H and T. M) Rules, 2008", link: "/compliance-enforcement/legal-matters/nagpurbench-hazardous-waste" },
                                { text: "The Manufacture, Storage and Import of Hazardous Chemical Rules, 1989", link: "#" },
                                { text: "The Bio-Medical Waste (M & H) Rules, 1998", link: "#" },
                                { text: "The Plastics (Manufacture & Handling) Rules, 2011", link: "#" },
                                { text: "The Maharashtra Plastic Carry Bags (M & Usage) Rules, (Amended in 2007)", link: "#" },
                                { text: "The Municipal Solid Wastes (M & H), Rules, 2000", link: "#" },
                                { text: "The Noise Pollution (Regulation and Control) Rules, 2000", link: "/compliance-enforcement/legal-matters/nagpurbench-noise-pollution" },
                                { text: "The Ozone Depleting Substances (Regulation and Control) Rules, 2000", link: "#" },
                                { text: "The Batteries (M & H) Rules, 2001", link: "#" },
                                { text: "Violation of sand dredging activities", link: "#" }
                            ]
                        },
                        { text: "Administration matters", link: "#" }
                    ]
                }
            ]
        },
        {
            text: "Orders Passed By Trial Courts Under Various Environmental law's Before the",
            subItems: [
                { text: "Metropolitan Magistrate", link: "/compliance-enforcement/legal-matters/metropolitan-magistrate" },
                { text: "District / Session Court", link: "#" },
                { text: "Chief Judicial Magistrate", link: "/compliance-enforcement/legal-matters/chief-judicial-magistrate" },
                { text: "Judicial Magistrate First Class", link: "/compliance-enforcement/legal-matters/judicial-magistrate-first-class" },
                { text: "Civil Judge / Jr. Division / Sr. Division", link: "/compliance-enforcement/legal-matters/civil-judge" }
            ]
        },
        {
            text: "Orders Passed By Other Forums",
            subItems: [
                { text: "National Environment Appellate Authority", link: "/compliance-enforcement/legal-matters/environment-appellate" },
                { text: "National Green Tribunal", link: "/compliance-enforcement/legal-matters/nationalgreentribunal-archive" },
                { text: "National Consumer Forum", link: "/compliance-enforcement/legal-matters/nationalconsumerforum" },
                { text: "National Human Right Commission", link: "#" },
                { text: "Human Right Commission", link: "#" },
                { text: "State Consumer Forum", link: "#" }
            ]
        }
    ];

    const archiveCourtMattersLinks = [
        { text: "Orders Passed By Industrial Court", link: "/compliance-enforcement/legal-matters/industrial-court" },
        { text: "Important orders in respect regulating mining activities", link: "/compliance-enforcement/legal-matters/regulating-mining-activities" },
        { text: "Orders passed in Anti Corruption Department Cases filed against MPCB Officials", link: "/compliance-enforcement/legal-matters/anticorruption" }
    ];

    const atrData = [
        { id: "1", title: "Complaints for palghar", pdfUrl: "#" },
        { id: "2", title: "Fire Incident at Mumbai Port Trust", pdfUrl: "#" },
        { id: "3", title: "Complaints for Kusumba,Dhule", pdfUrl: "#" },
        { id: "4", title: "Air and Water Pollution complaints in Sector-11, Kopar Khairane, Navi Mumbai", pdfUrl: "#" },
    ];

    const complianceDocuments = [
        { id: 'cd1', title: "Framework for Implementation to ensure effective overall industrial enffuent mangement in taloja MIDC Including improved performance of CETP", pdfUrl: "#" },
        { id: 'cd2', title: "Compliance of NGT Order dated 17/08/2018 in OA No. 125 of 2018 filled by Arvind Mhatre V/s MoEF and CC and Other", pdfUrl: "#" },
        { id: 'cd3', title: "Constitution of Monitoring Committee", pdfUrl: "#" },
        { id: 'cd4', title: "Minutes of the preliminary meeting", pdfUrl: "#" },
        { id: 'cd5', title: "Minutes of the 2nd meeting of the Taloja Monitoring Committee", pdfUrl: "#" },
        { id: 'cd6', title: "Minutes of the 3rd meeting of the Taloja Monitoring Committee", pdfUrl: "#" }
    ];

    const topDefaultersData = [
        "SHARDA PROCESSOR PVT. LTD, C-30, MIDC, PHASE 1, DOMBIVLI (EAST), THANE.",
        "Mahesh Processors, Plot No. A-79, Dombivali, Phase-I",
        "Gurera Synthetics, Plot No. D-6/2, Dombivali Phase-I",
        "Bellflower Trading Co., A-28, 28/1, MIDC Phase-I, Dombivali",
        "K Jips, Plot No. B-36/1, MIDC Vadolgaon, Ambernath, Dist-Thane",
        "KANAD CHEMICALS PVT. LTD., Plot No. W-15, M.I.D.C, Chemical Zone, Ambernath (W)",
        "Mangalmurti Knit Industries, B-2, Part-1, B-2, Part-1, MIDC Badlapur, Tal. Ambernath",
        "Samuh Laxmi Chemicals, Plot No. F-1/20, MIDC, Badlapur",
        "M/S R. K. Engineering Works, Additional Ambernath MIDC Anand Nagar",
        "FREESIA CHEMICALS, PLOT NO 37 MORIVALI MIDC AMBERNATH"
    ];

    const toggleAccordion = (name: string) => {
        setOpenAccordion(openAccordion === name ? null : name);
    };

    const courtMattersData = [
        { text: "Orders Passed By Hon'Ble Supreme Court Of India.", subItems: [{ text: "Service Matters", link: "/compliance-enforcement/legal-matters/service-matters" }] },
        {
            text: "Orders Passed By The High Court",
            subItems: [
                {
                    text: "Mumbai Bench",
                    subItems: [
                        { text: "Water (P & CP) Act, 1974", link: "/compliance-enforcement/legal-matters/mumbaibench-water" },
                        { text: "Air (P & CP) Act, 1981", link: "/compliance-enforcement/legal-matters/mumbaibench-air" },
                        { text: "Water (P & CP) Cess Act, 1977", link: "#" },
                        {
                            text: "Environment (P) Act, 1986 and Rules made there under",
                            subItems: [
                                { text: "Environment Impact Assessment Notification, 2006", link: "/compliance-enforcement/legal-matters/mumbaibench-environment-impact" },
                                { text: "The Manufacture, Use, Import, Export and Storage of Hazardous Micro-Organisms Genetically Engineered Organisms or Cells Rules, 1989", link: "#" },
                                { text: "The Hazardous Waste (M. H and T. M) Rules, 2008", link: "#" },
                                { text: "The Manufacture, Storage and Import of Hazardous Chemical Rules, 1989", link: "#" },
                                { text: "The Bio-Medical Waste (M & H) Rules, 1998", link: "/compliance-enforcement/legal-matters/mumbaibench-biomedical-waste" },
                                { text: "The Plastics (Manufacture & Handling) Rules, 2011", link: "#" },
                                { text: "The Maharashtra Plastic Carry Bags (M & Usage) Rules, (Amended in 2007)", link: "#" },
                                { text: "The Noise Pollution (Regulation and Control) Rules, 2000", link: "/compliance-enforcement/legal-matters/mumbaibench-noise-pollution" },
                                { text: "The Ozone Depleting Substances (Regulation and Control) Rules, 2000", link: "#" },
                                { text: "The Batteries (M & H) Rules, 2001", link: "#" },
                                { text: "Violation of sand dredging activities", link: "/compliance-enforcement/legal-matters/mumbaibench-sand-dredging" }
                            ]
                        }
                    ]
                },
                {
                    text: "Aurangabad Bench",
                    subItems: [
                        { text: "Air (P & CP) Act, 1981", link: "#" },
                        { text: "Water (P & CP) Cess Act, 1977", link: "#" },
                        {
                            text: "Environment (P) Act, 1986 and Rules made there under",
                            subItems: [
                                { text: "Coastal Regulation Zone Notification 2011", link: "#" },
                                { text: "Environment Impact Assessment Notification, 2006", link: "#" },
                                { text: "The Manufacture, Use, Import, Export and Storage of Hazardous Micro-Organisms Genetically Engineered Organisms or Cells Rules, 1989", link: "#" },
                                { text: "The Hazardous Waste (M. H and T. M) Rules, 2008", link: "#" },
                                { text: "The Manufacture, Storage and Import of Hazardous Chemical Rules, 1989", link: "#" },
                                { text: "The Bio-Medical Waste (M & H) Rules, 1998", link: "#" },
                                { text: "The Plastics (Manufacture & Handling) Rules, 2011", link: "#" },
                                { text: "The Maharashtra Plastic Carry Bags (M & Usage) Rules, (Amended in 2007)", link: "#" },
                                { text: "The Municipal Solid Wastes (M & H), Rules, 2000", link: "#" },
                                { text: "The Ozone Depleting Substances (Regulation and Control) Rules, 2000", link: "#" },
                                { text: "The Batteries (M & H) Rules, 2001", link: "#" },
                                { text: "Violation of sand dredging activities", link: "#" }
                            ]
                        }
                    ]
                },
                {
                    text: "Nagpur Bench",
                    subItems: [
                        { text: "Water (P & CP) Cess Act, 1977", link: "#" },
                        {
                            text: "Environment (P) Act, 1986 and Rules made there under",
                            subItems: [
                                { text: "Coastal Regulation Zone Notification 2011", link: "#" },
                                { text: "Environment Impact Assessment Notification, 2006", link: "#" },
                                { text: "The Manufacture, Use, Import, Export and Storage of Hazardous Micro-Organisms Genetically Engineered Organisms or Cells Rules, 1989", link: "#" },
                                { text: "The Manufacture, Storage and Import of Hazardous Chemical Rules, 1989", link: "#" },
                                { text: "The Bio-Medical Waste (M & H) Rules, 1998", link: "#" },
                                { text: "The Plastics (Manufacture & Handling) Rules, 2011", link: "#" },
                                { text: "The Maharashtra Plastic Carry Bags (M & Usage) Rules,(Amended in 2007)", link: "#" },
                                { text: "The Municipal Solid Wastes (M & H), Rules, 2000", link: "#" },
                                { text: "The Ozone Depleting Substances (Regulation and Control) Rules, 2000", link: "#" },
                                { text: "The Batteries (M & H) Rules, 2001", link: "#" },
                                { text: "Violation of sand dredging activities", link: "#" }
                            ]
                        },
                        { text: "Administration matters", link: "#" }
                    ]
                }
            ]
        },
        { text: "Orders Passed By Trial Courts Under Various Environmental law's Before the", subItems: [{ text: "District / Session Court", link: "#" }] },
        {
            text: "Orders Passed By Other Forums",
            subItems: [
                { text: "National Green Tribunal", link: "/compliance-enforcement/legal-matters/national-green-tribunal" },
                { text: "National Human Right Commission", link: "#" },
                { text: "Human Right Commission", link: "#" },
                { text: "State Consumer Forum", link: "#" }
            ]
        }
    ];

    return (
        <section className="w-full py-16 bg-white font-family-helvetica mt-[50px]">
            {/* Custom scrollbar styles */}
            <style>{`
                .accordion-scroll::-webkit-scrollbar {
                    width: 4px;
                }
                .accordion-scroll::-webkit-scrollbar-track {
                    background: rgba(0, 0, 0, 0.05);
                    border-radius: 2px;
                }
                .accordion-scroll::-webkit-scrollbar-thumb {
                    background: rgba(0, 133, 226, 0.3);
                    border-radius: 2px;
                }
                .accordion-scroll::-webkit-scrollbar-thumb:hover {
                    background: rgba(0, 133, 226, 0.5);
                }
            `}</style>

            <div className="w-full max-w-[1282px] mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-[24px] md:text-[36px] font-bold text-black mb-3 leading-tight">Compliance And Reinforcement</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 items-start">
                    {/* Left Column - Tabs */}
                    <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-3 md:gap-4">
                        {tabs.map((tab, index) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === index;
                            return (
                                <button
                                    key={index}
                                    onClick={() => {
                                        if (index === 1) {
                                            navigate({ to: '/compliance-enforcement/closure-direction-status' });
                                        } else {
                                            setActiveTab(index);
                                        }
                                    }}
                                    className={`
                                        flex items-center gap-4 px-4 md:px-6 py-3 md:py-4 rounded-[12px] border transition-all duration-200 cursor-pointer w-full text-left group
                                        ${isActive
                                            ? 'bg-[#0085E2] border-[#0085E2] text-white shadow-[0_4px_12px_rgba(33,150,243,0.3)]'
                                            : 'bg-white border-gray-100 text-gray-700 hover:border-[#0085E2] hover:text-[#0085E2]'
                                        }
                                    `}
                                >
                                    <Icon className={`w-5 h-5 md:w-6 md:h-6 shrink-0 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-[#0085E2]'}`} strokeWidth={1.5} />
                                    <span className={`text-[13px] md:text-[15px] leading-relaxed ${isActive ? 'font-medium' : 'font-normal'}`}>{tab.name}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Column - Content */}
                    <div className="flex-1 space-y-4 w-full">
                        {activeTab === 0 && (
                            <div className="flex items-center justify-end gap-3 mb-2">
                                <span className="text-sm font-medium text-gray-700">Archive</span>
                                <button
                                    onClick={() => setShowArchive(!showArchive)}
                                    className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${showArchive ? 'bg-[#0085E2]' : 'bg-gray-200'}`}
                                >
                                    <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all ${showArchive ? 'left-7' : 'left-1'}`} />
                                </button>
                            </div>
                        )}
                        {activeTab === 2 ? (
                            // ATR Table View
                            <PaginatedSection
                                title="ATR with respect to complaints"
                                documents={atrData}
                            />
                        ) : activeTab === 3 ? (
                            // Compliance NGT Order View
                            <PaginatedSection
                                title="Compliance of NGT Order dated 17/08/2018 in OA No. 125 of 2018 filled by Arvind Mhatre V/s MoEF and CC and Other"
                                documents={complianceDocuments}
                            />
                        ) : activeTab === 4 ? (
                            // Top 10 Defaulters View
                            <div className="bg-white rounded-[20px] border border-gray-200 p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
                                <h2 className="text-[16px] md:text-[18px] font-bold text-gray-800 mb-6 md:mb-8 leading-snug border-b border-gray-200 pb-4">
                                    TOP 10 DEFAULTER- COMPLIANCE OF HON'BLE SUPREME COURT OF INDIA(SCI) ORDER IN IA NO. 53816 OF 2020 IN CIVIL APPEAL NO. 10582 OF 2017
                                </h2>
                                <h3 className="text-[16px] font-bold text-gray-700 mb-6">Industry</h3>
                                <div className="space-y-4">
                                    {topDefaultersData.map((item, index) => (
                                        <div key={index} className="flex gap-4 items-start group">
                                            <div className="w-2 h-2 rounded-full bg-[#0085E2] mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                                            <p className="text-[15px] text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            // Accordions View (Default for Legal Matters and placeholders for others)
                            <>
                                {/* Court Matters Accordion */}
                                <div className="border border-gray-200 rounded-[20px] overflow-hidden bg-white group">
                                    <button
                                        onClick={() => toggleAccordion("Court Matters")}
                                        className="w-full flex items-center justify-between px-8 py-5 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                                    >
                                        <span className={`text-[15px] font-semibold transition-colors ${openAccordion === "Court Matters" ? 'text-[#0085E2]' : 'text-gray-900 group-hover:text-[#0085E2]'}`}>Court Matters</span>
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openAccordion === "Court Matters" ? 'rotate-180 text-[#0085E2]' : 'text-gray-500 group-hover:text-[#0085E2]'}`} />
                                    </button>

                                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openAccordion === "Court Matters" ? 'max-h-[2000px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0 border-t-0'}`}>
                                        <div className="p-6">
                                            {(showArchive ? archiveCourtMattersData : courtMattersData).map((item, index) => (
                                                <DropdownSection key={index} title={item.text} items={item.subItems || []} />
                                            ))}

                                            {showArchive ? (
                                                <div className="flex flex-col gap-2 mt-4">
                                                    {archiveCourtMattersLinks.map((linkItem, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={linkItem.link}
                                                            className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border border-gray-200 flex items-center justify-between group block shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                                                        >
                                                            <div className="flex flex-col flex-1">
                                                                <span className="font-medium">{linkItem.text}</span>
                                                            </div>
                                                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0085E2]" />
                                                        </a>
                                                    ))}
                                                </div>
                                            ) : (
                                                <a
                                                    href="/compliance-enforcement/legal-matters/regulating-mining-activities"
                                                    className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border border-gray-200 flex items-center justify-between group mt-4 block shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                                                >
                                                    <div className="flex flex-col flex-1">
                                                        <span className="font-medium">Important orders in respect regulating mining activities</span>
                                                    </div>
                                                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0085E2]" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Legal Accordion */}
                                <div className="border border-gray-200 rounded-[20px] overflow-hidden bg-white group">
                                    <button
                                        onClick={() => toggleAccordion("Legal")}
                                        className="w-full flex items-center justify-between px-8 py-5 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                                    >
                                        <span className={`text-[15px] font-semibold transition-colors ${openAccordion === "Legal" ? 'text-[#0085E2]' : 'text-gray-900 group-hover:text-[#0085E2]'}`}>Legal</span>
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openAccordion === "Legal" ? 'rotate-180 text-[#0085E2]' : 'text-gray-500 group-hover:text-[#0085E2]'}`} />
                                    </button>

                                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openAccordion === "Legal" ? 'max-h-[2000px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0 border-t-0'}`}>
                                        <div className="p-6">
                                            {(showArchive ? archiveLegalData : legalData).map((item, index) => (
                                                <a
                                                    key={index}
                                                    href={(item as any).link || "#"}
                                                    className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group block"
                                                >
                                                    <div className="flex flex-col flex-1 pr-4">
                                                        <span className="font-medium leading-relaxed">{item.text}</span>
                                                    </div>

                                                    <ChevronRight className="w-4 h-4 text-[#0085E2] shrink-0" />

                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Other Judicial Forms Accordion */}
                                <div className="border border-gray-200 rounded-[20px] overflow-hidden bg-white group">
                                    <button
                                        onClick={() => toggleAccordion("Other Judicial forms")}
                                        className="w-full flex items-center justify-between px-8 py-5 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                                    >
                                        <span className={`text-[15px] font-semibold transition-colors ${openAccordion === "Other Judicial forms" ? 'text-[#0085E2]' : 'text-gray-900 group-hover:text-[#0085E2]'}`}>Other Judicial forms</span>
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openAccordion === "Other Judicial forms" ? 'rotate-180 text-[#0085E2]' : 'text-gray-500 group-hover:text-[#0085E2]'}`} />
                                    </button>

                                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openAccordion === "Other Judicial forms" ? 'max-h-[2000px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0 border-t-0'}`}>
                                        <div className="p-6">
                                            {(showArchive ? archiveJudicialFormsData : judicialFormsData).map((item, index) => (
                                                <DropdownSection key={index} title={item.text} items={item.subItems || []} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ComplianceAndReinforcement;
