import React from 'react';
import PageBanner from '../../../components/PageBanner';

interface NagpurBenchNoisePollutionData {
    caseNo: string;
    orderDate: string;
    particulars: string;
    link?: string;
}

const nagpurBenchNoisePollutionData: NagpurBenchNoisePollutionData[] = [
    {
        caseNo: "W.P.No.1290/2011",
        orderDate: "04/08/2011",
        particulars: "Ansarul Haque V/s Nagpur Municipal Corporation and Others",
        link: "#"
    },
    {
        caseNo: "W.P.No.5135/2007",
        orderDate: "07/07/2010",
        particulars: "The Citizen Forum Maharashtra through its Vice President V/s The Union of India & Others",
        link: "#"
    },
    {
        caseNo: "PIL.No.632/2004",
        orderDate: "",
        particulars: "Congress Nagar Citizens Association, Nagpur petition for Noise Pollution Control",
        link: "#"
    }
];

const NagpurBenchNoisePollution = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="NAGPUR BENCH- THE NOISE POLLUTION (REGULATION AND CONTROL) RULES, 2000"
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
                            {nagpurBenchNoisePollutionData.map((row, idx) => (
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

export default NagpurBenchNoisePollution;
