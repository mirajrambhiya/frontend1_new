import { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronRight, ChevronLeft } from 'lucide-react';
import PageBanner from '../../../components/PageBanner';
import Sidebar from '../../../components/Sidebar';
import DocumentCard from '../../../components/DocumentCard';

// Reusable Paginated Section Component
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
        <div className="mt-12">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                    {title}
                </h3>
                {documents.length > ITEMS_PER_PAGE && (
                    <button
                        onClick={toggleViewAll}
                        className="px-4 py-2 text-sm font-medium text-[#0085E2] bg-blue-50 hover:bg-[#0085E2] hover:text-white cursor-pointer rounded-full transition-all duration-300"
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

// Third Level Nested Dropdown Component (for items within nested sections)
const ThirdLevelDropdown = ({ title, items }: { title: string, items: { text: string; link: string }[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-100 last:border-0">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
            >
                <span className="text-[13px] text-gray-700 font-medium">{title}</span>
                {isOpen ? <ChevronUp className="w-3 h-3 text-gray-500" /> : <ChevronDown className="w-3 h-3 text-gray-500" />}
            </div>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-6 pr-3 pb-2 flex flex-col gap-1">
                    {items.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 text-[12px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors flex items-center justify-between group"
                        >
                            <span className="flex-1">{item.text}</span>
                            <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-[#0085E2]" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Nested Dropdown Component (Second Level)
const NestedDropdown = ({ title, items, nestedItems }: {
    title: string,
    items?: { text: string; link: string }[],
    nestedItems?: { title: string; items: { text: string; link: string }[] }[]
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-100 last:border-0">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors"
            >
                <span className="text-[14px] text-gray-700 font-medium">{title}</span>
                {isOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
            </div>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-8 pr-4 pb-2">
                    {/* Render simple items if provided */}
                    {items && items.length > 0 && (
                        <div className="flex flex-col gap-1">
                            {items.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-2 text-[13px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors flex items-center justify-between group"
                                >
                                    <span className="flex-1">{item.text}</span>
                                    <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-[#0085E2]" />
                                </a>
                            ))}
                        </div>
                    )}

                    {/* Render third level nested items if provided */}
                    {nestedItems && nestedItems.length > 0 && (
                        <div className="mt-1">
                            {nestedItems.map((nested, idx) => (
                                <ThirdLevelDropdown
                                    key={idx}
                                    title={nested.title}
                                    items={nested.items}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Reusable Dropdown/Accordion Section for Simple Links or Nested Content
const DropdownSection = ({ title, items, nestedSections }: {
    title: string,
    items?: { text: string; link: string }[],
    nestedSections?: {
        title: string;
        items?: { text: string; link: string }[];
        nestedItems?: { title: string; items: { text: string; link: string }[] }[]
    }[]
}) => {
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
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-white">
                    {/* Render simple items if provided */}
                    {items && items.length > 0 && (
                        <div className="p-4 flex flex-col gap-2">
                            {items.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-50 last:border-0 flex items-center justify-between group"
                                >
                                    <span className="flex-1 font-medium">{item.text}</span>
                                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0085E2]" />
                                </a>
                            ))}
                        </div>
                    )}

                    {/* Render nested sections if provided */}
                    {nestedSections && nestedSections.length > 0 && (
                        <div className="p-4">
                            {nestedSections.map((section, idx) => (
                                <NestedDropdown
                                    key={idx}
                                    title={section.title}
                                    items={section.items}
                                    nestedItems={section.nestedItems}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


const PlasticWaste = () => {
    const [isArchive, setIsArchive] = useState(false);

    // Plastic EPR Guidelines Items
    const eprGuidelinesItems = [
        { text: "Guidance document for Centralized EPR portal", link: "#" },
        { text: "FAQs EPR plastic", link: "#" },
        { text: "SOP for Registration of Plastic Waste Processor", link: "#" },
        { text: "SOP for Registration of Producer, Importer & Brand Owners", link: "#" },
        { text: "SIMP Guidance manual", link: "#" },
        { text: "Environment compensation for the Violation of Plastic Waste Management Rules 2016, August 2024", link: "#" }
    ];

    // MUSTH&S Notification Items
    const musthsItems = [
        { text: "AMENDMENT IN MAHARASHTRA PLASTIC AND THERMOCOL NOTIFICATION, 2018 DTD. 30TH NOV. 2022.", link: "#" },
        { text: "Maharashtra Plastic and Thermocol Products (MUSTH&S) Notification, 2018.", link: "#" },
        { text: "Maharashtra Plastic and Thermocol Products (MUSTH&S) Notification(Amendment), dated on 11/04/2018.", link: "#" },
        { text: "Maharashtra Plastic and Thermocol Products (MUSTH&S) Notification dated on 30/06/2018.", link: "#" },
        { text: "Maharashtra Plastic and Thermocol Products (MUSTH&S) Notification(Amendment), dated 14.06.2019", link: "#" },
        { text: "Guidelines on Extended Producer Responsibility (EPR) for plastic packaging", link: "#" },
        { text: "Notice for prohibiting production, commerce, stocking, distribution, sale and use of single use plastic items", link: "#" },
        { text: "Maharashtra Plastic & Thermocol Products Notification, 2018 Amended on 28th March 2022", link: "#" },
        { text: "Amended Maharashtra Plastic Notification 15/07/2022", link: "#" },
        { text: "Corrigendum for Plastic Notification dated 15/07/2022", link: "#" },
        { text: "CPCB Compendium of Alternatives to Single Use Plastic (SUP)", link: "#" }
    ];

    // MUSTH&S Notification 2018 and Amendment Items
    const musthsAmendmentItems = [
        { text: "(MUSTH&S) Notification 23-3-2018", link: "#" },
        { text: "(MUSTH&S) Notification (Amendment-11-04-2018)", link: "#" },
        { text: "(MUSTH&S) Notification (Amendment-30-06-2018)", link: "#" },
        { text: "(MUSTH&S) Notification (Amendment-14-06-2019)", link: "#" },
        { text: "(MUSTH&S) Notification (Amendment-28-03-2022)", link: "#" },
        { text: "SUP notification 15-07-2022", link: "#" },
        { text: "SUP corrigendum- 27-07-2022", link: "#" },
        { text: "Plastic notification (Amendment-30-11-2022)", link: "#" }
    ];

    // PWM Annual Report Items (for nested dropdown)
    const pwmAnnualReports = [
        { text: "PWM Annual report MPCB 2022-2023", link: "#" },
        { text: "PWM Annual report MPCB 2021-22", link: "#" },
        { text: "PWM Annual report MPCB 2020-21", link: "#" },
        { text: "PWM Annual report MPCB 2019-20   ULBs Annual reports for 2019-20", link: "#" },
        { text: "PWM Annual report MPCB 2018-19   ULBs Annual reports for 2018-19", link: "#" },
        { text: "PWM Annual report MPCB 2017-18", link: "#" },
        { text: "PWM Annual report MPCB 2016-17", link: "#" },
        { text: "PWM Annual report MPCB 2015-16", link: "#" },
        { text: "PWM Annual report MPCB 2014-15", link: "#" }
    ];

    // Registration Items (for nested dropdown)
    const registrationItems = [
        { text: "Registration Of Producers, Importers & Brand-Owners Under  Provision Of Plastic Waste Management(PWM) Rules, 2016", link: "#" },
        { text: "Procedure for Registration for Recyclers, Manufacturers, PIBOs under Plastic Waste Management Rules, 2016 and amendment thereto.", link: "#" },
        { text: "Registration granted to Compostable Material Producer as on 31.3.2020", link: "#" },
        { text: "Registration granted to Plastic Waste Recycler as on 31.3.2020", link: "#" },
        { text: "Registration granted to Plastic Waste Recyclers", link: "#" },
        { text: "Registration granted to Plastic Producers", link: "#" },
        { text: "Registration granted to Raw material Manufacturers", link: "#" }
    ];

    // MoEF Notification Items with nested sections
    const moefNestedSections = [
        {
            title: "PWM Annual report",
            items: pwmAnnualReports
        },
        {
            title: "Registration",
            items: registrationItems
        }
    ];

    // Additional simple items for PWM Rules 2016 section
    const pwmRules2016Items = [
        { text: "Public Awareness material by Central Pollution Control Board for phasing out Single Use Plastic", link: "#" },
        { text: "Plastic SUP notification", link: "#" },
        { text: "Plastic Waste Management Second Amendment Rules 2021", link: "#" },
        { text: "Plastic Waste Management (Amendment) Rules 2018", link: "#" }
    ];

    // Hon'ble NGT orders and Compliance - Three level nested structure
    const ngtOrdersNestedSections = [
        {
            title: "1. O.A. 267/2017 - Central Pollution Control Board Vs State of Andaman & Nicobar & Ors",
            nestedItems: [
                {
                    title: "Orders",
                    items: [
                        { text: "12/03/2019", link: "#" },
                        { text: "22/07/2019", link: "#" },
                        { text: "4/12/2019", link: "#" }
                    ]
                },
                {
                    title: "Quarterly compliance reports",
                    items: [
                        { text: "Status report Oct - Dec 2019", link: "#" },
                        { text: "Status report Jan - March 2020", link: "#" }
                    ]
                }
            ]
        },
        {
            title: "2. O.A. No.2/2016 filed by Ravindran Shinde V/s PS Env. Dept.",
            items: []
        }
    ];

    // Simple MoEF items (non-nested)
    const moefSimpleItems = [
        { text: "Plastic Waste Management Rules March 2016", link: "#" },
        { text: "Plastic Waste Management Rules, 2016, (First Amendment), 2018", link: "#" },
        { text: "Plastic Waste Management Rules, 2016, (Second Amendment), 2021", link: "#" },
        { text: "Plastic Waste Management (Third Amendment) Rules, 2021", link: "#" },
        { text: "4th Amendment (EPR guidelines) Feb 2022", link: "#" },
        { text: "Plastic Waste management amendment rules (Fifth Amendment), 2022-06.07.2022", link: "#" },
        { text: "Plastic Waste management Amendment Rules 2023", link: "#" },
        { text: "Plastic Waste management second amendment 2023 notification", link: "#" },
        { text: "Plastic Waste Management Amendment Rules 2024", link: "#" }
    ];

    // Archive Data - Rules/Procedures Documents
    const archiveRulesProcedures = [
        { id: 'rp1', title: "Plastic Waste (M &H) Rules, 2011 - English", date: "2011-01-01", pdfUrl: "#" },
        { id: 'rp2', title: "Plastic Waste (M &H) Rules, 2011 - Hindi", date: "2011-01-01", pdfUrl: "#" },
        { id: 'rp3', title: "Plastic Waste (M &H) Rules, 2011 - PressNote", date: "2011-01-01", pdfUrl: "#" },
        { id: 'rp4', title: "Plastic Waste (M&H)Amendment Rules, 2011", date: "2011-01-01", pdfUrl: "#" },
        { id: 'rp5', title: "Salient features of the Plastic Waste Management Rules, 2016 and its likely implication.", date: "2016-01-01", pdfUrl: "#" },
        { id: 'rp6', title: "Circular on Implementation of Maharashtra Plastic Carry Bags (M&U) Rules2006 Read with the Plastic Waste (M&H) Rules2011 issued by the ministry of Environment and Forest, Govt of India", date: "2011-01-01", pdfUrl: "#" },
        { id: 'rp7', title: "Circular on Checking Compliance to Implementation of Plastic Rules/ Act by vigilance team.", date: "2006-01-01", pdfUrl: "#" },
        { id: 'rp8', title: "Maharashtra Non-biodegradable Garbage(Control) Ordinance, 2006 (Mah. Act. No. X of 2006)", date: "2006-01-01", pdfUrl: "#" },
        { id: 'rp9', title: "The Maharashtra Plastic Carry Bags (Manufacture and Usage) Rules 2006", date: "2006-01-01", pdfUrl: "#" },
        { id: 'rp10', title: "Re-cycled Plastics Manufacture and Usage Rules, 1999 under the Environment (Protection) Act, 1986 on September 2, 1999", date: "1999-09-02", pdfUrl: "#" },
        { id: 'rp11', title: "MoEF Re-cycled Plastics Manufacture and Usage (Amendment) Rules, 2002", date: "2002-01-01", pdfUrl: "#" },
        { id: 'rp12', title: "Recycled Plastics Manufacture and Usage (Amendment) Rules, 2003", date: "2003-01-01", pdfUrl: "#" },
        { id: 'rp13', title: "Office Order to form Special cell to oversee the compliance of Recycled Plastic manufacture and usage (amended) Rules 2003", date: "2003-01-01", pdfUrl: "#" },
        { id: 'rp14', title: "Application For Registration Of Manufacture Of Plastic Carry Bags And Containers Made Of Virgin Or Recycled Plastic under The Maharashtra Plastic Carry Bags (Manufacture and Usage) Rules, 2006", date: "2006-01-01", pdfUrl: "#" }
    ];

    const archiveMusthsItems: { text: string; link: string }[] = [];
    const archiveMoefItems: { text: string; link: string }[] = [];

    // Archive - Authorized Focus in State
    const authorizedFocusDocs = [
        { id: 'af1', title: "Plastic Registration List (As on 28/12/2016)", date: "2016-12-28", pdfUrl: "#" }
    ];

    // Archive - Related Documents
    const relatedDocuments = [
        { id: 'rd1', title: "Practically Feasible and Economically Viable Method of Disposal of Plastic Waste,2009", date: "2009-01-01", pdfUrl: "#" },
        { id: 'rd2', title: "Actions taken under Maharashtra Plastic Carry Bag Rule, 2006", date: "2006-01-01", pdfUrl: "#" },
        { id: 'rd3', title: "Compliance report of actions taken under Maharashtra Plastic Rules, 2006, (up to 14/10/2006 )", date: "2006-10-14", pdfUrl: "#" },
        { id: 'rd4', title: "Illustrative pictorial information about the banned and unbanned plastic and thermocol items , dated on 10/07/2018.", date: "2018-07-10", pdfUrl: "#" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="Waste Management"
            />

            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <Sidebar activeItem="Waste Management" />

                        {/* Content */}
                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 pb-4 gap-4">
                                    <h1 className="text-[24px] font-bold text-gray-900 uppercase">
                                        {isArchive ? "Archive: " : ""} Plastic Waste
                                    </h1>
                                    <div className="flex items-center bg-gray-100 p-1 rounded-full shrink-0">
                                        <button
                                            onClick={() => setIsArchive(false)}
                                            className={`cursor-pointer px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${!isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Current
                                        </button>
                                        <button
                                            onClick={() => setIsArchive(true)}
                                            className={`cursor-pointer px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Archive
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    {!isArchive ? (
                                        <>
                                            {/* Public Notice Section */}
                                            <div className="mb-8">
                                                <a
                                                    href="#"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[15px] text-[#0085E2] hover:underline leading-relaxed transition-colors"
                                                >
                                                    Public Notice for Registration of Producers, Importers and Brand-Owners (PIBOs) and Plastic Waste Processors (PWPs) on Centralized Extended Producer Responsibility (EPR) Portal for Plastic Packaging.
                                                </a>
                                            </div>

                                            {/* Plastic EPR Guidelines Dropdown */}
                                            <DropdownSection
                                                title="Plastic EPR Guidelines"
                                                items={eprGuidelinesItems}
                                            />

                                            {/* Standalone Links */}
                                            <div className="flex flex-col gap-3 mb-8">
                                                <a
                                                    href="#"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[15px] text-[#0085E2] hover:underline leading-relaxed font-medium transition-colors"
                                                >
                                                    SOP for Assessment and characterization of Plastic Waste
                                                </a>
                                                <a
                                                    href="#"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[15px] text-[#0085E2] hover:underline leading-relaxed font-medium transition-colors"
                                                >
                                                    List of Compostable Plastic Manufacture /Seller in the State of Maharashtra
                                                </a>
                                            </div>

                                            {/* MUSTH&S Notification Dropdown */}
                                            <DropdownSection
                                                title="Maharashtra Plastic and Thermocol Products (MUSTH&S) Notification, 2018."
                                                items={musthsItems}
                                            />

                                            {/* MUSTH&S Notification 2018 and Amendment Dropdown */}
                                            <DropdownSection
                                                title="Maharashtra Plastic and Thermocol Products (MUSTH&S) Notification, 2018 and Amendment"
                                                items={musthsAmendmentItems}
                                            />

                                            {/* Expert & Empowered Committee Link */}
                                            <div className="mb-8">
                                                <a
                                                    href="#"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[15px] text-[#0085E2] hover:underline leading-relaxed font-medium transition-colors"
                                                >
                                                    Expert & empowered committee
                                                </a>
                                            </div>

                                            {/* MoEF Notifications with Nested Dropdowns */}
                                            <DropdownSection
                                                title="Plastic Waste Management Rules 2016(Amendment 2018)"
                                                items={pwmRules2016Items}
                                                nestedSections={moefNestedSections}
                                            />

                                            {/* Simple MoEF Notifications */}
                                            <DropdownSection
                                                title="Plastic Waste Management MoEF Notifications"
                                                items={moefSimpleItems}
                                            />

                                            {/* Hon'ble NGT orders and Compliance */}
                                            <DropdownSection
                                                title="Hon'ble NGT orders and Compliance"
                                                nestedSections={ngtOrdersNestedSections}
                                            />
                                        </>
                                    ) : (
                                        <>
                                            {/* Archive View */}
                                            <PaginatedSection title="Rules/Procedures" documents={archiveRulesProcedures} />

                                            {archiveMusthsItems.length > 0 && (
                                                <DropdownSection
                                                    title="Maharashtra Plastic and Thermocol Products (MUSTH&S) Notification - Archive"
                                                    items={archiveMusthsItems}
                                                />
                                            )}

                                            {archiveMoefItems.length > 0 && (
                                                <DropdownSection
                                                    title="Plastic Waste Management MoEF Notifications - Archive"
                                                    items={archiveMoefItems}
                                                />
                                            )}

                                            {/* Authorized Focus in State */}
                                            <div className="mt-12">
                                                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                                                    <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                                                        Authorized Focus in State
                                                    </h3>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                                    {authorizedFocusDocs.map((doc) => (
                                                        <DocumentCard
                                                            key={doc.id}
                                                            document={doc}
                                                            wide={false}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="flex flex-col gap-3 mt-4 px-2">
                                                    <a
                                                        href="/waste-management/plastic-waste/status-of-registration"
                                                        className="text-[14px] font-medium text-[#0085E2] hover:text-[#006bb3] hover:underline transition-colors flex items-center gap-2 group"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#0085E2] group-hover:bg-[#006bb3]"></span>
                                                        Status of Registration issued under the Maharashtra plastic Carry Bag ( M & U ) Rules, 2006 (As on 09/06/2008)
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Related Documents */}
                                            <PaginatedSection title="Related Documents" documents={relatedDocuments} />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PlasticWaste;
