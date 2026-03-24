import PageBanner from '../../../components/PageBanner';

interface StatisticalData {
    srNo: string;
    region: string;
    col1: string; // filed
    col2: string; // convicted / decided favour
    col3: string; // dismissed / decided against
    col4: string; // pending
}

const complaintsData: StatisticalData[] = [
    { srNo: "1", region: "Mumbai", col1: "64", col2: "14", col3: "45", col4: "05" },
    { srNo: "2", region: "Navi Mumbai", col1: "48", col2: "11", col3: "10", col4: "27" },
    { srNo: "3", region: "Thane", col1: "29", col2: "06", col3: "14", col4: "09" },
    { srNo: "4", region: "Nashik", col1: "29", col2: "07", col3: "16", col4: "06" },
    { srNo: "5", region: "Pune", col1: "47 (Annexure 1)", col2: "09", col3: "18", col4: "20" },
    { srNo: "6", region: "Kolhapur", col1: "36", col2: "03", col3: "14", col4: "19" },
    { srNo: "7", region: "Raigad", col1: "36", col2: "08", col3: "10", col4: "18" },
    { srNo: "8", region: "Aurangabad", col1: "26", col2: "07", col3: "07", col4: "12" },
    { srNo: "9", region: "Nagpur", col1: "29", col2: "01", col3: "15", col4: "13" },
    { srNo: "10", region: "Amravati", col1: "05", col2: "01", col3: "04", col4: "--" },
    { srNo: "11", region: "Kalyan", col1: "45", col2: "16", col3: "24", col4: "5" },
    { srNo: "12", region: "Chandrapur", col1: "--", col2: "--", col3: "--", col4: "--" },
    { srNo: "TOTAL", region: "", col1: "394", col2: "83", col3: "177", col4: "134" }
];

const applicationsData: StatisticalData[] = [
    { srNo: "1", region: "Mumbai", col1: "15", col2: "7", col3: "8", col4: "-" },
    { srNo: "2", region: "Navi Mumbai", col1: "33", col2: "16", col3: "17", col4: "-" },
    { srNo: "3", region: "Thane", col1: "31", col2: "20", col3: "11", col4: "-" },
    { srNo: "4", region: "Nashik", col1: "3", col2: "2", col3: "1", col4: "-" },
    { srNo: "5", region: "Pune", col1: "9", col2: "5", col3: "4", col4: "-" },
    { srNo: "6", region: "Kolhapur", col1: "11", col2: "11", col3: "-", col4: "-" },
    { srNo: "7", region: "Raigad", col1: "19", col2: "11", col3: "8", col4: "-" },
    { srNo: "8", region: "Aurangabad", col1: "15", col2: "12", col3: "3", col4: "-" },
    { srNo: "9", region: "Nagpur", col1: "3", col2: "2", col3: "1", col4: "-" },
    { srNo: "10", region: "Amravati", col1: "1", col2: "1", col3: "-", col4: "-" },
    { srNo: "11", region: "Kalyan", col1: "-", col2: "-", col3: "-", col4: "-" },
    { srNo: "12", region: "Chandrapur", col1: "--", col2: "--", col3: "--", col4: "--" },
    { srNo: "TOTAL", region: "", col1: "140", col2: "87", col3: "53", col4: "--" }
];

const airActComplaintsData: StatisticalData[] = [
    { srNo: "1", region: "Mumbai", col1: "53", col2: "49", col3: "4", col4: "-" },
    { srNo: "2", region: "Thane", col1: "34", col2: "27", col3: "7", col4: "-" },
    { srNo: "3", region: "Navi Mumbai", col1: "29", col2: "12", col3: "17", col4: "-" },
    { srNo: "4", region: "Kalyan", col1: "17", col2: "16", col3: "1", col4: "-" },
    { srNo: "5", region: "Raigad", col1: "13", col2: "10", col3: "3", col4: "-" },
    { srNo: "6", region: "Kolhapur", col1: "-", col2: "-", col3: "-", col4: "-" },
    { srNo: "7", region: "Pune", col1: "-", col2: "-", col3: "-", col4: "-" },
    { srNo: "8", region: "Aurangabad", col1: "-", col2: "-", col3: "-", col4: "-" },
    { srNo: "9", region: "Nashik", col1: "-", col2: "-", col3: "-", col4: "-" },
    { srNo: "10", region: "Amravati", col1: "-", col2: "-", col3: "-", col4: "-" },
    { srNo: "11", region: "Nagpur", col1: "-", col2: "-", col3: "-", col4: "-" },
    { srNo: "12", region: "Chandrapur", col1: "--", col2: "--", col3: "--", col4: "--" },
    { srNo: "TOTAL", region: "", col1: "146", col2: "114", col3: "32", col4: "-" }
];

const airActApplicationsData: StatisticalData[] = [
    { srNo: "1", region: "Mumbai", col1: "2", col2: "1", col3: "1", col4: "-" },
    { srNo: "2", region: "Thane", col1: "1", col2: "-", col3: "1", col4: "-" },
    { srNo: "3", region: "Navi Mumbai", col1: "-", col2: "-", col3: "-", col4: "-" },
    { srNo: "4", region: "Kalyan", col1: "-", col2: "-", col3: "-", col4: "-" },
    { srNo: "5", region: "Raigad", col1: "-", col2: "-", col3: "-", col4: "-" },
    { srNo: "6", region: "Kolhapur", col1: "-", col2: "-", col3: "-", col4: "-" },
    { srNo: "7", region: "Pune", col1: "-", col2: "-", col3: "-", col4: "-" },
    { srNo: "8", region: "Aurangabad", col1: "-", col2: "-", col3: "-", col4: "-" },
    { srNo: "9", region: "Nashik", col1: "-", col2: "-", col3: "-", col4: "-" },
    { srNo: "10", region: "Amravati", col1: "-", col2: "-", col3: "-", col4: "-" },
    { srNo: "11", region: "Nagpur", col1: "-", col2: "-", col3: "-", col4: "-" },
    { srNo: "12", region: "Chandrapur", col1: "--", col2: "--", col3: "--", col4: "--" },
    { srNo: "TOTAL", region: "", col1: "3", col2: "1", col3: "2", col4: "-" }
];

const StatisticalDetails2024 = () => {
    return (
        <>
            <PageBanner image="/assets/standingorders.svg" title="Statistical Details 2024" />
            <section className="w-full flex justify-center py-8 md:py-16 bg-white font-family-helvetica">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="bg-white rounded-[24px] border border-gray-100 p-4 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] min-h-[400px]">

                        <h2 className="text-[18px] md:text-[20px] font-bold text-gray-800 mb-2 uppercase leading-snug">
                            STATISTICAL INFORMATION
                        </h2>
                        <div className="w-full h-1 bg-[#85A32B] mb-8" />

                        {/* Table A */}
                        <div className="mb-12">
                            <div className="text-center mb-6">
                                <h3 className="text-[15px] font-bold text-gray-800 mb-1 leading-relaxed">
                                    (A) Complaints filed under Sections 43, 44 read with Section 25 & 26 of the
                                    <br />
                                    <span className="underline">Water (Prevention & Control of Pollution) Act, 1974 upto 31/10/2024</span>
                                </h3>
                            </div>

                            <div className="border border-gray-200 rounded-[20px] overflow-hidden w-full">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-300 bg-gray-200">
                                            <th className="py-4 px-4 text-center border-r border-gray-300 w-[8%] text-[13px] font-bold text-gray-800">
                                                Sr.No.
                                            </th>
                                            <th className="py-4 px-4 text-center border-r border-gray-300 w-[20%] text-[13px] font-bold text-gray-800">
                                                Region
                                            </th>
                                            <th className="py-4 px-2 text-center border-r border-gray-300 w-[18%] text-[13px] font-bold text-gray-800">
                                                No. of cases filed
                                            </th>
                                            <th className="py-4 px-2 text-center border-r border-gray-300 w-[18%] text-[13px] font-bold text-gray-800">
                                                No. of cases convicted
                                            </th>
                                            <th className="py-4 px-2 text-center border-r border-gray-300 w-[18%] text-[13px] font-bold text-gray-800">
                                                No. of cases dismissed
                                            </th>
                                            <th className="py-4 px-2 text-center w-[18%] text-[13px] font-bold text-gray-800">
                                                No. of cases pending.
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {complaintsData.map((row, idx) => (
                                            <tr key={idx} className={`border-b border-gray-300 ${row.srNo === 'TOTAL' ? 'bg-white font-bold border-t-2 border-black' : 'hover:bg-gray-50'}`}>
                                                <td className="py-3 px-4 text-center border-r border-gray-300 text-[13px] text-gray-800">
                                                    {row.srNo}
                                                </td>
                                                <td className={`py-3 px-4 border-r border-gray-300 text-[13px] text-gray-800 ${row.srNo === 'TOTAL' ? 'text-right pr-8' : 'text-left'}`}>
                                                    {row.srNo === 'TOTAL' ? 'TOTAL' : row.region}
                                                </td>
                                                <td className="py-3 px-4 text-center border-r border-gray-300 text-[13px] text-gray-800">
                                                    {row.col1}
                                                </td>
                                                <td className="py-3 px-4 text-center border-r border-gray-300 text-[13px] text-gray-800">
                                                    {row.col2}
                                                </td>
                                                <td className="py-3 px-4 text-center border-r border-gray-300 text-[13px] text-gray-800">
                                                    {row.col3}
                                                </td>
                                                <td className="py-3 px-4 text-center text-[13px] text-gray-800">
                                                    {row.col4}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table B */}
                        <div>
                            <div className="text-center mb-6">
                                <h3 className="text-[15px] font-bold text-gray-800 mb-1 leading-relaxed">
                                    (B) Applications filed under Sub-Section (1) of Section 33 filed under
                                    <br />
                                    <span className="underline">Water (Prevention & Control of Pollution) Act, 1974 upto 31/10/2024</span>
                                </h3>
                            </div>

                            <div className="border border-gray-200 rounded-[20px] overflow-hidden w-full">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-300 bg-gray-200">
                                            <th className="py-4 px-4 text-center border-r border-gray-300 w-[8%] text-[13px] font-bold text-gray-800">
                                                Sr.No.
                                            </th>
                                            <th className="py-4 px-4 text-center border-r border-gray-300 w-[20%] text-[13px] font-bold text-gray-800">
                                                Region
                                            </th>
                                            <th className="py-4 px-2 text-center border-r border-gray-300 w-[18%] text-[13px] font-bold text-gray-800">
                                                No.of applications filed
                                            </th>
                                            <th className="py-4 px-2 text-center border-r border-gray-300 w-[18%] text-[13px] font-bold text-gray-800">
                                                No. of applications decided in favour of the Board
                                            </th>
                                            <th className="py-4 px-2 text-center border-r border-gray-300 w-[18%] text-[13px] font-bold text-gray-800">
                                                No.of applications decided against the Board
                                            </th>
                                            <th className="py-4 px-2 text-center w-[18%] text-[13px] font-bold text-gray-800">
                                                No.of applications pending.
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {applicationsData.map((row, idx) => (
                                            <tr key={idx} className={`border-b border-gray-300 ${row.srNo === 'TOTAL' ? 'bg-white font-bold border-t-2 border-black' : 'hover:bg-gray-50'}`}>
                                                <td className="py-3 px-4 text-center border-r border-gray-300 text-[13px] text-gray-800">
                                                    {row.srNo}
                                                </td>
                                                <td className={`py-3 px-4 border-r border-gray-300 text-[13px] text-gray-800 ${row.srNo === 'TOTAL' ? 'text-right pr-8' : 'text-left'}`}>
                                                    {row.srNo === 'TOTAL' ? 'TOTAL' : row.region}
                                                </td>
                                                <td className="py-3 px-4 text-center border-r border-gray-300 text-[13px] text-gray-800">
                                                    {row.col1}
                                                </td>
                                                <td className="py-3 px-4 text-center border-r border-gray-300 text-[13px] text-gray-800">
                                                    {row.col2}
                                                </td>
                                                <td className="py-3 px-4 text-center border-r border-gray-300 text-[13px] text-gray-800">
                                                    {row.col3}
                                                </td>
                                                <td className="py-3 px-4 text-center text-[13px] text-gray-800">
                                                    {row.col4}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table C */}
                        <div className="mb-12">
                            <div className="text-center mb-6">
                                <h3 className="text-[15px] font-bold text-gray-800 mb-1 leading-relaxed">
                                    (C) Complaints filed under Section 37 read with Section 21 of the
                                    <br />
                                    <span className="underline">Air (Prevention & Control of Pollution) Act, 1981 upto 31/10/2024</span>
                                </h3>
                            </div>

                            <div className="border border-gray-200 rounded-[20px] overflow-hidden w-full">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-300 bg-gray-200">
                                            <th className="py-4 px-4 text-center border-r border-gray-300 w-[8%] text-[13px] font-bold text-gray-800">
                                                Sr.No.
                                            </th>
                                            <th className="py-4 px-4 text-center border-r border-gray-300 w-[20%] text-[13px] font-bold text-gray-800">
                                                Region
                                            </th>
                                            <th className="py-4 px-2 text-center border-r border-gray-300 w-[18%] text-[13px] font-bold text-gray-800">
                                                No. of cases filed
                                            </th>
                                            <th className="py-4 px-2 text-center border-r border-gray-300 w-[18%] text-[13px] font-bold text-gray-800">
                                                No. of cases convicted
                                            </th>
                                            <th className="py-4 px-2 text-center border-r border-gray-300 w-[18%] text-[13px] font-bold text-gray-800">
                                                No. of cases dismissed
                                            </th>
                                            <th className="py-4 px-2 text-center w-[18%] text-[13px] font-bold text-gray-800">
                                                No. of cases pending.
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {airActComplaintsData.map((row, idx) => (
                                            <tr key={idx} className={`border-b border-gray-300 ${row.srNo === 'TOTAL' ? 'bg-white font-bold border-t-2 border-black' : 'hover:bg-gray-50'}`}>
                                                <td className="py-3 px-4 text-center border-r border-gray-300 text-[13px] text-gray-800">
                                                    {row.srNo}
                                                </td>
                                                <td className={`py-3 px-4 border-r border-gray-300 text-[13px] text-gray-800 ${row.srNo === 'TOTAL' ? 'text-right pr-8' : 'text-left'}`}>
                                                    {row.srNo === 'TOTAL' ? 'TOTAL' : row.region}
                                                </td>
                                                <td className="py-3 px-4 text-center border-r border-gray-300 text-[13px] text-gray-800">
                                                    {row.col1}
                                                </td>
                                                <td className="py-3 px-4 text-center border-r border-gray-300 text-[13px] text-gray-800">
                                                    {row.col2}
                                                </td>
                                                <td className="py-3 px-4 text-center border-r border-gray-300 text-[13px] text-gray-800">
                                                    {row.col3}
                                                </td>
                                                <td className="py-3 px-4 text-center text-[13px] text-gray-800">
                                                    {row.col4}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table D */}
                        <div>
                            <div className="text-center mb-6">
                                <h3 className="text-[15px] font-bold text-gray-800 mb-1 leading-relaxed">
                                    (D) Applications filed under Section 22A of the Air
                                    <br />
                                    <span className="underline">(Prevention & Control of Pollution) Act, 1981 upto 31/10/2024</span>
                                </h3>
                            </div>

                            <div className="border border-gray-200 rounded-[20px] overflow-hidden w-full">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-300 bg-gray-200">
                                            <th className="py-4 px-4 text-center border-r border-gray-300 w-[8%] text-[13px] font-bold text-gray-800">
                                                Sr.No.
                                            </th>
                                            <th className="py-4 px-4 text-center border-r border-gray-300 w-[20%] text-[13px] font-bold text-gray-800">
                                                Region
                                            </th>
                                            <th className="py-4 px-2 text-center border-r border-gray-300 w-[18%] text-[13px] font-bold text-gray-800">
                                                No.of applications filed
                                            </th>
                                            <th className="py-4 px-2 text-center border-r border-gray-300 w-[18%] text-[13px] font-bold text-gray-800">
                                                No. of applications decided in favour of the Board
                                            </th>
                                            <th className="py-4 px-2 text-center border-r border-gray-300 w-[18%] text-[13px] font-bold text-gray-800">
                                                No.of applications decided against the Board
                                            </th>
                                            <th className="py-4 px-2 text-center w-[18%] text-[13px] font-bold text-gray-800">
                                                No.of applications pending.
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {airActApplicationsData.map((row, idx) => (
                                            <tr key={idx} className={`border-b border-gray-300 ${row.srNo === 'TOTAL' ? 'bg-white font-bold border-t-2 border-black' : 'hover:bg-gray-50'}`}>
                                                <td className="py-3 px-4 text-center border-r border-gray-300 text-[13px] text-gray-800">
                                                    {row.srNo}
                                                </td>
                                                <td className={`py-3 px-4 border-r border-gray-300 text-[13px] text-gray-800 ${row.srNo === 'TOTAL' ? 'text-right pr-8' : 'text-left'}`}>
                                                    {row.srNo === 'TOTAL' ? 'TOTAL' : row.region}
                                                </td>
                                                <td className="py-3 px-4 text-center border-r border-gray-300 text-[13px] text-gray-800">
                                                    {row.col1}
                                                </td>
                                                <td className="py-3 px-4 text-center border-r border-gray-300 text-[13px] text-gray-800">
                                                    {row.col2}
                                                </td>
                                                <td className="py-3 px-4 text-center border-r border-gray-300 text-[13px] text-gray-800">
                                                    {row.col3}
                                                </td>
                                                <td className="py-3 px-4 text-center text-[13px] text-gray-800">
                                                    {row.col4}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Status of Court Cases Table */}
                        <div>
                            <div className="text-center mb-6">
                                <h3 className="text-[15px] font-bold text-gray-800 mb-1 leading-relaxed uppercase">
                                    STATUS OF COURT CASES AS ON 31/10/2024
                                </h3>
                            </div>

                            <div className="border border-gray-200 rounded-[20px] overflow-hidden w-full overflow-x-auto">
                                <table className="w-full border-collapse min-w-[1500px]">
                                    <thead>
                                        {/* Row 1 */}
                                        <tr className="border-b border-gray-300 bg-gray-200">
                                            <th rowSpan={4} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800 whitespace-nowrap">
                                                Sr No.
                                            </th>
                                            <th rowSpan={4} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800 min-w-[120px]">
                                                Name of the Board
                                            </th>
                                            <th colSpan={10} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800 border-b border-gray-300">
                                                TOTAL DECISION UNDER WATER ACT
                                            </th>
                                            <th colSpan={7} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800 border-b border-gray-300">
                                                TOTAL DECISION UNDER AIR ACT
                                            </th>
                                            <th colSpan={3} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800 border-b border-gray-300">
                                                DISMISSED WITHDRAWN
                                            </th>
                                            <th rowSpan={4} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800 w-[80px]">
                                                Total no. of cases pending under both act
                                            </th>
                                            <th rowSpan={4} className="py-2 px-2 text-center text-[11px] font-bold text-gray-800 w-[80px]">
                                                Remarks/Inf. Received on
                                            </th>
                                        </tr>
                                        {/* Row 2 */}
                                        <tr className="border-b border-gray-300 bg-gray-200">
                                            {/* Water Act Subheaders */}
                                            <th colSpan={3} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800 border-b border-gray-300">
                                                Cases filed
                                            </th>
                                            <th rowSpan={3} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                No. of decision
                                            </th>
                                            <th rowSpan={3} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                In favour of the Board
                                            </th>
                                            <th rowSpan={3} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                Against the Board
                                            </th>
                                            <th colSpan={3} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800 border-b border-gray-300">
                                                Conviction
                                            </th>
                                            <th rowSpan={3} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                No.of cases pending
                                            </th>

                                            {/* Air Act Subheaders */}
                                            <th rowSpan={3} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                No.of decision
                                            </th>
                                            <th rowSpan={3} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                In favour of the Board
                                            </th>
                                            <th rowSpan={3} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                Against the Board
                                            </th>
                                            <th colSpan={3} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800 border-b border-gray-300">
                                                Conviction
                                            </th>
                                            <th rowSpan={3} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                No.of cases pending
                                            </th>

                                            {/* Dismissed/Withdrawn Subheaders */}
                                            <th rowSpan={3} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                Water Act
                                            </th>
                                            <th rowSpan={3} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                Air Act
                                            </th>
                                            <th rowSpan={3} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                Total No. of decision under both acts
                                            </th>
                                        </tr>
                                        {/* Row 3 */}
                                        <tr className="border-b border-gray-300 bg-gray-200">
                                            {/* Water Act - Cases Filed details */}
                                            <th rowSpan={2} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                Under Water Act
                                            </th>
                                            <th rowSpan={2} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                Under Air Act
                                            </th>
                                            <th rowSpan={2} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                Total Cases under both Act
                                            </th>
                                            {/* Water Act - Conviction details */}
                                            <th rowSpan={2} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                Imprisonment
                                            </th>
                                            <th rowSpan={2} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                Fine
                                            </th>
                                            <th rowSpan={2} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                Restrain order
                                            </th>
                                            {/* Air Act - Conviction details */}
                                            <th rowSpan={2} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                Imprisonment
                                            </th>
                                            <th rowSpan={2} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                Fine
                                            </th>
                                            <th rowSpan={2} className="py-2 px-2 text-center border-r border-gray-300 text-[11px] font-bold text-gray-800">
                                                Restrain order
                                            </th>
                                        </tr>
                                        {/* Row 4 - Just placeholders for rowSpans if necessary, but structure mainly covered above. 
                                            Actually, I missed the numbering row. Let's add the numbering row as Row 5.
                                            But since I used rowSpan, the previous rows cover the space.
                                            The numbering row should be a distinct row.
                                        */}
                                        <tr className="border-b border-gray-300 bg-gray-200">
                                            {/* This empty row is consumed by rowSpans above. 
                                            Wait, the rowSpans above (4 and 3) imply there are 4 rows in total excluding the numbering row?
                                            Let's re-eval.
                                            Row 1: Sr No (RS4), Name(RS4), Water(CS10), Air(CS7), Dismissed(CS3), Pending(RS4), Remarks(RS4).
                                            Row 2: Cases filed(CS3), Decision(RS3), Favour(RS3), Against(RS3), Conviction(CS3), Pending(RS3) | Decision, Favour, Against, Conviction(CS3), Pending | Water, Air, Total
                                            Row 3: Water, Air, Total | Imprisonment, Fine, Restrain | Imprisonment, Fine, Restrain
                                            
                                            Wait, I need one more row for the numbering? Or is numbering part of the data?
                                            The image has numbering 1-24 as a header row.
                                            So I need to adjust rowSpans. 
                                            Let's say Total rows = 5 (Main Header + 2 Sub Headers + 1 Sub Sub Header + Numbering).
                                            My current structure has 3 rows defined above.
                                            Row 1 RS=4 covers: Row 1, Row 2, Row 3, Row 4.
                                            So I can add the Numbering row as Row 5? No, RS=4 consumes 4 rows.
                                            Let's make RS=3 for top level items, and then add a numbering row separately.
                                            
                                            Let's adjust:
                                            Row 1 (Top): Sr No(RS4), Name(RS4). WaterTitle(CS10). AirTitle(CS7). DismissedTitle(CS3). Pending(RS4). Remarks(RS4).
                                            Row 2: Cases(CS3). Dec(RS2). Fav(RS2). Ag(RS2). Conv(CS3). Pend(RS2). ...
                                            Row 3: Water, Air, Total. Imp, Fine, Rest. ...
                                            Row 4: Numbers 1-24.
                                            
                                            Okay, let's try RS=3 for the deep ones (Sr No, Name, Pending, Remarks).
                                            WaterTitle is Row 1.
                                            Cases filed is Row 2.
                                            Water/Air/Total is Row 3.
                                            1,2,3 is Row 4.
                                            
                                            So:
                                            Row 1: Sr No (RS3), Name (RS3) ...
                                            Row 2: Cases Filed (CS3) ... No Decision (RS2) ...
                                            Row 3: Water, Air, Total ...
                                            Row 4: The numbers.
                                            
                                            Let's correct the ReplacementContent below.
                                        */}
                                        </tr>
                                        <tr className="border-b border-gray-300 bg-gray-100">
                                            {Array.from({ length: 24 }).map((_, i) => (
                                                <th key={i} className="py-1 px-1 text-center border-r border-gray-300 text-[10px] text-gray-600">
                                                    {i + 1}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-300 hover:bg-gray-50">
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">1</td>
                                            <td className="py-2 px-2 text-left border-r border-gray-300 text-[12px] text-gray-800 font-medium">Maharashtra</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">534</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">149</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">683</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">400</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">170</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">230</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">83</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">83</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">87</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">134</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">149</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">115</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">34</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">114</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">114</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">1</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">0</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">230</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">34</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">264</td>
                                            <td className="py-2 px-2 text-center border-r border-gray-300 text-[12px] text-gray-800">132</td>
                                            <td className="py-2 px-2 text-center text-[12px] text-gray-800">0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div >
            </section >
        </>
    );
};

export default StatisticalDetails2024;
