import PageBanner from '../../../components/PageBanner';

interface ActionStatusData {
    srNo: string;
    region: string;
    filed: string;
    convicted: string;
    dismissed: string;
    pending: string;
}

interface ApplicationStatusData {
    srNo: string;
    region: string;
    filed: string;
    favour: string;
    against: string;
    pending: string;
}

const actionStatusData: ActionStatusData[] = [
    { srNo: "1", region: "Mumbai", filed: "64", convicted: "14", dismissed: "45", pending: "05" },
    { srNo: "2", region: "Navi Mumbai", filed: "24", convicted: "11", dismissed: "10", pending: "03" },
    { srNo: "3", region: "Thane", filed: "27", convicted: "06", dismissed: "14", pending: "07" },
    { srNo: "4", region: "Nashik", filed: "29", convicted: "07", dismissed: "16", pending: "06" },
    { srNo: "5", region: "Pune", filed: "45", convicted: "09", dismissed: "18", pending: "18" },
    { srNo: "6", region: "Kolhapur", filed: "33", convicted: "03", dismissed: "14", pending: "16" },
    { srNo: "7", region: "Raigad", filed: "36", convicted: "08", dismissed: "10", pending: "18" },
    { srNo: "8", region: "Aurangabad", filed: "26", convicted: "07", dismissed: "07", pending: "12" },
    { srNo: "9", region: "Nagpur", filed: "29", convicted: "01", dismissed: "15", pending: "13" },
    { srNo: "10", region: "Amravati", filed: "05", convicted: "01", dismissed: "04", pending: "-" },
    { srNo: "11", region: "Kalyan", filed: "45", convicted: "16", dismissed: "24", pending: "05" },
    { srNo: "12", region: "Chandrapur", filed: "-", convicted: "-", dismissed: "-", pending: "-" },
    { srNo: "Total", region: "", filed: "363", convicted: "83", dismissed: "177", pending: "103" }
];

const applicationStatusData: ApplicationStatusData[] = [
    { srNo: "1", region: "Mumbai", filed: "15", favour: "7", against: "8", pending: "-" },
    { srNo: "2", region: "Navi Mumbai", filed: "33", favour: "16", against: "17", pending: "-" },
    { srNo: "3", region: "Thane", filed: "31", favour: "20", against: "11", pending: "-" },
    { srNo: "4", region: "Nashik", filed: "3", favour: "2", against: "1", pending: "-" },
    { srNo: "5", region: "Pune", filed: "9", favour: "5", against: "4", pending: "-" },
    { srNo: "6", region: "Kolhapur", filed: "11", favour: "11", against: "-", pending: "-" },
    { srNo: "7", region: "Raigad", filed: "19", favour: "11", against: "8", pending: "-" },
    { srNo: "8", region: "Aurangabad", filed: "15", favour: "12", against: "3", pending: "-" },
    { srNo: "9", region: "Nagpur", filed: "3", favour: "2", against: "1", pending: "-" },
    { srNo: "10", region: "Amravati", filed: "1", favour: "1", against: "-", pending: "-" },
    { srNo: "11", region: "Kalyan", filed: "-", favour: "-", against: "-", pending: "-" },
    { srNo: "12", region: "Chandrapur", filed: "-", favour: "-", against: "-", pending: "-" },
    { srNo: "Total", region: "", filed: "140", favour: "87", against: "53", pending: "-" }
];

const complaintsAirActData: ActionStatusData[] = [
    { srNo: "1", region: "Mumbai", filed: "54", convicted: "49", dismissed: "4", pending: "-" },
    { srNo: "2", region: "Thane", filed: "34", convicted: "27", dismissed: "7", pending: "-" },
    { srNo: "3", region: "Navi Mumbai", filed: "28", convicted: "12", dismissed: "17", pending: "-" },
    { srNo: "4", region: "Kalyan", filed: "17", convicted: "16", dismissed: "1", pending: "-" },
    { srNo: "5", region: "Raigad", filed: "13", convicted: "10", dismissed: "3", pending: "-" },
    { srNo: "6", region: "Kolhapur", filed: "-", convicted: "-", dismissed: "-", pending: "-" },
    { srNo: "7", region: "Pune", filed: "-", convicted: "-", dismissed: "-", pending: "-" },
    { srNo: "8", region: "Aurangabad", filed: "-", convicted: "-", dismissed: "-", pending: "-" },
    { srNo: "9", region: "Nashik", filed: "-", convicted: "-", dismissed: "-", pending: "-" },
    { srNo: "10", region: "Amravati", filed: "-", convicted: "-", dismissed: "-", pending: "-" },
    { srNo: "11", region: "Nagpur", filed: "-", convicted: "-", dismissed: "-", pending: "-" },
    { srNo: "12", region: "Chandrapur", filed: "-", convicted: "-", dismissed: "-", pending: "-" },
    { srNo: "Total", region: "", filed: "146", convicted: "114", dismissed: "32", pending: "-" }
];

const applicationsAirActData: ApplicationStatusData[] = [
    { srNo: "1", region: "Mumbai", filed: "2", favour: "1", against: "1", pending: "-" },
    { srNo: "2", region: "Thane", filed: "1", favour: "-", against: "1", pending: "-" },
    { srNo: "3", region: "Navi Mumbai", filed: "-", favour: "-", against: "-", pending: "-" },
    { srNo: "4", region: "Kalyan", filed: "-", favour: "-", against: "-", pending: "-" },
    { srNo: "5", region: "Raigad", filed: "-", favour: "-", against: "-", pending: "-" },
    { srNo: "6", region: "Kolhapur", filed: "-", favour: "-", against: "-", pending: "-" },
    { srNo: "7", region: "Pune", filed: "-", favour: "-", against: "-", pending: "-" },
    { srNo: "8", region: "Aurangabad", filed: "-", favour: "-", against: "-", pending: "-" },
    { srNo: "9", region: "Nashik", filed: "-", favour: "-", against: "-", pending: "-" },
    { srNo: "10", region: "Amravati", filed: "-", favour: "-", against: "-", pending: "-" },
    { srNo: "11", region: "Nagpur", filed: "-", favour: "-", against: "-", pending: "-" },
    { srNo: "12", region: "Chandrapur", filed: "-", favour: "-", against: "-", pending: "-" },
    { srNo: "Total", region: "", filed: "3", favour: "1", against: "2", pending: "-" }
];

interface EPActComplaintsData {
    srNo: string;
    particulars: string;
    filed: string;
    disposed: string;
    pending: string;
}

interface NGTAppealsData {
    srNo: string;
    particulars: string;
    filed: string;
    convicted: string;
    dismissed: string;
    pending: string;
}

const epActComplaintsData: EPActComplaintsData[] = [
    { srNo: "1", particulars: "Hazardous Waste (Management & Handling Rules, 1989 (as amended in 2000)", filed: "19", disposed: "16", pending: "3" },
    { srNo: "2", particulars: "Recycled Plastic Manufacture & Usage Rules, 1999", filed: "9", disposed: "3", pending: "6" },
    { srNo: "3", particulars: "Coastal Regulation Zone Notification, 1991", filed: "44", disposed: "10", pending: "34" },
    { srNo: "4", particulars: "Bio-Medical Wastes (Management & Handling) Rules, 2000", filed: "32", disposed: "23", pending: "9" },
    { srNo: "5", particulars: "Municipal Solid Waste (Management and Handling)Rules, 2000 and Solid Waste Management Rules,2016.", filed: "37", disposed: "17", pending: "20" },
    { srNo: "6", particulars: "The then EIA Notification, 1994 as amended on 7/7/2004 and EIA Notification.14/09/2006", filed: "289", disposed: "100", pending: "189" },
    { srNo: "7", particulars: "Noise Pollution(Regulation and Control) Rules,2000", filed: "367", disposed: "10", pending: "357" },
    { srNo: "Total", particulars: "", filed: "797", disposed: "179", pending: "618" }
];

const ngtAppealsData: NGTAppealsData[] = [
    { srNo: "1", particulars: "The National Green Tribunal, Delhi /Pune", filed: "106", convicted: "-", dismissed: "46", pending: "60" }
];

const OldStatisticalDetails = () => {
    return (
        <>
            <PageBanner image="/assets/standingorders.svg" title="Old Statistical Details" />
            <section className="w-full flex justify-center py-16 bg-white font-family-helvetica">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="bg-white rounded-[20px] border border-gray-100 p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] min-h-[400px]">
                        <h2 className="text-[24px] font-bold text-gray-800 mb-2 border-b border-gray-100 pb-4 uppercase tracking-wide">
                            A SINE VIEW - ACTIONS - LEGAL ACTION STATUS
                        </h2>

                        <div className="mb-12">
                            <div className="text-center mb-6">
                                <h3 className="font-bold text-gray-800 mb-1">Action Status : 2020</h3>
                                <p className="text-sm text-gray-600">Complaints filed under Section 43, 44 Read With Section 25 & 26 of the Water (P. & C.P.) Act, 1974 upto 31/12/2022</p>
                            </div>

                            <div className="border border-gray-200 rounded-[35px] overflow-hidden w-full">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-100 bg-gray-50/30">
                                            <th className="py-4 px-4 text-left w-[8%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">Sr. No.</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[18%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">Name of the Region</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[18%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No. of Cases Filed</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[18%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No. of Cases Convicted</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[20%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No. of Cases Dismissed / Acquitted</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[18%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No. of Cases Pending</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {actionStatusData.map((row, idx) => (
                                            <tr key={idx} className={`hover:bg-gray-50/50 transition-colors ${row.srNo === 'Total' ? 'bg-gray-50 font-bold' : ''}`}>
                                                <td className="py-3 px-6 text-[13px] text-gray-600 font-medium">{row.srNo}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-800 font-medium">{row.region}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.filed}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.convicted}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.dismissed}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.pending}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-[20px] font-bold text-gray-800 mb-6 uppercase leading-snug">
                                APPLICATIONS FILED UNDER SUB-SECTION (1) OF SECTION 33 OF THE WATER (PREVENTION AND CONTROL OF POLLUTION) ACT, 1974 UPTO 31/12/2022
                            </h2>

                            <div className="border border-gray-200 rounded-[35px] overflow-hidden w-full">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-100 bg-gray-50/30">
                                            <th className="py-4 px-4 text-left w-[8%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">Sr. No.</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[18%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">Name of the Region</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[18%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No.of Applications Filed.</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[20%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No.of Applications in which final order issued in favour of the Board</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[18%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No.of Applications decided against the Board</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[18%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No.of Applications pending in the Court</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {applicationStatusData.map((row, idx) => (
                                            <tr key={idx} className={`hover:bg-gray-50/50 transition-colors ${row.srNo === 'Total' ? 'bg-gray-50 font-bold' : ''}`}>
                                                <td className="py-3 px-6 text-[13px] text-gray-600 font-medium">{row.srNo}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-800 font-medium">{row.region}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.filed}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.favour}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.against}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.pending}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-[20px] font-bold text-gray-800 mb-6 uppercase leading-snug">
                                COMPLAINTS FILED UNDER SECTION 37 READ WITH SECTION 21 OF THE AIR (PREVENTION AND CONTROL OF POLLUTION) ACT, 1981 UPTO 31/12/2022
                            </h2>

                            <div className="border border-gray-200 rounded-[35px] overflow-hidden w-full">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-100 bg-gray-50/30">
                                            <th className="py-4 px-4 text-left w-[8%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">Sr. No.</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[18%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">Name of the Region</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[18%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No.of Cases Filed</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[18%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No.of Cases Convicted</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[20%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No.of Cases Dismissed</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[18%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No.of Cases Pending</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {complaintsAirActData.map((row, idx) => (
                                            <tr key={idx} className={`hover:bg-gray-50/50 transition-colors ${row.srNo === 'Total' ? 'bg-gray-50 font-bold' : ''}`}>
                                                <td className="py-3 px-6 text-[13px] text-gray-600 font-medium">{row.srNo}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-800 font-medium">{row.region}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.filed}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.convicted}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.dismissed}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.pending}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-[20px] font-bold text-gray-800 mb-6 uppercase leading-snug">
                                APPLICATIONS FILED UNDER SECTION 22A OF THE AIR (PREVENTION AND CONTROL OF POLLUTION) ACT, 1981 UPTO 31/12/2022
                            </h2>

                            <div className="border border-gray-200 rounded-[35px] overflow-hidden w-full">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-100 bg-gray-50/30">
                                            <th className="py-4 px-4 text-left w-[8%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">Sr. No.</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[18%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">Name of the Region</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[18%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No.of Applications filed</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[20%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No.of Applications decided in favour of the Board</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[18%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No.of Applications against the Board</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[18%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No.of Applications pending</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {applicationsAirActData.map((row, idx) => (
                                            <tr key={idx} className={`hover:bg-gray-50/50 transition-colors ${row.srNo === 'Total' ? 'bg-gray-50 font-bold' : ''}`}>
                                                <td className="py-3 px-6 text-[13px] text-gray-600 font-medium">{row.srNo}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-800 font-medium">{row.region}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.filed}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.favour}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.against}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.pending}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-[20px] font-bold text-gray-800 mb-6 uppercase leading-snug">
                                COMPLAINTS FILED UNDER SECTION 15 OF THE ENVIRONMENT (PROTECTION) ACT, 1986 UPTO 31/12/2022
                            </h2>

                            <div className="border border-gray-200 rounded-[35px] overflow-hidden w-full">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-100 bg-gray-50/30">
                                            <th className="py-4 px-4 text-left w-[8%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">Sr. No.</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[44%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">Particulars</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[16%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No.of Cases Filed</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[16%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No.of Cases Disposed off</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[16%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No.of Cases Pending</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {epActComplaintsData.map((row, idx) => (
                                            <tr key={idx} className={`hover:bg-gray-50/50 transition-colors ${row.srNo === 'Total' ? 'bg-gray-50 font-bold' : ''}`}>
                                                <td className="py-3 px-6 text-[13px] text-gray-600 font-medium">{row.srNo}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-800 font-medium leading-relaxed">{row.particulars}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.filed}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.disposed}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.pending}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-[20px] font-bold text-gray-800 mb-6 uppercase leading-snug">
                                APPEALS FILED BEFORE THE NATIONAL GREEN TRIBUNAL , DELHI / PUNE UPTO 30/06/2014
                            </h2>

                            <div className="border border-gray-200 rounded-[35px] overflow-hidden w-full">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-100 bg-gray-50/30">
                                            <th className="py-4 px-4 text-left w-[8%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">Sr. No.</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[36%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">Particulars</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[14%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No.of Cases Filed</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[14%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No.of Cases Convicted</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[14%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No.of Cases Dismissed</div>
                                            </th>
                                            <th className="py-4 px-2 text-left w-[14%]">
                                                <div className="text-[13px] font-bold text-gray-700 bg-gray-100/50 rounded-lg py-2 px-3">No.of Cases Pending</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {ngtAppealsData.map((row, idx) => (
                                            <tr key={idx} className={`hover:bg-gray-50/50 transition-colors ${row.srNo === 'Total' ? 'bg-gray-50 font-bold' : ''}`}>
                                                <td className="py-3 px-6 text-[13px] text-gray-600 font-medium">{row.srNo}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-800 font-medium">{row.particulars}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.filed}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.convicted}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.dismissed}</td>
                                                <td className="py-3 px-4 text-[13px] text-gray-600">{row.pending}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OldStatisticalDetails;
