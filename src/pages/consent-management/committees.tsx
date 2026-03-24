import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DocumentCard from '../../components/DocumentCard';

const standingorders = "/assets/standingorders.svg";

// Sidebar tabs from the reference image
const sidebarTabs = [
    "List of sugar industries which are approved for grant of renewal of consent in CAC meeting but pending for consent fees",
    "Calender for compliance of Specific conditions in respect of CAC cases",
    "List of CAC cases whose Revocation Order's are cancelled",
    "List of CAC cases which are due for consent but not applied to MPCB",
    "Procedure for Revocation of consent of CAC industries who have not submitted the stipulated Bank Guarantee",
    "Show Cause Notice for Revoking the consents to the industries not submitted the stipulated Bank Guarantee",
    "CAC Industry database as on 05/07/2013",
    "Entreprenur coming under CAC category are requested to provide their official Email Ids for better Services.",
    "Consent Comittee Industry database as on 05/07/2013",
    "Consent Appraisal Committee",
    "Consent Committee"
];

// Consent Appraisal Committee meeting data
const consentAppraisalData = [
    { srNo: 1, date: "14/08/2025", agenda: "6th CAC Meeting Agenda of 2025-26", minutes: "6th CAC Meeting Minutes of 2025-26", actionReport: "Action Taken Report" },
    { srNo: 2, date: "29/07/2025", agenda: "5th CAC Meeting Agenda of 2025-26", minutes: "5th CAC Meeting Minutes of 2025-26", actionReport: "Action Taken Report" },
    { srNo: 3, date: "01/07/2025", agenda: "4th CAC Meeting Agenda of 2025-26", minutes: "4th CAC Meeting Minutes of 2025-26", actionReport: "Action Taken Report" },
    { srNo: 4, date: "10/06/2025", agenda: "3rd CAC Meeting Agenda of 2025-26", minutes: "3rd CAC Meeting Minutes of 2025-26", actionReport: "Action Taken Report" },
    { srNo: 5, date: "20/05/2025", agenda: "2nd CAC Meeting Agenda of 2025-26", minutes: "2nd CAC Meeting Minutes of 2025-26", actionReport: "Action Taken Report" },
    { srNo: 6, date: "17/04/2025", agenda: "1st CAC Meeting Agenda of 2025-26 (Part II)", minutes: "1st CAC Meeting Minutes of 2025-26 (Part II)", actionReport: "Action Taken Report (Part II)" },
    { srNo: 7, date: "16/04/2025", agenda: "1st CAC Meeting Agenda of 2025-26 (Part I)", minutes: "1st CAC Meeting Minutes of 2025-26 (Part I)", actionReport: "Action Taken Report (Part I)" },
    { srNo: 8, date: "13/03/2025", agenda: "17th CAC Meeting Agenda of 2024-25", minutes: "17th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 9, date: "11/02/2025", agenda: "16th CAC Meeting Agenda of 2024-25", minutes: "16th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 10, date: "24/01/2025", agenda: "15th CAC Meeting Agenda of 2024-25", minutes: "15th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 11, date: "12/12/2024", agenda: "14th CAC Meeting Agenda of 2024-25", minutes: "14th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 12, date: "15/11/2024", agenda: "13th CAC Meeting Agenda of 2024-25", minutes: "13th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 13, date: "18/10/2024", agenda: "12th CAC Meeting Agenda of 2024-25", minutes: "12th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 14, date: "20/09/2024", agenda: "11th CAC Meeting Agenda of 2024-25", minutes: "11th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 15, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 16, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 17, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 18, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 19, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 20, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 21, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 22, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 23, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 24, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 25, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 26, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 27, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 28, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 29, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 30, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 31, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 32, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 33, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 34, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 35, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 36, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
    { srNo: 37, date: "22/08/2024", agenda: "10th CAC Meeting Agenda of 2024-25", minutes: "10th CAC Meeting Minutes of 2024-25", actionReport: "Action Taken Report" },
];

// Consent Committee meeting data (Date, Agenda, Minute, ATR)
const consentCommitteeData = [
    {
        id: 1,
        date: "12/03/2025",
        agenda: "",
        minutes: [
            "16th CC meeting Minutes A of 2024-25",
            "16th CC meeting Minutes B of 2024-25",
            "16th CC meeting Minutes C of 2024-25",
            "16th CC meeting Minutes Part-2 of 2024-25"
        ],
        atr: ""
    },
    {
        id: 2,
        date: "12/02/2025",
        agenda: "",
        minutes: [
            "15th CC meeting Minutes A of 2024-25",
            "15th CC meeting Minutes B of 2024-25",
            "15th CC meeting Minutes C of 2024-25"
        ],
        atr: ""
    },
    {
        id: 3,
        date: "17/01/2025",
        agenda: "",
        minutes: [
            "14th CC meeting Minutes A of 2024-25",
            "14th CC meeting Minutes B of 2024-25",
            "14th CC meeting Minutes C of 2024-25"
        ],
        atr: ""
    },
    {
        id: 4,
        date: "06/01/2025",
        agenda: "",
        minutes: [
            "13th CC meeting Minutes A of 2024-25",
            "13th CC meeting Minutes B of 2024-25",
            "13th CC meeting Minutes C of 2024-25"
        ],
        atr: ""
    },
    {
        id: 5,
        date: "04/12/2024",
        agenda: "",
        minutes: [
            "12th CC meeting Minutes A of 2024-25",
            "12th CC meeting Minutes B of 2024-25",
            "12th CC meeting Minutes C of 2024-25",
            "12th CC meeting Minutes Part-B of 2024-25"
        ],
        atr: ""
    },
    {
        id: 6,
        date: "14/11/2024",
        agenda: "",
        minutes: [
            "11th CC meeting Minutes A of 2024-25",
            "11th CC meeting Minutes B of 2024-25",
            "11th CC meeting Minutes C of 2024-25"
        ],
        atr: ""
    },
    {
        id: 7,
        date: "24/10/2024",
        agenda: "",
        minutes: [
            "10th CC meeting Minutes A of 2024-25",
            "10th CC meeting Minutes B of 2024-25",
            "10th CC meeting Minutes C of 2024-25"
        ],
        atr: ""
    },
    {
        id: 8,
        date: "30/09/2024",
        agenda: "",
        minutes: [
            "9th CC meeting Minutes A of 2024-25",
            "9th CC meeting Minutes B of 2024-25",
            "9th CC meeting Minutes C of 2024-25"
        ],
        atr: ""
    },
    {
        id: 9,
        date: "09/09/2024",
        agenda: "",
        minutes: [
            "8th CC meeting Minutes A of 2024-25",
            "8th CC meeting Minutes B of 2024-25",
            "8th CC meeting Minutes C of 2024-25"
        ],
        atr: ""
    },
    {
        id: 10,
        date: "26/07/2024",
        agenda: "",
        minutes: [
            "7th CC meeting Minutes A of 2024-25",
            "7th CC meeting Minutes B of 2024-25",
            "7th CC meeting Minutes C of 2024-25"
        ],
        atr: ""
    },
    {
        id: 11,
        date: "10/06/2024",
        agenda: "",
        minutes: [
            "6th CC meeting Minutes A of 2024-25",
            "6th CC meeting Minutes B of 2024-25"
        ],
        atr: ""
    },
    {
        id: 12,
        date: "22/05/2024",
        agenda: "",
        minutes: [
            "5th CC meeting Minutes A of 2024-25",
            "5th CC meeting Minutes B of 2024-25",
            "5th CC meeting Minutes C of 2024-25"
        ],
        atr: ""
    },
    {
        id: 13,
        date: "15/04/2024",
        agenda: "",
        minutes: [
            "4th CC meeting Minutes A of 2024-25",
            "4th CC meeting Minutes B of 2024-25"
        ],
        atr: ""
    },
    {
        id: 14,
        date: "20/03/2024",
        agenda: "",
        minutes: [
            "3rd CC meeting Minutes A of 2024-25",
            "3rd CC meeting Minutes B of 2024-25",
            "3rd CC meeting Minutes C of 2024-25"
        ],
        atr: ""
    },
    {
        id: 15,
        date: "10/02/2024",
        agenda: "",
        minutes: [
            "2nd CC meeting Minutes A of 2024-25",
            "2nd CC meeting Minutes B of 2024-25"
        ],
        atr: ""
    }
];

const ITEMS_PER_PAGE = 10;

function Committees() {
    const [selectedTab, setSelectedTab] = useState(sidebarTabs[0]);

    // Consent Appraisal Committee states
    const [cacSearchQuery, setCacSearchQuery] = useState('');
    const [cacAppliedSearch, setCacAppliedSearch] = useState('');
    const [cacCurrentPage, setCacCurrentPage] = useState(1);

    // Filter data based on search
    const filteredCacData = cacAppliedSearch
        ? consentAppraisalData.filter(item =>
            item.agenda.toLowerCase().includes(cacAppliedSearch.toLowerCase()) ||
            item.minutes.toLowerCase().includes(cacAppliedSearch.toLowerCase()) ||
            item.date.includes(cacAppliedSearch)
        )
        : consentAppraisalData;

    // Pagination calculations
    const cacTotalPages = Math.ceil(filteredCacData.length / ITEMS_PER_PAGE);
    const cacStartIndex = (cacCurrentPage - 1) * ITEMS_PER_PAGE;
    const paginatedCacData = filteredCacData.slice(cacStartIndex, cacStartIndex + ITEMS_PER_PAGE);

    const handleCacApplySearch = () => {
        setCacAppliedSearch(cacSearchQuery);
        setCacCurrentPage(1);
    };

    const handleCacClearSearch = () => {
        setCacSearchQuery('');
        setCacAppliedSearch('');
        setCacCurrentPage(1);
    };

    // Generate page numbers with ellipsis logic - show max 3 pages
    const getPageNumbers = (currentPage: number, totalPages: number) => {
        const pages: (number | string)[] = [];

        if (totalPages <= 3) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 2) {
                pages.push(1, 2, 3, '...', totalPages);
            } else if (currentPage >= totalPages - 1) {
                pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }

        return pages;
    };

    // Handle page change with scroll to top
    const handleCacPageChange = (page: number) => {
        setCacCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
        setCacCurrentPage(1); // Reset CAC pagination
        setCcCurrentPage(1); // Reset CC pagination
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Consent Committee states
    const [ccSearchQuery, setCcSearchQuery] = useState('');
    const [ccAppliedSearch, setCcAppliedSearch] = useState('');
    const [ccCurrentPage, setCcCurrentPage] = useState(1);

    // Filter CC data based on search
    const filteredCcData = ccAppliedSearch
        ? consentCommitteeData.filter(item =>
            item.date.includes(ccAppliedSearch) ||
            item.minutes.some(m => m.toLowerCase().includes(ccAppliedSearch.toLowerCase()))
        )
        : consentCommitteeData;

    // CC Pagination calculations
    const ccTotalPages = Math.ceil(filteredCcData.length / ITEMS_PER_PAGE);
    const ccStartIndex = (ccCurrentPage - 1) * ITEMS_PER_PAGE;
    const paginatedCcData = filteredCcData.slice(ccStartIndex, ccStartIndex + ITEMS_PER_PAGE);

    const handleCcApplySearch = () => {
        setCcAppliedSearch(ccSearchQuery);
        setCcCurrentPage(1);
    };

    const handleCcClearSearch = () => {
        setCcSearchQuery('');
        setCcAppliedSearch('');
        setCcCurrentPage(1);
    };

    // Handle CC page change with scroll to top
    const handleCcPageChange = (page: number) => {
        setCcCurrentPage(page);
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
                            <h1 className="text-[24px] md:text-[40px] font-bold text-[#000000] tracking-tight leading-tight mb-4 md:mb-8">
                                Committees
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

                                {/* Content based on selected tab */}
                                {selectedTab === "List of CAC cases whose Revocation Order's are cancelled" ? (
                                    <div>
                                        <p className="text-[14px] text-gray-700 leading-relaxed mb-6">
                                            M.P.C. Board has revoked the consents of CAC industries who have not submitted Bank Guarantee after issuance of SCN for revocation of consent. Now, industries have submitted the Bank Guarantees and hence, CAC has decided to Cancel the Revocation of Consent of these industries. The list of CAC industries whose revocation orders cancelled (Total 10 Nos.) is attached.
                                        </p>
                                        <DocumentCard document={{ id: 1, title: selectedTab }} wide={false} />
                                    </div>
                                ) : selectedTab === "Procedure for Revocation of consent of CAC industries who have not submitted the stipulated Bank Guarantee" ? (
                                    <div>
                                        <div className="text-[14px] text-gray-700 leading-relaxed mb-6 space-y-4">
                                            <p>
                                                Some of the industries are not complying the consent conditions and violating the Environmental Laws. As per the decision in CAC, Board is granting Consent to Establish/Operate/renewal to the industry with the condition of submission of Bank Guarantee to ensure the time bound compliance of consent conditions. It has been reported by Regional Officer/SRO of the Board that most of the industries have not submitted the said Bank Guarantee in the stipulated time period. It was brought to the notice of Consent Appraisal Committee during the meeting held on 02.03.2012 and accordingly, Board has issued Show Cause Notices to 75 industries for revocation/ cancellation of consent granted for non submission of said bank guarantee and non-compliance of consent condition. Further, it was reviewed that 52 no. of industries out-off 75 have not submitted the BG as per condition prescribed in the consent and same was brought to the notice of Consent Appraisal Committee during the meeting held on 20.03.2012 and it was decided to revoke the consent of those industries who have not submitted BG and decided to give the period of 30 days for appeal before taking further action.
                                            </p>
                                            <p>
                                                Now, M.P.C. Board has started the procedure for revocation/cancellation of consent of these CAC industries who have not submitted Bank Guarantee after issuance of SCN for revocation of consent. The updated list of industries which have not submitted BG as on 30.03.2012 (Total-34 Nos.) is attached.
                                            </p>
                                        </div>
                                        <DocumentCard document={{ id: 1, title: selectedTab }} wide={false} />
                                    </div>
                                ) : selectedTab === "Show Cause Notice for Revoking the consents to the industries not submitted the stipulated Bank Guarantee" ? (
                                    <div>
                                        <div className="text-[14px] text-gray-700 leading-relaxed mb-6 space-y-4">
                                            <p>
                                                Some of the industries are not complying the consent conditions and violating the Environmental Laws. As per the decision in CAC, Board is granting Consent to Establish/Operate/renewal to the industry with the condition of submission of Bank Guarantee to ensure the time bound compliance of consent conditions. It has been reported by Regional Officer/SRO of the Board that most of the industries have not submitted the said Bank Guarantee in the stipulated time period. It was brought to the notice of Consent Appraisal Committee during the meeting held on 02.03.2012. Hence, it was decided to issue Show Cause Notices for revocation/ cancellation of consent granted for non submission of said bank guarantee and non-compliance of consent condition.
                                            </p>
                                            <p>
                                                Now, M.P.C. Board is issuing Show Cause Notice for revoking the consents granted to these industries which have not submitted Bank Guarantee as stipulated in the consent, in CAC category. The list of such industries is attached. All these industries are once again requested to submit the Bank Guarantee as stipulated in the consent granted to them on priority, to avoid legal action
                                            </p>
                                        </div>
                                        <DocumentCard document={{ id: 1, title: selectedTab }} wide={false} />
                                    </div>
                                ) : selectedTab === "CAC Industry database as on 05/07/2013" ? (
                                    <div>
                                        <div className="text-[14px] text-gray-700 leading-relaxed mb-6 space-y-4">
                                            <p className="font-semibold">
                                                The list of the industries under CAC consent granting authority is prepared and displayed for information of the entrepreneurs. Comments/suggestions are invited from the industries.
                                            </p>
                                            <p>
                                                The list of the industries where CAC with consent granting authority is attached. MPCB invites comments/suggestions/review from all the industries. Click here for list List
                                            </p>
                                            <p>The CAC category industries are defined by the Board as under:</p>
                                            <ul className="list-disc pl-6 space-y-1">
                                                <li>Red category industries with capital investment more than 100 crores.</li>
                                                <li>Orange category industries with capital investment more than 500 crores.</li>
                                                <li>Green category industries with capital investment more than 2000 crores.</li>
                                                <li>Infrastructure projects such as town ship's, I.T.Park, Highway, Irrigation Project, building and construction projects with capital investment more than 500 crores.</li>
                                            </ul>
                                            <p>The category of industry i.e CAC is mentioned in the consent issued to the industry.</p>
                                            <p>This list has been prepared based on the available data and records and it is possible that some industries may have been left out inadvertently in this list.</p>

                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <p className="font-semibold">Joint Director, PAMS Division</p>
                                                <p className="font-semibold">Maharashtra Pollution Control Board</p>
                                                <p>3rd floor, Kalpataru Point,</p>
                                                <p>Opp.Cine Planet Cinema</p>
                                                <p>Sion (E), Mumbai</p>
                                                <p>Phone/fax - 24044543</p>
                                                <p>email : cc-cacdesk[at]mpcb[dot]gov[dot]in</p>
                                            </div>

                                            <p>The industries falling in criteria for CAC industries given in para 2 above but whose names or Consents are NOT appearing in the list should immediately, get in touch with:</p>
                                            <p>The industries which have applied for Consent to Establish in the CAC category at the respective SRO/RO and whose name are not appearing in above list shall also submit the details of this submission to Joint Director (PAMS).</p>
                                            <p>The list of the applications in CAC authority, pending with the Board for decision is also attached which shows the status of application and the office where application is presently being processed (Click here for list). In case the name of industry that has submitted application is not reflected in this list, it should send details of the application like date of submission, office where application submitted, fees paid, DR No. and date etc. on above address (i.e. Joint Director, PAMS). This is for CAC Category of Industries only, at present.</p>
                                            <p>Board has already requested all CAC industries to provide their e-mail contracts for faster communications(see letter). It is once again requested to send email address of the industry contact as per the Communication.</p>
                                            <p>The agenda, minutes of CAC meetings are also hosted on MPCB Website since Aug, 2011 and the consent copies are also made available on website. Industries are requested to take note of the same and give us feedback with suggestion for improvement</p>
                                            <p>It has been decided to hold CAC meeting on the second Monday of every month. In case more applications are received, additional meetings can also be conducted. From the available data base, the consent renewal calendar from August to December, 2012 is also attached indicating the concerned Regional Officer of the Board. Click here for list List. The attention of industries is drawn to the clause in the consent granted to them about submission of renewal application at least before 60 days of the consent validity date. The industries are advised to submit the application as per this condition to ensure that there application is processed and a decision is taken well before the consent validity period expires. It has been decided that the consent applications of the industry in CAC consent granting authority list should be placed before the CAC at least one month before the consent expiry period.</p>
                                            <p>Board has initiated auto renewal based on self certification of compliance by the industry. Board has already issued detailed office order on the subject.</p>
                                        </div>
                                        <DocumentCard document={{ id: 1, title: selectedTab }} wide={false} />
                                    </div>
                                ) : selectedTab === "Consent Comittee Industry database as on 05/07/2013" ? (
                                    <div>
                                        <div className="text-[14px] text-gray-700 leading-relaxed mb-6 space-y-4">
                                            <p className="font-semibold">
                                                The list of the industries under Consent Committee consent granting authority is prepared and displayed for information of the entrepreneurs. Comments/suggestions are invited from the industries
                                            </p>
                                            <p>
                                                The list of the industries where CC with consent granting authority is attached. MPCB invites comments/suggestions/review from all the industries.
                                            </p>
                                            <p>The CC category industries are defined by the Board as under:</p>
                                            <ul className="list-disc pl-6 space-y-1">
                                                <li>Red category industries with capital investment above Rs.25 crores upto Rs.100 crores.</li>
                                                <li>Orange category industries with capital investment above Rs.200 crores upto Rs.500 crores.</li>
                                                <li>Green category industries with capital investment above Rs.1000 crores upto Rs.2000 crores.</li>
                                                <li>Infrastructure projects such as town ship's, I.T.Park, Highway, Irrigation Project, building and construction projects with capital investment above Rs.100 Crores upto Rs.500 crores.</li>
                                            </ul>
                                            <p>The category of industry i.e CC is mentioned in the consent issued to the industry.</p>
                                            <p>This list has been prepared based on the available data and records and it is possible that some industries may have been left out inadvertently in this list.</p>
                                            <p>The industries falling in criteria for CC industries given in para 2 above but whose names or Consents are NOT appearing in the list should immediately, get in touch with:</p>

                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <p className="font-semibold">Joint Director, PAMS Division</p>
                                                <p className="font-semibold">Maharashtra Pollution Control Board</p>
                                                <p>3rd floor, Kalpataru Point,</p>
                                                <p>Opp.Cine Planet Cinema</p>
                                                <p>Sion (E), Mumbai</p>
                                                <p>Phone/fax - 24044543</p>
                                                <p>email: cc-ccdesk@mpcb.gov.in</p>
                                            </div>

                                            <p>The agenda, minutes of CC meetings are also hosted on MPCB Website since April 2012 and the consent copies are also made available on website. Industries are requested to take note of the same and give us feedback with suggestion for improvement.</p>
                                            <p>The attention of industries is drawn to the clause in the consent granted to them about submission of renewal application at least before 60 days of the consent validity date. The industries are advised to submit the application as per this condition to ensure that there application is processed and a decision is taken well before the consent validity period expires.</p>
                                            <p>Board has initiated auto renewal based on self certification of compliance by the industry. Board has already issued detailed office order on the subject.</p>
                                        </div>
                                        <DocumentCard document={{ id: 1, title: selectedTab }} wide={false} />
                                    </div>
                                ) : selectedTab === "Consent Appraisal Committee" ? (
                                    <div>
                                        {/* Search Bar */}
                                        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-8">
                                            <div className="flex-1 flex items-center gap-3 h-[48px] px-5 rounded-full border border-gray-300 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <circle cx="11" cy="11" r="8" strokeWidth="2" />
                                                    <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                                <input
                                                    type="text"
                                                    placeholder="Search by Agenda, Minutes or Date..."
                                                    value={cacSearchQuery}
                                                    onChange={(e) => setCacSearchQuery(e.target.value)}
                                                    className="flex-1 bg-transparent text-[15px] text-gray-700 placeholder-gray-400 outline-none w-full"
                                                />
                                            </div>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={handleCacApplySearch}
                                                    className="flex-1 md:flex-none h-[48px] px-6 bg-[#0085E2] text-white text-[14px] font-medium rounded-full hover:bg-[#0070C0] transition-colors cursor-pointer shadow-[0_2px_8px_rgba(0,133,226,0.3)]"
                                                >
                                                    Apply
                                                </button>
                                                <button
                                                    onClick={handleCacClearSearch}
                                                    className="flex-1 md:flex-none h-[48px] px-6 bg-[#0085E2] text-white text-[14px] font-medium rounded-full hover:bg-[#0070C0] transition-colors cursor-pointer shadow-[0_2px_8px_rgba(0,133,226,0.3)]"
                                                >
                                                    Clear
                                                </button>
                                            </div>
                                        </div>

                                        {/* Results count */}
                                        <div className="mb-4 text-[14px] text-gray-500">
                                            Showing {cacStartIndex + 1}-{Math.min(cacStartIndex + ITEMS_PER_PAGE, filteredCacData.length)} of {filteredCacData.length} record{filteredCacData.length !== 1 ? 's' : ''}
                                            {cacAppliedSearch && <span> for "<span className="font-medium text-gray-700">{cacAppliedSearch}</span>"</span>}
                                        </div>

                                        {/* Table */}
                                        <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden mb-8 overflow-x-auto">
                                            <table className="w-full border-collapse min-w-[800px]">
                                                <thead>
                                                    <tr className="border-b border-gray-100">
                                                        <th className="py-6 px-4 text-left w-20">
                                                            <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[14px] font-semibold">
                                                                Sr. No.
                                                            </div>
                                                        </th>
                                                        <th className="py-6 px-2 text-left w-28">
                                                            <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[14px] font-semibold">
                                                                Date
                                                            </div>
                                                        </th>
                                                        <th className="py-6 px-2 text-left">
                                                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold">
                                                                Agenda
                                                            </div>
                                                        </th>
                                                        <th className="py-6 px-2 text-left">
                                                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold">
                                                                Minutes
                                                            </div>
                                                        </th>
                                                        <th className="py-6 px-4 text-left">
                                                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap">
                                                                Action Taken Report
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-50">
                                                    {paginatedCacData.map((row) => (
                                                        <tr key={row.srNo} className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="py-5 px-6 text-[13px] text-gray-500 text-center">{row.srNo}</td>
                                                            <td className="py-5 px-4 text-[13px] text-gray-700">{row.date}</td>
                                                            <td className="py-5 px-4 text-[13px] text-[#0085E2] hover:underline cursor-pointer">{row.agenda}</td>
                                                            <td className="py-5 px-4 text-[13px] text-[#0085E2] hover:underline cursor-pointer">{row.minutes}</td>
                                                            <td className="py-5 px-6 text-[13px] text-[#C17A00] hover:underline cursor-pointer">{row.actionReport}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Pagination */}
                                        {cacTotalPages > 1 && (
                                            <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-gray-100">
                                                {/* First Button */}
                                                {cacCurrentPage > 2 && (
                                                    <button
                                                        onClick={() => handleCacPageChange(1)}
                                                        className="px-3 py-2 text-[13px] text-gray-600 hover:text-[#0085E2] transition-colors cursor-pointer"
                                                    >
                                                        First
                                                    </button>
                                                )}

                                                {/* Previous Button */}
                                                {cacCurrentPage > 1 && (
                                                    <button
                                                        onClick={() => handleCacPageChange(Math.max(cacCurrentPage - 1, 1))}
                                                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer"
                                                    >
                                                        <ChevronLeft className="w-5 h-5" />
                                                    </button>
                                                )}

                                                {/* Page Numbers with Ellipsis */}
                                                {getPageNumbers(cacCurrentPage, cacTotalPages).map((page, index) => (
                                                    page === '...' ? (
                                                        <span key={`ellipsis-${index}`} className="px-2 text-gray-400">...</span>
                                                    ) : (
                                                        <button
                                                            key={page}
                                                            onClick={() => handleCacPageChange(page as number)}
                                                            className={`w-10 h-10 flex items-center justify-center rounded-full text-[14px] font-medium transition-colors cursor-pointer
                                                                ${cacCurrentPage === page
                                                                    ? 'bg-[#0085E2] text-white'
                                                                    : 'text-gray-600 hover:bg-gray-100'
                                                                }`}
                                                        >
                                                            {page}
                                                        </button>
                                                    )
                                                ))}

                                                {/* Next Button */}
                                                {cacCurrentPage < cacTotalPages && (
                                                    <button
                                                        onClick={() => handleCacPageChange(Math.min(cacCurrentPage + 1, cacTotalPages))}
                                                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer"
                                                    >
                                                        <ChevronRight className="w-5 h-5" />
                                                    </button>
                                                )}

                                                {/* Last Button */}
                                                {cacCurrentPage < cacTotalPages - 1 && (
                                                    <button
                                                        onClick={() => handleCacPageChange(cacTotalPages)}
                                                        className="px-3 py-2 text-[13px] text-gray-600 hover:text-[#0085E2] transition-colors cursor-pointer"
                                                    >
                                                        Last
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ) : selectedTab === "Consent Committee" ? (
                                    <div>
                                        {/* Search Bar */}
                                        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-8">
                                            <div className="flex-1 flex items-center gap-3 h-[48px] px-5 rounded-full border border-gray-300 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <circle cx="11" cy="11" r="8" strokeWidth="2" />
                                                    <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                                <input
                                                    type="text"
                                                    placeholder="Search by Minutes or Date..."
                                                    value={ccSearchQuery}
                                                    onChange={(e) => setCcSearchQuery(e.target.value)}
                                                    className="flex-1 bg-transparent text-[15px] text-gray-700 placeholder-gray-400 outline-none w-full"
                                                />
                                            </div>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={handleCcApplySearch}
                                                    className="flex-1 md:flex-none h-[48px] px-6 bg-[#0085E2] text-white text-[14px] font-medium rounded-full hover:bg-[#0070C0] transition-colors cursor-pointer shadow-[0_2px_8px_rgba(0,133,226,0.3)]"
                                                >
                                                    Apply
                                                </button>
                                                <button
                                                    onClick={handleCcClearSearch}
                                                    className="flex-1 md:flex-none h-[48px] px-6 bg-[#0085E2] text-white text-[14px] font-medium rounded-full hover:bg-[#0070C0] transition-colors cursor-pointer shadow-[0_2px_8px_rgba(0,133,226,0.3)]"
                                                >
                                                    Clear
                                                </button>
                                            </div>
                                        </div>

                                        {/* Results count */}
                                        <div className="mb-4 text-[14px] text-gray-500">
                                            Showing {ccStartIndex + 1}-{Math.min(ccStartIndex + ITEMS_PER_PAGE, filteredCcData.length)} of {filteredCcData.length} record{filteredCcData.length !== 1 ? 's' : ''}
                                            {ccAppliedSearch && <span> for "<span className="font-medium text-gray-700">{ccAppliedSearch}</span>"</span>}
                                        </div>

                                        {/* Table */}
                                        <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden mb-8 overflow-x-auto">
                                            <table className="w-full border-collapse min-w-[700px]">
                                                <thead>
                                                    <tr className="border-b border-gray-100 bg-gray-50/50">
                                                        <th className="py-6 px-6 text-left w-32">
                                                            <div className="text-[14px] font-bold text-gray-700">
                                                                Date
                                                            </div>
                                                        </th>
                                                        <th className="py-6 px-4 text-left w-32">
                                                            <div className="text-[14px] font-bold text-gray-700">
                                                                Agenda
                                                            </div>
                                                        </th>
                                                        <th className="py-6 px-4 text-left">
                                                            <div className="text-[14px] font-bold text-gray-700">
                                                                Minute
                                                            </div>
                                                        </th>
                                                        <th className="py-6 px-4 text-left w-32">
                                                            <div className="text-[14px] font-bold text-gray-700">
                                                                ATR
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {paginatedCcData.map((row) => (
                                                        <tr key={row.id} className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="py-5 px-6 text-[13px] text-gray-700 align-top">{row.date}</td>
                                                            <td className="py-5 px-4 text-[13px] text-gray-500 align-top">{row.agenda}</td>
                                                            <td className="py-5 px-4 align-top">
                                                                <div className="flex flex-col gap-2">
                                                                    {row.minutes.map((minute, idx) => (
                                                                        <span key={idx} className="text-[13px] text-[#0085E2] hover:underline cursor-pointer">
                                                                            {minute}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </td>
                                                            <td className="py-5 px-4 text-[13px] text-gray-500 align-top">{row.atr}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Pagination */}
                                        {ccTotalPages > 1 && (
                                            <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-gray-100">
                                                {/* First Button */}
                                                {ccCurrentPage > 2 && (
                                                    <button
                                                        onClick={() => handleCcPageChange(1)}
                                                        className="px-3 py-2 text-[13px] text-gray-600 hover:text-[#0085E2] transition-colors cursor-pointer"
                                                    >
                                                        First
                                                    </button>
                                                )}

                                                {/* Previous Button */}
                                                {ccCurrentPage > 1 && (
                                                    <button
                                                        onClick={() => handleCcPageChange(Math.max(ccCurrentPage - 1, 1))}
                                                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer"
                                                    >
                                                        <ChevronLeft className="w-5 h-5" />
                                                    </button>
                                                )}

                                                {/* Page Numbers with Ellipsis */}
                                                {getPageNumbers(ccCurrentPage, ccTotalPages).map((page, index) => (
                                                    page === '...' ? (
                                                        <span key={`ellipsis-${index}`} className="px-2 text-gray-400">...</span>
                                                    ) : (
                                                        <button
                                                            key={page}
                                                            onClick={() => handleCcPageChange(page as number)}
                                                            className={`w-10 h-10 flex items-center justify-center rounded-full text-[14px] font-medium transition-colors cursor-pointer
                                                                ${ccCurrentPage === page
                                                                    ? 'bg-[#0085E2] text-white'
                                                                    : 'text-gray-600 hover:bg-gray-100'
                                                                }`}
                                                        >
                                                            {page}
                                                        </button>
                                                    )
                                                ))}

                                                {/* Next Button */}
                                                {ccCurrentPage < ccTotalPages && (
                                                    <button
                                                        onClick={() => handleCcPageChange(Math.min(ccCurrentPage + 1, ccTotalPages))}
                                                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer"
                                                    >
                                                        <ChevronRight className="w-5 h-5" />
                                                    </button>
                                                )}

                                                {/* Last Button */}
                                                {ccCurrentPage < ccTotalPages - 1 && (
                                                    <button
                                                        onClick={() => handleCcPageChange(ccTotalPages)}
                                                        className="px-3 py-2 text-[13px] text-gray-600 hover:text-[#0085E2] transition-colors cursor-pointer"
                                                    >
                                                        Last
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div>
                                        <DocumentCard document={{ id: 1, title: selectedTab }} wide={false} />
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

export default Committees;
