import React from 'react';
import PageBanner from '../../../components/PageBanner';

interface EnvironmentAppellateData {
    caseNo: string;
    orderDate: string;
    particulars: string;
    link?: string;
}

const environmentAppellateData: EnvironmentAppellateData[] = [
    {
        caseNo: "Appeal No. 2014/C.R.50/T.C.4",
        orderDate: "01/11/2014",
        particulars: "M/s.Chitrali Properties Pvt. Ltd V/s MPCB",
        link: "#"
    },
    {
        caseNo: "AppealNo.44/2009",
        orderDate: "17/03/2010",
        particulars: "Devendra Kamble and Others V/s The State Environment Impact Assessment Authority and Others",
        link: "#"
    },
    {
        caseNo: "Appeal No.15/2009",
        orderDate: "12/02/2010",
        particulars: "Stalin Dayanand, Bhandup, Mumbai V/s Ministry of Environment and Forests,Govt of India.",
        link: "#"
    },
    {
        caseNo: "Appeal No.39/2009",
        orderDate: "31/12/2009",
        particulars: "Shri Dattaram Tandel and Others V/s.M/s.Shivalik Ventures.",
        link: "#"
    }
];

const EnvironmentAppellate = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="ORDER PASSED BY OTHER FORUMS -NATIONAL ENVIRONMENT APPELLATE AUTHORITY"
                image="/assets/standingorders.svg"
            />

            <div className="max-w-[1280px] mx-auto px-4 py-12">
                <div className="border border-gray-200 rounded-[35px] overflow-hidden w-full shadow-sm">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                <th className="py-6 px-6 text-left w-[25%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        Case No.
                                    </div>
                                </th>
                                <th className="py-6 px-6 text-left w-[20%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        Order Date
                                    </div>
                                </th>
                                <th className="py-6 px-6 text-left w-[55%]">
                                    <div className="text-[14px] font-bold text-gray-800">
                                        particulars
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {environmentAppellateData.map((row, idx) => (
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

export default EnvironmentAppellate;
