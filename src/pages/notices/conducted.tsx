import { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const standingorders = "/assets/standingorders.svg";

// Year options for dropdown - dynamically populated
const yearOptions = [
    { value: "any", label: "Any" },
    { value: "2026", label: "2026" },
    { value: "2025", label: "2025" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
    { value: "2018", label: "2018" },
    { value: "2017", label: "2017" },
    { value: "2016", label: "2016" },
    { value: "2015", label: "2015" },
    { value: "2014", label: "2014" },
    { value: "2013", label: "2013" },
    { value: "2012", label: "2012" },
];

// Type definition for hearing data
interface HearingRow {
    srNo: number;
    nameOfIndustryAddress: string;
    executiveSummaryCRZ: string;
    dateTime: string;
    environmentalPublicHearingOrder: string;
    mom: string;
    remarksAdvertisement: string;
}

// Sample data for conducted hearings
const conductedHearingsData: HearingRow[] = [
    {
        srNo: 1,
        nameOfIndustryAddress: "M/s.Basant Agro Tech Pvt. Ltd., Gat. No.314,Kadholi-Paladhi Road ,Jalgaon",
        executiveSummaryCRZ: "Click Here",
        dateTime: "29 Dec 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 2,
        nameOfIndustryAddress: "Axis Realty",
        executiveSummaryCRZ: "Click Here",
        dateTime: "11 Dec 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 3,
        nameOfIndustryAddress: "Richa Realtors",
        executiveSummaryCRZ: "Click Here",
        dateTime: "11 Dec 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 4,
        nameOfIndustryAddress: "Buildarch Land Developers Pvt.Ltd.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "11 Dec 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 5,
        nameOfIndustryAddress: "Maharashtra State Road Development corporation",
        executiveSummaryCRZ: "Click Here",
        dateTime: "30 Nov 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 6,
        nameOfIndustryAddress: "M/s.Adlars BioEnergy Ltd.,Survey No.284-B,Subhashnagar,Mauje-Gurgan,Tal-Kalamb,Osmanabad.,at Factory Premises",
        executiveSummaryCRZ: "Click Here",
        dateTime: "23 Nov 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 7,
        nameOfIndustryAddress: "M/s.Natural Sugar and Allied Industries Ltd,Sai Nagar, Ranjani,Tal:Kalamb,Osmanabad. at Factory Premises",
        executiveSummaryCRZ: "Click Here",
        dateTime: "23 Nov 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 8,
        nameOfIndustryAddress: "Shree Chamunda Realtors, Plot bearing C.S. No. 1730 of Mahim Division, Keluskar Road, Dadar(W), Mumbai-400028",
        executiveSummaryCRZ: "Click Here",
        dateTime: "07 Nov 2012",
        environmentalPublicHearingOrder: "",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 9,
        nameOfIndustryAddress: "Matoshree Infrastuture Pvt. Ltd. Plot bearing No. 84, Shivaji Park Scheme, Property bearing CTS No. 1794 of Mahim Division, Dr. Madhukar B. Raut 400028, Mumbai",
        executiveSummaryCRZ: "Click Here",
        dateTime: "07 Nov 2012",
        environmentalPublicHearingOrder: "",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 10,
        nameOfIndustryAddress: "Earth Builders, Plot bearing C.S. No. 280, Malbar Hill Division, Walkeshwar, Mumbai",
        executiveSummaryCRZ: "Click Here",
        dateTime: "07 Nov 2012",
        environmentalPublicHearingOrder: "",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 11,
        nameOfIndustryAddress: "Sanghavi Gruha Nirman Pvt. Ltd., Final Plot No. 1274, TPS-IV, Mahim Division, G/South Ward,Hatiskar Marg, Prabhadevi, Mumbai",
        executiveSummaryCRZ: "Click Here",
        dateTime: "07 Nov 2012",
        environmentalPublicHearingOrder: "",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 12,
        nameOfIndustryAddress: "Karanja Termal & Logistics Pvt. Ltd., Karanja Creek, Chanje, Tal-Uran, Dist-Raigad",
        executiveSummaryCRZ: "",
        dateTime: "30 Oct 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 13,
        nameOfIndustryAddress: "Kukadi Sahakri Sakhar Karkhana Ltd., Pimpalgaon Pisa, Tal-Shrigonda, Dist-Ahmednagar",
        executiveSummaryCRZ: "",
        dateTime: "30 Oct 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 14,
        nameOfIndustryAddress: "Lokmangal Mauli Industries Ltd., Gat No. 67,68,69 & 80, Lohara(khurd, Tal-Lohara, Disd- Osmanabad",
        executiveSummaryCRZ: "",
        dateTime: "26 Oct 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 15,
        nameOfIndustryAddress: "National Highway Authority of India, Tal-Sangamner, Dist-Ahmednagar",
        executiveSummaryCRZ: "",
        dateTime: "18 Oct 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 16,
        nameOfIndustryAddress: "Maharashtra State Mining Corporation Ltd., for thier Marki-Zari-Jamani-Adkoli opencast coal at Tal--Zari Jamni, Dist-Yavatmal",
        executiveSummaryCRZ: "Click Here",
        dateTime: "10 Oct 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 17,
        nameOfIndustryAddress: "Western Coal Field Ltd., Wani North (Junad opencast coal mining project Expansion Project) at Tal-Wani, Dist-Yavatmal",
        executiveSummaryCRZ: "Click Here",
        dateTime: "10 Oct 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 18,
        nameOfIndustryAddress: "Chilai Dolomite Mine at village Chilai, Tal-Wani,Yawatmal",
        executiveSummaryCRZ: "Click Here",
        dateTime: "09 Oct 2012",
        environmentalPublicHearingOrder: "",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 19,
        nameOfIndustryAddress: "Vishakha Mines Minerals (Khnadala Limestone Mine) At Gut No. 63, Vill-Khandala(Go), Tal-Wani, Dist-Yavatmal",
        executiveSummaryCRZ: "Click Here",
        dateTime: "09 Oct 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 20,
        nameOfIndustryAddress: "JSW Infrastructure Ltd., Village Nandgaon, Dist-Thane.",
        executiveSummaryCRZ: "Click Here",
        dateTime: "07 Oct 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 21,
        nameOfIndustryAddress: "Akola Irrigation of Vidarbha Irrigation Development Corporation for construction of Uma Barrage Across the river Uma near village Mauje Rohna, Tahsil Murtizapur, Dist-Akola",
        executiveSummaryCRZ: "Click Here",
        dateTime: "06 Oct 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 22,
        nameOfIndustryAddress: "Fairdeal Constructions, C.S. 84 & 85 of Malabar Hill Division, Banganga Road, D Ward, Mumbai",
        executiveSummaryCRZ: "Click Here",
        dateTime: "06 Oct 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 23,
        nameOfIndustryAddress: "Kalpavruksha Developers, C.S. No.: 5/600 of Malabar Hill-Cumbala Hill division at August Kranti Marg, “D-Ward”, Mumbai",
        executiveSummaryCRZ: "Click Here",
        dateTime: "06 Oct 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 24,
        nameOfIndustryAddress: "Arindam Developers, C.S.1519 of Girgaum Division, Sitaram Patkar Marg, Mumbai",
        executiveSummaryCRZ: "Click Here",
        dateTime: "06 Oct 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 25,
        nameOfIndustryAddress: "Abhijeet New India Cement Private Limited (ANICPL) ,village Dewara & Kakarghat, Rajura Taluka, Chandrapur District,",
        executiveSummaryCRZ: "Click Here",
        dateTime: "04 Oct 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 26,
        nameOfIndustryAddress: "Bharat Petroleum Corporation Ltd., Mumbai Refinery, Mahul, Mumbao-400074",
        executiveSummaryCRZ: "",
        dateTime: "25 Sep 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 27,
        nameOfIndustryAddress: "WCL Kamptee Deep Open Cast Mine, Tal-Parseoni, Dist-Nagpur",
        executiveSummaryCRZ: "",
        dateTime: "12 Sep 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 28,
        nameOfIndustryAddress: "Viraj Profiles Ltd., Village Mann, Taluka Palghar, District Thane;",
        executiveSummaryCRZ: "Click Here",
        dateTime: "02 Sep 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 29,
        nameOfIndustryAddress: "MRKEnterprises, Plot Bearing No. C.S. No. 79, Colaba Division, Nathala Parekh Marg(Wood House Road), A ward of Mumbai",
        executiveSummaryCRZ: "Click Here",
        dateTime: "29 Aug 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 30,
        nameOfIndustryAddress: "Talati and Panthaky Associated Pvt. Ltd, C.S. No. 1 A/698, Malabar Hill Division, Bhulabhai Desai Marg, Mumbai",
        executiveSummaryCRZ: "Click Here",
        dateTime: "29 Aug 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 31,
        nameOfIndustryAddress: "Aashiyana Construction, Plot Bearing C.S.No.127 of Mahim Division, F.P. No.824, TPS IV, S.K.Bole Road, Dadar(W), Mumbai-400028",
        executiveSummaryCRZ: "Click Here",
        dateTime: "29 Aug 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 32,
        nameOfIndustryAddress: "Gangamai Industries & Construction Ltd. At- Najik Babulgaon, Tq-Shevgaon, Dist- Ahmednagar",
        executiveSummaryCRZ: "Click Here",
        dateTime: "17 Aug 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 33,
        nameOfIndustryAddress: "Atul Enterprises",
        executiveSummaryCRZ: "",
        dateTime: "16 Aug 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 34,
        nameOfIndustryAddress: "Bajaj Builders",
        executiveSummaryCRZ: "",
        dateTime: "16 Aug 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 35,
        nameOfIndustryAddress: "One up Developers",
        executiveSummaryCRZ: "",
        dateTime: "16 Aug 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 36,
        nameOfIndustryAddress: "M.I.Builders., C.S.No.979,980,985,4/997 Mahim Division, G/N Ward,Mahim,Mumbai-400016",
        executiveSummaryCRZ: "",
        dateTime: "21 July 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 37,
        nameOfIndustryAddress: "Suraj Estate Developers Pvt. Ltd., Plot bearing F.P. No.1181 & 1182,TPS IV of Mahim Division, in G/N Ward, Situated at 19th Kashinath Dhuru Road, Off Cadell Road, Dadar(W), Mumbai",
        executiveSummaryCRZ: "Click Here",
        dateTime: "21 July 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 38,
        nameOfIndustryAddress: "Goodwill Properties Pvt. LTD. F.P.No.1262-B,TPS:IV,Mahim Division,G/n Ward,New Prabhadevi Road, near tata press, Mumbai-400 025",
        executiveSummaryCRZ: "Click Here",
        dateTime: "21 July 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 39,
        nameOfIndustryAddress: "Mama and Sons, Plot bearing F.P.No.675 off TPS III, Mahim Division, Wanjawadi lane, Off L.J.Road, Mahim, Mumbai-400 016",
        executiveSummaryCRZ: "Click Here",
        dateTime: "21 July 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 40,
        nameOfIndustryAddress: "Tapi Irrigation Development Corporation, Jalgaon, GOM for lower Tapi Project, Padsale, Tal-Amalner,Dist:Jalgaon",
        executiveSummaryCRZ: "",
        dateTime: "13 July 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 41,
        nameOfIndustryAddress: "National Highway Authority of India(Ministry of Road Transport & Highways)for 2/4 Laning work of Khed – Sinner NH No.50",
        executiveSummaryCRZ: "",
        dateTime: "26 June 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 42,
        nameOfIndustryAddress: "Lanco Viddharbha Power Limted at village Mundwa, Pulai & Belgaon, Tal & Dist:Wardha",
        executiveSummaryCRZ: "",
        dateTime: "20 June 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 43,
        nameOfIndustryAddress: "National Highway Authority of India(Ministry of Road Transport & Highways)for 4 Laning work of Solapur-Hyderabad NH No.9",
        executiveSummaryCRZ: "",
        dateTime: "16 May 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "",
        remarksAdvertisement: ""
    },
    {
        srNo: 44,
        nameOfIndustryAddress: "Karan Sugars Pvt. Ltd.,Gat No.487/488 A/2, 488 A/3, Herwad, Tal-Shirol , Dist-Kolhapur",
        executiveSummaryCRZ: "",
        dateTime: "16 May 2012",
        environmentalPublicHearingOrder: "Click Here",
        mom: "Click Here",
        remarksAdvertisement: ""
    },
    {
        srNo: 45,
        nameOfIndustryAddress: "Godawari Marathawada Development Corporation for Krishna Marathwada Lift Irrigation Project, Osmanabad",
        executiveSummaryCRZ: "",
        dateTime: "03 Apr 2012",
        environmentalPublicHearingOrder: "",
        mom: "Click Here",
        remarksAdvertisement: ""
    }
];

const ITEMS_PER_PAGE = 10;

function Conducted() {
    const [selectedYear, setSelectedYear] = useState("2012");
    const [appliedYear, setAppliedYear] = useState("2012");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    // Filter data based on applied year
    const filteredData = appliedYear === "any"
        ? conductedHearingsData
        : conductedHearingsData.filter(row => row.dateTime.includes(appliedYear));

    // Pagination calculations
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Generate page numbers with ellipsis logic
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
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Handle year selection
    const handleYearSelect = (year: string) => {
        setSelectedYear(year);
        setIsDropdownOpen(false);
        setCurrentPage(1); // Reset to first page when year changes
    };

    // Handle apply button
    const handleApply = () => {
        setAppliedYear(selectedYear);
        setCurrentPage(1);
    };

    return (
        <div className="font-family-helvetica">
            {/* Top Banner Section */}
            <section className="w-full flex justify-center bg-white">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="relative w-full h-[200px] md:h-[250px] lg:h-[280px] rounded-t-[30px] md:rounded-t-[40px] lg:rounded-t-[48px] overflow-hidden">
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

                        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 md:px-6 mt-[-20px] md:mt-[-30px]">
                            <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-[#000000] tracking-tight leading-tight md:leading-none mb-4 md:mb-8">
                                Public Hearings - Conducted
                            </h1>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-white to-transparent z-40" />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full flex justify-center bg-white py-12">
                <div className="w-full max-w-[1282px] px-4">
                    {/* Year Filter Section */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        {/* Year Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center justify-between w-[150px] px-4 py-3 bg-white border border-gray-300 rounded-lg text-[14px] text-gray-700 hover:border-[#00A3FF] transition-colors cursor-pointer"
                            >
                                <span>{yearOptions.find(y => y.value === selectedYear)?.label || selectedYear}</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 mt-1 w-[150px] bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-[300px] overflow-y-auto">
                                    {yearOptions.map((option) => (
                                        <div
                                            key={option.value}
                                            onClick={() => handleYearSelect(option.value)}
                                            className={`px-4 py-2.5 text-[14px] cursor-pointer transition-colors
                                                ${selectedYear === option.value
                                                    ? 'bg-[#00A3FF]/10 text-[#00A3FF]'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            {option.label}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Apply Button */}
                        <button
                            onClick={handleApply}
                            className="px-8 py-3 bg-[#ffffff] border-1 text-[#00A3FF] text-[14px] font-medium rounded-xl hover:bg-[#00A3FF] hover:text-white transition-colors cursor-pointer"
                        >
                            Apply
                        </button>
                    </div>

                    {/* Desktop Table View */}
                    <div className="hidden lg:block border border-gray-200 rounded-[25px] overflow-hidden mb-8">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 w-16">Sr. No.</th>
                                    <th className="py-4 px-4 text-left text-[13px] font-semibold text-gray-700 min-w-[250px]">Name of Industry & Address</th>
                                    <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 w-[120px]">Executive Summary/CRZ Draft Notification</th>
                                    <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 w-[100px]">Date & Time</th>
                                    <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 w-[120px]">Environmental public hearing order</th>
                                    <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 w-[60px]">MOM</th>
                                    <th className="py-4 px-4 text-center text-[13px] font-semibold text-gray-700 w-[150px]">Remarks/Advertisement</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {paginatedData.length > 0 ? (
                                    paginatedData.map((row) => (
                                        <tr key={row.srNo} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-4 px-4 text-[13px] text-gray-600 align-top">{row.srNo}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 align-top">{row.nameOfIndustryAddress}</td>
                                            <td className="py-4 px-4 text-[13px] text-center align-top">
                                                {row.executiveSummaryCRZ && (
                                                    <a href="#" className="text-[#00A3FF] hover:underline">{row.executiveSummaryCRZ}</a>
                                                )}
                                            </td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 text-center align-top">{row.dateTime}</td>
                                            <td className="py-4 px-4 text-[13px] text-center align-top">
                                                {row.environmentalPublicHearingOrder && (
                                                    <a href="#" className="text-[#00A3FF] hover:underline">{row.environmentalPublicHearingOrder}</a>
                                                )}
                                            </td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 text-center align-top">{row.mom}</td>
                                            <td className="py-4 px-4 text-[13px] text-gray-700 text-center align-top">{row.remarksAdvertisement}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={7} className="py-12 text-center text-[16px] text-gray-500">
                                            No results found for {appliedYear === "any" ? "any year" : `year ${appliedYear}`}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Card View */}
                    <div className="lg:hidden space-y-4 mb-8">
                        {paginatedData.length > 0 ? (
                            paginatedData.map((row) => (
                                <div key={row.srNo} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
                                            #{row.srNo}
                                        </span>
                                        <span className="text-sm font-semibold text-gray-800 bg-blue-50 px-3 py-1 rounded-lg">
                                            {row.dateTime}
                                        </span>
                                    </div>

                                    <h3 className="text-[15px] font-bold text-gray-800 mb-4 leading-snug">
                                        {row.nameOfIndustryAddress}
                                    </h3>

                                    <div className="grid grid-cols-1 gap-3">
                                        {row.executiveSummaryCRZ && (
                                            <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-3">
                                                <span className="text-gray-500">Executive Summary/CRZ</span>
                                                <a href="#" className="text-[#0085E2] font-medium hover:underline flex items-center gap-1">
                                                    View <ChevronRight className="w-3.5 h-3.5" />
                                                </a>
                                            </div>
                                        )}
                                        {row.environmentalPublicHearingOrder && (
                                            <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-3">
                                                <span className="text-gray-500">Env. Hearing Order</span>
                                                <a href="#" className="text-[#0085E2] font-medium hover:underline flex items-center gap-1">
                                                    View <ChevronRight className="w-3.5 h-3.5" />
                                                </a>
                                            </div>
                                        )}
                                        {row.mom && (
                                            <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-3">
                                                <span className="text-gray-500">Minutes of Meeting</span>
                                                <span className="text-gray-700">{row.mom}</span>
                                            </div>
                                        )}
                                        {row.remarksAdvertisement && (
                                            <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-3">
                                                <span className="text-gray-500">Remarks</span>
                                                <span className="text-gray-700">{row.remarksAdvertisement}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                                No results found for {appliedYear === "any" ? "any year" : `year ${appliedYear}`}
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-gray-100">
                            {/* First Button */}
                            {currentPage > 2 && (
                                <button
                                    onClick={() => handlePageChange(1)}
                                    className="px-3 py-2 text-[13px] text-gray-600 hover:text-[#0085E2] transition-colors cursor-pointer"
                                >
                                    First
                                </button>
                            )}

                            {/* Previous Button */}
                            {currentPage > 1 && (
                                <button
                                    onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                            )}

                            {/* Page Numbers with Ellipsis */}
                            {getPageNumbers(currentPage, totalPages).map((page, index) => (
                                page === '...' ? (
                                    <span key={`ellipsis-${index}`} className="px-2 text-gray-400">...</span>
                                ) : (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page as number)}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full text-[14px] font-medium transition-colors cursor-pointer
                                            ${currentPage === page
                                                ? 'bg-[#0085E2] text-white'
                                                : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                )
                            ))}

                            {/* Next Button */}
                            {currentPage < totalPages && (
                                <button
                                    onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#0085E2] hover:text-[#0085E2] transition-colors cursor-pointer"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            )}

                            {/* Last Button */}
                            {currentPage < totalPages - 1 && (
                                <button
                                    onClick={() => handlePageChange(totalPages)}
                                    className="px-3 py-2 text-[13px] text-gray-600 hover:text-[#0085E2] transition-colors cursor-pointer"
                                >
                                    Last
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Conducted;
