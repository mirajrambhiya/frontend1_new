import React from 'react';
import PageBanner from '../../../components/PageBanner';

interface AntiCorruptionData {
    caseNo: string;
    orderDate: string;
    particulars: string;
    link?: string;
}

const antiCorruptionData: AntiCorruptionData[] = [
    {
        caseNo: "Special Case No.01/2006",
        orderDate: "26/04/2001",
        particulars: "State of Maharashtra through Anti Corruptin Bureau, Nashik V/s. Dilip M. Chaukhande.",
        link: "#"
    }
];

const AntiCorruption = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="ORDERS PASSED IN ANTI CORRUPTION DEPARTMENT CASES"
                image="/assets/standingorders.svg"
            />

            <div className="max-w-[1280px] mx-auto px-4 py-8 md:py-12">
                <div className="bg-white rounded-[24px] border border-gray-100 p-4 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
                    <h2 className="text-[20px] md:text-[24px] font-bold text-gray-800 mb-6 md:mb-8 border-b border-gray-100 pb-4 uppercase tracking-wide">
                        ORDERS PASSED IN ANTI CORRUPTION DEPARTMENT CASES
                    </h2>
                    <div className="border border-gray-200 rounded-[20px] md:rounded-[35px] overflow-hidden w-full overflow-x-auto">
                        <table className="w-full border-collapse min-w-[600px]">
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
                                {antiCorruptionData.map((row, idx) => (
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
        </div>
    );
};

export default AntiCorruption;
