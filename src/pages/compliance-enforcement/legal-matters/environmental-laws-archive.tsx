
import PageBanner from '../../../components/PageBanner';

interface EnvironmentalLawData {
    caseNo: string;
    orderDate: string;
    particulars: string;
    link?: string;
    isHeader?: boolean;
}

const environmentalLawsData: EnvironmentalLawData[] = [
    {
        caseNo: "C No.375/2012",
        orderDate: "22/2/2017",
        particulars: "Paryavaran Suraksha Samiti & Anr. v/s Union of India & Ors.",
        link: "#"
    },
    {
        caseNo: "18394-18395 of 2012",
        orderDate: "13/05/2014",
        particulars: "Mumbai Waste Management Ltd. V/s Sec.of Environment, Govt. of India.",
        link: "#"
    },
    {
        caseNo: "SLP No.9874of2012",
        orderDate: "04/03/2013",
        particulars: "Union of India and Ors. vs Alok Pratap Singh and Ors",
        link: "#"
    },
    {
        caseNo: "C.No.657/1995",
        orderDate: "06/07/2012",
        particulars: "Writ Petition (Civil) No.657/1995 Research Foundation for Science Technology and Natural Resource Policy V/s Union of India.",
        link: "#"
    },
    {
        caseNo: "",
        orderDate: "",
        particulars: "Information in respect of Abettoirs / Slaughter Houses",
        link: "#",
        isHeader: true
    },
    {
        caseNo: "C.A.1310/2011",
        orderDate: "07/04/2012",
        particulars: "M/s. Mumbai Waste Management Ltd. (Ramky Group)V/s.Secretary of Environment, Govt of India and W.P.No.5846 of 2011with C A.No.2051 of 2011, M/s. SMS infrastructure Ltd.V/s. S.O.M. and Others",
        link: "#"
    },
    {
        caseNo: "SLP No.25530/2004",
        orderDate: "24/12/2009",
        particulars: "SLP No. 25530 of 2004 filed by Save Hadapsar Citizens Committee V/s State of Maharashtra and others (MPCB)",
        link: "#"
    }
];

const EnvironmentalLawsArchive = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="Environmental Laws"
                image="/assets/standingorders.svg"
            />

            <div className="max-w-[1280px] mx-auto px-4 py-12">
                <div className="border border-gray-200 rounded-[35px] overflow-hidden w-full shadow-sm">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                <th className="py-6 px-6 text-left w-[20%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        Case No.
                                    </div>
                                </th>
                                <th className="py-6 px-6 text-left w-[15%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        Order Date
                                    </div>
                                </th>
                                <th className="py-6 px-6 text-left w-[65%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        particulars
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {environmentalLawsData.map((row, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-5 px-6 text-[14px] text-gray-600 font-medium align-top">
                                        {row.caseNo}
                                    </td>
                                    <td className="py-5 px-6 text-[14px] text-gray-600 font-medium align-top">
                                        {row.orderDate}
                                    </td>
                                    <td className="py-5 px-6 text-[14px] leading-relaxed align-top">
                                        {row.link ? (
                                            <a
                                                href={row.link}
                                                className={`hover:underline cursor-pointer ${row.isHeader ? 'text-[#0085E2] font-semibold' : 'text-[#0085E2] font-medium'}`}
                                            >
                                                {row.particulars}
                                            </a>
                                        ) : (
                                            <span className="text-gray-700">{row.particulars}</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EnvironmentalLawsArchive;
