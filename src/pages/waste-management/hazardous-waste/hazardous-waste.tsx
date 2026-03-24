import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { ChevronDown, ChevronUp, ChevronRight, ChevronLeft } from 'lucide-react';

import DocumentCard from '../../../components/DocumentCard';

import PageBanner from '../../../components/PageBanner.tsx';
import Sidebar from '../../../components/Sidebar.tsx';



// Reusable Dropdown/Accordion Section
const DropdownSection = ({ title, items }: { title: string, items: string[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between px-6 py-4 bg-gray-50/50 cursor-pointer hover:bg-gray-100/80 transition-colors"
            >
                <h4 className="text-[15px] font-semibold text-gray-800">{title}</h4>
                {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
            </div>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 bg-white flex flex-col gap-2">
                    {items.map((item, idx) => (
                        <div key={idx} className="px-4 py-2 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 rounded-lg cursor-pointer transition-colors">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Reusable Paginated Section
const PaginatedSection = ({ title, documents }: { title: string, documents: any[] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isViewAll, setIsViewAll] = useState(false);
    const ITEMS_PER_PAGE = 10; // 2 rows * 2 columns

    const totalPages = Math.ceil(documents.length / ITEMS_PER_PAGE);

    const currentDocuments = isViewAll
        ? documents
        : documents.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const toggleViewAll = () => {
        setIsViewAll(!isViewAll);
        setCurrentPage(1);
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
        <div className="mt-8">
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
                {currentDocuments.map((doc, idx) => (
                    <DocumentCard
                        key={idx}
                        document={doc}
                        wide={false}
                    />
                ))}
            </div>

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

function HazardousWaste() {
    const navigate = useNavigate();
    const [isArchive, setIsArchive] = useState(false);

    // Section 1 Data: Rules/Procedures
    // Document Cards
    const rulesProceduresDocs = [
        { id: 'rp1', title: "Procedure for Authorization for processing, recycling and recovery of hazardous waste under Hazardous and Other Wastes (Management & Transboundary Movement) Rules, 2016", pdfUrl: "#" },
        { id: 'rp2', title: "Format for Inspection of Industries with regard to Generation and Management of Hazardous Waste", pdfUrl: "#" },
        { id: 'rp4', title: "Dangerous Goods (Classification, Packaging and Labelling) Rules, 2013", pdfUrl: "#" },
        { id: 'rp6', title: "Procedure for Import of Hazasrdous Waste (Part-D of Schedule-III)", pdfUrl: "#" },
        { id: 'rp7', title: "Guidelines on Implementing Liabilities for Environmental Damages due to Handling & Disposal of Hazardous Waste and Penalty", pdfUrl: "#" },
    ];

    // Links (Text only as per request to be links)
    const rulesProceduresLinks = [
        { title: "Hazardous and Other Wastes (Management & Transboundary Movement) Rules, 2016 and Amendments thereto", url: "https://cpcb.nic.in/rules/" },
        { title: "Registration of Recyclers/Reprocessors of Hazardous Waste", url: "/waste-management/hazardous-waste/registration", internal: true },
        { title: "EPR Portal for Used Oil Management", url: "https://eprusedoil.cpcb.gov.in/" }, // Assuming external or handled via #
        { title: "EPR Portal for Waste Tyre Management", url: "https://eprtyres.cpcb.gov.in/" }
    ];

    // Section 2 Data: Authorized Re-Processors
    const authorizedReprocessorsDocs = [
        { id: 'auth1', title: "list of Authorized HW Transporter", pdfUrl: "#" },
        { id: 'auth2', title: "Hazardous Waste Authorization Grant/Refuse Copies", pdfUrl: "#" },
        { id: 'auth3', title: "list of the Authorized Re-processors /recyclers", pdfUrl: "#" },
        { id: 'auth4', title: "Lead Waste Re-Processors", pdfUrl: "#" },
        { id: 'auth5', title: "Non-Ferrous Metal Waste Re-Processors", pdfUrl: "#" },
        { id: 'auth6', title: "Used/ Waste Oil Re-Processors", pdfUrl: "#" },
        { id: 'auth7', title: "Paint", pdfUrl: "#" },
        { id: 'auth8', title: "Spent Solvent Recovery Units", pdfUrl: "#" },
        { id: 'auth9', title: "Spent Catalyst", pdfUrl: "#" },
        { id: 'auth10', title: "Drums Re-conditioners / Re-processors", pdfUrl: "#" },
        { id: 'auth11', title: "Aluminium scrap reprocessors", pdfUrl: "#" },
        { id: 'auth12', title: "Waste Tyre Re-Processors", pdfUrl: "#" },
        { id: 'auth13', title: "list of the Authorized Pre-processors", pdfUrl: "#" }
    ];

    // Section 3 Data: CHWTSDF in State
    const chwtsdfDocs = [
        { id: 'ch1', title: "Protocol for Performance Evaluation of CHWTSDF", pdfUrl: "#" },
        { id: 'ch_status', title: "Status of Common Hazardous Waste Treatement, Storage and Disposal Facilities in Maharashtra (Status up to 30/03/2025)", pdfUrl: "#" }
    ];

    const inventoryLink = { title: "Inventory : Regionwise Inventory HW Genration in Maharashtra.", url: "/waste-management/hazardous-waste/inventory", internal: true };

    const annualReportItems = ["2023-2024"];
    const achievementsItems = ["2010-2011", "2009-2010", "2008-2009", "2007-2008", "2006-2007", "2005-2006", "2004-2005"];

    // Section 4 Data: SOPs
    const sopLinks = [
        { title: "SOPs for Hazardous Waste Under Rule 9", url: "https://cpcb.nic.in/sop-for-hw-specific/" },
        { title: "SOPs for General Application Processing of Hazardous Waste", url: "https://cpcb.nic.in/SOP-General-Application-Processing/" }
    ];

    // Section 5: Status of Contaminated Sites
    const contaminatedSitesDocs = [
        { id: 'cs1', title: "Verification report of Godavari Biorefineries Ltd, Ahmednagar", pdfUrl: "#" }
    ];

    // Archive Data
    const archiveRulesDocs = [
        { id: 'arp1', title: "Hazardous & Other Wastes (Management & Transboundary) Amendment rules 2019", pdfUrl: "#" },
        { id: 'arp2', title: "Hazardous & Other Wastes (Management & Transboundary) Rules 2016", pdfUrl: "#" },
        { id: 'arp3', title: "Procedure for Import of Hazasrdous Waste (Part-D of Schedule-III)", pdfUrl: "#" },
    ];

    const archiveProcessorsDocs = [
        { id: 'ap1', title: "list of the Authorized reprocessors /recyclers", pdfUrl: "#" },
        { id: 'ap2', title: "Lead Waste Re-Processors", pdfUrl: "#" },
        { id: 'ap3', title: "Non-Ferrous Metal Waste Re-Processors", pdfUrl: "#" },
        { id: 'ap4', title: "Used/ Waste Oil Re-Processors", pdfUrl: "#" },
        { id: 'ap5', title: "Paint", pdfUrl: "#" },
        { id: 'ap6', title: "Spent Solvent Recovery Units", pdfUrl: "#" },
        { id: 'ap7', title: "Spent Catalyst", pdfUrl: "#" },
        { id: 'ap8', title: "Drums Re-conditioners / Re-processors", pdfUrl: "#" },
        { id: 'ap9', title: "Aluminium scrap reprocessors", pdfUrl: "#" },
    ];

    const archiveCHWTSDFDocs = [
        { id: 'ac1', title: "Status of Common Hazardous Waste Treatement, Storage and Disposal Facilities in Maharashtra (Status up to 30/03/2021)", pdfUrl: "#" },
        { id: 'ac2', title: "Status of Common Hazardous Waste Treatement, Storage and Disposal Facilities in Maharashtra (Status up to 28/02/2014)", pdfUrl: "#" },
    ];

    const archiveAnnualReportItems = ["2022-2023"];

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
                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="rounded-[24px] p-8 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                {/* Header With Toggle */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 pb-4 gap-4">
                                    <h2 className="text-[24px] font-bold text-gray-900 uppercase">
                                        {isArchive ? "Archive: HAZARDOUS WASTE" : "HAZARDOUS WASTE"}
                                    </h2>
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

                                {!isArchive ? (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        {/* Section 1: Rules/Procedures */}
                                        <div className="mb-12">
                                            <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3 mb-6">
                                                Rules/Procedures
                                            </h3>


                                            <div className="flex flex-col gap-4 mb-8">
                                                {/* Hardcoded specific order/mix isn't easy with separate arrays. I'll just list the links first then docs or vice versa. 
                                                    Let's put links at the top for visibility. */}
                                                {rulesProceduresLinks.map((link, idx) => (
                                                    <div
                                                        key={idx}
                                                        onClick={() => link.internal ? navigate({ to: link.url }) : window.open(link.url, '_blank')}
                                                        className="text-[#0085E2] hover:underline cursor-pointer text-[15px] font-medium w-fit flex items-start gap-2"
                                                    >
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0085E2] shrink-0" />
                                                        {link.title}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {rulesProceduresDocs.map((doc, idx) => (
                                                    <DocumentCard key={idx} document={doc} wide={false} />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Section 2: Authorized Re-Processors */}
                                        <PaginatedSection title="Authorized Re-Processors / Transporters in State" documents={authorizedReprocessorsDocs} />

                                        {/* Section 3: CHWTSDF in State */}
                                        <div className="mt-12 mb-12">
                                            <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3 mb-6">
                                                CHWTSDF in State
                                            </h3>

                                            {/* Status of Common Hazardous... Doc Card */}
                                            {/* Protocol for Performance Evaluation... Doc Card */}
                                            {/* Wait, user said "the other texts are document cards". 
                                                The image has "Status..." as plain text header, but user wants it as doc card? 
                                                "in the 1st section from the image, i have one link text as 'Inventory...', the other texts are document cards."
                                                I will treat 'Status...' and 'Protocol...' as doc cards. 
                                            */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                {chwtsdfDocs.map((doc, idx) => (
                                                    <DocumentCard key={idx} document={doc} wide={false} />
                                                ))}
                                            </div>

                                            {/* Hazardous Waste Annual Report Accordion */}
                                            <DropdownSection title="Hazardous Waste Annual Report" items={annualReportItems} />

                                            {/* Inventory Link */}
                                            <div
                                                onClick={() => window.open(inventoryLink.url, '_blank')}
                                                className="text-[#0085E2] hover:underline cursor-pointer text-[15px] font-medium w-fit flex items-start gap-2 mb-6 mt-4 pl-1"
                                            >
                                                Inventory : Regionwise Inventory HW Genration in Maharashtra.
                                            </div>

                                            {/* Achievements Accordion */}
                                            <DropdownSection title="Achievements on HWM in Maharashtra" items={achievementsItems} />
                                        </div>

                                        {/* Section 4: SOPs */}
                                        <div className="mt-12 mb-12">
                                            <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3 mb-6">
                                                SOPs for Hazardous Waste
                                            </h3>
                                            <div className="flex flex-col gap-4">
                                                {sopLinks.map((link, idx) => (
                                                    <div
                                                        key={idx}
                                                        onClick={() => window.open(link.url, '_blank')}
                                                        className="text-[#0085E2] hover:underline cursor-pointer text-[15px] font-medium w-fit flex items-start gap-2"
                                                    >
                                                        {link.title}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Section 5: Status of Contaminated Sites */}
                                        <div className="mt-12 mb-12">
                                            <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3 mb-6">
                                                Status of contaminated sites in Maharashtra w.r.t. Hon'ble NGT matter-804/2017
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {contaminatedSitesDocs.map((doc, idx) => (
                                                    <DocumentCard key={idx} document={doc} wide={false} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        {/* Archive Section 1: Rules/Procedures */}
                                        <div className="mb-12">
                                            <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3 mb-6">
                                                Rules/Procedures
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                <DocumentCard key="arp1" document={archiveRulesDocs[0]} wide={false} />
                                                <DocumentCard key="arp2" document={archiveRulesDocs[1]} wide={false} />
                                            </div>
                                            <div
                                                onClick={() => navigate({ to: '/waste-management/hazardous-waste/registration' })}
                                                className="text-[#0085E2] hover:underline cursor-pointer text-[15px] font-medium w-fit flex items-start gap-2 mb-6"
                                            >
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0085E2] shrink-0" />
                                                Registration of Recyclers/Reprocessors of Hazardous Waste
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <DocumentCard key="arp3" document={archiveRulesDocs[2]} wide={false} />
                                            </div>
                                        </div>

                                        {/* Archive Section 2: Authorized Re-Processors */}
                                        <PaginatedSection title="Authorized Re-Processors / Transporters in State" documents={archiveProcessorsDocs} />

                                        {/* Archive Section 3: CHWTSDF in State */}
                                        <div className="mt-12 mb-12">
                                            <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3 mb-6">
                                                CHWTSDF in State
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                {archiveCHWTSDFDocs.map((doc, idx) => (
                                                    <DocumentCard key={idx} document={doc} wide={false} />
                                                ))}
                                            </div>
                                            <DropdownSection title="Hazardous Waste Annual Report" items={archiveAnnualReportItems} />
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

export default HazardousWaste;
