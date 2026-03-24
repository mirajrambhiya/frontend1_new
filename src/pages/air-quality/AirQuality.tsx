import { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronRight, ChevronLeft } from 'lucide-react';
import maharashtramap from "/assets/maharashtramap.png";
import DocumentCard from '../../components/DocumentCard.tsx';
import PageBanner from '../../components/PageBanner.tsx';
import Sidebar from '../../components/Sidebar.tsx';

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

function AirQuality() {
    // Data for new sections
    const relatedDocuments = [
        { id: 'rd1', title: "CPCB Specification in CAAQM Installation by Industries.", date: "2024-01-01", pdfUrl: "#" },
        { id: 'rd2', title: "Ambient Air quality Monitoring Guidelines", date: "2023-12-15", pdfUrl: "#" },
        { id: 'rd4', title: "Revised National Ambient Air Quality Standards (NAAQS) 2009", date: "2023-10-10", pdfUrl: "#" },
        { id: 'rd5', title: "Guidelines for the Measurement of Ambient Air Pollutants", date: "2023-09-05", pdfUrl: "#" },
        { id: 'rd6', title: "Protocol for Sampling and Analysis of Air Pollutants", date: "2023-08-12", pdfUrl: "#" }
    ];

    const methodsItems = [
        "EPA Method 1 - Traverse points",
        "EPA Method 2 - Velocity",
        "EPA Method 3 - Molecular weight & Gas composition",
        "EPA Method 4 - Molecular Weight",
        "EPA Method 5",
        "EPA Method 17",
        "M-06-Sourceemission-Sulphurdioxide",
        "M-07-Sourceemission-nitrogenoxides",
        "M-23a - Dioxin & Furans",
        "M-26 - HCl, HF, Nonisokinetic",
        "M-26a - HCl, H",
        "M-29 - Metals",
        "QUAM2012_P1"
    ];

    const ncapDocuments = [
        { id: 'ncap1', title: "Steering Committee GR (Maharashtra State)", date: "2024-02-10", pdfUrl: "#" },
        { id: 'ncap2', title: "Air Quality Monitoring Committee (AQMC)/ State Level Monitoring & Implementation Committee GR (SLMIC)", date: "2024-01-25", pdfUrl: "#" },
        { id: 'ncap3', title: "City Level Implementation Committee GR", date: "2023-12-30", pdfUrl: "#" },
        { id: 'ncap4', title: "National Clean Air Programme (NCAP) Report", date: "2023-11-05", pdfUrl: "#" },
        { id: 'ncap5', title: 'CSIR NEERI report on -"Dust Management in Urban Region Road Map"', date: "2023-10-15", pdfUrl: "#" }
    ];

    const emissionStudyItems = [
        "Amravati - Feb2022",
        "Aurangabad - Feb2022",
        "Chandrapur - Mar2022",
        "Mumbai",
        "Kolhapur - Feb2022",
        "Nagpur - Mar2022",
        "Nashik - Feb2022",
        "Solapur - Feb2022",
        "Navi Mumbai - Dec2021",
        "Pune - Dec2021"
    ];

    const emissionReports = [
        { id: 'ei1', title: "Amravati Final EI & SA Report July 2024", date: "2024-07-15", pdfUrl: "#" },
        { id: 'ei2', title: "Aurangabad Final EI & SA Report July 2024", date: "2024-07-15", pdfUrl: "#" },
        { id: 'ei3', title: "Chandrapur Final EI & SA Report July 2024", date: "2024-07-15", pdfUrl: "#" },
        { id: 'ei4', title: "Kolhapur Final EI & SA Report July 2024", date: "2024-07-15", pdfUrl: "#" },
        { id: 'ei5', title: "Mumbai Final EI & SA Report July 2024", date: "2024-07-15", pdfUrl: "#" },
        { id: 'ei6', title: "Nagpur Final EI & SA Report July 2024", date: "2024-07-15", pdfUrl: "#" },
        { id: 'ei7', title: "Nashik Final EI & SA Report July 2024", date: "2024-07-15", pdfUrl: "#" },
        { id: 'ei8', title: "Navi Mumbai Final EI & SA Report July 2024", date: "2024-07-15", pdfUrl: "#" },
        { id: 'ei9', title: "Pune Final EI & SA Report July 2024", date: "2024-07-15", pdfUrl: "#" },
        { id: 'ei10', title: "Solapur Final EI & SA Report July 2024", date: "2024-07-15", pdfUrl: "#" }
    ];

    const teriReports = [
        { id: 'teri1', title: "1. Air Quality Status Report of Maharashtra 2011-12", date: "2012-04-01", pdfUrl: "#" },
        { id: 'teri2', title: "2. Air Quality Status Report of Maharashtra 2012-13", date: "2013-04-01", pdfUrl: "#" },
        { id: 'teri3', title: "3. Air Quality Status Report of Maharashtra 2013-14", date: "2014-04-01", pdfUrl: "#" },
        { id: 'teri4', title: "4. Air Quality Status Report of Maharashtra 2014-15", date: "2015-04-01", pdfUrl: "#" },
        { id: 'teri5', title: "5. Air Quality Status Report of Maharashtra 2015-16", date: "2016-04-01", pdfUrl: "#" },
        { id: 'teri6', title: "6. Air Quality Status Report of Maharashtra 2016-17", date: "2017-04-01", pdfUrl: "#" },
        { id: 'teri7', title: "7. Air Quality Status Report of Maharashtra 2017-18", date: "2018-04-01", pdfUrl: "#" },
        { id: 'teri8', title: "8. Air Quality Status Report of Maharashtra 2018-19", date: "2019-04-01", pdfUrl: "#" },
        { id: 'teri9', title: "9. Air Quality Status Report of Maharashtra 2019-20", date: "2020-04-01", pdfUrl: "#" },
        { id: 'teri10', title: "10. Air Quality Status Report of Maharashtra 2020-21", date: "2021-04-01", pdfUrl: "#" },
        { id: 'teri11', title: "11. Air Quality Status Report of Maharashtra 2021-22", date: "2022-04-01", pdfUrl: "#" },
        { id: 'teri12', title: "12. Air Quality Status Report of Maharashtra 2022-23", date: "2023-04-01", pdfUrl: "#" }
    ];

    // Archive Data
    const archiveNetwork = [
        { id: 'an2', title: "Ambient Air Quality Monitoring stations in Maharashtra (SAMP)", date: "2023-01-01", pdfUrl: "#" }
    ];

    const archiveNetworkItems = [
        { text: "National Ambient Air Quality Monitoring Programme (NAMP)", link: "https://mpcb.ecmpcb.in/air%20quality/air_quality.php" },
        { text: "State Ambient Air Quality Monitoring Programme (SAMP)", link: "https://mpcb.ecmpcb.in/air%20quality/air_samp_01.php" },
        { text: "Continuous Ambient Air Quality Monitoring Stations (CAAQMS)", link: "https://mpcb.ecmpcb.in/air%20quality/air_caaqms_01.php" }
    ];

    const archiveRelated = [
        { id: 'ar1', title: 'Circular on Declaration of Maharashtra State as "Air Pollution Control Area" under sec 19of the Air (P&L)Act,1981', date: "1981-01-01", pdfUrl: "#" }
    ];

    const archiveDataRelated = [
        { id: 'adr1', title: "AAQM-Mumbai data monitored by NEERI under NAMP Projects 1990 to 2008 monthly averages", date: "2008-12-31", pdfUrl: "#" },
        { id: 'adr2', title: "Trends in Annual Average concentration of Ambient Air Quality Monitoring during 2005 to 2008.", date: "2008-12-31", pdfUrl: "#" }
    ];

    const [isArchive, setIsArchive] = useState(false);

    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            {/* Top Banner Section - RTI Style (Reused) */}
            <PageBanner title="Environmental Quality" image={standingorders} />

            {/* Main Content with Sidebar */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left Sidebar - Dropdown/Accordion Style */}
                        <Sidebar activeItem="Air Quality" />

                        {/* Right Content Area */}
                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="rounded-[24px] md:p-8 p-4 min-h-[400px] border border-gray-100 shadow-sm bg-white relative">
                                {/* Header & Toggle */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 pb-4 gap-4">
                                    <h2 className="text-[20px] md:text-[24px] font-bold text-gray-900 uppercase">
                                        {isArchive ? "Archive: Ambient Air Quality Monitoring Network" : "AMBIENT AIR QUALITY MONITORING NETWORK"}
                                    </h2>

                                    {/* Toggle Switch */}
                                    <div className="flex items-center bg-gray-100 p-1 rounded-full shrink-0 w-fit">
                                        <button
                                            onClick={() => setIsArchive(false)}
                                            className={`cursor-pointer px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${!isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Current
                                        </button>
                                        <button
                                            onClick={() => setIsArchive(true)}
                                            className={`cursor-pointer px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${isArchive ? 'bg-white text-[#0085E2] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            Archive
                                        </button>
                                    </div>
                                </div>

                                {!isArchive ? (
                                    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        {/* Map Image Placeholder */}
                                        <div className="w-full bg-blue-50 rounded-xl overflow-hidden border border-blue-100 flex items-center justify-center min-h-[400px]">
                                            {/* Replace with actual map image */}
                                            <div className="text-center p-8">
                                                <img src={maharashtramap} alt="Maharashtra Air Quality Network" />
                                            </div>
                                        </div>

                                        {/* Air Quality Network List */}
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-l-4 border-[#0085E2] pl-3">
                                                Air Quality Network
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {[
                                                    { text: "Ambient Air Quality Monitoring stations in Maharashtra (NAMP)", link: "#", icon: "NAMP" },
                                                    { text: "Air Quality Network in Maharashtra", link: "#", icon: "MH" },
                                                    { text: "Report of Continuous Ambient Air Quality in Mahul Ambapadda area", link: "https://www.ecmpcb.in/ocems/mahul", icon: "RPT" },
                                                    { text: "National Air Quality Index (AQI)", link: "https://aqinow.org/AQI_India", icon: "AQI" },
                                                    { text: "State Air Quality Index (AQI)", link: "https://airquality.cpcb.gov.in/AQI_India/", icon: "AQI" }
                                                ].map((item, index) => (
                                                    <div
                                                        key={index}
                                                        onClick={() => item.link && item.link !== '#' && window.open(item.link, '_blank')}
                                                        className={`group relative overflow-hidden bg-white p-5 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-200
                                                            ${item.link !== '#' ? 'cursor-pointer' : 'opacity-80'}`}
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

                                        {/* New Sections */}
                                        <PaginatedSection title="Related Documents" documents={relatedDocuments} />
                                        <DropdownSection title="Methods of Source & Ambient Air Quality Monitoring" items={methodsItems} />
                                        <PaginatedSection title="National Clean Air Programme (NCAP)" documents={ncapDocuments} />
                                        <DropdownSection title="Emission Inventory (EI) & Source Apportionment (SA) Study Reports" items={emissionStudyItems} />

                                        {/* Reports Section */}
                                        <div className="mt-12">
                                            <h2 className="text-[24px] font-bold text-gray-900 mb-6 uppercase border-b border-gray-200 pb-4">
                                                Reports
                                            </h2>
                                            <PaginatedSection title="Emission Inventory (EI) & Source Apportionment (SA) Study Reports" documents={emissionReports} />
                                            <PaginatedSection title="TERI Air Quality Status Reports" documents={teriReports} />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="mt-12">
                                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                                                <h3 className="text-[20px] font-bold text-gray-800 flex items-center gap-3 border-l-4 border-[#0085E2] pl-3">
                                                    Air Quality Network
                                                </h3>
                                            </div>
                                            <DropdownSection title="Ambient Air Quality Monitoring Network of Maharashtra" items={archiveNetworkItems} />
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                                {archiveNetwork.map((doc) => (
                                                    <DocumentCard
                                                        key={doc.id}
                                                        document={doc}
                                                        wide={false}
                                                    />
                                                ))}
                                            </div>
                                            <div className="flex flex-col gap-3 mt-4 px-2">
                                                <a href="/environmental-quality/air-quality/strengthening" className="text-gray-600 hover:text-[#0085E2] font-medium flex items-center gap-2 group transition-colors">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0085E2] group-hover:scale-125 transition-transform" />
                                                    Strengthening of Ambient Air Quality Monitoring
                                                </a>
                                                <a
                                                    href="/environmental-quality/air-quality/compliance"
                                                    className="text-[14px] font-medium text-[#0085E2] hover:text-[#006bb3] hover:underline transition-colors flex items-center gap-2 group"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0085E2] group-hover:bg-[#006bb3]"></span>
                                                    Compliance Report Of Industries Using Petcoke
                                                </a>
                                            </div>
                                        </div>
                                        <PaginatedSection title="Related Documents" documents={archiveRelated} />
                                        <PaginatedSection title="Air Quality Data Related Documents" documents={archiveDataRelated} />
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

export default AirQuality;
