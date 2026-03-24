import React from 'react';
import PageBanner from '../../../components/PageBanner';

interface CivilJudgeData {
    caseNo: string;
    orderDate: string;
    particulars: string;
    link?: string;
}

const civilJudgeData: CivilJudgeData[] = [
    {
        caseNo: "81/2014",
        orderDate: "05/04/2017",
        particulars: "MPCB VS Padmashri builder",
        link: "#"
    },
    {
        caseNo: "430/2015",
        orderDate: "06/09/2016",
        particulars: "MPCB VS Bhaveshvar PVT Ltd",
        link: "#"
    },
    {
        caseNo: "12/2016",
        orderDate: "11/01/2016",
        particulars: "MPCB VS Hotel Tip Top international Pvt Ltd",
        link: "#"
    },
    {
        caseNo: "Writ Petition No.2624/2001",
        orderDate: "24/01/2011",
        particulars: "The Grahak Panchayat, Hingaghat through its President V/s. The State of Maharashtra through the Collector, Wardha and Others",
        link: "#"
    },
    {
        caseNo: "355/2009",
        orderDate: "30/10/2010",
        particulars: "Smt. Kashibai Appaso Kosti V/s Maharashtra State Electricity Co.Ltd.",
        link: "#"
    }
];

const CivilJudge = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageBanner
                title="ORDER PASSED BY TRIAL COURTS UNDER VARIOUS ENVIRONMENT LAW'S BEFORE THE :-CIVIL JUDGE/JR.DIVISION/SR.DIVISION"
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
                                        Particulars
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {civilJudgeData.map((row, idx) => (
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

export default CivilJudge;
