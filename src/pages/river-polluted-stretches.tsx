import { useState } from 'react';
import DocumentCard from '../components/DocumentCard';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const bannerImage = "/assets/standingorders.svg";

// Helper to extract date from title if present (user image has dates in parens)
// But for simplicity/robustness, I'll hardcode the dates based on the image transcription.

// Data moved to sidebar items
const sidebarItems = [
    { title: "Minutes of Meeting of Central Monitoring Committee", date: "04/09/2025" },
    { title: "Minutes of RRC meetings", date: "04/09/2025", pdfUrl: "/documents/river-stretches/rrc-minutes.pdf" },
    { title: "Monthly Progress Reports submitted to Ministry of Jal Shakti, Govt. of India", date: "05/14/2025" },
    { title: "Link for water quality of polluted river stretches", date: "05/05/2025" },
    { title: "Action plan 2025 of Panchaganga River", date: "", pdfUrl: "/documents/river-stretches/action-plan-panchaganga-2025.pdf" },
    { title: "Action plan 2025 of Godavari River", date: "", pdfUrl: "/documents/river-stretches/action-plan-godavari-2025.pdf" },
    { title: "Action plan 2025 of Chandrabhaga River", date: "", pdfUrl: "/documents/river-stretches/action-plan-chandrabhaga-2025.pdf" },
    { title: "Orders of H'ble NGT in the matter O.A. No. 673 of 2018", date: "", pdfUrl: "/documents/river-stretches/ngt-orders-oa-673-2018.pdf" },
    { title: "Circular for Financial & Technical Assistance for setting up sewage Mangment Facility at Class A, B, C Municipal Councils & Nagar Panchayats", date: "01/02/2020", pdfUrl: "/documents/river-stretches/circular-financial-technical-assistance.pdf" },
    { title: "District Level Environment Surveillance Task Force", date: "11/18/2019" },
    { title: "Action plans of polluted stretches which are submitted to CPCB.", date: "08/06/2019" },
    { title: "Annexures I,II, III & IV of minutes of 3rd RRC", date: "07/02/2019", pdfUrl: "/documents/river-stretches/annexures-3rd-rrc.pdf" },
    { title: "Letter of submission of draft action plans to CPCB", date: "30/01/2019", pdfUrl: "/documents/river-stretches/letter-draft-action-plans-cpcb.pdf" },
    { title: "Covering letter to Hon'ble NGT dated", date: "31/01/19", pdfUrl: "/documents/river-stretches/covering-letter-ngt.pdf" },
    { title: "Government GR NGT-2018/PRA.KRA.2/TA.K.3 dated 13/12/2018 - Constitution of River Rejuvenation Commitee (RRC)", date: "", pdfUrl: "/documents/river-stretches/gr-rrc-constitution.pdf" },
    { title: "Submission of Progress Report to NGT & CPCB", date: "27/12/2018", pdfUrl: "/documents/river-stretches/progress-report-ngt-cpcb.pdf" }
];

// Reusable Paginated Section Component (Local definition for 2 columns)
const PaginatedSection = ({ documents, itemsPerPage = 6 }: { documents: any[], itemsPerPage?: number }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isViewAll, setIsViewAll] = useState(false);
    const ITEMS_PER_PAGE = itemsPerPage;

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
        <div className="mt-0">
            <div className="flex justify-end mb-4">
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
                        document={{ ...doc, date: '' }} // Hide date as requested
                        wide={false}
                    />
                ))}
            </div>

            {/* Pagination Controls - Hide if View All is active */}
            {!isViewAll && totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                    <button
                        onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                        disabled={currentPage === 1}
                        className={`w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 transition-colors cursor-pointer ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2]'}`}
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

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

                    <button
                        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 transition-colors cursor-pointer ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2]'}`}
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
};

const ArchiveDropdown = ({ title, items }: { title: string, items: { title: string, link: string }[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between px-6 py-4 bg-gray-50/50 cursor-pointer hover:bg-gray-100/80 transition-colors"
            >
                <h4 className="text-[15px] font-bold text-gray-800">{title}</h4>
                {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
            </div>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="border-t border-gray-100 bg-white">
                    {items.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 text-[14px] text-gray-600 hover:text-[#0085E2] hover:bg-blue-50 cursor-pointer transition-colors border-b border-gray-50 last:border-0 block flex items-center justify-between group"
                        >
                            <span className="flex-1 font-medium">{item.title}</span>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0085E2]" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

function RiverPollutedStretches() {
    const [selectedTab, setSelectedTab] = useState(sidebarItems[0].title);

    const handleTabClick = (title: string) => {
        setSelectedTab(title);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Data for the first tab
    const cmcMinutes = [
        { id: 'cmc1', title: "Minutes of 1st Meeting of Central Monitoring Committee", date: "08/01/2020", pdfUrl: "#" },
        { id: 'cmc2', title: "Minutes of 2nd Meeting of Central Monitoring Committee", date: "19/02/2020", pdfUrl: "#" },
        { id: 'cmc3', title: "Minutes of 3rd Meeting of Central Monitoring Committee", date: "23/06/2020", pdfUrl: "#" },
        { id: 'cmc4', title: "Minutes of 4th Meeting of Central Monitoring Committee", date: "30/07/2020", pdfUrl: "#" },
        { id: 'cmc5', title: "Minutes of 5th Meeting of Central Monitoring Committee", date: "31/08/2020", pdfUrl: "#" },
        { id: 'cmc6', title: "Minutes of 6th Meeting of Central Monitoring Committee", date: "30/09/2020", pdfUrl: "#" },
        { id: 'cmc7', title: "Minutes of 7th Meeting of Central Monitoring Committee", date: "09/11/2020", pdfUrl: "#" },
        { id: 'cmc8', title: "Minutes of 8th Meeting of Central Monitoring Committee", date: "05/01/2021", pdfUrl: "#" },
        { id: 'cmc9', title: "Minutes of 9th Meeting of Central Monitoring Committee", date: "04/03/2021", pdfUrl: "#" },
        { id: 'cmc10', title: "Minutes of 10th Meeting of Central Monitoring Committee", date: "09/07/2021", pdfUrl: "#" },
        { id: 'cmc11', title: "Minutes of 11th Meeting of Central Monitoring Committee", date: "15/11/2021", pdfUrl: "#" },
        { id: 'cmc17', title: "Minutes of 17th Meeting of Central Monitoring Committee", date: "12/09/2023", pdfUrl: "#" },
        { id: 'cmc18', title: "Minutes of 18th Meeting of Central Monitoring Committee", date: "11/01/2024", pdfUrl: "#" },
        { id: 'cmc19', title: "Minutes of 19th Meeting of Central Monitoring Committee", date: "30/09/2024", pdfUrl: "#" }
    ];

    // Data for the second tab
    const rrcMinutes = [
        { id: 'rrc1', title: "Minutes of first RRC meeting dated (14/12/2018)", date: "", pdfUrl: "#" },
        { id: 'rrc2', title: "Minutes of 2nd RRC meeting (09/01/2019)", date: "", pdfUrl: "#" },
        { id: 'rrc3', title: "Minutes of 3rd RRC meeting (23/01/2019)", date: "", pdfUrl: "#" },
        { id: 'rrc4', title: "Minutes of 4th RRC meeting (16/02/2019).", date: "", pdfUrl: "#" },
        { id: 'rrc5', title: "Minutes of 5th RRC meeting (25/06/2019).", date: "", pdfUrl: "#" },
        { id: 'rrc6', title: "Minutes of 6th RRC meeting (05/11/2019).", date: "", pdfUrl: "#" },
        { id: 'rrc7', title: "Minutes of 7th RRC Meeting (30/08/2025)", date: "", pdfUrl: "#" }
    ];

    // Data for the third tab
    const mprDocuments = [
        { id: 'mpr1', title: "Monthly Progress Report Dtd. 17.07.20", date: "", pdfUrl: "#" },
        { id: 'mpr2', title: "Monthly Progress Report Dtd. 20.08.20", date: "", pdfUrl: "#" },
        { id: 'mpr3', title: "Monthly Progress Report Dtd. 18.09.20", date: "", pdfUrl: "#" },
        { id: 'mpr4', title: "Monthly Progress Report Dtd. 19.10.20", date: "", pdfUrl: "#" },
        { id: 'mpr5', title: "Monthly Progress Report Dtd. 23.11.20", date: "", pdfUrl: "#" },
        { id: 'mpr6', title: "Monthly Progress Report Dtd. 21.12.20", date: "", pdfUrl: "#" },
        { id: 'mpr7', title: "Monthly Progress Report Dtd. 21.01.21", date: "", pdfUrl: "#" },
        { id: 'mpr8', title: "Monthly Progress Report Dtd. 15.02.21", date: "", pdfUrl: "#" },
        { id: 'mpr9', title: "Monthly Progress Report Dtd. 25.03.21", date: "", pdfUrl: "#" },
        { id: 'mpr10', title: "Monthly Progress Report Dtd. 22.04.21", date: "", pdfUrl: "#" },
        { id: 'mpr11', title: "Monthly Progress Report Dtd. 25.05.21", date: "", pdfUrl: "#" },
        { id: 'mpr12', title: "Monthly Progress Report Dtd. 24.06.21", date: "", pdfUrl: "#" },
        { id: 'mpr13', title: "Monthly Progress Report Dtd. 26.07.21", date: "", pdfUrl: "#" },
        { id: 'mpr14', title: "Monthly Progress Report Dtd. 23.08.21", date: "", pdfUrl: "#" },
        { id: 'mpr15', title: "Monthly Progress Report Dtd. 23.09.21", date: "", pdfUrl: "#" },
        { id: 'mpr16', title: "Monthly Progress Report Dtd. 21.10.21", date: "", pdfUrl: "#" },
        { id: 'mpr17', title: "Monthly Progress Report Dtd. 29.11.21", date: "", pdfUrl: "#" },
        { id: 'mpr18', title: "Monthly Progress Report Dtd. 29.12.21", date: "", pdfUrl: "#" },
        { id: 'mpr19', title: "Monthly Progress Report Dtd. 24.01.22", date: "", pdfUrl: "#" },
        { id: 'mpr20', title: "Monthly Progress Report Dtd. 25.01.22", date: "", pdfUrl: "#" },
        { id: 'mpr21', title: "Monthly Progress Report Dtd. 30.03.22", date: "", pdfUrl: "#" },
        { id: 'mpr22', title: "Monthly Progress Report Dtd. 20.04.22", date: "", pdfUrl: "#" },
        { id: 'mpr23', title: "Monthly Progress Report Dtd. 20.05.22", date: "", pdfUrl: "#" },
        { id: 'mpr24', title: "Monthly Progress Report Dtd. 27.07.22", date: "", pdfUrl: "#" },
        { id: 'mpr25', title: "Monthly Progress Report Dtd. 29.08.22", date: "", pdfUrl: "#" },
        { id: 'mpr26', title: "Monthly Progress Report Dtd. 29.09.22", date: "", pdfUrl: "#" },
        { id: 'mpr27', title: "Monthly Progress Report Dtd. 29.12.22", date: "", pdfUrl: "#" },
        { id: 'mpr28', title: "Monthly Progress Report Dtd. 31.01.23", date: "", pdfUrl: "#" },
        { id: 'mpr29', title: "Monthly Progress Report Dtd. 28.02.23", date: "", pdfUrl: "#" },
        { id: 'mpr30', title: "Monthly Progress Report Dtd. 28.03.23", date: "", pdfUrl: "#" },
        { id: 'mpr31', title: "Monthly Progress Report Dtd. 26.04.23", date: "", pdfUrl: "#" },
        { id: 'mpr32', title: "Monthly Progress Report Dtd. 06.06.23", date: "", pdfUrl: "#" },
        { id: 'mpr33', title: "Monthly Progress Report Dtd. 28.06.23", date: "", pdfUrl: "#" },
        { id: 'mpr34', title: "Monthly Progress Report Dtd. 28.07.23", date: "", pdfUrl: "#" },
        { id: 'mpr35', title: "Monthly Progress Report Dtd. 31.08.23", date: "", pdfUrl: "#" },
        { id: 'mpr36', title: "Monthly Progress Report Dtd. 05.10.23", date: "", pdfUrl: "#" },
        { id: 'mpr37', title: "Monthly Progress Report Dtd. 08.11.23", date: "", pdfUrl: "#" },
        { id: 'mpr38', title: "Monthly Progress Report Dtd. 07.12.23", date: "", pdfUrl: "#" },
        { id: 'mpr39', title: "Monthly Progress Report Dtd. 02.01.24", date: "", pdfUrl: "#" },
        { id: 'mpr40', title: "Monthly Progress Report Dtd. 06.02.24", date: "", pdfUrl: "#" },
        { id: 'mpr41', title: "Monthly Progress Report Jan 2024", date: "", pdfUrl: "#" },
        { id: 'mpr42', title: "Monthly Progress Report Feb 2024", date: "", pdfUrl: "#" },
        { id: 'mpr43', title: "Monthly Progress Report March 2024", date: "", pdfUrl: "#" },
        { id: 'mpr44', title: "Monthly Progress Report April 2024", date: "", pdfUrl: "#" },
        { id: 'mpr45', title: "Monthly Progress Report May 2024", date: "", pdfUrl: "#" },
        { id: 'mpr46', title: "Monthly Progress Report June 2024", date: "", pdfUrl: "#" },
        { id: 'mpr47', title: "Monthly Progress Report July 2024", date: "", pdfUrl: "#" },
        { id: 'mpr48', title: "Monthly Progress Report August 2024", date: "", pdfUrl: "#" },
        { id: 'mpr49', title: "Monthly Progress Report September 2024", date: "", pdfUrl: "#" },
        { id: 'mpr50', title: "Monthly Progress Report October 2024", date: "", pdfUrl: "#" },
        { id: 'mpr51', title: "Monthly Progress Report November 2024", date: "", pdfUrl: "#" },
        { id: 'mpr52', title: "Monthly Progress Report December 2024", date: "", pdfUrl: "#" },
        { id: 'mpr53', title: "Monthly Progress Report January 2025", date: "", pdfUrl: "#" },
        { id: 'mpr54', title: "Monthly Progress Report Feb 2025", date: "", pdfUrl: "#" },
        { id: 'mpr55', title: "Monthly Progress Report March 2025", date: "", pdfUrl: "#" },
        { id: 'mpr56', title: "Monthly Progress Report April 2025", date: "", pdfUrl: "#" }
    ];

    // Data for the fourth tab
    const priority1 = [
        { id: 'p1-1', title: "GODAVARI", date: "", pdfUrl: "/documents/water-quality/priority-1/godavari.pdf" },
        { id: 'p1-2', title: "KALU", date: "", pdfUrl: "/documents/water-quality/priority-1/kalu.pdf" },
        { id: 'p1-3', title: "KUNDALIKA", date: "", pdfUrl: "/documents/water-quality/priority-1/kundalika.pdf" },
        { id: 'p1-4', title: "MITHI", date: "", pdfUrl: "/documents/water-quality/priority-1/mithi.pdf" },
        { id: 'p1-5', title: "MUTHA", date: "", pdfUrl: "/documents/water-quality/priority-1/mutha.pdf" },
        { id: 'p1-6', title: "NIRA", date: "", pdfUrl: "/documents/water-quality/priority-1/nira.pdf" },
        { id: 'p1-7', title: "VEL", date: "", pdfUrl: "/documents/water-quality/priority-1/vel.pdf" },
        { id: 'p1-8', title: "MORNA", date: "", pdfUrl: "/documents/water-quality/priority-1/morna.pdf" },
        { id: 'p1-9', title: "MULA", date: "", pdfUrl: "/documents/water-quality/priority-1/mula.pdf" }
    ];

    const priority2 = [
        { id: 'p2-1', title: "BHIMA", date: "", pdfUrl: "/documents/water-quality/priority-2/bhima.pdf" },
        { id: 'p2-2', title: "INDRAYANI", date: "", pdfUrl: "/documents/water-quality/priority-2/indrayani.pdf" },
        { id: 'p2-3', title: "MULA-MUTHA", date: "", pdfUrl: "/documents/water-quality/priority-2/mula-mutha.pdf" },
        { id: 'p2-4', title: "PAWANA", date: "", pdfUrl: "/documents/water-quality/priority-2/pawana.pdf" },
        { id: 'p2-5', title: "WAINGANGA", date: "", pdfUrl: "/documents/water-quality/priority-2/wainganga.pdf" },
        { id: 'p2-6', title: "WARDHA", date: "", pdfUrl: "/documents/water-quality/priority-2/wardha.pdf" }
    ];

    const priority3 = [
        { id: 'p3-1', title: "KANHAN", date: "", pdfUrl: "/documents/water-quality/priority-3/kanhan.pdf" },
        { id: 'p3-2', title: "KOLAR", date: "", pdfUrl: "/documents/water-quality/priority-3/kolar.pdf" },
        { id: 'p3-3', title: "GHOD", date: "", pdfUrl: "/documents/water-quality/priority-3/ghod.pdf" },
        { id: 'p3-4', title: "KRISHNA", date: "", pdfUrl: "/documents/water-quality/priority-3/krishna.pdf" },
        { id: 'p3-5', title: "WENA", date: "", pdfUrl: "/documents/water-quality/priority-3/wena.pdf" },
        { id: 'p3-6', title: "WAGHUR", date: "", pdfUrl: "/documents/water-quality/priority-3/waghur.pdf" },
        { id: 'p3-7', title: "PURNA", date: "", pdfUrl: "/documents/water-quality/priority-3/purna.pdf" },
        { id: 'p3-8', title: "TAPI", date: "", pdfUrl: "/documents/water-quality/priority-3/tapi.pdf" },
        { id: 'p3-9', title: "URMODI", date: "", pdfUrl: "/documents/water-quality/priority-3/urmodi.pdf" },
        { id: 'p3-10', title: "VENNA", date: "", pdfUrl: "/documents/water-quality/priority-3/venna.pdf" },
        { id: 'p3-11', title: "PENGANGA", date: "", pdfUrl: "/documents/water-quality/priority-3/penganga.pdf" },
        { id: 'p3-12', title: "MOR", date: "", pdfUrl: "/documents/water-quality/priority-3/mor.pdf" },
        { id: 'p3-13', title: "PATALGANGA", date: "", pdfUrl: "/documents/water-quality/priority-3/patalganga.pdf" },
        { id: 'p3-14', title: "PEDHI", date: "", pdfUrl: "/documents/water-quality/priority-3/pedhi.pdf" }
    ];

    const priority4 = [
        { id: 'p4-1', title: "TITUR", date: "", pdfUrl: "/documents/water-quality/priority-4/titur.pdf" },
        { id: 'p4-2', title: "SINA", date: "", pdfUrl: "/documents/water-quality/priority-4/sina.pdf" },
        { id: 'p4-3', title: "PELHAR", date: "", pdfUrl: "/documents/water-quality/priority-4/pelhar.pdf" },
        { id: 'p4-4', title: "GIRNA", date: "", pdfUrl: "/documents/water-quality/priority-4/girna.pdf" },
        { id: 'p4-5', title: "HIWARA", date: "", pdfUrl: "/documents/water-quality/priority-4/hiwara.pdf" },
        { id: 'p4-6', title: "KOYNA", date: "", pdfUrl: "/documents/water-quality/priority-4/koyna.pdf" },
        { id: 'p4-7', title: "CHANDRABHAGA", date: "", pdfUrl: "/documents/water-quality/priority-4/chandrabhaga.pdf" },
        { id: 'p4-8', title: "DARNA", date: "", pdfUrl: "/documents/water-quality/priority-4/darna.pdf" },
        { id: 'p4-9', title: "BINDUSARA", date: "", pdfUrl: "/documents/water-quality/priority-4/bindusara.pdf" },
        { id: 'p4-10', title: "BORI", date: "", pdfUrl: "/documents/water-quality/priority-4/bori.pdf" }
    ];

    const priority5 = [
        { id: 'p5-1', title: "VASHISHTI", date: "", pdfUrl: "/documents/water-quality/priority-5/vashishti.pdf" },
        { id: 'p5-2', title: "VAITARNA", date: "", pdfUrl: "/documents/water-quality/priority-5/vaitarna.pdf" },
        { id: 'p5-3', title: "RANGAVALI", date: "", pdfUrl: "/documents/water-quality/priority-5/rangavali.pdf" },
        { id: 'p5-4', title: "MANJARA", date: "", pdfUrl: "/documents/water-quality/priority-5/manjara.pdf" },
        { id: 'p5-5', title: "PANCHGANGA", date: "", pdfUrl: "/documents/water-quality/priority-5/panchganga.pdf" },
        { id: 'p5-6', title: "PANZARA", date: "", pdfUrl: "/documents/water-quality/priority-5/panzara.pdf" },
        { id: 'p5-7', title: "SAVITRI", date: "", pdfUrl: "/documents/water-quality/priority-5/savitri.pdf" },
        { id: 'p5-8', title: "ULHAS", date: "", pdfUrl: "/documents/water-quality/priority-5/ulhas.pdf" },
        { id: 'p5-9', title: "SURYA", date: "", pdfUrl: "/documents/water-quality/priority-5/surya.pdf" },
        { id: 'p5-10', title: "TANSA", date: "", pdfUrl: "/documents/water-quality/priority-5/tansa.pdf" },
        { id: 'p5-11', title: "KAN", date: "", pdfUrl: "/documents/water-quality/priority-5/kan.pdf" },
        { id: 'p5-12', title: "AMBA", date: "", pdfUrl: "/documents/water-quality/priority-5/amba.pdf" },
        { id: 'p5-13', title: "BHATSA", date: "", pdfUrl: "/documents/water-quality/priority-5/bhatsa.pdf" },
        { id: 'p5-14', title: "GOMAI", date: "", pdfUrl: "/documents/water-quality/priority-5/gomai.pdf" }
    ];

    const [isArchive, setIsArchive] = useState(false);

    // Separate Archive Priority data with unique URLs for Archive document card sections
    const archivePriority3 = [
        { id: 'ap3-1', title: "KANHAN", date: "", pdfUrl: "/documents/archive/water-quality/priority-3/kanhan.pdf" },
        { id: 'ap3-2', title: "KOLAR", date: "", pdfUrl: "/documents/archive/water-quality/priority-3/kolar.pdf" },
        { id: 'ap3-3', title: "GHOD", date: "", pdfUrl: "/documents/archive/water-quality/priority-3/ghod.pdf" },
        { id: 'ap3-4', title: "KRISHNA", date: "", pdfUrl: "/documents/archive/water-quality/priority-3/krishna.pdf" },
        { id: 'ap3-5', title: "WENA", date: "", pdfUrl: "/documents/archive/water-quality/priority-3/wena.pdf" },
        { id: 'ap3-6', title: "WAGHUR", date: "", pdfUrl: "/documents/archive/water-quality/priority-3/waghur.pdf" },
        { id: 'ap3-7', title: "PURNA", date: "", pdfUrl: "/documents/archive/water-quality/priority-3/purna.pdf" },
        { id: 'ap3-8', title: "TAPI", date: "", pdfUrl: "/documents/archive/water-quality/priority-3/tapi.pdf" },
        { id: 'ap3-9', title: "URMODI", date: "", pdfUrl: "/documents/archive/water-quality/priority-3/urmodi.pdf" },
        { id: 'ap3-10', title: "VENNA", date: "", pdfUrl: "/documents/archive/water-quality/priority-3/venna.pdf" },
        { id: 'ap3-11', title: "PENGANGA", date: "", pdfUrl: "/documents/archive/water-quality/priority-3/penganga.pdf" },
        { id: 'ap3-12', title: "MOR", date: "", pdfUrl: "/documents/archive/water-quality/priority-3/mor.pdf" },
        { id: 'ap3-13', title: "PATALGANGA", date: "", pdfUrl: "/documents/archive/water-quality/priority-3/patalganga.pdf" },
        { id: 'ap3-14', title: "PEDHI", date: "", pdfUrl: "/documents/archive/water-quality/priority-3/pedhi.pdf" }
    ];

    const archivePriority4 = [
        { id: 'ap4-1', title: "TITUR", date: "", pdfUrl: "/documents/archive/water-quality/priority-4/titur.pdf" },
        { id: 'ap4-2', title: "SINA", date: "", pdfUrl: "/documents/archive/water-quality/priority-4/sina.pdf" },
        { id: 'ap4-3', title: "PELHAR", date: "", pdfUrl: "/documents/archive/water-quality/priority-4/pelhar.pdf" },
        { id: 'ap4-4', title: "GIRNA", date: "", pdfUrl: "/documents/archive/water-quality/priority-4/girna.pdf" },
        { id: 'ap4-5', title: "HIWARA", date: "", pdfUrl: "/documents/archive/water-quality/priority-4/hiwara.pdf" },
        { id: 'ap4-6', title: "KOYNA", date: "", pdfUrl: "/documents/archive/water-quality/priority-4/koyna.pdf" },
        { id: 'ap4-7', title: "CHANDRABHAGA", date: "", pdfUrl: "/documents/archive/water-quality/priority-4/chandrabhaga.pdf" },
        { id: 'ap4-8', title: "DARNA", date: "", pdfUrl: "/documents/archive/water-quality/priority-4/darna.pdf" },
        { id: 'ap4-9', title: "BINDUSARA", date: "", pdfUrl: "/documents/archive/water-quality/priority-4/bindusara.pdf" },
        { id: 'ap4-10', title: "BORI", date: "", pdfUrl: "/documents/archive/water-quality/priority-4/bori.pdf" }
    ];

    const archivePriority5 = [
        { id: 'ap5-1', title: "VASHISHTI", date: "", pdfUrl: "/documents/archive/water-quality/priority-5/vashishti.pdf" },
        { id: 'ap5-2', title: "VAITARNA", date: "", pdfUrl: "/documents/archive/water-quality/priority-5/vaitarna.pdf" },
        { id: 'ap5-3', title: "RANGAVALI", date: "", pdfUrl: "/documents/archive/water-quality/priority-5/rangavali.pdf" },
        { id: 'ap5-4', title: "MANJARA", date: "", pdfUrl: "/documents/archive/water-quality/priority-5/manjara.pdf" },
        { id: 'ap5-5', title: "PANCHGANGA", date: "", pdfUrl: "/documents/archive/water-quality/priority-5/panchganga.pdf" },
        { id: 'ap5-6', title: "PANZARA", date: "", pdfUrl: "/documents/archive/water-quality/priority-5/panzara.pdf" },
        { id: 'ap5-7', title: "SAVITRI", date: "", pdfUrl: "/documents/archive/water-quality/priority-5/savitri.pdf" },
        { id: 'ap5-8', title: "ULHAS", date: "", pdfUrl: "/documents/archive/water-quality/priority-5/ulhas.pdf" },
        { id: 'ap5-9', title: "SURYA", date: "", pdfUrl: "/documents/archive/water-quality/priority-5/surya.pdf" },
        { id: 'ap5-10', title: "TANSA", date: "", pdfUrl: "/documents/archive/water-quality/priority-5/tansa.pdf" },
        { id: 'ap5-11', title: "KAN", date: "", pdfUrl: "/documents/archive/water-quality/priority-5/kan.pdf" },
        { id: 'ap5-12', title: "AMBA", date: "", pdfUrl: "/documents/archive/water-quality/priority-5/amba.pdf" },
        { id: 'ap5-13', title: "BHATSA", date: "", pdfUrl: "/documents/archive/water-quality/priority-5/bhatsa.pdf" },
        { id: 'ap5-14', title: "GOMAI", date: "", pdfUrl: "/documents/archive/water-quality/priority-5/gomai.pdf" }
    ];

    // Dynamic Link Generation Logic
    const generateArchiveData = (items: any[], updatePeriod: string, prioritySlug: string) => {
        return items.map(item => ({
            title: item.title,
            // Dynamic URL generation as requested
            link: `/water-quality/polluted-river-stretches/${updatePeriod}/${prioritySlug}/${item.id}`
        }));
    };

    const archiveData = {
        mar2024: {
            p1: generateArchiveData(priority1, 'updated-mar-2024', 'priority-1'),
            p2: generateArchiveData(priority2, 'updated-mar-2024', 'priority-2'),
            p3: generateArchiveData(priority3, 'updated-mar-2024', 'priority-3'),
            p4: generateArchiveData(priority4, 'updated-mar-2024', 'priority-4'),
            p5: generateArchiveData(priority5, 'updated-mar-2024', 'priority-5')
        },
        may2023: {
            p1: generateArchiveData(priority1, 'updated-may-2023', 'priority-1'),
            p2: generateArchiveData(priority2, 'updated-may-2023', 'priority-2'),
            p3: generateArchiveData(priority3, 'updated-may-2023', 'priority-3'),
            p4: generateArchiveData(priority4, 'updated-may-2023', 'priority-4'),
            p5: generateArchiveData(priority5, 'updated-may-2023', 'priority-5')
        },
        feb2020: {
            p1: generateArchiveData(priority1, 'updated-feb-2020', 'priority-1'),
            p2: generateArchiveData(priority2, 'updated-feb-2020', 'priority-2'),
            p3: generateArchiveData(priority3, 'updated-feb-2020', 'priority-3'),
            p4: generateArchiveData(priority4, 'updated-feb-2020', 'priority-4'),
            p5: generateArchiveData(priority5, 'updated-feb-2020', 'priority-5')
        }
    };

    // Find selected item data
    const selectedItem = sidebarItems.find(item => item.title === selectedTab);

    return (
        <div className="font-family-helvetica min-h-screen bg-white">
            {/* Top Banner Section */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[280px] rounded-t-[24px] md:rounded-t-[48px] overflow-hidden">
                        <div
                            className="absolute inset-0 z-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${bannerImage})` }}
                        />
                        <div
                            className="absolute inset-0 z-10 bg-cover bg-center blur-sm scale-105"
                            style={{
                                backgroundImage: `url(${bannerImage})`,
                                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
                                maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)'
                            }}
                        />
                        <div className="absolute inset-0 z-20 bg-linear-to-b from-[#00A3FF]/30 via-[#00A3FF]/60 to-white" />

                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-30px]">
                            <h1 className="text-[28px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-none mb-8">
                                River Polluted Stretches
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
                        <div className="w-full lg:w-[350px] flex-shrink-0">
                            <div className="flex flex-col gap-4">
                                {sidebarItems.map((item) => {
                                    const isActive = selectedTab === item.title;
                                    return (
                                        <div
                                            key={item.title}
                                            onClick={() => handleTabClick(item.title)}
                                            className={`flex items-center justify-between px-6 py-4 rounded-[20px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-200
                                                ${isActive
                                                    ? 'border-2 border-[#00A3FF] bg-[#00A3FF]/5'
                                                    : 'border border-gray-300 hover:border-[#00A3FF] hover:text-[#00A3FF]'
                                                }`}
                                        >
                                            <span className={`text-[13px] font-normal transition-colors duration-200 leading-snug ${isActive ? 'text-[#00A3FF] font-medium' : 'text-gray-800'}`}>
                                                {item.title}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="flex-1">
                            <div className="rounded-[24px] p-4 md:p-8 min-h-[400px]">
                                {selectedTab === "Link for water quality of polluted river stretches" ? (
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-100 pb-4 gap-4">
                                        <h2 className="text-[24px] font-bold text-gray-900 uppercase">
                                            {selectedTab}
                                        </h2>
                                        <div className="flex items-center bg-gray-100 p-1 rounded-full shrink-0 w-fit">
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
                                ) : (
                                    <h2 className="text-[24px] font-semibold text-gray-800 mb-6 border-b border-gray-100 pb-4 uppercase">
                                        {selectedTab}
                                    </h2>
                                )}

                                {selectedTab === "Minutes of Meeting of Central Monitoring Committee" ? (
                                    <PaginatedSection documents={cmcMinutes} />
                                ) : selectedTab === "Minutes of RRC meetings" ? (
                                    <PaginatedSection documents={rrcMinutes} />
                                ) : selectedTab === "Monthly Progress Reports submitted to Ministry of Jal Shakti, Govt. of India" ? (
                                    <PaginatedSection documents={mprDocuments} />
                                ) : selectedTab === "Link for water quality of polluted river stretches" ? (
                                    !isArchive ? (
                                        <div className="space-y-12">
                                            <div>
                                                <h3 className="text-[18px] font-semibold text-gray-800 mb-6">Water quality of Priority I polluted river stretches</h3>
                                                <PaginatedSection documents={priority1} itemsPerPage={4} />
                                            </div>
                                            <div>
                                                <h3 className="text-[18px] font-semibold text-gray-800 mb-6">Water quality of Priority II polluted river stretches</h3>
                                                <PaginatedSection documents={priority2} itemsPerPage={4} />
                                            </div>
                                            <div>
                                                <h3 className="text-[18px] font-semibold text-gray-800 mb-6">Water quality of Priority III polluted river stretches</h3>
                                                <PaginatedSection documents={priority3} itemsPerPage={4} />
                                            </div>
                                            <div>
                                                <h3 className="text-[18px] font-semibold text-gray-800 mb-6">Water quality of Priority IV polluted river stretches</h3>
                                                <PaginatedSection documents={priority4} itemsPerPage={4} />
                                            </div>
                                            <div>
                                                <h3 className="text-[18px] font-semibold text-gray-800 mb-6">Water quality of Priority V polluted river stretches</h3>
                                                <PaginatedSection documents={priority5} itemsPerPage={4} />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                            {/* March 2024 Section */}
                                            <div>
                                                <h3 className="text-[20px] font-bold text-gray-800 mb-6">Link for water quality of polluted river stretches (Updated on March 2024)</h3>
                                                <ArchiveDropdown title="Priority I" items={archiveData.mar2024.p1} />
                                                <ArchiveDropdown title="Priority II" items={archiveData.mar2024.p2} />
                                                <ArchiveDropdown title="Priority III" items={archiveData.mar2024.p3} />
                                                <ArchiveDropdown title="Priority IV" items={archiveData.mar2024.p4} />
                                                <ArchiveDropdown title="Priority V" items={archiveData.mar2024.p5} />
                                            </div>

                                            {/* May 2023 Section */}
                                            <div>
                                                <h3 className="text-[20px] font-bold text-gray-800 mb-6">Water quality of polluted river stretches (Updated On May 2023)</h3>
                                                <ArchiveDropdown title="Priority I" items={archiveData.may2023.p1} />
                                                <ArchiveDropdown title="Priority II" items={archiveData.may2023.p2} />
                                                <ArchiveDropdown title="Priority III" items={archiveData.may2023.p3} />
                                                <ArchiveDropdown title="Priority IV" items={archiveData.may2023.p4} />
                                                <ArchiveDropdown title="Priority V" items={archiveData.may2023.p5} />
                                            </div>

                                            {/* Feb 2020 Section */}
                                            <div>
                                                <h3 className="text-[20px] font-bold text-gray-800 mb-6">Water quality of polluted river stretches (Updated On Feb2020)</h3>
                                                <ArchiveDropdown title="Priority I" items={archiveData.feb2020.p1} />
                                                <ArchiveDropdown title="Priority II" items={archiveData.feb2020.p2} />
                                                <ArchiveDropdown title="Priority III" items={archiveData.feb2020.p3} />
                                                <ArchiveDropdown title="Priority IV" items={archiveData.feb2020.p4} />
                                                <ArchiveDropdown title="Priority V" items={archiveData.feb2020.p5} />
                                            </div>

                                            {/* Priority III Document Cards Section */}
                                            <div>
                                                <h3 className="text-[20px] font-bold text-gray-800 mb-6">Water quality of Priority III polluted river stretches</h3>
                                                <PaginatedSection documents={archivePriority3} itemsPerPage={4} />
                                            </div>

                                            {/* Priority IV Document Cards Section */}
                                            <div>
                                                <h3 className="text-[20px] font-bold text-gray-800 mb-6">Water quality of Priority IV polluted river stretches</h3>
                                                <PaginatedSection documents={archivePriority4} itemsPerPage={4} />
                                            </div>

                                            {/* Priority V Document Cards Section */}
                                            <div>
                                                <h3 className="text-[20px] font-bold text-gray-800 mb-6">Water quality of Priority V polluted river stretches</h3>
                                                <PaginatedSection documents={archivePriority5} itemsPerPage={4} />
                                            </div>
                                        </div>
                                    )
                                ) : selectedTab === "Action plans of polluted stretches which are submitted to CPCB." ? (
                                    <div className="flex flex-col gap-10">
                                        {/* Priority I Section */}
                                        <div>
                                            <h3 className="text-[20px] font-bold text-gray-800 mb-6">Action plans of Priority I stretches which are submitted to CPCB.</h3>
                                            <PaginatedSection
                                                documents={[
                                                    { id: 'ap-p1-1', title: "GODAVARI", date: "", pdfUrl: "/documents/action-plans/priority-1/godavari.pdf" },
                                                    { id: 'ap-p1-2', title: "KALU", date: "", pdfUrl: "/documents/action-plans/priority-1/kalu.pdf" },
                                                    { id: 'ap-p1-3', title: "KUNDALIKA", date: "", pdfUrl: "/documents/action-plans/priority-1/kundalika.pdf" },
                                                    { id: 'ap-p1-4', title: "MITHI", date: "", pdfUrl: "/documents/action-plans/priority-1/mithi.pdf" },
                                                    { id: 'ap-p1-5', title: "MUTHA", date: "", pdfUrl: "/documents/action-plans/priority-1/mutha.pdf" },
                                                    { id: 'ap-p1-6', title: "NIRA", date: "", pdfUrl: "/documents/action-plans/priority-1/nira.pdf" },
                                                    { id: 'ap-p1-7', title: "VEL", date: "", pdfUrl: "/documents/action-plans/priority-1/vel.pdf" },
                                                    { id: 'ap-p1-8', title: "MORNA", date: "", pdfUrl: "/documents/action-plans/priority-1/morna.pdf" },
                                                    { id: 'ap-p1-9', title: "MULA", date: "", pdfUrl: "/documents/action-plans/priority-1/mula.pdf" }
                                                ]}
                                                itemsPerPage={4}
                                            />
                                        </div>

                                        {/* Priority II Section */}
                                        <div>
                                            <h3 className="text-[20px] font-bold text-gray-800 mb-6">Action plans of Priority II stretches which are submitted to CPCB.</h3>
                                            <PaginatedSection
                                                documents={[
                                                    { id: 'ap-p2-1', title: "BHIMA", date: "", pdfUrl: "/documents/action-plans/priority-2/bhima.pdf" },
                                                    { id: 'ap-p2-2', title: "INDRAYANI", date: "", pdfUrl: "/documents/action-plans/priority-2/indrayani.pdf" },
                                                    { id: 'ap-p2-3', title: "MULA-MUTHA", date: "", pdfUrl: "/documents/action-plans/priority-2/mula-mutha.pdf" },
                                                    { id: 'ap-p2-4', title: "PAWANA", date: "", pdfUrl: "/documents/action-plans/priority-2/pawana.pdf" },
                                                    { id: 'ap-p2-5', title: "WAINGANGA", date: "", pdfUrl: "/documents/action-plans/priority-2/wainganga.pdf" },
                                                    { id: 'ap-p2-6', title: "WARDHA", date: "", pdfUrl: "/documents/action-plans/priority-2/wardha.pdf" }
                                                ]}
                                                itemsPerPage={4}
                                            />
                                        </div>

                                        {/* Priority III Section */}
                                        <div>
                                            <h3 className="text-[20px] font-bold text-gray-800 mb-6">Action plans of Priority III stretches which are submitted to CPCB.</h3>
                                            <PaginatedSection
                                                documents={[
                                                    { id: 'ap-p3-1', title: "KANHAN", date: "", pdfUrl: "/documents/action-plans/priority-3/kanhan.pdf" },
                                                    { id: 'ap-p3-2', title: "KOLAR", date: "", pdfUrl: "/documents/action-plans/priority-3/kolar.pdf" },
                                                    { id: 'ap-p3-3', title: "GHOD", date: "", pdfUrl: "/documents/action-plans/priority-3/ghod.pdf" },
                                                    { id: 'ap-p3-4', title: "KRISHNA", date: "", pdfUrl: "/documents/action-plans/priority-3/krishna.pdf" },
                                                    { id: 'ap-p3-5', title: "WENA", date: "", pdfUrl: "/documents/action-plans/priority-3/wena.pdf" },
                                                    { id: 'ap-p3-6', title: "WAGHUR", date: "", pdfUrl: "/documents/action-plans/priority-3/waghur.pdf" },
                                                    { id: 'ap-p3-7', title: "PURNA", date: "", pdfUrl: "/documents/action-plans/priority-3/purna.pdf" },
                                                    { id: 'ap-p3-8', title: "TAPI", date: "", pdfUrl: "/documents/action-plans/priority-3/tapi.pdf" },
                                                    { id: 'ap-p3-9', title: "URMODI", date: "", pdfUrl: "/documents/action-plans/priority-3/urmodi.pdf" },
                                                    { id: 'ap-p3-10', title: "VENNA", date: "", pdfUrl: "/documents/action-plans/priority-3/venna.pdf" },
                                                    { id: 'ap-p3-11', title: "PENGANGA", date: "", pdfUrl: "/documents/action-plans/priority-3/penganga.pdf" },
                                                    { id: 'ap-p3-12', title: "MOR", date: "", pdfUrl: "/documents/action-plans/priority-3/mor.pdf" },
                                                    { id: 'ap-p3-13', title: "PATALGANGA", date: "", pdfUrl: "/documents/action-plans/priority-3/patalganga.pdf" },
                                                    { id: 'ap-p3-14', title: "PEDHI", date: "", pdfUrl: "/documents/action-plans/priority-3/pedhi.pdf" }
                                                ]}
                                                itemsPerPage={4}
                                            />
                                        </div>

                                        {/* Priority IV Section */}
                                        <div>
                                            <h3 className="text-[20px] font-bold text-gray-800 mb-6">Action plans of Priority IV stretches which are submitted to CPCB.</h3>
                                            <PaginatedSection
                                                documents={[
                                                    { id: 'ap-p4-1', title: "TITUR", date: "", pdfUrl: "/documents/action-plans/priority-4/titur.pdf" },
                                                    { id: 'ap-p4-2', title: "SINA", date: "", pdfUrl: "/documents/action-plans/priority-4/sina.pdf" },
                                                    { id: 'ap-p4-3', title: "PELHAR", date: "", pdfUrl: "/documents/action-plans/priority-4/pelhar.pdf" },
                                                    { id: 'ap-p4-4', title: "GIRNA", date: "", pdfUrl: "/documents/action-plans/priority-4/girna.pdf" },
                                                    { id: 'ap-p4-5', title: "HIWARA", date: "", pdfUrl: "/documents/action-plans/priority-4/hiwara.pdf" },
                                                    { id: 'ap-p4-6', title: "KOYNA", date: "", pdfUrl: "/documents/action-plans/priority-4/koyna.pdf" },
                                                    { id: 'ap-p4-7', title: "CHANDRABHAGA", date: "", pdfUrl: "/documents/action-plans/priority-4/chandrabhaga.pdf" },
                                                    { id: 'ap-p4-8', title: "DARNA", date: "", pdfUrl: "/documents/action-plans/priority-4/darna.pdf" },
                                                    { id: 'ap-p4-9', title: "BINDUSARA", date: "", pdfUrl: "/documents/action-plans/priority-4/bindusara.pdf" },
                                                    { id: 'ap-p4-10', title: "BORI", date: "", pdfUrl: "/documents/action-plans/priority-4/bori.pdf" }
                                                ]}
                                                itemsPerPage={4}
                                            />
                                        </div>

                                        {/* Priority V Section */}
                                        <div>
                                            <h3 className="text-[20px] font-bold text-gray-800 mb-6">Action plans of Priority V stretches which are submitted to CPCB.</h3>
                                            <PaginatedSection
                                                documents={[
                                                    { id: 'ap-p5-1', title: "VASHISHTI", date: "", pdfUrl: "/documents/action-plans/priority-5/vashishti.pdf" },
                                                    { id: 'ap-p5-2', title: "VAITARNA", date: "", pdfUrl: "/documents/action-plans/priority-5/vaitarna.pdf" },
                                                    { id: 'ap-p5-3', title: "RANGAVALI", date: "", pdfUrl: "/documents/action-plans/priority-5/rangavali.pdf" },
                                                    { id: 'ap-p5-4', title: "MANJARA", date: "", pdfUrl: "/documents/action-plans/priority-5/manjara.pdf" },
                                                    { id: 'ap-p5-5', title: "PANCHGANGA", date: "", pdfUrl: "/documents/action-plans/priority-5/panchganga.pdf" },
                                                    { id: 'ap-p5-6', title: "PANZARA", date: "", pdfUrl: "/documents/action-plans/priority-5/panzara.pdf" },
                                                    { id: 'ap-p5-7', title: "SAVITRI", date: "", pdfUrl: "/documents/action-plans/priority-5/savitri.pdf" },
                                                    { id: 'ap-p5-8', title: "ULHAS", date: "", pdfUrl: "/documents/action-plans/priority-5/ulhas.pdf" },
                                                    { id: 'ap-p5-9', title: "SURYA", date: "", pdfUrl: "/documents/action-plans/priority-5/surya.pdf" },
                                                    { id: 'ap-p5-10', title: "TANSA", date: "", pdfUrl: "/documents/action-plans/priority-5/tansa.pdf" },
                                                    { id: 'ap-p5-11', title: "KAN", date: "", pdfUrl: "/documents/action-plans/priority-5/kan.pdf" },
                                                    { id: 'ap-p5-12', title: "AMBA", date: "", pdfUrl: "/documents/action-plans/priority-5/amba.pdf" },
                                                    { id: 'ap-p5-13', title: "BHATSA", date: "", pdfUrl: "/documents/action-plans/priority-5/bhatsa.pdf" },
                                                    { id: 'ap-p5-14', title: "GOMAI", date: "", pdfUrl: "/documents/action-plans/priority-5/gomai.pdf" }
                                                ]}
                                                itemsPerPage={4}
                                            />
                                        </div>
                                    </div>
                                ) : selectedTab === "District Level Environment Surveillance Task Force" ? (
                                    <div className="border border-gray-200 rounded-[25px] overflow-hidden overflow-x-auto shadow-sm">
                                        <div className="min-w-[800px]">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200 bg-gray-50">
                                                        <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 w-20">Sr. No</th>
                                                        <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800 w-40">District</th>
                                                        <th className="py-4 px-6 text-left text-[14px] font-bold text-gray-800">Documents</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {[
                                                        { id: 1, district: "Ahmednagar", mom: ["MOM"], constitution: ["TFC Order (11-07-2019)"] },
                                                        { id: 2, district: "Akola", mom: ["MOM"], constitution: ["TFC Order (05-08-2019)"] },
                                                        { id: 3, district: "Amravati", mom: ["MOM"], constitution: ["TFC Order (06-08-2019)"] },
                                                        { id: 4, district: "Aurangabad", mom: ["MOM (09-07-2019)"], constitution: ["TFC Order (24-06-2019)"] },
                                                        { id: 5, district: "Beed", mom: ["MOM (18-11-2019)"], constitution: ["TFC Order (04-07-2019)"] },
                                                        { id: 6, district: "Bhandara", mom: ["MOM"], constitution: ["TFC Order (10-06-2019)"] },
                                                        { id: 7, district: "Buldhana", mom: ["MOM"], constitution: ["Constitution Orders"] },
                                                        { id: 8, district: "Chandrapur", mom: ["MOM (26-06-2019)", "MOM", "Minutes of meeting of task force for river action plan"], constitution: ["Office Order for Constitution of Special Environmental surveillance task force", "Office Order for Constitution of Special Environmental Surveillance Task Force Action Plan for River Rejuvenation Priority-II Wardha River"] },
                                                        { id: 9, district: "Dhule", mom: ["MOM (15-07-2019)"], constitution: ["TFC Order (27-06-2019)"] },
                                                        { id: 10, district: "Gadchiroli", mom: ["MOM (04-07-2019)", "MOM River Action Plan Meeting"], constitution: ["River Task Order (June 2019)"] },
                                                        { id: 11, district: "Gondiya", mom: [], constitution: [] },
                                                        { id: 12, district: "Hingoli", mom: [], constitution: [] },
                                                        { id: 13, district: "Jalgaon", mom: ["MOM (19-07-2019)", "MOM (18-11-2019)"], constitution: ["TFC Order (02-07-2019)"] },
                                                        { id: 14, district: "Jalna", mom: [], constitution: [] },
                                                        { id: 15, district: "Kolhapur", mom: ["MOM(01-07-2019)"], constitution: [] },
                                                        { id: 16, district: "Latur", mom: ["MOM (05-08-2019)"], constitution: ["TFC Order (30-07-2019)"] },
                                                        { id: 17, district: "Mumbai city", mom: [], constitution: [] },
                                                        { id: 18, district: "Mumbai Suburban", mom: [], constitution: [] },
                                                        { id: 19, district: "Nagpur", mom: ["MOM (15-07-2019)"], constitution: ["TFC Order (29-06-2019)"] },
                                                        { id: 20, district: "Nanded", mom: [], constitution: ["TFC Order (07-08-2019)"] },
                                                        { id: 21, district: "Nandurbar", mom: [], constitution: ["TFC Order (24-06-2019)"] },
                                                        { id: 22, district: "Nashik", mom: [], constitution: ["TFC Order(19-07-2019)"] },
                                                        { id: 23, district: "Osmanabad", mom: [], constitution: [] },
                                                        { id: 24, district: "Palghar", mom: [], constitution: [] },
                                                        { id: 25, district: "Parbhani", mom: ["MOM (16-07-2019)"], constitution: [] },
                                                        { id: 26, district: "Pune", mom: ["MOM (05-07-2019)", "MOM (05-08-2019)"], constitution: [] },
                                                        { id: 27, district: "Raigad", mom: ["MOM (08-08-2019)"], constitution: ["TFC Order (02-08-2019)"] },
                                                        { id: 28, district: "Ratnagiri", mom: [], constitution: [] },
                                                        { id: 29, district: "Sangli", mom: [], constitution: [] },
                                                        { id: 30, district: "Satara", mom: [], constitution: ["TFC Order (06-08-2019)"] },
                                                        { id: 31, district: "Sindhudurg", mom: [], constitution: [] },
                                                        { id: 32, district: "Solapur", mom: ["MOM (05-08-2019)"], constitution: [] },
                                                        { id: 33, district: "Thane", mom: [], constitution: ["TFC Order (20-07-2019)"] },
                                                        { id: 34, district: "Wardha", mom: ["MOM (06-07-2019)"], constitution: ["TFC Order (20-06-2019)"] },
                                                        { id: 35, district: "Washim", mom: [], constitution: ["TFC order (03-08-2019)"] },
                                                        { id: 36, district: "Yavatmal", mom: ["Minutes of Meeting-River Rejuvenation Action Plan-Penganga Task Force"], constitution: ["TFC Order", "Office Order for Constitution of Special Environmental Surveillance Task Force Action Plan for River Rejuvenation Priority-II Painganga River"] }
                                                    ].map((row, idx) => (
                                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">{row.id}.</td>
                                                            <td className="py-4 px-6 text-[14px] font-semibold text-gray-800 align-top">{row.district}</td>
                                                            <td className="py-4 px-6 text-[14px] text-gray-700 align-top">
                                                                <div className="flex flex-col gap-6">
                                                                    <div>
                                                                        <span className="font-bold block mb-2 text-gray-900">1. MOM:</span>
                                                                        <div className="flex flex-col gap-2">
                                                                            {row.mom.length > 0 ? row.mom.map((m, i) => (
                                                                                <a key={i} href="#" className="text-[#0085E2] hover:underline flex items-center gap-2">
                                                                                    {m}
                                                                                    <img src="/icons/pdf-icon.svg" alt="PDF" className="w-4 h-4" onError={(e) => (e.currentTarget.style.display = 'none')} />
                                                                                </a>
                                                                            )) : <span className="text-gray-400">-</span>}
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <span className="font-bold block mb-2 text-gray-900">2. Constitution Orders:</span>
                                                                        <div className="flex flex-col gap-2">
                                                                            {row.constitution.length > 0 ? row.constitution.map((c, i) => (
                                                                                <a key={i} href="#" className="text-[#0085E2] hover:underline flex items-center gap-2">
                                                                                    {c}
                                                                                    <img src="/icons/pdf-icon.svg" alt="PDF" className="w-4 h-4" onError={(e) => (e.currentTarget.style.display = 'none')} />
                                                                                </a>
                                                                            )) : <span className="text-gray-400">-</span>}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-[14px] text-gray-700 leading-relaxed">
                                        <div className="flex justify-center">
                                            <DocumentCard
                                                document={{
                                                    id: 'doc-current',
                                                    title: selectedTab,
                                                    date: '',
                                                    pdfUrl: selectedItem?.pdfUrl || '#'
                                                }}
                                                wide={true}
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

export default RiverPollutedStretches;
