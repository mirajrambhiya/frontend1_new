import React from 'react';
import PageBanner from '../../../components/PageBanner';

interface NagpurBenchWaterActData {
    caseNo: string;
    orderDate: string;
    particulars: string;
    link?: string;
}

const nagpurBenchWaterActData: NagpurBenchWaterActData[] = [
    {
        caseNo: "PIL No.52/2012",
        orderDate: "27/02/2013",
        particulars: "M/s.Shobhatai Padanvis Vs Govt. of India & Others",
        link: "#"
    },
    {
        caseNo: "WP 6260of2012",
        orderDate: "06/02/2013",
        particulars: "Suryodaya Paper Mills Pvt.Ltd. against the State of Maharashtra and Ors.",
        link: "#"
    },
    {
        caseNo: "PIL No.29/2010",
        orderDate: "01/08/2011",
        particulars: "Dattatraya Barsagade V/s. Secretary, Revenue Forest Deptt. and Others\"",
        link: "#"
    },
    {
        caseNo: "W.P.No.280/2011",
        orderDate: "13/07/2011",
        particulars: "Star Circlips and Engineering and M.P.CBoard",
        link: "#"
    },
    {
        caseNo: "W.P.No.4452/2009",
        orderDate: "02/03/2010",
        particulars: "Shri Ghansham Ganpat Dupare and 2others V/s. State of Maharashtra and Others.",
        link: "#"
    }
];

const NagpurBenchWaterAct = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="NAGPUR BENCH- WATER ( P & CP) ACT, 1974"
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
                            {nagpurBenchWaterActData.map((row, idx) => (
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

export default NagpurBenchWaterAct;
