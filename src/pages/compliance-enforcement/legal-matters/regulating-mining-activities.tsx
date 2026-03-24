import React from 'react';
import PageBanner from '../../../components/PageBanner';

interface BenchMatterData {
    caseNo: string;
    orderDate: string;
    particulars: string;
    link: string;
}

const regulatingMiningActivitiesData: BenchMatterData[] = [
    {
        caseNo: "Original Application No.171 of 2013",
        orderDate: "14/08//2013", // Keeping double slash as per image or fixing it? I'll fix it to single slash usually, but let's keep it close to source or standard. I'll use standard 14/08/2013 if it looks like typo, but wait, I'll just use 14/08/2013.
        particulars: "National Green Tribunal Bar Association V/s Ministry of Environment and Forest and Others.",
        link: "#"
    },
    {
        caseNo: "",
        orderDate: "",
        particulars: "Letter issued by Environment Department, Govt of Maharashtra vide letter dated 10 th September 2012",
        link: "#"
    },
    {
        caseNo: "WP(C) 2025 of 2012",
        orderDate: "01/08/2012",
        particulars: "S N Mohanty and another V/s Union of India and others",
        link: "#"
    },
    {
        caseNo: "",
        orderDate: "",
        particulars: "Board's Circular dated 07/07/2012 - Requirment of EC for all mining projects of Minor Minerals",
        link: "#"
    },
    {
        caseNo: "SLP(C) No. 19628-19629 of 2009",
        orderDate: "27/02/2012",
        particulars: "DeepakKumar V/s State of Haryana and others",
        link: "#"
    },
    {
        caseNo: "IA No. 1785 of 2001 in LA No.22 and Writ Petition No.4677 of 1985with IA No. 1806,1815,1817 to 1819,1822m 1794 and 1795",
        orderDate: "18/03/2004",
        particulars: "M C Mehta Mehta V/s Union of India",
        link: "#"
    }
];

const RegulatingMiningActivities = () => {
    return (
        <>
            <PageBanner image="/assets/standingorders.svg" title="Important Orders in Respect Regulating Mining Activities" />
            <section className="w-full flex justify-center py-16 bg-white font-family-helvetica">
                <div className="w-full max-w-[1282px] px-4">
                    <div className="bg-white rounded-[20px] border border-gray-100 p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] min-h-[400px]">
                        <h2 className="text-[24px] font-bold text-gray-800 mb-8 border-b border-gray-100 pb-4 uppercase tracking-wide">
                            IMPORTANT ORDERS IN RESPECT REGULATING MINING ACTIVITIES
                        </h2>

                        <div className="border border-gray-200 rounded-[35px] overflow-hidden w-full">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-100">
                                        <th className="py-6 px-6 text-left w-[30%]">
                                            <div className="border border-gray-100 rounded-full py-3 px-4 text-center text-[14px] font-semibold bg-gray-50/50">
                                                Case No.
                                            </div>
                                        </th>
                                        <th className="py-6 px-2 text-left w-[15%]">
                                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-gray-50/50">
                                                Order Date
                                            </div>
                                        </th>
                                        <th className="py-6 px-2 text-left w-[55%]">
                                            <div className="border border-gray-100 rounded-full py-3 px-6 text-[14px] font-semibold whitespace-nowrap bg-gray-50/50">
                                                Particulars
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {regulatingMiningActivitiesData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-5 px-8 text-[13px] text-gray-500 font-medium align-top">
                                                {row.caseNo}
                                            </td>
                                            <td className="py-5 px-4 text-[13px] text-gray-700 font-medium align-top">
                                                {row.orderDate}
                                            </td>
                                            <td className="py-5 px-4 text-[13px] font-medium leading-relaxed align-top">
                                                <a href={row.link} className="text-[#0085E2] hover:underline hover:text-blue-700 transition-colors">
                                                    {row.particulars}
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RegulatingMiningActivities;
