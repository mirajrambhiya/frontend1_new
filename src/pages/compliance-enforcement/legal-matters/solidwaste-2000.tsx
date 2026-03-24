import React from 'react';
import PageBanner from '../../../components/PageBanner';

interface SolidWasteData {
    caseNo: string;
    orderDate: string;
    particulars: string;
    link?: string;
}

const solidWasteData: SolidWasteData[] = [
    {
        caseNo: "39/2003 7308/2003",
        orderDate: "",
        particulars: "Bombay Environmental Action Group for Protection of Environement in Mahabaleshwar and Pachgani",
        link: "#"
    },
    {
        caseNo: "",
        orderDate: "",
        particulars: "Bombay Environmental Action Group for implementation of Mahabaleshwar-Panchgani Environmental sensitive Notification.",
        link: "#"
    }
];

const SolidWaste2000 = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="MUMBAI BENCH- THE MUNICIPAL SOLID WASTES (M&H ) RULES, 2000"
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
                            {solidWasteData.map((row, idx) => (
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

export default SolidWaste2000;
