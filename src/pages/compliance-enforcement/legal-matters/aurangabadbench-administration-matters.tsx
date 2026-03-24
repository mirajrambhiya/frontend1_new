import React from 'react';
import PageBanner from '../../../components/PageBanner';

interface AurangabadAdminMattersData {
    caseNo: string;
    orderDate: string;
    particulars: string;
    link?: string;
}

const aurangabadAdminMattersData: AurangabadAdminMattersData[] = [
    {
        caseNo: "W.P.No.5880/2012",
        orderDate: "20/09/2013",
        particulars: "Shri Pratap MahadeoRao Garje V/s State of Maharashtra and Others",
        link: "#"
    },
    {
        caseNo: "W.P.No.8241/2011",
        orderDate: "01/02/2012",
        particulars: "Shri Vinod Deshmukh V/s State of Maharashtra and Others",
        link: "#"
    },
    {
        caseNo: "WP.No.2443/1993",
        orderDate: "07/02/1996",
        particulars: "Bhagwanrao S/o, Harisingh Shira V/s The M.P.C.Board",
        link: "#"
    }
];

const AurangabadBenchAdministrationMatters = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="AURANGABAD BENCH- ADMINISTRATION MATTERS"
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
                                <th className="py-6 px-6 text-left w-[20%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        Order Date
                                    </div>
                                </th>
                                <th className="py-6 px-6 text-left w-[60%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        particulars
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {aurangabadAdminMattersData.map((row, idx) => (
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
                                                className="hover:underline cursor-pointer text-[#0085E2] font-medium"
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

export default AurangabadBenchAdministrationMatters;
